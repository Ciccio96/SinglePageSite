// Funzione per aprire/chiudere il menu mobile
function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    const close = document.querySelector('.close');
    const body = document.body;

    // Aggiungi o rimuovi la classe active al menu
    menu.classList.toggle('active');
    
    // Mostra o nascondi l'icona hamburger e la X
    hamburger.classList.toggle('active');
    close.classList.toggle('active');

    // Aggiungi o rimuovi la classe per disabilitare lo scroll
    body.classList.toggle('active-menu');
}