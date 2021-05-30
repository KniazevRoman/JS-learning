let form = document.forms.calculator;

let moneyBefore = document.getElementById('money-before');
moneyBefore.innerHTML = form.elements.money.value;

let moneyAfter = document.getElementById('money-after');
moneyAfter.innerHTML = calculateResultMoney();

let heightAfter = document.getElementById('height-after');
heightAfter.style.height = calculateResultHeight();

form.elements.money.addEventListener('input', function(){
    moneyBefore.innerHTML = this.value;
    moneyAfter.innerHTML = calculateResultMoney();
    heightAfter.style.height = calculateResultHeight();
});

form.elements.months.addEventListener('change', function() {
    moneyAfter.innerHTML = calculateResultMoney();
    heightAfter.style.height = calculateResultHeight();
});

form.elements.interest.addEventListener('change', function() {
    moneyAfter.innerHTML = calculateResultMoney();
    heightAfter.style.height = calculateResultHeight();
});

function calculateResultMoney() {
    return Math.round(+form.elements.money.value + form.elements.money.value * form.elements.months.value/12 * form.elements.interest.value/100);
}

function calculateResultHeight() {
    return `${100*moneyAfter.innerHTML/moneyBefore.innerHTML}px`;
}