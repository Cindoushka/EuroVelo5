
// let urlImage="http://62.4.21.200:1337"
// let url="http://62.4.21.200:1337/api/temoignage-detail2s?populate=*"

// let conteneur = document.querySelector(".itin")
// fetch(url)
//     .then(response => response.json())
//     .then(data =>{
       
//         let generateHtml = null
//                for(let i=0; i< data.meta.pagination.total; i++) {
//             let article = document.createElement("div")
//             var converter = new showdown.Converter();
//             var text = data.data[i].attributes.details;
//             var html = converter.makeHtml(text);
//             if(i % 2==0){
//              generateHtml=`
//             <article class="itin">
//             <div class="left">
//                  <div class="photo"><img src="`+ urlImage + data.data[i].attributes.photo.data[0].attributes.formats.medium.url +`"></div>
//             </div> 
//             <div class="right">                
//                 <div class="title"> <h1> ${data.data[i].attributes.titre}</h1></div>
//                 <div class="details"> <p> ${html}</p></div>
//                 <div class="discover"> <a href="#"> DÉCOUVRIR LEURS PARCOURS</a></div>
//             </div> 
//         </article>`}
//         else{  generateHtml=`
//         <article class="itin">
//         <div class="left">
//         <div class="title"> <h1> ${data.data[i].attributes.titre}</h1></div>
//         <div class="details"> <p> ${html}</p></div>
//         <div class="discover"> <a href="#"> DÉCOUVRIR LEURS PARCOURS</a></div>
//         </div>
//         <div class="right">   
//         <div class="photo"><img src="`+ urlImage + data.data[i].attributes.photo.data[0].attributes.formats.medium.url +`"></div>
//         </div>              
            
        
//     </article>`}
//         article.innerHTML = generateHtml
//         conteneur.append(article) 
//         }
        

// })







let urlImage="http://62.4.21.200:1337"
let url="http://62.4.21.200:1337/api/temoignage-detail2s?populate=*"

let conteneur = document.querySelector(".itin")
fetch(url)
    .then(response => response.json())
    .then(data =>{
       
        let generateHtml = null
               for(let i=0; i< data.meta.pagination.total; i++) {
            let article = document.createElement("div")
            var converter = new showdown.Converter();
            var text = data.data[i].attributes.details;
            var html = converter.makeHtml(text);
            if(i % 2==0){
             generateHtml=`
            <article class="itin">
            <div class="left">
                 <div class="photo"><img src="`+ urlImage + data.data[i].attributes.photo.data[0].attributes.formats.medium.url +`"></div>
            </div> 
            <div class="right">                
                <div class="details"> <p> ${html}</p></div>
                <div class="discover"> <a href="#"> DÉCOUVRIR LEUR PARCOURS</a></div>
            </div> 
        </article>`}
        else{  generateHtml=`
        <article class="itin">
        <div class="right">
        <div class="details"> <p> ${html}</p></div>
        <div class="discover"> <a href="#"> DÉCOUVRIR SON PARCOURS</a></div>
        </div>
        <div class="left">   
        <div class="photo"><img src="`+ urlImage + data.data[i].attributes.photo.data[0].attributes.formats.medium.url +`"></div>
        </div>              
            
        
    </article>`}
        article.innerHTML = generateHtml
        conteneur.append(article) 
        }
        

})