// let  src= require("/socket.io/socket.io.js");

// document.addEventListener('submit', function() {
function img (){
let img1 = document.getElementById("img1").value
 console.log(img1)
  // if (input.value) {
    // socket.emit('chat message',{user:userName.value,password:password.value});
    // input.value = '';
  // }
};





const generateGame = () => {
    // const dimensions = 3
    // // if (dimensions % 2 !== 0) {
    // //     throw new Error("The dimension of the board must be an even number.")
    // // }

    // const emojis = ['🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍']
    // const picks = pickRandom(emojis, (dimensions * dimensions) / 2) 
    // const items = shuffle([...picks, ...picks])
    // const cards = `
    //     <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
    //         ${items.map(item => `
    //             <div class="card">
    //                 <div class="card-front"></div>
    //                 <div class="card-back">${item}</div>
    //             </div>
    //         `).join('')}
    //    </div>
    // `


    const tableGame = 
    `<table class="table table-dark">
                        <thead>
                          <tr>
                            <th>
                            <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
                        </th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>`
    
    const parser = new DOMParser().parseFromString(tableGame, 'text/html')
console.log('sss')
    document.querySelector('.board').replaceWith(document.write(tableGame))
    // document.querySelector('.board').replaceWith(tableGame.querySelector('.table table-dark'))
}



// const generateGame = () => {
//     const dimensions = 3
//     // if (dimensions % 2 !== 0) {
//     //     throw new Error("The dimension of the board must be an even number.")
//     // }

//     const emojis = ['🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍']
//     const picks = pickRandom(emojis, (dimensions * dimensions) / 2) 
//     const items = shuffle([...picks, ...picks])
//     const cards = `
//         <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
//             ${items.map(item => `
//                 <div class="card">
//                     <div class="card-front"></div>
//                     <div class="card-back">${item}</div>
//                 </div>
//             `).join('')}
//        </div>
//     `
    
//     const parser = new DOMParser().parseFromString(cards, 'text/html')

//     selectors.board.replaceWith(parser.querySelector('.board'))
// }



// const pickRandom = (array, items) => {
//     const clonedArray = [...array]
//     const randomPicks = []

//     for (let index = 0; index < items; index++) {
//         const randomIndex = Math.floor(Math.random() * clonedArray.length)
        
//         randomPicks.push(clonedArray[randomIndex])
//         clonedArray.splice(randomIndex, 1)
//     }

//     return randomPicks
// }



// const shuffle = array => {
//     const clonedArray = [...array]

//     for (let index = clonedArray.length - 1; index > 0; index--) {
//         const randomIndex = Math.floor(Math.random() * (index + 1))
//         const original = clonedArray[index]

//         clonedArray[index] = clonedArray[randomIndex]
//         clonedArray[randomIndex] = original
//     }

//     return clonedArray
// }
const selectors = {
    boardContainer: document.querySelector('.board-container'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('button'),
    win: document.querySelector('.win')
}

// const state = {
//     gameStarted: false,
//     flippedCards: 0,
//     totalFlips: 0,
//     totalTime: 0,
//     loop: null
// }
