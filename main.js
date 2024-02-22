document.addEventListener("DOMContentLoaded", function () {
  const birthdayCard = document.querySelector(".birthdayCard");
  const cardInside = document.querySelector(".cardInside");

  birthdayCard.addEventListener("click", function () {
    cardInside.classList.toggle("active");
  });
});
