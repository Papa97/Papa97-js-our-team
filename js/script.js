const persone = [
    {
        immagine: 'img/wayne-barnett-founder-ceo.jpg',
        nome :'Wayne Barnet' ,
        ruolo: 'Founder & CEO',
    },
    {
        immagine: 'img/angela-caroll-chief-editor.jpg',
        nome : 'Angela Caroll',
        ruolo: 'Chief Editor',
    },
    {
        immagine: 'img/walter-gordon-office-manager.jpg' ,
        nome :'Walter Gordon' ,
        ruolo:'Office Manager' ,
    },
    {
        immagine: 'img/angela-lopez-social-media-manager.jpg' ,
        nome : 'Angela Lopez',
        ruolo: 'Social Media Manager' ,
    },
    {
        immagine: 'img/scott-estrada-developer.jpg' ,
        nome : 'Scott Estrada' ,
        ruolo: 'Developer' ,
    },
    {
        immagine: 'img/barbara-ramos-graphic-designer.jpg' ,
        nome : 'Barbara Ramos' ,
        ruolo: 'Graphic Designer' ,
    },
];

console.log(persone);


const container = document.querySelector('.team-container');
console.log(container, 'questo e il container');


for (let i = 0 ; i < persone.length ; i++){

    // console.log(i + 1);
    let div = document.createElement('div');
    div.classList.add('team-card');;
    container.appendChild(div);
    const teamCard = document.getElementsByClassName('team-card');

    // creo un div da mettere dentro il div della card
    let divImage = document.createElement('div');
    divImage.classList.add('card-image');



    const cardImmagine = teamCard[i].appendChild(divImage);

    cardImmagine.innerHTML = `
    <img src="${persone[i].immagine}"
         alt="${persone[i].nome}"
    />
    `;

    let divTxt = document.createElement('div');
    divTxt.classList.add('card-text');

    teamCard[i].appendChild(divTxt);
    
    console.log(persone[i].immagine);

    const cardText = document.getElementsByClassName('card-text');


    let hName = document.createElement('h3');
    let pName = document.createElement('p');
    cardText[i].appendChild(hName);
    cardText[i].appendChild(pName);


}