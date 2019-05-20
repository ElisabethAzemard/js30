document.addEventListener('DOMContentLoaded', () => {

  const panels = document.querySelectorAll('.panel');

  function toggleOpen() {
    this.classList.toggle('open');
    // listen to transitionend only if the panel was clicked to prevent active being toggled on on page load
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
  }

  function toggleActive(e) {
    if(e.propertyName.includes('flex')){
      this.classList.toggle('active');
    }
  }

  panels.forEach(panel => panel.addEventListener('click', toggleOpen));

});
