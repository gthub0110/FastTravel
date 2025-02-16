    // Modal functionality
    function updateCarCards() {
        const viewButtons = document.querySelectorAll('.car-button');
        
        viewButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                const car = carsData[index];
                console.log('Opening modal for:', car.name); // Debug log
                openModal(car);
            });
        });
    }

    function openModal(car) {
        const modal = document.getElementById('carModal');
        if (!modal) {
            console.error('Modal element not found');
            return;
        }

        // Update modal content
        modal.querySelector('.modal-car-name').textContent = car.name;
        modal.querySelector('.price-tag').textContent = car.price;
        modal.querySelector('.spec-value.year').textContent = car.year;
        modal.querySelector('.spec-value.engine').textContent = car.engine;
        modal.querySelector('.spec-value.hp').textContent = car.hp;
        modal.querySelector('.spec-value.drive').textContent = car.drive;
        
        // Update modal image
        const modalImage = modal.querySelector('#modalMainImage');
        if (modalImage) {
            modalImage.src = car.image;
            modalImage.alt = car.name;
        }

        // Show modal with animation
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        const modal = document.getElementById('carModal');
        if (!modal) return;
        
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
        document.body.style.overflow = '';
    }

    // Add event listeners when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        const modal = document.getElementById('carModal');
        const closeBtn = document.querySelector('.close-modal');

        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
        }

        // Initialize cards
        updateCarCards();
    });