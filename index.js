// 100 Nomor random index bernilai 1 sampai 50
console.log("nilai random =");
const nomorRandom = [];

for (let i = 0; i < 100; i++) {
  nomorRandom.push(Math.floor(Math.random() * 50));
}

console.log(nomorRandom);

// array genap index 50
console.log("Nilai genap = ");

const nilaiGenap = [];

for (let x in nilaiGenap) {
  if (x % 2 == 0) console.log(nilaiGenap[x]);
  nilaiGenap.push;
}

// for (let i = 0; i < 100; i++) {
//   if (nilaiGenap % 2 == 0) {
//     nilaiGenap.push(Math.floor(Math.random() * 50));
//   }
// }
// console.log(nilaiGenap);
