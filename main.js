const body = document.querySelector('body');
const menuDiv = document.createElement('div');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';

const htmlContent = `<img class="x-menu" src="images/Icon-Cancel.svg"  alt="cancel image"></img>
      <ul class="menu-list-item">
        <li class="about"><a class="menu-list-items" href="./about.html">About</a></li>
        <li class="programm"><a class="menu-list-items" href="./">Home</a></li>
        <li class="join"><a class="menu-list-items" href="#join">Join</a></li>
        <li class="sponsor"><a class="menu-list-items" href="#partners">Sponsor</a></li>
        <li class="news"><a class="menu-list-items" href="#guest">Guest</a></li>
        <li class="namm-2020"><a class="menu-list-items" href="#namm-2020-news">NAMM 2020</a></li>
      </ul>`;

menuDiv.innerHTML = htmlContent;
body.appendChild(menuDiv);
const cancelImage = menuDiv.querySelector('img');
cancelImage.className = 'x-menu';
cancelImage.src = 'images/Icon-Cancel.svg';
cancelImage.alt = 'cancel image';

const menuIcon = document.querySelector('.toggle-btn');
menuIcon.addEventListener('click', () => {
  menuDiv.style.display = 'flex';
  document.getElementById('header').style.filter = 'blur(0.3125rem)';
});

cancelImage.addEventListener('click', () => {
  menuDiv.style.display = 'none';
  document.getElementById('header').style.filter = 'none';
});

const itemLists = document.querySelectorAll('.menu-list-items');
itemLists.forEach((item) => {
  item.addEventListener('click', () => {
    menuDiv.style.display = 'none';
    document.getElementById('header').style.filter = 'none';
  });
});

const featuredSpeakers = [

  {
    image: './images/speakers/speaker1.jpeg',
    name: 'Yochai',
    speakerInfo: 'Berkman Professor of Entrepreneurial Lgal Studies at Harvard LawSchool',
    // breakLine: '',
    description: 'Benkler studies commons-based peer production, and published his seminial book The Wealth of Networkds in 2006.',
  },

  {
    image: './images/speakers/speaker2.jpeg',
    name: 'Yochai Benkler',
    speakerInfo: 'Director of Art Center Nabi and a board member of CC Korea',
    // breakLine: '',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among scient technology, humanities, and the arts.',
  },

  {
    image: './images/speakers/speaker3.jpeg',
    name: 'Ryan Merkley',
    speakerInfo: 'CEO of Create Commons, ex COO of the Mozilla Foundation',
    // breakLine: '',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },

  {
    image: './images/speakers/speaker4.jpeg',
    name: 'Julia Leda',
    speakerInfo: 'President of Young Pirates of Europe',
    // breakLine: '',
    description: 'Europen ingetration, political democray and participation of youth through online as her major condem, Reda\'s report outlining potential changes to EU copyright law was approved by the Parliament in July.',
  },

  {
    image: './images/speakers/speaker5.jpeg',
    name: 'Lila Tretikov',
    speakerInfo: 'Executive Director of the Wikimedia Foundation',
    // breakLine: '',
    description: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 language and used by nearly half a billion people around the world every month.',
  },

  {
    image: './images/speakers/speaker6.jpeg',
    name: 'Kilnam Chon',
    speakerInfo: 'President of Dallas group of Designers',
    // breakLine: '',
    description: 'Europen ingetration, political democray and participation of youth through online as her major condem, Reda\'s report outlining potential changes to EU copyright law was approved by the Parliament in July.',
  },

];

const speakerProfile = document.querySelector('.fs-container-grid');

function createSpeaker(item) {
  return `<li class="fs-frames-2">
            <div class="speaker-profile">
            <div class="image-wrapper">
                <img class="speaker-image" src="${item.image}" alt="">
              </div>
              <div class="speaker-contents">
                <h6 class="speaker-name fw-bold">${item.name}</h6>
                <p class="speaker-info color-2">
                  <i>${item.speakerInfo}</i>
                </p>
                <div class="break-line"></div>
                <p class="speaker-description">${item.description}</p>
              </div>
            </div>
          </li> `;
}

speakerProfile.innerHTML = featuredSpeakers.map((item) => createSpeaker(item)).join('');
