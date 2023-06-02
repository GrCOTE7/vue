// Fonction qui permet d'initialiser Vue.js
Vue.createApp({

  data() {

    let id = 0;
    let isErrorIni = 0;
    


    return {

      titleClass: {
        "red": isErrorIni,
        "green": !isErrorIni,
      },

      items: [
        { "id": ++id, "name": "Peugeot" },
        { "id": ++id, "name": "Renault" },
        { "id": ++id, "name": "Talbot" },
      ],

      amount: 70,

      isError: isErrorIni,
      errorMessage: "isError = " + isErrorIni,

      name: "Text",

      image_url: "./src/assets/vue.svg",

      title: "Hello Word Vue",
    }
  }
}).mount('#app')
// mount spécifie que l'application Vue s'affichera dans la div avec id="app"