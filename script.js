// Snowfall effect
const bground = document.querySelector(".Bground");

for (let i = 0; i < 200; i++) {
    bground.insertAdjacentHTML("afterbegin", '<div class="snow"></div>');
}

document.getElementById('addLayerButton').addEventListener('click', function() {
    // 새로운 중간트리 생성
    const newLayer = document.createElement('img');
    newLayer.src = 'img/M.png';
    newLayer.className = 'M';
    const treeContainer = document.getElementById('treeContainer');
    const topTree = document.getElementById('topTree');

    // 기존 중간트리 레이어의 위치 가져옴
    const allMLayers = treeContainer.querySelectorAll('.M');
    const firstMLayer = allMLayers[0]; // 첫 번째 M 레이어
    const firstMTop = parseFloat(window.getComputedStyle(firstMLayer).top);

    // 새로운 레이어의 위치를 첫 번째 중간트리 레이어 위로 설정
    newLayer.style.top = `${firstMTop - 90}px`;

    // 새로운 레이어를 첫 번째 중간트리 레이어 앞에 추가
    treeContainer.insertBefore(newLayer, firstMLayer);

    // 위 트리 이미지 이동
    const latestM = treeContainer.querySelectorAll('.M')[0];
    topTree.style.top = `${parseFloat(latestM.style.top) - 140}px`;

});
