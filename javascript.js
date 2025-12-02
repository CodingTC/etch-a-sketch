

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
            newRow.appendChild(newCol);
        }
        sketchPad.appendChild(newRow);
    }

    sketchPad.addEventListener("mouseenter", (e) => {
            if(e.target.classList.contains("grid-squares")) {
                const rgb = getRandRGB();
                const r = rgb[0];
                const g = rgb[1];
                const b = rgb[2];
                e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                const curOpacity = parseFloat(e.target.style.opacity);
                if(curOpacity < 1)
                {
                    const newOpacity = curOpacity + .1;
                    e.target.style.opacity = newOpacity;
                }
                else if(!curOpacity)
                {
                    e.target.style.opacity = .1;
                }
            }
        }, true);
}

function getRandRGB()
{
    const r = parseInt(Math.random() * 256);
    const g = parseInt(Math.random() * 256);
    const b = parseInt(Math.random() * 256);

    return [r, g, b];
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
