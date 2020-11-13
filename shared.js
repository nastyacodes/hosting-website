const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalButtonNo = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    closeModal();
});

if (modal) {
    modalButtonNo.addEventListener('click', closeModal);
}

function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }

    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', () => {
   // mobileNav.style.display = 'block';
   // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});