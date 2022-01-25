<template>
  <cabecera />
  <entradas />
  <acciones />
  <tareas />
  <pendientes />
  <pie />
</template>

<script>
import cabecera from './components/cabecera.vue';
import entradas from './components/entradas.vue';
import acciones from './components/acciones.vue';
import tareas from './components/tareas.vue';
import pendientes from './components/pendientes.vue';
import pie from './components/pie.vue';


export default {
  name: 'App',
  components: {
    cabecera,
    entradas,
    acciones,
    tareas,
    pendientes,
    pie
  },

  data() {
    return {
        lista_tareas : [],
        nueva_tarea: "",
        filtrar_activas: false,
        filtrar_completadas: false
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #282424;
}
</style>
