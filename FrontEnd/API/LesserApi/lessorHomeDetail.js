const homeId = localStorage.getItem('homeDetailsId');
const leessorId = localStorage.getItem('userId');
const Token = localStorage.getItem('access_token');
const buttonsDiv = document.getElementById('detailed_container');
const detailsPhotoDiv = document.getElementById('test');

async function getDetails() {
    let url = `http://localhost:3336/house/${homeId}/lesser/${leessorId}/`;
    try {
        let res = await fetch(url,{
            headers: {
                'content-Type': 'application/json',
                Authorization: 'Bearer ' +Token
                }
        });
        console.log(res)
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderDetails() { 
    let details = await getDetails();
    console.log(details)
        const item = document.createElement('div');
        item.classList.add('text-center')
        item.classList.add('house_information');
        item.classList.add('py-3')
        item.innerHTML += `
                <h1>House Information</h1>
                <p>Sub City:  <b>${details.Sub_City}</b></p>
               <p>Wereda:  <b>${details.Wereda} </b> </p>
               <p>Kebele:  <b>${details.Kebele} </b> </p>
               <p>Size:  <b>${details.Size} </b> </p>
               <p>price:  <b>${details.Price} </b> </p> 
                 ` 
        document.getElementById('target').appendChild(item);

        for (let value in details.Home_Photo){
               if (value  == 'houseId' || value == 'id' || value == 'Home_license' || value == 'Toilet'){
                continue
               }
               console.log(details.Home_Photo[value])
                const item = document.createElement('div');
                item.classList.add('col-md-4')
                item.innerHTML += `
                    <div><h6 class="pb-3 text-center">${value}</h6></div>
                    <div class="images">
                    <img class="img-fluid rounded " src="${details.Home_Photo[value]}" style="height:45vh; width:40vw" alt="house image3"> 
                    </div>`
                detailsPhotoDiv.appendChild(item) 
        }
        const item2 = document.createElement('div');
        item2.classList.add('row')
        item2.innerHTML += `<button class='btn me-5 col-md-5' style="background-color: #2C3A61;color:white" id="update-btn">Update Home Details</button>
                            <button class='btn btn-danger col-md-5' id="delete-btn">Delete Home</button>`;
        buttonsDiv.appendChild(item2);
        const deleteButton = document.getElementById('delete-btn');
        deleteButton.addEventListener('click',()=>{
            deleteButton.classList.add('disabled');
            fetch(`http://localhost:3336/house/${homeId}/lesser/${leessorId}`,{
                method: 'DELETE',
                headers: {
                    'content-Type': 'application/json',
                    Authorization: 'Bearer ' +Token
                    }
            }).then(res => res.json).then(data=>{
                window.location.href = './LessorUploads.html'
            })
        })
        const updateButton = document.getElementById('update-btn');
        updateButton.addEventListener('click',()=>{
            console.log(homeId,leessorId)
            window.location.href = './homeUpdate.html';
        })
}

renderDetails()