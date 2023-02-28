let searchBtn =document.getElementById('searchBtn')
let btn = document.getElementById('btn')
 let result = document.getElementById('result')
 let layer =document.querySelector('.layer')
 let show = document.getElementById('show')

//add logic


function logic(){

    let movie = searchBtn.value
    if(movie == ''){

    layer.classList.add('show')
    show.addEventListener('click' , function(){
        layer.classList.remove('show')
    })

    }
    else{
fetch(`http://www.omdbapi.com/?t=${movie}&apikey=cc39e51a`)
.then(res =>{
    return res.json()
})
.then(data =>{
    console.log(data)
 if(data.Response != "True"){
    layer.classList.add('show')
    show.addEventListener('click' , function(){
        layer.classList.remove('show')
    })

 }

else{
    console.log(false)
result.innerHTML =`
<div class="info">
<img src=${data.Poster} class="poster">
<div>
    <h2>${data.Title}</h2>
    <div class="rating">
        <img src="star-icon.svg">
        <h4>${data.imdbRating}</h4>
    </div>
    <div class="details">
        <span>${data.Rated}</span>
        <span>${data.Year}</span>
        <span>${data.Runtime}</span>
    </div>
    <div class="genre">
        <div>${data.Genre.split(",").join("</div><div>")}</div>
    </div>
</div>
</div>
<h3>Plot:</h3>
<p>${data.Plot}</p>
<h3>Cast:</h3>
<p>${data.Actors}</p>`
 }
})
    }
}
btn.addEventListener('click' ,logic)