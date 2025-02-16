    // Debounce function
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Search functionality with DOM elements cache
    const searchHandler = (() => {
        let searchInput;
        let visibleCards = new Set();

        function filterCards(searchTerm) {
            const cards = document.querySelectorAll('.car-card');
            const searchLower = searchTerm.toLowerCase();

            cards.forEach(card => {
                const name = card.querySelector('.car-name').textContent.toLowerCase();
                const shouldShow = name.includes(searchLower);
                
                // Only update DOM if visibility changed
                if (shouldShow && !visibleCards.has(card)) {
                    card.style.display = 'block';
                    visibleCards.add(card);
                } else if (!shouldShow && visibleCards.has(card)) {
                    card.style.display = 'none';
                    visibleCards.delete(card);
                }
            });
        }

        const debouncedFilter = debounce(filterCards, 300);

        return {
            init() {
                searchInput = document.querySelector('.search-input');
                if (searchInput) {
                    searchInput.addEventListener('input', (e) => {
                        debouncedFilter(e.target.value);
                    });
                }
            }
        };
    })();

    // Initialize once DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        // Initial render with cache enabled
        renderCars(carsData, true);
        // Initialize search
        searchHandler.init();
    });