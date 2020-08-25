  // Bank some good vibe options
  const vibes = [
    "...and you are tubular!",
    "...have a wonderful night!",
    "...and you might have this!",
    "...and so is this CAT! 🐶",
    "...BIGDADDY is the best!!"
  ];

   // choose a random good vibe
  var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

  // display a good vibe
  document.querySelector(".vibe").append(vibe);
