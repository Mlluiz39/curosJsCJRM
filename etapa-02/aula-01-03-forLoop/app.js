for (let i = 0; i < 5; i++) {
  console.log(`Dentro do loop: ${i}`);
}

console.log("Loop concluido");

const namesExemple1 = ["Linus", "Ada", "Bill"];
for (let i = 0; i < namesExemple1.length; i++) {
  console.log(namesExemple1[i]);
}

const namesExemple2 = ["Marcelo", "Cilene", "Julia"];
for (let i = 0; i < namesExemple2.length; i++) {
  const HTMLTemplate = `<p>${namesExemple2[i]}</p>`;
  console.log(HTMLTemplate);
}
