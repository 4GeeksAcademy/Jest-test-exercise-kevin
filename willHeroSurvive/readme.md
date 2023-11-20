# Sobrevivira el heroe?

Un héroe está en camino al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado de un par de dragones poderosos. **Cada dragón** requiere **2 balas** para ser derrotado, nuestro héroe no tiene idea de cuántas balas debería llevar. Suponiendo que va a tomar un número específico de balas y avanzar para luchar contra un número específico de dragones, ¿sobrevivirá?

En este ejercicio, debes escribir una función que tome dos argumentos: el número de balas que el héroe tiene y el número de dragones que el héroe debe enfrentar. Cada dragón requiere 2 balas para ser derrotado. Si el héroe tiene suficientes balas para derrotar a todos los dragones (es decir, si el número de balas es al menos el doble que el número de dragones), la función debe devolver verdadero. Si el héroe no tiene suficientes balas, la función debe devolver falso.

## Ejemplo:

```js
function willHeroSurvive(balas, dragones) {
  // Tu codigo
}
willHeroSurvive(2, 3); // false porque cada dragon toma dos balas
willHeroSurvive(100, 40); // true porque cada dragon toma dos balas
```
