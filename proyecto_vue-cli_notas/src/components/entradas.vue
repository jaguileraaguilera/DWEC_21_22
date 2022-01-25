<template>
    <div>
        <input v-model="nueva_tarea" placeholder="¿Qué quieres recordar?" v-on:keydown.enter="agregarTarea">
    </div>
</template>


<script>
export default {
  name: 'entradas'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div {
        padding: 1rem;
        border-bottom : 2px solid #3d3c3c;
    }

    div input {
        padding : 1rem;
        font-size: 1rem;
        border-radius: 5px;
        border: 1px solid white;
        width: 80%;
    }
</style>