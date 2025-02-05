/* Cookie */
var shouldShow = getCookie("OSICookie");

if (shouldShow != "true") {
  document.getElementById("cookieModal").style.display = "grid";
  document.getElementById("cookieClose").addEventListener("click", function () {
    document.getElementById("cookieModal").style.display = "none";
    setCookie("OSICookie", "true", 30);
  });
} else {
  document.getElementById("cookieModal").style.display = "none";
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/* Navigation */
document.getElementById("toggle").addEventListener(
  "click",
  function () {
    document.querySelector(".questions").classList.toggle("show");
    document.getElementById("nav-icon").classList.toggle("open");
  },
  false
);

document.addEventListener(
  "touchmove",
  function () {
    document.querySelector(".questions").classList.remove("show");
    document.getElementById("nav-icon").classList.remove("open");
  },
  false
);

document.getElementById("link_01").addEventListener(
  "click",
  function () {
    document.querySelector(".questions").classList.toggle("show");
    document.getElementById("nav-icon").classList.toggle("open");
  },
  false
);

document.getElementById("link_02").addEventListener(
  "click",
  function () {
    document.querySelector(".questions").classList.toggle("show");
    document.getElementById("nav-icon").classList.toggle("open");
  },
  false
);

document.getElementById("link_03").addEventListener(
  "click",
  function () {
    document.querySelector(".questions").classList.toggle("show");
    document.getElementById("nav-icon").classList.toggle("open");
  },
  false
);

document.getElementById("link_04").addEventListener(
  "click",
  function () {
    document.querySelector(".questions").classList.toggle("show");
    document.getElementById("nav-icon").classList.toggle("open");
  },
  false
);

document.getElementById("link_05").addEventListener(
  "click",
  function () {
    document.querySelector(".questions").classList.toggle("show");
    document.getElementById("nav-icon").classList.toggle("open");
  },
  false
);

document.getElementById("link_06").addEventListener(
  "click",
  function () {
    document.querySelector(".questions").classList.toggle("show");
    document.getElementById("nav-icon").classList.toggle("open");
  },
  false
);

function clearBody() {
  document.body.removeAttribute("class");
}

document.getElementById("logo").addEventListener(
  "click",
  function () {
    clearBody();
    document.body.classList.add("start");
  },
  false
);

document.querySelector(".question.start").addEventListener(
  "click",
  function () {
    clearBody();
    document.body.classList.add("start");
  },
  false
);

document.querySelector(".question.products").addEventListener(
  "click",
  function () {
    clearBody();
    document.body.classList.add("products");
  },
  false
);

document.querySelector(".question.sd").addEventListener(
  "click",
  function () {
    clearBody();
    document.body.classList.add("sd");
  },
  false
);

document.querySelector(".question.team").addEventListener(
  "click",
  function () {
    clearBody();
    document.body.classList.add("team");
  },
  false
);

document.querySelector(".question.contact").addEventListener(
  "click",
  function () {
    clearBody();
    document.body.classList.add("contact");
  },
  false
);

document.querySelector(".question.careers").addEventListener(
  "click",
  function () {
    clearBody();
    document.body.classList.add("careers");
  },
  false
);

// modals
document.querySelector("#javaModalLink").addEventListener(
  "click",
  function () {
    document.getElementById("javaModal").style.display = "flex";
  },
  false
);

document.querySelector("#javaClose").addEventListener(
  "click",
  function () {
    document.getElementById("javaModal").style.display = "none";
  },
  false
);

document.querySelector("#jsModalLink").addEventListener(
  "click",
  function () {
    document.getElementById("jsModal").style.display = "flex";
  },
  false
);

document.querySelector("#jsClose").addEventListener(
  "click",
  function () {
    document.getElementById("jsModal").style.display = "none";
  },
  false
);

document.querySelector("#jsSeniorModalLink").addEventListener(
  "click",
  function () {
    document.getElementById("jsSeniorModal").style.display = "flex";
  },
  false
);

document.querySelector("#jsSeniorClose").addEventListener(
  "click",
  function () {
    document.getElementById("jsSeniorModal").style.display = "none";
  },
  false
);
