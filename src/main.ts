import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    name: 'world112',
  },
})

export default app

// recreate the whole app if an HMR update touches this module
//@ts-expect-error
if (import.meta.hot) {
  //@ts-expect-error
  import.meta.hot.dispose(() => {
    app.$destroy()
  })
  //@ts-expect-error
  import.meta.hot.accept()
}
