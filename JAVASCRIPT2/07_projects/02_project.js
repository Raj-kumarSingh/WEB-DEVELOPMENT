const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML=`please give a valid height ${height}`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML=`please give a valid weight ${weight}`;
    }
    else{
        const bmi=(weight/((height/100)*(height/100))).toFixed(2);
        let text="";
        if(bmi<18.6){
            text='<span>Underweight</span>';
        }
        else if(bmi>=18.6 && bmi<=24.9){
            text='<span>Normal</span>';
        }
        else{
            text='<span>Overweight</span>';
        }
        results.innerHTML=`<span>your BMI is:${bmi}</span><br>${text}`;
    }
})
