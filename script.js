const LOCATIONS = [
  { name: "Kokapet", note: "A premium west Hyderabad address", image: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?auto=format&fit=crop&w=900&q=85" },
  { name: "Narsingi", note: "Well-connected, contemporary communities", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=85" },
  { name: "Tellapur", note: "Green surroundings and growing appeal", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=85" },
  { name: "Mokila", note: "Quiet villa living beyond the city", image: "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=900&q=85" },
  { name: "Kollur", note: "Emerging communities with room to grow", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85" },
  { name: "Patancheru", note: "A practical west Hyderabad choice", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85" },
  { name: "Beeramguda", note: "Family-focused villa neighbourhoods", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85" },
  { name: "Shankarpally", note: "Open skies and spacious living", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85" },
  { name: "Shamshabad", note: "A strategic southern corridor", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85" },
  { name: "Adibatla", note: "A new chapter for villa living", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85" }
];

const PROPERTIES = [
  {
    id: "the-grove",
    name: "The Grove Villas",
    location: "Mokila",
    type: "4 BHK villa",
    size: "Indicative 3,200 sq ft",
    price: "Price on request",
    facing: "East / North options",
    category: "Signature",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    description: "A calm, design-led community for families looking for generous interiors and garden-facing living."
  },
  {
    id: "oakline",
    name: "Oakline Residences",
    location: "Tellapur",
    type: "3 & 4 BHK villas",
    size: "Indicative 2,600–3,400 sq ft",
    price: "Price on request",
    facing: "Multiple orientations",
    category: "Family Living",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    description: "Thoughtfully planned villas with adaptable spaces for everyday family life and entertaining."
  },
  {
    id: "altura",
    name: "Altura Courtyard Homes",
    location: "Kokapet",
    type: "4 BHK villa",
    size: "Indicative 3,500 sq ft",
    price: "Price on request",
    facing: "To be confirmed",
    category: "Signature",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    description: "A contemporary villa setting close to the energy of west Hyderabad, with a more private rhythm."
  }
];

const BENEFITS = [
  { icon: "sparkles", title: "Villa Specialists", text: "We focus exclusively on villa properties, so your search starts with a deeper point of view." },
  { icon: "compass", title: "Hyderabad Expertise", text: "We understand the city's major residential and villa growth corridors." },
  { icon: "shield", title: "Curated Properties", text: "We help you discover suitable villa projects based on your lifestyle and requirements." },
  { icon: "users", title: "Transparent Guidance", text: "We believe customers should receive clear and honest property information." },
  { icon: "map", title: "Site Visit Assistance", text: "We help arrange property visits and make the project easier to understand." },
  { icon: "target", title: "Customer First", text: "Our goal is to find the right property for you, not simply make a sale." }
];

const ICONS = {
  arrow: '<svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
  chevron: '<svg class="icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>',
  check: '<svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>',
  map: '<svg class="icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  message: '<svg class="icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
  mail: '<svg class="icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>',
  menu: '<svg class="icon" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  close: '<svg class="icon" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>',
  play: '<svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  target: '<svg class="icon" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  sparkles: '<svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 13l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/></svg>',
  compass: '<svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16 8l-2.5 6.5L8 16l2.5-6.5L16 8z"/></svg>',
  shield: '<svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  users: '<svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
  instagram: '<svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><path d="M17.5 6.5h.01"/></svg>',
  youtube: '<svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><path d="M9.75 15.02l6.5-3.02-6.5-3.02v6.04z"/></svg>',
  whatsapp: '<svg class="icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.867L0 24l6.335-1.662A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.378l-.358-.214-3.742.982 1-3.648-.233-.375A9.818 9.818 0 1112 21.818z"/></svg>'
};

let activeCategory = "All";
let menuOpen = false;

function scrollToContact(message = "") {
  const messageField = document.getElementById("message");
  if (messageField && message) messageField.value = message;
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  closeMenu();
}

function setPreferredLocation(name) {
  const select = document.getElementById("preferredLocation");
  if (select) select.value = name;
}

function closeMenu() {
  menuOpen = false;
  const nav = document.getElementById("mainNav");
  const toggle = document.getElementById("menuToggle");
  nav?.classList.remove("main-nav--open");
  if (toggle) toggle.innerHTML = ICONS.menu;
}

function toggleMenu() {
  menuOpen = !menuOpen;
  const nav = document.getElementById("mainNav");
  const toggle = document.getElementById("menuToggle");
  nav?.classList.toggle("main-nav--open", menuOpen);
  if (toggle) toggle.innerHTML = menuOpen ? ICONS.close : ICONS.menu;
}

function renderLocations() {
  const grid = document.getElementById("locationsGrid");
  if (!grid) return;
  grid.innerHTML = LOCATIONS.map((loc, i) => `
    <a class="location-card" href="#contact" onclick="setPreferredLocation('${loc.name}')">
      <img src="${loc.image}" alt="${loc.name} villa community" loading="lazy">
      <div class="location-shade"></div>
      <span class="location-number">0${i + 1}</span>
      <div class="location-card-copy">
        <h3>${loc.name}</h3>
        <p>${loc.note}</p>
        ${ICONS.arrow}
      </div>
    </a>
  `).join("");
}

function renderProperties() {
  const grid = document.getElementById("propertyGrid");
  if (!grid) return;
  const list = activeCategory === "All"
    ? PROPERTIES
    : PROPERTIES.filter(p => p.category === activeCategory);

  grid.innerHTML = list.map(p => `
    <article class="property-card">
      <div class="property-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="property-label">${p.category}</span>
        <button type="button" class="property-play" aria-label="View ${p.name}" onclick="openModal('${p.id}')">${ICONS.play}</button>
      </div>
      <div class="property-body">
        <div class="property-location">${ICONS.map} ${p.location}</div>
        <h3>${p.name}</h3>
        <p class="property-description">${p.description}</p>
        <div class="property-meta">
          <span><small>Type</small>${p.type}</span>
          <span><small>Size</small>${p.size}</span>
          <span><small>Facing</small>${p.facing}</span>
          <span><small>Price</small>${p.price}</span>
        </div>
        <div class="property-footer">
          <div><small>Enquire</small><strong>${p.price}</strong></div>
          <button type="button" class="text-link" onclick="scrollToContact('I would like to enquire about ${p.name} in ${p.location}.')">
            Enquire now ${ICONS.arrow}
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function setCategory(category) {
  activeCategory = category;
  document.querySelectorAll(".category-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });
  renderProperties();
}

function renderBenefits() {
  const grid = document.getElementById("benefitsGrid");
  if (!grid) return;
  grid.innerHTML = BENEFITS.map((b, i) => `
    <article class="benefit-card">
      <div class="benefit-icon">${ICONS[b.icon]}</div>
      <span class="benefit-index">0${i + 1}</span>
      <h3>${b.title}</h3>
      <p>${b.text}</p>
    </article>
  `).join("");
}

function populateLocationSelect() {
  const select = document.getElementById("preferredLocation");
  if (!select) return;
  LOCATIONS.forEach(loc => {
    const opt = document.createElement("option");
    opt.value = loc.name;
    opt.textContent = loc.name;
    select.appendChild(opt);
  });
}

function openModal(id) {
  const property = PROPERTIES.find(p => p.id === id);
  if (!property) return;
  const backdrop = document.getElementById("modalBackdrop");
  const modal = document.getElementById("propertyModal");
  if (!backdrop || !modal) return;

  modal.innerHTML = `
    <button type="button" class="modal-close" aria-label="Close" onclick="closeModal()">${ICONS.close}</button>
    <img src="${property.image}" alt="${property.name}">
    <div class="property-modal-content">
      <div class="property-location">${ICONS.map} ${property.location}</div>
      <h2>${property.name}</h2>
      <p>${property.description}</p>
      <div class="modal-specs">
        <span><small>Type</small>${property.type}</span>
        <span><small>Size</small>${property.size}</span>
        <span><small>Facing</small>${property.facing}</span>
      </div>
      <button type="button" class="button button--gold" onclick="closeModal(); scrollToContact('I would like to enquire about ${property.name} in ${property.location}.')">
        Enquire about this villa ${ICONS.arrow}
      </button>
    </div>
  `;
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const backdrop = document.getElementById("modalBackdrop");
  if (backdrop) backdrop.hidden = true;
  document.body.style.overflow = "";
}

// ─── EmailJS: update templateId after you create a new template ───
const EMAILJS_CONFIG = {
  publicKey: "vbKqORUv3NgTlTSAY",
  serviceId: "service_so4wtx9",
  templateId: "template_pp3oxw8"
};

function isEmailJsConfigured() {
  return !EMAILJS_CONFIG.publicKey.includes("YOUR_")
    && !EMAILJS_CONFIG.serviceId.includes("YOUR_")
    && !EMAILJS_CONFIG.templateId.includes("YOUR_");
}

function showFormSuccess() {
  const form = document.getElementById("enquiryForm");
  const success = document.getElementById("formSuccess");
  if (!form || !success) return;
  form.hidden = true;
  success.hidden = false;
}

function setupFormValidation() {
  const nameInput = document.getElementById("customerName");
  const phoneInput = document.getElementById("customerPhone");

  if (nameInput) {
    nameInput.addEventListener("input", () => {
      nameInput.value = nameInput.value.replace(/[^A-Za-z\s]/g, "");
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener("input", () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, 10);
    });
  }
}

function handleSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const submitBtn = document.getElementById("submitBtn");
  const formError = document.getElementById("formError");

  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const rawEmail = form.customerEmail?.value.trim() || form.email?.value.trim() || "";
  const location = form.location.value || "Not specified";
  const budget = form.budget.value;
  const customerMessage = form.message.value.trim() || "No message provided";
  const emailDisplay = rawEmail || "Not provided";

  if (!/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name)) {
    if (formError) {
      formError.hidden = false;
      formError.classList.add("form-note--error");
      formError.textContent = "Please enter a valid name (letters only).";
    }
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    if (formError) {
      formError.hidden = false;
      formError.classList.add("form-note--error");
      formError.textContent = "Please enter a valid 10-digit phone number.";
    }
    return;
  }

  const templateParams = {
    name,
    phone: `+91 ${phone}`,
    location,
    budget,
    email: emailDisplay,
    title: `${name} - ${budget}`,
    time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    message: customerMessage
  };

  if (!isEmailJsConfigured()) {
    console.warn("EmailJS template ID not set. Add your new template ID in script.js");
    if (formError) {
      formError.hidden = false;
      formError.textContent = "Form not connected yet. WhatsApp us at +91 8121817734.";
    }
    return;
  }

  if (typeof emailjs === "undefined") {
    if (formError) {
      formError.hidden = false;
      formError.textContent = "Email service did not load. Refresh the page or use WhatsApp +91 8121817734.";
    }
    return;
  }

  if (formError) {
    formError.hidden = true;
    formError.textContent = "Something went wrong. Please try again or WhatsApp us at +91 8121817734.";
  }
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
  }

  emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams, {
    publicKey: EMAILJS_CONFIG.publicKey
  })
    .then(() => {
      showFormSuccess();
      form.reset();
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      if (formError) {
        formError.hidden = false;
        const detail = err?.text || err?.message || "";
        if (detail) {
          formError.textContent = `Could not send (${detail}). Try WhatsApp +91 8121817734.`;
        }
      }
    })
    .finally(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `Send enquiry <svg class="icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`;
      }
    });
}

function resetForm() {
  const form = document.getElementById("enquiryForm");
  const success = document.getElementById("formSuccess");
  const formError = document.getElementById("formError");
  if (!form || !success) return;
  form.hidden = false;
  success.hidden = true;
  if (formError) formError.hidden = true;
}

document.addEventListener("DOMContentLoaded", () => {
  renderLocations();
  renderProperties();
  renderBenefits();
  populateLocationSelect();
  setupFormValidation();

  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (isEmailJsConfigured() && typeof emailjs !== "undefined") {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  }

  document.getElementById("menuToggle")?.addEventListener("click", toggleMenu);
  document.getElementById("enquiryForm")?.addEventListener("submit", handleSubmit);
  document.getElementById("modalBackdrop")?.addEventListener("click", (e) => {
    if (e.target.id === "modalBackdrop") closeModal();
  });

  document.querySelectorAll(".main-nav a, .nav-cta").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.querySelectorAll(".category-tab").forEach(btn => {
    btn.addEventListener("click", () => setCategory(btn.dataset.category));
  });
});
