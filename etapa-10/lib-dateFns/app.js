const divContainer = document.querySelector(".container");

const dateInFormats = () => {
  const present = new Date();
  const past = new Date("Sep 11 2020 13:00:00");
  const year = dateFns.format(present, "MMMM");
  const yearFormat = dateFns.format(present, "YY");
  const day = dateFns.format(present, "dddd");
  const dayFormat = dateFns.format(present, "Do");
  const dateFormat = dateFns.format(present, "DD/MM/YYYY");

  const difference = dateFns.distanceInWords(present, past, {addSuffix: true,});
  const showDateOnScreen = `
    <p>${year}</p>
    <p>${yearFormat}</p>
    <p>${day}</p>
    <p>${dayFormat}</p>
    <p>${dateFormat}</p>
    <p>${difference}</p>`;
  divContainer.innerHTML = showDateOnScreen;
};

dateInFormats()
