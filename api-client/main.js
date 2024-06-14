const { createApp } = Vue

createApp({
  data() {
    return {
        newTodo: '',
        todolist: [],
        apiUrl: "../server.php",
        postRequestConfig: {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        },
    }
  },
  methods: {
    getTasksList() {

      axios.get(this.apiUrl).then(results => {
        console.log("Risultati: ", results.data);
        this.todolist = results.data;
      });

    },
    
    addTodo () {
         if (this.newTodo.trim() !== '') {
            this.todolist.push(this.newTodo);
            this.newTodo = '';
         }
         axios.post(this.apiUrl, newTodo, this.postRequestConfig).then(results => {
          console.log("Risultati: ", results.data);
          this.todolist = results.data;
        });
    },

    removeTodo (index) {
        this.todolist.splice(index,1);
    },

    
  },

  

  mounted() {
    console.log("Recupero i dati dal server");
  }
}).mount('#app')