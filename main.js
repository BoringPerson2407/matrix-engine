const inputRCBtn = document.getElementById("inputRCButton");
const createMatrixBtn = document.getElementById("createMatrix");
let rowVal = 2;
let colVal = 2;

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
                cell.value = 31;
                // cell.value = cell.value.replace(/[^0-9.-]/g, ""); Implement this later on
                rowDiv.appendChild(cell);
            }
        }
}