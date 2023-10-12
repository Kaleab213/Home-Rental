class HomeGallery {
    constructor () {
        this.API_key =  "ynD33foTb3wExoXCwdGBdrdPXZRZ7tjJQTLxxIDISA4HuimDNIyg5vOA";
        this.baseURL = "https://api.pexels.com/v1/search?query=living room&per_page=9";
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
        document.getElementById('search').addEventListener('click',() => {
          this.getSearchedHome()
        })
        document.getElementById('load').addEventListener('click',()=>{
          console.log("loading more")
        })
    }

    async getImg(firstURL, secondURL) {
        const [listingData, TrendingHomes] = await this.fetchImg(firstURL, secondURL);
        console.log(listingData,TrendingHomes)
        this.generateHtml(listingData.photos);
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
        return [listingData, trendingData];
    }

    generateHtml(photos) {
        photos.forEach(photo=>{
            const item = document.createElement('div');
            item.classList.add('col-lg-4');
            item.classList.add("col-md-6");
            item.classList.add("mb-4")
            item.innerHTML = `<div class= "card shadow border-0">
            <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="${photo.src.medium}" class="card-img-top img-fluid embed-responsive-item"
              class="w-100" style="height:35vh" />
            <a href="#!">
              <div class="hover-overlay">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">${photo.photographer}</h5>
            </a>
            <a href="" class="text-reset">
              <p>${photo.id}</p>
            </a>
            <h6 class="mb-3" style="color:#4A60A1">$61.99</h6>
            <div class="specification">
              <i class="fa-thin fa-bed-front"></i>
              <span class="bedroom"5></span>
              <i class="fa-thin fa-bath"></i>
              <span class="bathrooms">4</span>
              <i class="fa-thin fa-maximize"></i>
              <span class="area-size">2096.0 ft</span>
            </div>
          </div>
        </div>
        </div>`
          this.OptionsDiv.appendChild(item);
        })
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
      const propertyValue = this.propertySearch.options[this.propertySearch.selectedIndex].text;

      const priceRange = this.priceSearch.options[this.priceSearch.selectedIndex].text;
      const searchUrl =` https://api.pexels.com/v1/search?query=${locationValue}&per_page=12`;
      this.OptionsDiv.innerHTML = '';
      this.getImg(searchUrl, this.trendingUrl)
    }

    loadMoreHomes() {
    
    }

}
const gallery = new HomeGallery();