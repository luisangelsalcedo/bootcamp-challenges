class menuItem{
    constructor(label,url,attr=''){
        this.label = label;
        this.url = url;
        this.attr = attr;
    }
}

const mainMenu = [
    new menuItem('Home','index.html','home'),
    new menuItem('About','#','about'),
    new menuItem('Features','#','features'),
    new menuItem('Pricing','#','pricing'),
    new menuItem('Contac us','#','contac'),
    new menuItem('<i class="fa fa-search" aria-hidden="true"></i>','#'),
];

const createMainMenu = ()=>{
    const navHTML = document.querySelector('nav[role="navigator"] .container');
    const menu = document.createElement('ul');

    mainMenu.forEach(({label,url,attr})=>{        
        const itemMenu = document.createElement('li');
        itemMenu.innerHTML = `<a href="${url}" data-active="${attr}">${label}</a>`;
        
        // itemMenu.addEventListener('click', (event)=>{});
        menu.append(itemMenu);
    })
    navHTML.append(menu);
}
createMainMenu();