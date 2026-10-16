const BOOKS = [
  // Study books
  { title: "Concepts of Physics, Vol. 1", author: "H.C. Verma", category: "study", subject: "Physics, JEE, Class 11-12", price: 445, mrp: 545, cover: "#4c7059" },
  { title: "Indian Polity", author: "M. Laxmikanth", category: "study", subject: "UPSC, civil services, government", price: 695, mrp: 895, cover: "#7a4b3a" },
  { title: "Quantitative Aptitude", author: "R.S. Aggarwal", category: "study", subject: "Maths, bank, SSC exams", price: 599, mrp: 795, cover: "#315a45" },
  { title: "High School English Grammar & Composition", author: "Wren & Martin", category: "study", subject: "English, grammar, school", price: 399, mrp: 499, cover: "#b9734f" },
  { title: "Mathematics Textbook, Class 10", author: "NCERT", category: "study", subject: "Maths, CBSE, school", price: 170, mrp: 190, cover: "#d7a67f" },
  { title: "Objective General English", author: "S.P. Bakshi", category: "study", subject: "English, competitive exams", price: 345, mrp: 450, cover: "#56705f" },

  // Storybooks
  { title: "Malgudi Days", author: "R.K. Narayan", category: "story", subject: "Short stories, classic fiction", price: 199, mrp: 250, cover: "#e4cc86" },
  { title: "The God of Small Things", author: "Arundhati Roy", category: "story", subject: "Novel, Booker Prize, Kerala", price: 349, mrp: 450, cover: "#8b5e6b" },
  { title: "The Blue Umbrella", author: "Ruskin Bond", category: "story", subject: "Children, hills, short novel", price: 199, mrp: 199, cover: "#5e7fa0" },
  { title: "Grandma's Bag of Stories", author: "Sudha Murty", category: "story", subject: "Children, family, values", price: 225, mrp: 299, cover: "#c98a5e" },
  { title: "The White Tiger", author: "Aravind Adiga", category: "story", subject: "Novel, Booker Prize, contemporary", price: 299, mrp: 399, cover: "#3e4f45" },
  { title: "Train to Pakistan", author: "Khushwant Singh", category: "story", subject: "Novel, Partition, Punjab", price: 249, mrp: 299, cover: "#9a6a43" },

  // Traditional books
  { title: "Bhagavad Gita As It Is", author: "A.C. Bhaktivedanta Swami Prabhupada", category: "traditional", subject: "Scripture, philosophy, spirituality", price: 280, mrp: 350, cover: "#c4733e" },
  { title: "Ramayana", author: "C. Rajagopalachari", category: "traditional", subject: "Epic, mythology, retelling", price: 240, mrp: 300, cover: "#a65a3a" },
  { title: "Mahabharata", author: "C. Rajagopalachari", category: "traditional", subject: "Epic, mythology, retelling", price: 280, mrp: 350, cover: "#6b4a3a" },
  { title: "Heer Ranjha", author: "Waris Shah", category: "traditional", subject: "Punjabi folk poetry, romance", price: 320, mrp: 400, cover: "#7b8c49" },
  { title: "Panchatantra Stories", author: "Vishnu Sharma", category: "traditional", subject: "Fables, children, moral stories", price: 160, mrp: 200, cover: "#d1a94f" },
  { title: "Jataka Tales", author: "Amar Chitra Katha", category: "traditional", subject: "Buddhist fables, comics, children", price: 360, mrp: 450, cover: "#4f6a7a" },
];

const CATEGORY_LABELS = {
  study: "Study book",
  story: "Storybook",
  traditional: "Traditional",
};

const rupees = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const grid = document.getElementById("book-grid");
const searchInput = document.getElementById("book-search");
const sortSelect = document.getElementById("book-sort");
const resultsCount = document.getElementById("results-count");
const emptyState = document.getElementById("empty-state");
const tabs = document.querySelectorAll(".filter-tab");

let activeFilter = "all";

const discountOf = (book) => Math.round(((book.mrp - book.price) / book.mrp) * 100);

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function renderBook(book) {
  const discount = discountOf(book);
  const offer = discount > 0
    ? `<span class="offer-badge">${discount}% off</span>`
    : "";
  const mrp = discount > 0
    ? `<span class="book-mrp"><span class="visually-hidden">MRP </span>${rupees.format(book.mrp)}</span>`
    : "";

  return `
    <article class="book-card">
      <div class="book-cover" style="--cover: ${book.cover}">
        ${offer}
        <span class="cover-title">${escapeHtml(book.title)}</span>
        <span class="cover-author">${escapeHtml(book.author)}</span>
      </div>
      <div class="book-info">
        <span class="book-category">${CATEGORY_LABELS[book.category]}</span>
        <h3>${escapeHtml(book.title)}</h3>
        <p class="book-author">by ${escapeHtml(book.author)}</p>
        <div class="book-price">
          <span class="book-sale">${rupees.format(book.price)}</span>
          ${mrp}
        </div>
        ${discount > 0 ? `<p class="book-save">You save ${rupees.format(book.mrp - book.price)}</p>` : ""}
      </div>
    </article>`;
}

function render() {
  const query = searchInput.value.trim().toLowerCase();

  let results = BOOKS.filter((book) => {
    if (activeFilter === "offers" && discountOf(book) <= 0) return false;
    if (!["all", "offers"].includes(activeFilter) && book.category !== activeFilter) return false;
    if (!query) return true;
    return [book.title, book.author, book.subject, CATEGORY_LABELS[book.category]]
      .some((field) => field.toLowerCase().includes(query));
  });

  const sorters = {
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    discount: (a, b) => discountOf(b) - discountOf(a),
  };
  if (sorters[sortSelect.value]) results = [...results].sort(sorters[sortSelect.value]);

  grid.innerHTML = results.map(renderBook).join("");
  emptyState.hidden = results.length > 0;
  resultsCount.textContent = `Showing ${results.length} of ${BOOKS.length} books`;
}

function setFilter(filter) {
  activeFilter = filter;
  tabs.forEach((tab) => tab.setAttribute("aria-pressed", String(tab.dataset.filter === filter)));
  render();
}

tabs.forEach((tab) => tab.addEventListener("click", () => setFilter(tab.dataset.filter)));

// Collection cards and offer cards jump to the catalogue with a section pre-selected
document.querySelectorAll(".collection-card[data-filter], .offer-card[data-filter]").forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    setFilter(el.dataset.filter);
    document.getElementById("books").scrollIntoView();
  });
});

searchInput.addEventListener("input", render);
sortSelect.addEventListener("change", render);
document.getElementById("reset-filters").addEventListener("click", () => {
  searchInput.value = "";
  sortSelect.value = "featured";
  setFilter("all");
});

render();
