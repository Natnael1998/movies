const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '16287e3925msh4d68e5420ec736ep1d0ad7jsn9ab407fc76c1',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};


function nati(){
    

    let loading = document.querySelector(".loading")
    loading.classList+= " loading--visible"
    
    
    

    let input = document.getElementById("in").value
   
      
    
    let api = fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${input}`, options)

    
	api.then(response => response.json())
	.then(data => {
        const list = data.d
        
        list.map(item => {
            console.log(item)
            const name = item.l
            const poster = item.i.imageUrl
            loading.remove()
            
            
            const movie = `<div class="movie"><img src="${poster}"> <p>${name}</p></div> `
            document.querySelector(".movies").innerHTML += movie
            
            
        })
    })
	.catch(err => console.error(err));
    
    
}


