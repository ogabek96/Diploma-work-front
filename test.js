let val = false
const test = {
  prop: () => {
    return val ? '1' : '1'
  }
}
console.log(test.prop())
val = true
console.log(test.prop())
