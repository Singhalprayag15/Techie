// // Loader...

// let loader = document.getElementById('loader-display');

// function myLoader() {
//     loader.style.display = 'none';
// };

// NavBar....

let navBar = document.getElementById("mainNav-div");

window.addEventListener("scroll", function () {
  navBar.classList.toggle("sticky", this.window.scrollY > 600);
});

// Home Button....

let homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => {
  let url = "https://www.instagram.com/";
  let fectures = "height = 500,width = 500";
  window.open(url, "instagram", fectures);
});

// Number Counter...

let num = document.querySelectorAll(".p-about2");

num.forEach(function (number) {
  number.innerHTML = 0;

  let loop = () => {
    const endVAl = +number.getAttribute("data-target");
    const initalVal = Number(number.innerHTML);
    const incVal = endVAl / 150;

    if (initalVal < endVAl) {
      number.innerHTML = `${Math.round(initalVal + incVal)}`;
      setTimeout(loop, 50);
    } else {
      number.innerHTML = endVAl;
    }
  };

  loop();
});

// Service...

// First Service Box
let ServiceBox = document.getElementById("box1-serviceP2");

ServiceBox.addEventListener("mouseenter", () => {
  let icon = document.querySelector(".bi-xbox");
  let iconDiv = document.querySelector("#icon-box1");
  let para1Service = document.querySelector("#p1-iconBox");
  ServiceBox.style.boxShadow = "0px 2px 25px rgb(121, 119, 119)";
  icon.style.color = "white";
  iconDiv.style.backgroundColor = "#4690f9";
  para1Service.style.animation = "iconRoll 2s linear";
});

ServiceBox.addEventListener("mouseleave", () => {
  let icon = document.querySelector(".bi-xbox");
  let iconDiv = document.querySelector("#icon-box1");
  let para1Service = document.querySelector("#p1-iconBox");
  ServiceBox.style.boxShadow = "0px 0px 0px rgb(255, 255, 255)";
  icon.style.color = "#4690f9";
  iconDiv.style.backgroundColor = "white";
  para1Service.style.animation = "none";
});

// Second Service Box
let ServiceBox2 = document.getElementById("box2-serviceP2");

ServiceBox2.addEventListener("mouseenter", () => {
  let icon = document.querySelector(".bi-trophy-fill");
  let iconDiv = document.querySelector("#icon-box2");
  let para2Service = document.querySelector("#p2-iconBox");
  ServiceBox2.style.boxShadow = "0px 2px 25px rgb(121, 119, 119)";
  icon.style.color = "white";
  iconDiv.style.backgroundColor = "rgb(245, 175, 45)";
  para2Service.style.animation = "iconRoll 2s linear";
});

ServiceBox2.addEventListener("mouseleave", () => {
  let icon = document.querySelector(".bi-trophy-fill");
  let iconDiv = document.querySelector("#icon-box2");
  let para2Service = document.querySelector("#p2-iconBox");
  ServiceBox2.style.boxShadow = "0px 0px 0px rgb(255, 255, 255)";
  icon.style.color = "rgb(245, 175, 45)";
  iconDiv.style.backgroundColor = "white";
  para2Service.style.animation = "none";
});

// Third Service Box
let ServiceBox3 = document.getElementById("box3-serviceP2");

ServiceBox3.addEventListener("mouseenter", () => {
  let icon = document.querySelector(".bi-speedometer");
  let iconDiv = document.querySelector("#icon-box3");
  let para3Service = document.querySelector("#p3-iconBox");
  ServiceBox3.style.boxShadow = "0px 2px 25px rgb(121, 119, 119)";
  icon.style.color = "white";
  iconDiv.style.backgroundColor = "rgb(155, 10, 10)";
  para3Service.style.animation = "iconRoll 2s linear";
});

ServiceBox3.addEventListener("mouseleave", () => {
  let icon = document.querySelector(".bi-speedometer");
  let iconDiv = document.querySelector("#icon-box3");
  let para3Service = document.querySelector("#p3-iconBox");
  ServiceBox3.style.boxShadow = "0px 0px 0px rgb(255, 255, 255)";
  icon.style.color = "rgb(155, 10, 10)";
  iconDiv.style.backgroundColor = "white";
  para3Service.style.animation = "none";
});

// Fourth Service Box
let ServiceBox4 = document.getElementById("box4-serviceP2");

ServiceBox4.addEventListener("mouseenter", () => {
  let icon = document.querySelector(".bi-pinterest");
  let iconDiv = document.querySelector("#icon-box4");
  let para4Service = document.querySelector("#p4-iconBox");
  ServiceBox4.style.boxShadow = "0px 2px 25px rgb(121, 119, 119)";
  icon.style.color = "white";
  iconDiv.style.backgroundColor = "rgb(244, 225, 75)";
  para4Service.style.animation = "iconRoll 2s linear";
});

ServiceBox4.addEventListener("mouseleave", () => {
  let icon = document.querySelector(".bi-pinterest");
  let iconDiv = document.querySelector("#icon-box4");
  let para4Service = document.querySelector("#p4-iconBox");
  ServiceBox4.style.boxShadow = "0px 0px 0px rgb(255, 255, 255)";
  icon.style.color = "rgb(244, 225, 75)";
  iconDiv.style.backgroundColor = "white";
  para4Service.style.animation = "none";
});

// Fifth Service Box
let ServiceBox5 = document.getElementById("box5-serviceP2");

ServiceBox5.addEventListener("mouseenter", () => {
  let icon = document.querySelector(".bi-palette-fill");
  let iconDiv = document.querySelector("#icon-box5");
  let para5Service = document.querySelector("#p5-iconBox");
  ServiceBox5.style.boxShadow = "0px 2px 25px rgb(121, 119, 119)";
  icon.style.color = "white";
  iconDiv.style.backgroundColor = "red";
  para5Service.style.animation = "iconRoll 2s linear";
});

ServiceBox5.addEventListener("mouseleave", () => {
  let icon = document.querySelector(".bi-palette-fill");
  let iconDiv = document.querySelector("#icon-box5");
  let para5Service = document.querySelector("#p5-iconBox");
  ServiceBox5.style.boxShadow = "0px 0px 0px rgb(255, 255, 255)";
  icon.style.color = "red";
  iconDiv.style.backgroundColor = "white";
  para5Service.style.animation = "none";
});

// Sixth Service Box
let ServiceBox6 = document.getElementById("box6-serviceP2");

ServiceBox6.addEventListener("mouseenter", () => {
  let icon = document.querySelector(".bi-menu-button-fill");
  let iconDiv = document.querySelector("#icon-box6");
  let para6Service = document.querySelector("#p6-iconBox");
  ServiceBox6.style.boxShadow = "0px 2px 25px rgb(121, 119, 119)";
  icon.style.color = "white";
  iconDiv.style.backgroundColor = "#4690f9";
  para6Service.style.animation = "iconRoll 2s linear";
});

ServiceBox6.addEventListener("mouseleave", () => {
  let icon = document.querySelector(".bi-menu-button-fill");
  let iconDiv = document.querySelector("#icon-box6");
  let para6Service = document.querySelector("#p6-iconBox");
  ServiceBox6.style.boxShadow = "0px 0px 0px rgb(255, 255, 255)";
  icon.style.color = "#4690f9";
  iconDiv.style.backgroundColor = "white";
  para6Service.style.animation = "none";
});

// Testimonial....

// Portfolio....

let portbtn1 = document.getElementById("btn1-portfolioP1");
let portbtn2 = document.getElementById("btn2-portfolioP1");

let portbtn3 = document.getElementById("btn3-portfolioP1");

let portbtn4 = document.getElementById("btn4-portfolioP1");

portbtn1.addEventListener("click", () => {
  document.getElementById("img1Div-portfolioP2").style.display = "inherit";
  document.getElementById("img5Div-portfolioP2").style.display = "inherit";
  document.getElementById("img6Div-portfolioP2").style.display = "inherit";
  document.getElementById("img7Div-portfolioP2").style.display = "inherit";
  document.getElementById("img8Div-portfolioP2").style.display = "inherit";
  document.getElementById("img9Div-portfolioP2").style.display = "inherit";
  document.getElementById("img2Div-portfolioP2").style.display = "inherit";
  document.getElementById("img3Div-portfolioP2").style.display = "inherit";
  document.getElementById("img4Div-portfolioP2").style.display = "inherit";
});

portbtn2.addEventListener("click", () => {
  document.getElementById("img1Div-portfolioP2").style.display = "none";
  document.getElementById("img5Div-portfolioP2").style.display = "none";
  document.getElementById("img6Div-portfolioP2").style.display = "none";
  document.getElementById("img7Div-portfolioP2").style.display = "none";
  document.getElementById("img8Div-portfolioP2").style.display = "none";
  document.getElementById("img9Div-portfolioP2").style.display = "none";
  document.getElementById("img2Div-portfolioP2").style.display = "inherit";
  document.getElementById("img3Div-portfolioP2").style.display = "inherit";
  document.getElementById("img4Div-portfolioP2").style.display = "inherit";
});

portbtn3.addEventListener("click", () => {
  document.getElementById("img1Div-portfolioP2").style.display = "inherit";
  document.getElementById("img5Div-portfolioP2").style.display = "inherit";
  document.getElementById("img6Div-portfolioP2").style.display = "inherit";
  document.getElementById("img7Div-portfolioP2").style.display = "none";
  document.getElementById("img8Div-portfolioP2").style.display = "none";
  document.getElementById("img9Div-portfolioP2").style.display = "none";
  document.getElementById("img2Div-portfolioP2").style.display = "none";
  document.getElementById("img3Div-portfolioP2").style.display = "none";
  document.getElementById("img4Div-portfolioP2").style.display = "none";
});

portbtn4.addEventListener("click", () => {
  document.getElementById("img1Div-portfolioP2").style.display = "none";
  document.getElementById("img5Div-portfolioP2").style.display = "none";
  document.getElementById("img6Div-portfolioP2").style.display = "none";
  document.getElementById("img7Div-portfolioP2").style.display = "inherit";
  document.getElementById("img8Div-portfolioP2").style.display = "inherit";
  document.getElementById("img9Div-portfolioP2").style.display = "inherit";
  document.getElementById("img2Div-portfolioP2").style.display = "none";
  document.getElementById("img3Div-portfolioP2").style.display = "none";
  document.getElementById("img4Div-portfolioP2").style.display = "none";
});

// Questions...

let queBackground = document.getElementById("question");

function queMainfun() {
  let queFun1 = () => {
    queBackground.style.background =
      "linear-gradient(45deg, rgba(87, 58, 250, 0.8) 0%, rgba(90, 58, 250, 0.8)100%),  url(../Images/question-bg- (2).jpg) center center no-repeat";
  };

  setTimeout(queFun1, 2000);
  let queFun2 = () => {
    queBackground.style.background =
      "linear-gradient(45deg, rgba(87, 58, 250, 0.8) 0%, rgba(90, 58, 250, 0.8)100%), url(../Images/question-bg- (3).jpg) center center no-repeat";
  };
  setTimeout(queFun2, 3000);

  let queFun3 = () => {
    queBackground.style.background =
      "linear-gradient(45deg, rgba(87, 58, 250, 0.8) 0%, rgba(90, 58, 250, 0.8)100%), url(../Images/question-bg- (1).jpg) center center no-repeat";
  };
  setTimeout(queFun3, 4000);
}
setInterval(queMainfun, 2000);

// Color changer....

let changerBtn = document.getElementById("colorChanger");

let service1 = document.getElementById("service-part1");

let service2 = document.getElementById("service-part2");

let testimonial1 = document.getElementById("testimonial-part1");

let testimonial2 = document.getElementById("testimonial-part2");

let contact1 = document.getElementById("contact-part1");

let contact2 = document.getElementById("contact-part2");

let contact3 = document.getElementById("contact-part3");

let aboutHeading = document.getElementById("about-heading");

let aboutPara = document.getElementById("about-para");

let aboutUl = document.getElementById("about-ul");

let serviceHeading = document.getElementById("service-heading");

let servicePara = document.getElementById("service-para");

let box1ServiceP2 = document.getElementById("box1-serviceP2");

let box2ServiceP2 = document.getElementById("box2-serviceP2");

let box3ServiceP2 = document.getElementById("box3-serviceP2");

let box4ServiceP2 = document.getElementById("box4-serviceP2");

let box5ServiceP2 = document.getElementById("box5-serviceP2");

let box6ServiceP2 = document.getElementById("box6-serviceP2");

let feactureHeading = document.getElementById("heading-feactureP1");

let feacturePara1 = document.getElementById("para-feactureP1");

let h1FeactureP2 = document.getElementById("h1-feactureP2");

let h2FeactureP2 = document.getElementById("h2-feactureP2");

let h3FeactureP2 = document.getElementById("h3-feactureP2");

let h4FeactureP2 = document.getElementById("h4-feactureP2");

let p1FeactureP2 = document.getElementById("p1-feactureP2");

let p2FeactureP2 = document.getElementById("p2-feactureP2");

let p3FeactureP2 = document.getElementById("p3-feactureP2");

let p4FeactureP2 = document.getElementById("p4-feactureP2");

let hTestimonialP1 = document.getElementById("heading-testimonialP1");

let pTestimonialP1 = document.getElementById("testimonial-part1");

let paratestimonial1 = document.getElementById("para1-testimoniaP2");

let paratestimonial2 = document.getElementById("para2-testimoniaP2");

let paratestimonial3 = document.getElementById("para3-testimoniaP2");

let h1testimonialP2 = document.getElementById("heading1-testimonialP2");

let h2testimonialP2 = document.getElementById("heading2-testimonialP2");

let h3testimonialP2 = document.getElementById("heading3-testimonialP2");

let headingportfolioP1 = document.getElementById("heading-portfolioP1");

let paraportfolioP1 = document.getElementById("para-portfolioP1");

let btn1portfolioP1 = document.getElementById("btn1-portfolioP1");

let btn2portfolioP1 = document.getElementById("btn2-portfolioP1");

let btn3portfolioP1 = document.getElementById("btn3-portfolioP1");

let btn4portfolioP1 = document.getElementById("btn4-portfolioP1");

let headingcontactP1 = document.getElementById("heading-contactP1");

let paracontactP1 = document.getElementById("para-contactP1");

let para3address = document.getElementById("para3-address");

let para2address = document.getElementById("para2-address");

let para1address = document.getElementById("para1-address");

let headingaddress = document.getElementById("heading-address");

let emailaddress = document.getElementById("email-address");

let calladdress = document.getElementById("call-address");

let call = document.getElementById("call");

let email = document.getElementById("email");

let address = document.getElementById("address");

let form = document.getElementById("form");

changerBtn.addEventListener("click", () => {
  document.body.style.background = "black";
  service1.style.background = "black";
  service2.style.background = "black";
  testimonial1.style.background = "black";
  testimonial2.style.background = "black";
  contact1.style.background = "black";
  contact2.style.background = "black";
  contact3.style.background = "black";
  aboutHeading.style.color = "#5846f9";
  aboutPara.style.color = "rgb(178, 173, 250)";
  aboutUl.style.color = "rgb(178, 173, 250)";
  serviceHeading.style.color = "#5846f9";
  servicePara.style.color = "rgb(178, 173, 250)";
  box6ServiceP2.style.background =
    " linear-gradient(45deg, rgba(116, 15, 214, 0.9)30%, rgba(86, 58, 250, 0.9)70%)";
  box6ServiceP2.style.color = "white";
  box1ServiceP2.style.background =
    " linear-gradient(45deg, rgba(116, 15, 214, 0.9)30%, rgba(86, 58, 250, 0.9)70%)";
  box1ServiceP2.style.color = "white";
  box2ServiceP2.style.background =
    " linear-gradient(45deg, rgba(116, 15, 214, 0.9)30%, rgba(86, 58, 250, 0.9)70%)";
  box2ServiceP2.style.color = "white";
  box3ServiceP2.style.background =
    " linear-gradient(45deg, rgba(116, 15, 214, 0.9)30%, rgba(86, 58, 250, 0.9)70%)";
  box3ServiceP2.style.color = "white";
  box4ServiceP2.style.background =
    " linear-gradient(45deg, rgba(116, 15, 214, 0.9)30%, rgba(86, 58, 250, 0.9)70%)";
  box4ServiceP2.style.color = "white";
  box5ServiceP2.style.background =
    " linear-gradient(45deg, rgba(116, 15, 214, 0.9)30%, rgba(86, 58, 250, 0.9)70%)";
  box5ServiceP2.style.color = "white";
  feactureHeading.style.color = "#5846f9";
  feacturePara1.style.color = "rgb(178, 173, 250)";
  h4FeactureP2.style.color = "#5846f9";
  h3FeactureP2.style.color = "#5846f9";
  h2FeactureP2.style.color = "#5846f9";
  h1FeactureP2.style.color = "#5846f9";
  p4FeactureP2.style.color = "rgb(178, 173, 250)";
  p3FeactureP2.style.color = "rgb(178, 173, 250)";
  p2FeactureP2.style.color = "rgb(178, 173, 250)";
  p1FeactureP2.style.color = "rgb(178, 173, 250)";
  hTestimonialP1.style.color = "#5846f9";
  pTestimonialP1.style.color = "rgb(178, 173, 250)";
  paratestimonial1.style.background =
    "linear-gradient(45deg, rgba(116, 15, 214, 0.9)30%, rgba(86, 58, 250, 0.9)70%)";
  paratestimonial2.style.background =
    "linear-gradient(45deg, rgba(116, 15, 214, 0.9)30%, rgba(86, 58, 250, 0.9)70%)";
  paratestimonial3.style.background =
    "linear-gradient(45deg, rgba(116, 15, 214, 0.9)30%, rgba(86, 58, 250, 0.9)70%)";
  paratestimonial1.style.color = "white";
  paratestimonial2.style.color = "white";
  paratestimonial3.style.color = "white";
  h1testimonialP2.style.color = "#5846f9";
  h2testimonialP2.style.color = "#5846f9";
  h3testimonialP2.style.color = "#5846f9";
  headingportfolioP1.style.color = "#5846f9";
  paraportfolioP1.style.color = "rgb(178, 173, 250)";
  btn4portfolioP1.style.background =
    "linear-gradient(45deg, rgba(116, 15, 214, 0.9)30%, rgba(86, 58, 250, 0.9)70%)";
  btn4portfolioP1.style.color = "white";
  btn3portfolioP1.style.background =
    "linear-gradient(45deg, rgba(116, 15, 214, 0.9)30%, rgba(86, 58, 250, 0.9)70%)";
  btn3portfolioP1.style.color = "white";
  btn2portfolioP1.style.background =
    "linear-gradient(45deg, rgba(116, 15, 214, 0.9)30%, rgba(86, 58, 250, 0.9)70%)";
  btn2portfolioP1.style.color = "white";
  btn1portfolioP1.style.background =
    "linear-gradient(45deg, rgba(116, 15, 214, 0.9)30%, rgba(86, 58, 250, 0.9)70%)";
  btn1portfolioP1.style.color = "white";
  headingcontactP1.style.color = "#5846f9";
  paracontactP1.style.color = "rgb(178, 173, 250)";
  para3address.style.color = "white";
  para2address.style.color = "white";
  para1address.style.color = "white";

  headingaddress.style.color = "white";
  emailaddress.style.color = "white";
  calladdress.style.color = "white";

  call.style.background =
    "linear-gradient(45deg, rgba(116, 15, 214, 0.9)30%, rgba(86, 58, 250, 0.9)70%)";

  email.style.background =
    "linear-gradient(45deg, rgba(116, 15, 214, 0.9)30%, rgba(86, 58, 250, 0.9)70%)";

  address.style.background =
    "linear-gradient(45deg, rgba(116, 15, 214, 0.9)30%, rgba(86, 58, 250, 0.9)70%)";

  form.style.background =
    "linear-gradient(45deg, rgba(116, 15, 214, 0.9)30%, rgba(86, 58, 250, 0.9)70%)";
});

// Form Validation...

// let formContact = document.getElementById('form-contact');

function formValidation() {
  let name = document.getElementById("name-form").value;
  let email = document.getElementById("email-form").value;
  let message = document.getElementById("message-form").value;
  let sendBtn = document.getElementById("btn-contactP3").value;
  let phone = document.getElementById("subject-form").value;

  if (name == "") {
    alert("Please enter your Name");
    return false;
  }
  if (name.length <= 2 || name.length >= 20) {
    alert("Name shoud not be less the 2 or greater then 20");
    return false;
  }
  if (!isNaN(name)) {
    alert("Please enter correct name");
    return false;
  }
  if (phone == "") {
    alert("Please enter your Number");
    return false;
  }
  if (phone.length != 10) {
    alert("Phone number is not correct");
    return false;
  }
  if (isNaN(phone)) {
    alert("Please enter correct Phone no.");
    return false;
  }
  if (message == "") {
    alert("Please enter Message");
    return false;
  }
  if (message.length <= 2 || name.length >= 50) {
    alert("Name shoud not be less the 2 or greater then 50");
    return false;
  }
  if (email == "") {
    alert("Please enter your Email id");
    return false;
  }
  if (email.indexOf("@") <= 0) {
    alert("Please Enter the Valid Email id");
    return false;
  }
  if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    alert("Please Enter the Valid Email id");
    return false;
  } else {
    return true;
  }
}
// Using Gsap...

// if (window.screenX >= "700px") {

gsap.from("#home-text", {
  duration: 2.5,
  ease: "sine.out",
  y: -500,
  delay: 1,
});

gsap.from("#home-image", {
  duration: 2.5,
  ease: "bounce.out",
  y: -500,
  scale: 0,
  rotation: 180,
  opacity: 0,
});

gsap.from("#about-image", {
  duration: 4.5,
  delay: 2.5,
  x: "-100%",
  ease: "slow(0.7, 0.7, false)",
});

gsap.from("#about-text", {
  opacity: 0,
  duration: 4.5,
  delay: 2.5,
  ease: "slow(0.7, 0.7, false)",
  x: 500,
});

gsap.from("#text-service", {
  delay: 5.5,
  duration: 3.5,
  scale: 2,
  opacity: 0,
});
gsap.from("#text-feactureP1", {
  delay: 7.5,
  duration: 6.5,
  scale: 2,
  opacity: 0,
});

gsap.from("#feacture-part2", {
  delay: 8,
  duration: 5.5,
  ease: "bounce.out",
  y: 500,
});

gsap.from("#text-testimonialP1", {
  delay: 9,
  duration: 7.5,
  scale: 2,
  opacity: 0,
});

let tl = gsap.timeline();
//sequenced one-after-the-other
tl.from("#box-testimonial1", { duration: 1, delay: 12, x: 200 })
  .from("#box-testimonial3", { duration: 1, delay: 1.8, y: 100 })
  .from("#box-testimonial2", { duration: 1, delay: 0, rotation: 360 });

gsap.from("#text-portfolioP1", {
  delay: 12,
  duration: 7.5,
  scale: 2,
  opacity: 0,
});

gsap.from("#text-contactP1", {
  delay: 17,
  duration: 7.5,
  scale: 2,
  opacity: 0,
});

gsap.from("#contact-part2", {
  duration: 8.5,
  delay: 19,
  ease: "elastic.out(1, 0.3)",
  y: -500,
});
// }
