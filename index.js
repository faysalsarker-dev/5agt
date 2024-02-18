const comon = document.getElementsByClassName('comon');
const list = document.getElementById('dainamicList');
const input = document.getElementById('inputbox');
const DiscountPrice = document.getElementById('DiscountPrice')



let count = 0;



// for add addEventListener
for (const btn of comon) {

    btn.addEventListener('click', setboking)
}

function setboking(event) {
    count++



    event.target.classList.remove('bg-[#F7F8F8]');
    event.target.classList.add('bg-[#1DD100]');
    event.target.classList.add('text-white');
    event.target.removeEventListener('click', setboking)
    abvailableset()
    setinnerText('totalSelect', count)


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




    if (count >= 4) {

        document.getElementById('applyBtn').removeAttribute('disabled')
        setinnerText('alerMsg', 'A parson can buy only 4 tickets')
        for (const btn of comon) {

            btn.removeEventListener('click', setboking)

        }

    }






    const inputNumber = document.getElementById('inputNumber').value;

    const inputtext = parseInt(inputNumber)

    if (count > 0 && inputtext >= 0) {
        const btn = document.getElementById('nextBtn');
        btn.removeAttribute('disabled')


    }

}







function setinnerText(id, value) {
    document.getElementById(id).innerText = value

}



function total(count) {
    const totalResult = 550 * count

    setinnerText('totalPrice', totalResult)
    setinnerText('Grandtotal', totalResult)
}





function abvailableset() {

    const totalset = document.getElementById('totalset').innerText;

    const total = parseInt(totalset)

    const result = total - 1

    setinnerText('totalset', result)


}


function grantTotal() {
    const pMsg = document.getElementById('invalidMsg')
    const invalidtext = pMsg.innerText
    const input = inputbox.value

    if (input === 'NEW15') {


        const totalMoney = document.getElementById('totalPrice').innerText

        const sum = totalMoney * 0.15

        const fainal = totalMoney - sum

        document.getElementById('DiscountArea').classList.remove('hidden')

        setinnerText('DiscountPrice', sum)



        setinnerText('Grandtotal', fainal)

        inputbox.value = ''
        pMsg.classList.remove('text-rose-500')
        pMsg.classList.add('text-green-500')
        setinnerText('invalidMsg', 'You get 15% off')
        document.getElementById('inputparent').classList.add('hidden')



    } else if (input === 'Couple20') {
        const totalMoney = document.getElementById('totalPrice').innerText

        const sum = totalMoney * 0.20

        const fainal = totalMoney - sum
        setinnerText('Grandtotal', fainal)
        inputbox.value = ''
        pMsg.classList.remove('text-rose-500')
        pMsg.classList.add('text-green-500')
        setinnerText('invalidMsg', 'You get 20% off')

        document.getElementById('DiscountArea').classList.remove('hidden')

        setinnerText('DiscountPrice', sum)
        document.getElementById('inputparent').classList.add('hidden')


    } else {
        document.getElementById('DiscountArea').classList.add('hidden')




        pMsg.classList.remove('text-green-500')
        pMsg.classList.add('text-rose-500')
        pMsg.innerText = 'invalid coupon'
        inputbox.value = ''


    }




}


function TicketSell() {
    const page = document.getElementById('TicketCounter');
    if (page) {
        page.scrollIntoView(
            { behavior: 'smooth' }
        );
    }
}

