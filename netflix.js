let btn = document.querySelector(`.btn`);
let eng = document.querySelector(`#eng`);
let hin = document.querySelector(`#hin`);
let lng = document.querySelector(`.lng`);
let lan = document.querySelector(`#lan`);
let btn1 = document.querySelector(`.btn1`);
let eng1 = document.querySelector(`#eng1`);
let hin1 = document.querySelector(`#hin1`);
let lng1 = document.querySelector(`.lng1`);
let lan1 = document.querySelector(`#lan1`);

btn.addEventListener('click', () => {
    lng.classList.add("active");
    btn.style.border = "2px solid white";

});
btn.addEventListener('dblclick', () => {
    lng.classList.remove("active");
});
eng.addEventListener('click', function () {
    lan.innerHTML = `English`;
    lng.classList.remove("active");

})
hin.addEventListener('click', function () {
    lan.innerHTML = `हिन्दी`;
    lng.classList.remove("active");

})


btn1.addEventListener('click', () => {
    lng1.classList.add("active1");
    btn1.style.border = "2px solid white";


});
btn1.addEventListener('dblclick', () => {
    lng1.classList.remove("active1");

});
eng1.addEventListener('click', function () {
    lan1.innerHTML = `English`;
    lng1.classList.remove("active1");

})
hin1.addEventListener('click', function () {
    lan1.innerHTML = `हिन्दी`;
    lng1.classList.remove("active1");

})

let faq1 = document.querySelector(".faq1");
let faq2 = document.querySelector(".faq2");
let faq3 = document.querySelector(".faq3");
let faq4 = document.querySelector(".faq4");
let faq5 = document.querySelector(".faq5");
let faq6 = document.querySelector(".faq6");

let faqbox1 = document.querySelector(".faqbox1");
let faqbox2 = document.querySelector(".faqbox2");
let faqbox3 = document.querySelector(".faqbox3");
let faqbox4 = document.querySelector(".faqbox4");
let faqbox5 = document.querySelector(".faqbox5");
let faqbox6 = document.querySelector(".faqbox6");

let plus1 = document.querySelector(".plus1");
let plus2 = document.querySelector(".plus2");
let plus3 = document.querySelector(".plus3");
let plus4 = document.querySelector(".plus4");
let plus5 = document.querySelector(".plus5");
let plus6 = document.querySelector(".plus6");

let cross1 = document.querySelector(".cross1");
let cross2 = document.querySelector(".cross2");
let cross3 = document.querySelector(".cross3");
let cross4 = document.querySelector(".cross4");
let cross5 = document.querySelector(".cross5");
let cross6 = document.querySelector(".cross6");


faq1.addEventListener('click', function () {
    plus1.style.display = "none";
    faqbox1.style.display = "flex";

})
faq2.addEventListener('click', function () {
    plus2.style.display = "none";
    faqbox2.style.display = "flex";

})
faq3.addEventListener('click', function () {
    plus3.style.display = "none";
    faqbox3.style.display = "flex";

})
faq4.addEventListener('click', function () {
    plus4.style.display = "none";
    faqbox4.style.display = "flex";

})
faq5.addEventListener('click', function () {
    plus5.style.display = "none";
    faqbox5.style.display = "flex";

})
faq6.addEventListener('click', function () {
    plus6.style.display = "none";
    faqbox6.style.display = "flex";

})

plus1.addEventListener('click', function () {
    plus1.style.display = "none";
    faqbox1.style.display = "flex";

})

cross1.addEventListener('click', function () {
    faqbox1.style.display = "none";
    plus1.style.display = "flex";
})

plus2.addEventListener('click', function () {
    plus2.style.display = "none";
    faqbox2.style.display = "flex";

})

cross2.addEventListener('click', function () {
    faqbox2.style.display = "none";
    plus2.style.display = "flex";
})

plus3.addEventListener('click', function () {
    plus3.style.display = "none";
    faqbox3.style.display = "flex";

})

cross3.addEventListener('click', function () {
    faqbox3.style.display = "none";
    plus3.style.display = "flex";
})

plus4.addEventListener('click', function () {
    plus4.style.display = "none";
    faqbox4.style.display = "flex";

})

cross4.addEventListener('click', function () {
    faqbox4.style.display = "none";
    plus4.style.display = "flex";
})

plus5.addEventListener('click', function () {
    plus5.style.display = "none";
    faqbox5.style.display = "flex";

})

cross5.addEventListener('click', function () {
    faqbox5.style.display = "none";
    plus5.style.display = "flex";
})

plus6.addEventListener('click', function () {
    plus6.style.display = "none";
    faqbox6.style.display = "flex";

})

cross6.addEventListener('click', function () {
    faqbox6.style.display = "none";
    plus6.style.display = "flex";
})
