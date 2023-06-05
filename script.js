const button = document.querySelector(".button");
const aboutMe = document.getElementById("about-me");

button.addEventListener("mousemove", (e) => {
  const buttonRect = button.getBoundingClientRect();
  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top + buttonRect.height / 2;

  const maxDistanceFromCenterX = (buttonRect.width - aboutMe.offsetWidth) / 2;
  const maxDistanceFromCenterY = (buttonRect.height - aboutMe.offsetHeight) / 2;

  const distanceFromCenterX = e.clientX - buttonCenterX;
  const distanceFromCenterY = e.clientY - buttonCenterY;

  const xPos = Math.max(
    -maxDistanceFromCenterX,
    Math.min(maxDistanceFromCenterX, distanceFromCenterX)
  );
  const yPos = Math.max(
    -maxDistanceFromCenterY,
    Math.min(maxDistanceFromCenterY, distanceFromCenterY)
  );

  gsap.to(aboutMe, { x: xPos, y: yPos, duration: 0.3 });
});

button.addEventListener("mouseleave", () => {
  gsap.to(aboutMe, { x: 0, y: 0, duration: 0.3 });
});
