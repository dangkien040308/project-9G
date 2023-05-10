var api = 'https://data-production-f552.up.railway.app/clients';

function Start () {
    getCard(renderCard);
    handleCard();
    creatAnimation();
}
Start();


function renderCard(cards) {
    var cardParentBlock = document.getElementById('cardparent');
    var html = cards.map(function(card) {
        return `<div class="card1 card1--${card.sex}">
        <div class="card1_img">
            <img src="${card.img}" alt="">
        </div>
        
        <div class="card1-main">
            <div class="card1-top">
          <div class="card1_name text-center">${card.name}</div>
         <div class="card1_content text-center p-2">${card.des}</div>
        </div>

        <div class="card1-bottom"> 
            <div class="btn1 p-2"><a href="${card.facebook}" class="text-decoration-none text-white" target="_blank">Facebook > </a> </div>
           <div class="card1-date p-2">${card.birth}</div>
        </div>
        </div>

    </div>  `;
    })
    cardParentBlock.innerHTML = html.join('');
}

function getCard(callback) {
    fetch(api) 
     .then(function(respone) {
        return respone.json();
     })
     .then(callback)
}

function createCard(data,callback) {
    var options = {
        method : 'POST' ,
        body : JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    }
    fetch(api , options)
     .then(function(response) {
        return response.json();
     })
     .then(callback)
}
function handleCard() {
     var creatbtn = document.querySelector('#create');
     creatbtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value ;
        var des = document.querySelector('input[name="des"]').value ;
        var img = document.querySelector('input[name="img"]').value ;
        var birth = document.querySelector('input[name="birth"]').value ;
        var sex = document.querySelector('input[name="sex"]').value ;
        var facebook = document.querySelector('input[name="facebook"]').value ;

        var data = {
            img : img ,
            name : name ,
            birth : birth ,
            facebook : facebook ,
            sex : sex ,
            des : des
        }
        createCard(data,getCard);
    }
}

function creatAnimation () { 
var eles = document.querySelectorAll('.card1') ;
console.log(eles);
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry.target)
          entry.target.classList.add('show');
      }
    })
});

eles.forEach(card => {
    observer.observe(card);
})
}