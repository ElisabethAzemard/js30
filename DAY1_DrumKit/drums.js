document.addEventListener('DOMContentLoaded', ()=>{

  const playSound = (event) => {
    const pressedKey = document.querySelector(`div[data-key="${event.keyCode}"]`);
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    if(!sound){return;}

    sound.currentTime = 0;
    sound.play().then(
      () =>{ console.log('Sound played'); },
      (error) =>{ console.log('Couldn\'t play sound', error); }
    );

    pressedKey.classList.add('playing');
  }

  const endTransition = (event) => {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
  }

  document.addEventListener('keydown', playSound);
  document.addEventListener('transitionend', endTransition);

});