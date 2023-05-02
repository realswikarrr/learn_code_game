window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      if (player.velocity.y === 0) player.velocity.y = -20;
      break;

    case "a":
      keys.a.pressed = true;
      break;
    case "d":
      keys.d.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "a":
      keys.a.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
  }
});
