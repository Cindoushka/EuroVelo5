// const urlBdd = "http://62.4.21.200:1337/api/testimonies?populate=*";
// const urlImg = "http://62.4.21.200:1337";


// let container = document.querySelector('#billetstemoignage');
// let note = "/ 5";


// fetch(urlBdd)
//     .then(response => response.json())
//     .then(data =>{

//         for(let i=0; i< 3; i++) {
//             let article = document.createElement("div")
//             let generateHtml=`
//             <article class="billettemoignages">
//                 <p class="publishdate"> ${data.data[i].attributes.DatePublish} </p>
//                 <h2 class="namewitness"> ${data.data[i].attributes.NameWitness} </h2>
//                 <span class="etiquettemap"> ${data.data[i].attributes.description_maps.data[0].attributes.depart} / ${data.data[i].attributes.description_maps.data[0].attributes.arrive} </span>


//                 <div id="notes">
//                     <div class="note">
//                         <p class="note1bdd"> ${data.data[i].attributes.NoteSecurity} ${note}</p>
//                         <p class="typenote">Sécurité</p> 
//                     </div>

//                     <div class="note">
//                         <p class="note1bdd"> ${data.data[i].attributes.NoteBalisage} ${note}</p>
//                         <p class="typenote">Balisage</p> 
//                     </div>

//                     <div class="note">
//                         <p class="note1bdd"> ${data.data[i].attributes.NoteInterest} ${note}</p>
//                         <p class="typenote">Intérêt</p> 
//                     </div>

//                     <div class="note">
//                         <p class="note1bdd"> ${data.data[i].attributes.NoteService} ${note}</p>
//                         <p class="typenote">Services</p> 
//                     </div>
//                 </div> 

//                 <h3 class="titredutemoignage"> ${data.data[i].attributes.Titre} </h3>
//                 <p class="descTemoignage"> ${data.data[i].attributes.Description} </p>

//                 <div class="bottombillet">
//                     <p class="answers"> 0 réponse </p>
//                     <p class="lire">LIRE</p>
//                 </div>

//         </article>`
//         article.innerHTML = generateHtml
//         container.append(article) 
//         }

//     })

    