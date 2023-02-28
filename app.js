gifSearch = document.querySelector("#gifSearch");
searchBtn = document.querySelector("#searchBtn");
rmBtn = document.querySelector("#rmBtn");

const apiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

//Search giphy api for Gifs
async function getGif(sTerm){
    try{
        const res = await axios.get("https://api.giphy.com/v1/gifs/search",
            {params: {
                q: sTerm,
                api_key: apiKey}
            });
        addGif(res.data);
    }
    catch(e){
        alert(`Oh no, an error occured!\n\nError: ${e.message}`);
    }
}

//Add gif to the list
function addGif(results){
    let numResults = results.data.length;
    if(numResults){
        const LI = document.createElement("li");
        const IMG = document.createElement("img");

        let rIdx = Math.floor(Math.random() * numResults);
        IMG.src= results.data[rIdx].images.original.url;

        LI.append(IMG);
        LI.classList.add("liGif");
        gifList.append(LI);
    }
}

searchBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    getGif(gifSearch.value);
    gifSearch.value = "";
})

rmBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    $("li").remove();
})
