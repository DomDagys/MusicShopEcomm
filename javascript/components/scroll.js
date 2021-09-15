const reviewCards = document.querySelectorAll('.reviews__container__wrap__card')

const observerParams = {
    rootMargin: '-30%',
    threshhold: 1
}

export const handleScroll = () => {

    const reviewObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            let cardContent = entry.target.children[0]
            if (!entry.isIntersecting)
                cardContent.style.transform = 'translateY(100%)'
            else
                cardContent.style.transform = 'translateY(0)'
        })
    }, observerParams);

    reviewCards.forEach(card => reviewObserver.observe(card))
}