const goToNextInput = () => {
    for(const [i, inputElement] of inputsList.entries()) {
       if (inputElement.value.length === 1 && i !== 5) {
         removeDisabledAttribute(inputsList[i+1]);
         inputsList[i+1].focus();
        }
       if (inputElement.value.length === 1 && i === 5) {
         inputElement.parentElement.nextElementSibling.focus();
         areAllFilled(inputsList) ? setDisabledAttributeForAll(inputsList) : '';
       }
    }
  }