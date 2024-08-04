


function calculate(){


    const height = document.getElementById('height')
const weight = document.getElementById('weight')

const point = document.getElementById('point')
const status = document.getElementById('status')

const heightElement = parseFloat(height.value)/100
const weightElement = parseFloat(weight.value)



    const answer = weightElement/(heightElement*heightElement)
    point.value = answer.toFixed(2)

    

    if (isNaN(heightElement) || isNaN(weightElement) || heightElement <= 0 || weightElement <= 0) {
        point.value = 'Invalid input';
        status.value = '';
        return;
    }

    
    if(answer<18.5){
        status.value = 'Under Weight'
    }
    else if(answer >= 18.5 && answer <24.9){
        status.value = 'Healthy'
    }
    else if (answer >= 25 && answer < 29.9){
        status.value ='Over WEight'
    }
    else{
        status.value = 'Obese'
    }
     

}

