


function scrollToDiv( classToScrollTo=null ){
	if( classToScrollTo ){
		var element = document.getElementsByClassName( classToScrollTo )[0];
		window.scrollTo( 0, findPos(element) );
	} else {
		window.scrollTo(0, 0);
	}
	return true;
}

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}