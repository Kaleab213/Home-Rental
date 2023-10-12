import { Token } from "../API/Login.js"
function deal(){
fetch('http://localhost:3336/lesse/4/house/7',{method: 'POST',
body:JSON.stringify({
    is_deal: true,

}),
headers:{
    "Content-Type": "application/json",
    
    Authorization: 'Bearer ' + Token,
}}).then((response) => response.json()).then((data) => {
  console.log(data)
})}