// Selectors

const inputBtn = document.querySelector('.input-btn');
const itemWrapElement = document.querySelector('.item-wrap');
const input = document.querySelector('.input');
const checkListbtn = document.querySelector('.fa-check-square-o');
const checkList = document.querySelector('.checked-list-position');

// from chat gpt test



// EventListener

inputBtn.addEventListener("click", addItem);
checkListbtn.addEventListener("click", addInList);
// Functions

function addItem (a) {
    const value = input.value;
    
//conditons for check if the input is empty doesn't excute the code
    if (value === "") {
        alert("Please enter a value");
    }
    else
    {
//Creat li
    const itemWrapElement = document.querySelector('.item-wrap');
    const creatLi = document.createElement('li');
    creatLi.classList.add('item');
    itemWrapElement.appendChild(creatLi);
//creat child
    const creatChild = document.createElement('div');
    const textChild = document.createTextNode(value);
    creatChild.classList.add('item-child');
    creatChild.appendChild(textChild);
    creatLi.appendChild(creatChild);
    input.value = ''; // for remove value ofter click btn from input
// creat Check btn 
    const creatBtn = document.createElement('button');
    const btnCheck = document.createElement('i');
    creatBtn.classList.add('btn-check');
    btnCheck.classList.add('fa','fa-check');
    creatBtn.appendChild(btnCheck);
    creatLi.appendChild(creatBtn);
// creat Trash btn
    const creatBtn2 = document.createElement('button');
    const btnTrash = document.createElement('i');
    creatBtn2.classList.add('btn-delete');
    btnTrash.classList.add('fa','fa-trash');
    creatBtn2.appendChild(btnTrash);
    creatLi.appendChild(creatBtn2);

    // remove trash btn

    creatBtn2.addEventListener('click',async function () {
        creatLi.classList.add('remove-style');
        await new Promise((resolve) => {
            setTimeout(resolve, 660)
        })
        creatLi.remove();
    })

    // style check btn

    creatBtn.addEventListener("click", function () {

        if (creatChild.classList.contains("item-child") && creatLi.classList.contains("item")) {
            creatChild.classList.add('cheked');
            creatLi.classList.add('cheked-background');

        } else {
            
            creatChild.classList.remove('cheked');
            creatLi.classList.remove('cheked-background');
        }
    })

    }
}