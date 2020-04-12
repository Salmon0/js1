let money;
let addExpenses;
let deposit;
let expenses;
let amonth;
let mission=1500000;
deposit=confirm('Есть ли у вас депозит в банке?');
money=+prompt('Ваш месячный доход?', 42300);//Доход за месяц
addExpenses=prompt('Комуналка, такси, питание в столовке');
expenses=+prompt('Введите обязательную статью расходов');
amonth=+prompt('Во сколько это обойдется?');
expenses1=+prompt('Введите обязательную статью расходов');
amonth1=+prompt('Во сколько это обойдется?');
let bugetMonth=money-amonth-amonth1;
console.log(bugetMonth);
let month=mission/bugetMonth;
console.log(Math.ceil(month));
let bugetDay=bugetMonth/30;
console.log(Math.floor(bugetDay));
if(bugetDay > 120000){
    console.log('У вас высокий уровень дохода');
}
if(bugetDay < 120000 && bugetDay > 60000){
    console.log('У вас средний уровень дохода');
}

if(bugetDay < 60000){
    console.log('К сожалению у вас уровень дохода ниже среднего');
}
if(bugetDay < 0){
    console.log('Что то пошло не так');
}
