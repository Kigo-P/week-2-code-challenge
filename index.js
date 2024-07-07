// Assigning the created elements in html to a variable
const array = [];
const input = document.getElementById('input');
const button = document.getElementById('button');
const tbody = document.getElementById('tbody')
const clearItems = document.getElementById('clearItems');

// create a function to add items
function addItemsToList (){
    const td1 = document.createElement('td');//creating elements
    const tr = document.createElement('tr');
    const text = input.value//value of the input
    // creating an if else statement to prompt the user not to input blank spaces
    if (input.value === ''){
        return alert('Kindly input a text or a number ')
    }else{
    td1.textContent= text;
    tbody.append(tr)//appending elements
    tr.append(td1);
    input.value = '';//clear the input area after the input has been added
    }
//creating a function inside the add items to mark the purchased items
    const purchased = function (){
        const button2 = document.createElement('button');//creating a mark purchased butotn
        button2.textContent = 'purchasedItem';
        const td2 = document.createElement('td');
        tbody.append(tr)//appending elements
        tr.append(td2);
        td2.append(button2)
        
        //creating a function with an if else statement to change the background colour of purchased items
        const changeColor = function (){
            if (button){
                td1.style.background = "blue"
            }
        }
        button2.addEventListener('click',changeColor)
    }
    purchased();//to make the button visible
    
    //to push the items to th array 
    array.push(text);
    console.log(array)

    //creating a function inside the add items to clear the content of a line 
    const clearContent  = function(){
        const button3 = document.createElement('button');
        button3.textContent = 'clear';
        const td3 = document.createElement('td');
        tbody.append(tr);
        tr.append(td3);
        td3.append(button3);

        //creating a function with an if else statement to remove the content of a specific line
        const clearLinesContent = function (){
            if (button){
                tr.remove()
            }
        }
        button3.addEventListener('click',clearLinesContent)
    }
    clearContent();
}
//adding an event listener
button.addEventListener('click',addItemsToList);

// creating a function  to reset the page
const reset = function(){
    location.reload()
}
clearItems.addEventListener('click',reset)


