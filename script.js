let collectPackageButton = document.getElementById('collectPackageButton')

collectPackageButton.addEventListener("click", function () { goToForm() })

function waitForTheForm() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 3000)
    })
}

async function goToForm() {
    let mainInformation = document.getElementById('mainInformation')
    if (mainInformation.innerHTML === '') {
        collectPackageButton.classList.add('button--loading')
        await waitForTheForm()
        collectPackageButton.classList.remove('button--loading')
        mainInformation.innerHTML =
            `<div class='packageCollectionForm'>
                <div class='formItem'>
                    <div class='inputSignature'>Numer telefonu</div>
                    <input type='number' class='inputForm' id='phoneNumberInput' ></input>
                </div>    
                <div class='formItem'>
                    <div class='inputSignature'>Kod odbioru</div>
                    <input type='number' class='inputForm' id='pickupCodeInput'></input>
                </div>    
          </div>`
    }
    else if (document.getElementById('phoneNumberInput').value.length !== 9) {
        let formError = document.getElementById('formError')
        formError.innerHTML = 'Niepoprawna wartość pola numer telefonu!'
    }
    else if (document.getElementById('pickupCodeInput').value.length !== 4) {
        let formError = document.getElementById('formError')
        formError.innerHTML = 'Niepoprawna wartość pola kod odbioru!'
    }
    else {
        let collectPackageButton = document.getElementById("collectPackageButton")
        collectPackageButton.insertAdjacentHTML('afterend',
            `<div class="modal" id='modal'>
                <div class="modalTitle">Paczka odebrana!</div>
                <div class="modalInformation">Zrobiłeś to w czasie 10 sekund! Czy możemy zrobić dla Ciebie coś jeszcze?</div>
                <button class="choiceFurtherActionButton" id="everythingForTodayButton">To wszystko na dziś</button>
                <button class="choiceFurtherActionButton" id="pickUpAnotherPackageButton">Odbierz kolejną paczkę</button>
            </div>
            <div id='obscureBackground'></div>`)
        let everythingForTodayButton = document.getElementById('everythingForTodayButton')
        let pickUpAnotherPackageButton = document.getElementById('pickUpAnotherPackageButton')

        everythingForTodayButton.addEventListener("click", function () { goToFirstPage() })
        pickUpAnotherPackageButton.addEventListener("click", function () { switchToNextPackage() })

        function switchToNextPackage() {
            let modal = document.getElementById('modal');
            modal.remove();
            let obscureBackground = document.getElementById('obscureBackground');
            obscureBackground.remove();
            let mainInformation = document.getElementById('mainInformation')
            mainInformation.innerHTML = ''
            let formError = document.getElementById('formError')
            formError.innerHTML = ''
            goToForm()
        }
        function goToFirstPage() {
            let modal = document.getElementById('modal');
            modal.remove();
            let obscureBackground = document.getElementById('obscureBackground');
            obscureBackground.remove();
            let mainInformation = document.getElementById('mainInformation')
            mainInformation.innerHTML = ''
            let formError = document.getElementById('formError')
            formError.innerHTML = ''
        }
    }
}