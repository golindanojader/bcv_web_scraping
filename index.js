// npm install @extractus/article-extractor


import {extract} from '@extractus/article-extractor'
import fs from 'fs';
import CronJob from 'node-cron';

let ruta = 'tasa_bcv.txt'




 CronJob.schedule('*/59 * * * *', async()=> {
	 
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
				
		
		console.log(fechaFormateada + '-' + titulo + output.slice(1783,1789))

		fs.writeFile(ruta, '', function (err){})
		fs.appendFile(ruta, output.slice(1783,1789), function (err) {if (err) throw err;});
	   

})


