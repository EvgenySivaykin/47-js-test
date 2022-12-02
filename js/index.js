// 1. Palyginti du skaičius a ir b.Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
console.clear();

a = 5;
b = 7;

if (a > b) {
    console.log('1 uzd: a daugiau uz b');
} else if (a < b) {
    console.log('1 uzd: b daugiau uz a');
} else {
    console.log('1 uzd: a ir b yra lygus');
}


// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10.(5 taškai)

let m = '';
for (let i = 1; i <= 10; i += 1) {
    m += `${i}.`;
}
let c = m.split('.');
let t = c.slice(0, c.length - 1)
let ats = t.map(Number);

console.log('2 uzd: ', ats);

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.(5 taškai)

let d = '';
for (let i = 0; i <= 10; i += 1) {
    if (i % 2 === 0) {
        d += `${i}.`;
    } else {
        continue
    }
}
let r = d.split('.');
let u = r.slice(0, r.length - 1);
let ats3 = u.map(Number);

console.log('3 uzd: ', ats3);


// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const ats4 = [...Array(5)].map(() => getRandomInt(1, 10))

console.log('4 uzd: ', ats4);


// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.(7 taškai)

console.log('5 uzd:');

while (true) {
    k = getRandomInt(1, 10);
    console.log(k);
    if (k === 5) {
        break;
    }
}



// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

const massivas6 = [...Array(getRandomInt(20, 30))].map(() => getRandomInt(10, 30))

console.log('massivas6 :', massivas6);

let maksSk = 0;

for (let number of massivas6) {
    if (number > maksSk) {
        maksSk = number;
    }
}

console.log('Maks. reiksme:', maksSk);



// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)


const ats7 = [...Array(100)].map(() => getRandomInt(1, 4));

console.log(ats7);

for (let i = 0; i < ats7.length; ++i) {
    if (ats7[i] === 1) {
        ats7[i] = 'A';
    } else if (ats7[i] === 2) {
        ats7[i] = 'B';
    } else if (ats7[i] === 3) {
        ats7[i] = 'C';
    } else if (ats7[i] === 4) {
        ats7[i] = 'D';
    }
}
console.log(ats7)

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;


for (let i = 0; i < ats7.length; ++i) {
    if (ats7[i] === 'A')
        countA++;
    if (ats7[i] === 'B')
        countB++;
    if (ats7[i] === 'C')
        countC++;
    if (ats7[i] === 'D')
        countD++;
}

console.log('"A" yra:', countA, '"B" yra:', countB, '"C" yra:', countC, '"D" yra:', countD);




// 8. Parašyti funkciją - lygineSuma.Funkcijos parametrai - du kintamieji.Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą.Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)


// 9. Parašyti funkciją pirminisSkaicius.Funkcija turi vieną kintamąjį.Turi būti patikrinimas, kad kintamasis yra skaičius.Funkcija turi grąžinti ar pateiktas skaičius yra pirminis(pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)(10 taškų)


function kiekDalikliu(n) {
    let divisors = -2;
    mod = n;
    while (mod > 0) {
        if (n % mod === 0) {
            divisors++;
        }
        mod--;
    }
    return divisors;
}

function pirminisSkaicius(item) {
    if (typeof item !== 'number') {
        console.log('pateiktas NERA skaičius');
    } else {
        const rez = kiekDalikliu(item)
        if (rez === 0) {
            console.log('pateiktas skaičius yra pirminis');
        } else {
            console.log('pateiktas skaičius nera pirminis');
        }
    }
}

let ats91 = pirminisSkaicius('B');
let ats92 = pirminisSkaicius(true);
let ats93 = pirminisSkaicius(25);
let ats94 = pirminisSkaicius(3);


// 10. Parašyti funkciją telefonoNumeris.Funkcija turi priimti vieną kintamąjį - masyvą.Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
//     "(XXX) XXX-XXXX". (10 taškų)

function telefonoNumeris(arr) {
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;

}
const mt = telefonoNumeris([6, 7, 8, 1, 5, 2, 6, 5, 8, 8]);

console.log('Mano netikras telefono numeris: ', mt);
