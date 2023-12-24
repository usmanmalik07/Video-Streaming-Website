document.getElementById('imageContainer1').addEventListener('click', function() {
  // Change the URL to the desired website
  window.location.href = "watch/op.html";
});
document.getElementById('imageContainer2').addEventListener('click', function() {
  // Change the URL to the desired website
  window.location.href = "watch/tokyoghoul.html";
});
document.getElementById('imageContainer3').addEventListener('click', function() {
  // Change the URL to the desired website
  window.location.href = "watch/aot.html";
});
document.getElementById('imageContainer4').addEventListener('click', function() {
  // Change the URL to the desired website
  window.location.href = "watch/haikyuu.html";
});
document.getElementById('imageContainer5').addEventListener('click', function() {
  // Change the URL to the desired website
  window.location.href = "watch/charlotte.html";
});
document.getElementById('imageContainer6').addEventListener('click', function() {
  // Change the URL to the desired website
  window.location.href = "watch/hxh.html";
});
document.getElementById('imageContainer7').addEventListener('click', function() {
  // Change the URL to the desired website
  window.location.href = "watch/naruto.html";
});

const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");

formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = `Your ${input.placeholder}`;
      formHeading.style.opacity = "1";
    }, 300);
  });

  input.addEventListener("blur", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = "Let's Talk";
      formHeading.style.opacity = "1";
    }, 300);
  });
});






