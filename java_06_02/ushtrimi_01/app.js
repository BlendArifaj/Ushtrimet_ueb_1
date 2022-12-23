window.onload = () => {
    const btnClickMeEvent = () => {
        alert("You clicked me!");
    }
    
    function btnMouseEnterEvent(){
        alert("You entered the button!");
    }
    
    function btnMouseLeaveEvent(){
        alert("You left the button!");
    }
    
    const contentMouseEnterEvent = (element) => {
        const initSize = 100; // element.style.width - remove 'px'
        element.style.width = initSize * 5 + "px";
        element.style.height = initSize * 5 + "px";
    }
    
    const contentMouseLeaveEvent = (element) => {
        const initSize = 500; // element.style.width - remove 'px'
        element.style.width = initSize / 5 + "px";
        element.style.height = initSize / 5 + "px";
    }
    
    const textKeyDownEvent = (element) => {
        const value = element.value;
        console.log("Vlera e input-it ne eventin keydown: ", value);
    }
    
    const textKeyUpEvent = (element) => {
        const value = element.value;
        console.log("Vlera e input-it ne eventin keyup: ", value);
    }
    
    // Detyra 01:
    const inputDetyra = document.getElementById('input_detyra')
    inputDetyra.addEventListener('keydown', (event)=> {
        const keyPressed = event.key;
        if(keyPressed === 'a' || keyPressed === '3'){
            event.preventDefault();
            return;
        }
    })
}