let urlImage="http://62.4.21.200:1337"
let url="http://62.4.21.200:1337/api/temoignage-detail2s?populate=*"

 fetch(url)
.then((response)=>response.json() )
.then((data) =>{

    let title=document.querySelector('.title')
    let details=document.querySelector('.details')
    let photo=document.querySelector('.photo')
  
   

    let GenerateTitle=`
    <h1> ${data.data[0].attributes.titre}</h1>
    `
    title.innerHTML=GenerateTitle

    var converter = new showdown.Converter();
    var text = data.data[0].attributes.details;
    var html = converter.makeHtml(text);
    
    
    let GenerateDetails=`
    <p> ${html}</p>
    `
    details.innerHTML=GenerateDetails


    let GeneratePhoto=`
    <img src="`+ urlImage + data.data[0].attributes.photo.data[0].attributes.formats.small.url +`">`

    photo.innerHTML=GeneratePhoto

    // HTMLFormControlsCollection.log( data.data[0].attributes.photo)
})
