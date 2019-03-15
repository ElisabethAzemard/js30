document.addEventListener('DOMContentLoaded', ()=>{

  document.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode;
    const sound = document.querySelector(`audio[data-key="${keyCode}"]`);
    const pressedKey = document.querySelector(`div[data-key="${keyCode}"]`);

    if(!sound){return;}

    sound.currentTime = 0;
    sound.play().then(
      () =>{
        console.log('tout va bien');
      },
      (error) =>{
        console.log('tout va mal', error);
      }
    );

    pressedKey.classList.add('playing');
    pressedKey.addEventListener('transitionend', ()=>{ pressedKey.classList.remove('playing'); });
  });

});