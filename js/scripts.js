document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');
            
            // Close all other accordions
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
                h.setAttribute('aria-expanded', 'false');
                h.nextElementSibling.classList.remove('active');
            });
            
            // Toggle current accordion
            if (!isActive) {
                header.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
                content.classList.add('active');
            }
        });
    });
});