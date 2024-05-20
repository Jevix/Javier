function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

let slideIndex = 1;

function showSlides(n, modalId) {
    let i;
    let slides = document.querySelectorAll(`#${modalId} .carousel-image`);
    let dots = document.querySelectorAll(`#${modalId} .dot`);
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

function changeSlide(n) {
    showSlides(slideIndex += n, event.target.closest('.modal').id);
}

function currentSlide(n) {
    showSlides(slideIndex = n, event.target.closest('.modal').id);
}

// Initialize slides for each modal
document.querySelectorAll('.modal').forEach(modal => {
    showSlides(1, modal.id);
});
