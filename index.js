var XLSX = require("xlsx");
const { writeFile } = require('fs/promises');


async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data);
    console.log(`Wrote data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to write the file: ${error.message}`);
  }
}




const toJSON = () => {
    const excel = XLSX.readFile(
        "C:\\Users\\HOY\\Desktop\\Swoou\\Excel.xlsx"
    )
    let nameHoja= excel.SheetNames
    let datos = XLSX.utils.sheet_to_json(excel.Sheets[nameHoja[0]])
    let db = JSON.stringify(datos)
    console.log(db)
 
writeToFile('db.json', db);
    console.log(db)
}
toJSON()
