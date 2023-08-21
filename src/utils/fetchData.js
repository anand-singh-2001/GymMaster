
export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':'a91bb8c19cmshf0b0d7fad16c9dcp18b851jsn482f17d1fed1',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

 export const youtubeOptions = {
	method: 'GET',
	url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
	
	headers: {
	  'X-RapidAPI-Key': 'a91bb8c19cmshf0b0d7fad16c9dcp18b851jsn482f17d1fed1',
	  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
  };

export const fetchData=async(url,options)=>{
    const response=await fetch(url, options)
    const data=await response.json()

    return data;
}