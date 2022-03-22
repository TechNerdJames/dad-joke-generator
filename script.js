const h4 = document.querySelector('h4');
const dadJokeBtn = document.querySelector('#joke-btn');
const gif = document.querySelector('.gif');
const createdImg = document.createElement('img');

function joke() {
	dadJokeBtn.addEventListener('click', () => {
		getDadJoke();
		getGif();
	});
}
joke();

async function getDadJoke() {
	const url = 'https://icanhazdadjoke.com/';
	const config = { headers: { Accept: 'application/json' } };
	const response = await axios.get(url, config);
	const joke = response.data.joke;
	h4.innerText = joke;
}

async function getGif() {
	const url = 'https://api.giphy.com/v1/gifs/random';
	const config = {
		params: {
			api_key: 'EJD9WHAlfB4BMBoA4vyt1WHQbyDb90te',
			tag: 'laughingman',
		},
	};
	const response = await axios.get(url, config);
	const data = response.data.data;
	const gifImg = data.images.downsized.url;
	createdImg.src = gifImg;
	gif.appendChild(createdImg);
}
