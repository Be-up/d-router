function debounce(fun,delay){
    let timer=null
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(()=>{
            fun.apply(this,args)
        },delay)
    }
}
export const debounceMixin={
    data() {
        return {
            myAdd:null,
            // age:100
        };
    },
    mounted(){
        this.myAdd=debounce(this.add,2000)
    },
    methods: {
        minAdd(){
            this.myAdd()
        },
        hello(){
            console.log("Mixin Hello!!!")
        }
    },
}