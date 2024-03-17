'use strict';


// All document 🔓

const welcomeText = document.querySelector('.header__LogIn');
const contenerMovement = document.querySelector('.box__overflow');
const allMoney = document.querySelector('.all--money');
const centerLabel1 = document.querySelector('.center--label--money1');
const centerLabel2 = document.querySelector('.center--label--money2');
const footerMoney = document.querySelector('.footer--money');
const btnDown = document.querySelector('.btn--dowan');
const incomesInner = document.querySelector('.money--in');
const outcomesInner = document.querySelector('.money--out');
const sinIn = document.querySelector('.btn--rightArrow');
const inputUser = document.querySelector('.header__form--user');
const inputPIN = document.querySelector('.header__form--PIN');
const changOpacity = document.querySelector('.hidning');
const btnYellow = document.querySelector(`.btn--in--Yellow`);
const inputNumberTransfer = document.querySelector(`.input--yellow--first`);
const inputMoneyTransfer = document.querySelector(`.input--yellow--last`);
const btnRed = document.querySelector('.btn--in--red');
const inputDelUser = document.querySelector(`.input--box--red--user`);
const inputDelPin = document.querySelector(`.input--box--red--pin`);
const btnLoan = document.querySelector(`.btn--in--green`);
const inputLoan = document.querySelector(`.input--box--green`);
const btnDowan = document.querySelector(`.btn--dowan`);
const date = document.querySelector(`.data--mon--years`);
const timers = document.querySelector(`.timer`);
// All document 🔒

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Bankist app

// Data all Account 🔓
const account1 = {
    owner: 'khaild alhadi',
    movements: [3100, 40, -300, 200, 620, -132, -833, 432],
    pin: 1111,
    // userName: ka;
    letmovementsDates: [
        '2022-10-21T07:47:17.181Z',
        '2022-11-27T07:47:17.181Z',
        '2023-11-29T07:47:17.181Z',
        '2023-12-15T07:47:17.181Z',
        '2023-12-18T07:47:17.181Z',
        '2024-01-30T07:47:17.181Z',
        '2024-01-31T07:47:17.181Z',
        '2024-02-01T01:47:17.181Z',
      ],
      currency: 'dolar',
      locale: 'Om-BR', // de-DE location for date 
};

const account2 = {
    owner: 'mohammed alhadi',
    movements: [400, 700, 602, 2300, 530, 742, -160, 532],
    letmovementsDates: [
        '2022-03-21T07:47:17.181Z',
        '2022-02-27T07:47:17.181Z',
        '2023-08-29T07:47:17.181Z',
        '2023-11-15T07:47:17.181Z',
        '2023-11-18T07:47:17.181Z',
        '2023-11-24T07:47:17.181Z',
        '2024-01-10T07:47:17.181Z',
        '2024-01-14T07:47:17.181Z',
      ],
    pin: 2222,
};

const account3 = {
    owner: 'haowa alhadi',
    movements: [900, 200 , -552, 24050, 620, -6632, 440 -333],
    letmovementsDates: [
        '2022-10-21T07:47:17.181Z',
        '2022-11-27T07:47:17.181Z',
        '2023-11-29T07:47:17.181Z',
        '2023-12-15T07:47:17.181Z',
        '2023-12-18T07:47:17.181Z',
        '2023-12-24T07:47:17.181Z',
        '2024-01-10T07:47:17.181Z',
        '2024-01-14T07:47:17.181Z',
      ],
    pin: 3333,
};

// Data all Account 🔒

// init 🔓
const allAccount = [account1, account2, account3];
// init 🔒

// let asktime = ;

let two = '2024-02-01T07:47:17.181Z';

// display array in interface 🔓
const displayMoney = function(display, sort = false) {
    contenerMovement.textContent = '';


    let mov = display.movements;
    let movs = sort ? mov.slice().sort(( a , b ) => a - b): mov;
    
    movs.forEach(function(movement,i) {
        
        // calc date 
        const data = new Date(display.letmovementsDates[i]);
        const year = data.getFullYear();
        const month = `${data.getMonth() + 1}`.padStart(2, 0);
        const day = `${data.getDate()}`.padStart(2, 0);
        const allDate = `${year}/${month}/${day}`;
        const today = new Date();
        // fun
        const days = (today, anyDay) => Math.round((today - anyDay) / (1000 * 60 * 60 * 24 ));
        let countDay = days(today, data);
        
        let displayDate = function () {
            if (countDay == 0) return `اليوم`;
            if (countDay == 1) return 'امس'
            if (countDay <= 7) return `قبل ${countDay} يوم `;
            return allDate;
        }   

        // calc total money and stor
        display.allMoney = movs.reduce((x, y) => x + y);
        allMoney.innerHTML = `${display.allMoney} ﷼`;
        
        let askColor =  movement > 0 ? 'green': 'red';
        let asktext =  movement > 0 ? 'إيداع': 'السحب';
        

        let html = `
        <div class="movements__row">
        <div class="movements__row--${askColor}">${i+1} ${asktext}</div>
        <div class="deposit__data--box">${displayDate()}</div>
        <div class="withdrawal__money">${movement.toFixed(2)}﷼</div>
        </div>    
        `;
        contenerMovement.insertAdjacentHTML('afterend', html);
    });
}

// display array in interface 🔒

// set data 🔓
// عربي ⬇
let dates = new Date();
let months = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
  "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
];
let days = ["اﻷحد", "اﻷثنين", "الثلاثاء", "اﻷربعاء", "الخميس", "الجمعة", "السبت"];
date.innerHTML = dates.toLocaleTimeString()+"  ⌚  "+days[dates.getDay()] + ', ' + dates.getDate() + ' ' + months[dates.getMonth()] + ', ' + dates.getFullYear();

// if you want to add configuration object ⬇
// const options = {
//     hour: 'numeric',
//     minute: 'numeric',
//     day: 'numeric',
//     month: 'long',
//     // month: '2-digit', 01
//     year: 'numeric',
//     weekday: 'long',
// }
// const noW = new Date(); // ⬇ name space for the internationalization API
// date.textContent = new Intl.DateTimeFormat('ar-OM', options).format(noW);


// use iso language code table to now about this⬇
//                           i can add locale⬆ here
//it will displayed to whatever language you have in your b
// define the locale manually ⬇ form browser
// const locale = navigator.language;
// console.log(locale);


// let today = new Date();
// date.innerHTML = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now()); 
// بل هجري ⬆



// date in english // ❌❌

const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth()}`.padStart(2,0);
const years = now.getFullYear();
const hours = now.getHours();
const min = now.getMinutes();
// console.log(`${day}/${month}/${years} ${hours}:${min}`);

// let today = new Date();
// date.innerHTML = `${today.toDateString()} ${today.toLocaleTimeString()}`
// console.log();
// {/* <span class="data--mon--years">19/1/2024</span> */}

// set data 🔒


// calcDisplaySummary 🔓
const calcDisplaySummary = function (mov) {

    // calc incomes
    const incomes = mov.filter((mov)=> mov > 0)
    .reduce((acc, mov) => acc + mov);
    incomesInner.innerHTML = `IN <span>${incomes.toFixed(1)} ﷼</span>`;
    
    // calc outcomes
    const outcomes = mov?.filter((mov)=> mov < 0).reduce((acc, mov) => acc + mov);
    outcomesInner.innerHTML = `Out <span>${Math.abs(outcomes).toFixed(1)} ﷼</span>`;
}
// calcDisplaySummary 🔒

// set password for all Account 🔓
const createUserName = function (allAcc) {
    allAcc.forEach(function (data) {
        data.userName = data.owner.toLowerCase().split(' ').map((name) => name[0]).join('');
    });
};
createUserName(allAccount);
// set password for all Account 🔒

// transfer money 🔓
const moneyTransfer = function (allAcc, userFond) {
    btnYellow.addEventListener('click', function(e) {
    e.preventDefault();
    
    const transferTo = Number(inputNumberTransfer.value);
    const amount = Number(inputMoneyTransfer.value);

    const userReceiving = allAcc.find((acc) => acc.pin === transferTo);
    // let allMoneyIn = Number(allMoney.textContent);
    console.log(userFond.allMoney);
    if (amount > 0 && userFond.allMoney >= amount && transferTo !== userFond.pin) {

        // doing the transfer
        userReceiving.movements.push(amount);
        userFond.movements.push(-amount);

        let newDay = new Date().toISOString();
        userFond.letmovementsDates.push(newDay);
        userReceiving.letmovementsDates.push(newDay);
        console.log(userFond.letmovementsDates)
        inputMoneyTransfer.value = inputNumberTransfer.value = '';
        updateUI(userFond);
        
        // reset timer 
        clearInterval(timerFun)
        timerFun = startLogOutTimer();
    } 
})};
// transfer money 🔒


// UpDateUI 🔓
const updateUI = function (acc) {
    // Display movements
    displayMoney(acc);
    
    // display summary footer money
    calcDisplaySummary(acc.movements);
    
    // money transfer
    moneyTransfer(allAccount, acc);    
}
// UpDateUI 🔒

//delect account 🔓
const delectAccount = function (allAccount, userFond) {
    btnRed.addEventListener('click', function (e) {
        e.preventDefault();
        let user = inputDelUser.value;
        let pin = Number(inputDelPin.value);

        let userToRemove = allAccount.find((acc) => acc.userName === user);

        inputDelUser.value = inputDelPin.value = '';
        
        if (userFond.pin === pin && userFond.userName === user) {
            let indexOfAccount = allAccount.findIndex((accIndex) => accIndex.userName === userToRemove.userName);
            allAccount.splice(indexOfAccount,indexOfAccount+1);
            console.log(allAccount);
            alert(`your account has been deleted successfully`);
            changOpacity.style.opacity = 0;

        } else alert(`wrong user or pin`);
    });
};
//delect account 🔒

// timer
const startLogOutTimer = function() {
    const tick = function() {
        
        const min = `${Math.trunc(time / 60)}`.padStart(2,0);
        const sec = `${(time % 60)}`.padStart(2,0);
        
        // In each call, print the remaining time to UI
        timers.textContent = `${min}:${sec}`;
        if (time === 0) {
            changOpacity.style.opacity = 0;
            welcomeText.innerHTML = `سجل دخول قبل`;
        }
        time--;
    }
    // Set time to 5 minutes 
    let time = 300; // 100s
    
    // Call the timer ever second
    tick();
    let timer = setInterval(tick, 1000);
    return timer
}


let timerFun;
// take loan 🔓 
const takeLoan = function (allAcc, userFond) {
    btnLoan.addEventListener('click', function(e) {
        e.preventDefault();

        if (inputLoan.value > 0 ) {
                const loan = Number(inputLoan.value);
                console.log(inputLoan.value);
                console.log(loan);
                userFond.movements.push(loan);
                
                // const amount = Number(inputMoneyTransfer.value);

                let newDay = new Date().toISOString();
                userFond.letmovementsDates.push(newDay);
        
                updateUI(userFond);

                // reset 
                clearInterval(timerFun)
                timerFun = startLogOutTimer();
        } else alert('you can`t do this ❌')
        inputLoan.value = '';
        console.log('e')
    });
    
};

// sort mov
const sorting = function(userFond) {
    let ask = false;
    btnDowan.addEventListener('click', function(e) {
        e.preventDefault();
        displayMoney(userFond, !ask);
        ask = !ask;
    });
}


// start 🔻🔒
let userFond;

sinIn.addEventListener('click', function(e) {
    e.preventDefault();
    // prevent form from sumbiting 

    userFond = allAccount.find((acc)=> acc.userName === inputUser.value);
    if (userFond?.pin === Number(inputPIN.value)){
        
        // Display UI and welcome massage
        changOpacity.style.opacity = 1;
        welcomeText.innerHTML = `${userFond.owner.split(' ')[0]} مرحبا `;

        inputUser.value = inputPIN.value = '';

        // Display movements
        displayMoney(userFond);

        // display summary footer money
        calcDisplaySummary(userFond.movements);

        // money transfer
        moneyTransfer(allAccount, userFond);        

        // delect user
        delectAccount(allAccount, userFond);

        // take loan
        takeLoan(allAccount, userFond);

        //sort 
        sorting(userFond);

        // timer
        if (timerFun) clearInterval(timerFun);
        timerFun = startLogOutTimer();

    }else alert(`user or pin is wrong`);
})
// start 🔻🔒

// 🔻🔻🔻🔻🔻🔻🔻🔻 work to do 🔻🔻🔻🔻🔻🔻🔻🔻

const dogs = [
    {weight: 22, cuFood: 250, owners: ['Alice', 'Bob']},
    {weight: 8, cuFood: 200, owners: ['Matilda']},
    {weight: 13, cuFood: 275, owners: ['Sarah', 'John']},
    {weight: 32, cuFood: 340, owners: ['Michael']}
];




// const output = account1.letmovementsDates[0]; 
// console.log(output);

// let today = new Date().getDate();
// console.log(today);



// const today = new Date(2024, 1, 31, 3, 21, 10);
// console.log(today);

// const yestrday = new Date(2024, 2, 1, 3, 21, 10);
// console.log(yestrday);

// const calcDays = (today, yestrday) => ( today - yestrday ) / (1000 * 60 * 60 * 24);
// console.log(calcDays(today, yestrday))





















