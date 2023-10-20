let currentInput =''; 
    let display = document.getElementById ('display') 
 
    function appendToDisplay (value) 
    { 
        currentInput += value;  
        display.value = currentInput; 
    } 
 
    function clearDisplay () 
    { 
        currentInput = '';  
        display.value = ''; 
    } 

    function calculateResult (){ 
        try { 
            const result = eval(currentInput);
            display.value = result;
            currentInput = result.toString(); 
 
        } catch (error) { 
            display.value =' error'; 
        } 
             
    }

const btnswitch = document.querySelector('#switch');

btnswitch.addEventListener( 'click', () =>{
    document.body.classList.toggle('dark');
    btnswitch.classList.toggle('active');
})