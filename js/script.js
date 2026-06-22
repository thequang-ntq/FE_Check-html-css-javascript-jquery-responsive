$(document).ready(function () {
  // Header
  {
    const $overlay = $(".overlay");
    const $navHeader = $(".header__nav-dropdown-header");
    const $navContent = $(".header__nav-dropdown-content");
    const navHeaderActive = "header__nav-dropdown-header--active";
    const navContentActive = "header__nav-dropdown-content--active";
    const $mobileButton = $(".header__mobile-button");
    const $mobileMenu = $(".header__mobile-menu");
    const $mobileItem = $(".header__mobile-item");
    const $closeButton = $(".header__mobile-close");

    // Desktop dropdown
    // Show menus at inner level, hide menus at the same level when hover navigation header
    $navHeader.click(function (e) {
      // Prevent bubbling in events (from child to parent)
      e.stopPropagation();

      const menuId = $(this).data("menu");
      const $currentContent = $("#" + menuId);

      // If header not have data-menu (no menu to open) then close all menus
      if (!menuId) {
        $navHeader.removeClass(navHeaderActive);
        $navContent.removeClass(navContentActive).slideUp(300);
        return;
      }

      // Check if current menu is already active -> close it and return
      if ($(this).hasClass(navHeaderActive)) {
        $(this).removeClass(navHeaderActive);
        $currentContent.removeClass(navContentActive).slideUp(300);
        return;
      }

      // Close related menus at same level
      // CLose header
      $(this)
        .closest(".content__multilevel-item")
        .siblings()
        .find(".content__multilevel-header--active")
        .removeClass("content__multilevel-header--active");

      // Close content
      $(this)
        .closest(".content__multilevel-item")
        .siblings()
        .find(".content__multilevel-content--active")
        .removeClass("content__multilevel-content--active")
        .slideUp(300);

      // Open current menu
      $(this).addClass("content__multilevel-header--active");
      $currentContent
        .addClass("content__multilevel-content--active")
        .slideDown(300);
    });

    // Mobile

    // Function toggle mobile menu logic -> Show/hide mobile menu, add/remove active for button, show/hide overlay
    function toggleMobileMenu(isOpen) {
      const action = isOpen ? "addClass" : "removeClass";
      $overlay[action]("overlay--active");
      $mobileButton[action]("header__mobile-button--active");
      $mobileMenu[action]("header__mobile-menu--active");
    }

    // Click mobile button -> Show mobile menu, add active for button, show overlay
    $mobileButton.click(() => toggleMobileMenu(true));

    // Click header overlay -> Hide mobile menu, remove active for button, hide overlay
    $overlay.click(() => toggleMobileMenu(false));

    // Click close button - Hide mobile menu, remove active for button ,hide overlay
    $closeButton.click(() => toggleMobileMenu(false));

    // Click link in mobile menu -> Hide mobile menu, remove active for button, hide overlay
    $mobileItem.click(() => toggleMobileMenu(false));
  }

  // Slider image jquery
  {
    let currentSlide = 1;
    const totalSlides = 5;
    const $slideButton = $(".slider__button");
    const $slideImageList = $(".slider__images");
    const $slideImage = $(".slider__image");
    const $dot = $(".slider__dot");
    const dotActive = "slider__dot--active";

    // Update current dot
    function updateDots(slideIndex) {
      $dot.removeClass(dotActive);
      const dotIndex = slideIndex - 1;
      $dot.eq(dotIndex).addClass(dotActive);
    }

    // Change slide animation
    function changeSlide(isButton, isPrev) {
      $slideImage.css("transform", `translateX(${-currentSlide * 100}%)`);

      setTimeout(() => {
        if (isButton) {
          if (isPrev) {
            if (currentSlide === 0) {
              currentSlide = 3;
              // Turn transition off
              $slideImage.css("transition", "none");
              $slideImage.css("transform", "translateX(-300%)");

              // Turn transition on
              setTimeout(() => {
                $slideImage.css("transition", "transform 0.6s ease");
              }, 50);
            }
          } else {
            if (currentSlide === totalSlides - 1) {
              currentSlide = 1;
              // Turn transition off
              $slideImage.css("transition", "none");
              $slideImage.css("transform", "translateX(-100%)");

              // Turn transition on
              setTimeout(() => {
                $slideImage.css("transition", "transform 0.6s ease");
              }, 50);
            }
          }
        }
        $slideButton.prop("disabled", false);
        $dot.prop("disabled", false);
      }, 600);
    }

    // Click prev/next button: show slide with animation, disabled button when trigger animation
    // Next
    $(".slider__button--right").click(function () {
      currentSlide += 1;
      updateDots(currentSlide === totalSlides - 1 ? 1 : currentSlide);
      $slideButton.prop("disabled", true);
      $dot.prop("disabled", true);
      changeSlide(true, false);
    });

    //Prev
    $(".slider__button--left").click(function () {
      currentSlide -= 1;
      updateDots(currentSlide === 0 ? 3 : currentSlide);
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
    const tabActive = "content__tab--active";
    const tabContentActive = "content__tab-content--active";

    $tabButton.click(function () {
      // If choose active tab --> return
      if ($(this).hasClass(tabActive)) {
        return;
      }

      $tabButton.removeClass(tabActive);
      $tabContent.removeClass(tabContentActive).hide();

      $(this).addClass(tabActive);
      const tabContentId = $(this).data("tab");
      $("#" + tabContentId)
        .addClass(tabContentActive)
        .fadeIn(300);
    });
  }

  // Accordion jquery
  {
    // Show/hide content in accordion tab
    const $accordionButton = $(".content__accordion-header");
    const $accordionContent = $(".content__accordion-body");
    const accordionHeaderActive = "content__accordion-header--active";
    const accordionBodyActive = "content__accordion-body--active";

    $accordionButton.click(function () {
      // Click active -> Only close
      if ($(this).hasClass(accordionHeaderActive)) {
        $accordionButton.removeClass(accordionHeaderActive);
        $accordionContent.removeClass("." + accordionBodyActive).slideUp(300);
        return;
      }

      // Click other -> Close others + Open
      const accordionContentId = $(this).data("tab");

      $accordionButton.removeClass(accordionHeaderActive);
      $accordionContent.removeClass("." + accordionBodyActive).slideUp(300);

      $(this).addClass(accordionHeaderActive);
      $("#" + accordionContentId)
        .addClass(accordionBodyActive)
        .slideDown(300);
    });
  }

  // Multilevel menu jquery
  {
    const $menuHeader = $(".content__multilevel-header");
    const $menuContent = $(".content__multilevel-content");
    const menuHeaderActive = "content__multilevel-header--active";
    const menuContentActive = "content__multilevel-content--active";
    const menuItem = "content__multilevel-item";
    // Show menus at inner level, hide menus at the same level when click header
    $menuHeader.click(function (e) {
      // Prevent bubbling in events (from child to parent)
      e.stopPropagation();

      const menuId = $(this).data("menu");
      const $currentContent = $("#" + menuId);

      // If header not have data-menu (no menu to open) then close all menus
      if (!menuId) {
        $menuHeader.removeClass(menuHeaderActive);
        $menuContent.removeClass("." + menuContentActive).slideUp(300);
        return;
      }

      // Check if current menu is already active -> close it and return
      if ($(this).hasClass(menuHeaderActive)) {
        $(this).removeClass(menuHeaderActive);
        $currentContent.removeClass("." + menuContentActive).slideUp(300);
        return;
      }

      // Close related menus at same level
      // CLose header
      $(this)
        .closest("." + menuItem)
        .siblings()
        .find("." + menuHeaderActive)
        .removeClass(menuHeaderActive);

      // Close content
      $(this)
        .closest("." + menuItem)
        .siblings()
        .find("." + menuContentActive)
        .removeClass("." + menuContentActive)
        .slideUp(300);

      // Open current menu
      $(this).addClass(menuHeaderActive);
      $currentContent.addClass(menuContentActive).slideDown(300);
    });
  }
});
