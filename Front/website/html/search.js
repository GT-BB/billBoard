const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.state.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('search.json');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
                <div class="col-lg-4 py-3">
                    <div class="card-blog">
                    <div class="body">
                        <h5 class="post-title" id="d-price-4">$ ${character.price}</h5>
                        <div class = "post-description">
                        <p id="d-procedure-4">Procedure: ${character.name}</p>
                        <p id="d-location-4">Location: ${character.state}</p>
                        <p id="d-age-4">Age: ${character.age}</p>
                        <p id="d-gender-4">Gender: ${character.gender}</p>
                        </div>
                    </div>
                    </div>
                </div>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
