// burger menu
let inner_nav = document.querySelector(".header_inner_nav");
let toggle = document.querySelector(".nav-toggle");
toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  inner_nav.classList.toggle("active");
});

////tadu
let tabs_title = document.querySelectorAll(".ourLocations_tabs_title");
let tabs_nav_card = document.querySelectorAll(".ourLocations_tabs_nav_card");
// console.log(tabs_title);
// console.log(tabs_nav_card);

for (let i = 0; i < tabs_title.length; i++) {
  let nav_tab = tabs_title[i];
  // console.log(nav_tab);
  nav_tab.addEventListener("click", function () {
    // console.log(this);
    for (let i = 0; i < tabs_title.length; i++) {
      tabs_title[i].classList.remove("active_title");
    }
    this.classList.add("active_title");
    for (let i = 0; i < tabs_nav_card.length; i++) {
      tabs_nav_card[i].style.display = "none";
    }

    tabs_nav_card[i].style.display = "flex";
  });
}

////accordion

let accordion_card = document.querySelectorAll(".FAQ_accordion_card");

for (let i = 0; i < accordion_card.length; i++) {
  let accordion_card_nav = accordion_card[i];
  // console.log(accordion_card_nav);
  accordion_card_nav.addEventListener("click", function () {
    for (let i = 0; i < accordion_card.length; i++) {
      console.log(this);
      let accord_card_nav = accordion_card[i];
      accord_card_nav.classList.remove("content_active");
    }

    this.classList.toggle("content_active");
  });

  // accord_card_nav.classList.toggle("content_active");i
  // hideAll(this);
}

//// form
let form = document.querySelector("#question_form");
// console.log(form);
let button = document.querySelector(".question_form_button");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let tel = document.querySelector(".input_tel");
  let fname = document.querySelector(".input_fname");
  let email = document.querySelector(".input_email");
  let lname = document.querySelector(".input_lname");
  let message = document.querySelector(".form_message");

  if (
    fname.value.length !== 0 &&
    lname.value.length !== 0 &&
    email.value.length !== 0 &&
    tel.value.length !== 0 &&
    message.value.length !== 0
  ) {
    // console.log(fname);
    let myelem = document.querySelectorAll(".myelem");
    console.log(myelem);
    myelem.forEach(function (elem) {
      console.log(elem.parentNode);
      console.log(1);
      elem.parentNode.classList.remove("error");
    });
  } else {
    console.log("inelse");
    let myelem = document.querySelectorAll(".myelem");

    myelem.forEach(function (elem) {
      console.log(elem.parentNode);
      if (elem.value.length === 0) {
        elem.parentNode.classList.add("error");
      }
    });
  }
});

///pop up
let popupLink = document.querySelectorAll(".popup-link");
let closePopup = document.querySelector(".popup_close");
let popup = document.querySelector(".popup");
let popupBody = document.querySelector(".popup_body");
// console.log(popupLink);
// let unlock = true;
// let timeout = 800;

if (popupLink.length > 0) {
  for (let i = 0; i < popupLink.length; i++) {
    let popupLinks = popupLink[i];
    popupLinks.addEventListener("click", (e) => {
      e.preventDefault();
      popup.classList.add("active");
    });
  }
}

closePopup.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.remove("active");
});

popup.addEventListener("click", (e) => {
  if (!e.target.closest(".popup_content")) {
    popup.classList.remove("active");
  }
});

// // scroll
// let scrol = document.querySelectorAll("data-scroll");
// // console.log(scrol);

// scrol.addEventListener("click", (event) => {
//   event.preventDefault();

//   // let $this = $(this),
//     blockId = scrol.data("scroll"),
//     blockOffset = $(blockId).offset().top;

//   $("#ascrol a").removeClass("active");
//   scrol.addClass("active");

//   $("html, body").animate(
//     {
//       scrollTop: blockOffset,
//     },
//     500
//   );
// });
