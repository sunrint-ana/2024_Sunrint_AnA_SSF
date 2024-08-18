const body = document.getElementsByTagName('body')[0];
const grow = document.getElementById('grow');
const giftContainer = document.getElementById('giftContainer');

// 새로운 중간트리 생성
function createNewTree() {
    const newLayer = document.createElement('img');
    newLayer.src = 'img/M.png';
    newLayer.className = 'M';
    
    grow.appendChild(newLayer);

    const scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

    console.log(scrollPos+newLayer.height);
    window.scrollTo(0, scrollPos+newLayer.height);
}

function addGift(type, clickEvent) {
    const gift = document.createElement('img');
    gift.src = "img/"+mapImage(type);
    gift.onclick = clickEvent;
    giftContainer.appendChild(gift);
    if(giftContainer.childElementCount > 3 && giftContainer.childElementCount%3==0) createNewTree();
}

function mapImage(type) {
    switch (type) {
        case 0: return "ball_D.png";
        case 1: return "box_D.png";
        case 2: return "cake_D.png";
        case 3: return "gloves_D.png";
        case 4: return "star_D.png";
        default: return null;
    }
}

function test() {
    for(let i =0; i<50; i++) {
        addGift(Math.floor(Math.random()*5))
    }
}

//test()