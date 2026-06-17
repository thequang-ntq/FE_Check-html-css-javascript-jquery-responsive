$(document).ready(function () {
  // Slider image jquery
  {
    let currentSlide = 1;
    const totalSlides = 5;
    const $slideButton = $(".slider__button");
    const $slideImageList = $(".slider__images");
    const $dot = $(".slider__dot");

    // Update current dot
    function updateDots(slideIndex) {
      $dot.removeClass("slider__dot--active");
      const dotIndex = slideIndex - 1;
      $dot.eq(dotIndex).addClass("slider__dot--active");
    }

    // Change slide animation
    function changeSlide(isButton, isPrev) {
      $slideImageList.animate(
        {
          marginLeft: -(currentSlide * 100) + "%",
        },
        600,
        function () {
          if (isButton) {
            if (isPrev) {
              if (currentSlide === 0) {
                currentSlide = 3;
                $slideImageList.css("marginLeft", "-300%");
              }
            } else {
              if (currentSlide === totalSlides - 1) {
                currentSlide = 1;
                $slideImageList.css("marginLeft", "-100%");
              }
            }
          }
          $slideButton.prop("disabled", false);
          $dot.prop("disabled", false);
        },
      );
    }

    // Click prev/next button: show slide with animation, disabled button when trigger animation
    // Next
    $(".slider__button--right").click(function () {
      currentSlide += 1;
      updateDots(currentSlide);
      $slideButton.prop("disabled", true);
      $dot.prop("disabled", true);
      changeSlide(true, false);
    });

    //Prev
    $(".slider__button--left").click(function () {
      currentSlide -= 1;
      updateDots(currentSlide);
      $slideButton.prop("disabled", true);
      $dot.prop("disabled", true);
      changeSlide(true, true);
    });

    // Change slide according to dots
    $dot.click(function () {
      const dotIndex = $(this).index();
      const targetSlide = dotIndex + 1;
      if (targetSlide === currentSlide) {
        return;
      }

      currentSlide = targetSlide;
      updateDots(currentSlide);
      $slideButton.prop("disabled", true);
      $dot.prop("disabled", true);

      changeSlide(false, false);
    });

    // Set 3 seconds auto change slide
    // setInterval(function () {
    //   currentSlide = currentSlide + 1;
    //   showSlide(currentSlide);
    // }, 3000);
  }
});
