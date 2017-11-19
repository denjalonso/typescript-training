## From egghead.io

### [Up and running with typescript](https://egghead.io/courses/up-and-running-with-typescript)

* tsc -w --out buundle.js App.js
* tsc --init 
* tsc // compila todo
* [typescript playground](https://www.typescriptlang.org/play/index.html) 
* files, outDir
* noEmit //para que no compile cuando hay errores (mp genera la dist)
* Run in the browser: system.js + npm http-server
* IDES: Intellij vs visual estudio code
* Files por desgracia no soporta glob patterns (wildcards), para no estar poniendo cada uno de los ficheros a incluir en files
usaremos "exclude" y "rootDir".
* What happend to compile interfaces: fijarnos en la evolución de los errores mientras 
implementamos la interfaz, si nos fijamos en los ficheros js generados usa herencia por prototipado
y la interfaz en si está vacía.