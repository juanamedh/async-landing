const API = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e4a2ebb7e9mshdff1ef157c3876dp1e1c22jsnfecd45a089a7',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData=(urlAPI) {
	const response = await fetch(urlAPI, options);
	const data = await response.json();
	return data;
}

(async () => {
	try{
		const videos = await fetchData(API);
		
	}catch {

	}
})();