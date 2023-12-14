
const input = document.getElementById("searchInput")
input.addEventListener("input", (event) => {
    document.getElementById("card-list").innerHTML = '';
    search(event.target.value)
})

const search = (text) => {
    fetch(`https://www.fruityvice.com/api/fruit/${text}`)
        .then(response => response.json())
        .then(data => {
            if (data.lengh == 0) {
                document.getElementById("card-list").innerHTML = 'Nieko nerasta';
                return;
            }
            data.result.drawCard(data);
        })

}

const drawCard = (fruit) => {
    const article = document.createElement('article');
    article.className = "col";

    const div1 = document.createElement('div');
    div1.className = "recipes row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4";

    const ul = document.createElement('ul');
    ul.className = "mainDescripcion card-text p-4";
    ul.textContent = "name";

    const li1 = document.createElement('li');
    li1.className = "d-flex";
    li1.textContent = name;

    const li2 = document.createElement('li');
    li2.className = "d-flex";
    li2.textContent = id;

    const li3 = document.createElement('li');
    li3.className = "d-flex";
    li3.textContent = family;

    const li4 = document.createElement('li');
    li4.className = "d-flex";
    li4.textContent = order;

    const li5 = document.createElement('li');
    li5.className = "d-flex";
    li5.textContent = genus;

    const ul2 = document.createElement('ul');
    ul2.className = "nutritions card-text p-4";
    ul2.textContent = "nutritions";

    const li6 = document.createElement('li');
    li6.className = "d-inline-flex";
    li6.textContent = calories;

    const li7 = document.createElement('li');
    li7.className = "d-inline-flex";
    li7.textContent = fat;

    const li8 = document.createElement('li');
    li8.className = "d-inline-flex";
    li8.textContent = sugar;

    const li9 = document.createElement('li');
    li9.className = "d-inline-flex";
    li9.textContent = carbohydrates;

    const li10 = document.createElement('li');
    li10.className = "d-inline-flex";
    li10.textContent = protein;


    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    ul.appendChild(li5)
    ul2.appendChild(li6)
    ul2.appendChild(li7)
    ul2.appendChild(li8)
    ul2.appendChild(li9)
    ul2.appendChild(li10)
    div1.appendChild(ul)
    div1.appendChild(ul2)
    article.appendChild(div1)

    let cardList = document.getElementById("card-list");
    jokesContainer.appendChild(article);
}

//all


document.getElementById('allFruits').addEventListener('click', (event) => {
    fetch(`https://www.fruityvice.com/api/fruit/all`)
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
          drawCard(element);
      });
  })
})