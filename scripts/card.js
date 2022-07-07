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