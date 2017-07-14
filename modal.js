

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementById("close");

var show = function(){
    $('#myModal').modal('show');
};

$(window).load(function(){
    var timer = window.setTimeout(show,3000);
});



closeBtn.addEventListener("click",closeFunc, false);

function closeFunc(){
	closeBtn.onclick = modal.style.display = "none";
		}







