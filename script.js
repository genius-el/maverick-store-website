'use strict';

const update = document.querySelector('.update');
const overlay = document.querySelector('.overlay');
const btnCloseUpdate = document.querySelector('.close-update');
const btnOpenUpdate = document.querySelector('.show-update');
console.log(update, overlay, btnCloseUpdate, btnOpenUpdate);

const openUpdate = function() {
    update.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeUpdate = function() {
    update.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnOpenUpdate.addEventListener('click', openUpdate);

btnCloseUpdate.addEventListener('click', closeUpdate);
overlay.addEventListener('click', closeUpdate);

document.addEventListener('keydown', function(e) {
    console.log(e.key);

    if (e.key === 'Escape' && !update.classList.contains('hidden')) {
        closeUpdate()
    }
})
