//script.js
const bground = document.querySelector(".Bground")

for(let i = 0; i < 200; i++){
    bground.insertAdjacentHTML("afterbegin",'<div class="snow"></div>')
}

document.getElementById('addLayerButton').addEventListener('click', function() {
    // 새로운 M.png 요소를 생성합니다.
    const newLayer = document.createElement('img');
    newLayer.src = 'img/M.png';
    newLayer.className = 'M';

    // 마지막 M 요소의 아래에 추가합니다.
    const treeContainer = document.getElementById('treeContainer');
    const lastM = treeContainer.querySelectorAll('.M');
    const lastMElement = lastM[lastM.length - 1];
    const newTop = parseFloat(lastMElement.style.top) + 5; // Adjust the value as needed

    newLayer.style.top = `${newTop}%`;

    treeContainer.insertBefore(newLayer, treeContainer.querySelector('.B'));
});


