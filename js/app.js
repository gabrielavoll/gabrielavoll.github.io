


function scrollToDiv( scrollToY=null ){
	if( scrollToY ){
		window.scrollTo( 0, scrollToY);
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