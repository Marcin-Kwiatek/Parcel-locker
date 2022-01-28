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
    else if (document.getElementById('phoneNumberInput').value.length === 0) {
        let formError = document.getElementById('formError')
        formError.innerHTML = 'Pole numer telefonu nie może być puste!'
    }
    else if (document.getElementById('pickupCodeInput').value.length === 0) {
        let formError = document.getElementById('formError')
        formError.innerHTML = 'Pole kod odbioru nie może być puste!'
    }
    else {
        let collectPackageButton = document.getElementById("collectPackageButton")
        collectPackageButton.insertAdjacentHTML('afterend',
            `<div class="modal" id='modal'>
                <div class="modalTitle">Paczka odebrana!</div>
                <div class="modalInformation">Zrobiłeś to w czasie 10 sekund! Czy możemy zrobić dla Ciebie coś jeszcze?</div>
                <button class="choiceFurtherActionButton" id="everythingForTodayButton">To wszystko na dziś</button>
                <button class="choiceFurtherActionButton" id="pickUpAnotherPackageButton">Odbierz kolejną paczkę</button>
            </div>`)
            
        let pickUpAnotherPackageButton = document.getElementById('pickUpAnotherPackageButton')

        pickUpAnotherPackageButton.addEventListener("click", function () { switchToNextPackage() })

        function switchToNextPackage() {
            let modal = document.getElementById('modal');
            modal.remove();
            let mainInformation = document.getElementById('mainInformation')
            mainInformation.innerHTML = ''
            goToForm()
        }
    }
}