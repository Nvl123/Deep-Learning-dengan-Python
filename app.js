(function () {
  const data = window.BOOK_CONTENT;
  if (!data || !data.chapters) return;

  const chapterList = document.querySelector("#chapter-list");
  const chapterCount = document.querySelector("#chapter-count");

  chapterCount.textContent = `${data.chapters.length} bab · ${data.chapters.filter(chapter => chapter.sections.length).length} tersedia`;

  data.chapters.forEach((chapter) => {
    const link = document.createElement("a");
    const isAvailable = chapter.sections.length > 0;
    link.className = `chapter-item${isAvailable ? "" : " is-disabled"}`;
    link.href = isAvailable ? `baca.html?bab=${chapter.id}` : "#daftar-bab";
    link.innerHTML = `
      <span class="chapter-index">${chapter.number}</span>
      <div><h3>${chapter.title}</h3><p>${chapter.summary} · ${chapter.status}</p></div>
      <span class="chapter-arrow" aria-hidden="true">→</span>`;
    chapterList.appendChild(link);
  });
})();
