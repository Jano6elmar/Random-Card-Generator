

    
    
   window.onload = () => {
        document.querySelector('.card').classList.add(generateRandompalo()); 
        document.querySelector('.card').innerHTML = generateRandomNumber()
    };               /*puede ir el nombre de la class number ahi donde dice .card para generateRandom???*/
   
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
    

    /*window.onload = () => {
    let card = [ "A", 2,3,4,5,6,7,8,9,10,"J","Q","K"]
    let palo = [ 'spade','heart','club','diamond']
    
    let number = document.querySelector('.number');

    number.innerHTML = card[Math.floor(Math.random()*card.length)];
    number.classList.add(palo[Math.floor(Math.random()*palo.length)]);
    }   */