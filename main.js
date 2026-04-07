const inputRCBtn = document.getElementById("inputRCButton");
const createMatrixBtn = document.getElementById("createMatrix");
const testBtn = document.createElement("button");
testBtn.innerHTML = "Test";

const saveABtn = document.getElementById("saveA");
const saveBBtn = document.getElementById("saveB");
const addBtn = document.getElementById("addBtn");

let rowVal = 2;
let colVal = 2;
let matrixA = [];
let matrixB = [];

inputRCBtn.addEventListener("click", inputRowCol)
function inputRowCol()
{
    rowVal = document.getElementById("row").value;
    colVal = document.getElementById("column").value
}

createMatrixBtn.addEventListener("click", makeMatrix);

function makeMatrix()
{
    const matrixContainer = document.getElementById("matrixContainer");
    matrixContainer.innerHTML = "";  
    console.log("btn working");

    for (let i = 1; i <= rowVal; i++)
    {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row-div");
        matrixContainer.appendChild(rowDiv);
        for(let j = 1; j <= colVal; j++)
            {
                const cell = document.createElement("input");
                cell.type = "text";
                cell.id = `cell-${i}-${j}`;
                cell.value = `${i}${j}`;
                // cell.value = cell.value.replace(/[^0-9.-]/g, ""); Implement this later on
                rowDiv.appendChild(cell);
            }
        }
    
    // matrixContainer.appendChild(testBtn);
}

// testBtn.addEventListener("click", () => {
//     const matrixVal = getMatrix();
//     console.log(matrixVal);
// });

function getMatrix()
{
    const matrix = [];
    for(let i = 1; i <= rowVal; i++)
    {
        const row = [];
        for(let j = 1; j <= colVal; j++)
        {
            const cell = document.getElementById(`cell-${i}-${j}`);
            row.push(parseFloat(cell.value));
        }
        matrix.push(row);
    }
    
    return matrix;  
}


saveABtn.addEventListener("click", () => {
    matrixA = getMatrix();
    console.log(matrixA);
})

saveBBtn.addEventListener("click", () => {
    matrixB = getMatrix();
    console.log(matrixB);
})

addBtn.addEventListener("click", addMatrices);

function addMatrices()
{
    const result = [];
    for (let i = 0; i < matrixA.length; i++)
    {
        const row = [];
        for (let j = 0; j < matrixA[i].length; j++)
        {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    console.log(result);
}