function pizzaMake() {
  let aa = document.querySelector(".checked").checked;
  let aa1 = document.querySelector(".checked1").checked;
  let aa2 = document.querySelector(".checked2").checked;
  let aa3 = document.querySelector(".checked3").checked;
  let aa4 = document.querySelector(".checked4").checked;
  let aa5 = document.querySelector(".checked5").checked;
  let aa6 = document.querySelector(".checked6").checked;
  let aa7 = document.querySelector(".checked7").checked;
  let aa8 = document.querySelector(".checked8").checked;
 

  if (aa == true) {
    document.querySelector("#pars").classList.remove("display-parsley");
  } else {
    document.querySelector("#pars").classList.add("display-parsley");
  }
  
  if (aa1 == true) {
    document.querySelector("#oni").classList.remove("display-onion");
  } else {
    document.querySelector("#oni").classList.add("display-onion");
  }
  if (aa2 == true) {
    document.querySelector("#oli").classList.remove("display-olive");
  } else {
    document.querySelector("#oli").classList.add("display-olive");
  }
  if (aa3 == true) {
    document.querySelector("#meat").classList.remove("display-meat1");
  } else {
    document.querySelector("#meat").classList.add("display-meat1");
  }
  if (aa4 == true) {
    document.querySelector("#tom").classList.remove("display-meat");
  } else {
    document.querySelector("#tom").classList.add("display-meat");
  }
  if (aa5 == true) {
    document.querySelector("#mash").classList.remove("display-mashroom");
  } else {
    document.querySelector("#mash").classList.add("display-mashroom");
  }
  if (aa6 == true) {
    document.querySelector("#cheese").classList.remove("display-extra");
  } else {
    document.querySelector("#cheese").classList.add("display-extra");
  }
  if (aa7 == true) {
    document.querySelector("#brac").classList.remove("display-braclee");
  } else {
    document.querySelector("#brac").classList.add("display-braclee");
  }
  if (aa8 == true) {
    document.querySelector("#shi").classList.remove("display-shimla");
  } else {
    document.querySelector("#shi").classList.add("display-shimla");
  }
}
