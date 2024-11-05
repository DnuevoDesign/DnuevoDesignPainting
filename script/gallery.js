
function Switch(el) {
    if (!el.target.closest('.item')) return; /* do nothing if another element is clicked */
    let origin = document.querySelector('div[data-pos="0"]'); /* Prepare to swicth the pictures */
    let target = el.target.parentElement;
    [target.dataset.pos,origin.dataset.pos] = [origin.dataset.pos,target.dataset.pos]; /* switch the positions */
  }
  
  window.addEventListener('click', Switch, false);