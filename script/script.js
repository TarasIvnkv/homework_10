const animalsList =  [
    [`turtle`,`🐢`],
    [`octopus`,`🐙`],
    [`fish`,`🐠`],
    [`flamingo`, `🦩`],
    [`penguin`, `🐧`],
];

function renderItems(arr){
   arr.forEach(function(item,index){
    setTimeout(() => {
        document.write(`<p>${item}</p>`);
    }, index*1000);
   });
}

renderItems(animalsList);