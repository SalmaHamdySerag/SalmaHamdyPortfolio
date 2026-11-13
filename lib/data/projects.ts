import type { Project } from '@/types';

export const PROJECTS: Project[] = [
 {
  "icon": "dashboard",
  "image": "/images/medright.svg",
  "tint": "#FF7AA8",
  "file": "medright.php",
  "tags": [
   "Laravel",
   "PostgreSQL",
   "Redis",
   "Python",
   "Microservices"
  ],
  "status": "private",
  "url": "",
  "gallery": 3,
  "group": "flagship",
  "en": {
   "title": "MedRight",
   "tagline": "Insurance CRM & ERP platform",
   "desc": "An integrated CRM and ERP for an insurance and pharmaceutical company serving 100,000+ users, bringing customer, operations, and internal management workflows into one connected system with role-based access.",
   "details": [
    "Built CRM and ERP modules in one connected platform with role-based access to different business areas.",
    "Built a Python email service that processes and replies to 5,000+ emails per day, integrated with Laravel through APIs.",
    "Used Redis caching and queued jobs for performance under heavy load, and microservices to isolate high-traffic logic.",
    "Delivered live updates with Laravel Reverb, a Node.js WebSocket service, and Firebase push notifications."
   ],
   "tools": [
    "Laravel",
    "PostgreSQL",
    "Redis",
    "Python",
    "Firebase",
    "WebSockets",
    "Microservices"
   ]
  },
  "ar": {
   "title": "MedRight",
   "tagline": "منصة CRM وERP للتأمين",
   "desc": "منصة CRM وERP متكاملة لشركة تأمين وأدوية تخدم أكثر من 100,000 مستخدم، تجمع إدارة العملاء والعمليات والإدارة الداخلية في نظام واحد مترابط مع صلاحيات حسب الدور.",
   "details": [
    "بناء وحدات CRM وERP في منصة واحدة مترابطة مع صلاحيات وصول حسب الدور.",
    "بناء خدمة Python تعالج وترد على أكثر من 5,000 إيميل يوميًا ومربوطة بـ Laravel عبر APIs.",
    "استخدام Redis caching وqueued jobs للأداء تحت الضغط، وmicroservices لعزل المنطق عالي الحمل.",
    "تحديثات لحظية عبر Laravel Reverb وخدمة Node.js WebSocket وإشعارات Firebase."
   ],
   "tools": [
    "Laravel",
    "PostgreSQL",
    "Redis",
    "Python",
    "Firebase",
    "WebSockets",
    "Microservices"
   ]
  }
 },
 {
  "icon": "store",
  "image": "/images/accessories-pos.svg",
  "tint": "#FFB86B",
  "file": "accessories-pos.php",
  "tags": [
   "Laravel",
   "MySQL",
   "REST API",
   "POS"
  ],
  "status": "private",
  "url": "",
  "gallery": 3,
  "group": "private",
  "en": {
   "title": "Accessories Management",
   "tagline": "Sales, purchasing & POS system",
   "desc": "A sales and purchasing system for an accessories business, covering products, inventory movement, and a cashier flow that records every sale accurately at the point of sale.",
   "details": [
    "Built buying and selling workflows covering products, inventory movement, and sales and purchase records.",
    "Integrated a cashier (POS) flow with the backend so sales are recorded accurately at checkout.",
    "Designed the relational schema and RESTful APIs behind the whole system."
   ],
   "tools": [
    "Laravel",
    "MySQL",
    "REST API",
    "POS flow"
   ]
  },
  "ar": {
   "title": "نظام إدارة الإكسسوارات",
   "tagline": "نظام مبيعات ومشتريات وPOS",
   "desc": "نظام مبيعات ومشتريات لنشاط إكسسوارات، يغطي المنتجات وحركة المخزون وكاشير يسجل كل عملية بيع بدقة.",
   "details": [
    "بناء دورات البيع والشراء وحركة المخزون وسجلات المبيعات والمشتريات.",
    "ربط الكاشير (POS) بالـ backend لتسجيل المبيعات بدقة وقت الدفع.",
    "تصميم قاعدة البيانات العلائقية وواجهات REST خلف النظام."
   ],
   "tools": [
    "Laravel",
    "MySQL",
    "REST API",
    "POS"
   ]
  }
 },
 {
  "icon": "leaf",
  "image": "/images/revive.svg",
  "tint": "#6EE7B7",
  "file": "revive.php",
  "tags": [
   "Laravel",
   "MySQL",
   "REST API"
  ],
  "status": "private",
  "url": "",
  "gallery": 3,
  "group": "private",
  "en": {
   "title": "Revive",
   "tagline": "Backend modules & REST APIs",
   "desc": "Backend modules and RESTful APIs for the Revive platform, built with validation, structured responses, and clean separation of business logic.",
   "details": [
    "Developed backend modules and RESTful APIs with request validation and consistent, structured responses.",
    "Organized business logic into reusable services for easier maintenance."
   ],
   "tools": [
    "Laravel",
    "MySQL",
    "REST API"
   ]
  },
  "ar": {
   "title": "Revive",
   "tagline": "وحدات Backend وواجهات REST",
   "desc": "وحدات backend وواجهات REST لمنصة Revive، مبنية مع validation واستجابات منظمة وفصل واضح للمنطق.",
   "details": [
    "تطوير وحدات backend وواجهات REST مع التحقق من الطلبات واستجابات منظمة.",
    "تنظيم منطق العمل في خدمات قابلة لإعادة الاستخدام."
   ],
   "tools": [
    "Laravel",
    "MySQL",
    "REST API"
   ]
  }
 },
 {
  "icon": "hrm",
  "image": "/images/nextflow.svg",
  "tint": "#8AB4FF",
  "file": "nextflow.php",
  "tags": [
   "Laravel",
   "MySQL",
   "Redis",
   "REST API"
  ],
  "status": "private",
  "url": "",
  "gallery": 3,
  "group": "private",
  "en": {
   "title": "NextFlow",
   "tagline": "Business management platform",
   "desc": "A CRM/ERP-style business management platform where I built a dedicated set of standalone features with their own database logic, APIs, and business rules.",
   "details": [
    "Built standalone features for a CRM/ERP-style platform with their own database logic and APIs.",
    "Defined clear business rules and boundaries so the features plug into the wider system cleanly.",
    "Used Redis to keep frequently-read data fast."
   ],
   "tools": [
    "Laravel",
    "MySQL",
    "Redis",
    "REST API"
   ]
  },
  "ar": {
   "title": "NextFlow",
   "tagline": "منصة إدارة أعمال",
   "desc": "منصة إدارة أعمال بنمط CRM/ERP، بنيت فيها مجموعة ميزات مستقلة بمنطق قاعدة بيانات وAPIs وقواعد عمل خاصة بها.",
   "details": [
    "بناء ميزات مستقلة لمنصة بنمط CRM/ERP بمنطق قاعدة بيانات وAPIs خاصة.",
    "تحديد قواعد عمل وحدود واضحة لتندمج الميزات مع النظام بسلاسة.",
    "استخدام Redis لتسريع البيانات كثيرة القراءة."
   ],
   "tools": [
    "Laravel",
    "MySQL",
    "Redis",
    "REST API"
   ]
  }
 },
 {
  "icon": "game",
  "image": "/images/pets-park.svg",
  "tint": "#C4A1FF",
  "file": "pets-park.php",
  "tags": [
   "Laravel",
   "MySQL",
   "Payments",
   "Email"
  ],
  "status": "private",
  "url": "",
  "gallery": 3,
  "group": "private",
  "en": {
   "title": "Pets Park",
   "tagline": "Pet-care & veterinary platform",
   "desc": "A platform connecting pet owners with veterinarians, with animal listings, payments, email notifications, and appointment follow-up with the vet.",
   "details": [
    "Built backend modules and APIs connecting pet owners with veterinarians, including animal listings.",
    "Implemented payment workflows and email notifications.",
    "Built appointment follow-up with the vet, plus the supporting database design."
   ],
   "tools": [
    "Laravel",
    "MySQL",
    "Payments",
    "Email notifications"
   ]
  },
  "ar": {
   "title": "Pets Park",
   "tagline": "منصة رعاية الحيوانات والبيطرة",
   "desc": "منصة تربط أصحاب الحيوانات الأليفة بالأطباء البيطريين، مع عرض الحيوانات والمدفوعات وإشعارات البريد ومتابعة المواعيد مع الطبيب.",
   "details": [
    "بناء وحدات وAPIs تربط أصحاب الحيوانات بالأطباء البيطريين مع عرض الحيوانات.",
    "تنفيذ مسارات الدفع وإشعارات البريد الإلكتروني.",
    "بناء متابعة المواعيد مع الطبيب وتصميم قاعدة البيانات الداعمة."
   ],
   "tools": [
    "Laravel",
    "MySQL",
    "المدفوعات",
    "إشعارات البريد"
   ]
  }
 },
 {
  "icon": "ecommerce",
  "image": "/images/ecommerce.svg",
  "tint": "#7DD3FC",
  "file": "ecommerce.php",
  "tags": [
   "Laravel",
   "MySQL",
   "PostgreSQL",
   "Redis"
  ],
  "status": "private",
  "url": "",
  "gallery": 3,
  "group": "private",
  "en": {
   "title": "E-commerce Platform",
   "tagline": "Production e-commerce backend",
   "desc": "Backend for a production e-commerce platform: RESTful APIs, relational schemas, and business logic on MySQL and PostgreSQL, tuned to stay fast under heavy usage.",
   "details": [
    "Designed RESTful APIs, relational schemas, and business logic for a production e-commerce platform.",
    "Used Redis caching, queues and jobs, and query optimization to cut database load.",
    "Structured the code with Service Layer and Repository Pattern for maintainability."
   ],
   "tools": [
    "Laravel",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Queues & Jobs"
   ]
  },
  "ar": {
   "title": "منصة تجارة إلكترونية",
   "tagline": "Backend لمتجر إلكتروني إنتاجي",
   "desc": "Backend لمنصة تجارة إلكترونية في الإنتاج: واجهات REST وقواعد بيانات علائقية ومنطق عمل على MySQL وPostgreSQL، مع ضبط للأداء تحت الضغط.",
   "details": [
    "تصميم واجهات REST وقواعد بيانات ومنطق عمل لمنصة تجارة إلكترونية.",
    "استخدام Redis caching وqueues وjobs وتحسين الاستعلامات لتقليل الحمل.",
    "هيكلة الكود بـ Service Layer وRepository Pattern لسهولة الصيانة."
   ],
   "tools": [
    "Laravel",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Queues & Jobs"
   ]
  }
 }
];
