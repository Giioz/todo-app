let inp = document.getElementById('input')
let addBtn = document.getElementById('btn')
let resetBtn = document.getElementById('resetBtn')
let ul = document.getElementById('ul')
let values = localStorage.getItem('values') ? JSON.parse(localStorage.getItem('values')) : []


addBtn.addEventListener('click', function(){
    if(inp.value.trim() != ''){
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = `<input type="checkbox" onclick="checkbox(event)"><span>${inp.value}</span><button id="btn1" onClick="deleteLi(event)">X</button>`;

        values.push(`${inp.value}`)
        localStorage.setItem('values', JSON.stringify(values));
        inp.value = ""
    }
})

resetBtn.addEventListener('click', function (){
    localStorage.clear('values')
    location.reload()

})





function displayNotes(){

    values.forEach(item => {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = `<input type="checkbox" onclick="checkbox(event)"><span>${item}</span><button id="btn1" class="delBtn" onClick="deleteLi(event)">X</button>`;
    })
}


// in progress

// function activateDeleteListeners() {
//     let delBtn = document.querySelectorAll(".delBtn")
//     delBtn.forEach((db, i) => {
//         db.addEventListener('click', () => {deleteLi(i)})
//     })
// }

// function deleteLi(i){
//     values.splice(i+1, 1)
//     localStorage.setItem('values', JSON.stringify(values))
//     location.reload
//     console.log(values);
// }

function deleteLi(e) {
   e.target.parentNode.remove()
   
}


function checkbox(e){
    e.target.nextSibling.classList.toggle('line')
}





window.onload = function(){
    displayNotes()
}