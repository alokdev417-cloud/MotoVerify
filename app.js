"use strict";

const suppliedBikePhotos = {
  "ducati panigale v2": "assets/bikes/ducati-panigale-v2.jpg",
  "suzuki hayabusa": "assets/bikes/suzuki-hayabusa.jpg",
  "tvs apache rtr 200 4v": "assets/bikes/tvs-apache-rtr-200-4v.jpg",
  "kawasaki z650": "assets/bikes/kawasaki-z650.jpg",
  "royal enfield continental gt 650": "assets/bikes/royal-enfield-continental-gt-650.jpg",
  "hero xtreme 200s": "assets/bikes/hero-xtreme-200s.jpg",
  "tvs apache rtr 160 4v": "assets/bikes/tvs-apache-rtr-160-4v.jpg",
  "royal enfield himalayan": "assets/bikes/royal-enfield-himalayan.jpg",
  "honda cb shine": "assets/bikes/honda-shine-125.jpg",
  "honda shine 125": "assets/bikes/honda-shine-125.jpg",
  "bajaj dominar 400": "assets/bikes/bajaj-dominar-400.jpg"
};

const demoBikes = [
  [1,"Royal Enfield Classic 350","Royal Enfield","Motorcycle",349,2021,18400,1,142000,"Ludhiana","#3b5b4a",94,35,"photo-1558981806-ec527fa84c39"],
  [2,"Bajaj Pulsar NS200","Bajaj","Sports",199,2020,24100,1,98000,"Chandigarh","#1d2b4a",91,40,"photo-1558981806-ec527fa84c39"],
  [3,"Honda Activa 6G","Honda","Scooter",109,2022,9800,1,62000,"Ludhiana","#b3392b",96,50,"photo-1558981806-ec527fa84c39"],
  [4,"TVS Apache RTR 160 4V","TVS","Motorcycle",160,2021,21000,2,71000,"Jalandhar","#222831",89,45,"photo-1558981806-ec527fa84c39"],
  [5,"Yamaha R15 V3","Yamaha","Sports",155,2019,31200,1,128000,"Amritsar","#2457a6",90,45,"photo-1558981806-ec527fa84c39"],
  [6,"KTM Duke 200","KTM","Sports",199,2020,19500,2,112000,"Patiala","#e0701b",88,35,"photo-1558981806-ec527fa84c39"],
  [7,"Hero Splendor Plus","Hero","Motorcycle",97,2020,28800,1,38000,"Ludhiana","#444b57",92,70,"photo-1558981806-ec527fa84c39"],
  [8,"Suzuki Access 125","Suzuki","Scooter",124,2021,12600,1,58000,"Mohali","#6c5ce7",93,48,"photo-1558981806-ec527fa84c39"],
  [9,"Royal Enfield Himalayan","Royal Enfield","Motorcycle",411,2019,26500,2,169000,"Chandigarh","#7a8a99",87,30,"photo-1558981403-c5f9899a28bc"],
  [10,"Honda CB Shine","Honda","Motorcycle",124,2022,8400,1,56000,"Jalandhar","#0f6b5d",95,60,"photo-1558981806-ec527fa84c39"],
  [11,"TVS Jupiter","TVS","Scooter",109,2021,15200,1,49000,"Amritsar","#c58b1d",92,52,"photo-1558981806-ec527fa84c39"],
  [12,"Bajaj Dominar 400","Bajaj","Motorcycle",373,2020,22800,1,138000,"Patiala","#2b2d42",90,30,"photo-1558981403-c5f9899a28bc"],
  [13,"Yamaha R15 V4","Yamaha","Sports",155,2022,8900,1,165000,"Ludhiana","#1f4fa8",95,45,"photo-1558981806-ec527fa84c39"],
  [14,"KTM RC 200","KTM","Sports",199,2021,12400,1,155000,"Chandigarh","#e0701b",92,30,"photo-1558981806-ec527fa84c39"],
  [15,"KTM RC 390","KTM","Sports",373,2020,16800,1,215000,"Mohali","#e0701b",91,28,"photo-1558981806-ec527fa84c39"],
  [16,"KTM Duke 390","KTM","Sports",373,2021,14200,1,230000,"Patiala","#e0701b",93,28,"photo-1558981403-c5f9899a28bc"],
  [17,"Kawasaki Ninja 300","Kawasaki","Sports",296,2019,17500,1,265000,"Chandigarh","#2ea043",89,26,"photo-1558981806-ec527fa84c39"],
  [18,"Kawasaki Ninja 400","Kawasaki","Sports",399,2020,9800,1,385000,"Jalandhar","#2ea043",94,24,"photo-1558981806-ec527fa84c39"],
  [19,"Kawasaki Z650","Kawasaki","Sports",649,2021,11200,1,480000,"Ludhiana","#2ea043",93,20,"photo-1558981403-c5f9899a28bc"],
  [20,"Suzuki Gixxer SF 250","Suzuki","Sports",249,2021,13600,1,125000,"Amritsar","#2457a6",90,35,"photo-1558981806-ec527fa84c39"],
  [21,"Suzuki Hayabusa","Suzuki","Sports",1340,2020,6400,1,1150000,"Chandigarh","#222831",96,14,"photo-1558981403-c5f9899a28bc"],
  [22,"Honda CBR 650R","Honda","Sports",649,2021,7800,1,780000,"Mohali","#b3392b",95,20,"photo-1558981806-ec527fa84c39"],
  [23,"Honda CBR 150R","Honda","Sports",149,2018,29800,2,72000,"Jalandhar","#b3392b",86,40,"photo-1558981806-ec527fa84c39"],
  [24,"TVS Apache RR 310","TVS","Sports",312,2021,10800,1,198000,"Ludhiana","#222831",94,28,"photo-1558981403-c5f9899a28bc"],
  [25,"TVS Apache RTR 200 4V","TVS","Sports",197,2022,9200,1,102000,"Patiala","#c0392b",94,38,"photo-1558981806-ec527fa84c39"],
  [26,"Bajaj Pulsar RS200","Bajaj","Sports",199,2019,23600,2,89000,"Amritsar","#c0392b",88,35,"photo-1558981806-ec527fa84c39"],
  [27,"Hero Karizma ZMR","Hero","Sports",223,2018,32100,2,64000,"Jalandhar","#c0392b",85,40,"photo-1558981806-ec527fa84c39"],
  [28,"Hero Xtreme 200S","Hero","Sports",199,2020,20400,1,76000,"Ludhiana","#1d2b4a",90,40,"photo-1558981806-ec527fa84c39"],
  [29,"Yamaha YZF-R3","Yamaha","Sports",321,2019,14900,1,310000,"Chandigarh","#2457a6",92,24,"photo-1558981403-c5f9899a28bc"],
  [30,"Triumph Daytona 660","Triumph","Sports",660,2023,3900,1,820000,"Mohali","#222831",97,20,"photo-1558981403-c5f9899a28bc"],
  [31,"Ducati Panigale V2","Ducati","Sports",955,2021,5200,1,1450000,"Chandigarh","#c0392b",96,14,"photo-1558981403-c5f9899a28bc"],
  [32,"Aprilia RS 457","Aprilia","Sports",457,2024,2800,1,385000,"Mohali","#222831",97,25,"photo-1558981806-ec527fa84c39"],
  [33,"BMW S 1000 RR","BMW","Sports",999,2020,9800,1,1650000,"Chandigarh","#2457a6",95,15,"photo-1558981403-c5f9899a28bc"],
  [34,"Royal Enfield Continental GT 650","Royal Enfield","Sports",648,2021,12900,1,255000,"Ludhiana","#c58b1d",92,22,"photo-1558981403-c5f9899a28bc"],
  [35,"Yamaha MT-15 V2","Yamaha","Sports",155,2022,7600,1,135000,"Patiala","#444b57",94,45,"photo-1558981806-ec527fa84c39"]
].map((item) => ({
  id: item[0], name: item[1], brand: item[2], type: item[3], cc: item[4],
  year: item[5], km: item[6], own: item[7], price: item[8], city: item[9],
  color: item[10], score: item[11], mil: item[12], imageId: item[13],
  imageURL: suppliedBikePhotos[item[1].toLowerCase()], ok: true
}));

const priceGuideImages = [
  "assets/bikes/hero-splendor-plus.jpg",
  "assets/bikes/hero-hf-deluxe.jpg",
  "assets/bikes/bajaj-platina-110.jpg",
  "assets/bikes/honda-shine-125.jpg",
  "assets/bikes/honda-sp-125.jpg",
  "assets/bikes/tvs-raider-125.jpg",
  "assets/bikes/hero-glamour-x.jpg",
  "assets/bikes/honda-unicorn.jpg",
  "assets/bikes/bajaj-pulsar-125.jpg",
  "assets/bikes/tvs-sport.jpg",
  "assets/bikes/hero-xtreme-125r.jpg",
  "assets/bikes/bajaj-pulsar-150.jpg",
  "assets/bikes/royal-enfield-classic-350.jpg",
  "assets/bikes/ktm-duke-200.jpg",
  "assets/bikes/ktm-390-duke.jpg",
  "assets/bikes/kawasaki-z900.jpg",
  "assets/bikes/yamaha-mt-15-v2.jpg",
  "assets/bikes/triumph-speed-400.jpg",
  "assets/bikes/bmw-g-310-r.jpg",
  "assets/bikes/bajaj-pulsar-ns400z.jpg",
  "assets/bikes/ultraviolette-f77-mach-2.jpg",
  "assets/bikes/aprilia-tuono-457.jpg",
  "assets/bikes/ducati-panigale-v4.jpg",
  "assets/bikes/honda-cbr650r.jpg",
  "assets/bikes/yamaha-r15-v4.jpg",
  "assets/bikes/ktm-rc-200.jpg",
  "assets/bikes/tvs-apache-rr-310.jpg",
  "assets/bikes/bajaj-pulsar-rs200.jpg",
  "assets/bikes/aprilia-rs-457.jpg",
  "assets/bikes/suzuki-gixxer-sf-250.jpg",
  "assets/bikes/yamaha-r3.jpg",
  "assets/bikes/kawasaki-ninja-300.jpg",
  "assets/bikes/kawasaki-ninja-500.jpg",
  "assets/bikes/ktm-rc-390.jpg",
  "assets/bikes/bmw-g-310-rr.jpg",
  "assets/bikes/kawasaki-ninja-zx-10r.jpg",
  "assets/bikes/kawasaki-ninja-zx-6r.jpg",
  "assets/bikes/triumph-daytona-660.jpg"
];

const priceGuide = [
  ["Hero Splendor Plus","Hero","Motorcycle",97.2,78912,"₹78,912","70 kmpl claimed","4-speed",["8.05 Nm torque","Reliable daily commuter"],"Indicative India price; confirm local variant and on-road cost."],
  ["Hero HF Deluxe","Hero","Motorcycle",97.2,59477,"₹59,477","70 kmpl claimed","4-speed",["Lightweight design","Budget-friendly commuter"],"Indicative India price; confirm local variant and on-road cost."],
  ["Bajaj Platina 110","Bajaj","Motorcycle",110,75797,"₹75,797 approx.","Not stated","4-speed",["Comfortable suspension","Long seat","Mileage-focused bike"],"Approximate India price; confirm local variant and on-road cost."],
  ["Honda Shine 125","Honda","Motorcycle",123.94,83422,"₹83,422 approx.","Not stated","5-speed",["10.7 bhp approximately","Smooth engine","Comfortable family bike"],"Approximate India price; confirm local variant and on-road cost."],
  ["Honda SP 125","Honda","Motorcycle",123.94,91374,"₹91,374 approx.","Not stated","5-speed",["10.72 bhp","Digital instrument cluster","Sporty commuter styling"],"Approximate India price; confirm local variant and on-road cost."],
  ["TVS Raider 125","TVS","Motorcycle",124.8,86939,"₹86,939 approx.","Not stated","5-speed",["11.2 bhp","Digital display","Stylish everyday bike"],"Approximate India price; confirm local variant and on-road cost."],
  ["Hero Glamour X","Hero","Motorcycle",125,88517,"₹88,517 approx.","Not stated","5-speed",["Digital features","Comfortable seating","Commuter styling"],"Approximate India price; confirm local variant and on-road cost."],
  ["Honda Unicorn","Honda","Motorcycle",162.7,115000,"₹1.15 lakh approx.","Not stated","5-speed",["Smooth 160cc-class engine","Comfortable riding position","Family and office use"],"Approximate India price; confirm local variant and on-road cost."],
  ["Bajaj Pulsar 125","Bajaj","Motorcycle",124.4,104000,"₹1.04 lakh approx.","Not stated","5-speed",["11.8 PS approximately","Sporty commuter look","Split-seat options"],"Approximate India price; confirm local variant and on-road cost."],
  ["TVS Sport","TVS","Motorcycle",109.7,65000,"₹60,000–70,000 approx.","Not stated","4-speed",["Lightweight commuter","Fuel-efficient design","Low running-cost focus"],"Approximate price range; confirm local variant and on-road cost."],
  ["Hero Xtreme 125R","Hero","Motorcycle",124.7,92865,"₹92,865 approx.","Not stated","5-speed",["11.5 bhp approximately","LED lighting","Sporty everyday styling"],"Approximate India price; confirm local variant and on-road cost."],
  ["Bajaj Pulsar 150","Bajaj","Motorcycle",149.5,110000,"₹1.10 lakh approx.","Not stated","5-speed",["14 PS approximately","Classic commuter-sport design","Popular everyday-bike choice"],"Approximate India price; confirm local variant and on-road cost."],
  ["Royal Enfield Classic 350","Royal Enfield","Motorcycle",349,193000,"₹1.93 lakh onwards","20.2 bhp","Not stated",["Cruiser / roadster","349 cc engine"],"Indicative starting India price; confirm variant, city and on-road cost."],
  ["KTM Duke 200","KTM","Motorcycle",200,195000,"₹1.95 lakh onwards","Not stated","6-speed",["Street naked","Agile everyday performance"],"Indicative starting India price; confirm variant, city and on-road cost."],
  ["KTM 390 Duke","KTM","Motorcycle",399,295000,"₹2.95 lakh approx.","46 PS","Not stated",["Naked street fighter","399 cc engine"],"Approximate India price; confirm variant, city and on-road cost."],
  ["Kawasaki Z900","Kawasaki","Motorcycle",948,950000,"₹9.5 lakh approx.","Not stated","Not stated",["Inline-four engine","Supernaked"],"Approximate India price; confirm variant, city and on-road cost."],
  ["Yamaha MT-15 V2","Yamaha","Motorcycle",155,170000,"₹1.70 lakh approx.","18.4 PS","Not stated",["Naked streetfighter","155 cc engine"],"Approximate India price; confirm variant, city and on-road cost."],
  ["Triumph Speed 400","Triumph","Motorcycle",398,240000,"₹2.40 lakh approx.","40 PS","Not stated",["Roadster","398 cc engine"],"Approximate India price; confirm variant, city and on-road cost."],
  ["BMW G 310 R","BMW","Motorcycle",313,290000,"₹2.90 lakh approx.","34 PS","27.3 Nm",["Roadster","Liquid-cooled engine"],"Approximate India price; confirm variant, city and on-road cost."],
  ["Bajaj Pulsar NS400Z","Bajaj","Motorcycle",373,190000,"₹1.90 lakh approx.","40 PS","Not stated",["Naked sports bike","373 cc engine"],"Approximate India price; confirm variant, city and on-road cost."],
  ["Ultraviolette F77 Mach 2","Ultraviolette","Motorcycle",0,299000,"₹2.99 lakh approx.","Up to 40.5 bhp","Not stated",["Electric motorcycle","Sport electric"],"Approximate India price; confirm variant, city and on-road cost."],
  ["Aprilia Tuono 457","Aprilia","Motorcycle",457,406000,"₹4.06 lakh approx.","46.9 PS","Not stated",["Naked sports bike","457 cc engine"],"Approximate India price; confirm variant, city and on-road cost."],
  ["Ducati Panigale V4","Ducati","Sports",1103,3000000,"₹30 lakh+ approx.","Not stated","Not stated",["Premium superbike","1103 cc engine"],"Indicative approximate starting price; confirm model year, variant and city."],
  ["Honda CBR650R","Honda","Sports",649,1000000,"₹10 lakh+ approx.","Not stated","Not stated",["Inline-four engine","Sports tourer"],"Indicative approximate starting price; confirm model year, variant and city."],
  ["Yamaha R15 V4","Yamaha","Sports",155,175000,"₹1.75 lakh","18.4 PS","14.2 Nm",["Approx. 45 km/l mileage","6-speed, liquid-cooled","Dual-channel ABS, traction control"],"Indicative India price; varies by variant and city."],
  ["KTM RC 200","KTM","Sports",199.5,233000,"₹2.33 lakh","Approx. 25 PS","Not stated",["Liquid-cooled engine","6-speed transmission","Sporty riding position and aggressive fairing"],"Indicative India price; varies by variant and city."],
  ["TVS Apache RR 310","TVS","Sports",312.2,266000,"₹2.66 lakh","37.54 bhp","29 Nm",["6-speed gearbox","Multiple riding modes","Dual-channel ABS","Approx. 34.7 km/l"],"Indicative India price; varies by variant and city."],
  ["Bajaj Pulsar RS200","Bajaj","Sports",199.5,182000,"₹1.82 lakh*","24.5 PS","18.74 Nm",["Liquid-cooled engine","6-speed gearbox","Dual-channel ABS","Fully-faired design"],"Indicative price; the source marks this figure with an asterisk."],
  ["Aprilia RS 457","Aprilia","Sports",457,433000,"₹4.33 lakh","46.9 bhp","Not stated",["Twin-cylinder, liquid-cooled engine","6-speed gearbox","Advanced electronics and sporty handling"],"Indicative India price; varies by variant and city."],
  ["Suzuki Gixxer SF 250","Suzuki","Sports",249,198000,"₹1.98 lakh*","Approx. 26.5 PS","Not stated",["Oil-cooled single-cylinder engine","6-speed gearbox","Sporty full-fairing design","Sports-touring character"],"Indicative price; the source marks this figure with an asterisk."],
  ["Yamaha R3","Yamaha","Sports",321,340000,"₹3.40 lakh","42 PS","Not stated",["Parallel-twin engine","6-speed gearbox","Liquid-cooled","Fully-faired sports design"],"Indicative India price; varies by variant and city."],
  ["Kawasaki Ninja 300","Kawasaki","Sports",296,317000,"₹3.17 lakh onwards","39 PS","26.1 Nm",["Parallel-twin engine","6-speed gearbox","Dual-channel ABS"],"Indicative starting India price; varies by variant and city."],
  ["Kawasaki Ninja 500","Kawasaki","Sports",451,566000,"₹5.66 lakh","Approx. 52 PS","Not stated",["Parallel-twin engine","6-speed transmission","Sport-touring ergonomics"],"Indicative India price; varies by variant and city."],
  ["KTM RC 390","KTM","Sports",373,334000,"₹3.34 lakh","42.9 bhp","37 Nm",["Liquid-cooled engine","6-speed gearbox","Performance-oriented handling"],"Indicative India price; varies by variant and city."],
  ["BMW G 310 RR","BMW","Sports",312,290000,"₹2.90 lakh onwards","34 PS","27.3 Nm",["Liquid-cooled engine","Multiple riding modes","Fully-faired styling"],"Indicative starting India price; varies by variant and city."],
  ["Kawasaki Ninja ZX-10R","Kawasaki","Sports",998,1950000,"₹18–21 lakh approx.","Not stated","Not stated",["Inline-four engine","Track-inspired performance","Advanced electronics","Premium superbike category"],"Approximate India price range; varies by variant and city."],
  ["Kawasaki Ninja ZX-6R","Kawasaki","Sports",636,1249000,"₹12.49 lakh","Not stated","Not stated",["Inline-four engine","Supersport design","High-revving performance","Advanced rider electronics"],"Indicative India price; varies by variant and city."],
  ["Triumph Daytona 660","Triumph","Sports",660,988000,"₹9.88 lakh","94 bhp","Not stated",["Triple-cylinder engine","Three riding modes","ABS and traction control","Sport-focused ergonomics"],"Indicative India price; varies by variant and city."]
].map((item, index) => {
  const [name, brand, type, cc, price, priceLabel, specA, specB, highlights, priceNote] = item;
  const imageURL = priceGuideImages[index];
  if (!imageURL) throw new Error(`Missing catalogue photo for ${name}.`);
  const mileage = specA.toLowerCase().includes("kmpl") ? specA : "Not stated";
  const power = mileage === "Not stated" ? specA : "Not stated";
  const torque = mileage === "Not stated" ? specB : "Not stated";
  const gearbox = mileage !== "Not stated"
    ? specB
    : highlights.find((highlight) => /^\d-speed\b/i.test(highlight)) || "Not stated";
  const imageId = index % 3 === 1 ? "photo-1558981403-c5f9899a28bc" : "photo-1558981806-ec527fa84c39";
  const searchable = `${name} ${brand} ${type} ${cc} cc ${power} ${torque} ${mileage} ${gearbox} ${priceLabel} ${highlights.join(" ")}`.toLowerCase();
  return {
    id: 100 + index, name, brand, type, cc, price,
    priceLabel: priceLabel.replace(/\s+approx\.?/i, ""),
    priceNote: "Indicative India price; confirm the current variant and dealer price.",
    power, torque, mileage, gearbox, highlights, searchable, imageId,
    imageURL,
    year: 2026, km: 0, own: 1, city: "India", color: "#5b6778",
    score: 0, mil: 0, ok: false, isPriceGuide: true,
    catalogOrder: index < 24 ? 0 : 1
  };
});

const referenceNames = new Set([
  "royal enfield classic 350", "ktm duke 200", "hero splendor plus",
  "yamaha r15 v4", "tvs apache rr 310", "bajaj pulsar rs200", "aprilia rs 457",
  "suzuki gixxer sf 250", "ktm rc 390", "ktm duke 390", "yamaha mt-15 v2",
  "honda cbr 650r", "ktm rc 200", "kawasaki ninja 300", "triumph daytona 660",
  "yamaha yzf-r3", "honda cb shine"
]);
const bikes = [
  ...priceGuide,
  ...demoBikes.filter((bike) => !referenceNames.has(bike.name.toLowerCase()))
];

try {
  const storedBikes = JSON.parse(localStorage.getItem("tb-user-bikes") || "[]");
  if (Array.isArray(storedBikes)) {
    for (const bike of storedBikes) {
      if (!bike || !Number.isSafeInteger(bike.id) || typeof bike.name !== "string" ||
          typeof bike.brand !== "string" || !Number.isFinite(bike.price) ||
          !Number.isFinite(bike.year) || !Number.isFinite(bike.cc)) continue;
      const restored = {
        id: bike.id, name: bike.name.slice(0, 100), brand: bike.brand.slice(0, 60),
        type: bike.type === "Scooter" ? "Scooter" : "Motorcycle", cc: bike.cc,
        year: bike.year, km: Number.isFinite(bike.km) ? bike.km : 0,
        own: Number.isFinite(bike.own) ? bike.own : 1, price: bike.price,
        city: typeof bike.city === "string" ? bike.city.slice(0, 60) : "Your city",
        color: "#5b6778", score: 0, mil: 0, ok: false,
        imageId: "photo-1558981806-ec527fa84c39", userListing: true
      };
      if (typeof bike.imageURL === "string") {
        try {
          const imageURL = new URL(bike.imageURL);
          if (imageURL.protocol === "https:" || imageURL.protocol === "http:") {
            restored.imageURL = imageURL.href;
          }
        } catch (error) {
          console.warn("A stored bike photo URL could not be restored.", error);
        }
      }
      if (!bikes.some((item) => item.id === restored.id)) bikes.unshift(restored);
    }
  }
} catch (error) {
  console.warn("User bike listings could not be restored.", error);
}

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const formatINR = (amount) => `₹${Number(amount).toLocaleString("en-IN")}`;
const imageURL = (bike, width = 720) => bike.imageURL ||
  `https://images.unsplash.com/${bike.imageId}?auto=format&fit=crop&w=${width}&q=82`;
const state = {
  q: "",
  brands: new Set(),
  cc: "",
  year: 0,
  price: 3500000,
  owners: 0,
  type: "",
  savedOnly: false,
  sort: "featured"
};
let saved = new Set();
let compared = new Set();
let activities = [];
let activityFilter = "all";
let activityRestoreFailed = false;
let user = "";
let registerMode = false;
let toastTimer;

try {
  const stored = JSON.parse(localStorage.getItem("tb-saved") || "[]");
  if (Array.isArray(stored)) saved = new Set(stored.filter((id) => Number.isInteger(id)));
} catch (error) {
  console.warn("Saved bikes could not be restored.", error);
}

try {
  const storedCompare = JSON.parse(localStorage.getItem("tb-compare") || "[]");
  if (Array.isArray(storedCompare)) {
    compared = new Set(storedCompare.filter((id) =>
      Number.isSafeInteger(id) && bikes.some((bike) => bike.id === id)
    ).slice(0, 3));
  }
} catch (error) {
  console.warn("Bike comparison could not be restored.", error);
}

try {
  const storedActivities = JSON.parse(localStorage.getItem("tb-activity") || "[]");
  if (Array.isArray(storedActivities)) {
    activities = storedActivities.filter((activity) =>
      activity && typeof activity.id === "string" &&
      ["order", "sell", "verification", "testRide", "enquiry"].includes(activity.type) &&
      typeof activity.title === "string" && typeof activity.details === "string" &&
      typeof activity.status === "string" && typeof activity.createdAt === "string" &&
      Number.isFinite(Date.parse(activity.createdAt))
    ).slice(0, 100);
  }
} catch (error) {
  console.warn("Activity history could not be restored.", error);
  activityRestoreFailed = true;
}

function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("on");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => element.classList.remove("on"), 2800);
}

function recordActivity(type, title, details, status) {
  const activity = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    title: String(title).slice(0, 120),
    details: String(details).slice(0, 240),
    status: String(status).slice(0, 80),
    createdAt: new Date().toISOString()
  };
  const nextActivities = [activity, ...activities].slice(0, 100);
  activities = nextActivities;
  try {
    localStorage.setItem("tb-activity", JSON.stringify(activities));
  } catch (error) {
    console.warn("Activity history could not be saved in this browser.", error);
    return false;
  }
  if ($("#activityList")) renderActivity();
  return true;
}

function activityTypeLabel(type) {
  return ({
    order: "Order request",
    sell: "Sell request",
    verification: "Verification",
    testRide: "Test ride",
    enquiry: "Enquiry"
  })[type] || "Activity";
}

function renderActivity() {
  const list = $("#activityList");
  if (!list) return;
  const visible = activityFilter === "all"
    ? activities
    : activities.filter((activity) => activity.type === activityFilter);
  $("#activityCount").textContent = `${visible.length} ${visible.length === 1 ? "activity" : "activities"}`;
  $$(".activity-tab").forEach((tab) => {
    const active = tab.dataset.activityType === activityFilter;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-pressed", String(active));
  });
  list.innerHTML = visible.length
    ? visible.map((activity) => {
      const date = new Date(activity.createdAt).toLocaleString("en-IN", {
        dateStyle: "medium", timeStyle: "short"
      });
      return `<article class="activity-card">
        <div class="activity-icon" aria-hidden="true">${activity.type === "order" ? "↗" : activity.type === "sell" ? "＋" : activity.type === "verification" ? "✓" : activity.type === "testRide" ? "↻" : "✉"}</div>
        <div class="activity-content"><div class="activity-meta"><span>${activityTypeLabel(activity.type)}</span><time datetime="${escapeHTML(activity.createdAt)}">${escapeHTML(date)}</time></div>
          <h2>${escapeHTML(activity.title)}</h2><p>${escapeHTML(activity.details)}</p>
        </div><span class="activity-status">${escapeHTML(activity.status)}</span>
      </article>`;
    }).join("")
    : `<div class="activity-empty"><span class="activity-empty-icon" aria-hidden="true">⌁</span><h2>No ${activityFilter === "all" ? "activity" : activityTypeLabel(activityFilter).toLowerCase() + " activity"} yet</h2><p>Your order requests, sell submissions and verification checks will appear here.</p><a class="button button-dark" href="bikes.html">Browse bikes <span aria-hidden="true">→</span></a></div>`;
}

function persistCompare() {
  try {
    localStorage.setItem("tb-compare", JSON.stringify([...compared]));
  } catch (error) {
    console.warn("Bike comparison could not be saved in this browser.", error);
    toast("Your comparison list couldn't be saved on this device.");
  }
}

function renderCompare() {
  const tray = $("#compareTray");
  if (!tray) return;
  const bikesToCompare = [...compared]
    .map((id) => bikes.find((bike) => bike.id === id))
    .filter(Boolean);
  tray.hidden = bikesToCompare.length === 0;
  document.body.classList.toggle("has-compare-tray", bikesToCompare.length > 0);
  $("#compareCount").textContent = String(bikesToCompare.length);
  $("#openCompare").disabled = bikesToCompare.length < 2;
  $("#compareSelection").innerHTML = bikesToCompare.map((bike) => (
    `<span class="compare-chip">${escapeHTML(bike.name)}<button type="button" data-remove-compare="${bike.id}" aria-label="Remove ${escapeHTML(bike.name)} from comparison">×</button></span>`
  )).join("");
}

function comparisonValue(bike, key) {
  const values = {
    price: bike.priceLabel || formatINR(bike.price),
    category: bike.isPriceGuide ? "India price guide" : "Demo used listing",
    type: bike.type,
    engine: bike.cc ? `${bike.cc} cc` : "Electric",
    year: bike.isPriceGuide ? "Price reference" : String(bike.year),
    mileage: bike.isPriceGuide ? bike.mileage : `${bike.km.toLocaleString("en-IN")} km`,
    power: bike.isPriceGuide ? bike.power : "Not stated",
    transmission: bike.isPriceGuide ? bike.gearbox : "Not stated",
    owners: bike.isPriceGuide ? "Not applicable" : `${bike.own} ${bike.own === 1 ? "owner" : "owners"}`,
    location: bike.isPriceGuide ? "India" : bike.city
  };
  return values[key] || "Not stated";
}

function showComparison() {
  const selected = [...compared]
    .map((id) => bikes.find((bike) => bike.id === id))
    .filter(Boolean);
  if (selected.length < 2) {
    toast("Choose at least two bikes to compare.");
    return;
  }
  const rows = [
    ["Price", "price"],
    ["Listing type", "category"],
    ["Ride type", "type"],
    ["Engine", "engine"],
    ["Model year", "year"],
    ["Mileage / distance", "mileage"],
    ["Power", "power"],
    ["Transmission", "transmission"],
    ["Previous owners", "owners"],
    ["Location", "location"]
  ];
  $("#compareBody").innerHTML = `<div class="compare-dialog-heading"><div><span class="eyebrow eyebrow-dark">SIDE-BY-SIDE VIEW</span><h2 id="compareTitle">Compare your shortlist</h2><p>Price guides are references; demo listings are not live sale offers.</p></div><button class="icon-button close-button" type="button" data-close-compare aria-label="Close comparison">×</button></div>
    <div class="compare-table-wrap"><table class="compare-table"><caption class="sr-only">Bike comparison details</caption>
      <thead><tr><th scope="col">Bike details</th>${selected.map((bike) => `<th scope="col">${escapeHTML(bike.name)}</th>`).join("")}</tr></thead>
      <tbody>${rows.map(([label, key]) => `<tr><th scope="row">${label}</th>${selected.map((bike) => `<td>${escapeHTML(comparisonValue(bike, key))}</td>`).join("")}</tr>`).join("")}</tbody>
      <tfoot><tr><th scope="row">Next step</th>${selected.map((bike) => `<td><a class="button button-dark compare-action" href="checkout.html?bike=${encodeURIComponent(bike.id)}">Buy now <span aria-hidden="true">→</span></a></td>`).join("")}</tr></tfoot>
    </table></div><p class="compare-disclaimer">Demo only. Verify specifications, availability and current prices with the seller or dealer. No purchase or payment is made here.</p>`;
  $("#compareDialog").showModal();
}

function persistSaved() {
  try {
    localStorage.setItem("tb-saved", JSON.stringify([...saved]));
  } catch (error) {
    console.warn("Saved bikes could not be stored in this browser.", error);
    toast("Your browser couldn't save favourites on this device.");
  }
}

function persistUserBikes() {
  try {
    localStorage.setItem("tb-user-bikes", JSON.stringify(
      bikes.filter((bike) => bike.userListing).map(({ id, name, brand, type, cc, year, km, own, price, city, imageURL }) => ({
        id, name, brand, type, cc, year, km, own, price, city, imageURL
      }))
    ));
  } catch (error) {
    console.warn("User bike listings could not be stored in this browser.", error);
    toast("Your bike is listed for this page, but your browser couldn't save it for later.");
  }
}

function bikeRegistration(bike) {
  return `PB10AB${String(1000 + bike.id * 37).slice(-4)}`;
}

function hasCatalogPhoto(bike) {
  return bike.isPriceGuide || Boolean(suppliedBikePhotos[bike.name.toLowerCase()]);
}

function bikeImageMarkup(bike, width = 720) {
  const safeName = escapeHTML(bike.name);
  const imageClass = hasCatalogPhoto(bike) ? "catalog-photo" : "";
  return `<img class="${imageClass}" src="${imageURL(bike, width)}" alt="${safeName}" loading="lazy" decoding="async" onerror="this.closest('.card-photo, .detail-photo, .checkout-photo').classList.add('image-fallback');this.remove()">`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function setCatalog() {
  const brands = [...new Set(bikes.map((bike) => bike.brand))].sort();
  const searchBrand = $("#searchBrand");
  if (searchBrand) {
    const selectedBrand = searchBrand.value;
    searchBrand.innerHTML = `<option value="">All makes</option>${brands.map((brand) => (
      `<option value="${escapeHTML(brand)}">${escapeHTML(brand)}</option>`
    )).join("")}`;
    if (brands.includes(selectedBrand)) searchBrand.value = selectedBrand;
  }
  const brandFilters = $("#brands");
  if (brandFilters) brandFilters.innerHTML = brands.map((brand) => (
    `<label class="check-option"><input type="checkbox" value="${escapeHTML(brand)}"${state.brands.has(brand) ? " checked" : ""}><span>${escapeHTML(brand)}</span></label>`
  )).join("");
  const bikeSelect = $("#cB");
  if (bikeSelect) {
    const requestedBike = new URLSearchParams(window.location.search).get("bike");
    const previousBike = bikeSelect.value;
    bikeSelect.innerHTML = bikes.map((bike) => (
      `<option value="${bike.id}">${escapeHTML(bike.name)} (${escapeHTML(bike.priceLabel || formatINR(bike.price))})</option>`
    )).join("");
    if (bikes.some((bike) => String(bike.id) === requestedBike)) bikeSelect.value = requestedBike;
    else if (bikes.some((bike) => String(bike.id) === previousBike)) bikeSelect.value = previousBike;
  }
}

function visibleBikes() {
  const matching = bikes.filter((bike) => {
    const searchable = `${bike.name} ${bike.brand} ${bike.city} ${bike.searchable || ""}`.toLowerCase();
    if (state.q && !searchable.includes(state.q)) return false;
    if (state.brands.size && !state.brands.has(bike.brand)) return false;
    if (state.cc) {
      const [min, max] = state.cc.split("-").map(Number);
      if (bike.cc === 0 || bike.cc < min || bike.cc > max) return false;
    }
    if ((!bike.isPriceGuide && bike.year < state.year) || bike.price > state.price) return false;
    if (state.owners && (bike.isPriceGuide || bike.own > 1)) return false;
    if (state.type && bike.type !== state.type) return false;
    if (state.savedOnly && !saved.has(bike.id)) return false;
    return true;
  });
  const sorters = {
    featured: (a, b) => Number(a.type === "Sports") - Number(b.type === "Sports") ||
      (a.isPriceGuide && b.isPriceGuide
        ? a.catalogOrder - b.catalogOrder
        : a.isPriceGuide ? -1 : b.isPriceGuide ? 1 : b.year - a.year),
    new: (a, b) => b.year - a.year || a.km - b.km,
    lo: (a, b) => a.price - b.price,
    hi: (a, b) => b.price - a.price,
    km: (a, b) => a.km - b.km
  };
  return matching.sort(sorters[state.sort]);
}

function cardMarkup(bike, index) {
  const isSaved = saved.has(bike.id);
  const checkoutURL = `checkout.html?bike=${encodeURIComponent(bike.id)}`;
  const badge = bike.isPriceGuide
    ? `<span class="card-badge">PRICE GUIDE</span>`
    : bike.ok
    ? `<span class="card-badge">✓ Sample report</span>`
    : `<span class="card-badge pending">Inspection pending</span>`;
  const specs = bike.isPriceGuide
    ? [
      bike.cc ? `${bike.cc} cc` : "Electric",
      bike.power !== "Not stated" ? bike.power : null,
      bike.gearbox !== "Not stated" ? bike.gearbox : null,
      bike.type === "Sports" ? "Sports" : "Everyday / roadster"
    ].filter(Boolean)
    : [`${bike.cc} cc`, String(bike.year), bike.own === 1 ? "1st owner" : "2nd owner", bike.type];
  const priceNote = bike.isPriceGuide
    ? bike.priceNote
    : "Sample asking price · *20% down, 14% p.a.";
  const catalogPhoto = hasCatalogPhoto(bike);
  const mileageLabel = catalogPhoto ? "" : `<span class="card-mileage">${bike.km.toLocaleString("en-IN")} km</span>`;
  return `<article class="bike-card" data-id="${bike.id}" tabindex="0" aria-label="${escapeHTML(bike.name)}, ${escapeHTML(bike.priceLabel || formatINR(bike.price))}" style="animation-delay:${Math.min(index * 45, 240)}ms">
    <div class="card-photo${catalogPhoto ? " reference-photo" : ""}">${bikeImageMarkup(bike)}${badge}
      ${mileageLabel}
      <button class="heart" type="button" aria-pressed="${isSaved}" aria-label="${isSaved ? "Remove" : "Save"} ${escapeHTML(bike.name)}" data-heart="${bike.id}">${isSaved ? "♥" : "♡"}</button>
    </div>
    <div class="card-body">
      <div class="card-kicker"><span>${escapeHTML(bike.brand)}</span><span>${bike.isPriceGuide ? "INDIA" : escapeHTML(bike.city)}</span></div>
      <h3 class="card-title">${escapeHTML(bike.name)}</h3>
      <div class="card-specs">${specs.map((spec) => `<span class="spec-pill">${escapeHTML(spec)}</span>`).join("")}</div>
      <div class="card-condition"><span>${bike.isPriceGuide ? "Indicative new-bike price" : bike.ok ? `Sample report · ${bike.score}/100` : "Inspection pending"}</span><span>${bike.isPriceGuide ? "Verify with dealer" : `EMI* ${formatINR(monthlyPayment(bike.price, 24))}/mo`}</span></div>
      <div class="card-footer"><span class="card-price">${escapeHTML(bike.priceLabel || formatINR(bike.price))}<small>${escapeHTML(priceNote)}</small></span><button class="card-view" type="button" data-view="${bike.id}" aria-label="View details for ${escapeHTML(bike.name)}">↗</button></div>
      <div class="card-actions"><a class="button button-red card-details" href="${checkoutURL}">Buy now <span aria-hidden="true">→</span></a><button class="button button-outline card-quick-view" type="button" data-view="${bike.id}">Quick view</button><button class="button button-outline card-compare" type="button" data-compare="${bike.id}" aria-pressed="${compared.has(bike.id)}">${compared.has(bike.id) ? "✓ Added to compare" : "⇄ Compare"}</button></div>
    </div>
  </article>`;
}

function updateFilterCount() {
  const count = state.brands.size + Number(Boolean(state.cc)) + Number(Boolean(state.year)) +
    Number(state.price < 3500000) + Number(Boolean(state.owners));
  const badge = $("#filterCount");
  badge.hidden = count === 0;
  badge.textContent = String(count);
  $("#ccValue").textContent = $("#cc").selectedOptions[0].text.replace(" cc", "");
  $("#yrValue").textContent = state.year ? String(state.year) + "+" : "Any";
}

function render() {
  const results = visibleBikes();
  $("#grid").innerHTML = results.length
    ? results.map(cardMarkup).join("")
    : `<div class="empty-state"><h3>No rides found.</h3><p>Try adjusting your filters or clearing your search.</p><button class="button button-dark" id="clearEmpty" type="button">Clear filters</button></div>`;
  $("#count").textContent = `${results.length} ${results.length === 1 ? "ride" : "rides"}`;
  $("#pv").textContent = formatINR(state.price);
  $("#sv").textContent = String(saved.size);
  if ($("#headerSavedCount")) $("#headerSavedCount").textContent = String(saved.size);
  updateFilterCount();
  renderCompare();
}

function validate(rules) {
  let valid = true;
  for (const [selector, check, message] of rules) {
    const input = $(selector);
    const error = input.closest(".field").querySelector(".err");
    const passes = check(input.value);
    error.textContent = passes ? "" : message;
    input.setAttribute("aria-invalid", String(!passes));
    if (!passes) valid = false;
  }
  return valid;
}

function monthlyPayment(price, months, downPaymentPercent = 20, annualRate = 14) {
  const principal = price * (1 - downPaymentPercent / 100);
  const monthlyRate = annualRate / 1200;
  if (monthlyRate === 0) return Math.round(principal / months);
  return Math.round(principal * monthlyRate * Math.pow(1 + monthlyRate, months) /
    (Math.pow(1 + monthlyRate, months) - 1));
}

function ownershipHistoryMarkup(bike) {
  const insurance = bike.ok ? "Sample: valid to 18 Oct 2027" : "Pending review";
  const noc = bike.ok ? "Sample: clear" : "Pending review";
  return `<section class="ownership-card ownership-report" aria-label="Sample ownership history">
    <div class="ownership-card-heading"><div><span class="eyebrow eyebrow-dark">OWNERSHIP HISTORY</span><h3>Document snapshot</h3></div><span class="sample-tag">SAMPLE</span></div>
    <div class="ownership-facts">
      <div><span>Number of owners</span><strong>${bike.own} ${bike.own === 1 ? "owner" : "owners"}</strong></div>
      <div><span>Insurance validity</span><strong>${insurance}</strong></div>
      <div><span>RTO NOC status</span><strong>${noc}</strong></div>
    </div>
    <p class="ownership-disclaimer">Illustrative listing data only. No official ownership, insurance or RTO records are accessed.</p>
  </section>`;
}

function updateLoanCalculator() {
  const price = Number($("#loanPrice").value);
  const downPaymentPercent = Number($("#loanDownPayment").value);
  const annualRate = Number($("#loanInterest").value);
  const months = Number($("#loanTenure").value);
  const downPayment = price * downPaymentPercent / 100;
  const principal = price - downPayment;
  const emi = monthlyPayment(price, months, downPaymentPercent, annualRate);

  $("#loanPriceValue").textContent = formatINR(price);
  $("#loanDownPaymentValue").textContent = `${downPaymentPercent}% · ${formatINR(downPayment)}`;
  $("#loanInterestValue").textContent = `${annualRate}% p.a.`;
  $("#loanTenureValue").textContent = `${months} months`;
  $("#loanEmi").textContent = formatINR(emi);
  $("#loanAmount").textContent = formatINR(principal);
  $("#loanTotalInterest").textContent = formatINR(emi * months - principal);
}

function demoInspectionReport(price) {
  const score = price < 100000 ? 82
    : price < 250000 ? 85
      : price < 500000 ? 88
        : price < 1000000 ? 91
          : 94;
  return [
    ["Engine & gearbox", `${score}/100`],
    ["Frame & suspension", `${score + 2}/100`],
    ["Brakes & tyres", `${score - 3}/100`],
    ["Electricals", `${score + 1}/100`],
    ["Documents & history", "Demo only"]
  ];
}

const inspectionChecklist = [
  ["Engine & transmission", [
    "Cold start and idle", "Engine oil level and leaks", "Exhaust smoke and noise",
    "Clutch engagement", "Gear shift operation", "Throttle response",
    "Engine mounting", "Cooling system or airflow", "Chain or belt drive condition",
    "Abnormal vibration"
  ]],
  ["Chassis & suspension", [
    "Frame alignment and visible damage", "Front fork leaks", "Rear shock operation",
    "Swingarm condition", "Steering head bearing", "Wheel alignment",
    "Wheel rim condition", "Side and centre stand", "Handlebar alignment",
    "Footrest and mounting condition"
  ]],
  ["Brakes & tyres", [
    "Front brake lever operation", "Rear brake pedal operation", "Front disc or drum condition",
    "Rear disc or drum condition", "Brake pad or shoe wear", "Brake fluid level",
    "Brake hoses and lines", "Front tyre tread", "Rear tyre tread",
    "Tyre age and sidewall condition"
  ]],
  ["Electricals & controls", [
    "Battery voltage and terminals", "Starter motor", "Charging system",
    "Headlamp high and low beam", "Tail and brake lamp", "Indicators and hazard lights",
    "Horn operation", "Instrument cluster", "Switchgear and controls",
    "Wiring and connectors"
  ]],
  ["Documents & road readiness", [
    "Registration certificate details", "Chassis number visibility", "Engine number visibility",
    "Insurance document date", "Pollution certificate date", "RTO NOC and loan status",
    "Pending challan lookup", "Odometer consistency review", "Owner ID match",
    "Test ride and roadworthiness"
  ]]
];

function inspectionScorecardMarkup(bike) {
  const status = bike.ok ? "Sample pass" : "Pending";
  return `<details class="scorecard-details">
    <summary><span>50-point inspection scorecard</span><strong>5 areas · 50 checks</strong></summary>
    <p class="inspection-demo-note">Illustrative checklist only. These checks were not physically performed and the document checks are not connected to official records.</p>
    <div class="scorecard-groups">${inspectionChecklist.map(([category, points]) => (
      `<section><h4>${escapeHTML(category)}<span>10 POINTS</span></h4><ol>${points.map((point) => (
        `<li><span>${escapeHTML(point)}</span><strong>${status}</strong></li>`
      )).join("")}</ol></section>`
    )).join("")}</div>
  </details>`;
}

function showBike(bikeId) {
  const bike = bikes.find((item) => item.id === bikeId);
  if (!bike) return;
  const dialog = $("#dlg");
  if (bike.isPriceGuide) {
    const inspection = demoInspectionReport(bike.price);
    const engine = bike.cc ? `${bike.cc} cc` : "Electric";
    const facts = [
      ["India price guide", bike.priceLabel],
      ["Engine", engine],
      ["Power", bike.power],
      ["Torque", bike.torque],
      ["Mileage", bike.mileage],
      ["Transmission", bike.gearbox],
      ["Ride type", bike.type === "Sports" ? "Sports" : "Everyday / roadster"]
    ].filter(([, value]) => value && value !== "Not stated");
    $("#dBody").innerHTML = `<div class="dialog-top">
        <div><span class="eyebrow eyebrow-dark"><span class="eyebrow-dot"></span> INDIA NEW-BIKE PRICE GUIDE</span>
        <h2 id="dTitle">${escapeHTML(bike.name)}</h2><p>${escapeHTML(bike.brand)} · ${escapeHTML(bike.type)}</p></div>
        <button class="icon-button close-button" type="button" data-close aria-label="Close dialog">×</button>
      </div>
      <div class="detail-photo">${bikeImageMarkup(bike, 1100)}</div>
      <div class="detail-specs">${facts.map(([label, value]) => (
        `<div>${escapeHTML(label)}<strong>${escapeHTML(value)}</strong></div>`
      )).join("")}</div>
      <h3 class="report-heading">The inspection report</h3>
      <p class="inspection-demo-note">Demo report only. Sample scores are based on the displayed price band; this bike has not been physically inspected.</p>
      <ul class="check">${inspection.map(([label, value]) => (
        `<li><span>${escapeHTML(label)}</span><span>${escapeHTML(value)}</span></li>`
      )).join("")}</ul>
      <h3 class="report-heading">Bike highlights</h3>
      <ul class="check">${bike.highlights.map((highlight) => `<li><span>${escapeHTML(highlight)}</span></li>`).join("")}</ul>
      <a class="button button-red activity-order-link" href="checkout.html?bike=${encodeURIComponent(bike.id)}">Buy now <span aria-hidden="true">→</span></a>
      <p class="auth-demo-note">${escapeHTML(bike.priceNote)} Prices and specifications are reference values; verify them with the manufacturer or dealer before purchase. This is a demo catalogue, not a seller listing.</p>`;
    dialog.showModal();
    return;
  }
  const score = bike.score;
  const checks = [
    ["Engine & gearbox", score],
    ["Frame & suspension", score + 2],
    ["Brakes & tyres", score - 3],
    ["Electricals", score + 1],
    ["RC, insurance & challan check", "Clear"]
  ];
  $("#dBody").innerHTML = `<div class="dialog-top">
      <div><span class="eyebrow eyebrow-dark"><span class="eyebrow-dot"></span> ${bike.ok ? `SAMPLE REPORT · ${score}/100` : "INSPECTION PENDING"}</span>
      <h2 id="dTitle">${escapeHTML(bike.name)}</h2><p>${escapeHTML(bike.city)} · ${escapeHTML(bike.type)} · ${bikeRegistration(bike)}</p></div>
      <button class="icon-button close-button" type="button" data-close aria-label="Close dialog">×</button>
    </div>
    <div class="detail-photo">${bikeImageMarkup(bike, 1100)}</div>
    <div class="detail-specs">
      <div>Asking price<strong>${formatINR(bike.price)}</strong></div><div>Engine<strong>${bike.cc} cc</strong></div>
      <div>Model year<strong>${bike.year}</strong></div><div>Odometer<strong>${bike.km.toLocaleString("en-IN")} km</strong></div>
      <div>Previous owners<strong>${bike.own}</strong></div><div>Fuel efficiency<strong>~${bike.mil} km/l</strong></div>
      <div>Location<strong>${escapeHTML(bike.city)}</strong></div><div>Condition<strong>${bike.ok ? "Inspected" : "Pending"}</strong></div>
    </div>
    ${ownershipHistoryMarkup(bike)}
    <h3 class="report-heading">The inspection report</h3>
    <p class="inspection-demo-note">Sample report only. This bike has not been physically inspected and no official vehicle records were checked.</p>
    <ul class="check">${checks.map(([name, value]) => `<li><span>${name}</span><span>${typeof value === "number" ? `${Math.min(100, value)}/100` : "Demo only"}</span></li>`).join("")}</ul>
    ${inspectionScorecardMarkup(bike)}
    <div class="emi-box detail-emi">
    <div class="emi-heading"><div><span class="eyebrow eyebrow-dark">USED BIKE LOAN ESTIMATE</span><strong>Monthly EMI</strong></div><output id="em" aria-live="polite">${formatINR(monthlyPayment(bike.price, 24))}</output></div>
    <div class="emi-control"><label for="dp">Down payment <output id="dpVal">20% · ${formatINR(bike.price * .2)}</output></label><input type="range" id="dp" min="10" max="60" step="5" value="20"></div>
    <div class="emi-control"><label for="rate">Interest rate <output id="rateVal">14% p.a.</output></label><input type="range" id="rate" min="8" max="24" step="0.5" value="14"></div>
    <div class="emi-control"><label for="mo">Loan tenure <output id="mt">24 months</output></label><input type="range" id="mo" min="12" max="60" step="6" value="24"></div>
    <p class="emi-caption">Illustrative estimate only; actual rates, fees and eligibility depend on your lender.</p>
    </div>
    <h3 class="ride-heading">Fancy a closer look?</h3>
    <form class="ride-form" id="rideForm" novalidate><div class="field"><label for="rN">Your name</label><input id="rN" autocomplete="name" placeholder="Your name"><span class="err"></span></div>
    <div class="field"><label for="rP">Mobile number</label><input id="rP" inputmode="numeric" maxlength="10" autocomplete="tel" placeholder="10-digit number"><span class="err"></span></div>
    <button class="button button-red" type="submit">Book a test ride →</button></form>
    <a class="button button-red activity-order-link" href="checkout.html?bike=${encodeURIComponent(bike.id)}">Buy now <span aria-hidden="true">→</span></a>
    <p class="auth-demo-note">*Indicative estimate: 20% down, 14% p.a. · Demo listing and booking only; no seller is contacted.</p>`;
  dialog.showModal();
  const updateDetailEmi = () => {
    const downPaymentPercent = Number($("#dp").value);
    const annualRate = Number($("#rate").value);
    const months = Number($("#mo").value);
    $("#dpVal").textContent = `${downPaymentPercent}% · ${formatINR(bike.price * downPaymentPercent / 100)}`;
    $("#rateVal").textContent = `${annualRate}% p.a.`;
    $("#mt").textContent = `${months} months`;
    $("#em").textContent = formatINR(monthlyPayment(bike.price, months, downPaymentPercent, annualRate));
  };
  ["#dp", "#rate", "#mo"].forEach((selector) => $(selector).addEventListener("input", updateDetailEmi));
  $("#rideForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (validate([
      ["#rN", (value) => value.trim().length >= 2, "Enter your name."],
      ["#rP", (value) => /^[6-9]\d{9}$/.test(value), "Enter a valid 10-digit mobile number."]
    ])) {
      dialog.close();
      const savedToHistory = recordActivity(
        "testRide", bike.name, "Test ride request submitted. No seller was contacted.",
        "Request received"
      );
      toast(savedToHistory
        ? "Test ride request saved to My activity."
        : "Request noted, but this browser couldn't save it to My activity.");
    }
  });
}

function resetFilters() {
  Object.assign(state, { q: "", brands: new Set(), cc: "", year: 0, price: 3500000, owners: 0, type: "", savedOnly: false });
  $("#q").value = "";
  $("#searchBrand").value = "";
  $("#searchType").value = "";
  $("#cc").value = "";
  $("#yr").value = "0";
  $("#price").value = "3500000";
  $('[name="own"][value="0"]').checked = true;
  $$("#brands input").forEach((input) => { input.checked = false; });
  $$(".chip[data-type]").forEach((chip) => {
    const active = chip.dataset.type === "";
    chip.classList.toggle("active", active);
    chip.setAttribute("aria-pressed", String(active));
  });
  $$("[data-shop-type]").forEach((category) => {
    category.classList.toggle("active", category.dataset.shopType === "");
  });
  $("#savedOnly").setAttribute("aria-pressed", "false");
  render();
}

function setAuthMode(createAccount) {
  registerMode = createAccount;
  $("#aT").textContent = createAccount ? "Create an account" : "Welcome back.";
  $("#aS").innerHTML = `${createAccount ? "Create account" : "Log in"} <span aria-hidden="true">→</span>`;
  $("#aNw").hidden = !createAccount;
  $("#aQ").textContent = createAccount ? "Already riding with us?" : "New to MotoVerify?";
  $("#aTg").textContent = createAccount ? "Log in" : "Create an account";
  $("#aP").autocomplete = createAccount ? "new-password" : "current-password";
}

function initializeCheckout() {
  const summary = $("#checkoutSummary");
  if (!summary) return;
  const bikeId = new URLSearchParams(window.location.search).get("bike");
  const bike = bikes.find((item) => String(item.id) === bikeId);
  const paymentForm = $("#checkoutForm");
  if (!bike) {
    summary.innerHTML = `<div class="checkout-empty"><h2>Bike not found</h2><p>Choose a bike from the demo catalogue to continue.</p><a class="button button-dark" href="bikes.html">Browse bikes <span aria-hidden="true">→</span></a></div>`;
    paymentForm.hidden = true;
    return;
  }

  const price = bike.priceLabel || formatINR(bike.price);
  summary.innerHTML = `<div class="checkout-bike-photo">${bikeImageMarkup(bike, 900)}</div>
    <div class="checkout-bike-details"><span class="eyebrow eyebrow-dark">${bike.isPriceGuide ? "INDIA PRICE GUIDE · DEMO" : "USED BIKE LISTING · DEMO"}</span>
      <h2>${escapeHTML(bike.name)}</h2><p>${escapeHTML(bike.brand)} · ${escapeHTML(bike.isPriceGuide ? bike.type : bike.city)}</p>
      <div class="checkout-price-row"><span>${bike.isPriceGuide ? "Reference price" : "Demo asking price"}</span><strong>${escapeHTML(price)}</strong></div>
      <p class="checkout-listing-note">${bike.isPriceGuide
        ? "This is an indicative model price, not a seller offer or reserved vehicle."
        : "This is a sample listing. No seller is contacted and no vehicle is reserved."}</p>
    </div>`;

  const paymentLabels = {
    upi: "UPI",
    card: "Credit / debit card",
    razorpay: "Razorpay Checkout"
  };
  let processing = false;
  paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (processing) return;
    const formData = new FormData(paymentForm);
    const method = paymentLabels[formData.get("paymentMethod")];
    if (!method) return;
    processing = true;
    const submit = $("#checkoutSubmit");
    const status = $("#checkoutStatus");
    submit.disabled = true;
    $$('input[name="paymentMethod"]', paymentForm).forEach((input) => { input.disabled = true; });
    status.className = "checkout-status checkout-processing";
    status.textContent = `Connecting to the ${method} demo gateway…`;
    window.setTimeout(() => {
      status.textContent = "Verifying a simulated payment authorization…";
      window.setTimeout(() => {
        const savedToHistory = recordActivity(
          "order", bike.name,
          `${method} checkout simulation · no payment captured and no seller contacted.`,
          "Demo payment only"
        );
        status.className = "checkout-status checkout-success";
        status.innerHTML = `<span class="checkout-success-mark" aria-hidden="true">✓</span><div><h2>Demo checkout complete</h2>
          <p>Payment method: ${escapeHTML(method)} (simulation only).</p>
          <p>No money moved, card/UPI details were not requested, and this bike was not reserved.</p>
          <small>${savedToHistory ? "Demo receipt saved in My activity." : "Demo flow complete; activity could not be saved in this browser."}</small>
          <a class="button button-dark" href="my-activity.html">View my activity <span aria-hidden="true">→</span></a></div>`;
        toast(savedToHistory
          ? "Demo checkout saved to My activity; no payment was taken."
          : "Demo checkout complete; no payment was taken.");
      }, 700);
    }, 650);
  });
}

function registerEvents() {
  initializeCheckout();
  if ($("#loanPrice")) {
    ["#loanPrice", "#loanDownPayment", "#loanInterest", "#loanTenure"].forEach((selector) => {
      $(selector).addEventListener("input", updateLoanCalculator);
    });
    updateLoanCalculator();
  }

  if ($("#activityList")) {
    renderActivity();
    $$(".activity-tab").forEach((tab) => tab.addEventListener("click", () => {
      activityFilter = tab.dataset.activityType;
      renderActivity();
    }));
    $("#clearActivity").addEventListener("click", () => {
      if (!activities.length || !window.confirm("Clear all activity saved in this browser?")) return;
      try {
        localStorage.removeItem("tb-activity");
        activities = [];
        renderActivity();
        toast("My activity history cleared from this browser.");
      } catch (error) {
        console.warn("Activity history could not be cleared.", error);
        toast("This browser couldn't clear your activity history.");
      }
    });
    if (activityRestoreFailed) toast("Saved activity couldn't be read from this browser.");
  }

  const searchForm = $("#heroSearch");
  if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.q = $("#q").value.trim().toLowerCase();
      state.brands = new Set($("#searchBrand").value ? [$("#searchBrand").value] : []);
      state.type = $("#searchType").value;
      $$("#brands input").forEach((input) => { input.checked = state.brands.has(input.value); });
      $$(".chip[data-type]").forEach((chip) => {
        const active = chip.dataset.type === state.type;
        chip.classList.toggle("active", active);
        chip.setAttribute("aria-pressed", String(active));
      });
      $$("[data-shop-type]").forEach((category) => {
        category.classList.toggle("active", category.dataset.shopType === state.type);
      });
      render();
      $("#inventory").scrollIntoView({ behavior: "smooth" });
    });
    $("#q").addEventListener("input", (event) => {
      state.q = event.currentTarget.value.trim().toLowerCase();
      render();
    });
    $("#searchBrand").addEventListener("change", (event) => {
      state.brands = new Set(event.currentTarget.value ? [event.currentTarget.value] : []);
      $$("#brands input").forEach((input) => { input.checked = state.brands.has(input.value); });
      render();
    });
    $("#searchType").addEventListener("change", (event) => {
      state.type = event.currentTarget.value;
      $$(".chip[data-type]").forEach((chip) => {
        const active = chip.dataset.type === state.type;
        chip.classList.toggle("active", active);
        chip.setAttribute("aria-pressed", String(active));
      });
      $$("[data-shop-type]").forEach((category) => {
        category.classList.toggle("active", category.dataset.shopType === state.type);
      });
      render();
    });
  }
  const brandFilters = $("#brands");
  if (brandFilters) {
    brandFilters.addEventListener("change", (event) => {
      if (!event.target.matches("input")) return;
      event.target.checked ? state.brands.add(event.target.value) : state.brands.delete(event.target.value);
      if ($("#searchBrand")) $("#searchBrand").value = state.brands.size === 1 ? [...state.brands][0] : "";
      render();
    });
    $("#cc").addEventListener("change", (event) => { state.cc = event.currentTarget.value; render(); });
    $("#yr").addEventListener("change", (event) => { state.year = Number(event.currentTarget.value); render(); });
    $("#price").addEventListener("input", (event) => { state.price = Number(event.currentTarget.value); render(); });
    $$('[name="own"]').forEach((radio) => radio.addEventListener("change", (event) => {
      state.owners = Number(event.currentTarget.value);
      render();
    }));
    $("#sort").addEventListener("change", (event) => { state.sort = event.currentTarget.value; render(); });
    $$(".chip[data-type]").forEach((chip) => chip.addEventListener("click", () => {
      state.type = chip.dataset.type;
      if ($("#searchType")) $("#searchType").value = state.type;
      $$(".chip[data-type]").forEach((item) => {
        const active = item === chip;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      $$("[data-shop-type]").forEach((category) => {
        category.classList.toggle("active", category.dataset.shopType === state.type);
      });
      render();
    }));
    $("#savedOnly").addEventListener("click", (event) => {
      state.savedOnly = !state.savedOnly;
      event.currentTarget.setAttribute("aria-pressed", String(state.savedOnly));
      render();
    });
    $("#reset").addEventListener("click", resetFilters);
    $("#mf").addEventListener("click", (event) => {
      const open = $("#filters").classList.toggle("open");
      event.currentTarget.setAttribute("aria-expanded", String(open));
    });
    $("#grid").addEventListener("click", (event) => {
      const heart = event.target.closest("[data-heart]");
      if (heart) {
        const bikeId = Number(heart.dataset.heart);
        saved.has(bikeId) ? saved.delete(bikeId) : saved.add(bikeId);
        persistSaved();
        render();
        return;
      }
      const compareButton = event.target.closest("[data-compare]");
      if (compareButton) {
        const bikeId = Number(compareButton.dataset.compare);
        if (compared.has(bikeId)) {
          compared.delete(bikeId);
        } else if (compared.size >= 3) {
          toast("Compare up to three bikes at a time. Remove one to add another.");
          return;
        } else {
          compared.add(bikeId);
        }
        persistCompare();
        render();
        return;
      }
      if (event.target.closest("#clearEmpty")) {
        resetFilters();
        return;
      }
      const action = event.target.closest("[data-view]");
      const card = event.target.closest(".bike-card");
      if (event.target.closest(".card-details")) return;
      if (action || card) showBike(Number(action ? action.dataset.view : card.dataset.id));
    });
    $("#compareTray").addEventListener("click", (event) => {
      const removeButton = event.target.closest("[data-remove-compare]");
      if (removeButton) {
        compared.delete(Number(removeButton.dataset.removeCompare));
        persistCompare();
        render();
      }
    });
    $("#openCompare").addEventListener("click", showComparison);
    $("#clearCompare").addEventListener("click", () => {
      compared.clear();
      persistCompare();
      render();
    });
    $("#compareDialog").addEventListener("click", (event) => {
      if (event.target === event.currentTarget || event.target.closest("[data-close-compare]")) {
        $("#compareDialog").close();
      }
    });
    $("#grid").addEventListener("keydown", (event) => {
      if ((event.key === "Enter" || event.key === " ") && event.target.matches(".bike-card")) {
        event.preventDefault();
        showBike(Number(event.target.dataset.id));
      }
    });
    $$(".view-button").forEach((button, index) => button.addEventListener("click", () => {
      $$(".view-button").forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      $("#grid").classList.toggle("list-view", index === 1);
    }));
    $("#dlg").addEventListener("click", (event) => {
      if (event.target === event.currentTarget || event.target.closest("[data-close]")) $("#dlg").close();
    });
    $$("[data-shop-type]").forEach((category) => category.addEventListener("click", () => {
      const target = $(`.chip[data-type="${category.dataset.shopType}"]`);
      if (target) target.click();
      $$(".shop-category[data-shop-type]").forEach((item) => item.classList.toggle("active", item === category));
      $("#inventory").scrollIntoView({ behavior: "smooth", block: "start" });
    }));
    if ($("#headerSaved")) $("#headerSaved").addEventListener("click", () => {
      $("#savedOnly").click();
      $("#inventory").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const sellForm = $("#sellForm");
  if (sellForm) sellForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const currentYear = new Date().getFullYear();
    if (!validate([
      ["#sName", (value) => value.trim().length >= 2, "Enter your name."],
      ["#sPhone", (value) => /^[6-9]\d{9}$/.test(value), "Enter a valid 10-digit mobile number."],
      ["#sModel", (value) => value.trim().length >= 3, "Enter the bike make and model."],
      ["#sYear", (value) => /^\d{4}$/.test(value) && Number(value) >= 2005 && Number(value) <= currentYear, `Enter a year between 2005 and ${currentYear}.`],
      ["#sAsk", (value) => /^\d{4,8}$/.test(value.replace(/[₹,\s]/g, "")) && Number(value.replace(/[₹,\s]/g, "")) >= 5000, "Enter a price of at least ₹5,000."]
    ])) return;
    const model = $("#sModel").value.trim();
    const firstWord = model.split(/\s+/)[0];
    const photoURL = $("#sImg").value.trim();
    const isScooter = /activa|jupiter|access|scooty|pep|dio|ntorq|fascino/i.test(model);
    const newBike = {
      id: Date.now(), name: model, brand: firstWord, type: isScooter ? "Scooter" : "Motorcycle",
      cc: 125, year: Number($("#sYear").value), km: 0, own: 1,
      price: Number($("#sAsk").value.replace(/[₹,\s]/g, "")), city: "Your city",
      color: "#5b6778", score: 0, mil: 0, ok: false,
      imageId: "photo-1558981806-ec527fa84c39", userListing: true
    };
    if (photoURL) {
      try {
        const url = new URL(photoURL, window.location.href);
        if (url.protocol === "https:" || url.protocol === "http:") newBike.imageURL = url.href;
      } catch (error) {
        $("#sImg").setAttribute("aria-invalid", "true");
        $("#sImg").closest(".field").querySelector(".err").textContent = "Enter a valid http(s) photo URL.";
        return;
      }
    }
    newBike.ok = false;
    bikes.unshift(newBike);
    persistUserBikes();
    setCatalog();
    if ($("#sCount")) $("#sCount").textContent = String(bikes.length);
    event.currentTarget.reset();
    if ($("#grid")) render();
    const savedToHistory = recordActivity(
      "sell", model, `${newBike.year} model · Asking ${formatINR(newBike.price)}`,
      "Inspection pending"
    );
    toast(savedToHistory
      ? "Sell request saved to My activity; inspection is pending."
      : "Sell request received, but this browser couldn't save it to My activity.");
  });

  const verificationForm = $("#vForm");
  if (verificationForm) verificationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = $("#vReg").value.replace(/\s/g, "").toUpperCase();
    const output = $("#vOut");
    if (!/^[A-Z]{2}\d{2}[A-Z]{1,3}\d{4}$/.test(value)) {
      output.innerHTML = `<p class="err">Enter a registration number like PB10AB1037.</p>`;
      return;
    }
    const bike = bikes.find((item) => bikeRegistration(item) === value);
    if (!bike) {
      output.innerHTML = `<p class="verification-placeholder">No demo listing found for ${escapeHTML(value)}.</p>`;
      const savedToHistory = recordActivity(
        "verification", "Registration check", `${value} · No matching demo listing.`,
        "No demo match"
      );
      if (!savedToHistory) toast("Check complete, but this browser couldn't save it to My activity.");
      return;
    }
    const items = bike.ok
      ? ["RC matches seller", "Insurance valid", "No pending challan", "No loan on record", "Odometer reading checked"]
      : ["Awaiting RC upload", "Insurance not checked", "Challan check pending"];
    output.innerHTML = `<h3>${escapeHTML(bike.name)} · ${escapeHTML(value)}</h3>
      <span class="badge pending">${bike.ok ? "Demo sample report" : "Verification pending"}</span>
      <p class="inspection-demo-note">This is an illustrative result only. It does not confirm the vehicle, seller or official records.</p>
      ${ownershipHistoryMarkup(bike)}
      <ul class="check">${items.map((item) => `<li><span>${item}</span><span>${bike.ok ? "Sample" : "Pending"}</span></li>`).join("")}</ul>`;
    const savedToHistory = recordActivity(
      "verification", bike.name, `${value} · Demo status: ${bike.ok ? "sample report shown" : "verification pending"}.`,
      bike.ok ? "Sample report shown" : "Demo check pending"
    );
    if (!savedToHistory) toast("Check complete, but this browser couldn't save it to My activity.");
  });

  const contactForm = $("#cForm");
  if (contactForm) {
    const requestedOrder = new URLSearchParams(window.location.search).get("intent") === "order";
    const updateContactIntent = () => {
      const bike = bikes.find((item) => String(item.id) === $("#cB").value);
      const isOrder = requestedOrder && bike && !bike.isPriceGuide;
      $("#cFormTitle").textContent = isOrder ? "Place an order request" : "What’s on your mind?";
      $("#cSubmit").innerHTML = isOrder
        ? "Submit order request <span aria-hidden=\"true\">→</span>"
        : "Send an enquiry <span aria-hidden=\"true\">→</span>";
      $("#cFormNote").textContent = isOrder
        ? "Demo only. No payment is taken and no seller is contacted."
        : "Demo only. Your enquiry is not sent to a seller.";
      contactForm.dataset.requestType = isOrder ? "order" : "enquiry";
    };
    updateContactIntent();
    $("#cB").addEventListener("change", updateContactIntent);
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!validate([
        ["#cN", (value) => value.trim().length >= 2, "Enter your name."],
        ["#cP", (value) => /^[6-9]\d{9}$/.test(value), "Enter a valid 10-digit mobile number."],
        ["#cM", (value) => value.trim().length >= 5, "Write a short message."]
      ])) return;
      const bike = bikes.find((item) => String(item.id) === $("#cB").value);
      const requestType = contactForm.dataset.requestType;
      const details = requestType === "order"
        ? `${bike.name} · ${bike.priceLabel || formatINR(bike.price)} · Request only; no payment taken.`
        : `${bike ? `Regarding ${bike.name} · ` : ""}${$("#cM").value.trim()}`;
      const savedToHistory = recordActivity(
        requestType, bike ? bike.name : "General enquiry", details,
        requestType === "order" ? "Request received" : "Enquiry saved"
      );
      event.currentTarget.reset();
      updateContactIntent();
      toast(savedToHistory
        ? requestType === "order"
          ? "Order request saved to My activity. No payment was taken."
          : "Enquiry saved to My activity. It was not sent to a seller."
        : "Request received, but this browser couldn't save it to My activity.");
    });
  }

  const toggleLogin = () => {
    if (user) {
      user = "";
      if ($("#loginBtn")) $("#loginBtn").textContent = "Log in";
      if ($("#mobileLogin")) $("#mobileLogin").textContent = "Log in";
      toast("You have logged out of this demo.");
      return;
    }
    setAuthMode(false);
    $("#auth").showModal();
  };
  if ($("#loginBtn")) $("#loginBtn").addEventListener("click", toggleLogin);
  if ($("#mobileLogin")) $("#mobileLogin").addEventListener("click", () => {
    toggleLogin();
    $("#menuToggle").setAttribute("aria-expanded", "false");
    $(".main-nav").classList.remove("open");
  });
  if ($("#aX")) $("#aX").addEventListener("click", () => $("#auth").close());
  if ($("#aTg")) $("#aTg").addEventListener("click", () => setAuthMode(!registerMode));
  if ($("#auth")) $("#auth").addEventListener("click", (event) => {
    if (event.target === event.currentTarget) $("#auth").close();
  });
  const authForm = $("#aForm");
  if (authForm) authForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const rules = [
      ["#aE", (value) => /^\S+@\S+\.\S+$/.test(value), "Enter a valid email address."],
      ["#aP", (value) => value.length >= 6, "Use at least 6 characters."]
    ];
    if (registerMode) rules.unshift(["#aN", (value) => value.trim().length >= 2, "Enter your name."]);
    if (!validate(rules)) return;
    user = registerMode ? $("#aN").value.trim() : $("#aE").value.split("@")[0];
    if ($("#loginBtn")) $("#loginBtn").textContent = `Hi, ${user.split(" ")[0]}`;
    if ($("#mobileLogin")) $("#mobileLogin").textContent = `Hi, ${user.split(" ")[0]}`;
    event.currentTarget.reset();
    $("#auth").close();
    toast(`Welcome, ${user.split(" ")[0]}. This is a demo account.`);
  });

  if ($("#theme")) $("#theme").addEventListener("click", () => {
    const root = document.documentElement;
    const dark = root.dataset.theme !== "dark";
    root.dataset.theme = dark ? "dark" : "light";
    try {
      localStorage.setItem("tb-theme", root.dataset.theme);
    } catch (error) {
      console.warn("Theme preference could not be saved.", error);
    }
  });
  if ($("#menuToggle")) $("#menuToggle").addEventListener("click", (event) => {
    const expanded = event.currentTarget.getAttribute("aria-expanded") !== "true";
    event.currentTarget.setAttribute("aria-expanded", String(expanded));
    $(".main-nav").classList.toggle("open", expanded);
  });
  $$(".main-nav a").forEach((link) => link.addEventListener("click", () => {
    $("#menuToggle").setAttribute("aria-expanded", "false");
    $(".main-nav").classList.remove("open");
  }));
}

function initialize() {
  if ($("#brands") || $("#cB")) setCatalog();
  registerEvents();
  if ($("#sCount")) $("#sCount").textContent = String(bikes.length);
  if ($("#yearNow")) $("#yearNow").textContent = String(new Date().getFullYear());
  try {
    const theme = localStorage.getItem("tb-theme");
    if (theme === "dark" || theme === "light") document.documentElement.dataset.theme = theme;
  } catch (error) {
    console.warn("Saved theme preference could not be read.", error);
  }
  if ($("#grid")) render();
  if ($("#compareTray")) renderCompare();
  if ($("#activityList")) renderActivity();
}

initialize();
