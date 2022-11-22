const calculate = document.getElementById('calcular')

function imc() {
  const name = document.getElementById('nome').value
  const height = document.getElementById('altura').value
  const weight = document.getElementById('peso').value
  const result = document.getElementById('resultado')

  if (name !== '' && height !== '' && weight !== '') {
    const imcValue = (weight / (height * height)).toFixed(1)

    let classification = ''

    if (imcValue < 18.5) {
      classification = 'abaixo do peso.'
    } else if (imcValue < 25) {
      classification = 'com peso ideal. Prabens!'
    } else if (imcValue < 30) {
      classification = 'levemente acima do peso.'
    } else if (imcValue < 35) {
      classification = 'com obesidade grau I.'
    } else if (imcValue < 40) {
      classification = 'com obesidade grau II.'
    } else {
      classification = 'com obesidade grau III. Cuidado!'
    }

    result.textContent = `${name} seu IMC é ${imcValue} e você está ${classification}`
  } else {
    result.textContent = 'Preencha todos os campos!!!'
  }
}
calculate.addEventListener('click', imc)
