const reviewCards = document.querySelectorAll(
  ".reviews__container__wrap__card"
);

const observerParams = {
  rootMargin: "-30%",
  threshhold: 1,
};

export const handleReviewCards = () => {
  const reviewObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      let cardContent = entry.target.children[0];
      if (!entry.isIntersecting)
        cardContent.style.transform = "translateY(100%)";
      else cardContent.style.transform = "translateY(0)";
    });
  }, observerParams);

  reviewCards.forEach((card) => {
    reviewObserver.observe(card);
    VanillaTilt.init(card, {
      max: 10,
      perspective: 1000,
      speed: 600,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      reverse: true,
    });
    card.addEventListener("mouseenter", () => {});
    card.addEventListener("mousemove", (event) => {
      const clientRect = card.getBoundingClientRect();
      let centerX = card.offsetLeft + card.offsetWidth / 2 + clientRect.x;
      let centerY = card.offsetTop + card.offsetHeight / 2 + clientRect.y;
      card.style.backgroundPosition = `${-(event.clientX - centerX) / 10}px ${
        -(event.clientY - centerY) / 10
      }px`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
      card.style.backgroundPosition = "0";
    });
  });
};
