var XLSX = require("xlsx");


// import * as fs from 'fs';
// XLSX.set_fs(fs);

// /* load 'stream' for stream support */
// import { Readable } from 'stream';
// XLSX.stream.set_readable(Readable);

// /* load the codepage support library for extended support with older formats  */
// import * as cpexcel from 'xlsx/dist/cpexcel.full.mjs';
// XLSX.set_cptable(cpexcel);





const toJSON = () => {
    const excel = XLSX.readFile(
        "C:\\Users\\equipo\\Desktop\\new\\TARIFARIOFTL.xlsx"
    )
    let nameHoja= excel.SheetNames
    let datos = XLSX.utils.sheet_to_json(excel.Sheets[nameHoja[0]])

    // for (let i = 0; i < datos.length ; i++) {
    //     console.log(datos[i])
        
    // }


    console.log(datos)
}
toJSON()