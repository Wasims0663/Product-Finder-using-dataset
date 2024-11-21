const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

// Static datasets for product
const products = {
  laptops: [
    { name: "HP Pavilion 15", price: 55000, store: "Amazon", url: "https://amazon.com/hp-pavilion-15" },
    { name: "Dell Inspiron 14", price: 58000, store: "Flipkart", url: "https://flipkart.com/dell-inspiron-14" },
    { name: "Lenovo Ideapad S340", price: 51000, store: "Myntra", url: "https://myntra.com/lenovo-ideapad-s340" },
    { name: "Acer Aspire 7", price: 49000, store: "Amazon", url: "https://amazon.com/acer-aspire-7" },
    { name: "Asus Vivobook 15", price: 52000, store: "Flipkart", url: "https://flipkart.com/asus-vivobook-15" },
    { name: "MacBook Air M1", price: 92000, store: "Apple Store", url: "https://apple.com/macbook-air-m1" },
    { name: "Microsoft Surface Laptop Go", price: 75000, store: "Microsoft Store", url: "https://microsoft.com/surface-laptop-go" },
    { name: "HP Envy x360", price: 88000, store: "Amazon", url: "https://amazon.com/hp-envy-x360" },
    { name: "Dell XPS 13", price: 95000, store: "Flipkart", url: "https://flipkart.com/dell-xps-13" },
    { name: "Lenovo ThinkPad X1", price: 98000, store: "Myntra", url: "https://myntra.com/lenovo-thinkpad-x1" },
    { name: "Acer Predator Helios 300", price: 105000, store: "Amazon", url: "https://amazon.com/acer-predator-helios-300" },
    { name: "Asus ROG Zephyrus G14", price: 120000, store: "Flipkart", url: "https://flipkart.com/asus-rog-zephyrus-g14" },
    { name: "MacBook Pro 14", price: 220000, store: "Apple Store", url: "https://apple.com/macbook-pro-14" },
    { name: "MSI GF63 Thin", price: 62000, store: "Amazon", url: "https://amazon.com/msi-gf63-thin" },
    { name: "Samsung Galaxy Book Pro", price: 85000, store: "Samsung Store", url: "https://samsung.com/galaxy-book-pro" }
  ],
  headphones: [
    { name: "Sony WH-1000XM5", price: 29000, store: "Amazon", url: "https://amazon.com/sony-wh-1000xm5" },
    { name: "Bose QuietComfort 45", price: 32000, store: "Flipkart", url: "https://flipkart.com/bose-quietcomfort-45" },
    { name: "Sennheiser Momentum 4", price: 25000, store: "Myntra", url: "https://myntra.com/sennheiser-momentum-4" },
    { name: "JBL Live 660NC", price: 15000, store: "Amazon", url: "https://amazon.com/jbl-live-660nc" },
    { name: "Beats Studio 3", price: 23000, store: "Flipkart", url: "https://flipkart.com/beats-studio-3" },
    { name: "Apple AirPods Max", price: 60000, store: "Apple Store", url: "https://apple.com/airpods-max" },
    { name: "Anker Soundcore Q35", price: 12000, store: "Amazon", url: "https://amazon.com/anker-soundcore-q35" },
    { name: "AKG N700NC M2", price: 17000, store: "Samsung Store", url: "https://samsung.com/akg-n700nc-m2" },
    { name: "Marshall Monitor II", price: 22000, store: "Amazon", url: "https://amazon.com/marshall-monitor-ii" },
    { name: "Shure AONIC 50", price: 34000, store: "Flipkart", url: "https://flipkart.com/shure-aonic-50" },
    { name: "Sony WH-XB910N", price: 19000, store: "Amazon", url: "https://amazon.com/sony-wh-xb910n" },
    { name: "Bowers & Wilkins PX7", price: 28000, store: "Flipkart", url: "https://flipkart.com/bowers-wilkins-px7" },
    { name: "Plantronics BackBeat GO 810", price: 13000, store: "Myntra", url: "https://myntra.com/plantronics-backbeat-go-810" },
    { name: "OneOdio A70", price: 8000, store: "Amazon", url: "https://amazon.com/oneodio-a70" },
    { name: "Edifier W820NB", price: 9500, store: "Flipkart", url: "https://flipkart.com/edifier-w820nb" },
    { name: "Corsair Virtuoso RGB Wireless", price: 17000, store: "Amazon", url: "https://amazon.com/corsair-virtuoso-rgb-wireless" }
  ],
  earphones : [
    { name: "Realme Buds 2", price: 599, store: "Amazon", url: "https://amazon.com/realme-buds-2" },
    { name: "JBL C100SI", price: 799, store: "Flipkart", url: "https://flipkart.com/jbl-c100si" },
    { name: "OnePlus Bullets Wireless Z", price: 1999, store: "Amazon", url: "https://amazon.com/oneplus-bullets-wireless-z" },
    { name: "Sony MDR-EX150AP", price: 1499, store: "Flipkart", url: "https://flipkart.com/sony-mdr-ex150ap" },
    { name: "boAt Bassheads 225", price: 549, store: "Amazon", url: "https://amazon.com/boat-bassheads-225" },
    { name: "Skullcandy Ink'd+ In-Ear Earphone", price: 1299, store: "Flipkart", url: "https://flipkart.com/skullcandy-inkd" },
    { name: "Sennheiser CX 80S", price: 1990, store: "Amazon", url: "https://amazon.com/sennheiser-cx-80s" },
    { name: "Beyerdynamic Beat BYRD", price: 2200, store: "Flipkart", url: "https://flipkart.com/beyerdynamic-beat-byrd" },
    { name: "Philips SHE1505", price: 399, store: "Amazon", url: "https://amazon.com/philips-she1505" },
    { name: "Mi Dual Driver In-Ear Earphones", price: 699, store: "Flipkart", url: "https://flipkart.com/mi-dual-driver" },
    { name: "Panasonic RP-HJE125M", price: 1099, store: "Amazon", url: "https://amazon.com/panasonic-rp-hje125m" },
    { name: "Realme Buds Q2", price: 2499, store: "Flipkart", url: "https://flipkart.com/realme-buds-q2" },
    { name: "Jabra Elite 3 Earphones", price: 3499, store: "Amazon", url: "https://amazon.com/jabra-elite-3" },
    { name: "TCL SOCL100", price: 599, store: "Flipkart", url: "https://flipkart.com/tcl-socl100" },
    { name: "AKG Y20U", price: 1999, store: "Amazon", url: "https://amazon.com/akg-y20u" },
    { name: "PTron Boom Ultima V2", price: 899, store: "Flipkart", url: "https://flipkart.com/ptron-boom-ultima-v2" },
    { name: "Blaupunkt EM10", price: 799, store: "Amazon", url: "https://amazon.com/blaupunkt-em10" },
    { name: "Noise Tune Active Pro", price: 1499, store: "Flipkart", url: "https://flipkart.com/noise-tune-active-pro" },
    { name: "Edifier H180", price: 990, store: "Amazon", url: "https://amazon.com/edifier-h180" },
    { name: "KZ ZST Dynamic Earphones", price: 1699, store: "Flipkart", url: "https://flipkart.com/kz-zst-dynamic" }
  ],
   watches : [
    { name: "Rolex Submariner", url: "https://www.rolex.com/watches/submariner" },
    { name: "Omega Seamaster", url: "https://www.omegawatches.com/seamaster" },
    { name: "Casio G-Shock", url: "https://www.casio.com/products/g-shock" },
    { name: "Tag Heuer Carrera", url: "https://www.tagheuer.com/us/en/carrera" },
    { name: "Seiko Presage", url: "https://www.seikowatches.com/global-en/products/presage" },
    { name: "Citizen Eco-Drive", url: "https://www.citizenwatch.com/us/en/product/Eco-Drive" },
    { name: "Hamilton Khaki Field", url: "https://www.hamiltonwatch.com/en-us/khaki-field" },
    { name: "Tissot Le Locle", url: "https://www.tissotwatches.com/en-us/tissot-le-locle" },
    { name: "Fossil Hybrid HR", url: "https://www.fossil.com/en-us/collections/hybrid" },
    { name: "Casio F91W", url: "https://www.casio.com/products/classic/f91w" },
    { name: "Michael Kors Access", url: "https://www.michaelkors.com/access-smartwatches" },
    { name: "Breitling Navitimer", url: "https://www.breitling.com/us-en/watches/navitimer" },
    { name: "Patek Philippe Calatrava", url: "https://www.patek.com/en/collections/calatrava" },
    { name: "Audemars Piguet Royal Oak", url: "https://www.audemarspiguet.com/us/en/collections/royal-oak" },
    { name: "Vacheron Constantin Overseas", url: "https://www.vacheron-constantin.com/en/collections/overseas" }
],
 smartwatches : [
    { name: "Apple Watch Series 9", url: "https://www.apple.com/apple-watch-series-9/" },
    { name: "Samsung Galaxy Watch 6", url: "https://www.samsung.com/us/watches/galaxy-watch/" },
    { name: "Garmin Fenix 7", url: "https://www.garmin.com/en-US/p/725723" },
    { name: "Fitbit Charge 5", url: "https://www.fitbit.com/global/us/products/trackers/charge5" },
    { name: "Amazfit GTR 4", url: "https://www.amazfit.com/gtr-4.html" },
    { name: "Huawei Watch GT 3", url: "https://consumer.huawei.com/en/wearables/watch-gt-3/" },
    { name: "Withings Steel HR", url: "https://www.withings.com/us/en/steel-hr" },
    { name: "Suunto 9 Peak", url: "https://www.suunto.com/en-us/Products/suunto-9/suunto-9-peak" },
    { name: "Fossil Gen 6", url: "https://www.fossil.com/en-us/collections/gen-6" },
    { name: "TicWatch Pro 5", url: "https://www.mobvoi.com/global/Pro5" },
    { name: "Oura Ring", url: "https://ouraring.com/" },
    { name: "Garmin Venu 2", url: "https://www.garmin.com/en-US/p/725723" },
    { name: "Polar Grit X Pro", url: "https://www.polar.com/us-en/grit-x-pro" },
    { name: "Skagen Falster 3", url: "https://www.skagen.com/us/en/falster-3" },
    { name: "Xiaomi Mi Watch", url: "https://www.mi.com/global/mi-watch" },
    { name: "Amazfit Bip U Pro", url: "https://www.amazfit.com/bip-u-pro.html" },
    { name: "Huawei Watch Fit 2", url: "https://consumer.huawei.com/en/wearables/watch-fit-2/" },
    { name: "Garmin Forerunner 945 LTE", url: "https://www.garmin.com/en-US/p/725723" }
],
shirts: [
  { name: "Peter England Formal Shirt", price: 1199, store: "Amazon", url: "https://amazon.com/peter-england-formal-shirt" },
  { name: "Van Heusen Slim Fit Shirt", price: 1599, store: "Flipkart", url: "https://flipkart.com/van-heusen-slim-fit-shirt" },
  { name: "Raymond Classic White Shirt", price: 1999, store: "Myntra", url: "https://myntra.com/raymond-classic-white-shirt" },
  { name: "Louis Philippe Checked Shirt", price: 2499, store: "Amazon", url: "https://amazon.com/louis-philippe-checked-shirt" },
  { name: "Allen Solly Casual Shirt", price: 1399, store: "Flipkart", url: "https://flipkart.com/allen-solly-casual-shirt" },
  { name: "US Polo Assn. Denim Shirt", price: 1799, store: "Myntra", url: "https://myntra.com/us-polo-assn-denim-shirt" },
  { name: "Levi's Button-Down Shirt", price: 2199, store: "Levi's Store", url: "https://levis.com/levis-button-down-shirt" },
  { name: "Tommy Hilfiger Striped Shirt", price: 3499, store: "Amazon", url: "https://amazon.com/tommy-hilfiger-striped-shirt" },
  { name: "Arrow Oxford Shirt", price: 1999, store: "Flipkart", url: "https://flipkart.com/arrow-oxford-shirt" },
  { name: "Zodiac Solid Black Shirt", price: 1899, store: "Myntra", url: "https://myntra.com/zodiac-solid-black-shirt" }
],
jeans: [
  { name: "Levi's 511 Slim Fit Jeans", price: 3299, store: "Amazon", url: "https://amazon.com/levis-511-slim-fit-jeans" },
  { name: "Wrangler Regular Fit Jeans", price: 2799, store: "Flipkart", url: "https://flipkart.com/wrangler-regular-fit-jeans" },
  { name: "Pepe Jeans Straight Cut Jeans", price: 2499, store: "Myntra", url: "https://myntra.com/pepe-jeans-straight-cut-jeans" },
  { name: "Diesel Skinny Fit Jeans", price: 6999, store: "Amazon", url: "https://amazon.com/diesel-skinny-fit-jeans" },
  { name: "Calvin Klein Tapered Jeans", price: 5499, store: "Flipkart", url: "https://flipkart.com/calvin-klein-tapered-jeans" },
  { name: "Lee Cooper Slim Fit Jeans", price: 2199, store: "Myntra", url: "https://myntra.com/lee-cooper-slim-fit-jeans" },
  { name: "Spykar Stretchable Jeans", price: 1999, store: "Amazon", url: "https://amazon.com/spykar-stretchable-jeans" },
  { name: "Jack & Jones Washed Jeans", price: 3199, store: "Flipkart", url: "https://flipkart.com/jack-and-jones-washed-jeans" },
  { name: "Gap Regular Tapered Jeans", price: 3699, store: "Myntra", url: "https://myntra.com/gap-regular-tapered-jeans" },
  { name: "Flying Machine Distressed Jeans", price: 1899, store: "Amazon", url: "https://amazon.com/flying-machine-distressed-jeans" },
  { name: "US Polo Assn. Slim Fit Jeans", price: 2599, store: "Flipkart", url: "https://flipkart.com/us-polo-assn-slim-fit-jeans" },
  { name: "Arrow Mid-Rise Jeans", price: 2799, store: "Myntra", url: "https://myntra.com/arrow-mid-rise-jeans" },
  { name: "Zara Slim Tapered Jeans", price: 4999, store: "Amazon", url: "https://amazon.com/zara-slim-tapered-jeans" },
  { name: "Allen Solly Relaxed Jeans", price: 2399, store: "Flipkart", url: "https://flipkart.com/allen-solly-relaxed-jeans" },
  { name: "Mufti Stretchable Denim Jeans", price: 2299, store: "Myntra", url: "https://myntra.com/mufti-stretchable-denim-jeans" }
],
bags: [
  { name: "Wildcraft Rucksack Bag", price: 2899, store: "Amazon", url: "https://amazon.com/wildcraft-rucksack-bag" },
  { name: "American Tourister Laptop Backpack", price: 2599, store: "Flipkart", url: "https://flipkart.com/american-tourister-laptop-backpack" },
  { name: "Skybags Casual Backpack", price: 1999, store: "Myntra", url: "https://myntra.com/skybags-casual-backpack" },
  { name: "Nike Sports Duffel Bag", price: 2499, store: "Amazon", url: "https://amazon.com/nike-sports-duffel-bag" },
  { name: "Puma Gym Sack Bag", price: 1399, store: "Flipkart", url: "https://flipkart.com/puma-gym-sack-bag" },
  { name: "Tommy Hilfiger Leather Sling Bag", price: 4599, store: "Myntra", url: "https://myntra.com/tommy-hilfiger-leather-sling-bag" },
  { name: "F Gear Military Tactical Bag", price: 3499, store: "Amazon", url: "https://amazon.com/f-gear-military-tactical-bag" },
  { name: "Samsonite Travel Duffle Bag", price: 5999, store: "Flipkart", url: "https://flipkart.com/samsonite-travel-duffle-bag" },
  { name: "Baggit Women's Tote Bag", price: 2999, store: "Myntra", url: "https://myntra.com/baggit-womens-tote-bag" },
  { name: "Lavie Handbag for Women", price: 2399, store: "Amazon", url: "https://amazon.com/lavie-handbag-for-women" },
  { name: "VIP Rolling Duffel Bag", price: 5299, store: "Flipkart", url: "https://flipkart.com/vip-rolling-duffel-bag" },
  { name: "Caprese Laptop Tote Bag", price: 3899, store: "Myntra", url: "https://myntra.com/caprese-laptop-tote-bag" },
  { name: "ADISA Stylish College Backpack", price: 999, store: "Amazon", url: "https://amazon.com/adisa-stylish-college-backpack" },
  { name: "High Sierra Travel Backpack", price: 3999, store: "Flipkart", url: "https://flipkart.com/high-sierra-travel-backpack" },
  { name: "Gear School Backpack", price: 1499, store: "Myntra", url: "https://myntra.com/gear-school-backpack" }
],
shoes: [
  { name: "Nike Air Max 270", price: 7499, store: "Amazon", url: "https://amazon.com/nike-air-max-270" },
  { name: "Adidas Ultraboost 22", price: 12999, store: "Flipkart", url: "https://flipkart.com/adidas-ultraboost-22" },
  { name: "Puma Running Shoes", price: 4499, store: "Myntra", url: "https://myntra.com/puma-running-shoes" },
  { name: "Woodland Leather Boots", price: 6599, store: "Amazon", url: "https://amazon.com/woodland-leather-boots" },
  { name: "Bata Formal Shoes", price: 3199, store: "Flipkart", url: "https://flipkart.com/bata-formal-shoes" },
  { name: "Reebok CrossFit Nano", price: 8999, store: "Myntra", url: "https://myntra.com/reebok-crossfit-nano" },
  { name: "Campus Men's Sneakers", price: 1799, store: "Amazon", url: "https://amazon.com/campus-mens-sneakers" },
  { name: "Skechers Go Walk Shoes", price: 5499, store: "Flipkart", "url": "https://flipkart.com/skechers-go-walk-shoes" },
  { name: "Red Tape Sports Shoes", price: 2499, store: "Myntra", url: "https://myntra.com/red-tape-sports-shoes" },
  { name: "Liberty Comfort Sandals", price: 1499, store: "Amazon", url: "https://amazon.com/liberty-comfort-sandals" },
  { name: "Hush Puppies Formal Shoes", price: 5499, store: "Flipkart", url: "https://flipkart.com/hush-puppies-formal-shoes" },
  { name: "Lotto Tennis Shoes", price: 2899, store: "Myntra", url: "https://myntra.com/lotto-tennis-shoes" },
  { name: "Nike Jordans", price: 15999, store: "Amazon", url: "https://amazon.com/nike-jordans" },
  { name: "Adidas Stan Smith", price: 6999, store: "Flipkart", url: "https://flipkart.com/adidas-stan-smith" },
  { name: "Crocs Unisex Clogs", price: 3499, store: "Myntra", url: "https://myntra.com/crocs-unisex-clogs" }
],
rings :[
  { "name": "Gold Solitaire Ring", "price": 12999, "store": "Amazon", "url": "https://amazon.com/gold-solitaire-ring" },
  { "name": "Sterling Silver Band Ring", "price": 1599, "store": "Flipkart", "url": "https://flipkart.com/silver-band-ring" },
  { "name": "Diamond Eternity Ring", "price": 45999, "store": "Myntra", "url": "https://myntra.com/diamond-eternity-ring" },
  { "name": "Platinum Wedding Band", "price": 54999, "store": "Amazon", "url": "https://amazon.com/platinum-wedding-band" },
  { "name": "Rose Gold Promise Ring", "price": 8999, "store": "Flipkart", "url": "https://flipkart.com/rose-gold-promise-ring" },
  { "name": "Cubic Zirconia Cocktail Ring", "price": 1299, "store": "Myntra", "url": "https://myntra.com/cubic-zirconia-ring" },
  { "name": "Engraved Signet Ring", "price": 3499, "store": "Amazon", "url": "https://amazon.com/engraved-signet-ring" },
  { "name": "Traditional Kundan Ring", "price": 2499, "store": "Flipkart", "url": "https://flipkart.com/kundan-ring" },
  { "name": "Pearl Adjustable Ring", "price": 1199, "store": "Myntra", "url": "https://myntra.com/pearl-ring" },
  { "name": "Black Onyx Men's Ring", "price": 3499, "store": "Amazon", "url": "https://amazon.com/black-onyx-ring" }
],
bracelets :[
    { "name": "Gold Chain Bracelet", "price": 9999, "store": "Amazon", "url": "https://amazon.com/gold-chain-bracelet" },
    { "name": "Leather Wrap Bracelet", "price": 1999, "store": "Flipkart", "url": "https://flipkart.com/leather-wrap-bracelet" },
    { "name": "Sterling Silver Charm Bracelet", "price": 6999, "store": "Myntra", "url": "https://myntra.com/silver-charm-bracelet" },
    { "name": "Diamond Tennis Bracelet", "price": 59999, "store": "Amazon", "url": "https://amazon.com/diamond-tennis-bracelet" },
    { "name": "Beaded Friendship Bracelet", "price": 499, "store": "Flipkart", "url": "https://flipkart.com/beaded-friendship-bracelet" },
    { "name": "Rose Gold Cuff Bracelet", "price": 3999, "store": "Myntra", "url": "https://myntra.com/rose-gold-cuff-bracelet" },
    { "name": "Bangle Bracelet Set", "price": 1999, "store": "Amazon", "url": "https://amazon.com/bangle-bracelet-set" },
    { "name": "Multilayered Chain Bracelet", "price": 1599, "store": "Flipkart", "url": "https://flipkart.com/multilayered-bracelet" },
    { "name": "Infinity Knot Bracelet", "price": 799, "store": "Myntra", "url": "https://myntra.com/infinity-knot-bracelet" },
    { "name": "Crystal Studded Bracelet", "price": 2799, "store": "Amazon", "url": "https://amazon.com/crystal-bracelet" },
    { "name": "Antique Oxidized Bracelet", "price": 1399, "store": "Flipkart", "url": "https://flipkart.com/oxidized-bracelet" },
    { "name": "Adjustable Rope Bracelet", "price": 599, "store": "Myntra", "url": "https://myntra.com/rope-bracelet" }  
],
gymEquipment: [
  { name: "Adjustable Dumbbell Set", price: 5999, store: "Amazon", url: "https://amazon.com/adjustable-dumbbell-set" },
  { name: "Yoga Mat (6mm)", price: 1299, store: "Flipkart", url: "https://flipkart.com/yoga-mat-6mm" },
  { name: "Resistance Bands Set", price: 899, store: "Myntra", url: "https://myntra.com/resistance-bands-set" },
  { name: "Kettlebell (10kg)", price: 3299, store: "Amazon", url: "https://amazon.com/kettlebell-10kg" },
  { name: "Pull-Up Bar", price: 2499, store: "Flipkart", url: "https://flipkart.com/pull-up-bar" },
  { name: "Foam Roller", price: 999, store: "Myntra", url: "https://myntra.com/foam-roller" },
  { name: "Treadmill", price: 49999, store: "Amazon", url: "https://amazon.com/treadmill" },
  { name: "Ab Wheel Roller", price: 699, store: "Flipkart", url: "https://flipkart.com/ab-wheel-roller" },
  { name: "Medicine Ball (5kg)", price: 2299, store: "Myntra", url: "https://myntra.com/medicine-ball-5kg" },
  { name: "Skipping Rope", price: 399, store: "Amazon", url: "https://amazon.com/skipping-rope" }
],
protein: [
  { name: "Whey Protein Isolate", price: 2999, store: "Amazon", url: "https://amazon.com/whey-protein-isolate" },
  { name: "Plant-Based Protein (1kg)", price: 2199, store: "Flipkart", url: "https://flipkart.com/plant-based-protein" },
  { name: "Casein Protein", price: 2599, store: "Myntra", url: "https://myntra.com/casein-protein" },
  { name: "Mass Gainer Protein", price: 3499, store: "Amazon", url: "https://amazon.com/mass-gainer-protein" },
  { name: "Protein Blend (Chocolate)", price: 1999, store: "Flipkart", url: "https://flipkart.com/protein-blend-chocolate" },
  { name: "Collagen Protein Powder", price: 2799, store: "Myntra", url: "https://myntra.com/collagen-protein-powder" },
  { name: "Egg White Protein Powder", price: 2499, store: "Amazon", url: "https://amazon.com/egg-white-protein" },
  { name: "Soy Protein Isolate", price: 1999, store: "Flipkart", url: "https://flipkart.com/soy-protein-isolate" },
  { name: "Pea Protein Powder", price: 2399, store: "Myntra", url: "https://myntra.com/pea-protein-powder" },
  { name: "Herbal Protein Powder", price: 1799, store: "Amazon", url: "https://amazon.com/herbal-protein-powder" },
  { name: "Whey Protein (Double Chocolate)", price: 3199, store: "Flipkart", url: "https://flipkart.com/whey-protein-double-chocolate" },
  { name: "Protein Powder (Vanilla)", price: 2099, store: "Myntra", url: "https://myntra.com/protein-powder-vanilla" }
],
buckets: [
  { "name": "Plastic Bucket (20L)", "price": 249, "store": "Amazon", "url": "https://amazon.com/plastic-bucket-20l" },
  { "name": "Steel Bucket (10L)", "price": 499, "store": "Flipkart", "url": "https://flipkart.com/steel-bucket-10l" },
  { "name": "Collapsible Silicone Bucket (15L)", "price": 799, "store": "Myntra", "url": "https://myntra.com/collapsible-silicone-bucket" },
  { "name": "Multipurpose Bucket with Lid (25L)", "price": 599, "store": "Amazon", "url": "https://amazon.com/multipurpose-bucket-lid" },
  { "name": "Metal Bucket for Gardening (12L)", "price": 399, "store": "Flipkart", "url": "https://flipkart.com/metal-bucket-gardening" },
  { "name": "Laundry Bucket (30L)", "price": 899, "store": "Myntra", "url": "https://myntra.com/laundry-bucket" },
  { "name": "Decorative Wooden Bucket", "price": 999, "store": "Amazon", "url": "https://amazon.com/decorative-wooden-bucket" },
  { "name": "Bathroom Bucket Set (10L + 20L)", "price": 699, "store": "Flipkart", "url": "https://flipkart.com/bathroom-bucket-set" },
  { "name": "Paint Bucket (5L)", "price": 349, "store": "Myntra", "url": "https://myntra.com/paint-bucket" },
  { "name": "Heavy-Duty Bucket (50L)", "price": 1499, "store": "Amazon", "url": "https://amazon.com/heavy-duty-bucket" }
],
carpets :[
  { "name": "Modern Area Rug (5x7 ft)", "price": 2599, "store": "Amazon", "url": "https://amazon.com/modern-area-rug" },
  { "name": "Traditional Persian Carpet (6x9 ft)", "price": 4599, "store": "Flipkart", "url": "https://flipkart.com/traditional-persian-carpet" },
  { "name": "Shaggy Carpet (4x6 ft)", "price": 3299, "store": "Myntra", "url": "https://myntra.com/shaggy-carpet" },
  { "name": "Outdoor Rug (3x5 ft)", "price": 1899, "store": "Amazon", "url": "https://amazon.com/outdoor-rug" },
  { "name": "Woolen Carpet (7x10 ft)", "price": 5999, "store": "Flipkart", "url": "https://flipkart.com/woolen-carpet" },
  { "name": "Printed Floor Carpet (5x8 ft)", "price": 2499, "store": "Myntra", "url": "https://myntra.com/printed-floor-carpet" },
  { "name": "Anti-Slip Bath Carpet", "price": 799, "store": "Amazon", "url": "https://amazon.com/anti-slip-bath-carpet" },
  { "name": "Jute Carpet (4x6 ft)", "price": 2199, "store": "Flipkart", "url": "https://flipkart.com/jute-carpet" },
  { "name": "Velvet Carpet (6x9 ft)", "price": 3299, "store": "Myntra", "url": "https://myntra.com/velvet-carpet" },
  { "name": "Kids Play Mat Carpet", "price": 1499, "store": "Amazon", "url": "https://amazon.com/kids-play-mat-carpet" }
],
suits :[
  { "name": "Men's Formal Suit (Navy Blue)", "price": 7999, "store": "Amazon", "url": "https://amazon.com/formal-suit-navy-blue" },
  { "name": "Slim Fit Tuxedo Suit", "price": 8999, "store": "Flipkart", "url": "https://flipkart.com/slim-fit-tuxedo-suit" },
  { "name": "Three-Piece Suit (Black)", "price": 9999, "store": "Myntra", "url": "https://myntra.com/three-piece-suit-black" },
  { "name": "Checked Suit (Gray)", "price": 8499, "store": "Amazon", "url": "https://amazon.com/checked-suit-gray" },
  { "name": "Double-Breasted Suit", "price": 9299, "store": "Flipkart", "url": "https://flipkart.com/double-breasted-suit" },
  { "name": "Casual Linen Suit", "price": 6999, "store": "Myntra", "url": "https://myntra.com/casual-linen-suit" },
  { "name": "Wedding Suit (Cream)", "price": 12999, "store": "Amazon", "url": "https://amazon.com/wedding-suit-cream" },
  { "name": "Velvet Suit (Burgundy)", "price": 11999, "store": "Flipkart", "url": "https://flipkart.com/velvet-suit-burgundy" },
  { "name": "Summer Blazer Suit", "price": 6499, "store": "Myntra", "url": "https://myntra.com/summer-blazer-suit" },
  { "name": "Tailored Fit Suit", "price": 10999, "store": "Amazon", "url": "https://amazon.com/tailored-fit-suit" },
  { "name": "Pinstripe Suit", "price": 8999, "store": "Flipkart", "url": "https://flipkart.com/pinstripe-suit" },
  { "name": "Wool Blend Suit (Dark Green)", "price": 9599, "store": "Myntra", "url": "https://myntra.com/wool-blend-suit-dark-green" }
],
televisions :[
  { "name": "Samsung Smart TV (50-inch)", "price": 42999, "store": "Amazon", "url": "https://amazon.com/samsung-smart-tv-50-inch" },
  { "name": "LG OLED TV (55-inch)", "price": 94999, "store": "Flipkart", "url": "https://flipkart.com/lg-oled-tv-55-inch" },
  { "name": "Sony Bravia 4K TV (65-inch)", "price": 149999, "store": "Myntra", "url": "https://myntra.com/sony-bravia-4k-tv-65-inch" },
  { "name": "TCL Android TV (43-inch)", "price": 25999, "store": "Amazon", "url": "https://amazon.com/tcl-android-tv-43-inch" },
  { "name": "OnePlus Q1 Pro (55-inch)", "price": 59999, "store": "Flipkart", "url": "https://flipkart.com/oneplus-q1-pro-55-inch" },
  { "name": "Mi Smart TV (32-inch)", "price": 16999, "store": "Myntra", "url": "https://myntra.com/mi-smart-tv-32-inch" },
  { "name": "Panasonic LED TV (40-inch)", "price": 27999, "store": "Amazon", "url": "https://amazon.com/panasonic-led-tv-40-inch" },
  { "name": "Philips 4K TV (50-inch)", "price": 38999, "store": "Flipkart", "url": "https://flipkart.com/philips-4k-tv-50-inch" },
  { "name": "Realme Android TV (43-inch)", "price": 22999, "store": "Myntra", "url": "https://myntra.com/realme-android-tv-43-inch" },
  { "name": "Vu Premium TV (55-inch)", "price": 45999, "store": "Amazon", "url": "https://amazon.com/vu-premium-tv-55-inch" }
],
airconditioner :[
  { "name": "Daikin Split AC (1.5 Ton)", "price": 35999, "store": "Amazon", "url": "https://amazon.com/daikin-split-ac-1-5-ton" },
  { "name": "Voltas Window AC (1 Ton)", "price": 26999, "store": "Flipkart", "url": "https://flipkart.com/voltas-window-ac-1-ton" },
  { "name": "LG Inverter AC (2 Ton)", "price": 42999, "store": "Myntra", "url": "https://myntra.com/lg-inverter-ac-2-ton" },
  { "name": "Samsung Triple Inverter AC (1.5 Ton)", "price": 38999, "store": "Amazon", "url": "https://amazon.com/samsung-triple-inverter-ac" },
  { "name": "Hitachi Split AC (1.8 Ton)", "price": 45999, "store": "Flipkart", "url": "https://flipkart.com/hitachi-split-ac" },
  { "name": "Blue Star Portable AC (1 Ton)", "price": 31999, "store": "Myntra", "url": "https://myntra.com/blue-star-portable-ac" },
  { "name": "Whirlpool Window AC (1.2 Ton)", "price": 27999, "store": "Amazon", "url": "https://amazon.com/whirlpool-window-ac" },
  { "name": "Panasonic Split AC (1.5 Ton)", "price": 39999, "store": "Flipkart", "url": "https://flipkart.com/panasonic-split-ac" },
  { "name": "Carrier Hybrid AC (2 Ton)", "price": 48999, "store": "Myntra", "url": "https://myntra.com/carrier-hybrid-ac" },
  { "name": "Godrej Split AC (1.5 Ton)", "price": 34999, "store": "Amazon", "url": "https://amazon.com/godrej-split-ac" }
],
refrigerators :[
  { "name": "Samsung Double Door Refrigerator (253L)", "price": 26999, "store": "Amazon", "url": "https://amazon.com/samsung-double-door-refrigerator" },
  { "name": "LG Side-by-Side Refrigerator (675L)", "price": 79999, "store": "Flipkart", "url": "https://flipkart.com/lg-side-by-side-refrigerator" },
  { "name": "Whirlpool Single Door Refrigerator (190L)", "price": 14999, "store": "Myntra", "url": "https://myntra.com/whirlpool-single-door-refrigerator" },
  { "name": "Godrej Frost-Free Refrigerator (260L)", "price": 25999, "store": "Amazon", "url": "https://amazon.com/godrej-frost-free-refrigerator" },
  { "name": "Haier Double Door Refrigerator (320L)", "price": 29999, "store": "Flipkart", "url": "https://flipkart.com/haier-double-door-refrigerator" },
  { "name": "Panasonic Refrigerator (280L)", "price": 28999, "store": "Myntra", "url": "https://myntra.com/panasonic-refrigerator" },
  { "name": "Bosch Bottom Freezer Refrigerator (350L)", "price": 46999, "store": "Amazon", "url": "https://amazon.com/bosch-bottom-freezer-refrigerator" },
  { "name": "Electrolux Mini Refrigerator (50L)", "price": 7999, "store": "Flipkart", "url": "https://flipkart.com/electrolux-mini-refrigerator" },
  { "name": "BPL Single Door Refrigerator (200L)", "price": 17999, "store": "Myntra", "url": "https://myntra.com/bpl-single-door-refrigerator" },
  { "name": "Voltas Beko Double Door Refrigerator (340L)", "price": 34999, "store": "Amazon", "url": "https://amazon.com/voltas-beko-double-door-refrigerator" }
],
blenders :[
  { "name": "Philips Hand Blender", "price": 2499, "store": "Amazon", "url": "https://amazon.com/philips-hand-blender" },
  { "name": "Bajaj Mixer Blender", "price": 3499, "store": "Flipkart", "url": "https://flipkart.com/bajaj-mixer-blender" },
  { "name": "Morphy Richards Blender", "price": 2999, "store": "Myntra", "url": "https://myntra.com/morphy-richards-blender" },
  { "name": "Prestige Electric Blender", "price": 1999, "store": "Amazon", "url": "https://amazon.com/prestige-electric-blender" },
  { "name": "Kent Hand Blender", "price": 1599, "store": "Flipkart", "url": "https://flipkart.com/kent-hand-blender" },
  { "name": "Bosch Powerful Blender", "price": 3999, "store": "Myntra", "url": "https://myntra.com/bosch-powerful-blender" },
  { "name": "Panasonic Blender", "price": 2799, "store": "Amazon", "url": "https://amazon.com/panasonic-blender" },
  { "name": "Wonderchef Nutri-Blender", "price": 3499, "store": "Flipkart", "url": "https://flipkart.com/wonderchef-nutri-blender" },
  { "name": "Usha Smart Blender", "price": 1899, "store": "Myntra", "url": "https://myntra.com/usha-smart-blender" },
  { "name": "Butterfly Hand Blender", "price": 1399, "store": "Amazon", "url": "https://amazon.com/butterfly-hand-blender" }
],
toasters :[
  { "name": "Philips Pop-up Toaster", "price": 1799, "store": "Amazon", "url": "https://amazon.com/philips-pop-up-toaster" },
  { "name": "Morphy Richards Toaster", "price": 2499, "store": "Flipkart", "url": "https://flipkart.com/morphy-richards-toaster" },
  { "name": "Prestige Sandwich Toaster", "price": 2199, "store": "Myntra", "url": "https://myntra.com/prestige-sandwich-toaster" },
  { "name": "Bajaj 4-Slice Toaster", "price": 1899, "store": "Amazon", "url": "https://amazon.com/bajaj-4-slice-toaster" },
  { "name": "Kent 2-Slice Toaster", "price": 1599, "store": "Flipkart", "url": "https://flipkart.com/kent-2-slice-toaster" },
  { "name": "Usha Sandwich Toaster", "price": 1999, "store": "Myntra", "url": "https://myntra.com/usha-sandwich-toaster" },
  { "name": "Butterfly Electric Toaster", "price": 2299, "store": "Amazon", "url": "https://amazon.com/butterfly-electric-toaster" },
  { "name": "Panasonic Compact Toaster", "price": 1799, "store": "Flipkart", "url": "https://flipkart.com/panasonic-compact-toaster" },
  { "name": "Wonderchef Kitchen Toaster", "price": 2599, "store": "Myntra", "url": "https://myntra.com/wonderchef-kitchen-toaster" },
  { "name": "Bosch High-Quality Toaster", "price": 3499, "store": "Amazon", "url": "https://amazon.com/bosch-high-quality-toaster" }
]

  
};

// Endpoint to handle product search
app.post('/search', async (req, res) => {
  const { query } = req.body;

  try {
    const category = query.toLowerCase().includes('laptop') ? 'laptops' :
                     query.toLowerCase().includes('headphone') ? 'headphones' :
                     query.toLowerCase().includes('earphone') ? 'earphones' :
                     query.toLowerCase().includes('watch') ? 'watches' :
                     query.toLowerCase().includes('smartwatch') ? 'smartwatches' :
                     query.toLowerCase().includes('shirt') ? 'shirts' :
                     query.toLowerCase().includes('jean') ? 'jeans' :
                     query.toLowerCase().includes('bag') ? 'bags' :
                     query.toLowerCase().includes('shoe') ? 'shoes' :
                     query.toLowerCase().includes('ring') ? 'rings' :
                     query.toLowerCase().includes('bracelet') ? 'bracelets' :
                     query.toLowerCase().includes('gymequipment') ? 'gymEquipment' :
                     query.toLowerCase().includes('protein') ? 'protein' :
                     query.toLowerCase().includes('bucket') ? 'buckets' :
                     query.toLowerCase().includes('carpet') ? 'carpets' :
                     query.toLowerCase().includes('suit') ? 'suits' :
                     query.toLowerCase().includes('television') ? 'televisions' :
                     query.toLowerCase().includes('airconditioner') ? 'airconditioner' :
                     query.toLowerCase().includes('refrigerator') ? 'refrigerators' :
                     query.toLowerCase().includes('blender') ? 'blenders' :
                     query.toLowerCase().includes('toaster') ? 'toasters' :
                     null;

    if (!category) {
      return res.status(400).json({ error: "No matching category found. Try 'laptop' or 'headphone'." });
    }

    // Filter products based on category and query
    const filteredProducts = products[category].filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredProducts.length === 0) {
      return res.status(404).json({ error: `No ${category} found for the search query.` });
    }

    // Sort filtered products by price
    filteredProducts.sort((a, b) => a.price - b.price);

    res.json({
      cheapest: filteredProducts[0],
      products: filteredProducts,
    });
  } catch (error) {
    console.error('Error processing search:', error.message);
    res.status(500).json({ error: 'Failed to process search query.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
