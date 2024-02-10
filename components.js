
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

export {Icon, Button, Section}