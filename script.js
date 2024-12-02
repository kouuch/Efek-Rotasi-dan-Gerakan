document.getElementById('animateButton').addEventListener('click', function() {

    const text = document.querySelector('.animated-text');
    text.style.transform = 'rotate(360deg)';

    const box = document.querySelector('.box');
    box.style.transform = 'translateY(200px)';
    box.style.backgroundColor = '#32cd32';
});
