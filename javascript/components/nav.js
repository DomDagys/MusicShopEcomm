const hamburgetButton = document.querySelector('.header__nav-btn')
const bars = Array.from(hamburgetButton.children)
const nav = document.querySelector('.nav')
const navList = nav.children[0]
const links = Array.from(navList.children)
var isOpen = false

export const handleNav = () => {
    hamburgetButton.addEventListener('click', e => {
        if (isOpen) {
            nav.style.transform = "translateY(-100%)"

            links.forEach(link => {
                link.style.opacity = 0
            });

            bars[0].style.transform = "translate(-50%, -50%) translateY(-10px)"
            bars[0].style.opacity = 1

            bars[1].style.transform = "translate(-50%, -50%)"
            bars[2].style.transform = "translate(-50%, -50%)"

            bars[3].style.transform = "translate(-50%, -50%) translateY(10px)"
            bars[3].style.opacity = 1
        } else {
            nav.style.transform = "translateY(100%)"

            links.forEach(link => {
                link.style.opacity = 1
            });

            bars[0].style.transform = "translate(-50%, -50%) translateY(-20px)"
            bars[0].style.opacity = 0

            bars[1].style.transform = "translate(-50%, -50%) rotate(45deg)"
            bars[2].style.transform = "translate(-50%, -50%) rotate(-45deg)"

            bars[3].style.transform = "translate(-50%, -50%) translateY(20px)"
            bars[3].style.opacity = 0
        }

        isOpen = !isOpen
    })
}