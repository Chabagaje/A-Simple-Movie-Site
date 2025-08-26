const apiLink = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=632ca29437278094ae8ddb954b19b754&page=1";

const imgPath = "https://image.tmdb.org/t/p/w1280";

const searchApi = "https://api.themoviedb.org/3/search/movie?api_key=632ca29437278094ae8ddb954b19b754&query=";


const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(apiLink)

function returnMovies(url){
    fetch(url).then(res => res.json()).then(function(data){
        console.log(data.results);
        data.results.forEach(element =>{
        const divCard = document.createElement("div");
        divCard.setAttribute("class", "card" ) 

        const divRow = document.createElement("div"); 
        divRow.setAttribute("class", "row" ) 

        const divColumn = document.createElement("div"); 
        divColumn.setAttribute("class", "column" ) 

        const image = document.createElement("img");
        image.setAttribute("class", "thumbnail" ) 
        image.setAttribute("id", "image" )

        if(element.poster_path){
             image.src = imgPath + element.poster_path;
         
        }else{ image.src = "placeholder.jpg";}

        
        

        const title = document.createElement("h3");
        title.setAttribute("id", "title" ) 
        const center = document.createElement("center");
        
        title.innerHTML = `${element.title}`;
        image.src = imgPath + element.poster_path;

        center.appendChild(image);
        divCard.appendChild(center);
        divColumn.appendChild(divCard);
        divRow.appendChild(divColumn);

        main.appendChild(divRow);


        })
    })
     .catch(error => console.error("Error fetching movies:", error)); 
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    main.innerHTML = "";

    const searchItem = search.value;
    if(searchItem){
        returnMovies(searchApi + searchItem);
        search.value = "";
    
    }


});