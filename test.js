const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.question('Yariçap giriniz: ',function getAlan(yaricap){
    const alan=Math.PI*yaricap**2;
console.log(`Yarıçapı ${yaricap} olan dairenin alanı:${alan} dir.`)

})

// const alan=Math.PI*yaricap**2;
// console.log(`Yarıçapı ${yaricap} olan dairenin alanı:${alan} dir.`)