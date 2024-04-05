console.log('Custom JS is Working')

window.addEventListener('load', event => {
    // Set Current year in footer
    document.getElementById("year").innerText = new Date().getFullYear();;
});

window.addEventListener("scroll", event => {
    let navbar = document.getElementById("navbar");
    if (window.scrollY >= 75) {
        navbar.classList.add("navbar--scrolled");
    } else {
        navbar.classList.remove("navbar--scrolled");
    }
});

function getFormValue(event, formId) {
    event.preventDefault();

    const form = document.getElementById(formId);
    const formDate = new FormData(form);
    const jsonData = {};

    formDate.forEach((value, key) => {
        jsonData[key] = value;
    });
    console.log(jsonData);
    return jsonData;
}



// Risk Analysis Form
let currentStep = 1;

function changeStep(isStepOne) {
    document.getElementById(`step-${currentStep}`).classList.remove('active-step');
    isStepOne ? currentStep++ : currentStep--;
    document.getElementById(`step-${currentStep}`).classList.add('active-step');
}

function submitRiskAnalysisForm(event, formId, isStepOne = true) {
    const form = document.getElementById(formId);
    if(form.checkValidity()) {
        getFormValue(event, formId);
        changeStep(isStepOne);
    } else{
        event.preventDefault();
        event.stopPropagation();
    }

    form.classList.add('was-validated')
}


// Function to validate the PAN Number 
// 
function isValidPanCardNo(panCardNo) {
    let regex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
 
    // if PAN Number 
    // is empty return false
    if (panCardNo == null) {
        return "false";
    }
 
    // Return true if the PAN NUMBER
    // matched the ReGex
    if (regex.test(panCardNo) == true) {
        return "true";
    }
    else {
        return "false";
    }
}