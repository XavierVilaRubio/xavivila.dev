---
layout: ../../../layouts/ProjectLayout.astro
title: Hack The Maze
description: Un sencillo juego hecho con HTML, CSS y JS. 3er puesto en el reto de IThinkUPC en la HackUPC 2022.
---

# Hack The Maze
Hack The Maze es el resultado de una hackathon de 36 horas, la [HackUPC 2022](https://hackupc.com/), donde conseguimos un 3r puesto. Participamos en el reto propuesto por [IThinkUPC](https://ithinkupc.com/), que consistia en crear un juego multijugador que fuera rapido y sirviera para desconectar durante la hackathon. Nosotros decidimos crear un sencillo juego de laberinto donde el jugador tiene que intentar llegar el primero a la salida.

## Stack
Al solo tener 36 horas decidimos usar un stack basico que nos diese muchas posibilidades. Para el frontend usamos HTML, CSS y JS. Para el backend usamos NodeJS y Express. Para la comunicacion entre el front y el back usamos Socket.io.

## Mi experiencia
Fui el encargado de hacer el frontend, y como nunca había hecho ningun juego ni nada parecido que requiriese una parte grafica en constante actualización decidí usar el propio ``<canvas>`` de HTML. Desde JS podia pintar y actualizar el canvas en tiempo real y con muy poca carga.

![Image](/hackthemaze2.png)

<!-- https://devpost.com/software/hack-the-maze -->
<!-- https://www.youtube.com/watch?v=RnH7fyA147I -->