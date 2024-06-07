// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// (c) Todos os direitos reservados. 2022
//
// Adyelson Felix Loureiro
//
// f3lixtech@f3lixtech.com 
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
function exportDataCsv(){
    csvContent = exportDataidShiftCsv();
    csvContent += "\r\n";
    /* Get the HTML data using Element by Id */
    var table = document.querySelector(".idShift");
 
    /* Declaring array variable */
    var rows =[];
    var columns = [];
      //iterate through rows of table
    for(var i=0,row; row = table.rows[i];i++){
        //rows would be accessed using the "row" variable assigned in the for loop
        //Get each cell value/column from the row
        columns = []
        for(var a=0,column; column = row.cells[a];a++){
              columns.push(column.innerText);
        }
    /* add a new records in the array */
        rows.push(columns);
 
    }
        // csvContent = "data:text/csv;charset=utf-8,";
         /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
        rows.forEach(function(rowArray){
            row = rowArray.join(",");
            csvContent += row + "\r\n";
        });
 
        /* create a hidden <a> DOM node and set its download attribute */
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "data.csv");
        document.body.appendChild(link);
         /* download the data file named "Stock_Price_Report.csv" */
        link.click();
        
}

function exportDataidShiftCsv(){
    /* Get the HTML data using Element by Id */
    var table = document.querySelector(".horizontalShift");
 
    /* Declaring array variable */
    var rows =[];
    var columns = [];
      //iterate through rows of table
    for(var i=0,row; row = table.rows[i];i++){
        //rows would be accessed using the "row" variable assigned in the for loop
        //Get each cell value/column from the row
        columns = []
        for(var a=0,column; column = row.cells[a];a++){
              columns.push(column.innerText);
        }
    /* add a new records in the array */
        rows.push(columns);
 
    }
        csvContent = "data:text/csv;charset=utf-8,";
         /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
        rows.forEach(function(rowArray){
            row = rowArray.join(",");
            csvContent += row + "\r\n";
        });
 
        return csvContent;
}