document.querySelector('.control-buttons .button').onclick = function () {

    let userName = prompt(`What's Your Name?`);

    if (userName == null || userName == '') {
        document.querySelector('.info-container .name span').innerHTML = 'Unknown';
    } else {
        document.querySelector('.info-container .name span').innerHTML = userName;
    }

    document.querySelector('.control-buttons').remove();

    let timer = document.querySelector('.timer')

        let myTimer = setInterval(() => {
            timer.innerHTML = parseInt(timer.innerHTML) - 1;

            if (timer.innerHTML < 50) {
                timer.style.color = 'red';
            }

            if (timer.innerHTML < 0) {

                clearInterval(myTimer);

                timer.innerHTML = 'Time Out';

                gameOver();
            }
        }, 1000);

}

// function gameOver() {

//     blocksContainer.classList.add('no-clicking');

//     let overLay = document.createElement('div');
//     blocksContainer.appendChild(overLay);
//     overLay.className = 'overlay';

//     let back = document.createElement('div');
//     overLay.appendChild(back);
//     back.className = 'back';

//     let text = document.createTextNode(`Game Over`);
//     back.appendChild(text);
//     text.className = 'text';
// };

// let duration = 1000,
//     blocksContainer = document.querySelector('.game-blocks-container'),
//     blocks = Array.from(blocksContainer.children),
//     orderRang = [...Array(blocks.length).keys()];

// console.log(orderRang);
// shuffle(orderRang);
// console.log(orderRang);


// blocks.forEach((block, index) => {

//     block.style.order = orderRang[index];

//     block.addEventListener('click', () => {

//         block.classList.add('is-flipped');

//         let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));


//         if (allFlippedBlocks.length === 2) {

//             blocksContainer.classList.add('no-clicking');

//             setTimeout(() => {

//                 blocksContainer.classList.remove('no-clicking');

//             }, duration);

//             let firstBlock = allFlippedBlocks[0];
//             let secondBlock = allFlippedBlocks[1];
//             let tries = document.querySelector('.tries span');

//             if (firstBlock.dataset.type === secondBlock.dataset.type) {

//                 firstBlock.classList.remove('is-flipped');
//                 secondBlock.classList.remove('is-flipped');

//                 firstBlock.classList.add('is-matched');
//                 secondBlock.classList.add('is-matched');

//             } else {

//                 setTimeout(() => {
//                     firstBlock.classList.remove('is-flipped');
//                     secondBlock.classList.remove('is-flipped');

//                     tries.innerHTML = parseInt(tries.innerHTML) + 1

//                 }, duration);

//             }

//         };

//     })

// });

// function shuffle(orderRang) {

//     let current = orderRang.length;

//     let temp;


//     while (current > 0) {

//         let randomNum = Math.floor(Math.random() * current);

//         current--

//         temp = orderRang[current];

//         orderRang[current] = orderRang[randomNum];

//         orderRang[randomNum] = temp;

//     };

//     return orderRang;

// };

// let rightsMatched = blocks.filter(rightMatched => rightMatched.classList.contains('is-matched'));


// ======================================================================

let duration = 1000,
    blocksContainer = document.querySelector(".game-blocks-container"),
    blocks = Array.from(blocksContainer.children),
    orderRang = [...Array(blocks.length).keys()];
shuffle(orderRang); // why call Function Here (Not SelfClosing)

blocks.forEach((block, index) => {

    block.style.order = orderRang[index];

    block.addEventListener('click', function () {
        
        block.classList.add('is-flipped');

        let flippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

        if (flippedBlocks.length === 2) {

            blocksContainer.classList.add('no-clicking')
            setTimeout(() => {
                blocksContainer.classList.remove('no-clicking')
            }, duration)
            

            let firstBlock = flippedBlocks[0];
            let secondBlock = flippedBlocks[1];
            let tries = document.querySelector('.tries span');

            if (firstBlock.dataset.type === secondBlock.dataset.type) {
                
                firstBlock.classList.remove('is-flipped');
                secondBlock.classList.remove('is-flipped');

                firstBlock.classList.add('is-matched');
                secondBlock.classList.add('is-matched');

                let matchedBlocks = blocks.filter(matchedBlock => matchedBlock.classList.contains('is-matched'));
                if (matchedBlocks.length === 20) {
                        blocksContainer.classList.add('no-clicking');

                        let overLay = document.createElement('div');
                        blocksContainer.appendChild(overLay);
                        overLay.className = 'overlay';

                        let back = document.createElement('div');
                        overLay.appendChild(back);
                        back.className = 'back';

                        let text = document.createTextNode(`Winner`);
                        back.appendChild(text);
                        text.className = 'text';
                }

            } else {
                setTimeout(() => {
                    firstBlock.classList.remove('is-flipped');
                    secondBlock.classList.remove('is-flipped');
                }, duration);

                tries.innerHTML = parseInt(tries.innerHTML) + 1;
                if (tries.innerHTML == 60) {
                    gameOver()
                }
            };

        };

    });

});

function shuffle(orderRang) {

    let current = orderRang.length;
    let temp;

    while (current > 0) {

        let randomNum = Math.floor(Math.random() * current);

        current--;

        temp = orderRang[current];

        orderRang[current] = orderRang[randomNum];

        orderRang[randomNum] = temp;

    }

    return orderRang;

};

function gameOver() {

    blocksContainer.classList.add('no-clicking');
    let overLay = document.createElement('div');
    blocksContainer.appendChild(overLay);
    overLay.className = 'overlay';

    let back = document.createElement('div');
    overLay.appendChild(back);
    back.className = 'back-loser';

    let text = document.createTextNode(`Loser`);
    back.appendChild(text);
    text.className = 'text';

}