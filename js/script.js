window.onload = function () {
  AOS.init();
  // 모바일 관련
  const mbBt = $(".mb-bt");
  const mbWrap = $(".mb-wrap");
  const mbCon = $(".mb-content");
  function mbshow() {
    mbBt.addClass("active");
    mbCon.addClass("active");
    mbWrap.fadeIn();
    $("html").css("overflow", "hidden");
  }
  function mbhide() {
    mbBt.removeClass("active");
    mbCon.removeClass("active");
    mbWrap.hide();
    $("html").css("overflow", "auto");
  }
  mbBt.click(function () {
    if (mbBt.hasClass("active")) {
      mbhide();
    } else {
      mbshow();
    }
  });
  mbWrap.click(function () {
    mbhide();
  });
  mbCon.click(function (e) {
    e.stopPropagation();
  });
  $(window).resize(function () {
    let temp = $(window).width();
    if (temp > 800) {
      mbhide();
    }
  });
  // 섹션 액티브 관련
  const section = $("section");
  const sectionH = [];
  const sectionBt = $(".section-bt");
  const mbSectionBt = $(".mb-section-bt");
  $.each(section, function (index) {
    const windowH = Math.ceil($(this).offset().top - 70);
    sectionH[index] = windowH;
    new Waypoint({
      element: $(this),
      handler: function (direction) {
        if (direction == "down") {
          sectionBt.removeClass("active");
          sectionBt.eq(index).addClass("active");
          mbSectionBt.removeClass("active");
          mbSectionBt.eq(index).addClass("active");
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
          mbSectionBt.removeClass("active");
          mbSectionBt.eq(index).addClass("active");
        }
      },
      offset: "-70%",
    });
  });

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
  $.each(mbSectionBt, function (index) {
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
