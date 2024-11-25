const NUM_OF_DIVS = 16
document.body.style.margin = '0'

const gridContainer = document.createElement('div')
gridContainer.style.width = '100vw'
gridContainer.style.height = '100vh'
gridContainer.style.border = '1em solid red'
gridContainer.style.display = 'flex'
gridContainer.style.flexDirection = 'column'

document.body.appendChild(gridContainer)

for (let xAxis = 0; xAxis < NUM_OF_DIVS; xAxis++){
    console.log(xAxis, 'X')
    const rowContainer = document.createElement('div')
    rowContainer.style.width = '100%'
    rowContainer.style.height = 'calc(100% / 16)'
    rowContainer.style.border = '1px solid black'
    rowContainer.style.display = 'flex'
    gridContainer.appendChild(rowContainer)
    for (let yAxis = 0; yAxis < NUM_OF_DIVS; yAxis++){
        console.log(yAxis, 'Y')
        const chiledDiv = document.createElement('div')
        chiledDiv.classList.add('green-box')
        chiledDiv.style.width = '100%'
        chiledDiv.style.height = '100%'
        chiledDiv.style.border = '1px solid black'

        chiledDiv.addEventListener('mouseover', (selfChiled) => {
            if (chiledDiv.style.background != 'green'){
                chiledDiv.style.background = 'green'
            }
            chiledDiv.style.background = 'white'
        })
        rowContainer.appendChild(chiledDiv)
    }
        
}