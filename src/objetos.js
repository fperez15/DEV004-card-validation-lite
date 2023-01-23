function salto() {
  return '2 metros';
}

const personas = {
  nombre: "Elvira",
  edad: 15,
  genero: "Femenino",
  novios: ["Pepito", "Juancito", "Rodrigo"],
  colegios: {
    primaria: "San Fernando",
    secundaria: "San Alberto"
  },
  saltar: salto(),
};


console.log("Objeto persona: ", personas)
console.log("Nombre de la persona: ", personas.nombre);
console.log("Edad de la persona: ", personas.edad);
console.log("Genero de la persona: ", personas.genero);
console.log("Novios de Elvira", personas.novios);
console.log("Colegios de Elviar", personas.colegios);
console.log("Salto", personas.saltar);
console.log("Tipo de nombre: ", typeof personas.nombre);