import { Button, Icon, Input, LegacyIcon, Section } from "./components.js"


function LandingPage(){

    // PARA EL OVERLAY DEL TEXTO Y LOS BOTONES
    let textclass = "text-white p-8 lg:p-4 flex flex-col mb-80 lg:mb-20 ml-10 lg:ml-10 mr-10 z-10 fadein w-9/10 lg:max-w-3/4 "

    let buttonclass = "text-white w-full text-bold  lg:relative left-0 bottom-0 right-0"

    // CONTENEDOR DE FUERA
    let sectionclass = "relative w-full overflow-hidden h-dvh relative flex flex-col justify-end items-start "

    let showRequestForm = false

    return {
        view: (vnode) => {
            return [
                showRequestForm ? m(RequestForm) :  null,

                m(Carousel),
                // PARA UNIRSE
                /*m("div", {style:"height: 15vh;"},

                    m("h1", {class: "text-4xl font-bold text-center p-8"}, "Únete a nosotros"),
                    m("h2", {class: "text-2xl text-center"}, "Productos de la tierra, de la huerta, de la granja."),


                
                ),*/

                m(ContactSections),




            ]
        }
    }

    function Carousel(){

        let slides = [{
            'image':`assets/${ window.innerWidth > 1000? "naranjo_ordena": "naranjo_movil"}.jpg`, 
            'title':'UNIRNOS Y COLABORAR JUNTOS',
            'text':`Para preservar lo 
            valioso, para cuidar y proteger nuestras tierras.`
        }]

        let imageclass = "w-full object-cover shadow-lg object-left h-dvh overflow-hidden absolute inset-0"

        return {
            view : (vnode) =>{
                return slides.map((slide) => {
                    return m("div", { class: sectionclass, id:'carousel'}, [
                        m("img", { class: imageclass, style:"width:100vw;", id:'animated-photo', src: slide.image, alt: slide.title}),
                        m("div", { class: textclass }, [
                            m("h1",{class:" text-lime align-left text-white", style:"font-family:'Grotesk_bold';"}, slide.title.toUpperCase()),
                            m("h2",{ class:"mb-4 text-white align-left", style:"font-family:'Grotesk'"}, slide.text.toUpperCase()),
                            m(Button,{
                                class:'bg-lime-700 hover:bg-lime-950 ' + buttonclass, 
                                onclick:(e)=>{
                                    let element = document.getElementById('whoweare')
                                    element.scrollIntoView({behavior: "smooth", block: "start", inline: "end"});
                                }
                            }, m("h1",{class:"text-white"},"Quiero saber más")),
                        ])
                    ])
                })
            }
        }
    }


    function ContactSections(){

        //Hace 50 años, tras haber estado emigrando en Brasil, volvió a su tierra natal con mi abuela, 2 hijos más y una por venir.
        //Con "4 pelas" empezó a buscarse la vida. Abrió un taller, compró un campo y poco a poco, con paciencia y esfuerzo, fue expandiéndose hasta tener 10 hectáreas. <br><br>
        let ourstory = `Somos una familia de agricultores que reside en Picassent, Valencia. Todo empezó con un campo de naranjos que plantó mi abuelo.  Con paciencia y mucho trabajo, llegamos a tener 10 hectáreas en campos. <br> <br>
            Me acuerdo cuando era pequeño y nos llevaba a trabajar al campo a mí y a mi hermano. Quitábamos hierbas con la azada, o como él lo llamaba, "la pluma". Yo siempre intentaba escaquearme y le decía "Abuelo, cuando sea mayor te ayudaré" y mi abuelo, riéndose, algunas veces cedía dejándome descansar. <br><br> 
            Ahora que soy mayor, aunque ya no esté, he decidido ayudarle. A preservar y compartir lo que más le gustaba.<br> <br>
            <strong>El campo </strong>`
            
        let objectives = `Este año, hemos tenido que dejar por cultivar la mitad de nuestros campos de granadas porque salía más rentable dejarlos tirados que cultivarlos.<br><br> 
            Tras ver la situación actual y a sabiendas de que mucha gente está igual o peor que nosotros hemos decidido crear El campo unido. <br> <br>
            Nuestro objetivo es conseguir transparentar nuestro trabajo, avanzar y modernizar el campo. Para crear un sistema y conectar al cliente con el agricultor, para que así ningún campo deba ser abandonado.`;

        let imgclass = "w-full object-cover absolute  rounded-lg shadow-lg inset-0 h-dvh "


        let backgroundclass = 'bg-black/70 '

        function UpArrow(){
            return {
                view: (vnode) =>{
                    let {onclick} = vnode.attrs

                    return [
                        m("div", {
                            onclick:onclick, 
                            class:"absolute top-10 lg:top-5 bg-black rounded-full p-4 z-10 cursor-pointer", 
                            style:"left:50%;transform:translateX(-50%)"
                        },
                            m("img", {class: "w-24 lg:w-8", src:"assets/arrow_up.svg"})
                        )
                    ]
                }
            }
        }

        return {
            view : (vnode) => {
                return [
                    m(Section,{class: sectionclass, id:'whoweare'}, [
                        m(UpArrow,{
                            onclick:(e)=> {
                                let element = document.getElementById('carousel')
                                element.scrollIntoView({behavior: "smooth", block: "start", inline: "end"});
                            }
                        }),

                        m("div",{ class: textclass +  backgroundclass},
                            m("h1",{class:"text-white"}, "Nuestra historia"),
                            m("p", {class: "text-justify mt-4 mb-4"}, m.trust(ourstory)),
                            m(Button,{
                                class: buttonclass + ' bg-sky-500 hover:bg-sky-900', 
                                onclick:(e)=> {
                                    //scroll to id objective
                                    let element = document.getElementById('objective')
                                    element.scrollIntoView({behavior: "smooth", block: "start", inline: "end"});
                                }
                            }, m("h1",{class:"text-white"},"En que consiste ?"))
                        ),

                        m("img", {src:`assets/${ window.innerWidth > 1000? "caseta_ordena": "caseta_movil"}.jpg`, class: imgclass, id:'animated-photo'}),

                        
                    ]),
                    
                    m(Section,{class: sectionclass,  id: 'objective'},[
                        //scroll to id objective
                        m(UpArrow,{
                            onclick:(e)=>{
                                let element = document.getElementById('whoweare')
                                element.scrollIntoView({behavior: "smooth", block: "start", inline: "end"});
                            }
                        }),

                        m("img", {src: "assets/granada.jpg", class: imgclass, id:'animated-photo'}),
                        m("div",{class: textclass +  backgroundclass},
                            m("h1",{class:"text-white"}, "Nuestro objetivo"),
                            m("p", {class: "text-justify mt-4 mb-4"}, m.trust(objectives)),

                            m(Button,{
                                onclick:(e)=> showRequestForm =true ,  
                                class:buttonclass + " bg-yellow-500 hover:bg-yellow-900  "
                            }, m("h1",{class:"text-white"},"Quiero unirme o apoyar"))
                        ),

                       
                    ]),

                    /*m("div", {class: "flex justify-between items-center w-full bg-gray-300 p-8"}, [
                        m("div",
                            m("h1", {class: "text-4xl font-bold"}, "¿Qué queremos ofrecer?"),
                            m("p", {class: "text-lg"}, "Productos de la tierra, de la huerta, de la granja.")
                        ),
                        m("img", {src: "assets/huerto_noche.jpg", class: "w-1/3  rounded-lg shadow-lg "})
                    ])*/
                ]
            }
        }
    }

    // FORMULARIO DE UNION, TANTO COMO COMERCIANTE, COMO USUARIO, COMO X
    function RequestForm(){

        let requestData = {}

        let states = {
            selecting_type:0,
            filling_data: 1
        }


        let state = 0;

        let types = {
            customer: 0,
            farmer: 1,
            supplier: 2
        }


        function TypeButton(){
            
            return  {
                view: (vnode)=> {
                    let { image, title, description, type }  = vnode.attrs
                    
                    return m("div", {
                            class: "rounded-lg flex-1 m-4 lg:h-auto relative cursor-pointer",  
                            onclick:(e)=> { 
                                requestData.type = type;
                                state = states.filling_data 
                            }
                        },
                        
                        m("div",{class:"absolute p-4 hover:opacity-0 opacity-9 z-20 inset-0 bg-black/50 flex flex-col items-center justify-center text-white align-center"}, 
                            m("h1.text-white", title),
                            m("p.text-center", description)
                        ),

                        m("img",{ src:image, class:"object-cover h-1/4 w-full lg:h-full"})
                    )
                }
            }
        }

        function BasicForm(){

            return {
                view:(vnode)=>{
                    return [
                        m(Input,{
                            label: 'Nombre',
                            data: requestData,
                            name: 'name'
                        }),
                        m("div.mt-4"),
                        
                        m(Input,{
                            class:'mt-4',
                            label:'Apellidos',
                            data: requestData,
                            name: 'surname'
                        }),

                        m(Input,{
                            class:"mt-4",
                            type:'email',
                            label: "Correo electrónico",
                            data: requestData
                        }),


                        m(Input,{
                            class:"mt-4",
                            type:'email',
                            label: "Correo electrónico",
                            data: requestData
                        })
                    ]
                }
            }
        }

        function FarmerForm(){


        }

        return {
            view: (vnode)=> {
                return m("div",{class:"fixed inset-0 z-20 bg-amber-50 lg:p-4 flex flex-col justify-start h-dvh w-full"},

                    m("div",{class:" p-4 w-full z-30 flex justify-between"},
                        m("img",{src:"assets/close.svg", class:"w-20 lg:w-12 bg-black rounded-full p-2 cursor-pointer"}),
                        // m(LegacyIcon)
                    ),


                    m("div",{class:"absolute top-10 flex justify-end  items-center w-full lg:justify-center", style:"left:50%;transform:translateX(-50%);"},),

                    state == states.selecting_type ? 
                    [   
                        m("div",{class:"flex-1  sm:max-lg:flex-col lg:flex justify-evenly align-center"},
                            m(TypeButton,{
                                title: "Soy consumidor",
                                type: types.customer,
                                description:"Quiero recibir ofertas de productos y novedades",
                                image:'assets/customers.jpg'
                            }),

                            m(TypeButton,{
                                title: "Soy agricultor",
                                type: types.farmer,
                                description:"Quiero ofrecer mis productos a un precio justo.",
                                image:'assets/farmers.jpg'
                            }),

                            m(TypeButton,{
                                title: "Soy comerciante",
                                type: types.supplier,
                                description:"Quiero comprar o almacenar productos al por mayor, quiero recibir ofertas y novedades",
                                image:'assets/warehouse.jpg'
                            })
                        )
                    ] :
                    [
                        m("div",{class:"flex flex-col h-dvh w-full items-center p-4"},
                            m(BasicForm)
                        ),
                    ]
                )
            }
        }
    }
}


function ProductsPage(){


    return {
        view: (vnode) => {

        }
    }
}

export { LandingPage, ProductsPage}