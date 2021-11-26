const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmeName: ''
    };
  },

  methods:{
    
    add(){
      this.counter ++;
    },

    remove(){
      this.counter --;
    },

    addargs(num){
      this.counter += num
    },

    removeargs(num){
      this.counter -= num
    },

    //this function will listen the HTML element that this function is attached to and dynamically update the name according to what the
    //user is typing. event.target.value is Vanilla js letting us know what the user is typing. 
    
    setName(event){
      this.name = event.target.value;
    },

    setFullName(event, lastName){
      this.name = event.target.value + ' '+ lastName;
    },

    submitForm(event){
      //event.preventDefault(); //Vanilla JS way: by default within balise Form, the browser send automatically the content of the form through an HTTP request, which leads automatically
                              //to a refresh of the page. event.preventDefault will avoid that the form is sent by default. 
    },

    confirmedName(){
      this.confirmeName = this.name
    }






  }
});

app.mount('#events');
