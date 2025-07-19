//商品大圖
const swiper = new Swiper(".firstSwiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//你可能會喜歡的商品圖
const productSwiper = new Swiper(".productSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//沒有rwd
const btn = document.querySelector(".btn-favorite");
const icon = document.querySelector("i");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  if (icon.classList.contains("bi-heart")) {
    icon.classList.remove("bi-heart");
    icon.classList.add("bi-heart-fill");
    btn.innerHTML = '<i class="bi bi-heart-fill me-2"></i>已收藏';
  } else {
    icon.classList.remove("bi-heart-fill");
    icon.classList.add("bi-heart");
    btn.innerHTML = '<i class="bi bi-heart me-2"></i>加入收藏';
  }
});

//有rwd
const likeBtn = document.querySelector(".like");
const heartIcon = likeBtn.querySelector("i");

likeBtn.addEventListener("click", () => {
  heartIcon.classList.toggle("bi-heart");
  heartIcon.classList.toggle("bi-heart-fill");
});
