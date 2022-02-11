
function showPopup(id) {
    var popup = document.getElementById(id);
    popup.classList.add("popup--active");
}

function hidePopups() {
    var popups = document.getElementsByClassName('popup--active');
    
    for(var i=0;i<popups.length;i++) {
        popups[i].classList.remove('popup--active');
    }
}

document.getElementById("zPopupClose").addEventListener("click",function(e) {
    e.preventDefault();
    hidePopups();
});

document.getElementById("zPopupClose2").addEventListener("click",function(e) {
    e.preventDefault();
    hidePopups();
});



var btnZamer = document.getElementsByClassName("btn-zamer");
for(var i=0;i<btnZamer.length;i++) {
    btnZamer[i].addEventListener("click", function(e) {
        e.preventDefault();
        showPopup('popup');
    });
}

var btnCall = document.getElementsByClassName("btn-call");
for(var i=0;i<btnCall.length;i++) {
    btnCall[i].addEventListener("click", function(e) {
        e.preventDefault();
        showPopup('popup2');
    });
}

// var btnSubmit = document.getElementsByClassName("form-submit");
// for(var i=0;i<btnSubmit.length;i++) {
//     btnSubmit[i].addEventListener("click", function(e) {
//         e.preventDefault();
//         hidePopups();
//         showPopup('popup3');
//         setTimeout(function() { hidePopups(); }, 3000);
//     })
// }

