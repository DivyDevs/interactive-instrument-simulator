document.querySelectorAll(".key").forEach(key => {
  key.addEventListener("click", () => {
    const note = key.dataset.note;
    new Audio(`sounds/piano/${note}.mp3`).play();
  });
});

document.querySelectorAll(".hit-zone, .key").forEach(zone => {
    zone.addEventListener("click", () => {
        const soundName = zone.dataset.sound;
        if (!soundName) return;
        const audio = new Audio(`sounds/bongo/${soundName}.mp3`);
        audio.play();
    });
});

document.querySelectorAll("button[data-sound]").forEach(btn => {
  ["click", "touchstart"].forEach(evt => {
    btn.addEventListener(evt, () => {
      const soundFile = btn.dataset.sound;
      const audio = new Audio(`sounds/drums/${soundFile}`);
      audio.currentTime = 0;
      audio.play();
    });
  });
});

document.querySelectorAll("[data-sound]").forEach(item => {
    item.addEventListener("click", () => {
        const sound = item.dataset.sound;
        const audio = new Audio(`sounds/flute/${sound}`);
        audio.currentTime = 0;
        audio.play();
    });
});

document.querySelectorAll("[data-sound]").forEach(item => {
    item.addEventListener("click", () => {
        const sound = item.dataset.sound;
        const audio = new Audio(`sounds/xylophone/${sound}`);
        audio.currentTime = 0;
        audio.play();
    });
});

document.querySelectorAll("[data-sound]").forEach(item => {
    item.addEventListener("click", () => {
        const sound = item.dataset.sound;
        const audio = new Audio(`sounds/guitar/${sound}`);
        audio.currentTime = 0;
        audio.play();
    });
});

document.querySelectorAll("[data-sound]").forEach(item => {
    item.addEventListener("click", () => {
        const sound = item.dataset.sound;
        const audio = new Audio(`sounds/ukulele/${sound}`);
        audio.currentTime = 0;
        audio.play();
    });
});