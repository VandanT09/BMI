let button = document.getElementById('btn');

button.addEventListener('click', ()=> {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(height === ' ' || isNaN(height) || (height<=0))
    {
        document.getElementById('height_error').innerHTML = 'Provide a valid height';
    }
    else
    {
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === ' ' || isNaN(weight) || (weight<=0))
    {
        document.getElementById('weight_error').innerHTML = 'Provide a valid weight';
    }
    else
    {
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status)
    {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        if(bmi<18.6)
        {
            result.innerHTML = 'UnderWeight : ' + bmi;
        }
        else if(bmi>=18.6 && bmi<24.9)
        {
            result.innerHTML = 'Normal : ' + bmi;
        }
        else
        {
            result.innerHTML = 'OverWeight : ' + bmi;
        }
    }
    else
    {
        alert('Oops! Check the Forms!');
        result.innerHTML = '';
    }
});