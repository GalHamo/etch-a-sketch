document.body.style.margin = '0'
const setScreenSize = document.createElement('button')
setScreenSize.innerHTML = 'Set Screen Size'
setScreenSize.style.width = '200px'
setScreenSize.style.height = '40px'
setScreenSize.style.alignSelf = 'center'

setScreenSize.addEventListener('click', () => {
    gridContainer.innerHTML = ''
    let xAxisSquares = prompt('How much squares on the X axis, choose a number between 1 and 100') 
    while (1 > xAxisSquares || xAxisSquares > 100) {
        xAxisSquares = prompt('How much squares on the X axis, choose a number between 1 and 100')
    }
    let yAxisSquares = prompt('How much squares on the Y axis, choose a number between 1 and 100')
    while (1 > yAxisSquares || yAxisSquares > 100) {
        yAxisSquares = prompt('How much squares on the Y axis, choose a number between 1 and 100')
    }
    screenBuilder(xAxisSquares, yAxisSquares)
})

const gridContainer = document.createElement('div')
gridContainer.style.width = '100vw'
gridContainer.style.height = 'calc(100vh - 40px)'
gridContainer.style.border = '1em solid red'
gridContainer.style.display = 'flex'
gridContainer.style.flexDirection = 'column'

document.body.appendChild(setScreenSize)
document.body.appendChild(gridContainer)

const screenBuilder = (squaresOfX, squaresOfY) => {
    for (let xAxis = 0; xAxis < squaresOfX; xAxis++){
        const rowContainer = document.createElement('div')
        rowContainer.style.width = '100%'
        rowContainer.style.height = `calc(100% / ${squaresOfX})`
        rowContainer.style.border = '1px solid black'
        rowContainer.style.display = 'flex'
        gridContainer.appendChild(rowContainer)
        for (let yAxis = 0; yAxis < squaresOfY; yAxis++){
            const chiledDiv = document.createElement('div')
            chiledDiv.classList.add('green-box')
            chiledDiv.style.width = '100%'
            chiledDiv.style.height = '100%'
            chiledDiv.style.border = '1px solid black'
    
            rowContainer.appendChild(chiledDiv)
            chiledDiv.addEventListener('mouseover', () => {
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
}

