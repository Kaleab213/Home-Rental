
'use strict!';

const homeId = localStorage.homeDetailId;
const Token = localStorage.getItem('access_token');
console.log(homeId,Token)
const userId = localStorage.getItem('userId')
const detailsPhotoDiv = document.getElementById('test')
console.log(userId)
async function getDetails() {
    let url = `http://localhost:3336/house/${homeId}/lesse/${userId}`;
    console.log(userId,"hi")
    try {
        let res = await fetch(url,{
            headers: {
                Authorization: `Bearer ${Token}`
            }
        });
        if (res.status != 200) {
            window.location.href = 'lesseLogin.html';
        }
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderDetails() {
   
    let details = await getDetails();
    console.log(details);
    // for( let photo in details){
    //     document.getElementById('test').innerHTML += `
    //         <div class="col-sm-4 images">
    //         <img class=" image" src="${details.image}" alt="house image3"> 
    //         </div> `
    //     } 
    let html = '';
    
        let htmlSegment =`
        <div class="start-deal-holder col-sm-6"> 
        <h3 id='report-message'> </h3>
        <p> We hope you love the house.If so click the button below and get the owner's contact</p>
        </div>
        <button class=" btn btn-primary col-sm-3" id="start-deal">Start Deal</button>
        <div id="detailed"  class="detailed" >
        <h1 id = 'statuss'> </h1>
        <h6>here is owner's Informaiton</h6>
        <p>Phone Number:<b>${details.lesser.Phone_Number}</b></p>
        <p>Email: <b>${details.lesser.Email}</b></p>
        <button class="btn btn-danger m-3" id="Report">Report</button>
        </div> `
        document.getElementById('detailed_container').innerHTML = htmlSegment;

        let data1=`
                <div class="col-sm-12 text-center mb-5 house_information py-4" >
                <h1>House Information</h1>
                <p>Owners Name: <b>${details.lesser.First_Name} ${details.lesser.Last_Name}</b></p>
                <p>Sub City: <b>${details.Sub_City}</b></p>
               <p>Wereda: <b>${details.Wereda} </b> </p>
               <p>Kebele: <b>${details.Kebele} </b> </p>
               <p>Size: <b>${details.Size} </b> </p>
               <p>price: <b>${details.Price} </b> </p>
                </div>  
                 ` 
        document.getElementById('target').innerHTML = data1;
            
            
    


const btnn = document.getElementById('start-deal');
const contact = document.getElementById('detailed');
const report = document.getElementById('Report');
const startDealCard =document.querySelector('.start-deal-holder')
// const likeButton = document.getElementById('like');
const like = document.getElementById('numberOfLikes')
const likebutton = document.getElementById('likeButton')
const likeimage = document.getElementById('likeImage')
const reportMessage = document.getElementById('report-message')
// let deals = Number (document.getElementById('numberOfDeals'));

   

// console.log(typeof( Number(deals.innerText)))
console.log(details)
if(!details.lesse[0]){
    console.log(`http://localhost:3336/lesse/${userId}/house/${homeId}/`)
    document.getElementById('numberOfDeals').innerText = details.deal; 
    btnn.addEventListener(('click'),() =>{
        document.getElementById('numberOfDeals').innerText = details.deal + 1
        fetch (`http://localhost:3336/lesse/${userId}/house/${homeId}/`,{

            method:'PATCH',
            body:JSON.stringify({
                Is_deal:true
            }),
            headers:{
                'Content-type': 'application/json',
            'Authorization' : 'Bearer '+Token
            } 
        }).then((response) => response.json())
          .then((json) => console.log(json));


        document.getElementById('statuss').innerHTML = 'you start dealing';
        btnn.classList.add('hidden');
        startDealCard.classList.add('hidden');
        contact.classList.add('contact_info');
        
    }) 

}

else if(!details.lesse[0].Is_deal){
    console.log(`http://localhost:3336/lesse/${userId}/house/${homeId}/`)
    document.getElementById('numberOfDeals').innerText = details.deal; 
    btnn.addEventListener(('click'),() =>{
        document.getElementById('numberOfDeals').innerText = details.deal + 1
        fetch (`http://localhost:3336/lesse/${userId}/house/${homeId}/`,{

            method:'PATCH',
            body:JSON.stringify({
                 Is_deal :true
            }),
            headers:{
                'Content-type': 'application/json',
            'Authorization' : 'Bearer '+Token
            } 
        }).then((response) => response.json())
          .then((json) => console.log(json));


        document.getElementById('statuss').innerHTML = 'you start dealing';
        btnn.classList.add('hidden');
        startDealCard.classList.add('hidden');
        contact.classList.add('contact_info');
        
    }) 
} else if (details.lesse[0].Is_deal){
    document.getElementById('statuss').innerHTML ='you had already start deal';
    btnn.classList.add('hidden');
    startDealCard.classList.add('hidden');
    contact.classList.add('contact_info');
    document.getElementById('numberOfDeals').innerText = details.deal;  
}
console.log(details.lesse)
if (details.lesse.length != 0) {
    console.log(true)
}
if (details.lesse.length != 0){
    if(!details.lesse[0].Is_report){
        report.addEventListener(("click"),() =>{
            fetch (`http://localhost:3336/lesse/${userId}/house/${homeId}/`,{
    
                method:'PATCH',
                body:JSON.stringify({
                    Is_report:true
                }),
                headers:{
                    'Content-type': 'application/json',
                'Authorization' : 'Bearer '+Token
                } 
            }).then((response) => response.json())
              .then((json) => console.log(json));
            report.classList.add('hidden');
            reportMessage.innerText = 'You have Reported on this Home';
        })
    }else if (details.lesse[0].Is_report){
        report.classList.add('hidden');
        reportMessage.innerText = 'You Have Reported on this Home';
    }
    console.log(details.like);
    like.innerText = details.like
    let on_like = details.lesse[0].Is_like
    
    if(!details.lesse[0].Is_like) {
        like.innerText = details.like
        
    }
    else {
        likeimage.classList.add('bg-danger'); 
    }
    
        likebutton.addEventListener(("click"),() =>{
            if(!on_like) {
                fetch (`http://localhost:3336/lesse/${userId}/house/${homeId}/`,{
    
                method:'PATCH',
                body:JSON.stringify({
                    Is_like:true
                }),
                headers:{
                'Content-type': 'application/json',
                'Authorization' : 'Bearer '+Token
                } 
            }).then((response) => response.json())
              .then((json) => {console.log(json)
              // likebutton.classList.add('disabled');
            // if (json.Is_like){
            //     like.innerText = details.like + 1;
            // }
            // else {
            //     like.innerText = details.like - 1;
            // }
        });
    
            if (details.lesse[0].Is_like) {
                like.innerText = details.like
            }
            else {
                like.innerText = details.like + 1;
            }
            
            likeimage.style.color = 'red';
            on_like = true
        }
    else if (on_like){
        fetch (`http://localhost:3336/lesse/${userId}/house/${homeId}/`,{
    
        method:'PATCH',
        body:JSON.stringify({
            Is_like:false
        }),
        headers:{
        'Content-type': 'application/json',
        'Authorization' : 'Bearer '+Token
        } 
    }).then((response) => response.json())
      .then((json) => {console.log(json)
        if (details.lesse[0].Is_like) {
            like.innerText = details.like - 1
        }
        else {
            like.innerText = details.like;
        }
    
    })
        
    on_like = false  
    }
    likeimage.classList.toggle('bg-danger');
    })

}
else {
    like.innerText = details.like
    let on_like = false;
    likebutton.addEventListener(("click"),() =>{
        if(!on_like) {
            fetch (`http://localhost:3336/lesse/${userId}/house/${homeId}/`,{

            method:'PATCH',
            body:JSON.stringify({
                Is_like:true
            }),
            headers:{
            'Content-type': 'application/json',
            'Authorization' : 'Bearer '+Token
            } 
        }).then((response) => response.json())
          .then((json) => {console.log(json)
          // likebutton.classList.add('disabled');
        // if (json.Is_like){
        //     like.innerText = details.like + 1;
        // }
        // else {
        //     like.innerText = details.like - 1;
        // }
    });

        
            like.innerText = details.like + 1;
        
        likeimage.style.color = 'red';
        on_like = true
    }
else if (on_like){
    fetch (`http://localhost:3336/lesse/${userId}/house/${homeId}/`,{

    method:'PATCH',
    body:JSON.stringify({
        Is_like:false
    }),
    headers:{
    'Content-type': 'application/json',
    'Authorization' : 'Bearer '+Token
    } 
}).then((response) => response.json())
  .then((json) => {console.log(json)
        like.innerText = details.like;
    

})
    
on_like = false  
}
likeimage.classList.toggle('bg-danger');
})

report.addEventListener(("click"),() =>{
    fetch (`http://localhost:3336/lesse/${userId}/house/${homeId}/`,{

        method:'PATCH',
        body:JSON.stringify({
            Is_report:true
        }),
        headers:{
            'Content-type': 'application/json',
        'Authorization' : 'Bearer '+Token
        } 
    }).then((response) => response.json())
      .then((json) => console.log(json));
    report.classList.add('hidden');
    reportMessage.innerText = 'You have Reported on this Home';
})

}

        
        
        



// likebutton.addEventListener('click',() => {
//     a += 1;
//     like.innerText = a;
//     likeimage.style.backgroundColor = 'red';

// });




for (let value in details.Home_Photo){
    console.log(value,"here")
       if (value  == 'houseId' || value == 'id' || value == 'Home_license' || value == 'Toilet'){
        continue
       }
       console.log(details.Home_Photo[value])
        const item = document.createElement('div');
        item.classList.add('col-md-4')
        item.innerHTML += `
            <div><h6 class="pb-3 text-center">${value}</h6></div>
            <div class="images">
            <img class="img-fluid rounded " src="${details.Home_Photo[value]}" style="height:300px;width:300px" alt="house image3"> 
            </div>`
        detailsPhotoDiv.appendChild(item) 
}
}

// ${details.Home_Photo[value]}

renderDetails();


// photosFetch();

