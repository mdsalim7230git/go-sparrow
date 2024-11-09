// Timeline Working Process Script

  var feedback = new Swiper(".myfeedback", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".feedback-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".feedback-button-next",
      prevEl: ".feedback-button-prev",
    },
  });


// Query Popup Button Click Event Service ID = service_b56qed6
let queryPopup = document.getElementById('query-popup');

function openQueryPopup(){
  queryPopup.classList.add('open-query-popup');
}

function closeQueryPopup(){
  queryPopup.classList.remove('open-query-popup');
}

// Career Popup Button Click Event
let careerPopup = document.getElementById('career-popup');

function openCareerPopup(){
  careerPopup.classList.add('open-career-popup');
}

function closeCareerPopup(){
  careerPopup.classList.remove('open-career-popup');
}

// SWIPER JS VERTICAL SLIDER FOR ABOUT-US BODY START
var verticalSwiper = new Swiper(".verticalSwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// SWIPER JS VERTICAL SLIDER FOR ABOUT-US BODY START

