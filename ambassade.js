let urlImage="http://62.4.21.200:1337"
let url="http://62.4.21.200:1337/api/temoignage-detail2s?populate=*"

 fetch(url)
.then((response)=>response.json() )
.then((data) =>{

    let title=document.querySelector('.title')
    let details=document.querySelector('.details')
    let photo=document.querySelector('.photo')
    let list1=document.querySelector('.list1')
    let list2=document.querySelector('.list2')
   
   

    let GenerateTitle=`
    <h1> ${data.data[0].attributes.titre}</h1>
    `
    title.innerHTML=GenerateTitle


    let GenerateDetails=`
    <p> ${data.data[0].attributes.details}</p>
    `
    details.innerHTML=GenerateDetails

    let GenerateList1=`
    <ul><li> ${data.data[0].attributes.list1}</ul></li>
    `
    list1.innerHTML=GenerateList1

    let GenerateList2=`
    <ul><li> ${data.data[0].attributes.list2}</ul></li>
    `
    list2.innerHTML=GenerateList2

    let GeneratePhoto=`
    <img src="`+ urlImage + data.data[0].attributes.photo.data[0].attributes.formats.small.url +`">`

    photo.innerHTML=GeneratePhoto

    // HTMLFormControlsCollection.log( data.data[0].attributes.photo)
})
