const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      Animal: '',
      AnimalFullName: '',
      streetnumber:'',
      streetname:''

    };
  },

  //METHODS
  //Always bind event to methods
  methods: {
    setName(event) {
      this.name = event.target.value;
    },

    add(num) {
      this.counter = this.counter + num;
    },

    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },

    resetName(){
      this.name = ''
    },

    resetAnimal(){
      this.Animal = ''
    },

    resetAddress(){
      this.streetname = ''
      this.streetnumber = ''
    },

    outputFullname(){
      console.log("Running everytime the page is changed!")

      if(this.name === ''){
        return ''
      }
      return this.name + ' ' + 'Gagnon-Hébert'
    }
  },
  
  // We use computed as we used date, but those are function. But are not executed as methods. 
  // Most of the time we used computed to output values something!
  computed:{
    fullname(){
      console.log("Will not run everytime the page is changed elsewhere!")

      if(this.name === ''){
        return ''
      }
      return this.name + ' ' + 'Gagnon-Hébert'
    },

    //refering to two dependencies. 
    completeaddress(){

      if (this.streetnumber ==='' || this.streetname ===''){
        
        return ''
      }else{

        return this.streetnumber + ' ' + this.streetname
      }
    }
  },


  watch:{
    
    //In watch, there is no clash conflict between the data property name or methods in computed and the method we define here. 
    //Watch tells, that everytime the Animal data will be changed, Animal function will be reexecuted. 
    //Watch is not a good options if we want to change a value when two values needs to be changed ex: this.fullname = this.name + this.lastname
    Animal(value){ //Vue takes the latest value of the Animal property
      
      if(this.Animal === ''){
        
        this.AnimalFullName = ''
      
      }else{

        this.AnimalFullName = value + ' ' + 'Wauthy'
      }
    },

    //Good example of using watch. When counter exceed 50, we want to reset the counter
    //value refer to the latest value of this.counter.
    //Executed when some property are changing. 
    counterMax(value){
      if(value > 50){
        this.counter =0
      }
    }







  }






});

app.mount('#events');
