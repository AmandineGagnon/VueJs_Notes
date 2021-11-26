const app = Vue.createApp({

    //data wants a function as a value. This function return an object with key values pair.
    data() {

        return {
            goal: 'We want to learn some VueJs!',
            linkVue: 'https://v3.vuejs.org/',
            nom1:'Amandine',
            nom2:'Maxime',
            htmlrendering: '<h3>Exemple de sortie qui interprète les balises HTML</h3>'

        }



    },

    //methods is a big objects full of function. 
    methods:{
    
        outputGoal(){
            const randomNumber = Math.random()
            if(randomNumber < 0.5){
                return 'Learn Vue!'
            }else{
                return 'Master Vue!'
            }
        },


        randomName(){

            const randomNumber = Math.random()

            if(randomNumber < 0.5){
                return this.nom1 //this refer to the dataobject nom1
            }else{
                return this.nom2 //this refer to the dataobject nom2
            }
        }




    
    }

}).mount('#user-goal') //specify which part of the HTML Code we want to control with Vue. 