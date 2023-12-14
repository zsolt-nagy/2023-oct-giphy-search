function formSubmitted(event) {
    event.preventDefault();
    const memeText = document.querySelector("#memeTextInput").value;
    const memeCount = Number.parseInt(document.querySelector("#numOfGifsSelect").value);

    getData(memeText, memeCount);

    document.querySelector("#memeTextInput").value = "";
}

const API_KEY = "hPLiLRR4wSIPRRFML70Qd8kOK5itmBhY";

function getData(memeText, memeCount) {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${memeText}&limit=${memeCount}`)
        .then((x) => x.json())
        .then(renderData);
}

function renderData(response) {
    let html = "";
    for (let image of response.data) {
        html += `
            <img 
                src="${image.images.original.url} 
                alt="${image.title}" 
                class="giphy-img" />
        `;
    }
    document.querySelector(".js-images").innerHTML = html;
}

document.querySelector(".js-giphy-form").addEventListener("submit", formSubmitted);
