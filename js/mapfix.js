jQuery('.show-route').click(function() {
    var rownr = jQuery(this).attr('rel');
    jQuery('#map_canvas'+rownr).html( jQuery('#map_canvas'+rownr).html() );
});