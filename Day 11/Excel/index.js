const XLSX = require("xlsx");

const workbook = XLSX.readFile("employe.xlsx");
let worksheets = {};
for (const sheetName of workbook.SheetNames) {
    worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}


let arr = worksheets.Sheet
for(let i = 0; i < worksheets.Sheet.length; i++){

  if (arr[i].AnnualSalary < 50000){
    Object.assign(arr[i],{BonusPercentage:'5%'})
    Object.assign(arr[i],{BonusAmount: (5*arr[i].AnnualSalary)/100})
  }
  else if (arr[i].AnnualSalary >= 50000 && arr[i].AnnualSalary <= 100000) {
    Object.assign(arr[i],{BonusPercentage:'7%'})
    Object.assign(arr[i],{BonusAmount: (7*arr[i].AnnualSalary)/100})
  }
  else{
    Object.assign(arr[i],{BonusPercentage:'10%'})
    Object.assign(arr[i],{BonusAmount: (10*arr[i].AnnualSalary)/100})
  }
  
}


//error message
try {
  // Créer un nouveau classeur
const newWorkbook = XLSX.utils.book_new();

// Convertir les données modifiées en feuille de calcul
const newWorksheet = XLSX.utils.json_to_sheet(arr);

// Ajouter la feuille de calcul au nouveau classeur
XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'Employee Data');

// Écrire les données dans un nouveau fichier Excel
const outputFileName = 'employee_bonus_data.xlsx';
XLSX.writeFile(newWorkbook, 'employee_bonus_data.xlsx');

console.log(`Les données ont été écrites dans le fichier ${outputFileName}`);
  } 
  catch (error) {
    console.error(message.error)
  }