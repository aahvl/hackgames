

var envelopeWrap = document.getElementById("envelopeWrap");
var envFlap = document.getElementById("envFlap");
var letter = document.getElementById("letter");
var openBtn = document.getElementById("openBtn");
var preLabel = document.getElementById("preLabel");
var btnYes = document.getElementById("btnYes");
var btnNo = document.getElementById("btnNo");
var labelYes = document.getElementById("labelYes");
var labelNo = document.getElementById("labelNo");
var redirectOverlay = document.getElementById("redirectOverlay");
var scene = document.getElementById("SceneEnvelope");
var isOpen = false;

function openEnvelope() {
  if (isOpen) return;
  isOpen = true;
  envelopeWrap.classList.add("opened");
  envFlap.classList.add("flap-open");

  setTimeout(function () {
    letter.classList.add("letter-rise");
    scene.style.transform = "translateY(225px) scale(0.88)";
  }, 420);

  openBtn.classList.add("hidden");

  preLabel.style.transition = "opacity 0.4s";
  preLabel.style.opacity = "0";
}

openBtn.addEventListener("click", openEnvelope);
envelopeWrap.addEventListener("click", function () {
  if (!isOpen) openEnvelope();
});

btnYes.addEventListener("click", function () {
  btnNo.classList.remove("chosen");
  labelYes.style.color = "#c8102e";

  setTimeout(function () {
    redirectOverlay.classList.add("visible");
  }, 500);

  setTimeout(function () {
    window.location.href = "https://rsvp.soon.it/hackgames";
  }, 2000);
});

btnNo.addEventListener("click", function () {
  btnYes.classList.remove("chosen");
  labelYes.style.color = "";

  btnNo.classList.add("chosen");
  labelNo.style.color = "rgba(26,26,26,0.22)";
});
