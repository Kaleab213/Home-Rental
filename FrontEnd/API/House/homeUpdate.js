const homeId = localStorage.getItem('homeDetailsId');
const lessorId = localStorage.getItem('userId');
const Token = localStorage.getItem('access_token');
console.log(homeId,lessorId,Token)
const houseType= document.getElementById('housetype');
const size= document.getElementById('size');
const date = document.getElementById('date');
const price= document.getElementById('price');
const city = document.getElementById('city');
const sub = document.getElementById('sub');
const wereda = document.getElementById('wereda');
const kebele = document.getElementById('kebele');
const houseNo = document.getElementById('house_no');
const form = document.getElementById('form');
const submitbutton = document.getElementById('submit-btn');

fetch(`http://localhost:3336/house/${homeId}/lesser/${lessorId}/`,{
    headers: {
        'content-Type': 'application/json',
        Authorization: 'Bearer ' +Token
        }
}).then(result => result.json()).then(data => {
    console.log(data)
    console.log(houseType)
    houseType.value = data.Home_Type;
    size.value = data.Size;
    price.value = data.Price;
    city.value = data.City;
    sub.value = data.Sub_City;
    wereda.value = data.Wereda;
    kebele.value = data.Kebele;
    houseNo.value = data.home_no;
})

submitbutton.addEventListener('click',()=>{
    console.log("submitting")
    const door= document.getElementById('door').files[0];
    const floor= document.getElementById('floor').files[0];
    const wall= document.getElementById('wall').files[0];
    const roof= document.getElementById('roof').files[0];
    const shower= document.getElementById('shower').files[0];
    const toilet= document.getElementById('toilet').files[0];
    const kitchen= document.getElementById('kitchen').files[0];
    const license= document.getElementById('license').files[0];
    const errorMessage = document.getElementById('error');
    const formData=new FormData()
    formData.append('Home_Type',houseType)
    formData.append('Price',price)
    // formData.append('Date',date)
    formData.append('City',city.value)
    formData.append('Sub_City',sub.value)
    formData.append('Wereda',wereda.value)
    formData.append('Kebele',kebele.value)
    formData.append('home_no',houseNo.value)
    formData.append('Size',size.value)
    formData.append('door',door)
    formData.append('floor',floor)
    formData.append('wall',wall)
    formData.append('roof',roof)
    formData.append('toilet',toilet)
    formData.append('shower',shower)
    formData.append('kitchen',kitchen)
    formData.append('licenses',license)
    console.log(price.value)
    

    fetch(`http://localhost:3336/house/${homeId}/lesser/${lessorId}`,{
                method: "PATCH",
                body:JSON.stringify({
                Home_Type: houseType.value,
                Size :size.value,
                Price: price.value ,
                City : city.value,
                Sub_City :sub.value,
                Wereda:wereda.value,
                Kebele : kebele.value,
                home_no : houseNo.value,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' +Token
                    }
                }
    ).then(function (response) {
        return response.json()}).then(function(data) {
            if (data.statusCode == 400){
                errorMessage.style.color = 'red';
                errorMessage.innerHTML = 'Some fields have not been filled!';
            }
            else if (data.statusCode == 401 || data.statusCode == 403 ) {
                window.location.href = './lessorLogin.html';
            }
            else {
                console.log(data)
                window.location.href = './LessorUploads.html'
            }
        })
})