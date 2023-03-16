
const btn = document.getElementById('btn')

getFetch()
btn.addEventListener('click', getFetch)


function getFetch() {
    const URL = 'https://api.adviceslip.com/advice';

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('adviceID').innerText = `ADVICE #${data.slip.id}`

            document.getElementById('adviceMsg').innerText = `"${data.slip.advice}"`
        })
        .catch(err => {
            console.log(err);
        })
}


