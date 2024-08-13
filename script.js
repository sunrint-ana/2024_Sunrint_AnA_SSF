const body = document.getElementsByTagName('body')[0];
const grow = document.getElementById('grow');

document.getElementById('addLayerButton').addEventListener('click', function() {
    // 새로운 중간트리 생성
    const newLayer = document.createElement('img');
    newLayer.src = 'img/M.png';
    newLayer.className = 'M';
    
    grow.appendChild(newLayer);

    const scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

    console.log(scrollPos+newLayer.height);
    window.scrollTo(0, scrollPos+newLayer.height);
});
