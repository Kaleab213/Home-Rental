'use strict!';


data = {'ownersName': 'Ephrem','location':'Bole','price':'3000 birr','email':'eph21sz@gmail.com','phone_number':'+251914541221',
'photos':{'test1':'./photos/Logo.jpg','house':'Rectangle 28.png','kitchen':'Kitchen1.jpg','toilet':'toilet1.jpg','salon':'Group 19.png',
'salon2':'Group 19.png','salon3':'Group 19.png','salon4':'Group 19.png','salon6':'Group 19.png','salon7':'Group 19.png'},
'is_report':false,'is_deal':false}


// function photosFetch(){
//     for( let photo in data.photos){
//         document.getElementById('test').innerHTML += `
//             <div class=" card  p-0 col-sm-3 m-3  images">
//             <img class="card-image-top image" src="photos/${data.photos[photo]}" alt="house image3"> 
//             </div> `
//         } 
// }


// data1=`
//     <div class="col-sm-12 text-center mb-5 house_information" >
//     <h1>House Information</h1>
//     <p>owners Name: <b>${data.ownersName}</b></p>
//     <p>Location: <b>${data.location}</b></p>
//    <p>price: <b>${data.price} </b> </p>
//     </div>` 
// document.getElementById('target').innerHTML = data1;

// btn=`<button class="col-sm-6 btn btn-primary" id="start-deal">Start Deal</button>
// <div id="detailed"  class="detailed" >
// <h1 id = 'statuss'> </h1>
// <h6>here is owner's Informaiton</h6>
// <p>Phone Numbe:<b>${data.phone_number}</b></p>
// <p>Email: <b>${data.email}</b></p>
// <button class="btn btn-danger" id="Report">Report</button> 
// </div> `
// document.getElementById('detailed_container').innerHTML = btn;

// console.log(data.is_deal)

// const btnn = document.getElementById('start-deal');
// const contact = document.getElementById('detailed');
// const report = document.getElementById('Report');
// if(data.is_deal == 'false'){
//     btnn.addEventListener(('click'),() =>{
//         document.getElementById('statuss').innerHTML = 'you start dealing';
//         btnn.classList.toggle('hidden');
//         contact.classList.toggle('contact_info');
//     }) 
// } else if (data.is_deal === true){
//     document.getElementById('statuss').innerHTML = 'you had already start deal';
//     btnn.classList.toggle('hidden');
//     contact.classList.toggle('contact_info');
   
// }
// if(data.is_report === false){
//     report.addEventListener(('click'),() =>{
//         report.classList.toggle('hidden');
//     })
// }

async function getDetails() {
    // let url = `http://localhost:3336/house/${id}/admin`;
    // let url = `https://fakestoreapi.com/products/${1}`;

    try {
        let res = await fetch(url);
        return await res.json();
        console.log(res)
    } catch (error) {
        console.log(error);
    }
}

async function renderDetails() {
   
    let details = await getDetails();
    console.log(details)
    // for( let photo in details){
    //     document.getElementById('test').innerHTML += `
    //         <div class="col-sm-4 images">
    //         <img class=" image" src="${details.image}" alt="house image3"> 
    //         </div> `
    //     } 

    let html = '';
    
        let htmlSegment =`
        <div class="start-deal-holder col-sm-6"> 
        <p> We hope you love the house.If so click the button below and get the owner's contact</p>
        </div>
        <button class=" btn btn-primary col-sm-3" id="start-deal">Start Deal</button>
        <div id="detailed"  class="detailed" >
        <h1 id = 'statuss'> </h1>
        <h6>here is owner's Informaiton</h6>
        <p>Phone Numbe:<b>${details.name}</b></p>
        <p>Email: <b>${details.price}</b></p>
        <button class="btn btn-danger m-3" id="Report">Report</button>
        </div> `
        document.getElementById('detailed_container').innerHTML = htmlSegment;

        let data1=`
                <div class="col-sm-12 text-center mb-5 house_information" >
                <h1>House Information</h1>
                <p>owners Name: <b>${details.name}</b></p>
                <p>Location: <b>${details.title}</b></p>
               <p>price: <b>${details.price} </b> </p>
                </div>  
                 ` 
        document.getElementById('target').innerHTML = data1;
            
            
    


const btnn = document.getElementById('start-deal');
const contact = document.getElementById('detailed');
const report = document.getElementById('Report');
const startDealCard =document.querySelector('.start-deal-holder')
// let deals = Number (document.getElementById('numberOfDeals'));


// console.log(typeof( Number(deals.innerText)))

console.log()
let deals = 0;
if(data.is_deal == false){
    btnn.addEventListener(('click'),() =>{
        document.getElementById('statuss').innerHTML = 'you start dealing';
        btnn.classList.toggle('hidden');
        startDealCard.classList.toggle('hidden');
        contact.classList.toggle('contact_info');
        deals += 1;
        console.log(deals)
        document.getElementById('numberOfDeals').innerText = deals; 
    }) 
} else if (data.is_deal == true){
    document.getElementById('statuss').innerHTML = 'you had already start deal';
    btnn.classList.add('hidden');
    startDealCard.classList.add('hidden');
    contact.classList.add('contact_info');
   
}


if(data.is_report == false){
    report.addEventListener(("click"),() =>{
        report.classList.add('hidden');
    })
}else if(data.is_report === true){
    report.classList.add('hidden');
}

// for(let i =0 ; i < details.length ; i++){
//         document.getElementById('test').innerHTML += `
//         <div class="col-sm-4 images">
//         <img class=" image" src="${details.image}" alt="house image3"> 
//         </div> `
//     }
for (let value in data.photos){
    console.log(data.photos[value]);
        document.getElementById('test').innerHTML += `
        <div class="col-sm-4 images">
        <img class=" image" src="${data.photos[value]}" alt="house image3"> 
        </div> `
    
}
}



renderDetails();


// photosFetch();

