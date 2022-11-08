const {createApp}= Vue 
createApp({
    data(){
        return{
            mails:[

            ]

            }
    },

    mounted(){

        for (let i = 0; i < 10; i++) {
            // const element = this.mails[i];
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response =>{
                console.log(response.data);    

            })
            
            
            // this.mails.push(response.data)

        }

    },
    

}).mount('#app')