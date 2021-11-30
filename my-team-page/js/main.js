class Member{
    constructor(name,position,img){
        this.name = name;
        this.position = position;
        this.img = img;
    }
}

const team = [
    new Member('Bill Mahoney', 'PRODUCT OWNER', 'bill-mahoney.png'),
    new Member('Saba Cabrera', 'ART DIRECTOR', 'saba-cabrera.png'),
    new Member('Shae Le', 'TECH LEAD', 'shae-le.png'),
    new Member('Skylah Lu', 'UX DESIGNER', 'skylah-lu.png'),
    new Member('Griff Richards', 'DEVELOPER', 'griff-richards.png'),
    new Member('Satn John', 'DEVELOPER', 'satn-john.png'),
];

const init = (selector)=>{
    document.querySelector('body').classList.add('init');

    const teamContainer = document.querySelector(selector);
    
    team.forEach(({name,position,img:imagenMember}, index) => {

        const memberDiv = document.createElement('div');
        memberDiv.classList.add('member');

        const imageDivHTML = document.createElement('div');
        const imageHTML = document.createElement('img');
        const nameHTML = document.createElement('name');
        const positionHTML = document.createElement('position');

        imageHTML.setAttribute('src', `img/${imagenMember}`);
        imageDivHTML.classList.add('img');
        nameHTML.innerText = name;
        nameHTML.classList.add('name');
        positionHTML.innerText = position;
        positionHTML.classList.add('job-position');

        imageDivHTML.append(imageHTML);
        memberDiv.append(positionHTML,imageDivHTML,nameHTML);       
        teamContainer.append(memberDiv);
    });
}


