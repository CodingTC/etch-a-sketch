

function createGrid(num)
{
    const sketchPad = document.querySelector(".sketchpad");

    for(let i = 0; i < num; i++)
    {
        const newRow = document.createElement("div");
        newRow.classList.add("row");

        for(let j = 0; j < num; j++)
        {
            const newCol = document.createElement("div");
            newCol.classList.add("grid-squares");
            newCol.addEventListener("mouseenter", () => {
                newCol.classList.add("on-hover");
            });

            newRow.appendChild(newCol);
        }
        sketchPad.appendChild(newRow);
    }

}

function clearGrid()
{
    const sketchPad = document.querySelector(".sketchpad");
    sketchPad.replaceChildren();
}

const gridNumSetButton = document.querySelector(".grid-num");

gridNumSetButton.addEventListener("click", () => {
    const newGridNum = parseInt(prompt("Set NumxNum grid: "));
    
    if(!newGridNum || newGridNum > 100 || newGridNum < 1 ||
        typeof newGridNum !== "number")
    {
        return;
    }
    clearGrid(); 
    createGrid(newGridNum);
});


createGrid(16);
