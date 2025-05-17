// imageZoom.js - Funzione per lo zoom delle immagini

document.addEventListener('DOMContentLoaded', function() {
    // Crea il contenitore per il modal e lo aggiunge al documento
    const modalContainer = document.createElement('div');
    modalContainer.id = 'image-modal-container';
    modalContainer.className = 'modal-container';
    
    // Crea l'immagine da mostrare nel modal
    const modalImg = document.createElement('img');
    modalImg.id = 'modal-image';
    modalImg.className = 'modal-image';
    
    // Crea il bottone di chiusura
    const closeBtn = document.createElement('span');
    closeBtn.id = 'modal-close';
    closeBtn.className = 'modal-close';
    closeBtn.innerHTML = '&times;';
    
    // Assembla la struttura del modal
    modalContainer.appendChild(modalImg);
    modalContainer.appendChild(closeBtn);
    document.body.appendChild(modalContainer);
    
    // Trova e seleziona tutte le immagini nella galleria
    const galleryImages = document.querySelectorAll('.img-gallery');
    
    // Aggiungi event listener per ogni immagine
    galleryImages.forEach(image => {
        image.style.cursor = 'pointer'; // Cambia il cursore a pointer per indicare che è cliccabile
        
        image.addEventListener('click', function() {
            // Mostra il modal
            modalContainer.style.display = 'flex';
            
            // Imposta l'immagine nel modal
            modalImg.src = this.src;
            
            // Aggiunge una classe per animare l'apertura
            modalContainer.classList.add('show');
            document.body.style.overflow = 'hidden'; // Blocca lo scroll della pagina
        });
    });
    
    // Chiudi il modal quando si clicca il bottone di chiusura
    closeBtn.addEventListener('click', closeModal);
    
    // Chiudi il modal anche quando si clicca fuori dall'immagine
    modalContainer.addEventListener('click', function(event) {
        if (event.target === modalContainer) {
            closeModal();
        }
    });
    
    // Funzione per chiudere il modal
    function closeModal() {
        modalContainer.classList.remove('show');
        
        // Attendi che l'animazione di chiusura sia completata
        setTimeout(() => {
            modalContainer.style.display = 'none';
            document.body.style.overflow = ''; // Ripristina lo scroll
        }, 300);
    }
    
    // Aggiungi supporto per la chiusura con il tasto ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modalContainer.style.display === 'flex') {
            closeModal();
        }
    });
});