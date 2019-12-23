// ----- New User Photo Upload ----- // 
// Replaces label text
function photoUpload() {
    const label = document.getElementById('image-upload');
    label.textContent = 'Thank you! Click submit to continue';
}

// Submit form validation
function submitForm() {
    const form = document.getElementById('image-capture');
    if(!form.checkValidity()) {
        alert('Please submit a photo');
    } 
}