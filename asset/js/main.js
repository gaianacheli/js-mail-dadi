//creiamo un array

const userEmails = ['pippo@yahoo.com',
                    'frank@gmail.com',
                    'livio@yahoo.com']
//creiamo le costanti
const btnEmail = document.getElementById('btnEmail')
const txtEmail = document.getElementById('txtEmail')
const pRisultato = document.getElementById('risultato')

btnEmail.addEventListener("click", function() {
  let inputEmail = txtEmail.value
  let isFound = 'la tua email non è presente nella lista'
  for (let i = 0; i < userEmails.length; i++){ 
      if (inputEmail== userEmails[i]){
        isFound = 'si, la tua email è presente nella lista'
      }
  }
pRisultato.innerHTML= isFound
})

    