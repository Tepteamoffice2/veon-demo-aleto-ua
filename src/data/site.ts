// Facts for the homepage. Every value comes from veon/client.json (ids in comments) and design/concept.md.
// Nothing here is invented: no prices, reviews or counters beyond what the client publishes.

export const TELEGRAM = "https://t.me/Aleto_avto_bot"; // company.contacts.messengers
export const NOTE_SOON = "Розділ у розробці";
export const NOTE_SEARCH = "Онлайн-пошук з'явиться в повній версії сайту";

export const nav = [
  { href: "#pidbir", label: "Підбір деталі" },
  { href: "#marky", label: "Марки" },
  { href: "#zamovlennia", label: "Оплата і гарантія" },
  { href: "#sklad", label: "Авто в дорозі" },
  { href: "#dostavka", label: "Доставка" },
  { href: "#kontakty", label: "Контакти" },
] as const;

// company.products_services: 36 марок у каталозі (alphabetical, as on the client's catalogue)
export const brands = [
  "Acura", "Alfa Romeo", "Audi", "BMW", "Buick", "Cadillac",
  "Chevrolet", "Chrysler", "Dodge", "Fiat", "Ford", "Genesis",
  "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep",
  "Kia", "Land Rover", "Lexus", "Lincoln", "Mazda", "Mercedes",
  "Mini", "Mitsubishi", "Nissan", "Polestar", "Porsche", "RAM",
  "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen", "Volvo",
] as const;

export interface Donor {
  model: string;
  year: number;
  colour: string;
  engine?: string;
  img: string;
  alt: string;
}

// Client news, 13 листопада 2026 (B-F021; audit/screens/ua-desktop-s05.png). Photos: the client's own news pages.
export const donorsDate = { iso: "2026-11-13", label: "13 листопада 2026" };
export const donors: Donor[] = [
  { model: "Mazda CX-30 Select", year: 2021, colour: "чорна", engine: "2.5 л", img: "mazda-cx-30", alt: "Чорна Mazda CX-30 2021, фото донора з аукціону в США" },
  { model: "Kia Sorento LX", year: 2019, colour: "біла", engine: "2.4 л", img: "kia-sorento", alt: "Біла Kia Sorento 2019, фото донора з аукціону в США" },
  { model: "Kia Niro Wind", year: 2023, colour: "синя", img: "kia-niro", alt: "Синя Kia Niro 2023, фото донора з аукціону Copart" },
  { model: "BMW i4 Gran Coupe M50", year: 2024, colour: "біла", img: "bmw-i4", alt: "Біла BMW i4 M50 2024, фото донора з аукціону в США" },
];

// company.geography + company.contacts.hours (contacts page; UX-R09: only this source)
export const mapUrl = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
export const pickups = [
  {
    city: "Одеса",
    role: "Центральний офіс і самовивіз",
    address: "вул. Картамишівська, 9",
    hours: ["Пн–Пт 10:00–17:00", "Сб 10:00–15:00"],
    map: mapUrl("Одеса, вул. Картамишівська, 9"),
  },
  {
    city: "Київ",
    role: "Пункт самовивозу",
    address: "Квітневий провулок, 1, ГК «Барвінок», бокс №1337 (Подільський р-н, Виноградар)",
    hours: ["Пн–Пт 09:00–17:00", "Сб 09:00–15:00"],
    map: mapUrl("Київ, Квітневий провулок, 1"),
  },
  {
    city: "Тирасполь",
    role: "Самовивіз для Молдови і ПМР",
    address: "",
    hours: [],
    map: "",
  },
] as const;

// company.contacts.phones; B-F018: incoming calls to the Ukrainian numbers are temporarily unavailable
export const phonesUa = ["(050) 409-63-10", "(067) 579-89-70", "(050) 348-84-18", "(063) 303-99-40"];
export const phonesMd = [
  { label: "Молдова", display: "(022) 800-321", tel: "+37322800321" },
  { label: "ПМР", display: "(775) 99-196", tel: "+37377599196" },
];
export const usaLine = { display: "+373 (778) 6-57-57", tel: "+37377865757", viber: "viber://chat?number=%2B37377865757" };

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/aletoavto/" },
  { label: "Facebook", href: "https://www.facebook.com/aletoavto/" },
];

export const footerPages = [
  "Каталог запчастин", "Авто в дорозі", "Доставка і оплата", "Гарантія і повернення", "FAQ", "Договір-оферта", "Політика конфіденційності",
];
