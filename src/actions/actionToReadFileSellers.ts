import xlsx from 'xlsx'

const file = xlsx.readFile(`C:\\Users\\BG-JOANA B\\Desktop\\Projetos\\utils\\read-xlsx\\src\\archives\\extract.xlsx`)

let preferredSellers:any = []
  
const sheets = file.SheetNames

for (let i = 0; i < sheets.length; i++) {
    const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])

    temp.forEach((el) => {
        preferredSellers.push(el)
    })
}

export default preferredSellers;
