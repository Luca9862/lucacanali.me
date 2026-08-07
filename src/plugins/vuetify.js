import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          // il sito ha sempre avuto sfondo nero (vedi assets/css/colors.css):
          // senza questo override v-app lo coprirebbe col bianco del tema light
          background: '#000000'
        }
      }
    }
  }
})
