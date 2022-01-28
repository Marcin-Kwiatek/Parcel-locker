let collectPackageButton = document.getElementById('collectPackageButton')

collectPackageButton.addEventListener("click", function () { goToForm() })

function goToForm() {
    let mainInformation = document.getElementById('mainInformation')
    mainInformation.innerHTML =  
    `<div class='packageCollectionForm'>
        <div class='formItem'>
            <div class='inputSignature'>Numer telefonu</div>
            <input type='tel' class='inputForm' ></input>
        </div>    
        <div class='formItem'>
            <div class='inputSignature'>Kod odbioru</div>
            <input type='text' class='inputForm' ></input>
        </div>    
    </div>`
}
