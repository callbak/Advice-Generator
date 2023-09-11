//? SELECTING DOM ELEMENTS
const adID = document.querySelector('#adviceI span:nth-of-type(2)');  // the advice id 
const adV = document.querySelector('#adviceC span');                 // the advice
const button = document.querySelector('#btn');


//? SELECTING DOM ELEMENT + ADD AN EVENT LISTENER TO IT .
button.addEventListener('click',
    async () => {
        try {
            const res = await fetch('https://api.adviceslip.com/advice');
            const data = await res.json();
            /* actual change */
            adID.style.color = `hsl(150, 100%, 66%)`;
            adID.textContent = `${data.slip.id}`;

            adV.style.color = `hsl(193, 38%, 86%)`;
            console.log(data.slip.advice);
            adV.textContent = `❝ ${data.slip.advice} ❞`;

        } catch (err) {
            console.log('Failed to Load ', err);
        }
    }
);