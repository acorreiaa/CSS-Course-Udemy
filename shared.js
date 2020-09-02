var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var no = document.querySelector('.modal__action--negative');
//console.dir(no);

//console.dir(selectPlanButtons);
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}
no.addEventListener('click', function () {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
});