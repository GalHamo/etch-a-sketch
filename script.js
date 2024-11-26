const NUM_OF_DIVS = 16
document.body.style.margin = '0'
let xAxisSquares = prompt('How much squares on the X axis')
let yAxisSquares = prompt('How much squares on the Y axis')

const gridContainer = document.createElement('div')
gridContainer.style.width = '100vw'
gridContainer.style.height = '100vh'
gridContainer.style.border = '1em solid red'
gridContainer.style.display = 'flex'
gridContainer.style.flexDirection = 'column'

document.body.appendChild(gridContainer)

for (let xAxis = 0; xAxis < xAxisSquares; xAxis++){
    console.log(xAxis, 'X')
    const rowContainer = document.createElement('div')
    rowContainer.style.width = '100%'
    rowContainer.style.height = `calc(100% / ${xAxisSquares})`
    rowContainer.style.border = '1px solid black'
    rowContainer.style.display = 'flex'
    gridContainer.appendChild(rowContainer)
    for (let yAxis = 0; yAxis < yAxisSquares; yAxis++){
        console.log(yAxis, 'Y')
        const chiledDiv = document.createElement('div')
        chiledDiv.classList.add('green-box')
        chiledDiv.style.width = '100%'
        chiledDiv.style.height = '100%'
        chiledDiv.style.border = '1px solid black'

        
        rowContainer.appendChild(chiledDiv)
        chiledDiv.addEventListener('mouseover', (selfChiled) => {
            if (!chiledDiv.classList.contains('green-bg')){
                chiledDiv.classList.remove('white-bg')
                chiledDiv.classList.add('green-bg')
            } else {
                chiledDiv.classList.remove('green-bg')
                chiledDiv.classList.add('white-bg')
            }
            
        })
    }
        
}

