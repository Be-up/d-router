<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="value" @input="myAdd">
    <p>{{num}}</p>
    <button @click="hello">heelo--{{age}}</button>
  </div>
</template>

<script>
import {debounceMixin} from "../minix/index.js"
export default {
  name: '',
  props:["age"],
  data () {
    return {
      value:'',
      num:0,
      // age:2000
    }
  },
  mixins:[debounceMixin],
  methods: {
    add(){
      this.num++
    },
    hello(){
      console.log("Adout Hello!!!")
    }
  },
  mounted () {
    
  }
}
</script>

<style scoped>

</style>

