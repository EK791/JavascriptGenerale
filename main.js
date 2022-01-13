// let inputarray = [
//     { name: 'FD', categoria: 'CAT1' },
//     { name: 'DF', categoria: 'CAT2' },
//     { name: 'HJ', categoria: 'CAT3' },
//     { name: 'KL' },
//     { name: 'CV', categoria: 'CAT2' },
//     { name: 'KL', categoria: 'CAT1' }
// ];


// console.log(inputarray);
// function contaCat(pInputArray) {
//     let ret = 0;
//     for (const element of pInputArray) {
//        if (element.categoria == 'CAT1') {
//            ret += 1;
//        }
//        return ret;
//     }
//     for (i = 0; i < pInputArray.length; i++) {
//         console.log(pInputArray[i]);
//         if (pInputArray[i].categoria == "CAT1")
//             ret++
//     }
//     return ret;
// }


// let nuovoJ = { CAT1: 0, CAT2: 0, CAT3: 0 };
// function contaCat(pInputArray) {
//     for (const element of pInputArray) {
//         if (element.categoria == "CAT1") {
//             nuovoJ.CAT1++
//         }
//         else if (element.categoria == "CAT2") {
//             nuovoJ.CAT2++
//         }
//         else if (element.categoria == "CAT3") {
//             nuovoJ.CAT3++
//         }
//     }
//     return nuovoJ
// }
// contaCat(inputarray)
// console.log(nuovoJ)


// function contaCat(pInputArray) {
//     let ret = {}
//     for (let i = 0; i < pInputArray.categoria; i++) {
//         if (!pInputArray[i].categoria) {
//             ret[pInputArray[i].categoria] = 1
//         } else {
//             ret[pInputArray[i].categoria]++
//         }
//     }
//     return contaCat
// }
// console.log(contaCat(inputarray))


// let persona = {
//     name: 'pippo',
//     age: 11
// }
// if (persona.age <= 10) {
//     console.log('sei minorenne')
// }
// else if (persona.age > 10 && persona.age < 18) {
//     console.log('sei un adolescente')
// }
// else if (persona.age >= 18) {
//     console.log('sei un adulto')
// }


// let persona = {
//     name: 'pippo',
//     age: 11
// }
// if (persona.age <= 10) {
//     console.log('sei minorenne')
// }
// else if (persona.age < 18) {
//     console.log('sei un adolescente')
// }
// else {
//     console.log('sei un adulto')
// }


// function calcolo(pippo) {
//     if (pippo <= 10) {
//         console.log('sei minorenne')
//     }
//     else if (pippo > 10 && pippo < 18) {
//         console.log('sei un adolescente')
//     }
//     else if (pippo >= 18) {
//         console.log('sei un adulto')
//     }
// }
// calcolo(19)


// let i = 0
// while (i <= 10) {
//     console.log('Step')
//     console.log(i)
//     i++
// }


// let start = 10
// let end = 21
// let m=start
// while (m <= end) {
//     if (m % 2 == 0) {
//         console.log(m)
//     }
//     m++
// }


// let numeri = [2, 4, 6, 20, 60, 45]
// for (i=0; i<numeri.length;i++){
//     console.log(numeri[i]*numeri[i])
// }


// let voti = []
// let cont = 0
// for (let i = 0; i < recensori.length; i++) {
//     for (let m = 0; m < recensori[i].voti.length; m++) {
//         voti[cont] = recensori[i].voti[m]
//         cont++
//     }
// }
// console.log(voti)


// let risultato = []
// for (let recensore of recensori) {
//     for (let voto of recensore.voti){
//         risultato[risultato.length] = voto
//     }
// }
// console.log(risultato)


