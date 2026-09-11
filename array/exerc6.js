//dado const fila = ["João", "Maria", "Pedro"];, 
// remova a primeira pessoa da fila (ela foi atendida) 
// e adicione uma nova pessoa "Carla" no final. mostre o array em cada etapa.

const fila = ["João", "Maria","Pedro"]
console.log(fila)
fila.shift()
console.log(fila)
fila.unshift ("Carla")
console.log(fila)
