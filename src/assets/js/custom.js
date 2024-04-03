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

function contactUs(event) {
    event.preventDefault();

    const form = document.getElementById('contactUsForm');
    const contactUsform = new FormData(form);
    const jsonData = {};

    contactUsform.forEach((value, key) => {
        jsonData[key] = value;
    });
    console.log(jsonData);

}