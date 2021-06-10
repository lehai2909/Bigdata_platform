let buttons = document.querySelectorAll('button');

console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onmouseover = function(){
    console.log(buttons[i].id);
    let picLocation = document.getElementById('picLocation-'+buttons[i].id);
    let img = document.createElement('img');
    img.src = `/images/${buttons[i].id}.jpg`;
    img.id = 'image' + buttons[i].id;
    picLocation.appendChild(img);
    }
    buttons[i].onmouseleave = function(){
        img = document.getElementById('image' + buttons[i].id);
        img.remove();
        }
  };