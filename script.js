const jedi = []
jedi[0] = `Luke`
// console.log(jedi); // [ 'Luke' ]
const arrayNum1 = jedi.push(`Obi-Wan Kenobi`)
// console.log(jedi); // [ 'Luke', 'Obi-Wan Kenobi' ]
const arrayNum2 = jedi.unshift(`Yoda`)
// console.log(jedi); // [ 'Yoda', 'Luke', 'Obi-Wan Kenobi' ]
console.log(jedi[1]); // Luke
const response = jedi.pop()
// console.log(jedi);
const removeYoda = jedi.shift()
const sithLords = [`Darth Vader`, `Darth Sidious`, `Darth Maul`]
const imperialOfficers = [`Grand Moff Tarkin`, `Orson Krennic`]
const starWarsVillians = sithLords.concat(imperialOfficers)
console.log(starWarsVillians);
const slicedVillians = starWarsVillians.slice(2, 4)
console.log(slicedVillians);
const droids = {
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
}
console.log(droids[`astromech`]);
console.log(droids.protocol);
droids.assassin = `IG-11`
console.log(droids.assassin);