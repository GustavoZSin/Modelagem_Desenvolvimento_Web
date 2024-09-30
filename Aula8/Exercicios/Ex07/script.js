let imagens = document.querySelectorAll('.galeria img');

imagens.forEach(imagem => {
    imagem.addEventListener('mouseover', () => {
        imagem.style.transform = "scale(1.5)";
    });

    imagem.addEventListener('mouseout', () => {
        imagem.style.transform = "scale(1)";
    });
});