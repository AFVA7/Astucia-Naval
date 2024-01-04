## TablerosApp

### Descripción

TablerosApp es una aplicación web que recrea una versión simplificada del popular juego "Astucia Naval". La aplicación presenta una vista que contiene una matriz 10x10 con nombres de columnas (números del 1 al 10) y filas (letras de la A a la J). El objetivo del juego es destruir los barcos ubicados en la matriz ingresando comandos de ataque.

### Juego "Astucia Naval"

Al ingresar a la vista, el sistema crea automáticamente una matriz 10x10 y genera las posiciones de 5 barcos de manera oculta. Los barcos tienen un tamaño fijo de 4 posiciones y pueden ser ubicados horizontal o verticalmente. No se permite que un barco esté ubicado encima de otro.

#### Comandos de Ataque

Para comenzar a jugar, hay un cajón de texto (Input) donde se pueden ingresar comandos para el ataque. El formato del comando es `<fila><columna>`. Ejemplo: D1, H3, C2.

- Si la posición ingresada coincide con una de las posiciones de un barco, se muestra la letra "O" en la casilla.
- Si la posición ingresada no coincide con un barco, se muestra la letra "X".
- Si la posición ya tiene un valor, se conserva ese valor y se ignora el nuevo comando.

### Contador de Barcos Destruidos

El sistema cuenta con un contador de cuántos barcos se han destruido. El juego termina cuando el contador llega a 5.

### Botones

- **Ejecutar:** Este botón ejecuta el comando del input, revelando el resultado en la matriz.
- **Reiniciar Juego:** Este botón limpia la matriz y vuelve a generar las posiciones de los barcos, permitiendo reiniciar el juego.

### Instrucciones de Uso

1. **Clona el repositorio:**
   ```bash
   git clone https://tu-repositorio.git
   ```

2. **Navega al directorio del proyecto:**
   ```bash
   cd tablerosApp
   ```

3. **Instala las dependencias con Yarn:**
   ```bash
   yarn
   ```

4. **Ejecuta la aplicación en modo de desarrollo:**
   ```bash
   yarn dev
   ```

### Dependencias

- **React**: ^18.2.0
- **React-dom**: ^18.2.0
- **Otras dependencias necesarias para el desarrollo**

### Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún problema o tienes mejoras que sugerir, por favor, abre un [issue](https://github.com/tu-usuario/tablerosApp/issues) o envía una [pull request](https://github.com/tu-usuario/tablerosApp/pulls).

¡Gracias por jugar a TablerosApp!