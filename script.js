const NUM_OF_DIVS = 16

const gridContainer = document.createElement('div')
gridContainer.style.width = '100vw'
gridContainer.style.height = '100vh'
gridContainer.style.border = '1em solid red'

document.body.style.margin = '0'

document.body.appendChild(gridContainer)

const chiledDiv = document.createElement('div')
chiledDiv.style.width = 'calc(100vw / 16)'
chiledDiv.style.height = 'calc(100vh / 16)'
chiledDiv.style.border = '5px solid green'


for (let xAxis = 0; xAxis < NUM_OF_DIVS; xAxis++){
    console.log(xAxis, 'X')
    document.body.appendChild(chiledDiv)
    for (let yAxis = 0; yAxis < NUM_OF_DIVS; yAxis++)
        console.log(yAxis, 'Y')
        gridContainer.appendChild(chiledDiv)
}