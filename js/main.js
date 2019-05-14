const noticeBtn = document.querySelector('#notice'),
    creditsBtn = document.querySelector('#credits'),
    subMenu = document.querySelector('.submenu'),
    notice = document.querySelector('.notice'),
    credits = document.querySelector('.credits');

const ON_CN = 'on';

function creditsShow(){
    const status= subMenu.classList.contains(ON_CN);
    const noticeStatus= credits.classList.contains(ON_CN);
    if(!status && !noticeStatus){
        credits.classList.add(ON_CN);
        subMenu.classList.add(ON_CN);
    } else if(status && noticeStatus){
        credits.classList.remove(ON_CN);
        subMenu.classList.remove(ON_CN);
    } else if(status && !noticeStatus){
        credits.classList.add(ON_CN);
    }

    
}

function creaditsClick(){
    creditsBtn.addEventListener('click',creditsShow)
}

function noticeShow(){
    const status= subMenu.classList.contains(ON_CN);
    const noticeStatus= notice.classList.contains(ON_CN);
    if(!status && !noticeStatus){
        notice.classList.add(ON_CN);
        subMenu.classList.add(ON_CN);
    } else if(status && noticeStatus){
        notice.classList.remove(ON_CN);
        subMenu.classList.remove(ON_CN);
    } else if(status && !noticeStatus){
        notice.classList.add(ON_CN);
    }
}

function noticeClick(){
    noticeBtn.addEventListener('click',noticeShow)
}

noticeClick();
creaditsClick();