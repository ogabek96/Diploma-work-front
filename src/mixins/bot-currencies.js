export default {
  methods: {
    getCurrenciesObject() {
      const currencies = ['sum', 'rub', 'usd']
      const res = {}
      console.log(this.currencies)
      currencies.forEach(key => {
        res[key] = ''
      })
      return res
    },
    getCurrenciesArray() {
      const currencies = ['sum', 'rub', 'usd']
      return currencies
    }
  }
}
