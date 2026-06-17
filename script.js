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

  // Tab jquery
  {
    // Change state tab header, show / hide tab content
    const $tabButton = $(".content__tab");
    const $tabContent = $(".content__tab-content");

    $tabButton.click(function () {
      // If choose active tab --> return
      if ($(this).hasClass("content__tab--active")) {
        return;
      }

      $tabButton.removeClass("content__tab--active");
      $tabContent.removeClass("content__tab-content--active").hide();

      $(this).addClass("content__tab--active");
      const tabContentId = $(this).data("tab");
      $("#" + tabContentId)
        .addClass("content__tab-content--active")
        .fadeIn(300);
    });
  }

  // Accordion jquery
  {
    // Show/hide content in accordion tab
    const $accordionButton = $(".content__accordion-header");
    const $accordionContent = $(".content__accordion-body");

    $accordionButton.click(function () {
      if ($(this).hasClass("content__accordion-header--active")) {
        return;
      }
      $accordionButton.removeClass("content__accordion-header--active");
      $accordionContent
        .removeClass(".content__accordion-body--active")
        .slideUp(300);

      $(this).addClass("content__accordion-header--active");
      const accordionContentId = $(this).data("tab");
      $("#" + accordionContentId)
        .addClass("content__accordion-body--active")
        .slideDown(300);
    });
  }
});
