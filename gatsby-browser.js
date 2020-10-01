import { wrapRootElement as wrap } from './root-wrapper'

export const wrapRootElement = wrap

export const onInitialClientRender = () => {
  setTimeout(function () {
    document.getElementById('___loader').style.display = 'none'
  }, 3000)
}
