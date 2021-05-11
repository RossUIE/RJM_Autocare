
    let carType = "small";
    let serviceType = "maintenance";
    let serviceData = {
        maintenance: {
            small: 15
        }
    };

    let selectionData = {
        carType: carType,
        package: serviceType,
        date: "",
        customer: {
            name: "",
            email: "",
            phone: 0,
            message: ""
        }
    };

     formValidation = (event) => {
        event.preventDefault();
        // inputs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const phone = document.getElementById('phone').value;
        const car = document.getElementById('car').value;
    
        const form = document.getElementById('contact-form');
    
        // formFieldBoxes
        const nameFormField = document.querySelector('.nameFormfield');
        const emailFormField = document.querySelector('.emailFormfield');
        const messageFormField = document.querySelector('.messageFormfield');
        const phoneFormField = document.querySelector('.phoneFormField');
        const carFormField = document.querySelector('.carFormField');
    
        const successMessage = document.querySelector('.form-success-message');
    
        var emailValid = false;
        var nameValid = false;
        var messageValid = false;
        var phoneValid = false;
        var carValid = false;
    
        if(name == null || name == "" || !validateName(name)) {
            nameFormField.classList.add('error');
            nameValid = false;
        } else {
            nameFormField.classList.remove('error');
            nameValid = true;
        }
        if(email == null || email == "" || !validateEmail(email)) {
            emailFormField.classList.add('error');
            emailValid = false;
        } else {
            emailFormField.classList.remove('error');
            emailValid = true;
        }
        if(car == null || car == "") {
            carFormField.classList.add('error');
            carValid = false;
        } else {
            carFormField.classList.remove('error');
            carValid = true;
        }
        
    
    
        if(emailValid && nameValid && carValid) {
            selectionData.customer.name = name;
            selectionData.customer.email = email;
            if(phone) {
                if(phone == null || phone == "" || !validatePhone(phone)) {
                    phoneFormField.classList.add('error');
                    selectionData.customer.phone = phone;
                    phoneValid = false;
                    return
                } else {
                    phoneFormField.classList.remove('error');
                    phoneValid = true;
                }
            }
    
            if(message) {
                if(message == null || message == "") {
                    messageFormField.classList.add('error');
                    selectionData.customer.message = message;
                    messageValid = false;
                    return
                } else {
                    selectionData.customer.message = message;
                    messageValid = true;
                }
            }
            // $.ajax({
            // 	url: "https://formspree.io/f/mzbknjdb",
            // 	method: "POST",
            // 	data: {
            // 		Name: `${name}`,
            // 		Email: `${email}`,
            // 		Phone: `${phone}`,
            // 		Message: `${message}`
            // 	},
            // 	dataType: "json",
            // 	success: function (data, status, xhr) {// success callback function
            // 		successMessage.style.display = "flex";
            // 		setTimeout(function(){ 
            // 			successMessage.style.display = "none";
            // 		}, 10000);
            // 		form.reset();
            // 	},
            // 	error: function (error) {
            // 		alert('There was an error trying to send your email.');
            // 	}
            //   });
            console.log(selectionData)
            return true
        } else {
            return false
        }
    }
    
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    function validateName(name) {
        const re = /^[a-zA-Z ]+$/;
        return re.test(String(name).toLowerCase());
    }
    
    function validatePhone(phone) {
        const re = /^(?:\W*\d){11}\W*$/;
        return re.test(phone.toLowerCase());
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

    getCarType = (car) => {
        return carType = car;
    }
    
    getServiceType = (service) => {
        return serviceType = service;
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
                handlePriceSelection(event);
                document.getElementById("size-value").innerHTML = getCarType(this.id);
                console.log(selectionData)
            });
        }
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
                  document.getElementById("package-value").innerHTML = getServiceType(this.id);
                  console.log(selectionData)
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

    const renderDatePicker = () => {
        const backdrop = document.getElementById('calender-backdrop');
        const myDatePicker = MCDatepicker.create({ 
            el: '#date-picker',
            dateFormat: 'DD-MM-YYYY',
            bodyType: 'modal',
            disableWeekends: false,
            disableWeekDays: [1,2,3,4,5], // ex: [0,2,5]
            selectedDate: new Date(), // today
            minDate: new Date()
      })

      myDatePicker.onOpen(() => backdrop.classList.add('backdrop-active'));
      myDatePicker.onClose(() => backdrop.classList.remove('backdrop-active'));
      myDatePicker.onClose(() => {
          selectionData.date = myDatePicker.getFormatedDate();
          document.getElementById('date-value').innerHTML = myDatePicker.getFormatedDate();
      });

    }

    const appBooking = () => {
        getJSONData();
        handleCarSelection();
        handleServiceType();
        handlePriceSelection();
        renderDatePicker();
    }
    appBooking();
