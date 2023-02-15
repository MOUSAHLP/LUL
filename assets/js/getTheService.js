function selectCity(city){
    let selectedCity = city.innerHTML;
    console.log(selectedCity);
    let father = city.parentElement.parentElement.children[0];
    father.innerHTML = selectedCity;
    console.log(city);
}
