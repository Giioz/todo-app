// ყველა ის საჭირო ელემენტი დოკუმენტიდან რომელიც საჭიროა
let inp = document.getElementById('input')
let addBtn = document.getElementById('btn')
let resetBtn = document.getElementById('resetBtn')
let ul = document.getElementById('ul')
let values = localStorage.getItem('values') ? JSON.parse(localStorage.getItem('values')) : []



// ნოუთის დამატების ფუნქციონალი.
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

// ნოუთების ლოკალ სთორიჯიდან მთლიანად გაწმენდის ფუნქციონალი.

resetBtn.addEventListener('click', function (){
    if(values.length != 0){
        localStorage.clear('values')
        location.reload()
    }
})

// აღწერილი ფუნქცია რომელიც ლოკალ სტორიჯიდან ყველა ნოუთს წერს დოკუმენტში.
function displayNotes(){
    values.forEach(item => {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = `<input type="checkbox" onclick="checkbox(event)"><span>${item}</span><button class="delBtn" onClick="deleteLi(event)">X</button>`;
    })
}


// კონკრეტული ნოუთის წაშლის ფუნქციონალი.
function deleteLi(e) {
    values.splice(values.indexOf(e.target.previousSibling.innerText),1)
    localStorage.setItem('values', JSON.stringify(values));
    location.reload()
    console.log(values);
}

// ჩეკბოქსის ფუნქციონალი რომელიც მონიშვნის შემთხვევაში კლასს ადებს '.line' რომელიც ხაზავს.
function checkbox(e){
    e.target.nextSibling.classList.toggle('line')
}

// საიტის ჩატვირთვის დროს იძახებს - displayNotes ფუნქციას რომელიც აღწერილია 30 ხაზზე.
window.onload = function(){
    displayNotes()
}