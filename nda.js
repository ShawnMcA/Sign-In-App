// ----- New User NDA ----- // 
function checkNDA() {
    const ndaText = document.getElementById('nda-text');
    const submitBtn = document.getElementById('submit-nda');

    if (ndaText.scrollHeight - ndaText.scrollTop - ndaText.clientHeight < 1) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

// ---  TODO: Send NDAViewed = true to server --- // 
function acceptNDA() {
    const submitBtn = document.getElementById('submit-nda');
    if (submitBtn.disabled = false) {
        return true;
    }
}

// ----- Event Listeners ----- //
document.getElementById('nda-text').addEventListener("scroll", checkNDA);
document.getElementById('submit-nda').addEventListener("click", acceptNDA);
