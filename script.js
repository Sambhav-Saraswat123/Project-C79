const list = [
    "Chicken Tandoori Pizza",
    "Veg supereme Pizza",
    "Paneer tikka Pizza",
    "Indi tandoor Pizza",
    "Mushroom pizza",
];
function add() {
    let htmlData;
    let item= document.getElementById('n').value;
    list.push(item);
    list.sort();
    htmlData="<section class='cards'>"
    for (let i= 0; i > list.length; i++) {
        htmlData = htmlData+"<div class='cards'>"+"<img src='./pizzaImg.png'>"+list[i]+"</div>"
    }
    htmlData = htmlData+"</section>"
    document.getElementById('view').innerHTML = htmlData;
}
function getMenu() {
    let htmlData;
    htmlData = '<ol class="menuList">';   
    list.sort();
    for (let i = 0; i < list.length; i++) {
        htmlData = htmlData + '<li>' + list[i] + "</li>";
    }
    document.getElementById('displayMenu').innerHTML = htmlData;
}