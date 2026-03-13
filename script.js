const stars = document.querySelectorAll(".star");

stars.forEach((star) => {
  star.addEventListener("click", function () {
    let value = this.getAttribute("data-value");
    let ratingText = this.parentElement.nextElementSibling;

    ratingText.innerText = "Rating: " + value;

    stars.forEach((s) => s.classList.remove("active"));

    for (let i = 0; i < value; i++) {
      stars[i].classList.add("active");
    }
  });
});
