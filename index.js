const comon = document.getElementsByClassName('comon');
const list = document.getElementById('dainamicList');

let count = 0;



// for add addEventListener
for(const btn of comon){

    btn.addEventListener('click',setboking )
}

function setboking(event){
    count++
    event.target.classList.remove('bg-[#F7F8F8]');
    event.target.classList.add('bg-[#1DD100]');
    event.target.classList.add('text-white');
    event.target.removeEventListener('click',setboking)
    abvailableset()
    setinnerText('totalSelect',count)


    total(count)


    const div = document.createElement('div');
    const h1 = document.createElement('h3');
    const h2 = document.createElement('h3');
    const h3 = document.createElement('h3');
    
    const txt1 = document.createTextNode(event.target.innerText);
    const txt2 = document.createTextNode('Economy');
    const txt3 = document.createTextNode('550');
    
    h1.appendChild(txt1);
    h2.appendChild(txt2);
    h3.appendChild(txt3);
    
    div.classList.add('dynamic'); 
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    
    list.appendChild(div);


    

    if(count>=4){
        document.getElementById('applyBtn').removeAttribute('disabled')
        for(const btn of comon){

            btn.removeEventListener('click',setboking)

        }
    }



}







function setinnerText(id,value){
    document.getElementById(id).innerText = value
    
}

function total(count){
    const totalResult = 550 * count

    setinnerText('totalPrice', totalResult)
}





function abvailableset(){

    const totalset = document.getElementById('totalset').innerText;
   
    const total = parseInt(totalset)

     const result = total - 1 

    setinnerText('totalset',result)
   

}