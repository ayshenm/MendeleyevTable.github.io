const container = document.getElementById("container");
let cardCount = 8; 
let dataToShow = data.slice(0, cardCount);



cards = (data, startIndex, endIndex) => {
    container.innerHTML = data
        .map(
            (item, index) => `
                <div  onclick="showCard(${index})" class="card" style="width: 18rem; z-index:1; box-shadow:1px 1px 10px #ccc">
                    <div class="card-body">
                        <h5 class="card-title text-danger px-2">${item.name}</h5>
                        <p class="card-text">${item.summary}</p>
                    </div>
                    <div class="hidden-card" id="hidden-card-${index}">
                        <h1>hello</h1>
                    </div>
                </div>`
        )
        .join("");
};

cards(dataToShow);
const selectedCardContainer = document.getElementById("selected-card");

function showCard(index) {
  selectedCardContainer.innerHTML = "";
  const selectedItem = data[index]; 
  // console.log(selectedItem);
  selectedCardContainer.innerHTML = `
                <div class="card" style=" width: 18rem">
                  <div class="card-header d-flex justify-content-between align-items-center">
                    <h4>${selectedItem.name}</h4>
                    <i id="close_icon" onclick="clearr()" style="cursor:pointer" class="fa-solid fa-xmark"></i>
                    </div>
                    
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${selectedItem.appearance}</li>
                            <li class="list-group-item">${selectedItem.atomic_mass}</li>
                            <li class="list-group-item">${selectedItem.boil}</li>
                            <li class="list-group-item">${selectedItem.category}</li>
                            <li class="list-group-item">${selectedItem.color}</li>
                            <li class="list-group-item">${selectedItem.density}</li>
                            <div class="card-footer bg-transparent">
                               <a href="${selectedItem.source}" target ="_blank" class="card-link text-decoration-none">seyfeye get</a>  
                               <a href="${selectedItem.spectral_img}" target ="_blank"  class="card-link text-decoration-none">shekilin gor</a>  
                            </div>
                    </div>
                </div>
            `;
  selectedCardContainer.style.display = "block";
}

ok = () => {
  const filterText = document.getElementById("filter_txt").value.toLowerCase();
  const filteredData = data.filter((item) => item.name.toLowerCase().includes(filterText));
  cards(filteredData);
  const button = document.getElementById("show-more-btn");
  button.style.display = "none"
};

function clearr() {
  const i = document.getElementById("close_icon");
  console.log(i);
  console.log("hh");
  selectedCardContainer.style.display = "none";
}



function showMoreCards() {
    const additionalCards = 8;
    cardCount += additionalCards;
    dataToShow = data.slice(0, cardCount);
    cards(dataToShow);

  // Yeni kartları görüntüle
  cards(data, currentCardCount, currentCardCount + additionalCards);

}


