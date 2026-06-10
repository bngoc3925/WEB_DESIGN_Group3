(function () {
  const select = document.getElementById("dest-select");
  const grid = document.getElementById("featured-destinations");

  if (select) {
    destinations.forEach((d) => {
      const opt = document.createElement("option");
      opt.value = d.id;
      opt.textContent = `${d.name}, ${d.country}`;
      select.appendChild(opt);
    });
  }

  if (grid) {
    const featured = destinations.slice(0, 4);
    grid.innerHTML = featured
      .map(
        (d) => `
        <article class="card-surface dest-card">
          <div class="img-zoom dest-card__img">
            <img src="${d.image}" alt="${d.name}" loading="lazy">
            <span class="dest-card__price">${formatPrice(d.price)}</span>
          </div>
          <div class="dest-card__body">
            <div class="dest-card__location">
              <svg class="icon--xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              ${d.country}
            </div>
            <h3 class="dest-card__name">${d.name}</h3>
            ${renderStars(d.rating)}
            <a href="tours.html" class="dest-card__link">
              Explore tours
              <svg class="icon--xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </article>`
      )
      .join("");
  }
})();
