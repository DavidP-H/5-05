let number = 

document.getElementById('button').addEventListener('click', multiply)

function multiply () {
  number = document.getElementById('input').value

  number = parseInt(number)

  number = number * number

  alert(number)
}
