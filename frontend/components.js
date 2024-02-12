import { localize  } from "./util.js"



/**
 * Componente para mostrar un icono
 * @param {String} icon Nombre del icono
 * @param {String} color Color del icono
 * @param {function} onclick Función a ejecutar al hacer click
 * @param {String} size Tamaño del icono mini | tiny | small | medium | large | huge | massive | verymassive
 * @param {Number} opacity Opacidad del icono [0,1]
 * 
 * El nombre del icono se saca de 
 * https://fonts.google.com/icons
 */
function Icon() {
    
    let sizes = {
        'mini':'font-size:14px',
        'tiny':'font-size:16px',
        'small':'font-size:18px;',
        'medium':'',
        'large':'font-size:26px',
        'huge':'font-size:32px',
        'massive':'font-size:50px',
        'verymassive':'font-size:100px'
    }

    return {
        view:(vnode)=>{
            return m("span",{
                class:'material-icons', 
                onclick:vnode.attrs.onclick,
                style: vnode.attrs.style || `color:${vnode.attrs.color || 'black'};opacity:${vnode.attrs.opacity || 1};${sizes[vnode.attrs.size || 'medium']}!important;`,
                
            }, vnode.attrs.icon)
        }
    }
}
/** 
*
* Componente para mostrar un botón
*
* @param {String} color Color del botón
* @param {function} onclick Función a ejecutar al hacer click
* @param {String} style Estilos del botón (primary, secondary, danger...)
*
*/
function Button(){

    return {
        view:(vnode)=>{
            return m("button",{
                class:`bg-${vnode.attrs.color || 'black'} p-8 lg:p-4  text-3xl lg:text-xl ` + (vnode.attrs.class || ''),
                onclick:vnode.attrs.onclick,
                style:vnode.attrs.style
            }, vnode.children)
        }
    }
}


function Section(){

    return {
        view:(vnode)=>{
            return m("div",{
                class:` p-4 shadow-lg` + (vnode.attrs.class || ''),
                style:vnode.attrs.style,
                id: vnode.attrs.id
            }, vnode.children)
        }
    }
}


/**
 * Componente Input
 * @param { String } size  small | large
 * Fala pegarle un repaso brutal
 */
function Input() {
    let types = {
        "textarea": { class: "uk-textarea" },
        "input": { class: "uk-input", type: "text" },
        "password": { class: "uk-input", type: "password" },
        "number": { class: "uk-input", type: "number" },
        'time': { class: 'uk-input', type:'time'},
        'checkbox': { class: 'uk-checkbox', type:'checkbox'},
        'date': {class:'uk-input',type:'date'}
    }

    let inputclass = ' block p-8 lg:p-4 w-full  border-2 border-b-4 focus:border-green-800 text-4xl lg:placeholder:text-xl placeholder:text-3xl  placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-green-600 '

    //let inputclass = "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"

    let labelclass = "block text-4xl lg:text-xl font-medium leading-6 text-gray-900 mb-4 lg:mb-2 flex items-end"
    
    return {
        view: (vnode) => {
            let { data, id, name, type = 'input', oninput, style, rows,required, label } = vnode.attrs
            
            return [
                m(".flex.flex-col.w-full.items-start",
                label ?  m("label",{class:labelclass}, localize(label), (required ? m('.text-red-900.ml-1.text-4xl.lg:text-xl',' *'):'')) : null,
                type != "textarea" ?                  
                    m("input",
                    {
                        class: inputclass + (vnode.attrs.class || ''),
                        //style: style || '',
                        placeholder: vnode.attrs.placeholder || '',
                        id: id || undefined,
                        type: type,
                        value: data[name],
                        min:vnode.attrs.min,
                        width: vnode.attrs.width || undefined,
                        autocomplete: "off",
                        oninput: (e) => {
                            if(type =='checkbox'){ data[name] = e.target.checked}
                            else if (type == "number") { data[name] = Number(e.target.value) }
                            else { data[name] = e.target.value; }
                            
                            if (oninput) oninput(e)
                        },
                    }
                ) :
                m("textarea",
                    {
                        class: inputclass + (vnode.attrs.class || ''),
                        placeholder: vnode.attrs.placeholder || '',
                        style: style || '',
                        rows: rows || "2",
                        value: data[name],
                        oninput: (e) => { data[name] = e.target.value; if (oninput) oninput(e) },
                    }
                ))
            ]
        }
    }
}


function Form(){


    return {
        view:(vnode)=>{

            return  m("form",{
                class:""
            }

            
            )
        }
    }
}


function LegacyIcon(){

    let outlineclass ="p-2 bg-gray-200 bg-opacity-50 rounded-full  flex items-center"

    return {
        view:(vnode)=>{
            return  m("div", {class: outlineclass}, 
                m("div",{class: "border-white border-2 p-2 rounded-full bg-white bg-opacity-50 flex items-center"},
                    m("img", {src: "assets/campounido_logo.png", class: "w-20 lg:w-10"}),
                    m("h1", {class: "text-6xl lg:text-xl align-center  mr-4"}, "El Campo Unido"),
                )
            )
        }
    }
}


/*
*
*   TODO: GRID
*/
function Grid(){

    return {
        view:(vnode)=>{
            let { cols, rows, mcols, mrows} = vnode.attrs

            return m("div",{

                class: "grid "

            })

        }
    }
}


//children es un array de ['value':'x', 'label':1], tmb puede no llevar value y ser solo las labels [1,2,3,4]
function Select() {
    let data, name;

    let selectedoption = null

    let selectclass = ' block p-8 lg:p-4 w-full  border-2 border-b-4 bg-white text-4xl focus:border-green-800  placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-green-600 '

    //let inputclass = "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:ring-green-600"

    let labelclass = "block text-4xl lg:text-xl font-medium leading-6 text-gray-900 mb-4 lg:mb-2 flex items-end"
    

   // let selectclass = "block w-full leading-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600  sm:text-sm sm:leading-6"

    return {
        view: (vnode) => {
            let {required,label,placeholder, disabled} =  vnode.attrs   


            data = vnode.attrs.data
            name = vnode.attrs.name

            return  m(".flex.flex-col.w-full",
                label ?  m("label",{class:labelclass}, localize(label), (required ? m('.text-red-900.ml-1.text-4xl.lg:text-xl',' *'):'')) : null,
                m("select",
                {
                    disabled: disabled,
                    placeholder:vnode.attrs.placeholder,
                    onchange: (e) => {
                        if(data && name != undefined){
                            data[name] = e.target.value;
                            if (data[name].startsWith('[object')) {
                                data[name] = vnode.children[e.target.selectedIndex].value
                            }
                        }
                        vnode.attrs.onchange ? vnode.attrs.onchange(e) : null
                    },
                    class: selectclass,
                    value:  data && name != undefined ? data[name] || ''  : placeholder?placeholder: '',
                },
                [
                    placeholder ?  m("option",{disabled:true}, placeholder):null,
                    vnode.children.map((child, i) => {
                        if (child.value || child.name) {
                            return m("option", { value: child.value || child.name }, child.label || child.title)
                        } else {
                            return m("option", child)
                        }
                    })
                ]
            ))
        }
    }
}


export {Icon, Button, Section, Input, LegacyIcon, Select}