const mobile = document.querySelector('.butMob');
const desctop = document.querySelector('.butDes');
const wrapper = document.querySelector('.wrapper');



document.querySelector('.butMob').addEventListener('click', function() {
    if (true) {
    mobile.style.display = 'none';
    desctop.style.display = 'block';
    wrapper.style.maxWidth = '375px';
    }
})

document.querySelector('.butDes').addEventListener('click', function() {
    if (true) {
    desctop.style.display = 'none';
    mobile.style.display = 'block';
    wrapper.style.maxWidth = '1400px';
    }
})