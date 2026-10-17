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

  // Business and profit books
  { title: "Profit First", author: "Mike Michalowicz", category: "business", subject: "Profitability, cash flow, small business, finance", price: 499, mrp: 599, cover: "#47736a" },
  { title: "The Psychology of Money", author: "Morgan Housel", category: "business", subject: "Money, investing, financial behavior, wealth", price: 399, mrp: 499, cover: "#668090" },
  { title: "The Lean Startup", author: "Eric Ries", category: "business", subject: "Startups, entrepreneurship, business strategy", price: 549, mrp: 699, cover: "#637b54" },
  { title: "Zero to One", author: "Peter Thiel", category: "business", subject: "Startups, innovation, entrepreneurship, growth", price: 399, mrp: 499, cover: "#456274" },
  { title: "The Personal MBA", author: "Josh Kaufman", category: "business", subject: "Business, management, marketing, finance", price: 599, mrp: 799, cover: "#92704d" },
  { title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", category: "business", subject: "Personal finance, investing, money, wealth", price: 349, mrp: 499, cover: "#526e5a" },
];

const CATEGORY_LABELS = {
  study: "Study book",
  story: "Storybook",
  traditional: "Traditional",
  business: "Business & profit",
};

const COVER_ILLUSTRATIONS = {
  study: [
    '<circle cx="120" cy="90" r="9" fill="currentColor"/><ellipse cx="120" cy="90" rx="74" ry="28"/><ellipse cx="120" cy="90" rx="74" ry="28" transform="rotate(60 120 90)"/><ellipse cx="120" cy="90" rx="74" ry="28" transform="rotate(-60 120 90)"/><circle cx="194" cy="90" r="5" fill="currentColor"/><circle cx="83" cy="25" r="4" fill="currentColor"/>',
    '<path d="M45 118V56l74 14 76-14v62l-76 17z"/><path d="M119 70v65M57 73l49 10M57 88l42 8M181 73l-49 10M181 88l-42 8"/><path d="M71 45l11-14 11 14M82 31v19"/><circle cx="164" cy="39" r="7"/>',
    '<path d="M48 129h25V98h25v31h25V77h25v52h25V54h25v75"/><path d="M44 140h156"/><path d="m72 81 37-23 28 12 43-38"/><path d="M166 31h14v14"/>',
    '<circle cx="120" cy="88" r="57"/><circle cx="120" cy="88" r="37"/><path d="m120 31 13 54-13 60-13-60z"/><path d="M120 37v102M69 88h102"/>',
  ],
  story: [
    '<circle cx="168" cy="48" r="20"/><path d="m38 134 52-57 31 33 23-23 59 61H38z"/><path d="M61 146h127M91 78l15 16 15-16"/>',
    '<path d="M51 88a69 69 0 0 1 138 0z"/><path d="M120 88v49M120 105l-28 43M120 105l29 43"/><path d="M61 156c30-10 88 12 121 0"/><circle cx="66" cy="48" r="3" fill="currentColor"/><circle cx="180" cy="39" r="3" fill="currentColor"/>',
    '<path d="M53 141c20-22 14-63 48-83 30 25 22 56 58 83"/><path d="M120 62v83M87 104l-19-12M152 94l23-16M99 75l-5-19M139 74l13-21"/><circle cx="67" cy="47" r="4" fill="currentColor"/><circle cx="177" cy="49" r="3" fill="currentColor"/>',
    '<path d="M49 124h142M67 124V87l53-29 53 29v37M84 124V97h25v27M132 97h25v27"/><path d="M52 146h136"/><circle cx="120" cy="45" r="9"/>',
  ],
  traditional: [
    '<circle cx="120" cy="91" r="34"/><circle cx="120" cy="91" r="54"/><path d="M120 17v25M120 140v25M46 91h25M169 91h25M68 39l18 18M154 125l18 18M172 39l-18 18M86 125l-18 18"/><path d="m120 61 8 22 23 8-23 8-8 23-8-23-23-8 23-8z"/>',
    '<path d="M48 140h144M60 140V79l60-39 60 39v61"/><path d="M84 140V94h72v46M103 94v46M137 94v46"/><circle cx="120" cy="44" r="14"/><path d="M120 12v12M84 24l9 9M156 24l-9 9"/>',
    '<path d="M120 38c-20 25-47 32-47 58a24 24 0 0 0 47 9 24 24 0 0 0 47-9c0-26-27-33-47-58z"/><path d="M120 73v64M92 95c7 2 13 8 17 17M148 95c-7 2-13 8-17 17"/><circle cx="120" cy="57" r="6" fill="currentColor"/>',
    '<path d="M120 35c-32 28-39 53 0 104 39-51 32-76 0-104z"/><path d="M120 55v84M120 89 94 72M120 108l28-20"/><circle cx="120" cy="33" r="5" fill="currentColor"/>',
  ],
  business: [
    '<path d="M47 136h150M59 127V98h24v29M99 127V79h24v48M139 127V61h24v66"/><path d="m60 81 39-26 28 11 42-35"/><path d="M151 31h18v18"/>',
    '<ellipse cx="119" cy="120" rx="47" ry="18"/><path d="M72 120V94c0-10 21-18 47-18s47 8 47 18v26M72 94c0 10 21 18 47 18s47-8 47-18"/><ellipse cx="119" cy="76" rx="47" ry="18"/><path d="M119 66v20M109 71h20M109 81h20"/>',
    '<path d="M55 137h130M67 127V91h25v36M108 127V70h25v57M149 127V49h25v78"/><circle cx="82" cy="47" r="23"/><path d="M82 33v28M72 40h16M72 53h16"/>',
    '<circle cx="120" cy="91" r="54"/><path d="m83 104 24 24 53-61"/><path d="M120 22v16M120 144v16M51 91h15M174 91h15"/>',
  ],
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
const shopStatus = document.getElementById("shop-status");
const cartFeedback = document.getElementById("cart-feedback");
const cartFeedbackMessage = document.getElementById("cart-feedback-message");
const cartDialog = document.getElementById("cart-dialog");
const cartItems = document.getElementById("cart-items");
const cartSummary = document.getElementById("cart-summary");
const checkoutDialog = document.getElementById("checkout-dialog");
const reviewDialog = document.getElementById("review-dialog");

const CART_STORAGE_KEY = "jass-book-store-cart";
const REVIEWS_STORAGE_KEY = "jass-book-store-reviews";
const GIFT_WRAP_THRESHOLD = 799;
const GIFT_WRAP_PRICE = 25;

let activeFilter = "all";

function readSavedData(key, label) {
  try {
    const saved = localStorage.getItem(key);
    if (!saved) return {};

    const parsed = JSON.parse(saved);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new TypeError("Saved data must be an object.");
    }
    return parsed;
  } catch (error) {
    console.error(`Could not load saved ${label}.`, error);
    shopStatus.textContent = `Saved ${label} could not be loaded. You can still use the shop in this browser session.`;
    return {};
  }
}

function saveData(key, value, label) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Could not save ${label}.`, error);
    shopStatus.textContent = `${label} could not be saved in this browser. It is still available until you leave this page.`;
    return false;
  }
}

const savedCart = readSavedData(CART_STORAGE_KEY, "cart");
const savedReviews = readSavedData(REVIEWS_STORAGE_KEY, "reviews");
const validTitles = new Set(BOOKS.map((book) => book.title));
const cart = Object.fromEntries(
  Object.entries(savedCart).filter(([title, quantity]) =>
    validTitles.has(title) && Number.isSafeInteger(quantity) && quantity > 0,
  ),
);
const reviews = Object.fromEntries(
  Object.entries(savedReviews).filter(([, review]) =>
    review
    && Number.isInteger(review.rating)
    && review.rating >= 1
    && review.rating <= 5
    && typeof review.text === "string"
    && review.text.length <= 500,
  ),
);

let giftWrap = false;
let giftNote = "";

const discountOf = (book) => Math.round(((book.mrp - book.price) / book.mrp) * 100);

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function renderReview(book) {
  const review = reviews[book.title];
  if (!review) {
    return `
      <p class="review-summary">Not rated yet</p>
      <button class="review-action" type="button" data-review-title="${escapeHtml(book.title)}">Be the first to review</button>`;
  }

  const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
  return `
    <p class="review-summary"><span class="review-stars" aria-label="${review.rating} out of 5 stars">${stars}</span> <strong>${review.rating}.0</strong> <span>1 review on this device</span></p>
    <p class="review-quote">“${escapeHtml(review.text)}”</p>
    <button class="review-action" type="button" data-review-title="${escapeHtml(book.title)}">Edit your review</button>`;
}

function renderCoverIllustration(book) {
  const illustrations = COVER_ILLUSTRATIONS[book.category];
  const illustration = illustrations[BOOKS.indexOf(book) % illustrations.length];
  return `<svg class="book-cover-art" viewBox="0 0 240 180" role="presentation" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3">${illustration}</g></svg>`;
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
        ${renderCoverIllustration(book)}
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
        <div class="book-review">${renderReview(book)}</div>
        <button class="add-to-cart" type="button" data-add-title="${escapeHtml(book.title)}">
          Add to cart <span aria-hidden="true">· ${rupees.format(book.price)}</span>
        </button>
      </div>
    </article>`;
}

function cartEntries() {
  return BOOKS.filter((book) => cart[book.title] > 0);
}

function cartSubtotal() {
  return cartEntries().reduce((total, book) => total + book.price * cart[book.title], 0);
}

function giftWrapTotal(subtotal) {
  if (!giftWrap) return 0;
  return subtotal >= GIFT_WRAP_THRESHOLD ? 0 : GIFT_WRAP_PRICE;
}

function updateCartTrigger() {
  const itemCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  document.getElementById("cart-count").textContent = String(itemCount);
  document.getElementById("open-cart").setAttribute("aria-label", `Open shopping cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`);
}

function renderCart() {
  const entries = cartEntries();
  const hasItems = entries.length > 0;
  const subtotal = cartSubtotal();
  const wrapTotal = giftWrapTotal(subtotal);

  cartItems.innerHTML = hasItems
    ? entries.map((book) => `
      <article class="cart-item">
        <div class="cart-item-info">
          <h3>${escapeHtml(book.title)}</h3>
          <p>${rupees.format(book.price)} each</p>
          <div class="quantity-controls" aria-label="Quantity for ${escapeHtml(book.title)}">
            <button type="button" data-cart-action="decrease" data-cart-title="${escapeHtml(book.title)}" aria-label="Remove one ${escapeHtml(book.title)}">−</button>
            <span>${cart[book.title]}</span>
            <button type="button" data-cart-action="increase" data-cart-title="${escapeHtml(book.title)}" aria-label="Add one ${escapeHtml(book.title)}">+</button>
            <button class="remove-cart-item" type="button" data-cart-action="remove" data-cart-title="${escapeHtml(book.title)}">Remove</button>
          </div>
        </div>
        <strong>${rupees.format(book.price * cart[book.title])}</strong>
      </article>`).join("")
    : `<div class="cart-empty"><p>Your cart is waiting for a good book.</p><button class="button button-dark" type="button" data-close-dialog>Browse the shelves</button></div>`;

  cartSummary.hidden = !hasItems;
  document.getElementById("gift-wrap").checked = giftWrap;
  document.getElementById("gift-wrap-price").textContent =
    subtotal >= GIFT_WRAP_THRESHOLD ? "Complimentary on this order" : `₹${GIFT_WRAP_PRICE} · free on orders of ₹${GIFT_WRAP_THRESHOLD}+`;
  document.getElementById("gift-note-field").hidden = !giftWrap;
  document.getElementById("gift-note").value = giftNote;
  document.getElementById("cart-subtotal").textContent = rupees.format(subtotal);
  document.getElementById("cart-gift-total").textContent = rupees.format(wrapTotal);
  document.getElementById("cart-total").textContent = rupees.format(subtotal + wrapTotal);
  document.getElementById("checkout-total").textContent = rupees.format(subtotal + wrapTotal);
  document.getElementById("checkout-button").disabled = !hasItems;
  updateCartTrigger();
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
  updateCartTrigger();
}

function setFilter(filter) {
  activeFilter = filter;
  tabs.forEach((tab) => tab.setAttribute("aria-pressed", String(tab.dataset.filter === filter)));
  render();
}

tabs.forEach((tab) => tab.addEventListener("click", () => setFilter(tab.dataset.filter)));

document.querySelectorAll(".collection-card[data-filter], .offer-card[data-filter], .study-feature-link[data-filter]").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    setFilter(element.dataset.filter);
    document.getElementById("books").scrollIntoView();
  });
});

grid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-title]");
  if (addButton) {
    const book = BOOKS.find((item) => item.title === addButton.dataset.addTitle);
    if (!book) return;

    cart[book.title] = (cart[book.title] || 0) + 1;
    const saved = saveData(CART_STORAGE_KEY, cart, "your cart");
    renderCart();
    cartFeedbackMessage.textContent = `${book.title} added to your cart (${cart[book.title]} ${cart[book.title] === 1 ? "copy" : "copies"}).`;
    cartFeedback.hidden = false;
    if (saved) shopStatus.textContent = `${book.title} added to your cart.`;
    return;
  }

  const reviewButton = event.target.closest("[data-review-title]");
  if (!reviewButton) return;
  const book = BOOKS.find((item) => item.title === reviewButton.dataset.reviewTitle);
  if (!book) return;

  const existingReview = reviews[book.title];
  document.getElementById("review-book-title").value = book.title;
  document.getElementById("review-book-name").textContent = book.title;
  document.querySelector("#review-form [name='rating']").value = existingReview ? String(existingReview.rating) : "";
  document.querySelector("#review-form [name='review']").value = existingReview ? existingReview.text : "";
  reviewDialog.showModal();
});

document.getElementById("open-cart").addEventListener("click", () => {
  cartFeedback.hidden = true;
  renderCart();
  cartDialog.showModal();
});

document.getElementById("view-cart").addEventListener("click", () => {
  cartFeedback.hidden = true;
  renderCart();
  cartDialog.showModal();
});

document.getElementById("close-cart-feedback").addEventListener("click", () => {
  cartFeedback.hidden = true;
});

cartDialog.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-dialog]")) {
    return;
  }

  const button = event.target.closest("[data-cart-action]");
  if (!button) return;

  const title = button.dataset.cartTitle;
  const action = button.dataset.cartAction;
  if (!validTitles.has(title)) return;
  if (action === "increase") cart[title] = (cart[title] || 0) + 1;
  if (action === "decrease") cart[title] -= 1;
  if (action === "remove" || cart[title] <= 0) delete cart[title];
  saveData(CART_STORAGE_KEY, cart, "your cart");
  renderCart();
});

document.getElementById("gift-wrap").addEventListener("change", (event) => {
  giftWrap = event.target.checked;
  renderCart();
});

document.getElementById("gift-note").addEventListener("input", (event) => {
  giftNote = event.target.value;
});

document.getElementById("checkout-button").addEventListener("click", () => {
  if (cartEntries().length === 0) return;
  cartDialog.close();
  document.getElementById("checkout-notice").hidden = true;
  checkoutDialog.showModal();
});

document.getElementById("checkout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const notice = document.getElementById("checkout-notice");
  if (cartEntries().length === 0) {
    notice.textContent = "Your cart is empty. Add a book before checkout.";
  } else {
    notice.textContent = "Checkout preview only: no order was sent and no payment was taken. Connect a store backend and payment provider before accepting real orders.";
  }
  notice.hidden = false;
});

document.getElementById("review-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const title = String(formData.get("book"));
  const book = BOOKS.find((item) => item.title === title);
  const rating = Number(formData.get("rating"));
  const text = String(formData.get("review")).trim();
  if (!book || !Number.isInteger(rating) || rating < 1 || rating > 5 || text.length < 3) return;

  reviews[book.title] = { rating, text };
  const saved = saveData(REVIEWS_STORAGE_KEY, reviews, "your reviews");
  reviewDialog.close();
  render();
  if (saved) shopStatus.textContent = `Your review for ${book.title} has been saved in this browser.`;
});

document.querySelectorAll(".shop-dialog [data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

const studyScene = document.querySelector(".study-scene");
const studySceneToggle = document.querySelector(".study-scene-toggle");
const reducedStudyMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function updateStudyMotionPreference() {
  studySceneToggle.hidden = reducedStudyMotion.matches;
  if (reducedStudyMotion.matches) {
    studyScene.classList.remove("study-scene-paused");
    studySceneToggle.setAttribute("aria-pressed", "false");
    studySceneToggle.setAttribute("aria-label", "Study animation is disabled by your reduced-motion setting");
    studySceneToggle.textContent = "Ⅱ";
  } else {
    studySceneToggle.setAttribute("aria-label", "Pause study animation");
  }
}

studySceneToggle.addEventListener("click", () => {
  const paused = studyScene.classList.toggle("study-scene-paused");
  studySceneToggle.setAttribute("aria-pressed", String(paused));
  studySceneToggle.setAttribute("aria-label", paused ? "Play study animation" : "Pause study animation");
  studySceneToggle.textContent = paused ? "▶" : "Ⅱ";
});

reducedStudyMotion.addEventListener("change", updateStudyMotionPreference);
updateStudyMotionPreference();

searchInput.addEventListener("input", render);
sortSelect.addEventListener("change", render);
document.getElementById("reset-filters").addEventListener("click", () => {
  searchInput.value = "";
  sortSelect.value = "featured";
  setFilter("all");
});

render();
renderCart();
