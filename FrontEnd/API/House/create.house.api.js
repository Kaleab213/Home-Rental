import { Token, userId } from "../Login.js";

const form = document.getElementById('houseregister');
// async function fileUpload(formElement) {
//     const formData = new FormData(formElement);
console.log("sumitted")
console.log(form)
if(form){
form.addEventListener('submit',function(e){
    e.preventDefault();
    
const type= document.getElementById('type').value;
const size= document.getElementById('size').value;
const price= document.getElementById('price').value;
// const date= document.getElementById('date').value;
const wereda= document.getElementById('wereda').value;
const city= document.getElementById('city').value;
const sub= document.getElementById('sub').value;
const kebele= document.getElementById('kebele').value;
const home_no= document.getElementById('house_no').value;
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
formData.append('Home_Type',type)

formData.append('Price',price)
// formData.append('Date',date)
formData.append('City',city)
formData.append('Sub_City',sub)
formData.append('Wereda',wereda)
formData.append('Kebele',kebele)
formData.append('home_no',home_no)
formData.append('Size',size)
formData.append('door',door)
formData.append('floor',floor)
formData.append('wall',wall)
formData.append('roof',roof)
formData.append('toilet',toilet)
formData.append('shower',shower)
formData.append('kitchen',kitchen)
formData.append('licenses',license)

console.log(userId)
console.log(Token)

fetch(`http://localhost:3336/house/${userId}`,{
    method: 'POST',
    // dataType:"jsonp"
    body:formData,
    // JSON.stringify({
    // Home_Type:type,
    // Size:size,
    // Price:price,
    // Date:date,
    // City:city,
    // Sub_City:sub,
    // Wereda:wereda,
    // Kebele:kebele,
    // home_no:home_no,
    // // door:door,
    // // floor:floor,
    // // wall:wall,
    // // roof:roof,
    // // shower:shower,
    // // toilet:toilet,
    // // kitchen:kitchen,
    // // license:license,
    // formData
    // },formData),
    headers:{
        // "Content-Type": "application/json",
        Authorization:`Bearer ${Token}`, 
    }

}).then(function (response) {
    return response.json()}).then(function(data) {
        if (data.statusCode == 400){
            errorMessage.style.color = 'red';
            errorMessage.innerHTML = 'Some fields have not been filled!';
        }
        else if (data.statusCode == 401 || data.statusCode == 403 ) {
            window.location.href = './lessorLogin.html';
        }
        else {
            window.location.href = './LessorUploads.html'
        }
    
    })

    }
)}