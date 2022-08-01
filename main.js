// when popup open  
jQuery( document ).on( 'elementor/popup/show', () => {
  jQuery("html,body").addClass("cantScroll");  
});      

// when popup close
jQuery(document).on( 'elementor/popup/hide', () => {
  jQuery("html,body").removeClass("cantScroll");
});
