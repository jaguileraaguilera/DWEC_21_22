<template>
    <ul>
        <li class="tarea" v-for="(tarea, index) in mostrarTareas" :key="tarea">

            <input v-if="tarea.completado == false" type="checkbox" name="terminar" id="terminar" v-on:click="completarTarea(index)">
            <input v-else type="checkbox" checked name="terminar" id="terminar" v-on:click="descompletarTarea(index)">
            <label for="terminar">{{tarea.nombre}}</label>

            <div id="boton_eliminar">
                <img v-on:click="eliminarTarea(index)" src="img/eliminar.png">
            </div>
            
            <div id="prioridades">
                Prioridad:
                <button v-if="tarea.prioridad == 0" disabled>&or; Baja</button>
                <button v-else v-on:click="prioridadBaja(index)">&or; Baja</button>

                <button v-if="tarea.prioridad == 1" disabled>Media</button>
                <button v-else v-on:click="prioridadMedia(index)" >Media</button>

                <button v-if="tarea.prioridad == 2" disabled>&and; Alta</button>
                <button v-else v-on:click="prioridadAlta(index)" >&and; Alta</button>
            </div>

            <div id="fecha">
                Añadido hace {{calcularTiempoCreacion}} minutos
            </div>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'entradas'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>