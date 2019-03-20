document.addEventListener('DOMContentLoaded', () => {

  const setDate = () => {

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours   = now.getHours();

    const hands = [
      {
        hand: document.querySelector('.second-hand'), // seconds hand
        angle: seconds * 6
      },
      {
        hand: document.querySelector('.min-hand'), // minutes hand
        angle: minutes * 6
      },
      {
        hand: document.querySelector('.hour-hand'), // hours hand
        angle: (hours * 30) + (minutes / 2)
      }
    ];

    hands.forEach(clockHand => { // rotate each hand according to its own angle
      if(clockHand.angle == 0){
        clockHand.hand.style.transition = 'unset';
      }else{
        clockHand.hand.style.transition = '';
      }
      clockHand.hand.style.transform  = `rotate(${clockHand.angle}deg)`;
    });

  }

  setInterval(setDate, 1000);

});