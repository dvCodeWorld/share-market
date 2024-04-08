window.addEventListener("load", (event) => {
  // Set Current year in footer
  getById("year").innerText = new Date().getFullYear();
});

window.addEventListener("scroll", (event) => {
  let navbar = getById("navbar");
  if (window.scrollY >= 75) {
    navbar.classList.add("navbar--scrolled");
  } else {
    navbar.classList.remove("navbar--scrolled");
  }
});

function getById(id) {
  return document.getElementById(id);
}

function getFormValue(event, formId) {
  event.preventDefault();

  const form = getById(formId);
  const formDate = new FormData(form);
  const jsonData = {};

  formDate.forEach((value, key) => {
    jsonData[key] = value;
  });
  console.log("Form Values: ", jsonData);
  return jsonData;
}

// Risk Analysis Form
let currentStep = 1;

function changeStep(isStepOne) {
  getById(`step-${currentStep}`).classList.remove("active-step");
  isStepOne ? currentStep++ : currentStep--;
  getById(`step-${currentStep}`).classList.add("active-step");
}

function submitRiskAnalysisForm(event, formId, isStepOne = true) {
  const form = getById(formId);
  if (form.checkValidity()) {
    riskFormObject.userInfo = getFormValue(event, formId);
    changeStep(isStepOne);
  } else {
    event.preventDefault();
    event.stopPropagation();
  }

  form.classList.add("was-validated");
}

// Function to validate the PAN Number
//
function isValidPanCardNo(panCardNo) {
  let regex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
  if (panCardNo == null) {
    return "false";
  }
  if (regex.test(panCardNo) == true) {
    return "true";
  } else {
    return "false";
  }
}

function handleFormChange() {
  // None < 18
  // Medium - Preferred Service- Stock Cash     SCRORE >= 18 && SCORE >= 22
  // High - Preferred Service Future, Option, Commodity    SCRORE > 22
  // Maximum score client can obtain is 77

  const riskForm = getById("riskAnalysisForm2").elements;
  let count = 0;
  let riskCount = 0;
  let choicesObject = {};
  for (var i = 0; i < riskForm.length; i++) {
    if (
      riskForm[i].type === "radio" &&
      riskForm[i].checked &&
      riskForm[i].dataset.id
    ) {
      count++;
      let name = riskForm[i].name;
      riskCount += Number(riskForm[i].dataset.id);
      choicesObject[name] = riskForm[i].value;
    }
  }
  riskFormObject.options.score = riskCount;
  riskFormObject.options.choices = choicesObject;
  riskFormObject.options.selectedChoiceCount = count;

  getById("riskScore").value = riskCount;
  const riskSegmemt = getById("riskSegmemt");

  if (riskCount !== 0) {
    var lowRiskWrapper = getById("lowRiskWrapper");
    var moderateRiskWrapper = getById("moderateRiskWrapper");
    var highRiskWrapper = getById("highRiskWrapper");

    if (riskCount < 18) {
      riskSegmemt.value = "None";
      lowRiskWrapper.innerHTML = lowRiskWrapperContent;
      moderateRiskWrapper.innerHTML = "";
      highRiskWrapper.innerHTML = "";
    } else if (riskCount >= 18 && riskCount <= 22) {
      riskSegmemt.value = "Medium - Preferred Service- Stock Cash";
      lowRiskWrapper.innerHTML = "";
      moderateRiskWrapper.innerHTML = moderateRiskWrapperContent;
      highRiskWrapper.innerHTML = "";
    } else {
      riskSegmemt.value = "High - Preferred Service Future, Option, Commodity";
      lowRiskWrapper.innerHTML = "";
      moderateRiskWrapper.innerHTML = moderateRiskWrapperContent;
      highRiskWrapper.innerHTML = highRiskWrapperContent;
    }
  }
}

function submitSelectServicesForm(event, formId) {
  riskFormObject.options.businessName = getById("question21").value;
  riskFormObject.selectedServices = getFormValue(event, formId);
  console.log("riskFormObject", riskFormObject);
}

function printSection(sectionId) {
  const printContents = document.getElementById(sectionId).innerHTML;
  const originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  // Print the specific div
  window.print();
  // Restore original page content
  document.body.innerHTML = originalContents;
}
