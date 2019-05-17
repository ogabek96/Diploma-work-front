export default {
  methods: {
    getLanguagesObject() {
      const languages = ['uzb', 'rus', 'kaa', 'eng']
      const res = {}
      languages.forEach(key => {
        res[key] = ''
      })
      return res
    },
    getLanguagesArray() {
      const languages = ['uzb', 'rus', 'kaa', 'eng']
      return languages
    }
  }
}
