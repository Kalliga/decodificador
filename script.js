const buttonEncrypt = document.getElementById('bt-encrypt');
const buttonDecrypt = document.getElementById('bt-decrypt');
const buttonCopy = document.getElementById('bt-copy');
const outputAreaText = document.getElementById('output-area-text');
const hideArea = document.getElementById('hide-area');
const hideArea2 = document.getElementById('hide-area2');

buttonCopy.style.display = 'none';

buttonEncrypt.onclick = () => {
  const textEntry = document.getElementById('input-area').value;
  const arrayListText = textEntry.split('');
  const arrayListEncrypt = [];

  for (let i = 0; i < arrayListText.length; i++) {
    if (arrayListText[i] === 'a') {
      arrayListEncrypt.push('ai');
    } else if (arrayListText[i] === 'e') {
      arrayListEncrypt.push('enter');
    } else if (arrayListText[i] === 'i') {
      arrayListEncrypt.push('imes');
    } else if (arrayListText[i] === 'o') {
      arrayListEncrypt.push('ober');
    } else if (arrayListText[i] === 'u') {
      arrayListEncrypt.push('ufat');
    } else {
      arrayListEncrypt.push(arrayListText[i]);
    }
  }

  hideArea.style.display = 'none';
  hideArea2.style.display = 'none';
  outputAreaText.innerHTML = arrayListEncrypt.join('');
  toggleCopyButtonVisibility();
}

buttonDecrypt.onclick = () => {
  const textEntry = document.getElementById('input-area').value;
  const decrypt = textEntry.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

  hideArea.style.display = 'none';
  hideArea2.style.display = 'none';
  outputAreaText.innerHTML = decrypt;
  toggleCopyButtonVisibility();
}

function toggleCopyButtonVisibility() {
  if (outputAreaText.innerHTML.trim() !== '') {
    buttonCopy.style.display = 'block';
  } else {
    buttonCopy.style.display = 'none';
  }
}

buttonCopy.onclick = () => {
  const outputText = outputAreaText.innerText;
  
  navigator.clipboard.writeText(outputText)
    .then(() => {
      console.log('Texto copiado com sucesso!');
      alert('Texto copiado com sucesso!');
    })
    .catch(err => {
      console.error('Erro ao copiar texto: ', err);
      alert('Erro ao copiar texto: ' + err);
    })
}
