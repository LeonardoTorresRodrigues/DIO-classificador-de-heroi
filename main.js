const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("Qual o nome do herói? ", (name) => {
    readline.question("Qual o xp do herói? ", (lvl) => {
      let xp = "Ferro";
  
      let lvlNum = parseInt(lvl);
  
      if (lvlNum < 1000) {
        console.log(`O Herói de nome ${name} está no nível de ${xp}`);
      } else if (lvlNum >= 1001 && lvlNum <= 2000) {
        xp = "Bronze";
        console.log(`O Herói de nome ${name} está no nível de ${xp}`);
      } else if (lvlNum >= 2001 && lvlNum <= 5000) {
        xp = "Prata";
        console.log(`O Herói de nome ${name} está no nível de ${xp}`);
      } else if (lvlNum >= 5001 && lvlNum <= 7000) {
        xp = "Ouro";
        console.log(`O Herói de nome ${name} está no nível de ${xp}`);
      } else if (lvlNum >= 7001 && lvlNum <= 8000) {
        xp = "Platina";
        console.log(`O Herói de nome ${name} está no nível de ${xp}`);
      } else if (lvlNum >= 8001 && lvlNum <= 9000) {
        xp = "Ascendente";
        console.log(`O Herói de nome ${name} está no nível de ${xp}`);
      } else if (lvlNum >= 9001 && lvlNum <= 10000) {
        xp = "Imortal";
        console.log(`O Herói de nome ${name} está no nível de ${xp}`);
      } else if (lvlNum >= 10001) {
        xp = "Radiante";
        console.log(`O Herói de nome ${name} está no nível de ${xp}`);
      }
  
      readline.close();
    });
  });