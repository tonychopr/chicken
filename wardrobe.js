// 1) Manually list every file (drop-in the exact names from your folders, minus “.png”)
const manifest = {
  head: [
    'alphonse_elric','bonnet','chrome_hat','death_the_kid',
    'itachi_hair','jester_hat','kakashi','luffy_hat',
    'lv_beanie','naruto_headband_hair','NY_BALL_CAP',
    'okc_hat','SIP_HAT','von_dutch','wizard_hat'
  ],
  glasses: [
    'eye_patch','red_glasses','sports_glasses'
  ],
  shirt: [
    'chrome_hearts_hoodie_pink','chrome_shirt',
    'leather_jacket','ronaldo','thunder_jersey','white_t'
  ]
};

// 2) Build each picker
for (const layerName of Object.keys(manifest)) {
  const picker = document.querySelector(`.picker[data-layer="${layerName}"]`);
  manifest[layerName].forEach(item => {
    const thumb = document.createElement('img');
    thumb.src = `assets/${layerName.toUpperCase()}0/${item}.png`;
    thumb.alt = item;
    picker.appendChild(thumb);

    thumb.onclick = () => {
      // swap the actual layer
      document.getElementById(layerName + 'Layer').src = thumb.src;

      // update selected styling
      picker.querySelectorAll('img').forEach(i => i.classList.remove('selected'));
      thumb.classList.add('selected');
    };
  });
}

// 3) (Optional) pre-select first of each
Object.keys(manifest).forEach(layerName => {
  const firstItem = manifest[layerName][0];
  const imgEl = document.getElementById(layerName + 'Layer');
  imgEl.src = `assets/${layerName.toUpperCase()}0/${firstItem}.png`;
  // mark thumb selected
  document.querySelector(`.picker[data-layer="${layerName}"] img`).classList.add('selected');
});
