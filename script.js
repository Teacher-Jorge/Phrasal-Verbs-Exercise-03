const put = document.getElementById('put')
const putz = document.getElementById('putz')
const pan = document.getElementById('pan')

let translate = document.getElementById('translate')

put.addEventListener('click', function() {
    let right = document.getElementById('right')
    right.play()
    translate.style.visibility = 'visible'
    let click = document.getElementById('click')
    click.play()
    let answer = document.getElementById('answer')
    answer.innerText = 'put out'
    put.style.backgroundColor = 'lime'
    put.style.color = 'green'
    put.disabled = 'true'
    pan.disabled = 'true'
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

pan.addEventListener('click', function() {
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
    pan.style.backgroundColor = 'red'
    pan.style.color = 'yellow'
    pan.disabled = 'true'
})

translate.addEventListener('click', function() {
    let audio = document.getElementById('audio')
    audio.play()
    let click = document.getElementById('click')
    click.play()
    let sentence = document.getElementById('sentence')
    translate.innerText = 'Os bombeiros foram chamados pra apagar o fogo mas já era tarde demais!'
    setTimeout(() => {
        translate.innerHTML = 'Translate and Listen'
    }, 6000);
})

