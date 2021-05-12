const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

const carSelection = document.getElementById("car-selection");
const packageSelection = document.getElementById("package-selection");
const dateSelection = document.getElementById("date-selection");
const detailsSelection = document.getElementById("details-selection");

const datePicker = document.getElementById("date-picker");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }  
    update();
});

prev.addEventListener("click", () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }
    update();
});

const update = () => {
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add("active-circle");
        } else {
            circle.classList.remove("active-circle")
        }
    })
    const actives = document.querySelectorAll(".active-circle")
    progress.style.width = ((actives.length -1) / (circles.length -1)) * 100 + "%";

    switch(currentActive) {
        case 1: 
            prev.disabled = true;
            carSelection.style.display = 'block';
            packageSelection.style.display = 'none';
            dateSelection.style.display = 'none';
            detailsSelection.style.display = 'none';
            break;
        case 2: 
            carSelection.style.display = 'none';
            packageSelection.style.display = 'block';
            dateSelection.style.display = 'none';
            detailsSelection.style.display = 'none';
            next.disabled = false;
            prev.disabled = false;
            break;
        case 3: 
            dateSelection.style.display = 'block';
            carSelection.style.display = 'none';
            packageSelection.style.display = 'none';
            detailsSelection.style.display = 'none';
            next.disabled = false;

            if(!datePicker.value) {
                next.disabled = true;
            } else {
                next.disabled = false;
            }
            break;
        case 4:
            detailsSelection.style.display = 'block';
            dateSelection.style.display = 'none';
            carSelection.style.display = 'none';
            packageSelection.style.display = 'none';
            next.disabled = true;
            break;
        default: 
            prev.disabled = false;
            next.disabled = false;
        
    }

    console.log(currentActive === circles.length)

    // if(currentActive === 1) {
    //     prev.disabled = true;
    // } else if(currentActive === circles.length) {
    //     next.disabled = true;
    // } else {
        
    // }
}

const handleProgress = () => { 

    packageSelection.style.display = 'none';
    dateSelection.style.display = 'none';
    detailsSelection.style.display = 'none';

    if(currentActive === 2) {
        carSelection.style.display = 'none';
        packageSelection.style.display = 'flex';
        
    }


}

const appProgressBar = () => {
    handleProgress();
}

appProgressBar();

