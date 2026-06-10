(function () {
  const listEl = document.querySelector("[data-itinerary]");
  if (!listEl) return;

  let openDay = 1;

  function render() {
    listEl.innerHTML = itinerary
      .map((it) => {
        const isOpen = openDay === it.day;
        return `
          <div class="itinerary__item${isOpen ? " open" : ""}" data-day="${it.day}">
            <span class="itinerary__day">${it.day}</span>
            <button type="button" class="itinerary__toggle" aria-expanded="${isOpen}">
              <div>
                <div class="itinerary__label">Day ${it.day}</div>
                <div class="itinerary__name">${it.title}</div>
              </div>
              <svg class="itinerary__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="itinerary__body">
              <div class="itinerary__body-inner">
                <p>${it.desc}</p>
              </div>
            </div>
          </div>`;
      })
      .join("");

    listEl.querySelectorAll(".itinerary__toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const day = Number(btn.closest("[data-day]").dataset.day);
        openDay = openDay === day ? null : day;
        render();
      });
    });
  }

  render();
})();
