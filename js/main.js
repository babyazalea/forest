const noticeBtn = document.querySelector('#notice'),
    creditsBtn = document.querySelector('#credits'),
    subMenu = document.querySelector('.submenu'),
    notice = document.querySelector('.notice'),
    credits = document.querySelector('.credits'),
    noticeCheck = noticeBtn.querySelector('i'),
    creditsCheck = creditsBtn.querySelector('i');


const ON_CN = 'on';
const CHECKED_CN = 'checked';

function creditsShow(){
    const suBstatus= subMenu.classList.contains(ON_CN);
    const creditsStatus= credits.classList.contains(ON_CN);
    const noticeStatus= notice.classList.contains(ON_CN);
    if(!suBstatus && !creditsStatus){
        credits.classList.add(ON_CN);
        subMenu.classList.add(ON_CN);
    } else if(suBstatus && creditsStatus){
        credits.classList.remove(ON_CN);
        subMenu.classList.remove(ON_CN);
    } else if(suBstatus && noticeStatus){
        credits.classList.add(ON_CN);
        notice.classList.remove(ON_CN);
    };

    creditsCheck.classList.toggle(CHECKED_CN);
    noticeCheck.classList.remove(CHECKED_CN);
}

function creaditsClick(){
    creditsBtn.addEventListener('click',creditsShow);
}

function noticeShow(){
    const suBstatus= subMenu.classList.contains(ON_CN);
    const creditsStatus= credits.classList.contains(ON_CN);
    const noticeStatus= notice.classList.contains(ON_CN);
    if(!suBstatus && !noticeStatus){
        notice.classList.add(ON_CN);
        subMenu.classList.add(ON_CN);
    } else if(suBstatus && noticeStatus){
        notice.classList.remove(ON_CN);
        subMenu.classList.remove(ON_CN);
    } else if(suBstatus && creditsStatus){
        notice.classList.add(ON_CN);
        credits.classList.remove(ON_CN);
    };

    noticeCheck.classList.toggle(CHECKED_CN);
    creditsCheck.classList.remove(CHECKED_CN);
}

function noticeClick(){
    noticeBtn.addEventListener('click',noticeShow);
}

noticeClick();
creaditsClick();