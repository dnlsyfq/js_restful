fetch('https://swapi.co/api/people/')
    .then(res => res.json())
    .then(response => console.log(response))
