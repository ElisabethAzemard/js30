document.addEventListener('DOMContentLoaded', () => {

  // fetch the data
  const asyncFetch = async () => {

  const rawData = await fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json", {
    method: "GET"
  });

  if( !rawData.ok ){
    console.error("No data");
  }else{
    const jsonData = await rawData.json();
    places.push(...jsonData);
  }

  }

  // store the data
  const places = [];
  asyncFetch();

  // find matches
  function findMatches(query, places) {
    return places.filter(place => {
      const regexp = new RegExp(query, 'gi');
      return place.city.match(regexp) || place.state.match(regexp);
    });
  }

  // add commas to population numbers
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // display matches
  function displayMatches(){
    const matches = findMatches(this.value, places);
    const itemText = matches.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const placeName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const placeState = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `<li>
              <span class="name">${placeName}, ${placeState}</span>
              <span class="population">${numberWithCommas(place.population)}</span>
            </li>`;
    }).join('');
    results.innerHTML = itemText;
  }

  const searchInput = document.querySelector('.search');
  const results = document.querySelector('.suggestions');

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);

});
