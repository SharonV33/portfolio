export const createCardAnimations = () => {
    const cards = document.getElementsByClassName('card')

    const transformCard = (e) => {
        const
            height = e.target.clientHeight,
            width = e.target.clientWidth,
            rotationY = 20 * ((e.layerX - width / 2) / width),
            rotationX = -20 * ((e.layerY - height / 2) / height)

        e.target.style.transform = `perspective(1000px) scale(1.1) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
    }

    cards.forEach(card => {
        card.addEventListener('mousemove', transformCard)
        card.addEventListener('mouseout', () => {
            card.style.transform = 'perspective(1000px) scale(1) rotateX(0) rotateY(0)'
        })
    })
}
