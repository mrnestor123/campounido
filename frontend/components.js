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

    let inputclass = 'w-full p-4 '

    return {
        view: (vnode) => {
            let { data, id, name, type = 'input', oninput, style, rows, label } = vnode.attrs
            
            return [
                m(".flex.flex-col.w-full",
                label ?  m("p.mb-2", localize(label)) : null,
                type != "textarea" ?                  
                    m("input",
                    {
                        class: inputclass,
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
                        class: types[type].class,
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


export {Icon, Button, Section, Input, LegacyIcon}