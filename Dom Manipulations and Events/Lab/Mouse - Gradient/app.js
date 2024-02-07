function attachGradientEvents() {
    const gradient = document.getElementById('gradient-box');
    gradient.addEventListener('click', onClick);

    function onClick(event) {
        const x = event.offsetX;
        percent = Math.floor(x / 300 * 100);


        document.getElementById('result').textContent = percent + '%';
    }
}