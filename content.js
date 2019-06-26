let loop;
let stop;
const approve = function(){
    let button = document.getElementsByClassName("photo-vote-ctrl-section__button")[0];
    let offer = document.getElementsByClassName("open-photo-selection-modal")[0];
    let skip = document.getElementsByClassName("photo-vote-ctrl-section-link")[0];
    let modal = document.getElementsByClassName("web-uni_web")[0];

    if(button != undefined) {
        button.click();
    } else if (offer != undefined) {
        let modalButton = modal.getElementsByTagName("button")[0];
        if (modalButton != undefined) {
            clearInterval(loop);
        } else {
            if (skip != undefined) {
                skip.click();
            } else {
                clearInterval(loop);
            }
        }
    }
    else {
        clearInterval(loop);
    }
}

const start = function() {
    loop = setInterval(approve, 3000)
}

window.onload = function() {
    setTimeout(start, 5000)
}
