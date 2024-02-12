import { Button, Icon, Input, LegacyIcon, Section,  Select } from "./components.js"


function LandingPage(){

    // PARA EL OVERLAY DEL TEXTO Y LOS BOTONES
    let textclass = "text-white p-8 lg:p-4 flex flex-col mb-80 lg:mb-20 ml-10 lg:ml-10 mr-10 z-10 fadein w-9/10 lg:max-w-3/4 "

    let buttonclass = "text-white w-full text-bold  lg:relative left-0 bottom-0 right-0"

    // CONTENEDOR DE FUERA
    let sectionclass = "relative w-full overflow-hidden h-dvh relative flex flex-col justify-end items-start "

    let showRequestForm = false


    function preloadImages(){
        let images = [
            'assets/customers.jpg',
            'assets/farmers.jpg',
            'assets/warehouse.jpg'
        ]


        images.map((src)=>{
           var img = new Image()

           img.src = src
        })

    }

    return {
        oninit: (vnode) =>{
            preloadImages()
        },
        view: (vnode) => {
            return [
                showRequestForm ? m(RequestForm) :  null,

                m(Carousel),

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
        // Hace 50 años, tras haber estado emigrando en Brasil, volvió a su tierra natal con mi abuela, 2 hijos más y una por venir.
        // Con "4 pelas" empezó a buscarse la vida. Abrió un taller, compró un campo y poco a poco, con paciencia y esfuerzo, fue expandiéndose hasta tener 10 hectáreas. <br><br>
        let ourstory = `Somos una familia de agricultores que reside en Picassent, Valencia. Todo empezó con un campo de naranjos que plantó mi abuelo. Con paciencia y mucho trabajo, llegamos a tener 10 hectáreas en campos. <br> <br>
            Me acuerdo cuando era pequeño y nos llevaba a trabajar al campo a mí y a mi hermano. Quitábamos hierbas con la azada, o como él lo llamaba, "la pluma". Yo siempre intentaba escaquearme y le decía "Abuelo, cuando sea mayor te ayudaré" y mi abuelo, riéndose, algunas veces cedía dejándome descansar. <br><br> 
            Ahora que soy mayor, aunque ya no esté, he decidido ayudarle. A preservar y compartir lo que más le gustaba.<br> <br>
            <strong>El campo</strong>`
            
        let objectives = `Este año, hemos tenido que dejar por cultivar la mitad de nuestros campos de granadas porque salía más rentable dejarlos tirados que cultivarlos.<br><br> 
            Tras ver la situación actual y a sabiendas de que mucha gente está igual o peor que nosotros hemos decidido crear El campo unido. <br> <br>
            Nuestro objetivo es conseguir transparentar nuestro trabajo, avanzar y modernizar el campo. Para crear un sistema en el que podamos conectar al cliente con el agricultor, al agricultor con el comercio local. Para que vuelva a tener el control de su producto y así ningún campo deba ser abandonado.`;

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
                            }, m("h1",{class:"text-white"},"En qué consiste"))
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

        let requestData = {
            'type':'',
            'date':'',
            'community':'',
            'province':'',
            'locality':'',
            'email':'',
            'farmerInfo':''
        }

        let states = {
            selecting_type:0,
            filling_data: 1,
            sent_form:2
        }

        let state = 0;

        let types = {
            customer: 0,
            farmer: 1,
            supplier: 2
        }  

        let typelabels = {
            0: 'Consumidor',
            1: 'Agricultor',
            2: 'Comerciante'
        }

        let typefotos = {
            0: 'assets/customers.jpg',
            1: 'assets/farmers.jpg',
            2: 'assets/grocery_store.png'
        }

        function sendData(){
            console.log('REQUESTDATA', requestData)

            //  SEND  TO API!
            state = states.sent_form

        }

        return {
            oninit:(vnode)=>{
                requestData.date = new Date().toISOString()
            },
            view: (vnode)=> {
                return m("div",{ class:"fixed inset-0 z-20 bg-amber-50 lg:p-4 flex flex-col justify-start h-dvh w-full"},

                    m("div",{ class: " p-4 w-full z-30 flex-none justify-between h-1/10"},
                        m("img",{src:"assets/close.svg",onclick:(e)=> showRequestForm = false, class:"w-20 lg:w-12 bg-black rounded-full p-2 cursor-pointer"}),
                    ),
                    
                    m("div",{ class:"absolute top-10 flex justify-end items-center w-full lg:justify-center", style:"left:50%;transform:translateX(-50%);"}),

                    
                    state == states.selecting_type ? 
                    [   
                        m("div",{class:"grow grid relative sm:max-lg:grid-cols-1 lg:grid-cols-3 sm:max-lg:grid-rows-3 lg:grid-rows-1 gap-4 p-4 grid-flow-row	"},
                            m(TypeButton,{
                                title: "Soy consumidor",
                                type: types.customer,
                                description:"Quiero recibir ofertas y novedades",
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
                                description:"Quiero comprar al por mayor, almacenar o servir como punto de recogida",
                                image:'assets/grocery_store.png'
                            })
                        )
                    ] :

                    state == states.filling_data ?
                    [
                        m("div",{ class:"flex flex-col h-dvh w-full p-4"},
                            m("div",{ class:"flex w-full border-2 border-grey-600 bg-white justify-between items-center mb-8"}, 
                                m("img", { src:typefotos[requestData.type || 0],  class:"ml-4 w-1/4 lg:w-20 aspect-square object-cover" }),

                                m("h2", typelabels[requestData.type]),

                                m(Button,{
                                    class:"bg-sky-500 h-full", 
                                    onclick:(e)=>{
                                        state = 0
                                    }
                                }, m("h3.text-white","Cambiar"))
                            ),  
                            
                            m(BasicForm),      
                        ),
                    ] :
                    /*
                    state == states.filling_farmerdata ?
                    [
                        m("div",{class:"grow flex flex-col h-dvh w-full items-center p-4"},
                            m(FarmerForm),      
                        ),
                    ] :*/

                    m(FinishedPurchase)

                    
                )
            }
        }

        function TypeButton(){
            
            return  {
                view: (vnode)=> {
                    let { image, title, description, type }  = vnode.attrs
                    
                    return m("div", {
                            class: "h-full w-full relative cursor-pointer bg-center bg-no-repeat bg-cover",  
                            style:`background-image:url('${image}');bg-center`,
                            onclick: (e)=> { 
                                requestData.type = type;
                                state = states.filling_data 
                            }
                        },
                        
                        m("div",{ class:"absolute p-4 hover:opacity-0 opacity-9 z-20 inset-0 bg-black/50 flex flex-col items-center justify-center text-white align-center"}, 
                            m("h1.text-white", title),
                            m("p.text-center", description)
                        ),

                       // m("img",{ src:image, class:"object-cover absolute inset-0 z-10 overflow-hidden lg:h-full"})
                    )
                }
            }
        }

        function BasicForm(){

            let error = {};

            let communities =  ['Andalucía','Aragón','Asturias','Cantabria','Castilla-La Mancha','Castilla y León',
            'Cataluña','Extremadura','Galicia','Islas Baleares','Islas Canarias','La Rioja','Madrid',
            'Murcia','Navarra','País Vasco','Comunidad Valenciana']

            let provinces = {
                "Andalucia":["Almería", "Granada","Málaga","Jaén","Córdoba","Sevilla","Cádiz", "Huelva"],
                "Aragón":["Huesca", "Teruel", "Zaragoza"],
                "Asturias":["Asturias"],
                "Cantabria":["Cantabria"],
                "Castilla-la Mancha":["Albacete","Ciudad Real","Cuenca","Guadalajara","Toledo"],
                'Castilla y León':["Ávila","Burgos","León","Palencia","Salamanca","Segovia","Soria","Valladolid", "Zamora"],
                "Cataluña":["Barcelona","Gerona","Lérida", "Tarragona"],
                "Extremadura":["Cáceres","Badajoz"],
                "Galicia":["Santiago","Coruña","Betanzos","Lugo","Mondoñedo","Orense","Tuy"],
                "Islas Baleares":["Mallorca","Cabrera","Menorca","Ibiza", "Formentera"],
                "Islas Canarias":["Santa Cruz de Tenerife ","Las palmas"],
                "La Rioja":["La Rioja"],
                "Madrid":["Madrid"],
                "Navarra":["Navarra"],
                "País Vasco":["Álava","Guipúzcoa","Vizcaya"],
                "Comunidad Valenciana":["Alicante","Valencia","Castellón"]
            }

            function validateEmail(email) {
                var re = /\S+@\S+\.\S+/;
                return re.test(email);
            }

            function checkFields(){
                
                error = {}

                if(!requestData.name) error.name = true 

                if(!requestData.locality) error.locality = true

                if(!requestData.email || !validateEmail(requestData.email)) error.email = true

                if(!requestData.community) error.community = true

                if(requestData.type == types.farmer && !requestData.farmerInfo) error.farmerInfo = true

                if(Object.keys(error) == 0){
                    if(requestData.type == types.farmer){
                        state = states.filling_farmerdata
                    } else {
                        sendData()
                    }
                }
            }

            return {
                view:(vnode)=>{

                    return [
                        m(".flex.flex-col.w-full.border-2.border-grey.p-4.pb-10.bg-white",
                            m("p.mt-8.mb-8.text-center", 
                                requestData.type != types.farmer ?
                                "Introduce tu información de contacto" :
                                "Para posterior uso de la herramienta se verificarán los datos"
                            ),

                            m(".flex.sm:max-lg:flex-col.lg:flex",
                                m(Input,{
                                    oninput:(e)=>{ error.name ? error.name = e.target.value !='' : ''},
                                    class: error.name ? 'border-red-500':'',
                                    required:true,
                                    label: 'Nombre completo',
                                    placeholder:"Tu nombre completo",
                                    data: requestData,
                                    name: 'name'
                                }),
                                /*
                                m(".mt-12.lg:ml-4"),
                                m(Input,{
                                    oninput:(e)=>{ error.surname ? error.name = e.target.value !='' : ''},
                                    class:(error.surname ? 'border-red-500':''),
                                    required:true,
                                    label:'Apellidos',
                                    placeholder:'Tus apellidos',
                                    data: requestData,
                                    name: 'surname'
                                })*/
                            ),

                            m(".mt-12.lg:mt-4"),

                            m(".flex.lg:flex",
                                m(Select,{
                                    label:"Comunidad Autónoma", 
                                    class:(error.community ? 'border-red-500':''),
                                    name:'community',
                                    required:true,
                                    placeholder:"Tu comunidad autónoma",
                                    data: requestData
                                }, communities),

                                m(".ml-4.lg:ml-4"),
                                m(Select,{
                                    disabled: !requestData.community,
                                    class:(error.email ? 'border-red-500':''),
                                    name:'province',
                                    required:true,
                                    placeholder:"Tu provincia",
                                    label: "Provincia",
                                    data: requestData
                                }, requestData.community ? provinces[requestData.community] : '')
                            ),

                            m(".mt-12.lg:mt-4"),
                            m(Input,{
                                oninput:(e)=> { error.town ? error.town = validateEmail(e.target.value) : ''},
                                required: true,
                                class: (error.town ? 'border-red-500':''),
                                name:'locality',
                                placeholder: "Tú localidad",
                                type:'email',
                                label: "Localidad",
                                data: requestData
                            }),

                            m(".mt-12.lg:mt-4"),
                            m(Input,{
                                oninput:(e)=> { error.email ? error.email= validateEmail(e.target.value) : ''},
                                required:true,
                                class:(error.email ? 'border-red-500':''),
                                name:'email',
                                placeholder:"Tu correo electrónico",
                                type:'email',
                                label: "Correo electrónico",
                                data: requestData
                            }),
                            
                            requestData.type == types.farmer ? [
                                m(".mt-12.lg:mt-4"),
                                m(Input,{
                                    oninput:(e)=>{ error.farmerInfo ? e.target.value != '' : ''},
                                    required:true,
                                    class:( error.farmerInfo ? 'border-red-500':''),
                                    name:'farmerInfo',
                                    placeholder:"Tengo un campo, vendo naranjas, kakis...",
                                    type:'textarea',
                                    rows: 3,
                                    label: "¿Cuál es tu situación actual? ",
                                    data: requestData
                                })  
                            ]: null,



                            /*
                            m(".mt-12.lg:mt-4"),
                            m(Input,{
                                oninput:(e)=>{error.email ? error.email= validateEmail(e.target.value) : ''},
                                class:(error.email ? 'border-red-500':''),
                                name:'email',
                                placeholder:"Tu correo electrónico",
                                type:'email',
                                label: "Teléfono",
                                data: requestData
                            }),*/


                            /*
                            m(Input,{
                                class:(error.locality ? 'border-red-500':'')
                            }),*/
                            m(Button,{
                                class:"bg-black-900 w-full d-block mt-8",
                                onclick:checkFields,
                            },m("h1.text-white", "Enviar")),
                        ),

                        /*
                        m(Input,{
                            class:"mt-4",
                            type:'email',
                            label: "Correo electrónico",
                            data: requestData
                        })*/
                    ]
                }
            }
        }

        function FarmerForm(){

            let frutas = [
                'naranjas', 'kakis', 'fresas', 'melones', 'aguacates', 'plátanos', 'kiwis', 'granadas', 'hortalizas'
            ]

            let comunidades = [
                'Comunidad Valenciana',
                "Murcia",
                "Madrid",
            ]

            function checkData(){

            }

            return {
                view:(vnode)=> {
                    return [
                        m("p.mb-12.text-center", "Para posterior uso de la herramienta, se verificará que el agricultor sea un vendedor autorizado"),
                        m(Select,{
                            label:"¿Qué productos vende?",
                        }, frutas ),


                        m(".mt-8.lg:mt-4"),
                        m(Input,{
                            label:'¿Cuál es tu situación actual?',
                            placeholder:'Explica tu situación',
                            rows:4,
                            type:'textarea',
                            name:'farmerSituation',
                            data:requestData
                        }),

                        m(Button,{


                            class:"w-full mt-8 lg:mt-4",
                            onclick:()=>{


                            }
                        },m("h1.text-white","Enviar"))

                    ]
                }
            }
        }

        function FinishedPurchase(){
            
            return {
                view: (vnode) =>{
                    return  m(".grow.flex.flex-col.justify-center.p-4", 
                        m(".flex.flex-col.justify-center.items-center.p-4.border-2.bg-white.m", 
                            m("img",{src:'assets/orange_tree.jpg', class:"w-full lg:w-1/3 p-8"}),

                            m("h1.text-center.mb-4","Muchas gracias por tu colaboración"),
                            m("p.text-center", "Te contactaremos cuando tengamos nuevas noticias. Esperamos vernos pronto!"),

                            m(".sm:max-lg:flex-col.lg:flex.w-full",
                                m(Button,{
                                    class:"mt-4 mr-4 bg-red-800 w-full",
                                    onclick:(e)=>{
                                        window.open(`https://gofund.me/06244cf2`,'_blank')
                                    }
                                }, m("h2.text-white","Apoya nuestra causa ")),


                                m(Button,{
                                    class:"mt-4 w-full ml-2 lg:ml-0 bg-cyan-800",
                                    onclick:(e)=>{
                                        window.open('whatsapp://send?text=https://www.elcampounido.es \n\nForma parte del campo, forma parte de nuestra tierra')
                                    }
                                },  m("a",{
                                        "data-action":"share/whatsapp/share",
                                        "target":"_blank",
                                        "href":'href="whatsapp://send?text=Forma parte del campo, forma parte de nuestra tierra"'
                                    },m("h2.text-white", "Comparte con los demás"))
                                )
                            )
                        )
                    )
                }
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