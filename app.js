const btnEl = document.getElementById("btn");
const outputEl = document.getElementById("output");
const errorEl = document.getElementById("error");

const API_URL = "https://official-joke-api.appspot.com/random_joke";

async function getJoke() {

    outputEl.textContent = "Loading...";
    errorEl.textContent = "";

    try {

        let response = await fetch(API_URL);

        let data = await response.json();

        outputEl.textContent = data.setup + " 🤣 " + data.punchline;
        errorEl.textContent = "";

    } catch (error) {
        errorEl.textContent = "Joke load nahi hua 😢!!"
        outputEl.textContent = "";
    }
}


btnEl.addEventListener('click', getJoke);