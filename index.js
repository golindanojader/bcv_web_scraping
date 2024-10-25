
// npm install @extractus/article-extractor
import {extract} from '@extractus/article-extractor'
let web = await extract('https://www.bcv.org.ve/')
const titulo = "tasa BCV: "
var output = JSON.stringify(web)
console.log(titulo + output.slice(1783,1789))