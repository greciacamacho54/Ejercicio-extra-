const btns = document.querySelectorAll('.btn');
const screen = document.getElementById('screen');
//const limpiar = document.getElementsByClassName('.limpiar');



btns.forEach((btn)=>{
    
    btn.addEventListener('click',cambiarColor);

    

    
    
});



function cambiarColor(e){

        const screen = e.currentTarget.innerText;

                screen.innerText = '';
                screen.classList.remove(red);
                screen.classList.remove(green);
                screen.classList.remove(blue);

        switch(screen){
            
            case 'Rojo':
                screen.classList.add('red');
                screen.innerText = 'Rojo';
                
            break;

            case 'Verde':
                screen.classList.add('green');
                screen.innerText = 'Verde';
                
            break;

            case 'Azul':
                screen.classList.add('blue');
                screen.innerText = 'Azul';
                
            break;

            default:

                screen.innerText = '';
                
                break;
        }

}
















//function cambioTexto(e){
   // const texto = e.targuet.inertext;
    
//}

        

    

   


    

