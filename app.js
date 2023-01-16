let moneyAvail
let typeExp
let newDivId = 1
let newBtn
let expAmmount  
let totalExpenses = 0
let parentDiv
let newDivTwo
let newDivThree
let newLine
let clickNum = 0
let newDiv
/* Declaracion de variables globales */

let btnAdd = document.getElementById('addExp')
let nightMode = document.getElementById('nightMode')
/* Asignacion de botones modo noche y agregar gastos a variables para operar desde Js */

const contDiv = () => {
  newDivId+=1
  return newDivId
}   



const getValues = () => {
  moneyAvail = document.getElementById('inputMoney').value // tomo el valor de dinero disponible
  typeExp = document.getElementById('inputType').value // tomo el tipo de gasto
  expAmmount = document.getElementById('inputAmmount').value // tomo el valor del gasto
 
 // conversion de string a entero:
 
  moneyAvail = Number(moneyAvail) 
  expAmmount = Number(expAmmount) 
}

const createDiv = () => {
  // creacion de nuevos elementos:
  
  newLine = document.createElement('div')
  newDiv = document.createElement('div') 
  newDivTwo = document.createElement('div')
  newDivThree = document.createElement('div')
  newBtn = document.createElement('button')
  newBtn.innerHTML = '<i class="bi bi-trash"></i>'
  
  // asignacion de ID de div y boton para eliminar:
  
  newLine.id = `line${newDivId}`
  newDiv.id = `div${newDivId}`
  newBtn.id = `trashBtn${newDivId}`
  newDivTwo.id = `divTwo${newDivId}`
  newDivThree.id = `divThree${newDivId}`
  return newDivId
}

// muestra de texto en nuevo div:
 const content = () => {
  if (moneyAvail > 0 && expAmmount > 0){
  newDiv.innerText = 'Monto: $  '
  newDivTwo.innerText = expAmmount
  newDivThree.innerText = `  Detalle: ${typeExp}`}
  else {newDiv.innerText = 'Ingrese monto mayor a 0'}
} 


const assign = () => {
  
  // asignacion de arbol de jerarquia
  parentDiv = document.getElementById('newDivJs')
  parentDiv.appendChild(newDiv) 
  newDiv.appendChild(newDivTwo)
  newDiv.appendChild(newDivThree)
  newDiv.appendChild(newBtn)
  // creacion de clases de CSS para los nuevos elementos
  newDiv.classList.add('jsclass') 
  newDivTwo.classList.add('jsclass')
  newDivThree.classList.add('jsclass')
  newBtn.classList.add('trashBtn')
 
// bloque para borrar las lineas creadas

  let dltBtn = document.getElementById(`trashBtn${newDivId}`)  
  dltBtn.addEventListener('click', deleteLine)
  let divToDelete = document.getElementById(`div${newDivId}`)
  let ammountToDelete = newDivTwo.innerText
  function deleteLine(){
    totalExpenses-=ammountToDelete
    console.log(totalExpenses)
    divToDelete.remove()
    totalExp.innerText = totalExpenses
    updTotal()
    }
  return ammountToDelete
}

// bloque utilizado para actualizar el ingreso total y actualiza gastos.
const updAmmount = () => {
let totalAmm = document.getElementById('totalAmmount')
totalAmm.innerText = moneyAvail
totalExpenses+= expAmmount
let totalExp = document.getElementById('totalExp')
totalExp.innerText = totalExpenses 
}

// Funcion utilizada para actualizar saldo disponible y cambiar color segun si es positivo o negativo

const updTotal = () => {
  let totalMoney = moneyAvail
  totalMoney-=totalExpenses
  let availAmmount = document.getElementById('availAmmount')
  availAmmount.innerText = totalMoney
  if (totalMoney > 0){
  availAmmount.style.color = 'green'  
  }
  else if (totalMoney < 0) {availAmmount.style.color = 'red'}
  }
  
  // Funcion modo noche
  
  const nightModeOn = () => {
    clickNum+=1
    console.log(clickNum)
    if (clickNum % 2 != 0){
      document.body.style.backgroundColor = 'black'
      nightMode.innerHTML = '<i class="bi bi-brightness-high"></i>'
    }
    else {document.body.style.backgroundColor =  'rgb(113, 12, 133)'
    nightMode.innerHTML = '<i class="bi bi-moon"></i>'
  }}
    
  
  btnAdd.addEventListener('click', getValues)
  btnAdd.addEventListener('click', contDiv)
  btnAdd.addEventListener('click', createDiv )
  btnAdd.addEventListener('click', content)  
  btnAdd.addEventListener('click', assign)
  btnAdd.addEventListener('click', updAmmount)
  btnAdd.addEventListener('click', updTotal)
  nightMode.addEventListener('click', nightModeOn)


