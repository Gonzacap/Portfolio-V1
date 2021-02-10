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
        ]

    },
    /*html*/
});