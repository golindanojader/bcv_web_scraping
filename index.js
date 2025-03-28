// npm install @extractus/article-extractor 
//DESARROLLO FINAL  13-12-2024 POR JADER GOLINDANO

import {extract} from '@extractus/article-extractor'
import fs from 'fs';
import CronJob from 'node-cron';

let ruta = 'tasa_bcv.txt'

 CronJob.schedule('* * * * *', async()=> { //Se ejecuta cada hora
	 
	    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

	    var fechaActual = new Date();
		// Obtener componentes individuales
		var año      = fechaActual.getFullYear();
		var mes      = fechaActual.getMonth() + 1; 
		var día      = fechaActual.getDate();
		var horas    = fechaActual.getHours();
		var minutos  = fechaActual.getMinutes();
		var segundos = fechaActual.getSeconds();

		// Formatear la fecha y hora
		var fechaFormateada = `${año}-${mes}-${día} ${horas}:${minutos}:${segundos}`;
		var web = await extract('https://www.bcv.org.ve/')
		const titulo = "tasa BCV: "
		var output = JSON.stringify(web)
		var value_from_web   = output.slice(1783,1791)
		var replace_value    = value_from_web.replace(',', '.')
		var convert_to_float = parseFloat(replace_value)
		var rounded_value    = convert_to_float.toFixed(2)
		var final_value      = rounded_value.replace('.', ',')
				
		console.log(fechaFormateada + '-' + titulo + final_value)

		fs.writeFile(ruta, '', function (err){})
	    fs.appendFile(ruta, final_value, function (err) {if (err) throw err;});
	   



	})