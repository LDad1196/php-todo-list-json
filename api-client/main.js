const { createApp } = Vue

createApp({
  data() {
    return {
        newTodo: '',
        todolist: [],
    }
  },
  methods: {
    addTodo () {
         if (this.newTodo.trim() !== '') {
            this.todolist.push(this.newTodo);
            this.newTodo = '';
         }
    }
  },
  mounted() {
    console.log("Recupero i dati dal server");

    axios.get("../server.php").then(results => {
        console.log("Risultati: ", results);
        this.todolist = results.data;
    });
  }
}).mount('#app')