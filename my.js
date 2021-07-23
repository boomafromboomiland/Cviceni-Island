//alert ('Ahoj svet')
//alert ('Druhá notifikácia')
let button = document.querySelector ('button').innerHTML = 'waf'
//button.innerHTML = 'waf'
let prepniTema = () => {
   // alert ('Som coool')
    document.querySelector('body').classList.toggle('je svetlo')
}
button.addEventListener ('click', prepniTema)