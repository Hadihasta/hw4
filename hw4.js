let nomorRandom = [];
let nilaiGenap = [];
let nilaiGanjil = [];
let minGanjil;
let maxGanjil;
let minGenap;
let maxGenap;
let totalGanjil = 0;
let totalGenap = 0;
let avgGanjil = 0;
let avgGenap = 0;

// Nomor random
console.log("Nomor Random = ");
for (let i = 0; i < 100; i++) {
  nomorRandom.push(Math.floor(Math.random() * 50));
}

console.log(nomorRandom);

// nomor genap dan ganjil

for (let index = 0; index < 100; index++) {
  if (nomorRandom[index] % 2 == 0) {
    nilaiGenap.push(nomorRandom[index]);
  } else {
    nilaiGanjil.push(nomorRandom[index]);
  }
}
console.log("nilai Genap = ");
console.log(nilaiGenap);
console.log("nilai Ganjil = ");
console.log(nilaiGanjil);

console.log("==============================================>");

for (let index = 0; index < 50; index++) {
  minGanjil = nilaiGanjil[0];
  maxGanjil = nilaiGanjil[0];
  minGenap = nilaiGenap[0];
  maxGenap = nilaiGenap[0];

  if (minGanjil > nilaiGanjil[index]) {
    minGanjil = nilaiGanjil[index];
  }

  if (minGenap > nilaiGenap[index]) {
    minGenap = nilaiGenap[index];
  }

  if (maxGanjil < nilaiGanjil[index]) {
    maxGanjil = nilaiGanjil[index];
  }

  if (maxGenap < nilaiGenap[index]) {
    maxGenap = nilaiGenap[index];
  }

  // const totalNilai = (x, y) => {
  //   console.log(x + y);
  // };

  // totalNilai("total", totalGanjil, nilaiGanjil.length);

  totalGanjil += nilaiGanjil[index];
  avgGanjil = totalGanjil / nilaiGanjil.length;
  totalGenap += nilaiGenap[index];
  avgGanjil = totalGenap / nilaiGenap.length;
}

console.log("array Ganjil = ");
console.log("min ", minGanjil);
console.log("max", maxGanjil);
console.log("Total", totalGanjil);
console.log("avg Ganjil", avgGanjil);
console.log("array Genap = ");
console.log("min ", minGenap);
console.log("max", maxGenap);
console.log("Total", totalGenap);
console.log("avg Genap", avgGenap);

if (minGenap > minGanjil) {
  console.log("min Genap lebih besar dari min ganjil");
} else if (minGanjil > minGenap) {
  console.log("min ganjil lebih besar dari min genap");
} else {
  console.log("kedua array sama saja");
}

if (maxGenap > maxGanjil) {
  console.log("max genap lebih besar dari max ganjil");
} else if (maxGanjil > maxGenap) {
  console.log("max Ganjil lebih besar dari max genap");
} else {
  console.log("kedua array sama saja");
}

if (avgGanjil > avgGenap) {
  console.log("avg ganjil lebih besar dari avg genap");
} else if (avgGenap > avgGanjil) {
  console.log("avg genap lebih besar dari avg ganjil");
} else {
  console.log("avg kedua array sama saja");
}

if (totalGenap > totalGanjil) {
  console.log("total genap lebih besar dari avg ganjil");
} else if (totalGanjil > totalGenap) {
  console.log("total ganjil lebih besar dari total genap");
} else {
  console.log("total kedua array sama saja");
}
