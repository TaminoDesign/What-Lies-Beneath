const loadingScreen = document.getElementById('loading');
const continueBtn = document.getElementById('continue');
const muteBtn = document.getElementById('mute');
const audio = document.getElementById('bg-music');
const muteText = document.querySelector('#mute p');
const muteIcon = document.querySelector('#mute img');

continueBtn.addEventListener('click', () => {
    audio.play();
    loadingScreen
        .classList
        .add('hidden');
    loadingScreen.addEventListener('transitionend', () => {
        loadingScreen.style.display = 'none';
        document.body.classList.remove('no-scroll');
    });
});

muteBtn.addEventListener('click', () => {
    audio.muted = !audio.muted;
    muteText.textContent = audio.muted ? 'Unmute Sound' : 'Mute Sound';
muteIcon.src = audio.muted ? 'Assets/Images/muteMusic.png' : 'Assets/Images/MusicNote.png';
});

// image stack
    const wrapper = document.getElementById('stack-wrapper');
    const imgs    = [...document.querySelectorAll('.stack-img')];
    const total   = imgs.length;
 
    // store each image's starting rotation so JS can keep it when sliding
    const baseRotations = [0, -4, 5];
 
    window.addEventListener('scroll', () => {
      const wrapTop    = wrapper.getBoundingClientRect().top + window.scrollY;
      const scrollZone = wrapper.offsetHeight - window.innerHeight;
      const scrolled   = Math.max(0, Math.min(window.scrollY - wrapTop, scrollZone));
      const progress   = scrolled / scrollZone;
 
      imgs.forEach((img, i) => {
  const start = i / total;
  const p     = Math.max(0, Math.min((progress - start) * total, 1));
  const rot   = baseRotations[i] + p * 8;

  // each image gets its own direction
  if (i === 0) img.style.transform = `rotate(${rot}deg) translateX(${p * 110}%)`;   // right
  if (i === 1) img.style.transform = `rotate(${-rot}deg) translateX(${-p * 110}%)`; // left
  if (i === 2) img.style.transform = `rotate(${rot}deg) translateX(${p * 110}%)`;   // right
});
    });





var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}