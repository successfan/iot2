import Vue from 'vue'
var tt = {
  fomat: function(text) {
    return text+'>>>'
  },
  age: 20
}
// export default ({ app }) => {
//   // Set i18n instance on app
//   app.tt = tt
// }
// alert(11119)

Vue.prototype.$tt= tt
// export { tt }

