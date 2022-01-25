<template>
  <div>
    Titulo : {{titulo}}
    <button @click="comprobarContador" >
    You clicked me {{ count }} times.
  </button>
  </div>
</template>

<script>
export default {
  name: 'micomponente',

  props: {
    msg: String,
    titulo: String
  },

  data() {
    return {
      count: 0
    }
  },

  methods : {
    comprobarContador() {
      this.count++;
      if (this.count == 10){
        console.log("contador vale 10")
        this.$emit("llegada", this.titulo);
      }
    }
  },

  emits : ['llegada']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
