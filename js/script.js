$(document).ready(function() {

	$( "li[name=control]" ).click(function() {
		var id;
		var divs;
		divs = ['1','2','3','4','5','6'];
		id = $(this).attr('id');
		
		divs = jQuery.grep(divs, function(value) {
  			return value != id;
		});
	    if ( $( "#div"+id ).is( ":hidden" ) ) {
		    $( "#div"+id ).slideDown( "slow" );
		    jQuery.each(divs, function(index, value) {
		       if( $( "#div"+value ).not( ":hidden" )) {
		       		$( "#div"+value ).slideUp('slow');
		       }
		 	});
		} else {
			$( "#div"+id ).slideUp('slow');
		}
	});


	
		
});