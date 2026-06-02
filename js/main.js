// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-left, .stagger-item').forEach(el => {
    observer.observe(el);
});

// 3D Card Hover Effect
function handleHover(e, el) {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function resetHover(el) {
    el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
}

// Modal Management
function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restore scroll
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    if (event.target.id.startsWith('modal-')) {
        closeModal(event.target.id);
    }
}

function nextStep(type, step) {
    // Hide all steps for the specific modal
    document.querySelectorAll(`#modal-${type} .modal-step`).forEach(el => {
        el.classList.add('hidden');
    });
    // Show the target step
    document.getElementById(`${type}-step-${step}`).classList.remove('hidden');
}

// Stagger Effect for multiple items in grids
document.querySelectorAll('.grid').forEach(grid => {
    const items = grid.querySelectorAll('.stagger-item');
    items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
});
