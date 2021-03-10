
let carType = "small";
let serviceType = "maintenance";
let serviceData;

window.onload = function() {
    getJSONData();
}

const renderServiceContent = () => {
    const services = document.querySelectorAll('.service-item').forEach(item => {
        item.addEventListener('click', event => {
            const service = event.target.innerText;
            if(service === "Maintenance Wash") {
                $(".c-list-content").load('../resources/ServicesContent/maintenance.html');
            } else if(service === "Exterior Valet") {
                $(".c-list-content").load('../resources/ServicesContent/exterior-valeting.html');
            } else if(service === "Interior Valet") {
                $(".c-list-content").load('../resources/ServicesContent/interior-valeting.html');
            } else if(service === "One Stage Enhancement") {
                $(".c-list-content").load('../resources/ServicesContent/one-stage.html');
            } else {
                $(".c-list-content").load('../resources/ServicesContent/full-correction.html');
            }
        });
    })
}

const handleCarSelection = () => {
    var btnContainer = document.getElementById("c-car-selection-content");
    var btns = btnContainer.getElementsByClassName("c-car-selection-content_item");

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(event) {
            var current = btnContainer.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
            getCarType(this.id);
            handlePriceSelection()
        });
    }
}

getCarType = (car) => {
    return carType = car;
}

getServiceType = (service) => {
    return serviceType = service;
}

handleServiceType = (event) => {
    var btnContainer = document.getElementById("c-services-content_list");
    var btns = btnContainer.getElementsByClassName("service-item");
    
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(event) {
            var current = btnContainer.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
              getServiceType(this.id);
              handlePriceSelection(event);
        });
    }
}

setData = (data) => {
    serviceData = data
}

getJSONData = () => {
    $.getJSON("../resources/prices.json", function(data){
        setData(data)
    }).fail(function(){
        console.log("An error has occurred.");
    });
}

handlePriceSelection = () => {
    let servicePrice = serviceData.maintenance.small;
    // maintenance
    if(carType === 'small' && serviceType === 'maintenance') {
        servicePrice = serviceData.maintenance.small
    }

    if(carType === 'medium' && serviceType === 'maintenance') {
        servicePrice = serviceData.maintenance.medium
    }

    if(carType === 'large' && serviceType === 'maintenance') {
        servicePrice = serviceData.maintenance.large
    }

    if(carType === 'suv/jeep' && serviceType === 'maintenance') {
        servicePrice = serviceData.maintenance.jeep
    }
    // end of maintenance

    // start of exterior
    if(carType === 'small' && serviceType === 'exterior') {
        servicePrice = serviceData.exterior.small
    }

    if(carType === 'medium' && serviceType === 'exterior') {
        servicePrice = serviceData.exterior.medium
    }

    if(carType === 'large' && serviceType === 'exterior') {
        servicePrice = serviceData.exterior.large
    }

    if(carType === 'suv/jeep' && serviceType === 'exterior') {
        servicePrice = serviceData.exterior.jeep
    }
    //end of exterior

    // start of interior
    if(carType === 'small' && serviceType === 'interior') {
        servicePrice = serviceData.interior.small
    }

    if(carType === 'medium' && serviceType === 'interior') {
        servicePrice = serviceData.interior.medium
    }

    if(carType === 'large' && serviceType === 'interior') {
        servicePrice = serviceData.interior.large
    }

    if(carType === 'suv/jeep' && serviceType === 'interior') {
        servicePrice = serviceData.interior.jeep
    }
    //end of interior

    // start of one-stage
    if(carType === 'small' && serviceType === 'one-stage') {
        servicePrice = serviceData.oneStage.small
    }

    if(carType === 'medium' && serviceType === 'one-stage') {
        servicePrice = serviceData.oneStage.medium
    }

    if(carType === 'large' && serviceType === 'one-stage') {
        servicePrice = serviceData.oneStage.large
    }

    if(carType === 'suv/jeep' && serviceType === 'one-stage') {
        servicePrice = serviceData.oneStage.jeep
    }
    //end of start of one-stage

    // start of full-correction
    if(carType === 'small' && serviceType === 'full-correction') {
        servicePrice = serviceData.fullCorrection.small
    }

    if(carType === 'medium' && serviceType === 'full-correction') {
        servicePrice = serviceData.fullCorrection.medium
    }

    if(carType === 'large' && serviceType === 'full-correction') {
        servicePrice = serviceData.fullCorrection.large
    }

    if(carType === 'suv/jeep' && serviceType === 'full-correction') {
        servicePrice = serviceData.fullCorrection.jeep
    }
    //end of start of one-stage

    let price = document.getElementById("price").innerHTML = servicePrice;
}

const appGallery = () => {
    handleCarSelection();
    handleServiceType();
    renderServiceContent();
    handlePriceSelection();
}

appGallery();