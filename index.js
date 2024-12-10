
// npm install @extractus/article-extractor

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import {extract} from '@extractus/article-extractor'
import fs from 'fs';
import CronJob from 'node-cron';
let ruta = 'tasa_bcv.txt'
let texto = "Esto es una prueba \n\t";

const fechaActual = new Date();

// Obtener componentes individuales
const año      = fechaActual.getFullYear();
const mes      = fechaActual.getMonth() + 1; 
const día      = fechaActual.getDate();
const horas    = fechaActual.getHours();
const minutos  = fechaActual.getMinutes();
const segundos = fechaActual.getSeconds();

// Formatear la fecha y hora
const fechaFormateada = `${año}-${mes}-${día} ${horas}:${minutos}:${segundos}`;

let web = await extract('https://www.bcv.org.ve/')
const titulo = "tasa BCV: "
var output = JSON.stringify(web)

// var CronJob = require('cron').CronJob;


 CronJob.schedule('* * * * *', ()=> {
    
    console.log(titulo + output.slice(1783,1789))

    fs.writeFile(ruta, '', function (err){})
    fs.appendFile(ruta, output.slice(1783,1789), function (err) {if (err) throw err;});
    

}

)



