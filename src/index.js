import DateCountdown from './components/DateCountdown.vue'

export { DateCountdown }

export default {
  install: (app, options) => {
    return app.component('DateCountdown', DateCountdown)
  }
}