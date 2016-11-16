module.exports = {
  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      joinTo: 'app.js'
    }
  },

  plugins: {
    elmBrunch: {
      mainModules: ["app/elm/Main.elm"]
    }
  }
}
