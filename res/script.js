const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// Mouse cursor follower circle

function mouseCursorFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#mouse_pointer_follower"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

mouseCursorFollower();
