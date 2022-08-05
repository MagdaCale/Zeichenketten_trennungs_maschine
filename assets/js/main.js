const ausgabeVorne = document.getElementById('ausgabeVorne')
const ausgabeHinten = document.getElementById('ausgabeHinten')

function schneiden(){
    const text = document.forms[0].txtInput.value
    let zeichen = document.forms[0].zeichenInput.value

    const trennen = document.forms[0].trennen.value
    console.log(trennen)

    let seperator =  document.forms[0].zeichenInput.value
    seperator = ` ${seperator} `
    console.log(seperator)

    const index = text.search(seperator)
    console.log(index + seperator.length)
    console.log('first', index, text, seperator)

    if (index === -1){ // index gibt aus, dass es das Wort nicht gibt (-1 steht für 'nicht vorhanden')
        ausgabeVorne.innerHTML = ('Upsi pupsi...Wort nicht gefunden.')
       /*  console.log(index) */
        ausgabeHinten.innerHTML = text
        /* console.log(ausgabeHinten) */
    }else{
        switch(trennen){
            case 'davor': // index gebinnt ab '0'
            ausgabeVorne.innerHTML = text.slice (0, index)
            ausgabeHinten.innerHTML = text.slice (index)
            console.log('first')
                            break;
            case 'danach': // length beginnt ab '1' daher length+1
            ausgabeVorne.innerHTML = text.slice(0, zeichen.length+1 + index)
            console.log('first', zeichen.length, index)
            ausgabeHinten.innerHTML = text.slice(zeichen.length+1 + index)
            console.log(ausgabeVorne, ausgabeHinten, )
                            break;
            default: console.log('DAS WARS BI***')
        }
    }
}




