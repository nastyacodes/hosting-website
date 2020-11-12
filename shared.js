const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

const modalButtonNo = document.querySelector('.modal__action--negative');

backdrop.addEventListener('click', closeModal);

modalButtonNo.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}