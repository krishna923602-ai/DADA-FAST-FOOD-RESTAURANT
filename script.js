/* ==========================================================================
   DADA FAST FOOD RESTAURANT — ARGON ENGINE & SMART IMAGE RESOLVER
   ========================================================================== */

const WHATSAPP_NUMBER = "918400384815";

/**
 * SMART IMAGE REGISTRY
 * First candidate = hosted ImgBB link (works everywhere, no local files needed).
 * Local `assets/images/...` paths are kept as backup fallbacks.
 */
const ASSET_CANDIDATES = {
    "logo": [
        "https://i.ibb.co/qMtJPpk1/DADA-FAST-FOOD-LOGO-2.png",
        "assets/images/DADA FAST FOOD LOGO 2.png",
        "DADA FAST FOOD LOGO 2.png",
        "assets/images/logo.png"
    ],
    "banner": [
        "https://i.ibb.co/0jPBywCM/DADA-FAST-FOOD-BANNER-2.png",
        "assets/images/DADA FAST FOOD BANNER 2.png",
        "DADA FAST FOOD BANNER 2.png",
        "assets/images/banner.png"
    ],
    "chilli-potato": [
        "https://i.ibb.co/rfw3M00H/DADA-FAST-FOOD-CHILLI-POTATO.png",
        "assets/images/DADA FAST FOOD CHILLI POTATO.png",
        "assets/images/DADA FAST FOOD CHILLI POTATO(1).png",
        "DADA FAST FOOD CHILLI POTATO.png",
        "DADA FAST FOOD CHILLI POTATO(1).png"
    ],
    "sandwich": [
        "https://i.ibb.co/DHC9tMY3/DADA-FAST-FOOD-SANDWICH.png",
        "assets/images/DADA FAST FOOD SANDWICH.jpg",
        "assets/images/DADA FAST FOOD SANDWICH.png",
        "DADA FAST FOOD SANDWICH.jpg",
        "DADA FAST FOOD SANDWICH.png"
    ],
    "burger": [
        "https://i.ibb.co/6RN6sNSS/DADA-FAST-FOOD-BURGER.png",
        "assets/images/DADA FAST FOOD BURGER .png",
        "assets/images/DADA FAST FOOD BURGER.png",
        "DADA FAST FOOD BURGER .png",
        "DADA FAST FOOD BURGER.png"
    ],
    "chaat": [
        "https://i.ibb.co/PGgvy2jR/DADA-FAST-FOOD-CHAT.png",
        "assets/images/DADA FAST FOOD CHAT.png",
        "DADA FAST FOOD CHAT.png"
    ],
    "patties": [
        "https://i.ibb.co/cKYwtsgR/DADA-FAST-FOOD-PATIES.png",
        "assets/images/DADA FAST FOOD PATIES.png",
        "assets/images/DADA FAST FOOD PATIES(1).png",
        "DADA FAST FOOD PATIES.png",
        "DADA FAST FOOD PATIES(1).png"
    ],
    "manchurian": [
        "https://i.ibb.co/gbHTyt18/DADA-FAST-FOOD-MANCHURIYAN.png",
        "assets/images/DADA FAST FOOD MANCHURIYAN.png",
        "DADA FAST FOOD MANCHURIYAN.png"
    ],
    "chow-mein": [
        "https://i.ibb.co/VpvdSmNW/DADA-FAST-FOOD-CHAWMEEN.png",
        "assets/images/DADA FAST FOOD CHAWMEEN.png",
        "DADA FAST FOOD CHAWMEEN.png"
    ],
    "interior-1": [
        "https://i.ibb.co/SwL4HqX7/DAAD-FAST-FOOD-INTERIOR.png",
        "assets/images/DAAD FAST FOOD INTERIOR.png",
        "DAAD FAST FOOD INTERIOR.png"
    ],
    "interior-2": [
        "https://i.ibb.co/wZmvnqGB/DADA-FAST-FOOD-INTERIOR-2.png",
        "assets/images/DADA FAST FOOD INTERIOR 2.jpg",
        "assets/images/DADA FAST FOOD INTERIOR 2.png",
        "DADA FAST FOOD INTERIOR 2.jpg",
        "DADA FAST FOOD INTERIOR 2.png"
    ],
    "interior-3": [
        "https://i.ibb.co/RknXGj8B/DADA-FAST-FOOD-RESTURENT-INTERIOR-3.png",
        "assets/images/DADA FAST FOOD RESTURENT INTERIOR 3.jpg",
        "assets/images/DADA FAST FOOD RESTURENT INTERIOR 3.png",
        "DADA FAST FOOD RESTURENT INTERIOR 3.jpg",
        "DADA FAST FOOD RESTURENT INTERIOR 3.png"
    ]
};

// SVG Fallback if an image is not yet copied into the folder
function createPlaceholderSVG(label) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="420" viewBox="0 0 600 420">
        <rect width="600" height="420" fill="#171717"/>
        <rect x="20" y="20" width="560" height="380" rx="14" fill="none" stroke="#FFE500" stroke-width="2" stroke-dasharray="8 8"/>
        <text x="50%" y="46%" dominant-baseline="middle" text-anchor="middle" fill="#FFE500" font-family="sans-serif" font-size="22" font-weight="bold">${label}</text>
        <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" fill="#A1A1AA" font-family="sans-serif" font-size="14">Image could not be loaded</text>
    </svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Automatically tests candidate paths and attaches the first working one
function bindSmartImage(imgElement, assetKey, label) {
    const candidates = ASSET_CANDIDATES[assetKey] || [];
    let attemptIndex = 0;

    function tryNext() {
        if (attemptIndex < candidates.length) {
            imgElement.src = encodeURI(candidates[attemptIndex]);
            attemptIndex++;
        } else {
            imgElement.onerror = null;
            imgElement.src = createPlaceholderSVG(label || assetKey);
        }
    }

    imgElement.onerror = tryNext;
    tryNext();
}

/* ==========================================================================
   EDITABLE MENU DATA STRUCTURE
   - Set `price: null` for "Price to be updated"
   - Set a number (e.g. `price: 60`) when actual menu prices are confirmed
   ========================================================================== */
const MENU_DATA = [
    {
        id: 1,
        name: "Crispy Chilli Potato",
        category: "Chinese",
        assetKey: "chilli-potato",
        price: null, // Change null to actual price e.g. 70
        veg: true,
        featured: true,
        tag: "Bestseller",
        desc: "Crispy fried potato fingers tossed in spicy Indo-Chinese chilli garlic glaze, topped with grated paneer and fresh coriander."
    },
    {
        id: 2,
        name: "Grilled Veg Sandwich",
        category: "Burgers & Sandwiches",
        assetKey: "sandwich",
        price: null,
        veg: true,
        featured: true,
        tag: "Freshly Grilled",
        desc: "Golden-grilled triangle sandwiches stuffed with seasoned veggies, served with tangy tomato ketchup and green chutney."
    },
    {
        id: 3,
        name: "Special Veg Burger / Wrap",
        category: "Burgers & Sandwiches",
        assetKey: "burger",
        price: null,
        veg: true,
        featured: true,
        tag: "House Special",
        desc: "Soft toasted bun loaded with fresh crunchy slaw, signature sauces, and coriander garnish."
    },
    {
        id: 4,
        name: "Traditional Kulhad Chaat",
        category: "Chaat",
        assetKey: "chaat",
        price: null,
        veg: true,
        featured: true,
        tag: "Local Favourite",
        desc: "Flavorful street-style spicy chaat served in earthen clay bowls (kulhad), topped with crunchy sev and coriander."
    },
    {
        id: 5,
        name: "Golden Baked Patties",
        category: "Snacks",
        assetKey: "patties",
        price: null,
        veg: true,
        featured: false,
        tag: "Crispy & Flaky",
        desc: "Flaky, golden-baked puff pastry patties with spiced filling, garnished with grated paneer and herbs."
    },
    {
        id: 6,
        name: "Veg Manchurian",
        category: "Chinese",
        assetKey: "manchurian",
        price: null,
        veg: true,
        featured: false,
        tag: "Hot & Savoury",
        desc: "Soft vegetable dumplings simmered in rich garlic-soy Manchurian gravy with fresh green chillies and coriander."
    },
    {
        id: 7,
        name: "Desi Style Veg Chow Mein",
        category: "Chinese",
        assetKey: "chow-mein",
        price: null,
        veg: true,
        featured: false,
        tag: "Wok Tossed",
        desc: "Stir-fried noodles tossed with crunchy julienned vegetables, aromatic spices, and grated paneer topping."
    }
];

/* ==========================================================================
   GALLERY ITEMS DATA
   ========================================================================== */
const GALLERY_ITEMS = [
    { assetKey: "chilli-potato", title: "Crispy Chilli Potato", type: "food" },
    { assetKey: "sandwich", title: "Grilled Veg Sandwich with Chutney", type: "food" },
    { assetKey: "burger", title: "Special Burger / Wrap", type: "food" },
    { assetKey: "chaat", title: "Traditional Kulhad Chaat", type: "food" },
    { assetKey: "patties", title: "Golden Baked Puff Patties", type: "food" },
    { assetKey: "manchurian", title: "Hot Veg Manchurian Gravy", type: "food" },
    { assetKey: "chow-mein", title: "Wok-Tossed Veg Chow Mein", type: "food" },
    { assetKey: "interior-3", title: "Cushioned Blue Sofa Booth Seating", type: "interior" },
    { assetKey: "interior-2", title: "Spacious Group Dining Hall", type: "interior" },
    { assetKey: "interior-1", title: "Casual Dine-In Seating Area", type: "interior" },
    { assetKey: "banner", title: "Dada Fast Food Restaurant Official Banner", type: "interior" }
];

// State
let cart = [];
let activeLightboxList = [...GALLERY_ITEMS];
let currentLightboxIndex = 0;

// Initialize static images with data-asset attribute
document.querySelectorAll("img[data-asset]").forEach(img => {
    const key = img.getAttribute("data-asset");
    bindSmartImage(img, key, img.alt);
});

// Set Dynamic Copyright Year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Header Scroll Elevation
const headerEl = document.getElementById("header");
window.addEventListener("scroll", () => {
    headerEl.classList.toggle("scrolled", window.scrollY > 30);
});

// Mobile Navigation Toggle
const hamburgerBtn = document.getElementById("hamburger");
const navMenuEl = document.getElementById("nav-menu");

hamburgerBtn.addEventListener("click", () => {
    const isOpen = navMenuEl.classList.toggle("active");
    hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-item").forEach(link => {
    link.addEventListener("click", () => {
        navMenuEl.classList.remove("active");
        hamburgerBtn.setAttribute("aria-expanded", "false");
    });
});

/* ==========================================================================
   RENDER MENU & FILTERS
   ========================================================================== */
const menuContainer = document.getElementById("menu-container");

function renderMenu(category = "All") {
    menuContainer.innerHTML = "";
    const items = category === "All"
        ? MENU_DATA
        : MENU_DATA.filter(item => item.category === category);

    items.forEach(item => {
        const card = document.createElement("article");
        card.className = "argon-menu-card";

        const priceHTML = typeof item.price === "number" && item.price > 0
            ? `<span class="price-value">₹${item.price}</span>`
            : `<span class="price-tbd">Price to be updated</span>`;

        card.innerHTML = `
            <div class="menu-card-media">
                <img alt="${item.name}" class="menu-card-img" loading="lazy">
                <span class="menu-cat-tag">${item.category}</span>
                ${item.veg ? `<span class="veg-badge"><span class="veg-icon"></span>VEG</span>` : ""}
            </div>
            <div class="menu-card-body">
                <h3 class="menu-item-title">${item.name}</h3>
                <p class="menu-item-desc">${item.desc}</p>
                <div class="menu-card-footer">
                    <div class="menu-price-block">
                        <span class="price-label">Price</span>
                        ${priceHTML}
                    </div>
                    <button type="button" class="add-order-btn" data-add-id="${item.id}">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                        <span>Add to Order</span>
                    </button>
                </div>
            </div>
        `;

        const imgEl = card.querySelector(".menu-card-img");
        bindSmartImage(imgEl, item.assetKey, item.name);

        card.querySelector(".add-order-btn").addEventListener("click", () => addToCart(item.id));
        menuContainer.appendChild(card);
    });
}

document.querySelectorAll("#menu-filters .argon-filter-pill").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll("#menu-filters .argon-filter-pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderMenu(btn.getAttribute("data-filter"));
    });
});

/* ==========================================================================
   RENDER CUSTOMER FAVOURITES (SPECIALS)
   ========================================================================== */
const specialsContainer = document.getElementById("specials-container");

function renderSpecials() {
    specialsContainer.innerHTML = "";
    const featuredItems = MENU_DATA.filter(i => i.featured);

    featuredItems.forEach(item => {
        const card = document.createElement("div");
        card.className = "special-bento-card";
        card.innerHTML = `
            <img alt="${item.name}" class="special-bento-img" loading="lazy">
            <div class="special-bento-content">
                <span class="special-tag">${item.tag}</span>
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <button type="button" class="argon-btn btn-yellow btn-sm" data-special-id="${item.id}">
                    Add to Order List
                </button>
            </div>
        `;
        bindSmartImage(card.querySelector(".special-bento-img"), item.assetKey, item.name);
        card.querySelector("[data-special-id]").addEventListener("click", () => addToCart(item.id));
        specialsContainer.appendChild(card);
    });
}

/* ==========================================================================
   RENDER GALLERY & LIGHTBOX
   ========================================================================== */
const galleryGrid = document.getElementById("gallery-grid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxCounter = document.getElementById("lightbox-counter");

function renderGallery(filterType = "all") {
    galleryGrid.innerHTML = "";
    activeLightboxList = filterType === "all"
        ? [...GALLERY_ITEMS]
        : GALLERY_ITEMS.filter(g => g.type === filterType);

    activeLightboxList.forEach((gItem, idx) => {
        const card = document.createElement("div");
        card.className = "gallery-card";
        card.innerHTML = `
            <img alt="${gItem.title}" loading="lazy">
            <div class="gallery-card-overlay">
                <span class="gallery-caption-text">${gItem.title}</span>
                <span class="gallery-zoom-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                </span>
            </div>
        `;
        bindSmartImage(card.querySelector("img"), gItem.assetKey, gItem.title);
        card.addEventListener("click", () => openLightbox(idx));
        galleryGrid.appendChild(card);
    });
}

document.querySelectorAll("#gallery-filters .argon-filter-pill").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll("#gallery-filters .argon-filter-pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderGallery(btn.getAttribute("data-gfilter"));
    });
});

function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxSlide();
    lightbox.classList.add("active");
}

function updateLightboxSlide() {
    const item = activeLightboxList[currentLightboxIndex];
    if (!item) return;
    bindSmartImage(lightboxImg, item.assetKey, item.title);
    lightboxImg.alt = item.title;
    lightboxCaption.textContent = item.title;
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${activeLightboxList.length}`;
}

document.getElementById("close-lightbox").addEventListener("click", () => lightbox.classList.remove("active"));
document.getElementById("lightbox-prev").addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + activeLightboxList.length) % activeLightboxList.length;
    updateLightboxSlide();
});
document.getElementById("lightbox-next").addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % activeLightboxList.length;
    updateLightboxSlide();
});

window.addEventListener("keydown", e => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") lightbox.classList.remove("active");
    if (e.key === "ArrowLeft") document.getElementById("lightbox-prev").click();
    if (e.key === "ArrowRight") document.getElementById("lightbox-next").click();
});

/* ==========================================================================
   SHOPPING CART & WHATSAPP ORDERING
   ========================================================================== */
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartCountEl = document.getElementById("cart-count");
const cartSummaryQty = document.getElementById("cart-summary-qty");
const cartTotalPrice = document.getElementById("cart-total-price");
const priceNoticeEl = document.getElementById("price-notice");
const mobileStickyCart = document.getElementById("mobile-sticky-cart");
const mobileBarCount = document.getElementById("mobile-bar-count");
const mobileBarTotal = document.getElementById("mobile-bar-total");

function openCart() {
    cartDrawer.classList.add("active");
    cartOverlay.classList.add("active");
}

function closeCart() {
    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");
}

document.getElementById("cart-toggle-btn").addEventListener("click", openCart);
document.getElementById("mobile-bar-open-btn").addEventListener("click", openCart);
document.getElementById("close-cart-btn").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

function addToCart(itemId) {
    const product = MENU_DATA.find(p => p.id === itemId);
    if (!product) return;

    const existing = cart.find(c => c.id === itemId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    openCart();
}

function changeQuantity(itemId, delta) {
    const index = cart.findIndex(c => c.id === itemId);
    if (index === -1) return;

    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

function updateCartUI() {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCountEl.textContent = totalCount;
    cartSummaryQty.textContent = totalCount;
    mobileBarCount.textContent = totalCount;

    if (totalCount > 0) {
        mobileStickyCart.classList.add("visible");
    } else {
        mobileStickyCart.classList.remove("visible");
    }

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-state">
                <p><strong>Your order list is empty</strong></p>
                <p style="font-size:0.85rem; margin-top:6px;">Select dishes from the menu to place a WhatsApp order.</p>
            </div>
        `;
        cartTotalPrice.textContent = "₹0";
        mobileBarTotal.textContent = "Review Order";
        priceNoticeEl.style.display = "none";
        return;
    }

    let numericSubtotal = 0;
    let hasUnpricedItems = false;

    cart.forEach(item => {
        const hasValidPrice = typeof item.price === "number" && item.price > 0;
        if (hasValidPrice) {
            numericSubtotal += item.price * item.quantity;
        } else {
            hasUnpricedItems = true;
        }

        const itemRow = document.createElement("div");
        itemRow.className = "cart-item-row";
        itemRow.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="cart-item-meta">
                    ${hasValidPrice ? `₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}` : "Price to be confirmed"}
                </span><br>
                <button type="button" class="cart-remove-link">Remove</button>
            </div>
            <div class="cart-qty-box">
                <button type="button" class="qty-step-btn" aria-label="Decrease quantity">−</button>
                <strong>${item.quantity}</strong>
                <button type="button" class="qty-step-btn" aria-label="Increase quantity">+</button>
            </div>
        `;

        const [decBtn, incBtn] = itemRow.querySelectorAll(".qty-step-btn");
        decBtn.addEventListener("click", () => changeQuantity(item.id, -1));
        incBtn.addEventListener("click", () => changeQuantity(item.id, 1));
        itemRow.querySelector(".cart-remove-link").addEventListener("click", () => changeQuantity(item.id, -item.quantity));

        cartItemsContainer.appendChild(itemRow);
    });

    if (hasUnpricedItems) {
        cartTotalPrice.textContent = numericSubtotal > 0 ? `₹${numericSubtotal} + Price TBD` : "Confirm on WhatsApp";
        mobileBarTotal.textContent = numericSubtotal > 0 ? `₹${numericSubtotal} + TBD` : "Confirm Price on WhatsApp";
        priceNoticeEl.style.display = "flex";
    } else {
        cartTotalPrice.textContent = `₹${numericSubtotal}`;
        mobileBarTotal.textContent = `Total: ₹${numericSubtotal}`;
        priceNoticeEl.style.display = "none";
    }
}

document.getElementById("send-whatsapp-btn").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Please add at least one food item to your order first.");
        return;
    }

    let lines = [
        "Hello Dada Fast Food Restaurant!",
        "I would like to place an order.",
        "",
        "Items:"
    ];

    let total = 0;
    let hasMissingPrice = false;

    cart.forEach(item => {
        const hasPrice = typeof item.price === "number" && item.price > 0;
        if (hasPrice) {
            const sub = item.price * item.quantity;
            total += sub;
            lines.push(`- ${item.name} × ${item.quantity} (₹${sub})`);
        } else {
            hasMissingPrice = true;
            lines.push(`- ${item.name} × ${item.quantity}`);
        }
    });

    lines.push("");
    if (!hasMissingPrice) {
        lines.push(`Total: ₹${total}`);
    } else if (total > 0) {
        lines.push(`Calculated Subtotal: ₹${total} (Please confirm prices for remaining items)`);
    } else {
        lines.push("Please share the total price and confirm my order.");
    }

    lines.push("");
    lines.push("Please confirm my order.");

    const encodedText = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, "_blank", "noopener");
});

// Initial Boot
renderMenu();
renderSpecials();
renderGallery();
updateCartUI();
