

let equipo = [
	{
      nombre: "Juan",
      cargo: "administrador"},
    {
  		nombre: "Bety",
    	cargo: "administrador"},
	{
  		nombre: "Natalia",
    	cargo: "desarrollador"},
  {
  		nombre: "Jorge",
    	cargo: "gerente"},
  {
  		nombre: "Sergio",
    	cargo: "desarrollador"}

  
]

const desarrolladores = equipo.filter(equipo => equipo.cargo == "desarrollador")

console.log(desarrolladores)
