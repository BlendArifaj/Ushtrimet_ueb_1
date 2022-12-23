window.onload = () => {

    function btnOnClick(){
        alert("You clicked me!");
    }
    
    const btnMouseEnter = () => {
        alert("You entered the element!");
    }
    
    const btnMouseLeave = () => {
        alert("You left the element!");
    }
    
    const defaultSize = 100;
    
    const contentMouseEnter = (element) => {
        element.style.width = defaultSize * 2 + "px";
        element.style.height = defaultSize * 2 + "px";
    }
    
    const contentMouseLeave = (element) => {
        element.style.width = defaultSize + "px";
        element.style.height = defaultSize + "px";
    }
    
    const inputKeyDown = (element) => {
        const value = element.value;
        console.log("Input value on key down: ", value);
    }
    
    const inputKeyPress = (element) => {
        const value = element.value;
        console.log("Input value on key up: ", value);
    }
    
    const inputElement = document.getElementById('input_detyra')
    
    inputElement.addEventListener(
        'keydown', (event) =>{
            const key = event.key;
            if(key === 'a' || key === '3'){
                event.preventDefault();
                return;
            }
        }
    )    
}






