window.onload = function () {
  AOS.init();
  // 모바일 관련
  const mbBt = $(".mb-bt");
  const mbWrap = $(".mb-wrap");
  const mbCon = $(".mb-content");
  mbBt.click(function () {
    mbBt.toggleClass("active");
    if (mbBt.hasClass("active")) {
      mbWrap.show();
      $("html").css("overflow", "hidden");
    } else {
      mbWrap.hide();
      $("html").css("overflow", "auto");
    }
  });
  mbWrap.click(function () {
    mbWrap.fadein();
    mbBt.removeClass("active");
  });
  mbCon.click(function (e) {
    e.stopPropagation();
  });
  $(window).resize(function () {
    let temp = $(window).width();
    if (temp > 800) {
      mbBt.removeClass("active");
      mbWrap.hide();
    }
  })
  // 섹션 액티브 관련
  const section = $("section");
  const sectionH = [];
  $.each(section, function (index) {
    const windowH = Math.ceil($(this).offset().top - 70);
    sectionH[index] = windowH;
    new Waypoint({
      element: $(this),
      handler: function (direction) {
        if (direction == "down") {
          sectionBt.removeClass("active");
          sectionBt.eq(index).addClass("active");
        }
      },
      offset: "30%",
    });
    new Waypoint({
      element: $(this),
      handler: function (direction) {
        if (direction == "up") {
          sectionBt.removeClass("active");
          sectionBt.eq(index).addClass("active");
        }
      },
      offset: "-70%",
    });
  });
  const sectionBt = $(".section-bt");
  $.each(sectionBt, function (index) {
    $(this).click(function (event) {
      event.preventDefault();
      scrollTo({
        top: sectionH[index],
        left: 0,
        behavior: "smooth",
      });
    });
  });
  const project = $(".project");
  const visualBt = $(".visual-bt");
  visualBt.click(() => {
    scrollTo({
      top: project.offset().top - 70,
      behavior: "smooth",
    });
  });
  const gotop = $(".gotop");
  gotop.click(function () {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
