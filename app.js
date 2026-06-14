const BASE_PATH = window.location.hostname.endsWith("github.io") ? "/improved" : "";
const A = `${BASE_PATH}/assets/`;
const FORM_ENDPOINT = "";
const SALES_EMAIL = "sales@gloriafood.asia";
const WHATSAPP_NUMBER = "8618720662290";
const WHATSAPP_MESSAGE = "Hello, I am interested in your products. Please send me more details.";
const COMPANY_ADDRESS = "江西省宜春市万载县";
const COMPANY_ADDRESS_EN = "Wanzai County, Yichun, Jiangxi, China";
const MAP_LAT = "28.2186512";
const MAP_LON = "114.3323135";
const LANGUAGE_OPTIONS = [
  ["en", "English"],
  ["es", "Español"],
  ["fr", "Français"],
  ["de", "Deutsch"],
  ["ar", "العربية"],
  ["zh", "中文"],
];

const TRANSLATIONS = {
  zh: {
    "Home": "首页",
    "Products": "产品中心",
    "OEM / ODM": "OEM / ODM",
    "Food Safety": "食品安全",
    "Factory & Quality": "工厂与质控",
    "Blog": "博客",
    "Contact": "联系我们",
    "Request a Quote": "获取报价",
    "Get Product Catalog": "获取产品画册",
    "IQF Frozen Food & Asian Food OEM/ODM Supplier": "IQF 冷冻食品与亚洲食品 OEM/ODM 供应商",
    "Gloria Food supplies frozen vegetables, seafood, noodle and pastry products for importers, wholesalers, supermarkets and foodservice buyers across Europe, the Americas, the Middle East and Asia.": "Gloria Food 为欧洲、美洲、中东和亚洲的进口商、批发商、商超及餐饮供应链客户供应冷冻蔬菜、海鲜、面点和亚洲食品。",
    "Product Categories": "产品分类",
    "Main Products": "主推产品",
    "Why Gloria Food": "为什么选择 Gloria Food",
    "OEM & Private Label Programs": "OEM 与自有品牌方案",
    "Food Safety & Certifications": "食品安全与认证",
    "Applications": "适用客户",
    "Buyer FAQ": "采购常见问题",
    "Request a B2B Frozen Food Quote": "提交 B2B 冷冻食品询盘",
    "Send your contact details and product needs. Gloria Food will review your requirement and reply with the next quotation step.": "请填写联系方式和产品需求。Gloria Food 会评估您的采购要求，并回复下一步报价信息。",
    "Inquiry Form": "询盘表单",
    "Fields marked with * are required.": "带 * 的字段为必填项。",
    "Name": "姓名",
    "Email": "邮箱",
    "Phone": "电话",
    "Company Name": "公司名称",
    "Country / Region": "国家 / 地区",
    "Product Requirement": "产品需求",
    "Message": "留言",
    "Submit Inquiry": "提交询盘",
    "Company Location": "公司位置",
    "Visit or locate our team in Wanzai County, Yichun, Jiangxi.": "您可以在江西省宜春市万载县找到我们的团队。",
    "Company Address": "公司地址",
    "Open in OpenStreetMap": "在 OpenStreetMap 中打开",
    "Prefer email?": "更希望邮件联系？",
    "Key Products": "重点产品",
  },
  es: {
    "Home": "Inicio",
    "Products": "Productos",
    "OEM / ODM": "OEM / ODM",
    "Food Safety": "Seguridad alimentaria",
    "Factory & Quality": "Fábrica y calidad",
    "Blog": "Blog",
    "Contact": "Contacto",
    "Request a Quote": "Solicitar cotización",
    "Get Product Catalog": "Obtener catálogo",
    "IQF Frozen Food & Asian Food OEM/ODM Supplier": "Proveedor OEM/ODM de alimentos congelados IQF y comida asiática",
    "Gloria Food supplies frozen vegetables, seafood, noodle and pastry products for importers, wholesalers, supermarkets and foodservice buyers across Europe, the Americas, the Middle East and Asia.": "Gloria Food suministra verduras congeladas, mariscos, fideos y productos de pastelería para importadores, mayoristas, supermercados y compradores de foodservice en Europa, América, Medio Oriente y Asia.",
    "Product Categories": "Categorías de productos",
    "Main Products": "Productos principales",
    "Why Gloria Food": "Por qué Gloria Food",
    "OEM & Private Label Programs": "Programas OEM y marca privada",
    "Food Safety & Certifications": "Seguridad alimentaria y certificaciones",
    "Applications": "Aplicaciones",
    "Buyer FAQ": "Preguntas frecuentes",
    "Request a B2B Frozen Food Quote": "Solicitar cotización B2B de alimentos congelados",
    "Send your contact details and product needs. Gloria Food will review your requirement and reply with the next quotation step.": "Envíe sus datos de contacto y necesidades de producto. Gloria Food revisará su solicitud y responderá con el siguiente paso de cotización.",
    "Inquiry Form": "Formulario de consulta",
    "Fields marked with * are required.": "Los campos marcados con * son obligatorios.",
    "Name": "Nombre",
    "Email": "Correo electrónico",
    "Phone": "Teléfono",
    "Company Name": "Empresa",
    "Country / Region": "País / Región",
    "Product Requirement": "Necesidad de producto",
    "Message": "Mensaje",
    "Submit Inquiry": "Enviar consulta",
    "Company Location": "Ubicación de la empresa",
    "Visit or locate our team in Wanzai County, Yichun, Jiangxi.": "Visite o ubique a nuestro equipo en el condado de Wanzai, Yichun, Jiangxi.",
    "Company Address": "Dirección de la empresa",
    "Open in OpenStreetMap": "Abrir en OpenStreetMap",
    "Prefer email?": "¿Prefiere correo?",
    "Key Products": "Productos clave",
  },
  fr: {
    "Home": "Accueil",
    "Products": "Produits",
    "OEM / ODM": "OEM / ODM",
    "Food Safety": "Sécurité alimentaire",
    "Factory & Quality": "Usine et qualité",
    "Blog": "Blog",
    "Contact": "Contact",
    "Request a Quote": "Demander un devis",
    "Get Product Catalog": "Obtenir le catalogue",
    "IQF Frozen Food & Asian Food OEM/ODM Supplier": "Fournisseur OEM/ODM d'aliments surgelés IQF et asiatiques",
    "Gloria Food supplies frozen vegetables, seafood, noodle and pastry products for importers, wholesalers, supermarkets and foodservice buyers across Europe, the Americas, the Middle East and Asia.": "Gloria Food fournit des légumes surgelés, fruits de mer, nouilles et pâtes aux importateurs, grossistes, supermarchés et acheteurs foodservice en Europe, aux Amériques, au Moyen-Orient et en Asie.",
    "Product Categories": "Catégories de produits",
    "Main Products": "Produits principaux",
    "Why Gloria Food": "Pourquoi Gloria Food",
    "OEM & Private Label Programs": "Programmes OEM et marque privée",
    "Food Safety & Certifications": "Sécurité alimentaire et certifications",
    "Applications": "Applications",
    "Buyer FAQ": "FAQ acheteurs",
    "Request a B2B Frozen Food Quote": "Demander un devis B2B pour aliments surgelés",
    "Send your contact details and product needs. Gloria Food will review your requirement and reply with the next quotation step.": "Envoyez vos coordonnées et besoins produits. Gloria Food étudiera votre demande et vous répondra avec la prochaine étape de devis.",
    "Inquiry Form": "Formulaire de demande",
    "Fields marked with * are required.": "Les champs marqués d'un * sont obligatoires.",
    "Name": "Nom",
    "Email": "E-mail",
    "Phone": "Téléphone",
    "Company Name": "Nom de l'entreprise",
    "Country / Region": "Pays / Région",
    "Product Requirement": "Besoin produit",
    "Message": "Message",
    "Submit Inquiry": "Envoyer la demande",
    "Company Location": "Localisation de l'entreprise",
    "Visit or locate our team in Wanzai County, Yichun, Jiangxi.": "Localisez notre équipe dans le comté de Wanzai, Yichun, Jiangxi.",
    "Company Address": "Adresse de l'entreprise",
    "Open in OpenStreetMap": "Ouvrir dans OpenStreetMap",
    "Prefer email?": "Vous préférez l'e-mail ?",
    "Key Products": "Produits clés",
  },
  de: {
    "Home": "Startseite",
    "Products": "Produkte",
    "OEM / ODM": "OEM / ODM",
    "Food Safety": "Lebensmittelsicherheit",
    "Factory & Quality": "Fabrik & Qualität",
    "Blog": "Blog",
    "Contact": "Kontakt",
    "Request a Quote": "Angebot anfragen",
    "Get Product Catalog": "Produktkatalog",
    "IQF Frozen Food & Asian Food OEM/ODM Supplier": "OEM/ODM-Lieferant für IQF-Tiefkühlkost und asiatische Lebensmittel",
    "Gloria Food supplies frozen vegetables, seafood, noodle and pastry products for importers, wholesalers, supermarkets and foodservice buyers across Europe, the Americas, the Middle East and Asia.": "Gloria Food liefert Tiefkühlgemüse, Meeresfrüchte, Nudeln und Teigwaren an Importeure, Großhändler, Supermärkte und Foodservice-Kunden in Europa, Amerika, dem Nahen Osten und Asien.",
    "Product Categories": "Produktkategorien",
    "Main Products": "Hauptprodukte",
    "Why Gloria Food": "Warum Gloria Food",
    "OEM & Private Label Programs": "OEM- und Private-Label-Programme",
    "Food Safety & Certifications": "Lebensmittelsicherheit & Zertifizierungen",
    "Applications": "Anwendungen",
    "Buyer FAQ": "Käufer-FAQ",
    "Request a B2B Frozen Food Quote": "B2B-Angebot für Tiefkühlkost anfragen",
    "Send your contact details and product needs. Gloria Food will review your requirement and reply with the next quotation step.": "Senden Sie Ihre Kontaktdaten und Produktanforderungen. Gloria Food prüft Ihre Anfrage und meldet sich mit dem nächsten Angebotsschritt.",
    "Inquiry Form": "Anfrageformular",
    "Fields marked with * are required.": "Mit * markierte Felder sind Pflichtfelder.",
    "Name": "Name",
    "Email": "E-Mail",
    "Phone": "Telefon",
    "Company Name": "Firmenname",
    "Country / Region": "Land / Region",
    "Product Requirement": "Produktanforderung",
    "Message": "Nachricht",
    "Submit Inquiry": "Anfrage senden",
    "Company Location": "Standort des Unternehmens",
    "Visit or locate our team in Wanzai County, Yichun, Jiangxi.": "Finden Sie unser Team im Kreis Wanzai, Yichun, Jiangxi.",
    "Company Address": "Firmenadresse",
    "Open in OpenStreetMap": "In OpenStreetMap öffnen",
    "Prefer email?": "Lieber per E-Mail?",
    "Key Products": "Wichtige Produkte",
  },
  ar: {
    "Home": "الرئيسية",
    "Products": "المنتجات",
    "OEM / ODM": "OEM / ODM",
    "Food Safety": "سلامة الغذاء",
    "Factory & Quality": "المصنع والجودة",
    "Blog": "المدونة",
    "Contact": "اتصل بنا",
    "Request a Quote": "طلب عرض سعر",
    "Get Product Catalog": "تحميل الكتالوج",
    "IQF Frozen Food & Asian Food OEM/ODM Supplier": "مورد OEM/ODM للأغذية المجمدة IQF والأغذية الآسيوية",
    "Gloria Food supplies frozen vegetables, seafood, noodle and pastry products for importers, wholesalers, supermarkets and foodservice buyers across Europe, the Americas, the Middle East and Asia.": "توفر Gloria Food الخضروات المجمدة والمأكولات البحرية والنودلز والمعجنات للمستوردين وتجار الجملة والسوبرماركت ومشتري خدمات الطعام في أوروبا والأمريكتين والشرق الأوسط وآسيا.",
    "Product Categories": "فئات المنتجات",
    "Main Products": "المنتجات الرئيسية",
    "Why Gloria Food": "لماذا Gloria Food",
    "OEM & Private Label Programs": "برامج OEM والعلامة الخاصة",
    "Food Safety & Certifications": "سلامة الغذاء والشهادات",
    "Applications": "التطبيقات",
    "Buyer FAQ": "أسئلة المشترين",
    "Request a B2B Frozen Food Quote": "طلب عرض سعر B2B للأغذية المجمدة",
    "Send your contact details and product needs. Gloria Food will review your requirement and reply with the next quotation step.": "أرسل بيانات الاتصال واحتياجات المنتج. سيقوم فريق Gloria Food بمراجعة طلبك والرد بالخطوة التالية لعرض السعر.",
    "Inquiry Form": "نموذج الاستفسار",
    "Fields marked with * are required.": "الحقول المميزة بـ * مطلوبة.",
    "Name": "الاسم",
    "Email": "البريد الإلكتروني",
    "Phone": "الهاتف",
    "Company Name": "اسم الشركة",
    "Country / Region": "الدولة / المنطقة",
    "Product Requirement": "متطلبات المنتج",
    "Message": "الرسالة",
    "Submit Inquiry": "إرسال الاستفسار",
    "Company Location": "موقع الشركة",
    "Visit or locate our team in Wanzai County, Yichun, Jiangxi.": "يمكنك تحديد موقع فريقنا في مقاطعة وانزاي، ييتشون، جيانغشي.",
    "Company Address": "عنوان الشركة",
    "Open in OpenStreetMap": "فتح في OpenStreetMap",
    "Prefer email?": "تفضل البريد الإلكتروني؟",
    "Key Products": "المنتجات الرئيسية",
  },
};

const PLACEHOLDER_TRANSLATIONS = {
  "Your full name": {
    es: "Su nombre completo",
    fr: "Votre nom complet",
    de: "Ihr vollstandiger Name",
    ar: "Your full name",
    zh: "请输入您的姓名",
  },
  "Your company name": {
    es: "Nombre de su empresa",
    fr: "Nom de votre entreprise",
    de: "Ihr Firmenname",
    ar: "Your company name",
    zh: "请输入公司名称",
  },
  "Canada, Germany, UAE...": {
    es: "Canada, Alemania, EAU...",
    fr: "Canada, Allemagne, EAU...",
    de: "Kanada, Deutschland, VAE...",
    ar: "Canada, Germany, UAE...",
    zh: "加拿大、德国、阿联酋...",
  },
  "Tell us the product, packaging, quantity, destination port, certification needs or private label requirements.": {
    es: "Indique producto, embalaje, cantidad, puerto de destino, certificaciones o requisitos de marca privada.",
    fr: "Indiquez le produit, l'emballage, la quantite, le port de destination, les certifications ou la marque privee.",
    de: "Nennen Sie Produkt, Verpackung, Menge, Zielhafen, Zertifikate oder Private-Label-Anforderungen.",
    ar: "Tell us the product, packaging, quantity, destination port, certification needs or private label requirements.",
    zh: "请填写产品、包装、数量、目的港、认证需求或自有品牌要求。",
  },
};

const products = [
  {
    slug: "frozen-edamame",
    name: "Frozen Edamame",
    keyword: "frozen edamame supplier",
    image: "catalog-3.jpg",
    description: "IQF edamame soybean for retail packs, foodservice bags and private label programs.",
    packaging: "Retail bags, foodservice bags, bulk cartons",
    buyers: "Supermarkets, importers, Asian food brands",
  },
  {
    slug: "frozen-mukimame",
    name: "Frozen Mukimame",
    keyword: "frozen mukimame supplier",
    image: "catalog-4.jpg",
    description: "Shelled edamame supplied for ready-to-cook, salad, bowl and foodservice applications.",
    packaging: "OEM retail packs and bulk packages",
    buyers: "Foodservice, wholesalers, prepared food brands",
  },
  {
    slug: "frozen-broccoli",
    name: "Frozen Broccoli",
    keyword: "frozen broccoli supplier",
    image: "catalog-4.jpg",
    description: "IQF broccoli florets and cuts for wholesale, retail and foodservice buyers.",
    packaging: "Bulk cartons, foodservice bags, private label bags",
    buyers: "Importers, supermarkets, catering supply",
  },
  {
    slug: "frozen-green-peas",
    name: "Frozen Green Peas",
    keyword: "frozen green peas supplier",
    image: "catalog-5.jpg",
    description: "IQF green peas with stable sourcing, container-level inspection and flexible packaging.",
    packaging: "Retail, foodservice and bulk",
    buyers: "Wholesalers, retail chains, distributors",
  },
  {
    slug: "frozen-peppers",
    name: "Frozen Peppers",
    keyword: "frozen peppers supplier",
    image: "catalog-6.jpg",
    description: "Frozen pepper products for foodservice, industrial ingredients and private label lines.",
    packaging: "Custom cuts, retail packs, bulk cartons",
    buyers: "Food brands, importers, restaurants",
  },
  {
    slug: "frozen-shrimps",
    name: "Frozen Shrimps",
    keyword: "frozen shrimps supplier",
    image: "catalog-8.jpg",
    description: "Frozen shrimp and Asian seafood sourcing for buyers requiring food safety documentation.",
    packaging: "Bulk and retail programs",
    buyers: "Seafood importers, Asian food distributors",
  },
];

const categories = [
  ["IQF Frozen Vegetables", "/iqf-frozen-vegetables/", "catalog-4.jpg", "Edamame, mukimame, broccoli, peas, peppers, blends and Asian vegetables."],
  ["Noodle & Pastry", "/noodle-pastry/", "catalog-7.jpg", "Peking duck pastry, wonton pastry, spring roll pastry and gua bao buns."],
  ["Seafood", "/seafood/", "catalog-8.jpg", "Crayfish, roasted eel, shrimp and Asian seafood items for global buyers."],
  ["Sushi Items", "/products/", "catalog-3.jpg", "Asian food items for retail, foodservice and sushi-related supply programs."],
];

const certs = ["BRC", "ISO22000", "IFS", "BSCI", "SMETA", "SEDEX", "GLOBALG.A.P. GRASP", "HALAL", "KOSHER"];

const faqs = [
  ["Can Gloria Food supply OEM frozen vegetables?", "Yes. Gloria Food supports OEM and ODM programs for retail packs, foodservice bags and bulk cartons. Buyers can request private label packaging, product combinations and container planning."],
  ["Which certifications can be provided?", "Available certification support includes BRC, ISO22000, IFS, BSCI, SMETA, SEDEX, GLOBALG.A.P. GRASP, HALAL and KOSHER, subject to the selected product and supplier."],
  ["What information should buyers send for a quotation?", "Please send product name, destination country, packaging type, estimated quantity, certification requirements and any private label needs."],
  ["Can you support supermarkets and foodservice buyers?", "Yes. The product range and packaging options are suitable for importers, wholesalers, supermarkets, food brands and foodservice supply chains."],
  ["How is product quality controlled?", "Gloria Food works with reliable certified manufactories and arranges professional quality inspection for each container to reduce procurement risk."],
];

const blogPosts = [
  {
    title: "How to Choose a Reliable IQF Frozen Vegetables Supplier",
    excerpt: "A practical checklist for importers comparing suppliers, certifications, packaging options and container-level quality control.",
    slug: "how-to-choose-reliable-iqf-frozen-vegetables-supplier",
    file: "01-how-to-choose-reliable-iqf-frozen-vegetables-supplier.md",
    keyword: "iqf vegetables supplier",
  },
  {
    title: "Private Label Frozen Vegetables for Supermarkets: Packaging, Quality and Launch Checklist",
    excerpt: "What supermarket buyers and food brands should prepare before launching private label frozen vegetable lines.",
    slug: "private-label-frozen-vegetables-supermarket-packaging-quality-checklist",
    file: "02-private-label-frozen-vegetables-supermarket-packaging-quality-checklist.md",
    keyword: "private label frozen vegetables supplier",
  },
  {
    title: "Frozen Edamame vs Mukimame: Product Differences, Applications and Buying Tips for Wholesale Buyers",
    excerpt: "A buyer-focused comparison of edamame soybean and shelled mukimame for retail, foodservice and wholesale applications.",
    slug: "frozen-edamame-vs-mukimame-wholesale-buyers",
    file: "03-frozen-edamame-vs-mukimame-wholesale-buyers.md",
    keyword: "frozen edamame supplier",
  },
];

function path() {
  const currentPath = window.location.pathname.replace(/\/index\.html$/, "/");
  return BASE_PATH && currentPath.startsWith(BASE_PATH) ? currentPath.slice(BASE_PATH.length) || "/" : currentPath;
}

function siteUrl(url) {
  if (!BASE_PATH || !url.startsWith("/") || url.startsWith("//")) {
    return url;
  }
  return `${BASE_PATH}${url}`;
}

function header() {
  return `
    <header class="site-header">
      <nav class="nav">
        <a class="brand" href="/">
          <img src="${A}uploaded-logo-nav.png?v=4" alt="IFOODIO Nature logo" />
          <span>Asian Food Specialist</span>
        </a>
        <div class="nav-links">
          <a href="/">Home</a>
          <div class="nav-item mega-trigger">
            <a class="nav-link" href="/products/" aria-haspopup="true">Products</a>
            <div class="mega-menu" aria-label="Products mega menu">
              <div class="mega-panel">
                <div class="mega-intro">
                  <span>Product Center</span>
                  <h3>Asian frozen food supply for global buyers</h3>
                  <p>Explore IQF vegetables, noodle and pastry, seafood and private label programs built for importers, supermarkets and foodservice channels.</p>
                  <a class="button primary" data-track="mega_quote" href="/inquiry/">Request a Quote</a>
                </div>
                <div class="mega-column">
                  <h4>Core Categories</h4>
                  <a href="/iqf-frozen-vegetables/"><strong>IQF Frozen Vegetables</strong><small>Edamame, broccoli, peas, peppers, blends</small></a>
                  <a href="/noodle-pastry/"><strong>Noodle & Pastry</strong><small>Wonton pastry, spring roll pastry, gua bao buns</small></a>
                  <a href="/seafood/"><strong>Seafood</strong><small>Crayfish, roasted eel, shrimp and Asian seafood</small></a>
                </div>
                <div class="mega-column">
                  <h4>Main Products</h4>
                  ${products.slice(0, 5).map((p) => `<a href="/${p.slug}/"><strong>${p.name}</strong><small>${p.keyword}</small></a>`).join("")}
                </div>
                <div class="mega-feature">
                  <img src="${A}catalog-4.jpg" alt="IQF frozen vegetables" />
                  <h4>OEM & Private Label</h4>
                  <p>Retail packs, foodservice bags and bulk cartons with certification matching.</p>
                  <a href="/oem-odm-private-label/">View OEM Programs</a>
                </div>
              </div>
            </div>
          </div>
          <a href="/oem-odm-private-label/">OEM / ODM</a>
          <a href="/food-safety-certifications/">Food Safety</a>
          <a href="/factory-quality-control/">Factory & Quality</a>
          <a href="/blog/">Blog</a>
          <a href="/contact/">Contact</a>
        </div>
        <div class="nav-actions">
          <a class="button secondary" data-track="catalog_download" href="${A}catalog-1.jpg" download>Get Product Catalog</a>
          <a class="button primary" data-track="header_quote" href="/inquiry/">Request a Quote</a>
        </div>
        <label class="language-switcher" aria-label="Select language">
          <span>🌐</span>
          <select id="languageSelect">
            ${LANGUAGE_OPTIONS.map(([code, label]) => `<option value="${code}">${label}</option>`).join("")}
          </select>
        </label>
        <button class="mobile-menu" aria-label="Open menu">☰</button>
        <div class="mobile-nav" aria-label="Mobile navigation">
          <a href="/">Home</a>
          <a href="/products/">Products</a>
          <a href="/oem-odm-private-label/">OEM / ODM</a>
          <a href="/food-safety-certifications/">Food Safety</a>
          <a href="/factory-quality-control/">Factory & Quality</a>
          <a href="/blog/">Blog</a>
          <a href="/contact/">Contact</a>
          <a class="button primary" href="/inquiry/">Request a Quote</a>
        </div>
      </nav>
    </header>`;
}

function footer() {
  return `
    <footer class="footer">
      <div class="footer-inner">
        <div>
          <h3>Gloria Food</h3>
          <p>Gloria Food (HONGKONG) CO., LTD supplies IQF frozen food and Asian food products for importers, wholesalers, supermarkets and foodservice buyers.</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Email: <a data-track="email_click" href="mailto:sales@gloriafood.asia">sales@gloriafood.asia</a><br />Address: ${COMPANY_ADDRESS}</p>
        </div>
        <div>
          <h3>Key Products</h3>
          <p><a href="/frozen-edamame/">Frozen Edamame</a><br /><a href="/frozen-broccoli/">Frozen Broccoli</a><br /><a href="/frozen-green-peas/">Frozen Green Peas</a><br /><a href="/oem-odm-private-label/">OEM & Private Label</a></p>
        </div>
      </div>
    </footer>
    ${whatsappButton()}`;
}

function whatsappButton() {
  const text = encodeURIComponent(WHATSAPP_MESSAGE);
  return `<a class="whatsapp-float" data-track="whatsapp_click" href="https://wa.me/${WHATSAPP_NUMBER}?text=${text}" target="_blank" rel="noopener" aria-label="Chat with Gloria Food on WhatsApp">
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16.03 4.2c-6.46 0-11.72 5.24-11.72 11.69 0 2.08.55 4.09 1.59 5.87l-1.69 6.04 6.19-1.62a11.71 11.71 0 0 0 5.63 1.43c6.46 0 11.72-5.24 11.72-11.72S22.49 4.2 16.03 4.2Zm0 21.4c-1.8 0-3.56-.5-5.08-1.45l-.36-.22-3.67.96.98-3.57-.24-.37a9.61 9.61 0 0 1-1.47-5.06c0-5.35 4.38-9.7 9.84-9.7 5.43 0 9.84 4.35 9.84 9.7 0 5.36-4.41 9.71-9.84 9.71Zm5.39-7.27c-.29-.14-1.73-.85-2-.95-.27-.1-.47-.14-.67.14-.2.29-.77.95-.95 1.14-.17.2-.35.22-.64.07-.29-.14-1.23-.45-2.35-1.45-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.44.13-.59.13-.13.29-.35.44-.52.14-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.14-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.14.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.73-.71 1.98-1.39.24-.68.24-1.26.17-1.39-.07-.12-.27-.2-.56-.34Z" />
    </svg>
    <span>WhatsApp</span>
  </a>`;
}

function sectionHead(title, text) {
  return `<div class="section-head"><h2>${title}</h2><p>${text}</p></div>`;
}

function categoryGrid() {
  return `<div class="grid four">${categories.map(([name, url, image, text]) => `
    <a class="product-card category-card" href="${url}">
      <img src="${A}${image}" alt="${name}" />
      <div class="card-body"><h3>${name}</h3><p>${text}</p></div>
    </a>`).join("")}</div>`;
}

function productGrid(items = products) {
  return `<div class="grid three">${items.map((p) => `
    <a class="product-card" data-track="product_cta" href="/${p.slug}/">
      <img src="${A}${p.image}" alt="${p.name}" />
      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <p class="muted">${p.keyword}</p>
      </div>
    </a>`).join("")}</div>`;
}

function inquiryBlock() {
  return `
    <section class="section">
      <div class="inquiry">
        <div>
          <h2>Send Your Product Requirement</h2>
          <p class="lead">Tell us your destination country, target product, packaging type and expected quantity. Our sales team will follow up with a practical quotation path.</p>
        </div>
        <form class="form" id="inquiryForm">
          <input required name="name" placeholder="Name" />
          <input required name="email" type="email" placeholder="Email" />
          <input name="country" placeholder="Country" />
          <select name="companyType">
            <option value="">Company Type</option>
            <option>Importer</option>
            <option>Wholesaler</option>
            <option>Supermarket</option>
            <option>Food Brand</option>
            <option>Foodservice</option>
          </select>
          <input name="product" placeholder="Product Requirement" />
          <input name="quantity" placeholder="Quantity / Packaging Need" />
          <input name="whatsapp" placeholder="WhatsApp" />
          <textarea name="message" placeholder="Message"></textarea>
          <button class="button primary" data-track="form_submit" type="submit">Contact Sales Team</button>
          <p class="success" id="formSuccess">Thank you. Our sales team will contact you soon.</p>
        </form>
      </div>
    </section>`;
}

function advancedInquiryForm() {
  return `
    <form class="advanced-form" id="b2bInquiryForm" novalidate>
      <div class="spam-field" aria-hidden="true">
        <label>Leave this field empty<input name="website" tabindex="-1" autocomplete="off" /></label>
      </div>
      <div class="field">
        <label for="name">Name <span>*</span></label>
        <input id="name" name="name" required autocomplete="name" placeholder="Your full name" />
        <small class="field-hint">Please enter your name.</small>
      </div>
      <div class="field">
        <label for="email">Email <span>*</span></label>
        <input id="email" name="email" required type="email" autocomplete="email" placeholder="name@company.com" />
        <small class="field-hint">Please enter a valid business email.</small>
      </div>
      <div class="field">
        <label for="phone">Phone <span>*</span></label>
        <input id="phone" name="phone" required inputmode="tel" autocomplete="tel" placeholder="+1 555 123 4567" />
        <small class="field-hint">Use an international phone format, for example +86 159 0000 0000.</small>
      </div>
      <div class="field">
        <label for="company">Company Name</label>
        <input id="company" name="company" autocomplete="organization" placeholder="Your company name" />
      </div>
      <div class="field">
        <label for="country">Country / Region</label>
        <input id="country" name="country" autocomplete="country-name" placeholder="Canada, Germany, UAE..." />
      </div>
      <div class="field">
        <label for="requirement">Product Requirement</label>
        <select id="requirement" name="requirement">
          <option value="">Select a product category</option>
          <option>IQF Frozen Vegetables</option>
          <option>Frozen Edamame / Mukimame</option>
          <option>Frozen Broccoli / Green Peas / Peppers</option>
          <option>Noodle & Pastry</option>
          <option>Seafood</option>
          <option>OEM / Private Label Program</option>
        </select>
      </div>
      <div class="field full">
        <label for="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell us the product, packaging, quantity, destination port, certification needs or private label requirements."></textarea>
      </div>
      <div class="form-note full">
        <strong>Required fields are marked with *</strong>
        <span>We use this information only to follow up on your product inquiry.</span>
      </div>
      <button class="button primary submit-button full" data-track="advanced_form_submit" type="submit">
        <span class="button-label">Submit Inquiry</span>
        <span class="button-spinner" aria-hidden="true"></span>
      </button>
      <p class="form-status full" id="advancedFormStatus" role="status" aria-live="polite"></p>
    </form>`;
}

function inquiryPage() {
  return `${header()}<main>
    <section class="inquiry-page">
      <div class="section inquiry-layout">
        <div class="inquiry-copy">
          <h1>Request a B2B Frozen Food Quote</h1>
          <p class="lead">Send your contact details and product needs. Gloria Food will review your requirement and reply with the next quotation step.</p>
          <div class="inquiry-proof">
            <div><strong>OEM/ODM</strong><span>Retail packs, bulk cartons and private label support</span></div>
            <div><strong>Food Safety</strong><span>BRC, ISO22000, IFS, HALAL, KOSHER and more by product</span></div>
            <div><strong>Fast Follow-up</strong><span>Inquiry details are prepared for the sales team</span></div>
          </div>
          <div class="contact-strip">
            <span>Prefer email?</span>
            <a data-track="email_click" href="mailto:${SALES_EMAIL}">${SALES_EMAIL}</a>
          </div>
        </div>
        <div class="inquiry-card">
          <h2>Inquiry Form</h2>
          <p>Fields marked with * are required.</p>
          ${advancedInquiryForm()}
        </div>
      </div>
    </section>
    ${mapSection()}
  </main>${footer()}`;
}

function mapSection() {
  const bbox = "114.1723,28.0987,114.4923,28.3387";
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${MAP_LAT},${MAP_LON}`;
  const mapLink = `https://www.openstreetmap.org/?mlat=${MAP_LAT}&mlon=${MAP_LON}#map=11/${MAP_LAT}/${MAP_LON}`;
  return `
    <section class="section map-section">
      <div class="map-head">
        <div>
          <h2>Company Location</h2>
          <p>Visit or locate our team in Wanzai County, Yichun, Jiangxi.</p>
        </div>
        <a class="button secondary" data-track="open_map" href="${mapLink}" target="_blank" rel="noopener">Open in OpenStreetMap</a>
      </div>
      <div class="map-card">
        <div class="map-info">
          <span>Company Address</span>
          <h3>${COMPANY_ADDRESS}</h3>
          <p>${COMPANY_ADDRESS_EN}</p>
        </div>
        <a class="map-image" href="${mapLink}" target="_blank" rel="noopener" aria-label="Open company location in OpenStreetMap">
          <img src="${A}osm-wanzai-map.jpg" alt="OpenStreetMap map showing Wanzai County, Yichun, Jiangxi" />
        </a>
        <p class="map-credit">Map data © OpenStreetMap contributors</p>
      </div>
    </section>`;
}

function home() {
  return `
    ${header()}
    <main>
      <section class="section hero">
        <div class="hero-copy">
          <h1>IQF Frozen Food & Asian Food OEM/ODM Supplier</h1>
          <p class="lead">Gloria Food supplies frozen vegetables, seafood, noodle and pastry products for importers, wholesalers, supermarkets and foodservice buyers across Europe, the Americas, the Middle East and Asia.</p>
          <div class="hero-actions">
            <a class="button primary" data-track="hero_quote" href="/contact/">Request a Quote</a>
            <a class="button secondary" data-track="catalog_download" href="${A}catalog-1.jpg" download>Get Product Catalog</a>
          </div>
          <div class="proof-row">
            <div><strong>OEM/ODM</strong><span>Retail, foodservice and bulk packaging support</span></div>
            <div><strong>Certified</strong><span>BRC, ISO22000, IFS, HALAL, KOSHER and more</span></div>
            <div><strong>Inspected</strong><span>Container-level quality follow-up for export buyers</span></div>
          </div>
        </div>
        <div class="hero-media"><img src="${A}catalog-4.jpg" alt="IQF frozen vegetable products" /></div>
      </section>
      <section class="band"><div class="section">${sectionHead("Product Categories", "A focused Asian food supply range for retail, wholesale and foodservice procurement.")}${categoryGrid()}</div></section>
      <section class="section">${sectionHead("Why Gloria Food", "A supplier model built around certified sourcing, flexible packaging and lower procurement risk.")}<div class="grid five"></div><div class="grid three">
        ${["OEM/ODM customization for private label programs", "Professional manufactories meeting ready-to-eat standards", "Quality inspectors controlling every container", "Reliable certified supplier network to reduce shortage risk", "Flexible aftersales response when problems occur", "Global delivery and project support"].map((x) => `<div class="card"><h3>${x}</h3><p>Clear communication, export documentation and practical solutions for overseas B2B buyers.</p></div>`).join("")}
      </div></section>
      <section class="band"><div class="section">${sectionHead("Main Products", "Priority products for SEO, paid campaigns and buyer inquiry paths.")}${productGrid()}</div></section>
      ${oemSection()}
      ${foodSafetySection(false)}
      <section class="band"><div class="section">${sectionHead("Applications", "Supply programs for the channels that buy frozen food repeatedly.")}<div class="grid four">
        ${["Supermarkets", "Importers", "Wholesalers", "Foodservice"].map((x) => `<div class="card"><h3>${x}</h3><p>Retail packs, private label, bulk cartons and stable reorder planning for ${x.toLowerCase()}.</p></div>`).join("")}
      </div></div></section>
      ${faqSection()}
      ${inquiryBlock()}
    </main>
    ${footer()}`;
}

function oemSection() {
  return `<section class="section split">
    <div class="page-copy">
      <h2>OEM & Private Label Programs</h2>
      <p>Gloria Food supports OEM and ODM frozen food supply for retail brands, supermarkets, wholesalers and foodservice buyers. Packaging can be planned around retail bags, foodservice packs and bulk cartons.</p>
      <ul class="check-list">
        <li>Private label packaging and product selection support</li>
        <li>Retail and bulk package options for different channels</li>
        <li>Certification matching for destination market requirements</li>
        <li>Container planning with quality follow-up before shipment</li>
      </ul>
      <div><a class="button primary" data-track="oem_cta" href="/contact/">Ask for OEM Packaging</a></div>
    </div>
    <img src="${A}catalog-7.jpg" alt="OEM Asian food packaging products" />
  </section>`;
}

function foodSafetySection(wrap = true) {
  const body = `${sectionHead("Food Safety & Certifications", "Certification availability depends on the selected product and supplier. The website should only display real certificates that can be supported by documentation.")}<div class="cert-wall">${certs.map((c) => `<div class="cert">${c}</div>`).join("")}</div>`;
  return wrap ? `<section class="section">${body}</section>` : `<section class="band"><div class="section">${body}</div></section>`;
}

function faqSection() {
  return `<section class="section">${sectionHead("Buyer FAQ", "Direct answers designed for SEO, AI Overviews and procurement evaluation.")}<div class="faq">${faqs.map(([q, a]) => `<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join("")}</div></section>`;
}

function productPage(product) {
  return `${header()}<main>
    ${pageHero(product.name, product.description, product.image)}
    <section class="section page-copy">
      <h2>${product.name} for Global B2B Buyers</h2>
      <p>Gloria Food supplies ${product.name.toLowerCase()} for importers, wholesalers, supermarkets, food brands and foodservice buyers. The page is optimized around the commercial search intent: <strong>${product.keyword}</strong>.</p>
      ${answerBox(`Can Gloria Food supply ${product.name.toLowerCase()} with OEM packaging?`, `Yes. Gloria Food can support OEM and ODM packaging programs for ${product.name.toLowerCase()}, including retail packs, foodservice bags and bulk cartons depending on your market and quantity.`)}
      ${productTable([product])}
    </section>
    ${foodSafetySection()}
    ${faqSection()}
    ${inquiryBlock()}
  </main>${footer()}${schema(product.name, product.description, product.slug)}`;
}

function productTable(items = products) {
  return `<div class="table-wrap"><table><thead><tr><th>Product</th><th>Packaging</th><th>Target Buyers</th><th>Certification Support</th></tr></thead><tbody>
    ${items.map((p) => `<tr><td>${p.name}</td><td>${p.packaging}</td><td>${p.buyers}</td><td>BRC, ISO22000, IFS, HALAL, KOSHER and more by product</td></tr>`).join("")}
  </tbody></table></div>`;
}

function answerBox(q, a) {
  return `<div class="card"><h3>${q}</h3><p>${a}</p></div>`;
}

function pageHero(title, text, image = "catalog-4.jpg") {
  return `<section class="page-hero"><div class="section"><div><h1>${title}</h1><p class="lead">${text}</p><div class="hero-actions"><a class="button primary" href="/inquiry/">Request a Quote</a><a class="button secondary" href="${A}catalog-1.jpg" download>Get Product Catalog</a></div></div><img src="${A}${image}" alt="${title}" /></div></section>`;
}

function productsPage() {
  return `${header()}<main>${pageHero("Products", "Frozen vegetables, noodle and pastry, seafood and Asian food items for retail, wholesale and foodservice supply.", "catalog-3.jpg")}<section class="section">${sectionHead("Product Categories", "Build a sourcing program around your market, channel and certification requirements.")}${categoryGrid()}</section><section class="band"><div class="section">${sectionHead("Priority Products", "Commercial pages prepared for SEO and paid search inquiry paths.")}${productGrid()}</div></section>${inquiryBlock()}</main>${footer()}`;
}

function iqfPage() {
  return `${header()}<main>${pageHero("IQF Frozen Vegetables Supplier", "IQF vegetables for importers, wholesalers, supermarkets, foodservice buyers and private label programs.", "catalog-4.jpg")}<section class="section page-copy">${answerBox("Can Gloria Food supply IQF vegetables for supermarkets?", "Yes. Gloria Food supplies IQF vegetables with retail, foodservice and bulk packaging options, supported by certification matching and container-level quality follow-up.")}${productTable(products.slice(0, 5))}</section>${oemSection()}${faqSection()}${inquiryBlock()}</main>${footer()}${schema("IQF Frozen Vegetables", "IQF vegetables supplier with OEM, retail and bulk packaging support.", "iqf-frozen-vegetables")}`;
}

function simplePage(title, text, image, content) {
  return `${header()}<main>${pageHero(title, text, image)}${content}${inquiryBlock()}</main>${footer()}`;
}

function blogPage() {
  return `${header()}<main>${pageHero("Frozen Food Export Resources", "Practical SEO articles for importers comparing suppliers, certifications, packaging and private label options.", "catalog-6.jpg")}<section class="section"><div class="blog-list">${blogPosts.map((post, i) => `<article class="article-card"><a class="article-card-link" href="/blog/${post.slug}/"><div class="date">SEO Guide ${i + 1}<span>${post.keyword}</span></div><div class="card-body"><h3>${post.title}</h3><p>${post.excerpt}</p><p class="muted">Read the full procurement guide →</p></div></a></article>`).join("")}</div></section></main>${footer()}`;
}

function blogArticlePage(post) {
  return `${header()}<main>${pageHero(post.title, post.excerpt, "catalog-6.jpg")}<section class="section article-section"><div class="article-shell"><aside class="article-sidebar"><p class="eyebrow">SEO Blog</p><h3>Procurement Focus</h3><p>${post.keyword}</p><a class="button primary" href="/inquiry/" data-track="blog_sidebar_quote">Request a Quote</a><a class="button secondary" href="/blog/">Back to Blog</a></aside><article class="article-content" data-markdown-file="${post.file}"><p class="muted">Loading article...</p></article></div></section></main>${footer()}`;
}

function contactPage() {
  return inquiryPage();
}

function landingPage() {
  return `${header()}<main><section class="landing-hero"><div class="section hero"><div class="hero-copy"><h1>IQF Frozen Vegetables Supplier for Importers & Supermarkets</h1><p class="lead">Source edamame, broccoli, green peas, peppers and vegetable blends with OEM packaging, certification support and export quality follow-up.</p><div class="hero-actions"><a class="button primary" href="/inquiry/">Request a Quote</a><a class="button secondary" href="${A}catalog-1.jpg" download>Get Product Catalog</a></div></div><div class="hero-media"><img src="${A}catalog-4.jpg" alt="IQF frozen vegetables landing page" /></div></div></section><section class="section">${sectionHead("Built for Paid Search Conversion", "A focused landing page for Google Ads traffic, with the proof and form fields procurement teams need.")}${productTable(products.slice(0, 5))}</section>${foodSafetySection()}${inquiryBlock()}</main>${footer()}`;
}

function schema(name, description, slug) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Gloria Food",
        legalName: "Gloria Food (HONGKONG) CO., LTD",
        url: "https://gloriafood.asia/",
        email: "sales@gloriafood.asia",
        address: COMPANY_ADDRESS,
      },
      {
        "@type": "Product",
        name,
        description,
        brand: { "@type": "Brand", name: "Gloria Food" },
        category: "Frozen Food",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          { "@type": "ListItem", position: 2, name, item: `/${slug}/` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      },
    ],
  };
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatInlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let paragraph = [];
  let list = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${formatInlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!list.length) return;
    html.push(`<ul>${list.map((item) => `<li>${formatInlineMarkdown(item)}</li>`).join("")}</ul>`);
    list = [];
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }
    if (line.startsWith("|") && lines[i + 1]?.trim().startsWith("|---")) {
      flushParagraph();
      flushList();
      const headers = line.split("|").slice(1, -1).map((cell) => formatInlineMarkdown(cell.trim()));
      i += 2;
      const rows = [];
      while (lines[i]?.trim().startsWith("|")) {
        rows.push(lines[i].trim().split("|").slice(1, -1).map((cell) => formatInlineMarkdown(cell.trim())));
        i += 1;
      }
      i -= 1;
      html.push(`<div class="table-wrap"><table><thead><tr>${headers.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      continue;
    }
    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      html.push(`<h3>${formatInlineMarkdown(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      html.push(`<h2>${formatInlineMarkdown(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      html.push(`<h1>${formatInlineMarkdown(line.slice(2))}</h1>`);
      continue;
    }
    if (line.startsWith("- ")) {
      flushParagraph();
      list.push(line.slice(2));
      continue;
    }
    paragraph.push(line);
  }
  flushParagraph();
  flushList();
  return html.join("");
}

function render() {
  const routes = {
    "/": home,
    "/products/": productsPage,
    "/iqf-frozen-vegetables/": iqfPage,
    "/noodle-pastry/": () => simplePage("Noodle & Pastry", "Peking duck pastry, wonton pastry, spring roll pastry and gua bao buns for Asian food buyers.", "catalog-7.jpg", `${oemSection()}${faqSection()}`),
    "/seafood/": () => simplePage("Seafood", "Crayfish, roasted eel, shrimp and Asian seafood sourcing for importers and distributors.", "catalog-8.jpg", `${foodSafetySection()}${faqSection()}`),
    "/oem-odm-private-label/": () => simplePage("OEM / ODM Private Label Frozen Food", "Private label frozen food programs for supermarkets, importers, wholesalers and food brands.", "catalog-7.jpg", `${oemSection()}${productTable(products)}`),
    "/food-safety-certifications/": () => simplePage("Food Safety Certifications", "Certification-backed sourcing for frozen food buyers who need documents before procurement approval.", "catalog-9.jpg", `${foodSafetySection()}${faqSection()}`),
    "/factory-quality-control/": () => simplePage("Factory & Quality Control", "Certified manufactories, reliable sourcing and container-level inspection for export orders.", "catalog-2.jpg", `<section class="section"><div class="grid three">${["Certified supplier network", "Container quality inspection", "Flexible aftersales response"].map((x) => `<div class="card"><h3>${x}</h3><p>Designed to reduce shortage, quality and communication risk for overseas buyers.</p></div>`).join("")}</div></section>`),
    "/blog/": blogPage,
    "/inquiry/": inquiryPage,
    "/contact/": contactPage,
    "/lp/iqf-frozen-vegetables-supplier/": landingPage,
    "/lp/private-label-frozen-food/": landingPage,
    "/lp/frozen-edamame-broccoli-supplier/": landingPage,
  };
  products.forEach((p) => {
    routes[`/${p.slug}/`] = () => productPage(p);
  });
  blogPosts.forEach((post) => {
    routes[`/blog/${post.slug}/`] = () => blogArticlePage(post);
  });
  const route = routes[path()] || home;
  document.getElementById("app").innerHTML = route();
  document.title = document.querySelector("h1")?.textContent ? `${document.querySelector("h1").textContent} | Gloria Food` : "Gloria Food";
  rewriteInternalLinks();
  wireTracking();
  wireLanguageSwitcher();
  wireBlogArticle();
  wireMobileMenu();
}

function rewriteInternalLinks() {
  document.querySelectorAll("a[href^='/']").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith(BASE_PATH)) {
      link.setAttribute("href", siteUrl(href));
    }
  });
}

function wireTracking() {
  document.querySelectorAll("[data-track]").forEach((el) => {
    if (el.matches(".button.primary, .button.secondary")) {
      el.addEventListener("pointerdown", () => {
        el.classList.add("is-clicked");
        window.setTimeout(() => el.classList.remove("is-clicked"), 900);
      });
    }
    el.addEventListener("click", () => {
      const events = JSON.parse(localStorage.getItem("gloriaEvents") || "[]");
      events.push({ event: el.dataset.track, path: path(), at: new Date().toISOString() });
      localStorage.setItem("gloriaEvents", JSON.stringify(events.slice(-80)));
    });
  });
  const form = document.getElementById("inquiryForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const events = JSON.parse(localStorage.getItem("gloriaEvents") || "[]");
      events.push({ event: "form_submit", path: path(), at: new Date().toISOString() });
      localStorage.setItem("gloriaEvents", JSON.stringify(events.slice(-80)));
      document.getElementById("formSuccess").classList.add("show");
      form.reset();
    });
  }
  const advancedForm = document.getElementById("b2bInquiryForm");
  if (advancedForm) {
    wireAdvancedForm(advancedForm);
  }
}

function wireLanguageSwitcher() {
  const select = document.getElementById("languageSelect");
  const savedLanguage = localStorage.getItem("gloriaLanguage") || "en";
  if (select) {
    select.value = savedLanguage;
    select.addEventListener("change", () => {
      localStorage.setItem("gloriaLanguage", select.value);
      applyLanguage(select.value);
    });
  }
  applyLanguage(savedLanguage);
}

function wireBlogArticle() {
  const article = document.querySelector("[data-markdown-file]");
  if (!article) return;
  const file = article.dataset.markdownFile;
  fetch(siteUrl(`/blog-seo-package/${file}`))
    .then((response) => {
      if (!response.ok) {
        throw new Error("Article file not found");
      }
      return response.text();
    })
    .then((markdown) => {
      article.innerHTML = markdownToHtml(markdown);
    })
    .catch(() => {
      article.innerHTML = `<div class="answer-box"><h3>Article temporarily unavailable</h3><p>Please return to the blog page or contact Gloria Food for the article content.</p></div>`;
    });
}

function wireMobileMenu() {
  const headerEl = document.querySelector(".site-header");
  const button = document.querySelector(".mobile-menu");
  if (!headerEl || !button) return;
  button.addEventListener("click", () => {
    const isOpen = headerEl.classList.toggle("is-open");
    button.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    button.textContent = isOpen ? "×" : "☰";
  });
  document.querySelectorAll(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      headerEl.classList.remove("is-open");
      button.setAttribute("aria-label", "Open menu");
      button.textContent = "☰";
    });
  });
}

function applyLanguage(language) {
  const dictionary = TRANSLATIONS[language] || {};
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("rtl-language", language === "ar");
  translateTextNodes(document.body, dictionary);
  translatePlaceholders(language);
}

function translateTextNodes(root, dictionary) {
  const skipTags = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "INPUT", "OPTION"]);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.parentElement || skipTags.has(node.parentElement.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });
  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }
  textNodes.forEach((node) => {
    if (!node.originalEnglishText) {
      node.originalEnglishText = node.textContent;
    }
    const original = node.originalEnglishText;
    const trimmed = original.trim();
    const translated = dictionary[trimmed] || trimmed;
    node.textContent = original.replace(trimmed, translated);
  });
}

function translatePlaceholders(language) {
  document.querySelectorAll("[placeholder]").forEach((element) => {
    if (!element.dataset.originalPlaceholder) {
      element.dataset.originalPlaceholder = element.getAttribute("placeholder");
    }
    const original = element.dataset.originalPlaceholder;
    element.setAttribute("placeholder", PLACEHOLDER_TRANSLATIONS[original]?.[language] || original);
  });
}

function wireAdvancedForm(form) {
  const status = document.getElementById("advancedFormStatus");
  const submitButton = form.querySelector(".submit-button");
  const requiredFields = ["name", "email", "phone"];
  const validators = {
    name: (value) => value.trim().length >= 2,
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()),
    phone: (value) => /^\+?[0-9\s().-]{7,22}$/.test(value.trim()),
  };
  const messages = {
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    phone: "Please enter a valid international phone number.",
  };
  function setFieldState(input) {
    const field = input.closest(".field");
    const hint = field?.querySelector(".field-hint");
    const isRequired = requiredFields.includes(input.name);
    const valid = !isRequired || validators[input.name](input.value);
    field?.classList.toggle("invalid", !valid);
    if (hint && !valid) hint.textContent = messages[input.name];
    return valid;
  }
  requiredFields.forEach((name) => {
    const input = form.elements[name];
    input.addEventListener("blur", () => setFieldState(input));
    input.addEventListener("input", () => setFieldState(input));
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.className = "form-status full";
    status.textContent = "";
    if (form.elements.website?.value) {
      status.classList.add("error");
      status.textContent = "Submission blocked by anti-spam protection.";
      return;
    }
    const valid = requiredFields.map((name) => setFieldState(form.elements[name])).every(Boolean);
    if (!valid) {
      status.classList.add("error");
      status.textContent = "Please complete all required fields before submitting.";
      return;
    }
    const payload = Object.fromEntries(new FormData(form).entries());
    const events = JSON.parse(localStorage.getItem("gloriaEvents") || "[]");
    events.push({ event: "advanced_form_submit", path: path(), at: new Date().toISOString(), payloadPreview: { product: payload.requirement, country: payload.country } });
    localStorage.setItem("gloriaEvents", JSON.stringify(events.slice(-80)));
    submitButton.classList.add("loading");
    submitButton.disabled = true;
    try {
      if (!FORM_ENDPOINT) {
        await new Promise((resolve) => setTimeout(resolve, 450));
        status.classList.add("success");
        status.innerHTML = `Inquiry captured locally. Connect <strong>FORM_ENDPOINT</strong> to send this inquiry to ${SALES_EMAIL} or your CRM/database.`;
      } else {
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...payload, to: SALES_EMAIL, source: "Gloria Food inquiry page" }),
        });
        if (!response.ok) throw new Error("Network response was not ok");
        status.classList.add("success");
        status.textContent = "Thank you. Your inquiry has been submitted successfully.";
        form.reset();
      }
    } catch (error) {
      status.classList.add("error");
      status.textContent = "Submission failed. Please email sales@gloriafood.asia or try again later.";
    } finally {
      submitButton.classList.remove("loading");
      submitButton.disabled = false;
    }
  });
}

render();
