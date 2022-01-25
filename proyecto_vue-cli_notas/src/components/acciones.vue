<template>
    <div>
        <p v-on:click="borrarCompletadas()">Borrar completadas</p>
        <p v-on:click="devolverActivas()">Activas</p>
        <p v-on:click="devolverCompletadas()">Completadas</p>
        <p v-on:click="devolverTodas()">Todas</p>
    </div>
</template>

<script>
export default {
  name: 'acciones'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div {
        padding: 1rem;
        border-bottom : 2px solid #3d3c3c;
    }

    div p {
        padding: 1rem;
        display: inline;
        color:#f89814;
    }

    div p:hover {
        cursor:pointer;
        text-decoration: underline;
    }
</style>