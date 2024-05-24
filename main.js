const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("Qual o nome do herói? ", (name) => {
    readline.question("Qual o xp do herói? ", (xp) => {
      let lvl = "Ferro";
  
      let xpNum = parseInt(xp);
  
      if (xpNum < 1000) {
        console.log(`O Herói de nome ${name} está no nível de ${lvl}`);
      } else if (xpNum >= 1001 && xpNum <= 2000) {
        lvl = "Bronze";
        console.log(`O Herói de nome ${name} está no nível de ${lvl}`);
      } else if (xpNum >= 2001 && xpNum <= 5000) {
        lvl = "Prata";
        console.log(`O Herói de nome ${name} está no nível de ${lvl}`);
      } else if (xpNum >= 5001 && xpNum <= 7000) {
        lvl = "Ouro";
        console.log(`O Herói de nome ${name} está no nível de ${lvl}`);
      } else if (xpNum >= 7001 && xpNum <= 8000) {
        lvl = "Platina";
        console.log(`O Herói de nome ${name} está no nível de ${lvl}`);
      } else if (xpNum >= 8001 && xpNum <= 9000) {
        lvl = "Ascendente";
        console.log(`O Herói de nome ${name} está no nível de ${lvl}`);
      } else if (xpNum >= 9001 && xpNum <= 10000) {
        lvl = "Imortal";
        console.log(`O Herói de nome ${name} está no nível de ${lvl}`);
      } else if (xpNum >= 10001) {
        lvl = "Radiante";
        console.log(`O Herói de nome ${name} está no nível de ${lvl}`);
      }
  
      readline.close();
    });
  });