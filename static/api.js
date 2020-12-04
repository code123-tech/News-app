console.log("we are here to present news to you.");

let newsAccordion = document.getElementById('newsAccordian');
//          
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&apiKey=d4254bcbe84d41d68429504b535e0397`, true);

xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles[0].urlToImage);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            let news = `<div class="col mb-4">
                <div class="card" id="heading${index}>
                <div class="card-body">
                    <img src="${element.urlToImage}" class="card-img-top" alt="...">
                    <h3 class="card-title">${element.title}</h3>
                    <h6 class="card-text">Published at${element.publishedAt}</h6>
                    <h6 class="card-text">written by${element.author}</h6>
                    <a href="${element.url}" class="btn btn-primary">Read More>>></a>
                </div>
            </div>
        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    } else {
        console.log("some error occured in fetching news");
    }
}
xhr.send();


let searchtext = document.getElementById("searchTxt");
let searchclick = document.getElementById("searchClick");
searchclick.addEventListener('click', function(e) {
    let inputVal = searchtext.value;
    if (inputVal != "") {
        let tbody = document.getElementsByClassName("card");
        console.log(tbody);
        Array.from(tbody).forEach(function(element, index) {
            let cardtxt = element.getElementsByTagName("h3")[0].innerText;
            console.log(element.innerText);
            if (cardtxt.includes(inputVal)) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }

        });
        e.preventDefault();
    } else {
        alert("please type something in search bar");
    }
    searchtext.value = "";
});
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("MobNo");
let validEmail = false;
let validPhone = false;
let validUser = false;

name.addEventListener('blur', () => {
    console.log("name is blurred");
    let regex = /^[a-zA-Z]([0-9a-z\ A-Z]){2,20}$/;
    let nameValue = name.value;
    if (regex.test(nameValue)) {
        console.log("your name is valid");
        name.classList.remove("is-invalid");
        validUser = true;
    } else {
        console.log("name is invalid");
        name.classList.add("is-invalid");
    }
});
email.addEventListener('blur', () => {
    console.log("email is blurred");
    let regex = /^([\w\-\.]+)@([\w\-\.]+)\.[a-zA-Z]{2,5}$/;
    let emailValue = email.value;
    if (regex.test(emailValue)) {
        console.log("your email is valid");
        email.classList.remove("is-invalid");
        validEmail = true;
    } else {
        console.log("your email is invalid");
        email.classList.add("is-invalid");
    }
});
phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    let regex = /^([0-9]){10}$/;
    let phoneValue = phone.value;
    if (regex.test(phoneValue)) {
        console.log("your phone is valid");
        phone.classList.remove("is-invalid");
        validPhone = true;
    } else {
        console.log("your Mobile number is invalid");
        phone.classList.add("is-invalid");
    }
});

let reset = document.getElementById("btn1");
reset.addEventListener('click', (e) => {
    let formid = document.getElementById("contact");
    formid.reset();
})
let validate = document.getElementById('btn2');
validate.addEventListener('click', (e) => {
    e.preventDefault();
    let inputCity = document.getElementById("inputCity");
    let inputState = document.getElementById("inputState");
    if (validEmail && validPhone && validUser && inputCity.value != "" && inputState.value != "") {
        let failureid = document.getElementById("faliure");
        console.log("Valid Details have been entered.");
        alert(`Your details are valid, you can submit the form`);
    } else {
        console.log("Please fill All the details in the form.");
        alert(`Failure! Please Fill all the Details.`);
    }
});



















































































// d4254bcbe84d41d68429504b535e0397=api_key