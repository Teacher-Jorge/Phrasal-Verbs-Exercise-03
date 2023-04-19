const put = document.getElementById('put')
const putz = document.getElementById('putz')
const btnPan = document.getElementById('animation-button')

let translate = document.getElementById('translate')

btnPan.addEventListener('click', (e) => {
    e.preventDefault
    btnPan.classList.add('animate')
    setTimeout(() => {
        btnPan.classList.remove('animate')
    }, 600)  
    
    let right = document.getElementById('right')
    right.play()
    translate.style.visibility = 'visible'
    let click = document.getElementById('click')
    click.play()
    let answer = document.getElementById('answer')
    answer.innerText = 'panning out.'
    btnPan.style.backgroundColor = 'lime'
    btnPan.style.color = 'green'
    btnPan.disabled = 'true'
    put.disabled = 'true'
    putz.disabled = 'true'
})

putz.addEventListener('click', function() {
    let click = document.getElementById('click')
    click.play()
    let wrong1 = document.getElementById('wrong1')
    wrong1.play()
    let img1 = document.getElementById('img1')
    img1.style.opacity = '0'
    let img2 = document.getElementById('img2')
    img2.style.opacity = '1'
    setTimeout(() => {
        img1.style.opacity = '1'
        img2.style.opacity = '0'
    }, 800);
    putz.style.backgroundColor = 'red'
    putz.style.color = 'yellow'
    putz.disabled = 'true'
})

put.addEventListener('click', function() {
    let click = document.getElementById('click')
    click.play()
    let wrong2 = document.getElementById('wrong2')
    wrong2.play()
    let img1 = document.getElementById('img1')
    img1.style.opacity = '0'
    let img2 = document.getElementById('img2')
    img2.style.opacity = '1'
    img2.style.opacity = '1'
    setTimeout(() => {
        img1.style.opacity = '1'
        img2.style.opacity = '0'
    }, 800);
    put.style.backgroundColor = 'red'
    put.style.color = 'yellow'
    put.disabled = 'true'
})

translate.addEventListener('click', function() {
    let audio = document.getElementById('audio')
    audio.play()
    let click = document.getElementById('click')
    click.play()
    let sentence = document.getElementById('sentence')
    translate.innerText = 'O negócio dele parece não estar dando certo.'
    setTimeout(() => {
        translate.innerHTML = 'Translate and Listen'
    }, 4000);
})

