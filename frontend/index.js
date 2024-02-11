// EL  INDEX TIENE LAS RUTAS Y EL LAYOUT

import { Icon, LegacyIcon } from "./components.js"
import { LandingPage, ProductsPage } from "./pages.js"


// La página web puede tener otro html y otro enrutador !!
m.route(document.body, "/", {
    "/": {
        render: function (vnode) {
            return m(Layout, vnode.attrs, LandingPage)
        },
    },

    '/productos':{
        render: function (vnode) {
            return m(Layout, vnode.attrs, ProductsPage)
        }
    }
    
})


/// HACEMOS LOGIN SOLO EN TENSTAGES-MANAGEMENT !!
function Layout() {
    // DE MOMENTO PASAMOS EL USUARIO ASI !!!

    function TopBar(){
        // DEPENDIENDO DE LA PÁGINA CAMBIARÁ EL COLOR DEL NAVBAR
        let navclass = "bg-transparent pr-4 pl-4 flex justify-between items-center z-10  top-0 w-full"
        let path = m.route.get()

        return {
            view: (vnode) => {
                return m("nav",{ class: navclass}, [
                    // LOGO
                    m("div"),
                    m("div",{class:"flex items-center"},
                        m("img", {src: "assets/campounido_logo.png", class: "w-10"}),
                        m("h2", {class: " font-bold text-black mr-4"}, "El campo unido"),
                    ),

                    m("div",{class: 'cursor-pointer p-4 bg-gray-600 bg-opacity-50 rounded-full m-4'},
                        // CART
                        m(Icon,{icon:'shopping_bag', size:'small', color:'white', onclick:()=>{alert('Cart')}}),
                    )
                ])
            }
        }
    }

    function Navbar(){
        // DEPENDIENDO DE LA PÁGINA CAMBIARÁ EL COLOR DEL NAVBAR
        let navclass = "flex justify-center items-center z-10 lg:top-0 w-full p-2 absolute left-0 right-0 bg-transparent"
        let path = m.route.get()
       

        // LOGO
        return {
            view: (vnode) => {
                return m("nav",{ class: navclass}, [
                    m(LegacyIcon),
                    
                ])
            }
        }
    }


    function Footer(){

        return {
            view : (vnode) => {
                return [
                    m("footer",{class:"p-8 text-bold"}, "FOOTER FOOOTER")

                ]
            }
        }
    }

    return {
        view: (vnode) => {
            return [
                // CREAR UN NAVBAR JEJE
               // m(TopBar),
                m(Navbar),
                
                vnode.children.map((child) => {
                    return m("main",{class:""}, [
                        m(child, vnode.attrs)
                    ])
                }),

                //m(Footer)
            ]
        }
    }
}

