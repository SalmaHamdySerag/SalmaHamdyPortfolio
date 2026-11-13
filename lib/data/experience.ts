import type { ExperienceEntry } from '@/types';

export const EXPERIENCE: ExperienceEntry[] = [
 {
  "current": true,
  "company": "Astra Tech",
  "date": {
   "en": "Nov 2024 — Present",
   "ar": "نوفمبر 2024 — حتى الآن"
  },
  "en": {
   "role": "Backend Developer",
   "location": "Alexandria, Egypt",
   "projects": "MedRight, NextFlow, Pets Park, Revive, Accessories POS",
   "bullets": [
    "Developed backend services for production e-commerce and SaaS platforms: RESTful APIs, relational schemas, and business logic on MySQL and PostgreSQL.",
    "Built MedRight, a CRM & ERP platform for an insurance and pharmaceutical company serving 100,000+ users.",
    "Applied microservices to separate core business logic into independent, easier-to-deploy services.",
    "Implemented real-time updates with Laravel Reverb and a Node.js WebSocket service, plus Firebase push notifications.",
    "Built a Python service that processes and replies to 5,000+ emails per day, integrated through APIs.",
    "Used Redis caching, queues & jobs, and query optimization to cut database load; structured code with Service Layer and Repository Pattern."
   ]
  },
  "ar": {
   "role": "مطورة Backend",
   "location": "الإسكندرية، مصر",
   "projects": "MedRight، NextFlow، Pets Park، Revive، Accessories POS",
   "bullets": [
    "تطوير خدمات backend لمنصات تجارة إلكترونية وSaaS في الإنتاج: واجهات REST وقواعد بيانات ومنطق عمل على MySQL وPostgreSQL.",
    "بناء MedRight، منصة CRM وERP لشركة تأمين وأدوية تخدم أكثر من 100,000 مستخدم.",
    "تطبيق microservices لفصل منطق العمل الأساسي في خدمات مستقلة أسهل في النشر.",
    "تنفيذ تحديثات لحظية بـ Laravel Reverb وخدمة Node.js WebSocket مع إشعارات Firebase.",
    "بناء خدمة Python تعالج وترد على أكثر من 5,000 إيميل يوميًا ومربوطة عبر APIs.",
    "استخدام Redis caching وqueues وjobs وتحسين الاستعلامات لتقليل الحمل، مع Service Layer وRepository Pattern."
   ]
  }
 }
];
