(function () {
  const data = window.BOOK_CONTENT;
  if (!data || !data.chapters) return;

  const chapterList = document.querySelector("#chapter-list");
  const chapterCount = document.querySelector("#chapter-count");
  const reader = document.querySelector("#chapter-content");
  const subnav = document.querySelector("#subchapter-nav");

  chapterCount.textContent = `${data.chapters.length} bab · ${data.chapters.filter(chapter => chapter.sections.length).length} tersedia`;

  data.chapters.forEach((chapter) => {
    const link = document.createElement("a");
    link.className = `chapter-item${chapter.sections.length ? "" : " is-disabled"}`;
    link.href = chapter.sections.length ? `#${chapter.id}` : "#daftar-bab";
    link.innerHTML = `
      <span class="chapter-index">${chapter.number}</span>
      <div><h3>${chapter.title}</h3><p>${chapter.summary} · ${chapter.status}</p></div>
      <span class="chapter-arrow" aria-hidden="true">→</span>`;
    if (chapter.sections.length) link.addEventListener("click", () => renderChapter(chapter));
    chapterList.appendChild(link);
  });

  function renderChapter(chapter) {
    subnav.innerHTML = chapter.sections.map(section => `<a href="#${section.id}">${section.title}</a>`).join("");
    reader.innerHTML = `
      <header id="${chapter.id}">
        <span class="chapter-kicker">Bab ${chapter.number}</span>
        <h2>${chapter.title}</h2>
        <p class="chapter-summary">${chapter.summary}</p>
      </header>
      ${chapter.sections.map(section => `
        <section class="subchapter" id="${section.id}">
          <h3>${section.title}</h3>
          ${section.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
          ${section.points ? `<ul class="key-points">${section.points.map(point => `<li>${point}</li>`).join("")}</ul>` : ""}
        </section>`).join("")}
      ${chapter.notebook ? `
        <section class="practice-card">
          <p class="eyebrow">Saatnya mencoba</p>
          <h3>Latihan Jupyter Bab ${chapter.number}</h3>
          <p>Buka notebook untuk menguji pemahaman melalui latihan singkat.</p>
          <a class="button" href="${chapter.notebook}" download>Unduh notebook .ipynb →</a>
        </section>` : `
        <section class="practice-card no-notebook">
          <p class="eyebrow">Latihan bab</p>
          <h3>Tidak ada notebook untuk bab ini</h3>
          <p>${chapter.practiceNote || "Bab ini berfokus pada pemahaman konsep dan tidak memerlukan latihan Jupyter."}</p>
        </section>`}`;
  }

  renderChapter(data.chapters.find(chapter => chapter.sections.length));
})();
