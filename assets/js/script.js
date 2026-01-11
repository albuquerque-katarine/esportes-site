// Slide - Gallery

var element = document.getElementById('content-slide');
var about = document.getElementById('about');  


// Corre o scroll para a esquerda 
document.getElementById('left').onclick = (event) => {
    event.preventDefault();
    element.scrollLeft -= 100;
};

// Corre o scroll para a direita
document.getElementById('right').onclick = (event) => {
    event.preventDefault();
    element.scrollLeft += 100;
};


// Abre a próxima view
document.getElementById('header-button').onclick = (event) => {
    event.preventDefault();
    about.scrollIntoView({ behavior: 'smooth' });
}
