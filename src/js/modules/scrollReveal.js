import ScrollReveal from "scrollreveal";

function scrollReveal() {
  //Базовые настройки
  ScrollReveal({
    distance: "80px",
    duration: 2800,
    mobile: true,
  });

  ScrollReveal().reveal(".main-title", {
    origin: "top",
  });

  ScrollReveal().reveal(
    ".about__item-diploma, .scroll-reveal-right, .contacts__desc",
    {
      origin: "right",
    }
  );

  ScrollReveal().reveal(
    ".about__item-skills, .scroll-reveal-bottom, .social-networks",
    {
      origin: "bottom",
    }
  );

  ScrollReveal().reveal(
    ".about__item-desc, .scroll-reveal-left, .contacts__title",
    {
      origin: "left",
    }
  );
}

export default scrollReveal;
