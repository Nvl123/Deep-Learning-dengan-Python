(function () {
  const data = window.BOOK_CONTENT;
  if (!data || !data.chapters) return;

  // DOM Elements
  const chaptersNav = document.getElementById("chapters-nav");
  const subchaptersNav = document.getElementById("subchapters-nav");
  const subchaptersGroup = document.getElementById("subchapters-group");
  const chapterContent = document.getElementById("chapter-content");
  const chapterNavigation = document.getElementById("chapter-navigation");
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const readerSidebar = document.getElementById("reader-sidebar");

  // Get available chapters
  const availableChapters = data.chapters.filter(ch => ch.sections && ch.sections.length > 0);

  // Mobile sidebar toggle
  if (sidebarToggle && readerSidebar) {
    sidebarToggle.addEventListener("click", () => {
      const isOpen = readerSidebar.classList.toggle("is-open");
      sidebarToggle.setAttribute("aria-expanded", isOpen);
      sidebarToggle.textContent = isOpen ? "Tutup Navigasi" : "Menu Navigasi";
    });

    // Close sidebar when clicking a link on mobile
    readerSidebar.addEventListener("click", (e) => {
      if (e.target.tagName === "A" && window.innerWidth <= 800) {
        readerSidebar.classList.remove("is-open");
        sidebarToggle.setAttribute("aria-expanded", "false");
        sidebarToggle.textContent = "Menu Navigasi";
      }
    });
  }

  // Helper to check if a string is a block-level HTML element
  function isBlockHtml(str) {
    const trimmed = str.trim();
    if (!trimmed.startsWith("<")) return false;
    const inlineTags = ["<a", "<strong", "<em", "<span", "<code", "<b", "<i", "<u"];
    const isInline = inlineTags.some(tag => trimmed.toLowerCase().startsWith(tag));
    return !isInline;
  }

  // Format inline styling (bold, italic, and glossary)
  function formatText(text) {
    if (typeof text !== "string") return text;
    let formatted = text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/__(.*?)__/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/_(.*?)_/g, "<em>$1</em>");

    // Parse glossary [kata|arti]
    formatted = formatted.replace(/\[([^\]|]+)\|([^\]]+)\]/g, (match, term, definition) => {
      return `<span class="glossary-term" tabindex="0" role="button" data-definition="${definition.trim()}">${term.trim()}</span>`;
    });

    return formatted;
  }

  // Render paragraphs and handle blockquotes/formatting
  function renderParagraph(paragraph) {
    if (isBlockHtml(paragraph)) {
      return paragraph;
    }
    const trimmed = paragraph.trim();
    if (trimmed.startsWith(">")) {
      const quoteContent = trimmed.substring(1).trim();
      return `<blockquote><p>${formatText(quoteContent)}</p></blockquote>`;
    }
    return `<p>${formatText(paragraph)}</p>`;
  }

  // Load and render active chapter
  function loadChapter() {
    const urlParams = new URLSearchParams(window.location.search);
    const chapterId = urlParams.get("bab");

    // Find requested chapter, fallback to first available
    let activeChapter = data.chapters.find(ch => ch.id === chapterId && ch.sections.length > 0);
    if (!activeChapter) {
      activeChapter = availableChapters[0];
      // Update URL search parameters without page reload if it wasn't specified or invalid
      if (activeChapter) {
        const newUrl = `${window.location.pathname}?bab=${activeChapter.id}${window.location.hash}`;
        window.history.replaceState(null, "", newUrl);
      }
    }

    if (!activeChapter) {
      chapterContent.innerHTML = "<p class='error-text'>Tidak ada bab yang tersedia untuk dibaca.</p>";
      return;
    }

    // Set page title
    document.title = `${activeChapter.title} — Deep Learning dengan Python`;

    // Render components
    renderChaptersSidebarList(activeChapter.id);
    renderSubchaptersList(activeChapter);
    renderContent(activeChapter);
    renderNavigationButtons(activeChapter);

    // Scroll to top of content, or to hash if present
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Render chapters in the sidebar
  function renderChaptersSidebarList(activeId) {
    chaptersNav.innerHTML = "";
    data.chapters.forEach((chapter) => {
      const isAvailable = chapter.sections && chapter.sections.length > 0;
      const item = document.createElement("a");
      item.className = `sidebar-nav-item${isAvailable ? "" : " is-disabled"}${chapter.id === activeId ? " is-active" : ""}`;
      
      if (isAvailable) {
        item.href = `?bab=${chapter.id}`;
        item.addEventListener("click", (e) => {
          e.preventDefault();
          navigateToChapter(chapter.id);
        });
      } else {
        item.href = "javascript:void(0)";
      }

      item.innerHTML = `
        <span class="sidebar-nav-num">${chapter.number}</span>
        <div class="sidebar-nav-meta">
          <span class="sidebar-nav-title">${chapter.title}</span>
          ${!isAvailable ? `<span class="sidebar-nav-status">${chapter.status}</span>` : ""}
        </div>
      `;
      chaptersNav.appendChild(item);
    });
  }

  // Render subchapters/sections of the active chapter in the sidebar
  function renderSubchaptersList(chapter) {
    if (!chapter.sections || chapter.sections.length === 0) {
      subchaptersGroup.style.display = "none";
      return;
    }
    subchaptersGroup.style.display = "block";
    subchaptersNav.innerHTML = chapter.sections.map(section => `
      <a class="sidebar-subnav-item" href="#${section.id}" style="text-align: left !important; display: flex !important; align-items: flex-start !important; justify-content: flex-start !important; gap: 8px !important;">
        <span class="subnav-dot" style="flex-shrink: 0 !important; margin-top: 6px !important;"></span>
        <span class="subnav-title" style="text-align: left !important;">${section.title}</span>
      </a>
    `).join("");
  }

  // Render main chapter content
  function renderContent(chapter) {
    chapterContent.innerHTML = `
      <header class="reader-content-header" id="${chapter.id}">
        <span class="chapter-kicker">Bab ${chapter.number}</span>
        <h2>${chapter.title}</h2>
        <p class="chapter-summary">${formatText(chapter.summary)}</p>
      </header>
      ${chapter.sections.map(section => `
        <section class="subchapter" id="${section.id}">
          <h3>${section.title}</h3>
          ${section.paragraphs.map(paragraph => renderParagraph(paragraph)).join("")}
          ${section.points ? `<ul class="key-points">${section.points.map(point => `<li>${formatText(point)}</li>`).join("")}</ul>` : ""}
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

  // Render Prev/Next navigation buttons at the bottom of the article
  function renderNavigationButtons(chapter) {
    const currentIndex = availableChapters.findIndex(ch => ch.id === chapter.id);
    const prevChapter = currentIndex > 0 ? availableChapters[currentIndex - 1] : null;
    const nextChapter = currentIndex < availableChapters.length - 1 ? availableChapters[currentIndex + 1] : null;

    let navHtml = "";

    if (prevChapter) {
      navHtml += `
        <a class="nav-btn prev" href="?bab=${prevChapter.id}" data-id="${prevChapter.id}">
          <span class="nav-label">← Bab Sebelumnya</span>
          <span class="nav-title">Bab ${prevChapter.number}: ${prevChapter.title}</span>
        </a>
      `;
    } else {
      // Empty placeholder to keep next button aligned to the right if there is no prev button
      navHtml += `<div></div>`;
    }

    if (nextChapter) {
      navHtml += `
        <a class="nav-btn next" href="?bab=${nextChapter.id}" data-id="${nextChapter.id}">
          <span class="nav-label">Bab Selanjutnya →</span>
          <span class="nav-title">Bab ${nextChapter.number}: ${nextChapter.title}</span>
        </a>
      `;
    } else {
      navHtml += `<div></div>`;
    }

    chapterNavigation.innerHTML = navHtml;

    // Attach SPA click handlers to navigation buttons
    chapterNavigation.querySelectorAll(".nav-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const nextId = btn.getAttribute("data-id");
        navigateToChapter(nextId);
      });
    });
  }

  // Handle SPA chapter transition
  function navigateToChapter(chapterId) {
    const newUrl = `${window.location.pathname}?bab=${chapterId}`;
    window.history.pushState(null, "", newUrl);
    loadChapter();
  }

  // Handle glossary term clicks & popover rendering
  function initGlossary() {
    // Create popup element if it doesn't exist
    let popup = document.getElementById("glossary-popup");
    if (!popup) {
      popup = document.createElement("div");
      popup.id = "glossary-popup";
      popup.className = "glossary-popup hidden";
      popup.innerHTML = `
        <div class="glossary-popup-content">
          <p id="glossary-popup-text"></p>
          <button id="glossary-popup-close" aria-label="Tutup">&times;</button>
        </div>
      `;
      document.body.appendChild(popup);

      // Close button handler
      popup.querySelector("#glossary-popup-close").addEventListener("click", () => {
        popup.classList.add("hidden");
      });
    }

    // Attach click listeners to all glossary terms via event delegation
    document.addEventListener("click", (e) => {
      const term = e.target.closest(".glossary-term");
      if (term) {
        e.stopPropagation();
        const definition = term.getAttribute("data-definition");
        const termText = term.textContent;

        const popupText = popup.querySelector("#glossary-popup-text");
        popupText.innerHTML = `<strong>${termText}</strong>: ${definition}`;

        // Show popup to calculate dimensions
        popup.classList.remove("hidden");

        // Calculate positions
        const rect = term.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        let left = rect.left + rect.width / 2 - popup.offsetWidth / 2;
        let top = rect.top - popup.offsetHeight - 10; // 10px spacing above term

        // Boundaries checks
        if (left < 10) left = 10;
        if (left + popup.offsetWidth > window.innerWidth - 10) {
          left = window.innerWidth - popup.offsetWidth - 10;
        }

        // If not enough space above (considering sticky header of ~90px), show below
        if (rect.top - popup.offsetHeight < 90) {
          top = rect.bottom + 10;
          popup.classList.add("position-below");
        } else {
          popup.classList.remove("position-below");
        }

        popup.style.left = `${left + scrollLeft}px`;
        popup.style.top = `${top + scrollTop}px`;
      } else if (!e.target.closest("#glossary-popup")) {
        // Clicked outside, close popup
        popup.classList.add("hidden");
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        popup.classList.add("hidden");
      }
    });

    // Close on scroll or resize for better alignment UX
    window.addEventListener("scroll", () => {
      popup.classList.add("hidden");
    }, { passive: true });

    window.addEventListener("resize", () => {
      popup.classList.add("hidden");
    });
  }

  // Handle browser back/forward buttons
  window.addEventListener("popstate", () => {
    loadChapter();
  });

  // Init
  loadChapter();
  initGlossary();
})();
