export const homeDetailId = localStorage.getItem('homeDetailId');
class HomeGallery {
    constructor () {
        this.API_key =  "ynD33foTb3wExoXCwdGBdrdPXZRZ7tjJQTLxxIDISA4HuimDNIyg5vOA";
        this.baseURL = "http://localhost:3336/house/";
        this.trendingUrl = "https://api.pexels.com/v1/search?query=house&per_page=4"
        this.evnetHandle()
        this.OptionsDiv = document.getElementById('options');
        this.hotOffersDiv = document.getElementById('hot-offer');
        this.locationSearch = document.getElementById('location');
        this.propertySearch = document.getElementById('property');
        // this.priceSearch = document.getElementById('price');
        this.searchButton = documnet.getElementById('search');
    }

    evnetHandle() {
        document.addEventListener("DOMContentLoaded",()=>{
            this.getImg(this.baseURL,this.trendingUrl)
        })
        document.getElementById('search').addEventListener('click',(e) => {
          e.preventDefault();
          console.log("here searching...")
          this.getSearchedHome()
        })
        document.getElementById('load').addEventListener('click',()=>{
          console.log("loading more")
        })
        
      //  document.getElementsByClassName('img-btn').forEach(img=>{
      //   img.addEventListener('click',function(){
      //     console.log(this)
      //   })
      //  })
       
    }

    async getImg(firstURL, secondURL) {
        const [listingData, TrendingHomes] = await this.fetchImg(firstURL, secondURL);
        console.log(listingData,TrendingHomes)
        this.generateHtml(listingData);
        this.generateTrendingHtml(TrendingHomes.photos);
    }

    async fetchImg(baseURL,trendingUrl) {
        const response1  = await  fetch(baseURL,{
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: this.API_key
            }
        
        })

        const listingData = await response1.json()
        const response2 = await fetch(trendingUrl, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: this.API_key
          }
        })
        const trendingData = await response2.json();
        // const response3 = await fetch("http://localhost:3000/house/", {
        //   method: "GET",
        //   headers: {
        //     Accept: "application/json",
        //   }
        // })
        // const dbData = await response3.json()
        // console.log(dbData);
        return [listingData, trendingData];
    }
    generateHtml(photos) {
        photos.forEach(home=>{
            const item = document.createElement('div');
            item.classList.add('col-lg-4');
            item.classList.add("col-md-6");
            item.classList.add("mb-4")
            item.innerHTML = `<div class= "card shadow border-0">
            <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="${home.Home_Photo.Door}" class="card-img-top img-fluid embed-responsive-item img-btn"  id="${home.id}"
              class="w-100" style="height:35vh" />
            <a href="#!">
              <div class="hover-overlay">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">${home.Sub_City}</h5>
            </a>
            <a href="" class="text-reset">
              <p>${home.id}</p>
            </a>
            <h6 class="mb-3" style="color:#4A60A1">${home.Price} birr</h6>
            <div class="specification">
              <i class="fa-thin fa-bed-front"></i>
              <span class="bedroom"5></span>
              <i class="fa-thin fa-bath"></i>
              <span class="bathrooms">4</span>
              <i class="fa-thin fa-maximize"></i>
              <span class="area-size">${home.Size} ft</span>
            </div>
          </div>
        </div>
        </div>`
          this.OptionsDiv.appendChild(item);
        })
        const img_buttons = document.getElementsByClassName('img-btn');
        for(let i of img_buttons) {
          const id = i.id
          i.addEventListener('click',function(){
            console.log(id,"here")
            localStorage.setItem('homeDetailId',id)
            window.location.href = 'HomeDetail.html'
          })
      }
    }

    generateTrendingHtml(photos) {
      photos.forEach(photo => {
        const item = document.createElement('div');
        item.classList.add('trending-images');
        item.classList.add('col-lg-3');
        item.classList.add('col-md-6');
        item.innerHTML = `<div class="card shadow">
                          <img src=${photo.src.medium} class="img-fluid border-radius" style="height:45vh;">
                          </div>`
        this.hotOffersDiv.appendChild(item);
        })

    }

    getSearchedHome() {
      console.log("getting searched home")
      const locationValue = this.locationSearch.options[this.locationSearch.selectedIndex].text;
      console.log(this.propertySearch)
      const propertyValue = this.propertySearch.options[this.propertySearch.selectedIndex].text;
      let query = ""
      if (locationValue != "Search by location") {
        query += `location=${locationValue}&`
      }
      if (propertyValue != "Search Home Type" ) {
        query += `Home_Type=${propertyValue}&`
      }
      // const priceRange = this.priceSearch.options[this.priceSearch.selectedIndex].text;
      const searchUrl =`http://localhost:3336/house?${query}`;
      console.log(searchUrl,"here sear")
      this.OptionsDiv.innerHTML = '';
      console.log(searchUrl);
      this.getImg(searchUrl, this.trendingUrl)
    }
    // getDetails(id) {
    //   localStorage.setItem('homeId',id);
    //   console.log(localStorage.getItem('homeId'))
    // }

}
const gallery = new HomeGallery();
