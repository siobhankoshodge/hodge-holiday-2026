const legs = [
  { city: "Brussels", country: "Belgium", dates: "SAT 15 – MON 17 AUG", days: "NIGHTS 1-2", from: "London", time: "1h 53m", description: "Ease into the trip with two nights around the Grand Place, galleries and excellent little beer cafes." },
  { city: "Strasbourg", country: "France", dates: "MON 17 – TUE 18 AUG", days: "NIGHT 3", from: "Brussels", time: "3h 30m", description: "A storybook evening among the timber-framed houses and canals of La Petite France." },
  { city: "Lucerne", country: "Switzerland", dates: "TUE 18 – FRI 21 AUG", days: "NIGHTS 4-6", from: "Strasbourg", time: "2h 30m", description: "Three Alpine days for lake cruises, old-town wandering and the cogwheel railway up Mount Pilatus." },
  { city: "Lake Como", country: "Italy", dates: "FRI 21 – TUE 25 AUG", days: "NIGHTS 7-10", from: "Lucerne", time: "3h", description: "Four slow days moving by passenger ferry between Como, Bellagio, Varenna and the water's edge." },
  { city: "Lausanne", country: "Switzerland", dates: "TUE 25 – THU 27 AUG", days: "NIGHTS 11-12", from: "Como", time: "4h 30m", description: "Lake Geneva views, the Ouchy promenade and a possible vineyard afternoon among the terraces of Lavaux." },
  { city: "Lyon", country: "France", dates: "THU 27 – FRI 28 AUG", days: "NIGHT 13", from: "Lausanne", time: "2h 40m", description: "One delicious final night in France's food capital before the easy Lille connection home." }
];

const bookings = [
  { id: "rail-london-brussels", type: "train", title: "Eurostar to Brussels", subtitle: "London St Pancras to Brussels Midi", dateLabel: "Travel date", defaultDate: "2026-08-15" },
  { id: "hotel-brussels", type: "hotel", title: "Brussels hotel", subtitle: "2 nights", dateLabel: "Check-in date", defaultDate: "2026-08-15", defaultEndDate: "2026-08-17" },
  { id: "rail-brussels-strasbourg", type: "train", title: "Train to Strasbourg", subtitle: "Direct service - about 3h 30m", dateLabel: "Travel date", defaultDate: "2026-08-17" },
  { id: "hotel-strasbourg", type: "hotel", title: "Strasbourg hotel", subtitle: "1 night", dateLabel: "Check-in date", defaultDate: "2026-08-17", defaultEndDate: "2026-08-18" },
  { id: "rail-strasbourg-lucerne", type: "train", title: "Train to Lucerne", subtitle: "Morning departure - about 2h 30m", dateLabel: "Travel date", defaultDate: "2026-08-18" },
  { id: "hotel-lucerne", type: "hotel", title: "Lucerne hotel", subtitle: "3 nights", dateLabel: "Check-in date", defaultDate: "2026-08-18", defaultEndDate: "2026-08-21" },
  { id: "rail-lucerne-como", type: "train", title: "EuroCity to Como", subtitle: "Through the Alps - about 3h", dateLabel: "Travel date", defaultDate: "2026-08-21" },
  { id: "hotel-como", type: "hotel", title: "Lake Como hotel", subtitle: "4 nights", dateLabel: "Check-in date", defaultDate: "2026-08-21", defaultEndDate: "2026-08-25" },
  { id: "rail-como-lausanne", type: "train", title: "Train to Lausanne", subtitle: "Via the Simplon Pass - about 4h 30m", dateLabel: "Travel date", defaultDate: "2026-08-25" },
  { id: "hotel-lausanne", type: "hotel", title: "Lausanne hotel", subtitle: "2 nights", dateLabel: "Check-in date", defaultDate: "2026-08-25", defaultEndDate: "2026-08-27" },
  { id: "rail-lausanne-lyon", type: "train", title: "Train to Lyon", subtitle: "Direct to Lyon Part-Dieu - about 2h 40m", dateLabel: "Travel date", defaultDate: "2026-08-27" },
  { id: "hotel-lyon", type: "hotel", title: "Lyon hotel", subtitle: "Final night", dateLabel: "Check-in date", defaultDate: "2026-08-27", defaultEndDate: "2026-08-28" },
  { id: "rail-lyon-lille", type: "train", title: "TGV to Lille", subtitle: "Lyon Part-Dieu to Lille Europe - about 3h", dateLabel: "Travel date", defaultDate: "2026-08-28" },
  { id: "rail-lille-london", type: "train", title: "Eurostar home", subtitle: "Lille Europe to London St Pancras", dateLabel: "Travel date", defaultDate: "2026-08-28" }
];

const budgetItems = [
  { key: "trains", icon: "R", label: "Rail travel", note: "All intercity trains", value: 650 },
  { key: "hotels", icon: "H", label: "Hotels", note: "13 nights", value: 1950 },
  { key: "food", icon: "F", label: "Food & drink", note: "Markets to final dinner", value: 980 },
  { key: "activities", icon: "A", label: "Activities", note: "Boats, Pilatus & museums", value: 420 },
  { key: "local", icon: "L", label: "Local transport", note: "Trams, buses & ferries", value: 260 },
  { key: "buffer", icon: "+", label: "Just-in-case fund", note: "A sensible 10% cushion", value: 400 }
];

const activityLocations = [
  { id: "brussels", name: "Brussels", country: "Belgium", nights: "Nights 1-2" },
  { id: "strasbourg", name: "Strasbourg", country: "France", nights: "Night 3" },
  { id: "lucerne", name: "Lucerne", country: "Switzerland", nights: "Nights 4-6" },
  { id: "como", name: "Lake Como", country: "Italy", nights: "Nights 7-10" },
  { id: "lausanne", name: "Lausanne", country: "Switzerland", nights: "Nights 11-12" },
  { id: "lyon", name: "Lyon", country: "France", nights: "Night 13" }
];

const starterActivities = {
  brussels: [
    { name: "Grand Place wander", date: "", time: "", link: "", cost: "", done: false },
    { name: "Choose a Belgian dinner", date: "", time: "", link: "", cost: "", done: false }
  ],
  strasbourg: [
    { name: "La Petite France evening walk", date: "", time: "", link: "", cost: "", done: false }
  ],
  lucerne: [
    { name: "Mount Pilatus cogwheel railway", date: "", time: "", link: "", cost: "", done: false },
    { name: "Lake Lucerne cruise", date: "", time: "", link: "", cost: "", done: false }
  ],
  como: [
    { name: "Ferry to Bellagio", date: "", time: "", link: "", cost: "", done: false },
    { name: "Day in Varenna", date: "", time: "", link: "", cost: "", done: false }
  ],
  lausanne: [
    { name: "Ouchy lakeside promenade", date: "", time: "", link: "", cost: "", done: false },
    { name: "Lavaux vineyard visit", date: "", time: "", link: "", cost: "", done: false }
  ],
  lyon: [
    { name: "Book the final dinner", date: "", time: "", link: "", cost: "", done: false }
  ]
};

let stored = {};
try {
  stored = JSON.parse(localStorage.getItem("grandRailPlan") || "{}");
} catch {
  stored = {};
}

const legacyDetails = {};
const state = {
  checked: Array.isArray(stored.checked) ? stored.checked : [],
  bookingDetails: stored.bookingDetails || legacyDetails,
  activities: stored.activities || structuredClone(starterActivities),
  activeActivityLocation: stored.activeActivityLocation || "brussels",
  budget: { ...Object.fromEntries(budgetItems.map(item => [item.key, item.value])), ...(stored.budget || {}) },
  evening: stored.evening || false
};

bookings.forEach(booking => {
  state.bookingDetails[booking.id] ||= {};
  state.bookingDetails[booking.id].date ||= booking.defaultDate;
  if (booking.defaultEndDate) state.bookingDetails[booking.id].arrivalTime ||= booking.defaultEndDate;
});

const cloudConfig = window.HODGE_HOLIDAYS_CONFIG || {};
const cloud = window.supabase && cloudConfig.supabaseUrl && cloudConfig.supabasePublishableKey
  ? window.supabase.createClient(cloudConfig.supabaseUrl, cloudConfig.supabasePublishableKey)
  : null;
let cloudUser = null;
let cloudRole = null;
let cloudSaveTimer = null;
let applyingCloudData = false;

function save() {
  localStorage.setItem("grandRailPlan", JSON.stringify(state));
  if (!applyingCloudData && cloudUser && cloudRole === "editor") {
    setSyncStatus("saving", "Saving...");
    clearTimeout(cloudSaveTimer);
    cloudSaveTimer = setTimeout(saveToCloud, 700);
  }
}

function serializableState() {
  return {
    checked: state.checked,
    bookingDetails: state.bookingDetails,
    activities: state.activities,
    activeActivityLocation: state.activeActivityLocation,
    budget: state.budget,
    evening: state.evening
  };
}

async function saveToCloud() {
  if (!cloud || !cloudUser || cloudRole !== "editor") return;
  const { error } = await cloud.from("holiday_plans").upsert({
    id: cloudConfig.planId,
    data: serializableState(),
    updated_at: new Date().toISOString(),
    updated_by: cloudUser.id
  });
  setSyncStatus(error ? "error" : "online", error ? "Sync problem" : "Synced");
}

function setSyncStatus(status, label) {
  const dot = document.querySelector("#syncDot");
  dot.className = `sync-dot ${status}`;
  document.querySelector("#syncLabel").textContent = label;
}

function applyCloudState(data) {
  if (!data || typeof data !== "object") return;
  applyingCloudData = true;
  state.checked = Array.isArray(data.checked) ? data.checked : state.checked;
  state.bookingDetails = data.bookingDetails || state.bookingDetails;
  state.activities = data.activities || state.activities;
  state.activeActivityLocation = data.activeActivityLocation || state.activeActivityLocation;
  state.budget = { ...state.budget, ...(data.budget || {}) };
  state.evening = Boolean(data.evening);
  localStorage.setItem("grandRailPlan", JSON.stringify(state));
  applyingCloudData = false;
  renderAll();
}

async function loadCloudPlan() {
  const { data, error } = await cloud.from("holiday_plans").select("data").eq("id", cloudConfig.planId).maybeSingle();
  if (error) {
    setSyncStatus("error", "Setup needed");
    showSyncBanner("Cloud database setup is not complete yet.", "Open account");
    return;
  }
  if (data?.data) applyCloudState(data.data);
  setSyncStatus("online", cloudRole === "editor" ? "Synced" : "View only");
}

async function establishCloudSession(session) {
  cloudUser = session?.user || null;
  cloudRole = null;
  document.body.classList.remove("viewer-mode");

  if (!cloudUser) {
    setSyncStatus("offline", "Sign in");
    showSyncBanner("This device is saving locally. Sign in to use the family master plan.", "Sign in to sync");
    updateAccountDialog();
    return;
  }

  const email = cloudUser.email || "";
  const { data, error } = await cloud.from("holiday_access").select("role").eq("email", email).maybeSingle();
  if (error || !data) {
    setSyncStatus("error", "No access");
    showSyncBanner("This email has not been added to the holiday yet.", "Account details");
    updateAccountDialog();
    return;
  }

  cloudRole = data.role;
  document.body.classList.toggle("viewer-mode", cloudRole === "viewer");
  hideSyncBanner();
  updateAccountDialog();
  await loadCloudPlan();
}

function showSyncBanner(message, action) {
  document.querySelector("#syncMessage").textContent = message;
  document.querySelector("#syncAction").textContent = action;
  document.querySelector("#syncBanner").hidden = false;
}

function hideSyncBanner() {
  document.querySelector("#syncBanner").hidden = true;
}

const deviceStateAtLoad = structuredClone(serializableState());

function updateAccountDialog() {
  const signedOut = document.querySelector("#signedOutPanel");
  const signedIn = document.querySelector("#signedInPanel");
  signedOut.hidden = Boolean(cloudUser);
  signedIn.hidden = !cloudUser;
  if (!cloudUser) return;

  document.querySelector("#accountEmail").textContent = cloudUser.email || "";
  document.querySelector("#accountRole").textContent = cloudRole === "editor"
    ? "Editor - changes sync"
    : cloudRole === "viewer"
      ? "Viewer - read only"
      : "Access not configured";
  document.querySelector("#uploadLocalData").hidden = cloudRole !== "editor";
}

function applyAccessMode() {
  const readOnly = cloudRole === "viewer";
  document.body.classList.toggle("viewer-mode", readOnly);
  document.querySelectorAll(
    "#bookings input, #bookings textarea, #budget input, #resetBudget, #activities input, #activities .activity-delete, #activities .activity-add"
  ).forEach(control => {
    control.disabled = readOnly;
  });
}

function openAccountDialog() {
  updateAccountDialog();
  document.querySelector("#accountDialog").showModal();
}

async function initialiseCloud() {
  if (!cloud) {
    setSyncStatus("error", "Offline only");
    showSyncBanner("Cloud sync could not be loaded. This device will continue saving locally.", "Details");
    return;
  }
  const { data } = await cloud.auth.getSession();
  await establishCloudSession(data.session);
  cloud.auth.onAuthStateChange((_event, session) => {
    setTimeout(() => establishCloudSession(session), 0);
  });
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function normalizeUrl(value) {
  const trimmed = String(value || "").trim();
  if (!trimmed) return "";
  try {
    const url = new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function renderLegs() {
  document.querySelector("#itineraryGrid").innerHTML = legs.map((leg, index) => `
    <article class="leg-card">
      <div class="leg-top">
        <span class="leg-number">Leg ${String(index + 1).padStart(2, "0")}</span>
        <span class="leg-days">${leg.days}</span>
      </div>
      <h3>${leg.city}</h3>
      <p class="leg-date">${leg.dates}</p>
      <p class="country">${leg.country.toUpperCase()}</p>
      <p class="leg-description">${leg.description}</p>
      <div class="journey"><span>${leg.from} &rarr; ${leg.city}</span><span>${leg.time}</span></div>
    </article>
  `).join("");
}

function bookingDetails(id) {
  return state.bookingDetails[id] || {};
}

function renderBookings() {
  const target = document.querySelector("#bookingChecklist");
  target.innerHTML = bookings.map((booking, index) => {
    const details = bookingDetails(booking.id);
    const booked = state.checked.includes(booking.id) || state.checked.includes(index);
    const url = normalizeUrl(details.link);
    return `
      <details class="booking-record ${booked ? "is-booked" : ""}" data-id="${booking.id}">
        <summary class="booking-summary">
          <span class="booking-type" aria-hidden="true">${booking.type === "hotel" ? "H" : "R"}</span>
          <span class="booking-title"><strong>${booking.title}</strong><span>${booking.subtitle}</span></span>
          <span class="booking-status">${booked ? "Booked" : "To book"}</span>
          <span class="booking-chevron" aria-hidden="true">&#8964;</span>
        </summary>
        <div class="booking-form">
          <div class="booking-fields">
            <label class="booking-field">
              <span>${booking.dateLabel}</span>
              <input type="date" data-field="date" value="${escapeHtml(details.date)}">
            </label>
            <label class="booking-field">
              <span>Confirmation number</span>
              <input type="text" data-field="confirmation" value="${escapeHtml(details.confirmation)}" placeholder="e.g. ABC12345">
            </label>
            <label class="booking-field">
              <span>${booking.type === "hotel" ? "Check-in time" : "Departure time"}</span>
              <input type="time" data-field="departureTime" value="${escapeHtml(details.departureTime)}">
            </label>
            <label class="booking-field">
              <span>${booking.type === "hotel" ? "Check-out date" : "Arrival time"}</span>
              <input type="${booking.type === "hotel" ? "date" : "time"}" data-field="arrivalTime" value="${escapeHtml(details.arrivalTime)}">
            </label>
            <label class="booking-field">
              <span>${booking.type === "hotel" ? "Hotel / provider" : "Operator / train number"}</span>
              <input type="text" data-field="provider" value="${escapeHtml(details.provider)}" placeholder="${booking.type === "hotel" ? "Hotel name" : "e.g. Eurostar 9114"}">
            </label>
            <label class="booking-field">
              <span>Cost paid</span>
              <input type="number" min="0" step="0.01" data-field="cost" value="${escapeHtml(details.cost)}" placeholder="0.00">
            </label>
            <label class="booking-field wide">
              <span>Booking or confirmation link</span>
              <input type="url" data-field="link" value="${escapeHtml(details.link)}" placeholder="https://...">
            </label>
            <label class="booking-field wide">
              <span>Notes</span>
              <textarea data-field="notes" placeholder="Seat numbers, room type, cancellation details...">${escapeHtml(details.notes)}</textarea>
            </label>
          </div>
          <div class="booking-actions">
            <label class="booked-toggle">
              <input type="checkbox" data-booked ${booked ? "checked" : ""}>
              Booking confirmed
            </label>
            <a class="visit-link ${url ? "" : "is-disabled"}" href="${escapeHtml(url || "#")}" target="_blank" rel="noopener">Open booking link</a>
          </div>
        </div>
      </details>
    `;
  }).join("");

  target.oninput = handleBookingInput;
  target.onchange = handleBookingInput;
  updateProgress();
}

function handleBookingInput(event) {
  const record = event.target.closest(".booking-record");
  if (!record) return;
  const id = record.dataset.id;

  if (event.target.matches("[data-booked]")) {
    state.checked = state.checked.filter(value => typeof value !== "number" && value !== id);
    if (event.target.checked) state.checked.push(id);
    record.classList.toggle("is-booked", event.target.checked);
    record.querySelector(".booking-status").textContent = event.target.checked ? "Booked" : "To book";
    updateProgress();
  } else if (event.target.dataset.field) {
    state.bookingDetails[id] = {
      ...bookingDetails(id),
      [event.target.dataset.field]: event.target.value
    };
    if (event.target.dataset.field === "link") {
      const link = record.querySelector(".visit-link");
      const url = normalizeUrl(event.target.value);
      link.href = url || "#";
      link.classList.toggle("is-disabled", !url);
    }
  }
  save();
}

function updateProgress() {
  const validIds = new Set(bookings.map(item => item.id));
  const done = new Set(state.checked.map(value => typeof value === "number" ? bookings[value]?.id : value).filter(value => validIds.has(value))).size;
  const percent = Math.round((done / bookings.length) * 100);
  document.querySelector("#bookingCounter").textContent = `${done} / ${bookings.length}`;
  document.querySelector("#progressPercent").textContent = `${percent}%`;
  document.querySelector("#progressRing").style.strokeDashoffset = 314.16 - (314.16 * percent / 100);
}

function renderBudget() {
  const list = document.querySelector("#budgetList");
  list.innerHTML = budgetItems.map(item => `
    <div class="budget-row">
      <div class="budget-label">
        <span class="budget-icon">${item.icon}</span>
        <span><strong>${item.label}</strong><span>${item.note}</span></span>
      </div>
      <label class="money-input"><span>&pound;</span><input aria-label="${item.label}" type="number" min="0" step="10" data-key="${item.key}" value="${state.budget[item.key]}"></label>
    </div>
  `).join("");
  list.oninput = event => {
    state.budget[event.target.dataset.key] = Number(event.target.value) || 0;
    save();
    updateBudget();
  };
  updateBudget();
}

function updateBudget() {
  const total = Object.values(state.budget).reduce((sum, value) => sum + Number(value), 0);
  const format = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });
  document.querySelector("#budgetTotal").textContent = format.format(total);
  document.querySelector("#perDay").textContent = `${format.format(total / 14)} per day`;
}

function renderActivityTabs() {
  document.querySelector("#locationTabs").innerHTML = activityLocations.map(location => `
    <button class="location-tab ${location.id === state.activeActivityLocation ? "active" : ""}" type="button" role="tab" aria-selected="${location.id === state.activeActivityLocation}" data-location="${location.id}">
      ${location.name}<span>${(state.activities[location.id] || []).length} planned</span>
    </button>
  `).join("");
}

function renderActivities() {
  const location = activityLocations.find(item => item.id === state.activeActivityLocation) || activityLocations[0];
  const items = state.activities[location.id] || [];
  const total = items.reduce((sum, item) => sum + (Number(item.cost) || 0), 0);
  const format = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });

  document.querySelector("#activityLocation").innerHTML = `
    <div class="activity-location-header">
      <div class="activity-location-title">
        <p class="eyebrow">${location.country.toUpperCase()} · ${location.nights.toUpperCase()}</p>
        <h3>${location.name}</h3>
      </div>
      <div class="activity-summary">
        <strong>${format.format(total)}</strong>
        <span>planned activity cost</span>
      </div>
    </div>
    <div class="activity-list">
      ${items.length ? items.map((item, index) => `
        <div class="activity-card ${item.done ? "is-done" : ""}" data-index="${index}">
          <input class="activity-check" type="checkbox" data-activity-field="done" aria-label="Mark ${escapeHtml(item.name || "activity")} complete" ${item.done ? "checked" : ""}>
          <label class="activity-input-group">
            <span>Activity or idea</span>
            <input class="activity-name" type="text" data-activity-field="name" value="${escapeHtml(item.name)}" placeholder="What would you like to do?">
          </label>
          <label class="activity-input-group">
            <span>Date</span>
            <input type="date" data-activity-field="date" value="${escapeHtml(item.date)}">
          </label>
          <label class="activity-input-group">
            <span>Time</span>
            <input type="time" data-activity-field="time" value="${escapeHtml(item.time)}">
          </label>
          <label class="activity-input-group">
            <span>Cost (£)</span>
            <input type="number" min="0" step="0.01" data-activity-field="cost" value="${escapeHtml(item.cost)}" placeholder="0">
          </label>
          <button class="activity-delete" type="button" data-delete-activity aria-label="Delete ${escapeHtml(item.name || "activity")}">&times;</button>
          <label class="activity-input-group wide">
            <span>Link or notes</span>
            <input type="text" data-activity-field="link" value="${escapeHtml(item.link)}" placeholder="Tickets, restaurant, address or a quick note">
          </label>
        </div>
      `).join("") : `<div class="activity-empty">Nothing planned here yet. Add the first idea when inspiration strikes.</div>`}
    </div>
    <div class="activity-footer">
      <button class="activity-add" type="button" id="addActivity">+ Add an activity</button>
      <span class="activity-hint">${items.filter(item => item.done).length} of ${items.length} activities booked or completed</span>
    </div>
  `;
}

document.querySelector("#locationTabs").addEventListener("click", event => {
  const tab = event.target.closest("[data-location]");
  if (!tab) return;
  state.activeActivityLocation = tab.dataset.location;
  save();
  renderActivityTabs();
  renderActivities();
});

document.querySelector("#activityLocation").addEventListener("input", handleActivityChange);
document.querySelector("#activityLocation").addEventListener("change", handleActivityChange);
document.querySelector("#activityLocation").addEventListener("click", event => {
  if (event.target.id === "addActivity") {
    state.activities[state.activeActivityLocation] ||= [];
    state.activities[state.activeActivityLocation].push({ name: "", date: "", time: "", link: "", cost: "", done: false });
    save();
    renderActivityTabs();
    renderActivities();
    const names = document.querySelectorAll(".activity-name");
    names[names.length - 1]?.focus();
  }

  const deleteButton = event.target.closest("[data-delete-activity]");
  if (deleteButton) {
    const index = Number(deleteButton.closest(".activity-card").dataset.index);
    state.activities[state.activeActivityLocation].splice(index, 1);
    save();
    renderActivityTabs();
    renderActivities();
  }
});

function handleActivityChange(event) {
  const field = event.target.dataset.activityField;
  const card = event.target.closest(".activity-card");
  if (!field || !card) return;
  const item = state.activities[state.activeActivityLocation][Number(card.dataset.index)];
  item[field] = field === "done" ? event.target.checked : event.target.value;
  save();
  if (field === "done") renderActivities();
  if (field === "cost") updateActivityTotal();
}

function updateActivityTotal() {
  const items = state.activities[state.activeActivityLocation] || [];
  const total = items.reduce((sum, item) => sum + (Number(item.cost) || 0), 0);
  const format = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });
  const totalElement = document.querySelector(".activity-summary strong");
  if (totalElement) totalElement.textContent = format.format(total);
}

document.querySelector("#accountButton").addEventListener("click", openAccountDialog);
document.querySelector("#syncAction").addEventListener("click", openAccountDialog);
document.querySelector("#closeAccount").addEventListener("click", () => document.querySelector("#accountDialog").close());
document.querySelector("#accountDialog").addEventListener("click", event => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});

document.querySelector("#signInForm").addEventListener("submit", async event => {
  event.preventDefault();
  const email = document.querySelector("#signInEmail").value.trim();
  const message = document.querySelector("#authMessage");
  message.textContent = "Sending your secure link...";
  const redirectTo = window.location.protocol === "file:"
    ? "https://siobhankoshodge.github.io/hodge-holiday-2026/"
    : window.location.href.split("#")[0];
  const { error } = await cloud.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: redirectTo }
  });
  message.textContent = error ? error.message : "Check your inbox for the sign-in link.";
});

document.querySelector("#signOutButton").addEventListener("click", async () => {
  document.querySelector("#accountMessage").textContent = "Signing out...";
  await cloud.auth.signOut();
  document.querySelector("#accountDialog").close();
});

document.querySelector("#uploadLocalData").addEventListener("click", async () => {
  const message = document.querySelector("#accountMessage");
  message.textContent = "Uploading this device's plan...";
  const { error } = await cloud.from("holiday_plans").upsert({
    id: cloudConfig.planId,
    data: deviceStateAtLoad,
    updated_at: new Date().toISOString(),
    updated_by: cloudUser.id
  });
  if (error) {
    message.textContent = error.message;
    return;
  }
  applyCloudState(deviceStateAtLoad);
  setSyncStatus("online", "Synced");
  message.textContent = "This device is now the family master plan.";
});

document.querySelector("#expandBookings").addEventListener("click", event => {
  const records = [...document.querySelectorAll(".booking-record")];
  const shouldOpen = records.some(record => !record.open);
  records.forEach(record => { record.open = shouldOpen; });
  event.currentTarget.textContent = shouldOpen ? "Close all" : "Open all";
});

document.querySelector("#resetBudget").addEventListener("click", () => {
  state.budget = Object.fromEntries(budgetItems.map(item => [item.key, item.value]));
  save();
  renderBudget();
});

document.querySelector("#printButton").addEventListener("click", () => window.print());
document.querySelector("#themeButton").addEventListener("click", () => {
  state.evening = !state.evening;
  document.body.classList.toggle("evening", state.evening);
  document.querySelector("#themeButton").textContent = state.evening ? "\u263e" : "\u263c";
  save();
});

function renderAll() {
  document.body.classList.toggle("evening", state.evening);
  document.querySelector("#themeButton").textContent = state.evening ? "\u263e" : "\u263c";
  renderLegs();
  renderBookings();
  renderBudget();
  renderActivityTabs();
  renderActivities();
  applyAccessMode();
}

renderAll();
initialiseCloud();
