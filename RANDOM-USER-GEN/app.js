const app = Vue.createApp({
    
    data(){
        return{

            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },

    // We define our methods here, and we can access any of our data that is listed above
    methods: {

        // This method make a call to an external API
        async getUser(){

            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            //This will show the results in the console. 
            console.log(results)

            //To access an object in the data() do not forget to put "this" before
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
});

app.mount('#app');