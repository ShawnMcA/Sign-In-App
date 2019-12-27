// ----- New User Photo Upload ----- // 
// Replaces label text
function photoUpload() {
    const label = document.getElementById('image-upload');
    label.textContent = 'Thank you! Click submit to continue';
}

// Submit form validation
function submitPhoto() {
    const form = document.getElementById('image-capture');
    if(!form.checkValidity()) {
        alert('Please submit a photo');
    } else if (form.checkValidity()) {
        form.submit();
    }
}

// ----- Event Listeners ----- // 
document.getElementById('image-upload').addEventListener("click", () => {
    document.getElementById('image-capture').click();
});
document.getElementById('image-capture').addEventListener("change", photoUpload);
document.getElementById('submit-photo').addEventListener("click", submitPhoto);

