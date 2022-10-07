window.onload = function(){
  AOS.init();
  const section = $('section');
  const sectionH = []
  $.each(section,function(index){
    const windowH = Math.ceil($(this).offset().top-70)
    sectionH[index] = windowH
    new Waypoint({
      element : $(this),
      handler : function(direction){
        if(direction == 'down'){
          sectionBt.removeClass('active')
          sectionBt.eq(index).addClass('active')
        }
      },
      offset : '30%'
    })
    new Waypoint({
      element : $(this),
      handler : function(direction){
        if(direction == 'up'){
          sectionBt.removeClass('active')
          sectionBt.eq(index).addClass('active')
        }
      },
      offset : '-70%'
    })
  })
  const sectionBt = $('.section-bt');
  $.each(sectionBt,function(index){
    $(this).click(function(event){
      event.preventDefault();
      scrollTo({
        top : sectionH[index],
        left : 0,
        behavior : 'smooth'
      })
    })
  })
  const project = $('.project');
  const visualBt = $('.visual-bt');
  visualBt.click(() => {
    
    scrollTo({
      top : project.offset().top-70,
      behavior: "smooth"
    })
  })
  const gotop = $('.gotop');
  gotop.click(function(){
    scrollTo({
      top:0,
      behavior:'smooth'
    })
  })
}