// let urlImage="http://62.4.21.200:1337"
// let url="http://62.4.21.200:1337/api/temoignage-detail2s?populate=*"

//  fetch(url)
// .then((response)=>response.json() )
// .then((data) =>{

    // let title=document.querySelector('.title')
    // let details=document.querySelector('.details')
    // let photo=document.querySelector('.photo')
  
   

    // let GenerateTitle=`
    // <h1> ${data.data[0].attributes.titre}</h1>
    // `
    // title.innerHTML=GenerateTitle

    // var converter = new showdown.Converter();
    // var text = data.data[0].attributes.details;
    // var html = converter.makeHtml(text);
    
    
    // let GenerateDetails=`
    // <p> ${html}</p>
    // `
    // details.innerHTML=GenerateDetails


    // let GeneratePhoto=`
    // <img src="`+ urlImage + data.data[i].attributes.photo.data[0].attributes.formats.small.url +`">`

    // photo.innerHTML=GeneratePhoto

//     // HTMLFormControlsCollection.log( data.data[0].attributes.photo)
// })


let urlImage="http://62.4.21.200:1337"
let url="http://62.4.21.200:1337/api/temoignage-detail2s?populate=*"

let conteneur = document.querySelector(".itin")
fetch(url)
    .then(response => response.json())
    .then(data =>{
       

        for(let i=0; i< data.meta.pagination.total; i++) {
            let article = document.createElement("div")
            var converter = new showdown.Converter();
            var text = data.data[i].attributes.details;
            var html = converter.makeHtml(text);
            let generateHtml=`
            <article class="itin">
            <div class="left">
                 <div class="photo"><img src="`+ urlImage + data.data[i].attributes.photo.data[0].attributes.formats.large.url +`"></div>
            </div> 
            <div class="right">                
                <div class="title"> <h1> ${data.data[i].attributes.titre}</h1></div>
                <div class="details"> <p> ${html}</p></div>
                <div class="discover"> <a href="#"> DÉCOUVRIR LEURS PARCOURS</a></div>
            </div> 
        </article>`
        article.innerHTML = generateHtml
        conteneur.append(article) 
        }

})