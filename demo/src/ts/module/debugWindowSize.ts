export default function (): void {
  const $widthTarget: Element = document.querySelector('[data-debug-window-width]')
  const $heightTarget: Element = document.querySelector('[data-debug-window-height]')
  function calcWindowWidth(): void {
    $widthTarget.innerHTML = `${window.innerWidth}`
  }
  function calcWindowHeight(): void {
    $heightTarget.innerHTML = `${window.innerHeight}`
  }
  window.addEventListener('load', calcWindowWidth, false)
  window.addEventListener('resize', calcWindowWidth, false)
  window.addEventListener('load', calcWindowHeight, false)
  window.addEventListener('resize', calcWindowHeight, false)
}
