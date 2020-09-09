var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
//console.dir(no);

//console.dir(selectPlanButtons);
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        /*modal.style.display = 'block';
        backdrop.style.display = 'block'; overwrite the complete
        modal.className = open; This will actually overwrite the complete class*/
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', function () {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
    mobileNav.style.display = 'none';
});

modalNoButton.addEventListener('click', function () {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
});

toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
})