document.getElementById('learnMore').addEventListener('click', function() {
    const additionalText = document.querySelector('.hidden');
    additionalText.classList.toggle('visible');
    this.style.display = 'none';
});
