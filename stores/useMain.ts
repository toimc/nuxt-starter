export const useMain = defineStore('main', {
  state: () => {
    return {
      someState: 'hello pinia',
      count: 0
    }
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  },
  persist: true
})
