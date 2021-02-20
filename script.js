Vue.component('project-card',{
    props: ['img', 'title', 'description', 'app', 'code', 'btnStyle'],
    /*html*/
    template: `
        <div class="card p-1 m-2">

            <img :src="img" alt="imagen de la targeta" class="card-img-top img-fluid p-2">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text text-justify p-2">
                {{description}}
            </p>
            <a :href="app" class="btn btn-primary btn-md m-1" target="_blank" :style="btnStyle">App</a>
            <a :href="code" class="btn btn-secondary btn-md m-1"  target="_blank">Codigo</a>
    
        </div>
    `,
});

Vue.component('it-card-1',{
    props: ['img', 'title'],
    /*html*/
    template: `
        <div class="it-card" >

            <img class="img-fluid" id="ico-aux" :src="img"/>
            <p class="p-1">{{title}}</p>

        </div>
    `,
});

Vue.component('it-card-2',{
    props: ['ico', 'title'],
    /*html*/
    template: `
        <div  class="it-card">
                
            <i :class="ico"></i>
            <p class="p-1">{{title}}</p>
            
        </div>
    `,
});

const app = new Vue({
    el: '#app',
    data:{
        technologies1:[
            {title:"Lenguaje: C++", img:"https://img.icons8.com/ios/150/000000/c-plus-plus-logo.png"},
            {title:"Lenguaje: C#", img:"https://img.icons8.com/ios/150/000000/c-sharp-logo.png"},
            {title:"Lenguaje: C", img:"https://img.icons8.com/ios/100/000000/c.png"},
            {title:"Editor: VS Code", img:"https://img.icons8.com/ios-filled/150/000000/visual-studio-logo.png"}
        ],
        technologies2:[
            {title:"Lenguaje: Java", ico:"fab fa-java fa-8x"},
            {title:"Lenguaje: HTML5", ico:"fab fa-html5 fa-8x"},
            {title:"Lenguaje: CSS", ico:"fab fa-css3-alt fa-8x"},
            {title:"Lenguaje: JavaScript", ico:"fab fa-js-square fa-8x"},
            {title:"Framework: Vue.js", ico:"fab fa-vuejs fa-8x"},
            {title:"Framework: Node.js", ico:"fab fa-node-js fa-8x"},
            {title:"CMS: WordPress", ico:"fab fa-wordpress fa-8x"},
            {title:"Control de Versiones: Git", ico:"fab fa-git-alt fa-8x"}
        ],
        projects:[
            {
                img:"img/img-10.jpg",
                title:"Primera Página en Node",
                description:"Mi primera página hecha en Node.js, Express, EJS, BootStrap y desplegada en Heroku. Tambien use Animate CSS para las animaciones", 
                app:"https://primera-pagina-en-node-v2.herokuapp.com/",
                code:"https://github.com/Gonzacap/primera-pagina-en-node-v2",
                btnStyle:" "
            },
            {
                img:"img/img-01.jpg",
                title:"My Link Tree",
                description:"Mi propio link tree hecho con HTML y CSS.", 
                app:"https://gonzacap.github.io/My-Link-Tree/",
                code:"https://github.com/Gonzacap/My-Link-Tree",
                btnStyle:" "
            },
            {
                "img":"img/img-02.jpg",
                "title":"CRUD Vue",
                "description":"CRUD con Vue.js, Bootstrap y LocalStorage; realizado como practica de Vue.", 
                "app":"https://gonzacap.github.io/CRUD-LocalStorage-con-Vue/",
                "code":"https://github.com/Gonzacap/CRUD-LocalStorage-con-Vue",
                "btnStyle":"background-color: red;"
            },
            {
                "img":"img/img-03.png",
                "title":"Snake v1.0",
                "description":"Un dia estaba aburrido, era de madrugada y se me dio por hacer el juego de la vivorita para practicar JavaScript.", 
                "app":"https://gonzacap.github.io/Snake-v1.0/",
                "code":"https://github.com/Gonzacap/Snake-v1.0",
                "btnStyle":"background-color: red;"
            },
            {
                "img":"img/img-04.jpg",
                "title":"Pagina Tributo",
                "description":"Página tributo realizada como proyecto de Web Design de FreeCodeCamp. PD: Soy fan de Magnus Mefsto.", 
                "app":"https://gonzacap.github.io/Pagina-Tributo/",
                "code":"https://github.com/Gonzacap/Pagina-Tributo",
                "btnStyle":"background-color: red;"
            },
            {
                "img":"img/img-05.jpg",
                "title":"Reloj JS",
                "description":"Reloj responsive hecho como Practica de JavaScript.", 
                "app":"https://gonzacap.github.io/Reloj-en-JavaScript/",
                "code":"https://github.com/Gonzacap/Reloj-en-JavaScript",
                "btnStyle":"background-color: red;"
            },
            {
                "img":"img/img-06.jpg",
                "title":"Login HTML + CSS",
                "description":"Login hecho como practica de maquetado en HTML y CSS.", 
                "app":"https://gonzacap.github.io/Login/",
                "code":"https://github.com/Gonzacap/Login",
                "btnStyle":"background-color: red;"
            }/*,
            {
                "img":"img/img-07.jpg",
                "title":"App Venta de Maquillaje",
                "description":"Ejemplo de una app de venta de maquillajes realizada con Mat|r Script. Esta fue mi primera experiencia en el desarrollo movil.", 
                "app":"#",
                "code":"https://github.com/Gonzacap/ejemplo-app-venta-de-maquillaje",
                "btnStyle":"pointer-events: none;"
            },
            {
                "img":"img/img-08.png",
                "title":"Buddy System Algorithm",
                "description":"Simulacion del funcionamiento del algorimo Buddy (Algoritmo de Sistema Compañero) para asignación de memoria. Realizado en C.", 
                "app":"#",
                "code":"https://github.com/Gonzacap/Buddy-System-Algoritm---Algoritmo-de-Sistema-Compa-ero",
                "btnStyle":"pointer-events: none;"
            },
            {
                "img":"img/img-09.png",
                "title":"Sistema de Gestion Logistica",
                "description":"ABM de camiones, plantas, rutas e insumos; realizado en Java, Java Swing y MySQL para la materia de DIED (Diseño e Implementacion de Esctructuras de Datos).", 
                "app":"#",
                "code":"https://github.com/Gonzacap/gestionLogistica",
                "btnStyle":"pointer-events: none;"
            }*/
        ],
    },
    /*html*/
});