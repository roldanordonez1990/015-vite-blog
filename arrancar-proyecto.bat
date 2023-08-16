::Script para arrancar de una vez todo lo necesario para el proyecto
::Por orden: Demonio de MondoDB, Interfaz de Mongo, Postman, API Rest, proyecto del blog de Vite
::He tenido que crear accesos directos para Postman y MondoDBCompass porque había problemas con la ruta
::Lo mismo con la api rest, al estar todas dentro de Francisco Roldán. Problemas con la tilde
::El proyecto de vite prefiero no arrancarlo desde otra cmd. Sino por Visual Studio
::El /min es para que aparezcan las cmd minimizadas
start /min cmd.exe /k "cd C:\Program Files\MongoDB\Server\6.0\bin && mongod.exe"
start cmd.exe /k "MongoDBCompass.exe.lnk && exit"
start /min cmd.exe /k "cd .. && cd .. && cd api-rest-node && npm start"
start cmd.exe /k "Postman.exe.lnk && exit"
::start cmd.exe /k "npm run dev"
