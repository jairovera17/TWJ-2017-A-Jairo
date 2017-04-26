# app
 
a [Sails](http://sailsjs.org) application


##Header en MarkDown


##Comandos Necesarios

    sails new Aplicacion


## Comandos Docker





##Postgresql

````
>> docker run --name 
postgresadrian -e 
POSTGRES_PASSWORD=123456 -e
POSTGRES_USER=adrian -e
POSTGRES_DB=politecnica -p
5432:5432 -d postgres

````




### MySql


Este comando lista los contenedores que esta **corriendo**
````
>> docker ps
````

Este comando enlista los contenedores instalados
````
>> docker ps -a
````

Este comando inicia o detiene el contenedor. No se necesita escribir el nombre del contenedor completo

````
>> docker start micontenedor
>> docker stop micontenedor container
>> docker stop mi
>> docker stop con
````

Este comando elimina el contenedor. el contenedor debe estar detenido
````
>> docker rm contenedor
````



````
>> docker run --name jairo -e 
MYSQL_ROOT_PASSWORD=12345 -e
MYSQL_DATABASE=jairo -e 
MY_
````



##MongoDB


````
>> docker run --name adrianmongo -p 27017:27017 -d mongo

````

##Herramientas necesarias

1. Sails

    1. Comandos Sails
    2. Instalar sails por consola
    

2. Docker

3. WebStorm

4. PostMan

5. PostMan


##Referencias a enlaces

[PULPOS WEB](https://google.com)




docker run --name postgresadrian -e POSTGRES_PASSWORD=123456 -e POSTGRES_USER=adrian -e POSTGRES_DB=politecnica -p 5432:5432 -d postgres



