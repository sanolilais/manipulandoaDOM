const $text1 = document.querySelector ('.text1')

$text1.textContent = 'VERDE'
$text1.style.borderRadius = '20%'
$text1.style.width = '190px'
$text1.style.height = '140px'
$text1.style.background = 'green'
$text1.style.textAlign = 'center'
$text1.style.margin = '20px'
 


const $text2 = document.querySelector ('.text2')

$text2.textContent = 'AMARELO'
$text2.style.borderRadius = '20%'
$text2.style.width = '190px'
$text2.style.height = '140px'
$text2.style.background = 'yellow'
$text2.style.textAlign = 'center'
$text2.style.margin = '50px'
$text2.style.alignItems = 'right'

const $text3 = document.querySelector ('.text3')

$text3.textContent = 'ROXO'
$text3.style.borderRadius = '20%'
$text3.style.width = '190px'
$text3.style.height = '140px'
$text3.style.background = 'purple'
$text3.style.textAlign = 'center'
$text3.style.margin = '90px'

const $text4 = document.querySelector ('.text4')

$text4.textContent = 'CINZA'
$text4.style.borderRadius = '20%'
$text4.style.width = '190px'
$text4.style.height = '140px'
$text4.style.background = 'gray'
$text4.style.textAlign = 'center'
$text4.style.margin = '17px'


const $text5 = document.querySelector ('.text5')

$text5.textContent = 'AZUL'
$text5.style.borderRadius = '20%'
$text5.style.width = '190px'
$text5.style.height = '140px'
$text5.style.background = 'blue'
$text5.style.textAlign = 'center'
$text5.style.margin = '44px'


const $text6 = document.querySelector ('.text6')

$text6.textContent = 'ROSA'
$text6.style.borderRadius = '20%'
$text6.style.width = '190px'
$text6.style.height = '140px'
$text6.style.background = 'pink'
$text6.style.textAlign = 'center'
$text6.style.margin = '78px'


const $text7 = document.querySelector ('.text7')

$text7.textContent = 'PRETO'
$text7.style.borderRadius = '20%'
$text7.style.width = '190px'
$text7.style.height = '140px'
$text7.style.background = 'black'
$text7.style.textAlign = 'center'


const $form1 = document.querySelector ('.form1')

$form1.style.width = '160px'
$form1.style.height = '260px'
$form1.style.padding = '20px'
$form1.style.lineHeight = '40px'
$form1.style.margin = '60px'
$form1.style.fontSize = '20px'
$form1.style.background = '#c98961'

const $form2 = document.querySelector ('.form2')

$form2.style.width = '160px'
$form2.style.height = '260px'
$form2.style.padding = '20px'
$form2.style.lineHeight = '40px'
$form2.style.margin = '60px'
$form2.style.fontSize = '20px'
$form2.style.background = '#c47fdb'


const $form3 = document.querySelector ('.form3')

$form3.style.width = '160px'
$form3.style.height = '260px'
$form3.style.padding = '20px'
$form3.style.lineHeight = '40px'
$form3.style.margin = '60px'
$form3.style.fontSize = '20px'
$form3.style.background = '#85abed'


const $table1 = document.querySelector ('.tableone')
$table1.style.width = '260px'
$table1.style.height ='300px'
$table1.style.lineHeight = '40px'




const password = '2022'

function login () {
    const chance = document.getElementById('pass-form1').value 

    if (chance == password ) {
        alert ("Senha correta...Fazendo seu login")
    } else { 
        alert ("Senha invalida... tente novamente")
    }
}

const btnLogin = document.querySelector('.mylogin')

btnLogin.addEventListener('click', function(){
    login()
})