const { createApp } = Vue

createApp({
  data() {
    return {
        todolist: []
    }
  },
  methods: {

  },
  mounted() {
    console.log("Recupero i dati dal server");

    axios.get("../server.php").then(results => {
        console.log("Risultati: ", results);
        this.todolist = results.data;
    });
  }
}).mount('#app')