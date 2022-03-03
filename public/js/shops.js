window.onload = () => {
    getData()
   
}

const getData = () => {
    fetch('../js/data.json').then((response) => {
        return response.json()
    }).then((data) => {
        buildData(data)
    })
}

const buildData = (shops) => {
    var buildShops = "";

    for(shop of shops){
        buildShops += `
        <div class="shopBox">
                    <img src="${shop.imgSrc}" alt="">
                    <div class="content">
                        <h2>${shop.name}</h2>
                        <p>${shop.description}</p>
                    </div>
                </div>
        `;
    }

    document.querySelector('.shopContainer').innerHTML = buildShops;
}

