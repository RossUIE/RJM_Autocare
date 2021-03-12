const formValidation = (event) => {
    event.preventDefault();
    // inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const form = document.getElementById('contact-form');

    // formFieldBoxes
    const nameFormField = document.querySelector('.nameFormfield');
    const emailFormField = document.querySelector('.emailFormfield');
    const messageFormField = document.querySelector('.messageFormfield');

    const successMessage = document.querySelector('.form-success-message');

    var emailValid = false;
    var nameValid = false;
    var messageValid = false;

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
     if(message == null || message == "") {
        messageFormField.classList.add('error');
        messageValid = false;
        console.log("oianw")
    } else {
        messageFormField.classList.remove('error');
        messageValid = true;
    }


    if(emailValid && nameValid && messageValid) {
		$.ajax({
			url: "https://formspree.io/xnqgzprz",
			method: "POST",
			data: {
				Name: `${name}`,
				Email: `${email}`,
				Phone: `${phone}`,
				Message: `${message}`
			},
			dataType: "json",
			success: function (data, status, xhr) {// success callback function
				successMessage.style.display = "flex";
				setTimeout(function(){ 
					successMessage.style.display = "none";
				}, 10000);
				form.reset();
			},
			error: function (error) {
				alert('There was an error trying to send your email.');
			}
		  });
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