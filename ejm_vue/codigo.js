function main() {
    const Counter = {
        data() {
            return {
                dato : "titulo comun"
            }
        },

        methods: {
        },

        computed: {
        }
    }

    let app = Vue.createApp(Counter);

    app.component('button-counter', {
        data() {
          return {
            count: 0
          }
        },

        props: ['titulo', 'color'],

        template: `
        <h1>{{titulo}}, {{color}}</h1>
          <button @click="count++">
            You clicked me {{ count }} times.
          </button>
          <hr>`
      })

    app.mount('#gestionar');
}

window.addEventListener("load", main);

