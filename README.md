# Piedra, Papel o Tijeras

Un juego simple para el navegador creado con HTML y JavaScript.

## Descripción

El jugador elige entre `Piedra`, `Papel` o `Tijeras`, y la computadora selecciona su jugada de forma aleatoria.
El juego muestra el resultado de cada ronda y mantiene el marcador de ambos jugadores.
Cuando el jugador o la computadora alcanza 5 puntos, se declara un ganador final y el marcador se reinicia.

## Cómo jugar

1. Abre `index.html` en tu navegador.
2. Haz clic en uno de los botones: `Piedra`, `Papel` o `Tijeras`.
3. Observa el resultado de la ronda y el marcador actualizado.
4. Continúa jugando hasta que alguien llegue a 5 puntos.
5. Al llegar a 5 puntos, el juego muestra el ganador final y reinicia el marcador.

## Archivos

- `index.html` — estructura de la página con los botones de juego y el contenedor de resultados.
- `script.js` — lógica del juego, elección aleatoria de la computadora, cálculo del ganador y actualización del marcador.

## Detalles técnicos

- La elección de la computadora se genera aleatoriamente entre `rock`, `paper` y `scissors`.
- El juego compara la elección del jugador con la de la computadora para determinar el ganador de cada ronda.
- Si hay empate, se muestra un mensaje de empate y no se modifica el marcador.
- El puntaje se reinicia cuando alguien alcanza 5 puntos.

## Posibles mejoras

- Añadir estilos CSS para mejorar la apariencia.
- Mostrar las jugadas de la computadora en cada ronda.
- Agregar sonido o animaciones cuando se gana, pierde o empata.
- Permitir jugar varias partidas con historial de resultados.

## Autor

Proyecto de ejemplo para practicar JavaScript y manipulación del DOM.
