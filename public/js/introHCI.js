'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$("#btnBig").click(clickLikeBtn);
}

function clickLikeBtn() {
    ga('create', 'UA-158722221-1', 'auto');
    ga('send', 'event', 'like', 'click');
}