# **Introducción a la Programación Funcional con JavaScript** {

> < Por="@JesusDMedinaC" />

> < CodersClub />

## **}**

---

## Estructura del taller

A continuación te presento la estructura del taller:

- **1. Introducción a la Programación Funcional (5 min)**
- **2. Conceptos Clave: Funciones Puras, Inmutabilidad y Métodos de Arreglos (10 min)**
- **3. Ejercicio Práctico en Equipos (10 min)**
- **4. Presentación y Justificación de Respuestas (5 min)**

---

## Cómo tomar este taller

Presencial o remoto

---

## Herramientas necesarias

Opcionales:
- Clonar el <a href="https://github.com/jesusdmedinac/taller-intro-pf-javascript" target="_blank">repositorio</a>
- Utilizar <a href="https://github.com/features/codespaces" target="_blank">Github Codespaces</a>
- Escribir código [directamente en la consola](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/console-javascript)

---

# 1. Introducción a la Programación Funcional

- 1. Funciones de Primera Clase
- 2. Inmutabilidad
- 3. Funciones Puramente Funcionales
- 4. Composición de Funciones
- 5. Ejemplo Simple
- 6. Resumen

---

## 1. Funciones de Primera Clase

En la programación funcional, las funciones son tratadas como valores

---

## 2. Inmutabilidad

En lugar de modificar datos, la programación funcional promueve la creación de nuevos datos a partir de los existentes

---

## 3. Funciones Puramente Funcionales

Una función es considerada pura si su salida depende únicamente de sus entradas y no tiene efectos secundarios

---

## 4. Composición de Funciones

La composición de funciones permite combinar varias funciones en una sola

---

## 5. Ejemplo Simple

```js
function suma(a, b) {
    return a + b
}

function doble(x) {
    return suma(x, x)
}

const resultado = doble(5) // resultado es 10
```

---

## Resumen

La programación funcional ofrece un enfoque diferente que puede llevar a un código más limpio y mantenible.

---

# 2. Conceptos Clave: Funciones Puras, Inmutabilidad y Métodos de Arreglos

- 1. Funciones como Ciudadanos de Primera Clase (High Order Functions)
- 2. Inmutabilidad
- 3. Funciones Puramente Funcionales
- 4. Composición de Funciones
- 5. Funciones de Orden Superior
- 6. Recursión
- 7. Conclusión

---

## 1. Funciones como Ciudadanos de Primera Clase (High Order Functions)

En la programación funcional, las funciones son tratadas como valores

```js
// Asignar una función a una variable
const suma = (a, b) => a + b;

// Pasar una función como argumento
const operar = (funcion, x, y) => funcion(x, y);

const resultado = operar(suma, 5, 3); // resultado es 8
```

---

## 2. Inmutabilidad

La inmutabilidad significa que una vez que se crea un dato, no se puede modificar

```js
const arregloOriginal = [1, 2, 3];

// Crear un nuevo arreglo sin modificar el original
const nuevoArreglo = [...arregloOriginal, 4]; // nuevoArreglo es [1, 2, 3, 4]
```

---

## 3. Funciones Puramente Funcionales

Una función pura es aquella que, dado el mismo conjunto de entradas, siempre devuelve el mismo resultado y no tiene efectos secundarios

```js
const multiplicar = (a, b) => a * b;

// Esta función es pura
const resultado1 = multiplicar(2, 3); // resultado1 es 6
const resultado2 = multiplicar(2, 3); // resultado2 es 6
```

---

## 4. Composición de Funciones

La composición de funciones permite combinar varias funciones en una sola

```js
const sumarUno = x => x + 1;
const multiplicarPorDos = x => x * 2;

// Composición de funciones
const procesarNumero = x => multiplicarPorDos(sumarUno(x));

const resultado = procesarNumero(3); // resultado es 8
```

---

## 5. Funciones de Orden Superior

Las funciones de orden superior son aquellas que pueden recibir otras funciones como argumentos o devolver funciones como resultado

```js
const aplicarOperacion = (operacion, x, y) => operacion(x, y);

const resultado = aplicarOperacion(suma, 10, 5); // resultado es 15
```

---

## 6. Recursión

La recursión es una técnica donde una función se llama a sí misma para resolver un problema

```js
const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));

const resultado = factorial(5); // resultado es 120
```

---

## Conclusión

La programación funcional ofrece un enfoque poderoso y flexible para resolver problemas

---

# 3. Ejercicio Práctico en Equipos: Cálculo de la Suma de Números Pares

## Objetivo

El objetivo de este ejercicio es que los equipos practiquen la programación funcional al implementar una función que calcule la suma de todos los números pares en un arreglo dado

## Duración
10 minutos

---

## Pasos a Seguir

- Paso 1: Formar Equipos
- Paso 2: Definir el Problema
- Paso 3: Planificar la Solución
- Paso 4: Implementar la Solución
- Paso 5: Probar la Solución
- Paso 6: Presentar Resultados

---

### Paso 1: Formar Equipos
Divídanse en equipos de 3 a 5 personas. Cada equipo debe elegir un líder que será responsable de coordinar la actividad.

---

### Paso 2: Definir el Problema
Cada equipo debe discutir y entender el problema. La tarea es crear una función que reciba un arreglo de números y devuelva la suma de todos los números pares.

---

### Paso 3: Planificar la Solución
Antes de comenzar a codificar, discutan cómo abordarán el problema. Consideren los siguientes puntos:
- ¿Qué métodos de programación funcional utilizarán?
- ¿Cómo manejarán los números impares?
- ¿Cómo se asegurarán de que su función sea pura?

---

### Paso 4: Implementar la Solución

Cada equipo debe implementar la solución en JavaScript

---

### Paso 5: Probar la Solución
Cada equipo debe probar su función con diferentes arreglos de números para asegurarse de que funciona correctamente. Prueben con arreglos que contengan solo números impares, solo números pares y una mezcla de ambos.

---

### Paso 6: Presentar Resultados
Al final de los 10 minutos, cada equipo deberá crear un [Github Gist](https://docs.github.com/es/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists) con su solución y crear un issue en el repositorio [taller-intro-pf-javascript](https://github.com/jesusdmedinac/taller-intro-pf-javascript)

---

## Solución Propuesta

### sumaPares
```js
// Función que calcula la suma de números pares
const sumaPares = (numeros) => {
    return numeros
        .customFilter(num => num % 2 === 0) // Filtrar números pares
        .customReduce((acumulador, num) => acumulador + num, 0); // Sumar los números pares
};

// Ejemplo de uso
const arreglo = [1, 2, 3, 4, 5, 6];
const resultado = sumaPares(arreglo); // resultado es 12
```

---

### customFilter

```js
// Función customFilter que filtra números pares
const customFilter = (numeros, callback) => {
    let resultado = [];
    for (let i = 0; i < numeros.length; i++) {
        if (callback(numeros[i])) {
            resultado.push(numeros[i]);
        }
    }
    return resultado;
};
```

---

### customReduce

```js
// Función customReduce que suma los números pares
const customReduce = (numeros, callback, valorInicial) => {
    let resultado = valorInicial;
    for (let i = 0; i < numeros.length; i++) {
        resultado = callback(resultado, numeros[i]);
    }
    return resultado;
};
```

---

### Bonus

```js
// Función customPush que agrega un elemento al final de un arreglo
const customPush = (arreglo, elemento) => {
    arreglo[arreglo.length] = elemento; // Agregar el elemento al final
    return arreglo.length; // Retornar la nueva longitud del arreglo
};

// Ejemplo de uso
const miArreglo = [1, 2, 3];
const nuevaLongitud = customPush(miArreglo, 4); // nuevaLongitud es 4
```

---

## Conclusión

Este ejercicio práctico permite a los equipos aplicar los conceptos de programación funcional en un entorno colaborativo, fomentando la discusión y el aprendizaje conjunto.

---

# 4. Presentación y Justificación de Respuestas

- Compartir la solución implementada por equipos voluntarios.
- Explicar el razonamiento detrás de las decisiones tomadas durante la implementación.
- Comparar diferentes enfoques y aprender de las experiencias de otros equipos.