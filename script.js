window.onload = () => {
        document.querySelector('.card').classList.add(generateRandompalo()); 
        document.querySelector('.card').innerHTML = generateRandomNumber()
    };               
   
   let generateRandomNumber = () => {
    let n = ["A", "2", "3", "4" ,"5","6","7","8","9","10","J","Q","K"] 
    let indexNumber = [Math.floor(Math.random()*n.length)];
    return n[indexNumber];
    
    };
    
    let generateRandompalo = () => {
    let palo = [ 'spade','heart','club','diamond']
    let indexPalo = [Math.floor(Math.random()*palo.length)];
        return palo[indexPalo];
    };
    

    