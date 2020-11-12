const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.backdrop');
const selectPlanButtons = document.querySelectorAll('.plan button');

for (let i = 0; i < selectPlanButtons; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}