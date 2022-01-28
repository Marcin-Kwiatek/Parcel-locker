let collectPackageButton = document.getElementById('collectPackageButton')

collectPackageButton.addEventListener("click", function () { goToForm() })

function goToForm() {
    let mainInformation = document.getElementById('mainInformation')
    if (mainInformation.innerHTML === '') {
        mainInformation.innerHTML =
            `<div class='packageCollectionForm'>
                <div class='formItem'>
                    <div class='inputSignature'>Numer telefonu</div>
                    <input type='tel' class='inputForm' id='phoneNumberInput' ></input>
                </div>    
                <div class='formItem'>
                    <div class='inputSignature'>Kod odbioru</div>
                    <input type='text' class='inputForm' id='pickupCodeInput'></input>
                </div>    
          </div>`
    }
    else if(document.getElementById('phoneNumberInput').value.length===0){
        let formError = document.getElementById('formError')
        formError.innerHTML = 'Pole numer telefonu nie może być puste!'
    }
    else if(document.getElementById('pickupCodeInput').value.length===0){
        let formError = document.getElementById('formError')
        formError.innerHTML = 'Pole kod odbioru nie może być puste!'
    }
}
