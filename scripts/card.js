const initialCards = [
  {
    name: "SOME DAZE",
    release: "January 1st, 2022",
    soundcloud: "https://soundcloud.com/maytrax/some-daze",
    spotify: "https://open.spotify.com/track/3dpR0s4GOitveeIS0Lms5v?si=7ed8973408664d37",
    youtube: "https://youtu.be/D5CDTO14po0",
    image: "./images/somedaze.jpeg"
  },
  {
    name: "DRiP DRiP",
    release: "March 11th, 2022",
    soundcloud: "https://soundcloud.com/maytrax/drip-drip",
    spotify: "https://open.spotify.com/track/1uiIMo9hS3W133kN8vpPgP?si=f1899536c8974a63",
    youtube: "https://www.youtube.com/watch?v=s19Bb9KZ_OM",
    image: "./images/dripdrip.png"
  },
  {
    name: "RAGER IN THE GRAVE",
    release: "June 5th, 2022",
    soundcloud: "https://soundcloud.com/maytrax/rager-in-the-grave-freestyle",
    spotify: "https://open.spotify.com/track/1uiIMo9hS3W133kN8vpPgP?si=f1899536c8974a63",
    youtube: "https://www.youtube.com/watch?v=UAtdOHf8Vog",
    image: "./images/rager.png"
  },
  {
    name: "SLVR SURFER",
    release: "July 5th, 2022",
    soundcloud: "https://soundcloud.com/maytrax/slvr-surfer",
    spotify: "https://open.spotify.com/album/7AgdpR3ievOolUcHsOzHdg?si=XxkxLPAwQI-mX9PippWCtA",
    youtube: "https://youtu.be/A4Ks_XceN24",
    image: "./images/slvr.png"
  },
  {
    name: "GRIPPY SOCKS",
    release: "July 7th, 2022",
    soundcloud: "https://soundcloud.com/maytrax/grippy-socks",
    spotify: "https://open.spotify.com/track/1XROZ9XZUDDPX8MPEtB9kL?si=3977cb802c7244a2",
    youtube: "https://www.youtube.com/watch?v=9ezXL2W85hU",
    image: "./images/grippy.jpg"
  },
  {
    name: "LOST IN THE SAUCE",
    release: "August 12th, 2022",
    soundcloud: "https://soundcloud.com/maytrax/lost-in-the-sauce",
    spotify: "https://open.spotify.com/track/6vb3qR4lhILpMwH7VAE7Py?si=9e347ad6aa0147bc",
    youtube: "https://www.youtube.com/watch?v=5Ddd46dJSgI",
    image: "https://s3.amazonaws.com/gather.fandalism.com/3000x3000-1221792--D2F9A4FA-8A7F-40C0-86D942AB29266162--0--224494--LOSTINTHESAUCE.jpg"
  },
  {
    name: "NO LUV (hARTbreak)",
    release: "August 12th, 2022",
    soundcloud: "https://soundcloud.com/maytrax/noluvhartbreak",
    spotify: "https://open.spotify.com/track/3c6qa9RLv1EO9HTFTvjUXY?si=0aa532d03db94283",
    youtube: "https://www.youtube.com/watch?v=US_--MA9-Ho",
    image: "https://s3.amazonaws.com/gather.fandalism.com/3000x3000-1221792--59618420-BA64-4215-92880089D680156A--0--215138--NoLUVhARTbreak70.jpg"
  }
  /*
  {
    name:
    release:
    soundcloud:
    spotify:
    youtube:
    image:
  },
  */
];

const cardTemplate = document.querySelector("#card").content;
const cards = document.querySelector(".cards");

function createCard(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardElementImage = cardElement.querySelector(".card__image");
  const cardElementHeader = cardElement.querySelector(".card__title");
  const cardElementRelease = cardElement.querySelector(".card__desc");
  const cardElementSoundcloud = cardElement.querySelector(".card__link_soundcloud");
  const cardElementSpotify = cardElement.querySelector(".card__link_spotify");
  const cardElementYoutube = cardElement.querySelector(".card__link_youtube");
  const cardTitle = data.name;
  const cardImage = data.image;
  const cardRelease = data.release;
  const cardSoundcloud = data.soundcloud;
  const cardSpotify = data.spotify;
  const cardYoutube = data.youtube;
  cardElementHeader.textContent = cardTitle;
  cardElementRelease.textContent = `Released: ${ cardRelease}`;
  cardElementSoundcloud.setAttribute("href", cardSoundcloud);
  cardElementSpotify.setAttribute("href", cardSpotify);
  cardElementYoutube.setAttribute("href", cardYoutube);
  cardElementImage.setAttribute("src", cardImage);
  cardElementImage.setAttribute("alt",`Single Cover for ${cardTitle}`);
  return cardElement;
}

function renderCard(card) {
  cards.prepend(card);
}

initialCards.forEach(element => renderCard(createCard(element)));