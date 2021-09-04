const wave1 = document.querySelector('#wave1')
const wave2 = document.querySelector('#wave2')
const wave3 = document.querySelector('#wave3')
const offsetWaves = document.querySelectorAll('.about__wave--offset')
const offsetList = Array.from(offsetWaves)
var lastScroll = 0
var shiftValue = 0

export const handleWaves = () => {
    offsetList.forEach(wave => {
        wave.style.transform = "translateX(100%)"
    })

    window.addEventListener('scroll', e => {
        const currentScroll = window.pageYOffset
        const clientWidth = window.innerWidth

        if (currentScroll <= lastScroll) {
            shiftValue += 25
            if (shiftValue >= clientWidth) {
                shiftValue = 0
            }

            wave1.style.transform = "translateX("+ shiftValue*1 +"px)" 
            wave2.style.transform = "translateX("+ shiftValue*0.5 +"px)" 
            wave3.style.transform = "translateX("+ shiftValue*0.25 +"px)"

            offsetList.forEach((wave, i) => {
                var offset = i == 0? 1 : i == 1? 0.5 : 0.25
                wave.style.transform = "translateX(calc(100% + "+ shiftValue*offset +"px))"
            })
        }  
        else {
            shiftValue -= 25
            if (-shiftValue >= clientWidth) {
                shiftValue = 0
            }

            wave1.style.transform = "translateX("+ shiftValue*1 +"px)" 
            wave2.style.transform = "translateX("+ shiftValue*0.5 +"px)" 
            wave3.style.transform = "translateX("+ shiftValue*0.25 +"px)"

            offsetList.forEach((wave, i) => {
                var offset = i == 0? 1 : i == 1? 0.5 : 0.25
                wave.style.transform = "translateX(calc(100% + "+ shiftValue*offset +"px))"
            })
        }
        lastScroll = currentScroll
    })
}