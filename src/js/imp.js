const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString('es-es', { weekday: 'long', month: 'short', day: 'numeric' })

document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const images = document.querySelectorAll('.dropdown-content img');

    dropdownBtn.addEventListener('click', function () {
        const imageContainer = document.querySelector('.dropdown-content');
        const areImagesVisible = imageContainer.style.display === 'block';

        imageContainer.style.display = areImagesVisible ? 'none' : 'block';
        images.forEach(image => {
            image.style.display = areImagesVisible ? 'none' : 'inline-block';
        });
    });

    images.forEach(image => {
        image.addEventListener('click', function () {
            const selectedBackground = this.getAttribute('data-bg');
            document.body.style.backgroundImage = `url('${selectedBackground}')`;
            const imageContainer = document.querySelector('.dropdown-content');
            imageContainer.style.display = 'none';
        });
    });
});

