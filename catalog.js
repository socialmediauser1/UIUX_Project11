const catalogCards = [
  {
    id: 1,
    title: "Bespoke Suits",
    description: "Tailored to perfection with premium wool, linen, or cashmere.",
    imageUrl: "catalog1.png"
  },
  {
    id: 2,
    title: "Custom Shirts",
    description: "Crafted for an impeccable fit, available in fine cotton and silk blends.",
    imageUrl: "catalog2.png"
  },
  {
    id: 3,
    title: "Tailored Jackets & Coats",
    description: "Designed for warmth and sophistication.",
    imageUrl: "catalog3.png"
  },
  {
    id: 4,
    title: "Formal & Business Wear",
    description: "Elevate your professional and evening look.",
    imageUrl: "catalog4.png"
  },
  {
    id: 5,
    title: "Elegant Dresses & Gowns",
    description: "Handcrafted with exquisite fabrics and detailing.",
    imageUrl: "catalog5.png"
  },
  {
    id: 6,
    title: "Tailored Blouses & Shirts",
    description: "Designed for both professional and casual elegance.",
    imageUrl: "catalog6.png"
  },
  {
    id: 7,
    title: "Custom Outerwear",
    description: "Chic, comfortable, and made to fit perfectly.",
    imageUrl: "catalog7.png"
  },
  {
    id: 8,
    title: "Linen & Casual Wear",
    description: "Lightweight and breathable, ideal for everyday fashion.",
    imageUrl: "catalog8.png"
  },
  {
    id: 9,
    title: "Luxury Handwoven Dresses",
    description: "Unique, artisan-crafted garments with intricate detailing.",
    imageUrl: "catalog9.png"
  },
  {
    id: 10,
    title: "Embroidered Jackets",
    description: "Custom embroidery and hand-stitched precision.",
    imageUrl: "catalog10.png"
  },
  {
    id: 11,
    title: "Premium Trousers & Skirts",
    description: "Made with high-quality fabric and tailored to your measurements.",
    imageUrl: "catalog11.png"
  },
  {
    id: 12,
    title: "Bridal & Occasion Wear",
    description: "Custom wedding gowns, bridesmaid dresses, and formal suits.",
    imageUrl: "catalog12.png"
  }
];

function renderCatalogCards(cards) {
  const container = document.querySelector('.blog-container');

  cards.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('blog-card');

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('blog-img');
    const img = document.createElement('img');
    img.src = card.imageUrl;
    img.alt = card.title;
    imgDiv.appendChild(img);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('blog-content');

    const title = document.createElement('h3');
    title.classList.add('blog-title');
    title.textContent = card.title;

    const description = document.createElement('p');
    description.textContent = card.description;

    const button = document.createElement('button');
    button.classList.add('blog-button');
    button.textContent = 'Explore';

    contentDiv.appendChild(title);
    contentDiv.appendChild(description);
    contentDiv.appendChild(button);

    cardDiv.appendChild(imgDiv);
    cardDiv.appendChild(contentDiv);

    cardDiv.addEventListener('click', () => {
      cardDiv.classList.toggle('highlight');
      console.log(`Card with ID ${card.id} clicked!`);
    });

    container.appendChild(cardDiv);
  });
}

renderCatalogCards(catalogCards);

const totalTitleCharacters = catalogCards.reduce((total, card) => total + card.title.length, 0);
console.log(`Total number of characters in all card titles: ${totalTitleCharacters}`);

const sortedCards = [...catalogCards].sort((a, b) => a.title.localeCompare(b.title));
console.log('Cards sorted alphabetically by title:', sortedCards);

const filteredCards = catalogCards.filter(card => card.description.includes("Tailored"));
console.log('Cards with "Tailored" in the description:', filteredCards);

const cardTitles = catalogCards.map(card => card.title);
console.log('Array of card titles:', cardTitles);

export default catalogCards;