const header = document.querySelector('header')
const headerHeight = header.clientHeight
var lastScroll = 0

export const handleHeader = () => {
    window.addEventListener('scroll', e => {
        const currentScroll = window.pageYOffset

        if (currentScroll <= lastScroll) 
            header.style.transform = "translateY(0px)"   
        else
            header.style.transform = "translateY("+ -1*headerHeight +"px)"
        lastScroll = currentScroll
    })
}