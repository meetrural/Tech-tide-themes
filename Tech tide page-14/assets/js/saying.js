document.addEventListener('DOMContentLoaded', function() {
    const prevButton1 = document.getElementById('prevButton1');
    const nextButton1 = document.getElementById('nextButton1');
    const cards = document.querySelectorAll('.card-container1');
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            if (i === index) {
                card.style.display = 'block';
            } else {
                card.style.display = 'block';
            }
        });
    }

    function animateCards(direction) {
        const currentCard = cards[currentIndex];
        currentCard.classList.add(direction === 'next' ? 'slide-left' : 'slide-right');

        setTimeout(() => {
            currentCard.style.display = 'block';
            currentCard.classList.remove('slide-left', 'slide-right');

            currentIndex = direction === 'next' 
                ? (currentIndex + 1) % cards.length 
                : (currentIndex - 1 + cards.length) % cards.length;

            const nextCard = cards[currentIndex];
            nextCard.style.display = 'block';
            nextCard.classList.add(direction === 'next' ? 'slide-in-right' : 'slide-in-left');

            setTimeout(() => {
                nextCard.classList.remove('slide-in-right', 'slide-in-left');
            }, 500);
        }, 500);
    }

    prevButton1.addEventListener('click', () => animateCards('prev'));
    nextButton1.addEventListener('click', () => animateCards('next'));

    // Initially show only the first card
    showCard(currentIndex);
});