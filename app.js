/* ==========================================================================
   META MESSENGER BROADCAST & AUTO-REPLY HUB - LOGIC ENGINE
   ========================================================================== */

// Translation Dictionary (English and Urdu)
const translations = {
    en: {
        "txt-app-logo-title": "MetaHub",
        "txt-nav-dashboard": "Dashboard",
        "txt-nav-broadcaster": "Broadcaster",
        "txt-nav-autoreply": "Auto-Replies",
        "txt-nav-settings": "Settings",
        "txt-user-name": "Meta Business Admin",
        "txt-user-role": "Page Administrator",
        "txt-header-breadcrumb": "Application",
        "txt-header-page-title-dashboard": "Dashboard Overview",
        "txt-header-page-title-broadcaster": "Broadcast Console",
        "txt-header-page-title-autoreply": "Auto-Response Rules",
        "txt-header-page-title-settings": "Meta API Settings",
        "txt-status-indicator-sim": "Simulation Mode",
        "txt-status-indicator-live": "Live Mode",
        "txt-stat-subscribers-title": "Active Contacts",
        "txt-stat-subscribers-desc": "People interacting with your Page",
        "txt-stat-sent-title": "Messages Sent",
        "txt-stat-sent-desc": "Total dispatched messages",
        "txt-stat-success-title": "Success Rate",
        "txt-stat-success-desc": "Safe deliveries completed",
        "txt-stat-rules-title": "Active Auto-Replies",
        "txt-stat-rules-desc": "Automated reply keyword rules",
        "txt-chart-title": "Broadcasting Activity Analytics (Last 7 Days)",
        "txt-legend-sent": "Messages Sent",
        "txt-contacts-panel-title": "Active Messenger Contacts",
        "txt-rules-panel-title": "Meta Messaging Policies",
        "txt-policy-guide-1": "1. <strong>24-Hour Rule:</strong> You can only send standard freeform messages to a subscriber within 24 hours of their last interaction with your Page.",
        "txt-policy-guide-2": "2. <strong>One-Time Notifications (OTN):</strong> Outside the 24-hour window, you require specific user opt-in tokens to send promotional broadcasts.",
        "txt-policy-guide-3": "3. <strong>Anti-Spam Pacing:</strong> Sending bulk broadcasts too fast triggers automated spam blocks. MetaHub enforces configurable pacing delays to keep your Page healthy.",
        "btn-learn-more": "Learn More",
        "txt-composer-title": "Compose Messenger Broadcast",
        "txt-composer-msg-label": "Broadcast Message Content",
        "txt-composer-delay-label": "Safety Delay Between Messages",
        "txt-composer-delay-desc": "Safe delay window to avoid triggering anti-spam security.",
        "txt-composer-random-label": "Randomize Delays",
        "txt-composer-random-desc": "Vary intervals slightly to simulate human pattern.",
        "txt-btn-broadcast-label": "Dispatch Messages Now",
        "txt-queue-title": "Broadcasting Progress & Console",
        "txt-progress-status-idle": "Status: Idle",
        "txt-progress-status-running": "Status: Broadcasting...",
        "txt-progress-status-complete": "Status: Finished Successfully!",
        "txt-progress-status-stopped": "Status: Stopped / Error",
        "txt-progress-sent": "Delivered",
        "txt-progress-failed": "Failed",
        "txt-progress-remaining": "Remaining",
        "txt-console-label": "Real-time Transmission Audit Logs",
        "txt-rule-creator-title": "Add Auto-Reply Rule",
        "txt-rule-keyword-label": "Incoming Trigger Keywords",
        "txt-rule-keyword-desc": "Comma-separated list of keywords that trigger this auto-reply.",
        "txt-rule-response-label": "Response Text Template",
        "txt-rules-list-title": "Active Automated Rules",
        "txt-btn-add-rule-label": "Create Automated Rule",
        "txt-settings-mode-title": "Execution Mode",
        "txt-settings-sim-label": "Demo Simulation Mode",
        "txt-settings-sim-desc": "Use sandboxed subscribers and logging without querying real Meta endpoints.",
        "txt-settings-api-title": "Meta Graph API Settings",
        "txt-settings-api-desc": "Configure your official Meta Platform parameters. When Demo Simulation Mode is toggled off, MetaHub utilizes these details to query actual subscriber profiles and dispatch direct broadcasts.",
        "txt-settings-token-label": "Page Access Token",
        "txt-settings-id-label": "Facebook Page ID",
        "txt-btn-save-settings": "Save Meta Settings",
        "txt-settings-guide-title": "Meta API Configuration Guide",
        "txt-guide-p1": "To capture Messenger Page-Scoped User IDs (PSIDs) and broadcast compliant messages, proceed as follows:",
        "txt-guide-li1": "Visit the Meta Developers Portal and select Create App.",
        "txt-guide-li2": "Assign the Messenger product to your newly created application.",
        "txt-guide-li3": "Link your designated Facebook Business Page inside the Messenger settings workspace.",
        "txt-guide-li4": "Under token generation parameters, extract the unique Page Access Token.",
        "txt-guide-li5": "Ensure the Webhooks feature is subscribed to the messages and messaging_postbacks parameters on your backend server.",
        "txt-guide-li6": "Copy your credentials into the setting fields above, turn off Demo Mode, and you're ready to communicate officially.",
        "msg-broadcast-empty": "Please write a broadcast message first!",
        "msg-save-success": "Meta credentials saved successfully!",
        "msg-no-subscribers": "No active subscribers found to broadcast to.",
        "msg-add-rule-error": "Please provide both keywords and response text.",
        "msg-rule-added": "Auto-reply rule added successfully!",
        "txt-btn-fb-login": "Connect Facebook Account",
        "txt-oauth-header": "Meta Authorization Dialogue",
        "txt-oauth-desc1": "<strong>MetaHub</strong> is requesting access to connect your Facebook account and manage your business Pages:",
        "txt-oauth-perm1": "Manage Page conversations in Messenger",
        "txt-oauth-perm2": "Access Page list and details",
        "txt-oauth-desc2": "By logging in, your associated Page Subscribers list will automatically sync with this dashboard.",
        "txt-oauth-btn-confirm": "Continue as Meta Admin",
        "txt-oauth-btn-cancel": "Cancel",
        "msg-login-success": "Facebook account linked successfully! Syncing pages...",
        "msg-login-error-live": "Live Facebook SDK is not configured yet. Set simulation mode to ON to test the simulated OAuth dialogue!",
        "txt-settings-privacy-span": "🔒 <strong>Client-Side Isolation:</strong> All tokens, credentials, and auto-reply rules are stored strictly inside your browser's local sandbox (localStorage). Your keys are 100% private and never transmitted to our servers or mixed with other users."
    },
    ur: {
        "txt-app-logo-title": "میٹا ہب",
        "txt-nav-dashboard": "ڈیش بورڈ",
        "txt-nav-broadcaster": "براڈکاسٹر",
        "txt-nav-autoreply": "خودکار جوابات",
        "txt-nav-settings": "سیٹنگز",
        "txt-user-name": "کاروباری ایڈمن",
        "txt-user-role": "پیج ایڈمنسٹریٹر",
        "txt-header-breadcrumb": "ایپلی کیشن",
        "txt-header-page-title-dashboard": "ڈیش بورڈ کا جائزہ",
        "txt-header-page-title-broadcaster": "براڈکاسٹ کنسول",
        "txt-header-page-title-autoreply": "خودکار جواب کے قوانین",
        "txt-header-page-title-settings": "میٹا اے پی آئی سیٹنگز",
        "txt-status-indicator-sim": "سیمولیشن موڈ",
        "txt-status-indicator-live": "لائیو موڈ",
        "txt-stat-subscribers-title": "فعال کنٹیکٹس",
        "txt-stat-subscribers-desc": "لوگ جو آپ کے پیج سے رابطہ کر رہے ہیں",
        "txt-stat-sent-title": "بھیجے گئے پیغامات",
        "txt-stat-sent-desc": "کل روانہ کیے گئے پیغامات",
        "txt-stat-success-title": "کامیابی کی شرح",
        "txt-stat-success-desc": "محفوظ طریقے سے پیغامات کی کامیاب ترسیل",
        "txt-stat-rules-title": "فعال خودکار جوابات",
        "txt-stat-rules-desc": "خودکار جواب کے کی ورڈ قوانین",
        "txt-chart-title": "براڈکاسٹنگ کی سرگرمی کا تجزیہ (آخری 7 دن)",
        "txt-legend-sent": "بھیجے گئے پیغامات",
        "txt-contacts-panel-title": "فعال میسنجر کنٹیکٹس",
        "txt-rules-panel-title": "میٹا میسجنگ پالیسیز",
        "txt-policy-guide-1": "1۔ <strong>24 گھنٹے کا قانون:</strong> آپ کسی بھی صارف کو آخری رابطے کے بعد صرف 24 گھنٹے کے اندر ہی کوئی پیغام بھیج سکتے ہیں۔",
        "txt-policy-guide-2": "2۔ <strong>ون ٹائم نوٹیفکیشن (OTN):</strong> 24 گھنٹے کی حد کے بعد پروموشنل براڈکاسٹ بھیجنے کے لیے صارف سے پیشگی اجازت ٹوکن درکار ہوتا ہے۔",
        "txt-policy-guide-3": "3۔ <strong>اسپیمنگ سے بچاؤ:</strong> بہت تیزی سے بلک میسج بھیجنے سے فیس بک پیج بلاک ہو سکتا ہے۔ میٹا ہب سیکیورٹی کے لیے وقفہ نافذ کرتا ہے۔",
        "btn-learn-more": "مزید جانیں",
        "txt-composer-title": "براڈکاسٹ پیغام تیار کریں",
        "txt-composer-msg-label": "میسج کا متن",
        "txt-composer-delay-label": "پیغامات کے درمیان محفوظ وقفہ",
        "txt-composer-delay-desc": "اسپیمنگ سیکیورٹی سسٹم سے بچنے کے لیے پیغامات کے درمیان محفوظ ترین وقفہ۔",
        "txt-composer-random-label": "وقفوں کو تبدیل کریں",
        "txt-composer-random-desc": "پیغامات کی روانگی کے اوقات میں تھوڑی تبدیلی کریں تاکہ یہ خودکار نہ لگے۔",
        "txt-btn-broadcast-label": "ابھی پیغامات روانہ کریں",
        "txt-queue-title": "براڈکاسٹنگ کی پیشرفت اور کنسول",
        "txt-progress-status-idle": "حالت: فارغ ہے",
        "txt-progress-status-running": "حالت: پیغامات بھیجے جا رہے ہیں...",
        "txt-progress-status-complete": "حالت: تمام پیغامات کامیابی سے پہنچ گئے!",
        "txt-progress-status-stopped": "حالت: عمل رک گیا ہے / خرابی",
        "txt-progress-sent": "پہنچ گئے",
        "txt-progress-failed": "ناکام",
        "txt-progress-remaining": "باقی",
        "txt-console-label": "حقیقی وقت کے آڈٹ لاگز (Real-time Audit Logs)",
        "txt-rule-creator-title": "خودکار جواب کا نیا قانون بنائیں",
        "txt-rule-keyword-label": "کی ورڈ ٹریگرز",
        "txt-rule-keyword-desc": "ایسے الفاظ جو کسٹمر بھیجے تو خودکار جواب جائے۔ کوما (,) کے ذریعے الگ کریں۔",
        "txt-rule-response-label": "خودکار جوابی پیغام کا ٹیمپلیٹ",
        "txt-rules-list-title": "فعال خودکار قوانین کی فہرست",
        "txt-btn-add-rule-label": "خودکار قانون محفوظ کریں",
        "txt-settings-mode-title": "عملدرآمد کا طریقہ کار",
        "txt-settings-sim-label": "ڈیمو سیمولیشن موڈ",
        "txt-settings-sim-desc": "حقیقی فیس بک اے پی آئی کے بغیر فرضی صارفین اور لاگز کے ساتھ ٹیسٹ کریں۔",
        "txt-settings-api-title": "میٹا گراف اے پی آئی سیٹنگز (Meta Graph API)",
        "txt-settings-api-desc": "اپنے آفیشل فیس بک کی سیٹنگز یہاں درج کریں۔ جب ڈیمو سیمولیشن موڈ بند ہوگا، تو سافٹ ویئر اصل صارفین کو پیغام بھیجنے کے لیے ان کا استعمال کرے گا۔",
        "txt-settings-token-label": "پیج ایکسیس ٹوکن (Page Access Token)",
        "txt-settings-id-label": "فیس بک پیج آئی ڈی (Page ID)",
        "txt-btn-save-settings": "میٹا سیٹنگز محفوظ کریں",
        "txt-settings-guide-title": "میٹا اے پی آئی کنفیگریشن گائیڈ",
        "txt-guide-p1": "میسنجر پیج اسکوپڈ آئی ڈی (PSID) حاصل کرنے اور پیغامات بھیجنے کا طریقہ کار یہ ہے:",
        "txt-guide-li1": "میٹا ڈیولپر پورٹل (developers.facebook.com) پر جائیں اور 'Create App' پر کلک کریں۔",
        "txt-guide-li2": "اپنی نئی ایپلی کیشن میں 'Messenger' پروڈکٹ شامل کریں۔",
        "txt-guide-li3": "سیٹنگز میں جا کر اپنے فیس بک بزنس پیج کو ایپلی کیشن سے لنک کریں۔",
        "txt-guide-li4": "ٹوکن جنریشن سیکشن سے پیج ایکسیس ٹوکن (Page Access Token) کاپی کریں۔",
        "txt-guide-li5": "اپنے سرور پر Webhooks کو فعال کریں اور messages اور messaging_postbacks پر سبسکرائب کریں۔",
        "txt-guide-li6": "یہ معلومات اوپر دیے گئے فارم میں درج کریں، ڈیمو موڈ بند کریں اور لائیو براڈکاسٹنگ کریں۔",
        "msg-broadcast-empty": "براہ کرم پہلے براڈکاسٹ پیغام لکھیں!",
        "msg-save-success": "میٹا ایکسیس معلومات کامیابی کے ساتھ محفوظ کر لی گئی ہیں!",
        "msg-no-subscribers": "پیغام بھیجنے کے لیے کوئی فعال صارف دستیاب نہیں ہے۔",
        "msg-add-rule-error": "براہ کرم کی ورڈز اور جوابی میسج دونوں درج کریں۔",
        "msg-rule-added": "خودکار جواب کا قانون کامیابی کے ساتھ بن گیا ہے!",
        "txt-btn-fb-login": "فیس بک اکاؤنٹ لنک کریں",
        "txt-oauth-header": "میٹا لاگ ان ڈائیلاگ (Meta OAuth)",
        "txt-oauth-desc1": "<strong>میٹا ہب</strong> آپ کے فیس بک اکاؤنٹ کو مربوط کرنے اور کاروباری پیجز کا انتظام کرنے کی اجازت مانگ رہا ہے:",
        "txt-oauth-perm1": "میسنجر میں پیج کے پیغامات کا انتظام کریں",
        "txt-oauth-perm2": "پیج کی فہرست اور تفصیلات تک رسائی حاصل کریں",
        "txt-oauth-desc2": "لاگ ان کرنے کے بعد، آپ کے فیس بک پیج کے تمام صارفین خودکار طور پر ڈیش بورڈ سے ہم آہنگ (sync) ہو جائیں گے۔",
        "txt-oauth-btn-confirm": "بطور ایڈمن لاگ ان جاری رکھیں",
        "txt-oauth-btn-cancel": "کینسل کریں",
        "msg-login-success": "فیس بک اکاؤنٹ کامیابی سے منسلک ہو گیا ہے! پیجز لوڈ کیے جا رہے ہیں...",
        "msg-login-error-live": "لائیو فیس بک SDK ترتیب نہیں دیا گیا ہے۔ ٹیسٹ کرنے کے لیے ڈیمو سیمولیشن موڈ کو آن کریں!",
        "txt-settings-privacy-span": "🔒 <strong>مستحکم ڈیٹا پرائیویسی:</strong> آپ کے تمام ٹوکنز، پاس ورڈز اور قوانین صرف آپ کے اپنے براؤزر کے لوکل اسٹوریج (localStorage) میں محفوظ ہوتے ہیں۔ آپ کا ڈیٹا ہمارے سرور پر کبھی نہیں جاتا اور دوسرے صارفین سے 100٪ علیحدہ رہتا ہے۔"
    }
};

// Default State Engine
let appState = {
    language: 'en',
    theme: 'dark',
    simulationMode: false,
    stats: {
        subscribers: 8,
        sent: 324,
        successRate: "98.4%",
        rules: 4
    },
    credentials: {
        accessToken: 'EAANoaPwrm30BRsMbZAj5UzWWdCJDv2hbG4ZBgn2g8pphrxjnlZAZAzZAY8bMl3Kk0LXidWdKwRZBuuO1ZB9TSZCaZCdWZB5Ea5gsZCSKxSvjnhEKhriZAG0JN7QDTJc5lZBrhM4jepAusYigoxZAtZAv7rtQfS2ZAMH0cVbOtjdAmmSuHdtFO5ahZBZBJejBfkZB843MZApOuw1JteG88tJLDr3vu4S4MLlZCq5d4SZCe4oF5cHcss0CBjovT6xlaGT9SOVLdHFO9Gp8QUqlnzoPkIVeBNJM0wmEZCF',
        pageId: '1302283298694661'
    },
    subscribers: [
        { psid: "psid_729481023", name: "Muhammad Rizwan", avatar: "MR", status: "active", lastActive: "2 mins ago" },
        { psid: "psid_194720482", name: "Sarah Jenkins", avatar: "SJ", status: "active", lastActive: "15 mins ago" },
        { psid: "psid_928374829", name: "Hamza Sheikh", avatar: "HS", status: "active", lastActive: "1 hour ago" },
        { psid: "psid_382947291", name: "Aisha Bibi", avatar: "AB", status: "active", lastActive: "3 hours ago" },
        { psid: "psid_882947102", name: "Zainab Ali", avatar: "ZA", status: "active", lastActive: "5 hours ago" },
        { psid: "psid_449281729", name: "David Miller", avatar: "DM", status: "active", lastActive: "12 hours ago" },
        { psid: "psid_771928472", name: "Usman Ghani", avatar: "UG", status: "active", lastActive: "1 day ago" },
        { psid: "psid_552918274", name: "Emily Watson", avatar: "EW", status: "active", lastActive: "1 day ago" }
    ],
    autoReplyRules: [
        { id: 1, keywords: "price, details, rate, قیمت", response: "Hello [name]! Our pricing starts at $49/month with full access. Let us know if you want a detailed proposal!" },
        { id: 2, keywords: "hi, hello, salam, سلام", response: "Hello [name]! Thank you for reaching out to us. How can we assist you today?" },
        { id: 3, keywords: "support, help, رابطہ", response: "Hello [name]! Your support ticket has been registered. An admin will get back to you within 30 minutes." },
        { id: 4, keywords: "features, info, معلومات", response: "Hello [name]! Our platform supports: Safe Broadcasting, Automated Keyword Replies, Live Analytics Dashboard, and Bilingual Support." }
    ]
};

// Global Broadcast Controller
let activeBroadcastTimer = null;
let activeBroadcastQueue = [];
let isBroadcasting = false;

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Load state from localStorage
    loadStateFromStorage();
    
    // Apply Settings
    applyTheme(appState.theme);
    applyLanguage(appState.language);
    
    // Render UI Panels
    renderSubscribers();
    renderRules();
    updateStatsDisplay();
    
    // Set settings values
    document.getElementById("settings-simulation-switch").checked = appState.simulationMode;
    document.getElementById("settings-access-token").value = appState.credentials.accessToken;
    document.getElementById("settings-page-id").value = appState.credentials.pageId;
    
    // Setup tab listeners
    setupTabNavigation();
    
    // Add default status classes
    updateStatusPill();
});

/* ==========================================================================
   STATE MANAGEMENT
   ========================================================================== */

function saveStateToStorage() {
    localStorage.setItem("metahub_state", JSON.stringify(appState));
}

function loadStateFromStorage() {
    const saved = localStorage.getItem("metahub_state");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            const hardcodedToken = appState.credentials.accessToken;
            const hardcodedPageId = appState.credentials.pageId;
            
            appState = { ...appState, ...parsed };
            
            // If the browser storage has empty or simulated/mock credentials, automatically use the hardcoded ones and switch off simulation mode
            const isMockToken = parsed.credentials && parsed.credentials.accessToken && parsed.credentials.accessToken.startsWith("EAAbwba5ZCnQcBA");
            if (hardcodedToken && (!parsed.credentials || !parsed.credentials.accessToken || isMockToken)) {
                appState.credentials.accessToken = hardcodedToken;
                appState.credentials.pageId = hardcodedPageId;
                appState.simulationMode = false;
                saveStateToStorage();
            }
        } catch (e) {
            console.error("Error parsing saved state: ", e);
        }
    }
}

/* ==========================================================================
   NAVIGATION & TABS
   ========================================================================== */

function setupTabNavigation() {
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Remove active classes
            menuItems.forEach(i => i.classList.remove("active"));
            
            // Add active class
            item.classList.add("active");
            
            // Switch tabs
            const targetPane = item.getAttribute("data-tab");
            switchTab(targetPane);
            
            // Set header title
            updateHeaderTitle(targetPane);
        });
    });
}

function switchTab(paneId) {
    const panes = document.querySelectorAll(".tab-pane");
    panes.forEach(pane => {
        pane.classList.remove("active");
    });
    
    const targetPane = document.getElementById(paneId);
    if (targetPane) {
        targetPane.classList.add("active");
    }
    
    // If navigation triggers from a button click inside a tab (like Learn More)
    const correspondingNav = document.querySelector(`.menu-item[data-tab="${paneId}"]`);
    if (correspondingNav) {
        document.querySelectorAll(".menu-item").forEach(i => i.classList.remove("active"));
        correspondingNav.classList.add("active");
    }
    
    updateHeaderTitle(paneId);
}

function updateHeaderTitle(paneId) {
    const breadcrumb = document.getElementById("txt-header-breadcrumb");
    const mainTitle = document.getElementById("txt-header-page-title");
    
    const lang = appState.language;
    breadcrumb.textContent = translations[lang]["txt-header-breadcrumb"];
    
    if (paneId.includes("dashboard")) {
        mainTitle.textContent = translations[lang]["txt-header-page-title-dashboard"];
    } else if (paneId.includes("broadcaster")) {
        mainTitle.textContent = translations[lang]["txt-header-page-title-broadcaster"];
    } else if (paneId.includes("autoreply")) {
        mainTitle.textContent = translations[lang]["txt-header-page-title-autoreply"];
    } else if (paneId.includes("settings")) {
        mainTitle.textContent = translations[lang]["txt-header-page-title-settings"];
    }
}

/* ==========================================================================
   THEME MANAGER
   ========================================================================== */

function toggleTheme() {
    const newTheme = appState.theme === 'dark' ? 'light' : 'dark';
    appState.theme = newTheme;
    saveStateToStorage();
    applyTheme(newTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const themeIcon = document.getElementById("theme-icon");
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.className = "fa-solid fa-sun";
        } else {
            themeIcon.className = "fa-solid fa-moon";
        }
    }
}

/* ==========================================================================
   LOCALIZATION & LANGUAGE MANAGER
   ========================================================================== */

function setLanguage(lang) {
    appState.language = lang;
    saveStateToStorage();
    applyLanguage(lang);
}

function applyLanguage(lang) {
    // Add/remove lang classes
    if (lang === 'ur') {
        document.body.classList.add("lang-ur");
        document.getElementById("lang-btn-ur").classList.add("active");
        document.getElementById("lang-btn-en").classList.remove("active");
    } else {
        document.body.classList.remove("lang-ur");
        document.getElementById("lang-btn-en").classList.add("active");
        document.getElementById("lang-btn-ur").classList.remove("active");
    }
    
    // Translate standard static nodes matching IDs
    const dict = translations[lang];
    for (const key in dict) {
        const el = document.getElementById(key);
        if (el) {
            // Respect HTML inside guide list or policy details
            if (key.includes("guide-") || key.includes("policy-")) {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    }
    
    // Translate dynamically rendered elements
    updateStatusPill();
    updateStatsDisplay();
    renderSubscribers();
    renderRules();
    
    // Textarea placeholders
    const broadcastInput = document.getElementById("broadcaster-message-input");
    if (broadcastInput) {
        broadcastInput.placeholder = lang === 'ur' ? "اپنا براڈکاسٹ پیغام یہاں لکھیں... نام کے لیے [name] استعمال کریں۔" : "Type your broadcast message here... Use [name] to personalize.";
    }
    
    const keywordInput = document.getElementById("rule-keyword-input");
    if (keywordInput) {
        keywordInput.placeholder = lang === 'ur' ? "مثال کے طور پر: قیمت، ریٹ، تفصیلات" : "e.g., price, dynamic, details";
    }
    
    const ruleResponse = document.getElementById("rule-response-input");
    if (ruleResponse) {
        ruleResponse.placeholder = lang === 'ur' ? "خودکار جواب یہاں ٹائپ کریں..." : "Type the automated response...";
    }
    
    // Header title correction
    const activeNav = document.querySelector(".menu-item.active");
    if (activeNav) {
        updateHeaderTitle(activeNav.getAttribute("data-tab"));
    }
    
    // Update broadcasting progress indicators
    updateProgressUI();
}

function updateStatusPill() {
    const dot = document.getElementById("status-indicator-dot");
    const label = document.getElementById("txt-status-indicator-label");
    const lang = appState.language;
    
    const avatarEl = document.getElementById("txt-user-avatar");
    const nameEl = document.getElementById("txt-user-name");
    const roleEl = document.getElementById("txt-user-role");
    const fbBtn = document.getElementById("btn-fb-login");
    const fbBtnSpan = document.getElementById("txt-btn-fb-login");
    
    if (appState.simulationMode) {
        dot.className = "status-dot simulating";
        label.textContent = translations[lang]["txt-status-indicator-sim"];
        
        // Reset to default simulated values
        if (avatarEl) avatarEl.textContent = "FB";
        if (nameEl) nameEl.textContent = translations[lang]["txt-user-name"];
        if (roleEl) roleEl.textContent = translations[lang]["txt-user-role"];
        if (fbBtn) {
            fbBtn.style.background = "hsl(214, 89%, 52%)";
            fbBtn.style.boxShadow = "0 4px 12px hsla(214, 89%, 52%, 0.2)";
            fbBtn.style.pointerEvents = "auto";
        }
        if (fbBtnSpan) fbBtnSpan.textContent = translations[lang]["txt-btn-fb-login"];
    } else {
        if (appState.credentials.accessToken && appState.credentials.pageId) {
            dot.className = "status-dot";
            label.textContent = translations[lang]["txt-status-indicator-live"];
            
            // Update to Zargham Mustafa Thaheem when live with your credentials!
            if (appState.credentials.pageId === "1302283298694661") {
                if (avatarEl) avatarEl.textContent = "ZT";
                if (nameEl) nameEl.textContent = "Zargham Mustafa Thaheem";
                if (roleEl) roleEl.textContent = lang === 'ur' ? "پیج ایڈمنسٹریٹر (لائیو)" : "Page Administrator (Live)";
                
                // Show connected on the login button and disable pointer clicks
                if (fbBtn) {
                    fbBtn.style.background = "linear-gradient(135deg, #2ecc71, #27ae60)";
                    fbBtn.style.boxShadow = "0 4px 12px rgba(46, 204, 113, 0.3)";
                    fbBtn.style.pointerEvents = "none";
                }
                if (fbBtnSpan) {
                    fbBtnSpan.textContent = lang === 'ur' ? "فیس بک پیج منسلک ہے (ZT) ✅" : "Connected: Zargham Mustafa Thaheem ✅";
                }
            } else {
                if (avatarEl) avatarEl.textContent = "MH";
                if (nameEl) nameEl.textContent = lang === 'ur' ? "فیس بک پیج (منسلک)" : "Facebook Page (Connected)";
                if (roleEl) roleEl.textContent = lang === 'ur' ? "پیج مینیجر" : "Page Administrator";
                if (fbBtn) {
                    fbBtn.style.background = "linear-gradient(135deg, #2ecc71, #27ae60)";
                    fbBtn.style.pointerEvents = "none";
                }
                if (fbBtnSpan) fbBtnSpan.textContent = lang === 'ur' ? "منسلک ہے" : "Connected Successfully";
            }
        } else {
            dot.className = "status-dot disconnected";
            label.textContent = lang === 'ur' ? "اے پی آئی غیر منسلک" : "API Disconnected";
        }
    }
}

/* ==========================================================================
   SUBSCRIBERS & CONTACTS LIST
   ========================================================================== */

function renderSubscribers() {
    const container = document.getElementById("dashboard-contact-list");
    if (!container) return;
    
    container.innerHTML = "";
    const lang = appState.language;
    
    appState.subscribers.forEach(sub => {
        const item = document.createElement("div");
        item.className = "contact-item";
        
        // Relative time Urdu translation mapping
        let lastSeen = sub.lastActive;
        if (lang === 'ur') {
            lastSeen = lastSeen
                .replace("mins ago", "منٹ پہلے")
                .replace("hour ago", "گھنٹہ پہلے")
                .replace("hours ago", "گھنٹے پہلے")
                .replace("day ago", "دن پہلے");
        }
        
        item.innerHTML = `
            <div class="contact-left">
                <div class="contact-avatar">${sub.avatar}</div>
                <div class="contact-details">
                    <span class="contact-name">${sub.name}</span>
                    <span class="contact-psid">PSID: ${sub.psid}</span>
                </div>
            </div>
            <div class="contact-right">
                <span class="contact-badge badge-active">${lang === 'ur' ? "میسنجر" : "Messenger"}</span>
                <span class="contact-time">${lastSeen}</span>
            </div>
        `;
        
        container.appendChild(item);
    });
    
    const countEl = document.getElementById("val-contacts-count");
    if (countEl) {
        countEl.textContent = lang === 'ur' ? `${appState.subscribers.length} مجموعی` : `${appState.subscribers.length} Total`;
    }
}

function promptAddTestSubscriber() {
    const lang = appState.language;
    const promptNameMsg = lang === 'ur' ? "صارف کا نام درج کریں (مثال کے طور پر: Zargham Test):" : "Enter Test Recipient Name (e.g. Zargham Test):";
    const promptPsidMsg = lang === 'ur' ? "صارف کی فیس بک پیج اسکوپڈ آئی ڈی (PSID) درج کریں:" : "Enter Facebook Page-Scoped User ID (PSID):";
    
    const name = prompt(promptNameMsg);
    if (!name) return;
    
    const psid = prompt(promptPsidMsg);
    if (!psid) return;
    
    const newSub = {
        psid: psid.trim(),
        name: name.trim(),
        avatar: name.trim().split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2),
        status: "active",
        lastActive: lang === 'ur' ? "ابھی ابھی" : "Just now"
    };
    
    // Add to the top of the list
    appState.subscribers.unshift(newSub);
    saveStateToStorage();
    renderSubscribers();
    updateStatsDisplay();
    
    alert(lang === 'ur' ? "ٹیسٹ صارف کامیابی سے شامل کر دیا گیا!" : "Test subscriber added successfully!");
}

/* ==========================================================================
   AUTO-REPLY MANAGEMENT
   ========================================================================== */

function renderRules() {
    const container = document.getElementById("rules-cards-container");
    if (!container) return;
    
    container.innerHTML = "";
    const lang = appState.language;
    
    if (appState.autoReplyRules.length === 0) {
        container.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--text-muted);" id="txt-no-rules-fallback">
            ${lang === 'ur' ? "کوئی خودکار جواب کا قانون موجود نہیں ہے۔" : "No active automated rules configured."}
        </div>`;
        return;
    }
    
    appState.autoReplyRules.forEach(rule => {
        const card = document.createElement("div");
        card.className = "rule-card";
        card.innerHTML = `
            <div class="rule-card-header">
                <span class="rule-keyword-badge">${rule.keywords}</span>
                <button class="btn-delete" onclick="deleteAutoReplyRule(${rule.id})" title="Delete Rule">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
            <div class="rule-response">${rule.response}</div>
        `;
        container.appendChild(card);
    });
}

function addAutoReplyRule() {
    const keywordInput = document.getElementById("rule-keyword-input");
    const responseInput = document.getElementById("rule-response-input");
    const lang = appState.language;
    
    const keywords = keywordInput.value.trim();
    const response = responseInput.value.trim();
    
    if (!keywords || !response) {
        alert(translations[lang]["msg-add-rule-error"]);
        return;
    }
    
    const newRule = {
        id: Date.now(),
        keywords: keywords,
        response: response
    };
    
    appState.autoReplyRules.push(newRule);
    appState.stats.rules = appState.autoReplyRules.length;
    
    saveStateToStorage();
    renderRules();
    updateStatsDisplay();
    
    // Clear fields
    keywordInput.value = "";
    responseInput.value = "";
    
    alert(translations[lang]["msg-rule-added"]);
}

function deleteAutoReplyRule(id) {
    appState.autoReplyRules = appState.autoReplyRules.filter(r => r.id !== id);
    appState.stats.rules = appState.autoReplyRules.length;
    
    saveStateToStorage();
    renderRules();
    updateStatsDisplay();
}

/* ==========================================================================
   SETTINGS & API CONFIG
   ========================================================================== */

function saveApiCredentials() {
    const token = document.getElementById("settings-access-token").value.trim();
    const id = document.getElementById("settings-page-id").value.trim();
    const lang = appState.language;
    
    appState.credentials.accessToken = token;
    appState.credentials.pageId = id;
    
    saveStateToStorage();
    updateStatusPill();
    
    alert(translations[lang]["msg-save-success"]);
}

function toggleExecutionMode(isSimulated) {
    appState.simulationMode = isSimulated;
    saveStateToStorage();
    updateStatusPill();
}

/* ==========================================================================
   STATS MANAGEMENT
   ========================================================================== */

function updateStatsDisplay() {
    const subsVal = document.getElementById("val-stat-subscribers");
    const sentVal = document.getElementById("val-stat-sent");
    const rateVal = document.getElementById("val-stat-success");
    const rulesVal = document.getElementById("val-stat-rules");
    
    if (subsVal) subsVal.textContent = appState.subscribers.length;
    if (sentVal) sentVal.textContent = appState.stats.sent;
    if (rateVal) rateVal.textContent = appState.stats.successRate;
    if (rulesVal) rulesVal.textContent = appState.stats.rules;
}

/* ==========================================================================
   BROADCASTER ENGINE (SEQUENTIAL paced broadcasting queue)
   ========================================================================== */

function updateSliderVal(val) {
    document.getElementById("broadcaster-delay-val").textContent = `${val}s`;
}

function clearConsoleLog() {
    const consoleEl = document.getElementById("broadcaster-console");
    const lang = appState.language;
    if (consoleEl) {
        consoleEl.innerHTML = `<div class="console-line console-info">&gt; ${lang === 'ur' ? "میٹا ہب سسٹم دوبارہ شروع ہو گیا ہے۔" : "MetaHub system log flushed."}</div>`;
    }
}

function logToConsole(message, type = "info") {
    const consoleEl = document.getElementById("broadcaster-console");
    if (!consoleEl) return;
    
    const time = new Date().toLocaleTimeString();
    const line = document.createElement("div");
    line.className = `console-line console-${type}`;
    line.textContent = `[${time}] ${message}`;
    
    consoleEl.appendChild(line);
    consoleEl.scrollTop = consoleEl.scrollHeight;
}

let broadcastStats = {
    sent: 0,
    failed: 0,
    remaining: 0,
    total: 0
};

function updateProgressUI() {
    const pctEl = document.getElementById("broadcaster-progress-pct");
    const barEl = document.getElementById("broadcaster-progress-bar");
    const statusEl = document.getElementById("txt-progress-status");
    
    const sentEl = document.getElementById("broadcaster-stat-sent");
    const failedEl = document.getElementById("broadcaster-stat-failed");
    const remEl = document.getElementById("broadcaster-stat-remaining");
    
    const lang = appState.language;
    
    if (sentEl) sentEl.textContent = broadcastStats.sent;
    if (failedEl) failedEl.textContent = broadcastStats.failed;
    if (remEl) remEl.textContent = broadcastStats.remaining;
    
    const pct = broadcastStats.total > 0 
        ? Math.round((broadcastStats.sent + broadcastStats.failed) / broadcastStats.total * 100) 
        : 0;
        
    if (pctEl) pctEl.textContent = `${pct}%`;
    if (barEl) barEl.style.width = `${pct}%`;
    
    if (statusEl) {
        if (isBroadcasting) {
            statusEl.textContent = translations[lang]["txt-progress-status-running"];
        } else if (broadcastStats.total > 0 && broadcastStats.remaining === 0) {
            statusEl.textContent = translations[lang]["txt-progress-status-complete"];
        } else {
            statusEl.textContent = translations[lang]["txt-progress-status-idle"];
        }
    }
}

function startBroadcast() {
    const messageInput = document.getElementById("broadcaster-message-input");
    const lang = appState.language;
    
    if (isBroadcasting) {
        // Stop current broadcast
        stopBroadcast();
        return;
    }
    
    const rawMessage = messageInput.value.trim();
    if (!rawMessage) {
        alert(translations[lang]["msg-broadcast-empty"]);
        return;
    }
    
    const activeSubscribers = appState.subscribers.filter(s => s.status === "active");
    if (activeSubscribers.length === 0) {
        alert(translations[lang]["msg-no-subscribers"]);
        return;
    }
    
    // Set UI to running mode
    isBroadcasting = true;
    const btn = document.getElementById("btn-start-broadcast");
    btn.innerHTML = `<i class="fa-solid fa-square-full"></i> <span>${lang === 'ur' ? "مہم روک دیں" : "Cancel Transmission"}</span>`;
    btn.style.background = "linear-gradient(135deg, var(--accent-danger), hsla(350, 80%, 55%, 0.8))";
    btn.style.boxShadow = "0 0 20px hsla(350, 80%, 55%, 0.25)";
    
    // Init Queue stats
    broadcastStats = {
        sent: 0,
        failed: 0,
        remaining: activeSubscribers.length,
        total: activeSubscribers.length
    };
    
    activeBroadcastQueue = [...activeSubscribers];
    updateProgressUI();
    
    logToConsole(lang === 'ur' ? `براڈکاسٹنگ شروع: ${broadcastStats.total} صارفین کو روانگی۔` : `Broadcast started: targeting ${broadcastStats.total} active contacts.`, "warning");
    
    // Begin sequential trigger
    dispatchNextInQueue(rawMessage);
}

function stopBroadcast() {
    isBroadcasting = false;
    clearTimeout(activeBroadcastTimer);
    
    const lang = appState.language;
    const btn = document.getElementById("btn-start-broadcast");
    btn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> <span>${translations[lang]["txt-btn-broadcast-label"]}</span>`;
    btn.style.background = "";
    btn.style.boxShadow = "";
    
    logToConsole(lang === 'ur' ? "براڈکاسٹنگ مہم صارف کے حکم پر روک دی گئی۔" : "Broadcasting cancelled by user instruction.", "error");
    
    const statusEl = document.getElementById("txt-progress-status");
    if (statusEl) statusEl.textContent = translations[lang]["txt-progress-status-stopped"];
}

function dispatchNextInQueue(rawMessage) {
    if (!isBroadcasting || activeBroadcastQueue.length === 0) {
        completeBroadcast();
        return;
    }
    
    const currentContact = activeBroadcastQueue.shift();
    const lang = appState.language;
    
    // Personalize message with contact name
    const personalizedMessage = rawMessage.replace(/\[name\]/gi, currentContact.name);
    
    logToConsole(lang === 'ur' ? `صارف ${currentContact.name} کے لیے پے لوڈ تیار کیا جا رہا ہے...` : `Preparing payload for contact: ${currentContact.name}`, "info");
    
    // Get timing configurations
    const baseDelay = parseInt(document.getElementById("broadcaster-delay-slider").value) * 1000;
    const randomize = document.getElementById("broadcaster-randomize-switch").checked;
    
    // Add variations if checkbox selected
    const actualDelay = randomize 
        ? baseDelay + Math.floor((Math.random() - 0.5) * 1000) 
        : baseDelay;
        
    // Execute sending step after timeout
    activeBroadcastTimer = setTimeout(() => {
        if (appState.simulationMode) {
            // Simulated Block Check (For educational illustration)
            if (currentContact.name === "Sarah Jenkins") {
                logToConsole(lang === 'ur' 
                    ? `[ترسیل ناکام] ${currentContact.name} نے پیج کو بلاک کیا ہوا ہے۔ (میٹا کوڈ: 200 - اجازت مسدود)` 
                    : `[DELIVERY FAILED] ${currentContact.name} has blocked/unsubscribed this Page. (Meta Code: 200 - Permissions Block)`, "error");
                
                broadcastStats.failed++;
                broadcastStats.remaining--;
                saveStateToStorage();
                updateStatsDisplay();
                updateProgressUI();
                
                // Continue queue immediately
                dispatchNextInQueue(rawMessage);
                return;
            }

            // SIMULATED TRANSACTION
            logToConsole(lang === 'ur' ? `[فرضی اے پی آئی] ${currentContact.name} کو پوسٹ بھیجی گئی۔` : `[MOCK API] Sending POST payload to PSID: ${currentContact.psid}`, "info");
            
            // Mock random network error (e.g. 5% failure rate for realism)
            const success = Math.random() > 0.05;
            
            if (success) {
                const messageId = `mid.${Math.floor(1000000000 + Math.random() * 9000000000)}`;
                logToConsole(lang === 'ur' ? `پیغام کامیابی سے پہنچ گیا۔ میسج آئی ڈی: ${messageId}` : `Deliver successful. Message ID: ${messageId}`, "success");
                broadcastStats.sent++;
                appState.stats.sent++;
            } else {
                logToConsole(lang === 'ur' ? `[خرابی] فیس بک سرور کا جواب نامکمل رہا (کوڈ: 500)` : `[ERROR] Fail delivery. FB Gateway timeout (Code: 500)`, "error");
                broadcastStats.failed++;
            }
            
            broadcastStats.remaining--;
            saveStateToStorage();
            updateStatsDisplay();
            updateProgressUI();
            
            // Recurse to next item
            dispatchNextInQueue(rawMessage);
            
        } else {
            // REAL META GRAPH API INTEGRATION CALL
            logToConsole(`[LIVE API] Attempting Graph API request to Meta...`, "info");
            
            const url = `https://graph.facebook.com/v18.0/${appState.credentials.pageId}/messages?access_token=${appState.credentials.accessToken}`;
            const payload = {
                recipient: { id: currentContact.psid },
                message: { text: personalizedMessage }
            };
            
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            .then(res => res.json())
            .then(data => {
                if (data.message_id) {
                    logToConsole(lang === 'ur' ? `کامیابی! پیغام روانہ ہو گیا۔ آئی ڈی: ${data.message_id}` : `Success! Dispatch verified. Message ID: ${data.message_id}`, "success");
                    broadcastStats.sent++;
                    appState.stats.sent++;
                } else {
                    const errMsg = data.error ? data.error.message : "Unknown API Exception";
                    logToConsole(`[META API ERROR] ${errMsg}`, "error");
                    broadcastStats.failed++;
                }
            })
            .catch(err => {
                logToConsole(`[NETWORK EXCEPTION] ${err.message}`, "error");
                broadcastStats.failed++;
            })
            .finally(() => {
                broadcastStats.remaining--;
                saveStateToStorage();
                updateStatsDisplay();
                updateProgressUI();
                
                // Recurse to next item
                dispatchNextInQueue(rawMessage);
            });
        }
        
    }, actualDelay);
}

function completeBroadcast() {
    isBroadcasting = false;
    const lang = appState.language;
    
    // Restore button values
    const btn = document.getElementById("btn-start-broadcast");
    btn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> <span>${translations[lang]["txt-btn-broadcast-label"]}</span>`;
    btn.style.background = "";
    btn.style.boxShadow = "";
    
    logToConsole(lang === 'ur' ? "مہم کامیابی کے ساتھ مکمل ہوئی۔" : "Transmission campaign concluded successfully.", "success");
    
    // Update stats final review
    const successRate = broadcastStats.total > 0 
        ? (broadcastStats.sent / broadcastStats.total * 100).toFixed(1) + "%" 
        : "100%";
    appState.stats.successRate = successRate;
    saveStateToStorage();
    updateStatsDisplay();
    
    updateProgressUI();
}

/* ==========================================================================
   FACEBOOK AUTHENTICATION FLOW (MOCK & SIMULATOR)
   ========================================================================== */

function triggerFacebookLogin() {
    const lang = appState.language;
    if (!appState.simulationMode) {
        alert(translations[lang]["msg-login-error-live"]);
        return;
    }
    
    const modal = document.getElementById("fb-login-modal");
    if (modal) {
        modal.style.display = "flex";
        setTimeout(() => {
            modal.style.opacity = "1";
        }, 10);
    }
}

function closeFacebookLoginModal() {
    const modal = document.getElementById("fb-login-modal");
    if (modal) {
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
}

function confirmFacebookLoginMock() {
    const lang = appState.language;
    
    // Close OAuth Modal
    closeFacebookLoginModal();
    
    // Generate simulated keys
    const mockToken = "EAAbwba5ZCnQcBA" + Math.random().toString(36).substring(2, 15).toUpperCase() + "XyZ987ABC123";
    const mockPageId = "109827364" + Math.floor(100 + Math.random() * 900);
    
    // Populate credentials form fields
    document.getElementById("settings-access-token").value = mockToken;
    document.getElementById("settings-page-id").value = mockPageId;
    
    // Update state
    appState.credentials.accessToken = mockToken;
    appState.credentials.pageId = mockPageId;
    
    // Change profile in footer dynamically
    const avatarEl = document.getElementById("txt-user-avatar");
    const nameEl = document.getElementById("txt-user-name");
    const roleEl = document.getElementById("txt-user-role");
    
    if (avatarEl) avatarEl.textContent = "MH";
    if (nameEl) nameEl.textContent = lang === 'ur' ? "میٹا ہب اسٹور (منسلک)" : "MetaHub Store (Connected)";
    if (roleEl) roleEl.textContent = lang === 'ur' ? "پیج مینیجر" : "Page Administrator";
    
    // Write success status log into terminal console
    logToConsole(lang === 'ur' ? "[فیس بک لاگ ان] فیس بک اکاؤنٹ لنک ہو گیا۔ ٹوکن جاری برائے پیج: میٹا ہب اسٹور۔" : "[FB AUTH] Facebook Login flow authenticated. Token issued for Page: MetaHub Store.", "success");
    logToConsole(lang === 'ur' ? "[فیس بک لاگ ان] میسنجر کے پیغامات سننے کے لیے Webhook کامیابی سے متحرک کر دی گئی۔" : "[FB AUTH] Connected webhooks successfully to manage Messenger Page conversations.", "info");
    
    // Update state & settings indicators
    saveStateToStorage();
    updateStatusPill();
    
    alert(translations[lang]["msg-login-success"]);
}
