/* ===================================================================
   SWEET SNEHA  BIRTHDAY CELEBRATION - SCRIPT ENGINE (BILINGUAL)
   English & Bengali Support, Upward Rotating Collage Stream,
   Interactive Web Audio API, Mini-Games, Magic Cursor & 3D Cake
=================================================================== */

let currentLang = localStorage.getItem("birthday_lang") || "en";

// --- 1. SNEHA'S PHOTO CATALOG (35 Photos with Dual English & Bengali Notes) ---
const PHOTOS_DATA = [
  {
    "id": 1,
    "file": "IMG-20261023-WA0006.jpg",
    "category": "festive",
    "title_en": "That Tiny Nose Ring!",
    "caption_en": "Every time I look at this picture, I fall in love all over again. That delicate little nose ring and those shy, sparkling eyes... Sneha, you are truly lethal!",
    "title_bn": "তোর ওই একরত্তি নাকছাবি!",
    "caption_bn": "এই ছবিটা যতবার দেখি, ততবার নতুন করে প্রেমে পড়ি। ছোট্ট নথ আর তোর ওই লাজুক চোখদুটো... উফফ স্নেহা, তুই সত্যিই সাংঘাতিক!"
  },
  {
    "id": 2,
    "file": "IMG-20261023-WA0019.jpg",
    "category": "saree",
    "title_en": "My Queen in Emerald Green",
    "caption_en": "You spent half the day adjusting your saree pleats, but the moment you walked out in green and gold, you left me completely breathless.",
    "title_bn": "সবুজ শাড়িতে আমার রানি",
    "caption_bn": "শাড়ির কুঁচি সামলাতে সামলাতেই তো দিন কাবার! কিন্তু বিশ্বাস কর, সবুজ শাড়িতে তোকে দেখে আমি পুরো বাক্যহারা হয়ে গেছিলাম।"
  },
  {
    "id": 3,
    "file": "IMG-20261023-WA0022.jpg",
    "category": "candid",
    "title_en": "Pure No-Makeup Cuteness",
    "caption_en": "This raw, candid version of you is my absolute favorite. No makeup, no filters—just your sweet innocence that stole my heart forever.",
    "title_bn": "নো-মেকআপ পিওর কিউটনেস",
    "caption_bn": "তোর এই সাদামাটা রূপটাই আমার সবচেয়ে বেশি প্রিয়। কোনো সাজগোজ ছাড়াই তোর এই চোখের সরলতায় আমি সারাজীবন বন্দি থাকতে চাই।"
  },
  {
    "id": 4,
    "file": "IMG-20261021-WA0236.jpg",
    "category": "festive",
    "title_en": "Checking Yourself in the Mirror",
    "caption_en": "You were admiring your red kurti in the glass, while I stood behind you thinking how on earth I got so lucky to have you in my life.",
    "title_bn": "আয়নায় কাকে দেখছিস রে?",
    "caption_bn": "লাল কুর্তিতে আয়নার সামনে দাঁড়িয়ে পোজ দিচ্ছিলি... তুই নিজেকে দেখছিলি, আর আমি তোকে দেখে ভাবছিলাম আমি কতটা ভাগ্যবান!"
  },
  {
    "id": 5,
    "file": "IMG-20261021-WA0237.jpg",
    "category": "candid",
    "title_en": "My Little Drama Queen!",
    "caption_en": "Pouting like a little baby! When you make this face, whatever anger I had instantly melts into pure affection.",
    "title_bn": "আমার ড্রামা কুইন!",
    "caption_bn": "গাল ফুলিয়ে এমন মিষ্টি মুখ বানালে রাগ তো দূরের কথা, গাল দুটো টেনে ধরে আদর করতে ইচ্ছে করে।"
  },
  {
    "id": 6,
    "file": "IMG-20261021-WA0240.jpg",
    "category": "candid",
    "title_en": "That Shy, Stolen Glance...",
    "caption_en": "The split second you noticed the camera and looked down with that gentle smile... this memory is permanently engraved in my soul.",
    "title_bn": "চোখ তুলে এক পলক...",
    "caption_bn": "ক্যামেরা অন করতেই চোখ নামিয়ে মিষ্টি করে হাসলি... এই ছোট্ট মুহূর্তগুলোই আমার বুকের ভেতর আজীবন অমূল্য হয়ে থাকবে।"
  },
  {
    "id": 7,
    "file": "IMG-20261022-WA0007.jpg",
    "category": "saree",
    "title_en": "Traditional Bengali Grace",
    "caption_en": "Sarees were invented simply for you to wear them. How can someone look this ethereal and graceful without even trying?",
    "title_bn": "শাড়ির খাঁটি বাঙালিয়ানা",
    "caption_bn": "শাড়ি জিনিসটা বোধহয় তোকে পরাবেন বলেই বানানো হয়েছিল! এত স্নিগ্ধ আর মিষ্টি কেউ কীভাবে হতে পারে বল তো?"
  },
  {
    "id": 8,
    "file": "IMG-20261022-WA0008.jpg",
    "category": "festive",
    "title_en": "That Magical Festive Night",
    "caption_en": "Brighter than all the festival lights around us was the glow on your face. I couldn't take my eyes off you for a single second.",
    "title_bn": "উৎসবের সেই মিষ্টি সন্ধ্যা",
    "caption_bn": "চারপাশের আলোর চেয়েও বেশি ঝলমল করছিল তোর মুখের মিষ্টি হাসি। আমি তো এক পলকের জন্যও চোখ সরাতে পারিনি।"
  },
  {
    "id": 9,
    "file": "IMG-20261022-WA0009.jpg",
    "category": "saree",
    "title_en": "The Saree Pallu Magic",
    "caption_en": "Watching you walk with your saree pallu fluttering gently in the breeze... I whispered to myself, 'She is mine, and I am the luckiest guy alive.'",
    "title_bn": "শাড়ির আঁচলের মায়াজাল",
    "caption_bn": "শাড়ির আঁচল উড়িয়ে যখন হেঁটে যাচ্ছিস, তখন মনে মনে ভাবছিলাম—এই মেয়েটা শুধুই আমার, ভাবতে কী যে ভালো লাগে!"
  },
  {
    "id": 10,
    "file": "IMG-20261022-WA0010.jpg",
    "category": "candid",
    "title_en": "Your Smile Lights Up My World",
    "caption_en": "One genuine, joyful laugh from you, and every bit of stress and sadness in my life instantly disappears.",
    "title_bn": "তোর হাসিতেই আমার সকাল",
    "caption_bn": "তোর এই খিলখিলিয়ে হাসা মুখটা দেখলে আমার সব দুশ্চিন্তা আর খারাপ লাগা এক নিমেষে উধাও হয়ে যায়।"
  },
  {
    "id": 11,
    "file": "IMG-20261022-WA0011.jpg",
    "category": "festive",
    "title_en": "A Day Full of Colors",
    "caption_en": "Every single day spent by your side feels like a colorful celebration. You bring colors into my world that I never knew existed.",
    "title_bn": "রঙিন স্মৃতির দিন",
    "caption_bn": "তোর সাথে কাটানো প্রতিটা দিনই আমার কাছে এক একটা রঙের উৎসব। তুই আছিস বলেই আমার জীবনটা এত রঙিন।"
  },
  {
    "id": 12,
    "file": "IMG-20261022-WA0016.jpg",
    "category": "saree",
    "title_en": "The Fairy Tale Princess",
    "caption_en": "Whenever you dress up in a traditional saree, fairy tales don't feel like fiction anymore. You're real, and you're my princess.",
    "title_bn": "পরীদের রাজকন্যা স্নেহা",
    "caption_bn": "শাড়ি পরে তুই যখন মিষ্টি করে তাকাস, রূপকথার গল্পগুলোও যেন সত্যি বলে মনে হয়!"
  },
  {
    "id": 13,
    "file": "IMG-20261022-WA0020.jpg",
    "category": "candid",
    "title_en": "The Signature Sneha Pout!",
    "caption_en": "There it is—the world-famous Sneha pout! I will happily lose every single argument just to see this cute face.",
    "title_bn": "সেই বিখ্যাত স্নেহা পাউট!",
    "caption_bn": "এই পাউটটা দেখলে আমার সব রাগ জল হয়ে যায়। এই মিষ্টি মুখটার কাছে আমি প্রতিবার হার মানতে রাজি!"
  },
  {
    "id": 14,
    "file": "IMG-20261022-WA0020_1.jpg",
    "category": "candid",
    "title_en": "Kajal-Lined Mystery",
    "caption_en": "There is a secret poetry in your kajal-rimmed eyes. Every time you look at me, I get lost in their depth.",
    "title_bn": "চোখের কাজলের জাদু",
    "caption_bn": "তোর চোখের কাজলে কী যে গোপন মায়া আছে জানি না, তাকালেই মনে হয় আমি হারিয়ে গেছি এক রূপকথায়।"
  },
  {
    "id": 15,
    "file": "IMG-20261023-WA0011.jpg",
    "category": "festive",
    "title_en": "Walking Hand in Hand",
    "caption_en": "No matter how bumpy the road of life gets, as long as I have this gentle hand in mine, I can cross oceans without fear.",
    "title_bn": "হাত ধরে পথ চলা",
    "caption_bn": "জীবনের রাস্তা যতই কঠিন হোক, তোর এই মিষ্টি হাতটা ধরে আমি সাত সমুদ্র পার হয়ে যেতে পারি।"
  },
  {
    "id": 16,
    "file": "IMG-20261023-WA0013.jpg",
    "category": "saree",
    "title_en": "The Shy Saree Pose",
    "caption_en": "Lowering your eyes with that soft, hesitant smile... my heart skipped a whole beat right then and there.",
    "title_bn": "শাড়ির সাজে লাজুক স্নেহা",
    "caption_bn": "চোখ দুটো নামিয়ে যখন মিষ্টি করে হাসলি, আমার হৃদস্পন্দনটা একটা সেকেন্ডের জন্য থমকে দাঁড়িয়েছিল।"
  },
  {
    "id": 17,
    "file": "IMG-20261023-WA0020.jpg",
    "category": "saree",
    "title_en": "Heaven's Masterpiece",
    "caption_en": "Sometimes I just look at you and wonder how God managed to put so much beauty, warmth, and grace into one person.",
    "title_bn": "ঈশ্বর নিজ হাতে বানিয়েছেন তোকে",
    "caption_bn": "মাঝে মাঝে অবাক হয়ে তাকিয়ে থাকি... এত মায়া, এত ভালোবাসা এক মানুষের মধ্যে কীভাবে থাকতে পারে!"
  },
  {
    "id": 18,
    "file": "IMG-20261023-WA0021.jpg",
    "category": "candid",
    "title_en": "Your Laugh is Contagious",
    "caption_en": "There is nothing in this world more pure than your uninhibited laugh. I'd do anything just to keep that smile forever.",
    "title_bn": "হাসলে তোকে দারুণ মানায়",
    "caption_bn": "তোর এই প্রাণখোলা হাসিটার কোনো তুলনা নেই। এই হাসিটা ধরে রাখার জন্য আমি যেকোনো কিছু করতে পারি।"
  },
  {
    "id": 19,
    "file": "IMG-20261023-WA0023.jpg",
    "category": "festive",
    "title_en": "Brighter Than the Full Moon",
    "caption_en": "Why would I ever look at the night sky when my personal moon is right here, lighting up my entire world?",
    "title_bn": "চাঁদের চেয়েও উজ্জ্বল",
    "caption_bn": "আকাশে চাঁদ খোঁজার কোনো দরকারই নেই আমার, যখন আমার চোখের সামনেই আস্ত একটা চাঁদ হেঁটে বেড়ায়।"
  },
  {
    "id": 20,
    "file": "IMG-20261023-WA0024.jpg",
    "category": "candid",
    "title_en": "Casual Elegance & Sweet Smile",
    "caption_en": "That stylish black embroidered top, your radiant smile, and the effortless grace you carry... you don't even need a saree to steal my heart completely!",
    "title_bn": "কালো কুর্তিতে স্নিগ্ধ সাজ",
    "caption_bn": "কালো কুর্তি আর মিষ্টি হাসিতে তুই এক কথায় দারুণ! কোনো বিশেষ সাজগোজ ছাড়াই তোর এই সহজ-সরল রূপটা আমার মন ভালো করে দেয়।"
  },
  {
    "id": 21,
    "file": "IMG-20261023-WA0025.jpg",
    "category": "candid",
    "title_en": "A Touch of Mischief",
    "caption_en": "That playful sparkle in your eyes that says, 'I love annoying you!' And truth is, being annoyed by you is my favorite pastime.",
    "title_bn": "দুষ্টুমি আর আদরের মিশ্রণ",
    "caption_bn": "তোর চোখের এই দুষ্টু চাহনিটাই বলে দেয়—আমায় জ্বালাতে তুই কতটা ভালোবাসিস! আর তোকে জ্বালানোতেই আমার আনন্দ।"
  },
  {
    "id": 22,
    "file": "IMG-20261023-WA0031.jpg",
    "category": "festive",
    "title_en": "Radiance in the Glow",
    "caption_en": "Outshining every candle and diya in the room. The real light of my life has always been you, Sneha.",
    "title_bn": "আলোর রোশনাইয়ে স্নেহা",
    "caption_bn": "প্রদীপের আলোর চেয়েও তোর মুখের স্নিগ্ধতা হাজার গুণ বেশি উজ্জ্বল। আমার জীবনের সমস্ত আলো তুই।"
  },
  {
    "id": 23,
    "file": "IMG-20261023-WA0037.jpg",
    "category": "saree",
    "title_en": "Golden Hour Serenity",
    "caption_en": "Standing in the soft amber sunset draped in your saree... I wished the clock would freeze right at that exact second forever.",
    "title_bn": "পরন্ত বিকেলে তোর মায়া",
    "caption_bn": "বিকেলের নরম আলোয় শাড়ি পরে দাঁড়িয়েছিলি... মনে হচ্ছিল সময়টা যদি এখানেই চিরদিনের মতো থেমে যেত!"
  },
  {
    "id": 24,
    "file": "IMG-20261023-WA0038.jpg",
    "category": "candid",
    "title_en": "The Only Queen of My Heart",
    "caption_en": "On the throne of my heart, nobody has ever sat before you, and nobody ever will. You rule this empire alone.",
    "title_bn": "আমার একমাত্র রানি",
    "caption_bn": "এই হৃদয়ের সিংহাসনে তুই ছাড়া আর কারো কোনোদিন কোনো জায়গা ছিল না, আর ভবিষ্যতেও থাকবে না।"
  },
  {
    "id": 25,
    "file": "IMG-20261023-WA0039.jpg",
    "category": "festive",
    "title_en": "Pure Aesthetic Elegance",
    "caption_en": "Just looking at you brings an instant calm to my soul. You are the sweetest blessing my life has ever received.",
    "title_bn": "তোর মায়াবী রূপ",
    "caption_bn": "তোর দিকে তাকালেই মনটা শান্ত হয়ে যায়। জীবনের সেরা প্রাপ্তি যে তুই, এটা আমি প্রতি মুহূর্তে অনুভব করি।"
  },
  {
    "id": 26,
    "file": "IMG-20261023-WA0040.jpg",
    "category": "saree",
    "title_en": "Mastering the Saree Pleats",
    "caption_en": "You can handle six yards of delicate saree with such elegance, yet handling my silly antics is where the real drama begins! Love you so much.",
    "title_bn": "শাড়ির প্রতিটা ভাঁজে জাদু",
    "caption_bn": "এত সুন্দর শাড়ি সামলাতে পারিস তুই, কিন্তু আমাকে সামলাতে গিয়েই তো যত বিপত্তি! ভালোবাসি রে তোকে।"
  },
  {
    "id": 27,
    "file": "IMG-20261023-WA0041.jpg",
    "category": "candid",
    "title_en": "Those Big, Adorable Eyes",
    "caption_en": "When you look into my eyes, I see a lifetime of love, trust, and our beautiful future reflected back at me.",
    "title_bn": "তোর ওই আদুরে চোখদুটো",
    "caption_bn": "তোর চোখে যখন তাকিয়ে থাকি, মনে হয় গোটা পৃথিবীর সবচেয়ে নিখাদ ভালোবাসাটা এখানেই লুকিয়ে আছে।"
  },
  {
    "id": 28,
    "file": "IMG-20261023-WA0042.jpg",
    "category": "festive",
    "title_en": "Every Day with You is a Festival",
    "caption_en": "We don't need holidays or festivals on a calendar. Even sharing a simple cup of tea with you feels like Diwali.",
    "title_bn": "তোর সাথে প্রতিটা দিন উৎসব",
    "caption_bn": "ক্যালেন্ডারের কোনো উৎসব লাগে না আমাদের, তুই পাশে থাকলে একটা সাধারণ চায়ের কাপও উৎসব হয়ে ওঠে।"
  },
  {
    "id": 29,
    "file": "IMG-20261023-WA0043.jpg",
    "category": "saree",
    "title_en": "Enchanting Under City Lights",
    "caption_en": "Against the backdrop of the illuminated city, draped in grace... you shone brighter than all the skyline lights combined.",
    "title_bn": "রাতের মায়ায় অপরূপা",
    "caption_bn": "শহরের নিভু নিভু আলোয় শাড়ি জড়িয়ে তুই যখন দাঁড়িয়েছিলি, পুরো শহরটার চেয়ে তোকেই বেশি উজ্জ্বল লাগছিল।"
  },
  {
    "id": 30,
    "file": "IMG-20261023-WA0044.jpg",
    "category": "candid",
    "title_en": "My Safe Haven",
    "caption_en": "No matter how chaotic the outside world gets, resting my head next to you brings a peace I can't find anywhere else on earth.",
    "title_bn": "আমার শান্তির নীড়",
    "caption_bn": "বাইরে যতই ঝড় উঠুক, তোর পাশে এসে বসলে যে অদ্ভুত শান্তি পাই, তা এই দুনিয়ার কোথাও নেই।"
  },
  {
    "id": 31,
    "file": "IMG-20261023-WA0045.jpg",
    "category": "saree",
    "title_en": "The Fragrance of Grace",
    "caption_en": "Your very presence brings a soothing sweetness to the room. Being near you is pure comfort.",
    "title_bn": "শাড়ির স্নিগ্ধ সুবাস",
    "caption_bn": "তোর উপস্থিতিটাই ঘরের বাতাসকে মিষ্টি করে তোলে। তুই পাশে থাকা মানেই এক পরম স্বস্তি।"
  },
  {
    "id": 32,
    "file": "IMG-20261023-WA0046.jpg",
    "category": "festive",
    "title_en": "A Thousand Times Love",
    "caption_en": "Being able to wake up and see your sweet face is the greatest gift the universe could ever grant me.",
    "title_bn": "একরাশ ভালোবাসা",
    "caption_bn": "তোর এই মিষ্টি হাসিটা দেখতে পাওয়ার চেয়ে বড় কোনো উপহার ভগবান আমাকে দিতে পারতেন না।"
  },
  {
    "id": 33,
    "file": "IMG-20261023-WA0047.jpg",
    "category": "candid",
    "title_en": "My Silly, Sweet Sneha",
    "caption_en": "You're not just my girlfriend, you are my partner in crime, my favorite person to laugh with, and my whole heart.",
    "title_bn": "আমার পাগলি স্নেহা",
    "caption_bn": "তুই শুধুই আমার স্নেহা নোস, তুই আমার রাগ, অভিমান আর বেঁচে থাকার একমাত্র কারণ!"
  },
  {
    "id": 34,
    "file": "IMG-20261023-WA0048.jpg",
    "category": "saree",
    "title_en": "Dressed to Kill in Traditional Attire",
    "caption_en": "How many times have I warned you not to look this breathtaking in a saree? You're guilty of stealing my heart on repeat!",
    "title_bn": "শাড়িতে পাগল করা সাজ",
    "caption_bn": "কতবার বলেছি শাড়ি পরলে এত মিষ্টি করে তাকাবি না! আবার ঘায়েল করে দিলি তো আমায়?"
  },
  {
    "id": 35,
    "file": "IMG-20261023-WA0049.jpg",
    "category": "festive",
    "title_en": "Forever & Always Mine",
    "caption_en": "Happy Birthday, my sweet little Sneha! Today, tomorrow, and until my very last breath—I will love you endlessly.",
    "title_bn": "চিরকালের জন্য শুধুই আমার",
    "caption_bn": "শুভ জন্মদিন আমার ছোট্ট স্নেহা! আজ, কাল আর জীবনের শেষ নিঃশ্বাস পর্যন্ত তোকে এভাবেই ভালোবেসে যাব।"
  }
];

const LOVE_REASONS_EN = [
  "1. Your legendary Sneha pout—it can disarm my worst mood in less than three seconds flat! 😘",
  "2. That gentle, shy smile you make when you tuck your hair behind your ear while fixing your saree. 🌸",
  "3. The hilarious, adorable faces you make while eating spicy phuchka, followed by accusing me of laughing! 🌶️",
  "4. Threatening 'I will never talk to you again', and then texting 'Did you eat?' exactly 10 minutes later! 😂",
  "5. The depth in your kajal-lined eyes—a sweet mystery I could spend a lifetime exploring. ✨",
  "6. Your peaceful, sleeping face, looking so innocent that all the gentleness in the world seems gathered there. 🌙",
  "7. A traditional saree, a tiny black bindi, and that little nose ring... nobody in the world wears it better than you! 🌹",
  "8. The way you squeeze my hand on difficult days and whisper, 'I'm right here beside you, don't worry.' ❤️",
  "9. Suddenly pulling my sleeve or locking your fingers in mine when we're walking together. 👫",
  "10. That sweet little dimple/fold on your cheek whenever you burst out laughing. 💖",
  "11. All the cute, unfiltered silliness and drama you only show in front of me and no one else! 👑",
  "12. Because you are Sneha, my one and only Sneha—and there is no one else like you in the entire universe! 💍"
];
const LOVE_REASONS_BN = [
  "১. তোর ওই বিখ্যাত স্নেহা পাউট—যেটা দেখলে আমার শত রাগ এক সেকেন্ডে গলে জল হয়ে যায়! 😘",
  "২. শাড়ির কুঁচি ঠিক করতে গিয়ে চুল কানে গুঁজে দিয়ে তোর সেই মিষ্টি লাজুক চাহনি। 🌸",
  "৩. ফুচকা খাওয়ার সময় তোর মুখের এক্সপ্রেশন, আর ঝাল লাগলে আমাকে চোখ রাঙানো! 🌶️",
  "৪. হুটহাট রেগে গিয়ে বলা—'তোমার সাথে আর কথাই বলব না', আর তার ঠিক দশ মিনিট পরেই 'খেয়েছো?' টেক্সট পাঠানো! 😂",
  "৫. তোর চোখের কাজলের সেই গভীর মায়া, যার ফাঁদে আমি স্বেচ্ছায় সারাজীবন বন্দি থাকতে চাই। ✨",
  "৬. তোর ঘুমন্ত নিষ্পাপ মুখটা, যখন মনে হয় পৃথিবীর সমস্ত পবিত্রতা তোর চোখে এসে জড়ো হয়েছে। 🌙",
  "৭. কপালে ছোট্ট কালো টিপ আর নাকে নথ... সত্যি বলছি তুই ছাড়া আর কাউকে এতে এত মারাত্মক মিষ্টি লাগে না! 🌹",
  "৮. আমার খারাপ দিনগুলোতে তোর হাতটা শক্ত করে ধরে বলা—'আমি তো আছি পাশে, চিন্তা করছ কেন?' ❤️",
  "৯. তোর সাথে হেঁটে যাওয়ার সময় হঠাৎ আমার হাতটা টেনে নিজের হাতের মুঠোয় বন্দি করে নেওয়া। 👫",
  "১০. তোর ওই মিষ্টি চিবুকের তিল আর খিলখিলিয়ে হাসলে গালের ওই মিষ্টি ভাঁজ। 💖",
  "১১. তোর সেই পাগলামি আর ন্যাকামিগুলো, যা দুনিয়ার সামনে নয়—কেবল আমার সামনেই তুই করিস! 👑",
  "১২. সবশেষে—তুই আমার স্নেহা, শুধুই আমার স্নেহা! যার বিকল্প এই গোটা ব্রহ্মাণ্ডে আর দ্বিতীয়টি নেই! 💍"
];

const COMPLIMENTS_EN = [
  "That world-famous Sneha pout melts away any bad day in a second! 😘",
  "Tucking your hair behind your ear while fixing your saree pleats... breathtaking! 🌺",
  "Your hilarious spicy-food expressions and that bright laugh! ✨",
  "Feigning drama for 5 minutes and texting back with love—my favorite queen! 👑",
  "I love you with every beat of my heart, Sneha! Happy Birthday Sneha! 💖"
];
const COMPLIMENTS_BN = [
  "তোর ওই বিখ্যাত পাউট—যেটা দেখলে শত রাগ এক সেকেন্ডে গলে জল! 😘",
  "শাড়ির কুঁচি ঠিক করতে গিয়ে তোর ওই লাজুক চাহনি... পুরো ঘায়েল আমি! 🌺",
  "তোর ফুচকা খাওয়ার এক্সপ্রেশন আর মিষ্টি হাসির কোনো তুলনা নেই! ✨",
  "রাগ করে 'কথা বলব না' বলে আবার ১০ মিনিট পরেই খোঁজ নেওয়া—আমার ড্রামা কুইন! 👑",
  "বুকের সবটুকু দিয়ে তোকে ভালোবাসি স্নেহা, হ্যাপি বার্থডে আমার স্নেহা! 💖"
];

function getPhotoTitle(p) {
  return currentLang === 'en' ? (p.title_en || p.title) : (p.title_bn || p.title);
}

function getPhotoCaption(p) {
  return currentLang === 'en' ? (p.caption_en || p.caption) : (p.caption_bn || p.caption);
}


// --- MAGIC CURSOR SPARKLE TRAIL ---
class MagicCursorTrail {
  constructor() {
    this.symbols = ["❤️", "💖", "✨", "🌸", "⭐", "💫", "🌹"];
    this.lastTime = 0;
    this.init();
  }
  init() {
    window.addEventListener("pointermove", (e) => this.spawn(e.clientX, e.clientY));
    window.addEventListener("touchmove", (e) => {
      if (e.touches && e.touches[0]) {
        this.spawn(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });
  }
  spawn(x, y) {
    const now = performance.now();
    if (now - this.lastTime < 45) return;
    this.lastTime = now;
    const el = document.createElement("span");
    el.className = "cursor-sparkle";
    el.textContent = this.symbols[Math.floor(Math.random() * this.symbols.length)];
    const size = Math.random() * 14 + 10;
    const rot = (Math.random() - 0.5) * 40;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.fontSize = `${size}px`;
    el.style.transform = `translate(-50%, -50%) rotate(${rot}deg)`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 850);
  }
}

// --- LANGUAGE SWITCHER CONTROLLER ---
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("birthday_lang", lang);
  document.documentElement.lang = (lang === "en" ? "en" : "bn");

  // Update elements with data-en and data-bn attributes
  document.querySelectorAll("[data-en][data-bn]").forEach(el => {
    const val = (lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-bn"));
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });

  // Toggle letter bodies
  document.querySelectorAll(".letter-version-en").forEach(el => el.classList.toggle("hidden", lang !== "en"));
  document.querySelectorAll(".letter-version-bn").forEach(el => el.classList.toggle("hidden", lang !== "bn"));

  // Toggle scratch card secret texts
  const scratchEn = document.getElementById("scratch-secret-en");
  const scratchBn = document.getElementById("scratch-secret-bn");
  if (scratchEn && scratchBn) {
    scratchEn.classList.toggle("hidden", lang !== "en");
    scratchBn.classList.toggle("hidden", lang !== "bn");
  }

  // Update Language toggle button label
  const langLabel = document.getElementById("lang-label");
  if (langLabel) {
    langLabel.textContent = (lang === "en" ? "বাংলা" : "ENG");
  }

  // Update Love reasons jar bubble
  const jarBubble = document.getElementById("jar-bubble-text");
  if (jarBubble) {
    jarBubble.textContent = (lang === "en" ? "“Click the button to reveal another reason! 💖”" : "“বটনে ক্লিক কর, নতুন কারণ জানতে পারবি! 💖”");
  }

  // Re-render gallery with new language
  if (typeof initStage3 === "function") {
    const activeTab = document.querySelector(".gallery-tabs .tab-btn.active");
    const filter = activeTab ? activeTab.dataset.filter : "all";
    const masonryGrid = document.getElementById("photo-masonry-grid");
    const polaroidView = document.getElementById("polaroid-deck-view");

    if (filter === "polaroid") {
      if (typeof renderPolaroidDeck === "function") renderPolaroidDeck();
    } else {
      const filtered = filter === "all" ? PHOTOS_DATA : PHOTOS_DATA.filter(p => p.category === filter);
      if (masonryGrid) {
        masonryGrid.innerHTML = filtered.map(photo => `
          <div class="masonry-card" data-id="${photo.id}">
            <div class="card-img-wrap">
              <img src="./${photo.file}" alt="${getPhotoTitle(photo)}" loading="lazy">
              <span class="card-overlay-badge">${getCategoryBadge(photo.category)}</span>
            </div>
            <div class="card-info">
              <h3 class="card-title">${getPhotoTitle(photo)}</h3>
              <p class="card-caption">${getPhotoCaption(photo)}</p>
            </div>
          </div>
        `).join("");

        masonryGrid.querySelectorAll(".masonry-card").forEach(card => {
          card.addEventListener("click", () => {
            const id = parseInt(card.dataset.id);
            const pIndex = PHOTOS_DATA.findIndex(p => p.id === id);
            openPhotoModal(pIndex);
          });
        });
      }
    }
  }

  // Re-render ambient background
  initAmbientMosaic();
}

function getCategoryBadge(cat) {
  if (currentLang === "en") {
    if (cat === "saree") return "Saree 🌺";
    if (cat === "candid") return "Cute 😘";
    return "Festive ✨";
  } else {
    if (cat === "saree") return "শাড়ি 🌺";
    if (cat === "candid") return "কিউট 😘";
    return "উৎসব ✨";
  }
}

class RomanticAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.soundFxEnabled = true;
    this.customAudio = null;
    this.timer = null;
    this.noteIndex = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMusic() {
    this.init();
    if (this.customAudio) {
      if (this.customAudio.paused) {
        this.customAudio.play();
        this.isPlaying = true;
      } else {
        this.customAudio.pause();
        this.isPlaying = false;
      }
      return this.isPlaying;
    }

    if (this.isPlaying) {
      this.stopSynthesizer();
    } else {
      this.startSynthesizer();
    }
    return this.isPlaying;
  }

  startSynthesizer() {
    this.isPlaying = true;
    // Romantic chords (Cmaj9, Am9, Fmaj7, Gsus4)
    const chords = [
      [261.63, 329.63, 392.00, 493.88, 587.33], // Cmaj9
      [220.00, 261.63, 329.63, 392.00, 493.88], // Am9
      [174.61, 261.63, 329.63, 349.23, 440.00], // Fmaj7
      [196.00, 293.66, 392.00, 440.00, 523.25]  // Gsus4
    ];

    let chordIdx = 0;
    const playNextNote = () => {
      if (!this.isPlaying) return;
      const currentChord = chords[chordIdx];
      const noteFreq = currentChord[this.noteIndex % currentChord.length];
      
      this.playKalimbaTone(noteFreq, 1.8);
      
      this.noteIndex++;
      if (this.noteIndex % currentChord.length === 0) {
        chordIdx = (chordIdx + 1) % chords.length;
      }

      const nextInterval = (this.noteIndex % 2 === 0) ? 550 : 380;
      this.timer = setTimeout(playNextNote, nextInterval);
    };

    playNextNote();
  }

  stopSynthesizer() {
    this.isPlaying = false;
    if (this.timer) clearTimeout(this.timer);
  }

  playKalimbaTone(freq, duration = 1.2) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    // Warm envelope
    gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  // SFX: Heartbeat Thud
  playHeartbeat() {
    if (!this.soundFxEnabled) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(80, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.18);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }

  // SFX: Arrow Shoot Whoosh
  playArrowWhoosh() {
    if (!this.soundFxEnabled) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.35);
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.35);
  }

  // SFX: Heart Shatter Shimmer
  playShatterSparkle() {
    if (!this.soundFxEnabled) return;
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playKalimbaTone(freq, 1.4);
      }, idx * 60);
    });
  }

  // SFX: Pop Sound
  playPop() {
    if (!this.soundFxEnabled) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(700, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  // SFX: Candle Blow & Fanfare
  playCelebrationFanfare() {
    if (!this.soundFxEnabled) return;
    this.init();
    const fanfare = [
      { f: 523.25, d: 200 },
      { f: 523.25, d: 200 },
      { f: 587.33, d: 350 },
      { f: 523.25, d: 350 },
      { f: 698.46, d: 400 },
      { f: 659.25, d: 700 }
    ];
    let time = 0;
    fanfare.forEach(item => {
      setTimeout(() => {
        this.playKalimbaTone(item.f, item.d / 1000 * 1.5);
      }, time);
      time += item.d;
    });
  }

  loadCustomAudio(file) {
    const url = URL.createObjectURL(file);
    if (this.customAudio) {
      this.customAudio.pause();
    }
    this.stopSynthesizer();
    this.customAudio = new Audio(url);
    this.customAudio.loop = true;
    this.customAudio.play();
    this.isPlaying = true;
  }
}

const audio = new RomanticAudioEngine();

// --- 3. AMBIENT PHOTO COLLAGE STREAM: Rotating Photos Moving Upward in Infinite Lanes ---
function initAmbientMosaic() {
  const container = document.getElementById("collage-streams");
  if (!container) return;
  container.innerHTML = "";

  const numColumns = 4;
  const cols = [[], [], [], []];
  
  PHOTOS_DATA.forEach((photo, idx) => {
    cols[idx % numColumns].push(photo);
  });

  const badgesEn = [
    "My Queen 👑", "Sweet Sneha 🌸", "Pout Queen 😘", "Nose Ring ✨", 
    "Saree Magic 🌺", "Sneha ❤️", "My Whole World 💍", "Forever Yours 💖", 
    "Cute Sneha 🌷", "Pure Beauty 🌹", "Adore You 💫", "Happy Birthday 🎂"
  ];

  const badgesBn = [
    "স্নেহা ❤️", "Sweet Sneha 🌸", "আমার রানি 👑", "Pout Queen 😘", 
    "নাকছাবি ✨", "শাড়ির জাদু 🌺", "Miss You 💖", "My Heart 💍", 
    "Cute Sneha 🌷", "শুধু আমারই 🌹", "আদুরে মুখ 💫", "Happy Birthday 🎂"
  ];

  const badges = currentLang === 'en' ? badgesEn : badgesBn;
  const rotations = [-9, 8, -6, 11, -12, 7, -5, 10, -8, 6];

  cols.forEach((colPhotos, colIndex) => {
    const colEl = document.createElement("div");
    colEl.className = "collage-column";

    const trackEl = document.createElement("div");
    trackEl.className = "collage-track";

    const speeds = [52, 68, 46, 60];
    trackEl.style.setProperty("--speed", `${speeds[colIndex % speeds.length]}s`);

    const fullList = [...colPhotos, ...colPhotos];

    fullList.forEach((photo, pIdx) => {
      const card = document.createElement("div");
      card.className = "collage-card";
      
      const rot = rotations[(colIndex * 3 + pIdx) % rotations.length];
      const swayAngle = (rot > 0 ? -1 : 1) * 4;
      const swayDur = 6 + (pIdx % 4);
      const tapeRot = ((pIdx % 2 === 0 ? 1 : -1) * (3 + (pIdx % 3)));
      const badge = badges[(colIndex * 4 + pIdx) % badges.length];

      card.style.setProperty("--rot", `${rot}deg`);
      card.style.setProperty("--sway-angle", `${swayAngle}deg`);
      card.style.setProperty("--sway-dur", `${swayDur}s`);
      card.style.setProperty("--tape-rot", `${tapeRot}deg`);

      const photoTitle = getPhotoTitle(photo);

      card.innerHTML = `
        <div class="collage-card-tape"></div>
        <div class="collage-card-img-box">
          <img src="./${photo.file}" alt="${photoTitle}" loading="lazy">
        </div>
        <div class="collage-card-caption">${badge}</div>
      `;

      trackEl.appendChild(card);
    });

    colEl.appendChild(trackEl);
    container.appendChild(colEl);
  });
}

class FloatingParticles {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.resize();
    window.addEventListener("resize", () => this.resize());
    this.initParticles();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  initParticles() {
    const count = window.innerWidth < 768 ? 20 : 35;
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 8 + 4,
        speedY: Math.random() * 0.8 + 0.3,
        speedX: Math.sin(Math.random() * Math.PI) * 0.5,
        type: Math.random() > 0.4 ? "heart" : "petal",
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.6 + 0.2
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach(p => {
      p.y -= p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;

      if (p.y < -20) {
        p.y = this.canvas.height + 20;
        p.x = Math.random() * this.canvas.width;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = p.opacity;

      if (p.type === "heart") {
        this.ctx.fillStyle = "#ff4b6e";
        this.ctx.font = `${p.size * 1.8}px serif`;
        this.ctx.fillText("♥", 0, 0);
      } else {
        this.ctx.fillStyle = "#f5af19";
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, p.size, p.size / 2, 0, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();
    });

    requestAnimationFrame(() => this.animate());
  }
}

// Confetti Cannon
class ConfettiCannon {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.resize();
    window.addEventListener("resize", () => this.resize());
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  blast(originX = window.innerWidth / 2, originY = window.innerHeight / 2, count = 80) {
    const colors = ["#ff3366", "#ffd700", "#f5af19", "#ff758c", "#00ff88", "#ffffff"];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4;
      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 15,
        life: 1,
        decay: Math.random() * 0.015 + 0.01
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25; // gravity
      p.vx *= 0.98;
      p.rotation += p.rotSpeed;
      p.life -= p.decay;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = p.life;
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.4);
      this.ctx.restore();
    }
    requestAnimationFrame(() => this.animate());
  }
}

let confettiEngine = null;

// --- 4. STAGE CONTROLLER ---
let currentStageIndex = 1;
const TOTAL_STAGES = 6;
const STAGE_NAMES = [
  "১. সারপ্রাইজ",
  "২. তীরবিদ্ধ মন",
  "৩. রূপের ডালি",
  "৪. মজার গেম",
  "৫. কেক কাটিং",
  "৬. প্রেমপত্র"
];

function goToStage(index) {
  if (index < 1 || index > TOTAL_STAGES) return;
  currentStageIndex = index;

  // Update screens
  document.querySelectorAll(".stage-screen").forEach(screen => {
    screen.classList.remove("active");
  });
  const targetScreen = document.getElementById(`stage-${index}`);
  if (targetScreen) targetScreen.classList.add("active");

  // Update nav buttons
  const langBtn = document.getElementById("lang-toggle-btn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      audio.playPop();
      setLanguage(currentLang === "en" ? "bn" : "en");
    });
  }

  document.querySelectorAll(".nav-step").forEach(step => {
    const sIdx = parseInt(step.dataset.step);
    step.classList.toggle("active", sIdx === index);
  });

  // Update top progress bar & counter
  const fill = document.getElementById("progress-bar");
  if (fill) fill.style.width = `${(index / TOTAL_STAGES) * 100}%`;
  const stepLabel = document.getElementById("current-step-label");
  if (stepLabel) {
    const bengaliNums = ["১", "২", "৩", "৪", "৫", "৬"];
    stepLabel.textContent = bengaliNums[index - 1];
  }

  // Update bottom dock
  const dockStageName = document.getElementById("dock-stage-name");
  if (dockStageName) dockStageName.textContent = STAGE_NAMES[index - 1];

  // Auto trigger background music if not yet started
  if (!audio.isPlaying) {
    audio.toggleMusic();
    updateMusicUI(true);
  }

  // Smooth scroll to top of story
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateMusicUI(playing) {
  const btn = document.getElementById("music-toggle-btn");
  const status = document.getElementById("music-status");
  if (btn) btn.classList.toggle("playing", playing);
  if (status) status.textContent = playing ? "Playing 🎶" : "Paused ⏸";
}

// --- 5. STAGE 1: ROYAL GIFT BOX UNBOXING ---
function initStage1() {
  const box = document.getElementById("royal-gift-box");
  const startBtn = document.getElementById("start-journey-btn");

  const openBox = () => {
    if (box.classList.contains("opened")) return;
    box.classList.add("opened");
    audio.playHeartbeat();
    setTimeout(() => {
      audio.playShatterSparkle();
      if (confettiEngine) confettiEngine.blast(window.innerWidth / 2, window.innerHeight / 2, 70);
    }, 300);
  };

  if (box) box.addEventListener("click", openBox);
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      openBox();
      setTimeout(() => goToStage(2), 700);
    });
  }
}

// --- 6. STAGE 2: CUPID ARROW & HEART SHATTER ANIMATION ---
function initStage2() {
  const shootBtn = document.getElementById("shoot-arrow-btn");
  const resetBtn = document.getElementById("reset-arrow-btn");
  const arrow = document.getElementById("arrow-projectile");
  const heart = document.getElementById("giant-heart");
  const portrait = document.getElementById("revealed-portrait");
  const loveMsg = document.getElementById("arrow-love-msg");

  let isHit = false;

  const shootArrow = () => {
    if (isHit) return;
    isHit = true;
    shootBtn.classList.add("hidden");

    // Play bow whoosh
    audio.playArrowWhoosh();
    arrow.classList.add("shooting");

    setTimeout(() => {
      arrow.classList.remove("shooting");
      arrow.classList.add("hit");

      // Shatter heart
      audio.playHeartbeat();
      audio.playShatterSparkle();
      heart.classList.add("shattered");

      // Confetti burst from heart
      const rect = heart.getBoundingClientRect();
      if (confettiEngine) confettiEngine.blast(rect.left + rect.width / 2, rect.top + rect.height / 2, 90);

      // Reveal portrait & text
      setTimeout(() => {
        portrait.classList.add("revealed");
        loveMsg.classList.remove("hidden");
        resetBtn.classList.remove("hidden");
      }, 400);

    }, 550);
  };

  const resetArrow = () => {
    isHit = false;
    arrow.classList.remove("hit", "shooting");
    heart.classList.remove("shattered");
    portrait.classList.remove("revealed");
    loveMsg.classList.add("hidden");
    resetBtn.classList.add("hidden");
    shootBtn.classList.remove("hidden");
  };

  if (shootBtn) shootBtn.addEventListener("click", shootArrow);
  if (heart) heart.addEventListener("click", shootArrow);
  if (resetBtn) resetBtn.addEventListener("click", resetArrow);
}

// --- 7. STAGE 3: PHOTO GALLERY & POLAROID STACK ---
let currentModalIndex = 0;
let currentDeckIndex = 0;

function initStage3() {
  const masonryGrid = document.getElementById("photo-masonry-grid");
  const polaroidStage = document.getElementById("polaroid-stage");
  const polaroidView = document.getElementById("polaroid-deck-view");

  // Render Masonry Grid with all 35 photos
  const renderMasonry = (filter = "all") => {
    const filtered = filter === "all" ? PHOTOS_DATA : PHOTOS_DATA.filter(p => p.category === filter);
    masonryGrid.innerHTML = filtered.map((photo) => `
      <div class="masonry-card" data-id="${photo.id}">
        <div class="card-img-wrap">
          <img src="./${photo.file}" alt="${getPhotoTitle(photo)}" loading="lazy">
          <span class="card-overlay-badge">${getCategoryBadge(photo.category)}</span>
        </div>
        <div class="card-info">
          <h3 class="card-title">${getPhotoTitle(photo)}</h3>
          <p class="card-caption">${getPhotoCaption(photo)}</p>
        </div>
      </div>
    `).join("");

    // Add click listeners to cards
    masonryGrid.querySelectorAll(".masonry-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = parseInt(card.dataset.id);
        const pIndex = PHOTOS_DATA.findIndex(p => p.id === id);
        openPhotoModal(pIndex);
      });
    });
  };

  function getCategoryBadge(cat) {
    if (cat === "saree") return "শাড়ি 🌺";
    if (cat === "candid") return "কিউট 😘";
    return "উৎসব ✨";
  }

  // Filter tab buttons
  document.querySelectorAll(".gallery-tabs .tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".gallery-tabs .tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      if (filter === "polaroid") {
        masonryGrid.classList.add("hidden");
        polaroidView.classList.remove("hidden");
        renderPolaroidDeck();
      } else {
        masonryGrid.classList.remove("hidden");
        polaroidView.classList.add("hidden");
        renderMasonry(filter);
      }
    });
  });

  // Render 3D Polaroid Deck
  const renderPolaroidDeck = () => {
    polaroidStage.innerHTML = "";
    // Display up to 5 cards in stack
    const activeCards = PHOTOS_DATA.slice(currentDeckIndex, currentDeckIndex + 5);
    activeCards.forEach((photo, idx) => {
      const card = document.createElement("div");
      card.className = "polaroid-card";
      const rotation = (idx % 2 === 0 ? 1 : -1) * (idx * 3.5);
      const translateY = idx * 6;
      card.style.transform = `translateY(${translateY}px) rotate(${rotation}deg) scale(${1 - idx * 0.04})`;
      card.style.zIndex = 10 - idx;

      card.innerHTML = `
        <div class="polaroid-tape"></div>
        <div class="polaroid-photo-box">
          <img src="./${photo.file}" alt="${getPhotoTitle(photo)}">
        </div>
        <div class="polaroid-handwriting">${getPhotoTitle(photo)}</div>
      `;

      if (idx === 0) {
        card.addEventListener("click", nextPolaroid);
      }

      polaroidStage.appendChild(card);
    });

    const counter = document.getElementById("deck-counter");
    if (counter) counter.textContent = `${currentDeckIndex + 1} / ${PHOTOS_DATA.length}`;
  };

  const nextPolaroid = () => {
    audio.playPop();
    currentDeckIndex = (currentDeckIndex + 1) % PHOTOS_DATA.length;
    renderPolaroidDeck();
  };

  const prevPolaroid = () => {
    audio.playPop();
    currentDeckIndex = (currentDeckIndex - 1 + PHOTOS_DATA.length) % PHOTOS_DATA.length;
    renderPolaroidDeck();
  };

  document.getElementById("deck-next-btn")?.addEventListener("click", nextPolaroid);
  document.getElementById("deck-prev-btn")?.addEventListener("click", prevPolaroid);

  // Initial render
  renderMasonry("all");
}

// Lightbox Modal
function openPhotoModal(index) {
  currentModalIndex = index;
  const photo = PHOTOS_DATA[index];
  const modal = document.getElementById("photo-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalCaption = document.getElementById("modal-caption");
  const modalCounter = document.getElementById("modal-counter");

  if (!modal || !photo) return;
  modalImg.src = `./${photo.file}`;
  modalTitle.textContent = getPhotoTitle(photo);
  modalCaption.textContent = getPhotoCaption(photo);
  modalCounter.textContent = `${index + 1} / ${PHOTOS_DATA.length}`;

  modal.classList.remove("hidden");
  audio.playPop();
}

function initModalControls() {
  const modal = document.getElementById("photo-modal");
  const closeBtn = document.getElementById("modal-close");
  const backdrop = document.getElementById("modal-backdrop");
  const prevBtn = document.getElementById("modal-prev-btn");
  const nextBtn = document.getElementById("modal-next-btn");

  const closeModal = () => modal.classList.add("hidden");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentModalIndex = (currentModalIndex + 1) % PHOTOS_DATA.length;
      openPhotoModal(currentModalIndex);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentModalIndex = (currentModalIndex - 1 + PHOTOS_DATA.length) % PHOTOS_DATA.length;
      openPhotoModal(currentModalIndex);
    });
  }
}

// --- 8. STAGE 4: CUTE MINI-GAMES ---
function initStage4() {
  // Tab switcher
  document.querySelectorAll(".game-selector-pills .game-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".game-selector-pills .game-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const game = btn.dataset.game;

      document.querySelectorAll(".game-panel").forEach(p => p.classList.add("hidden"));
      const activePanel = document.getElementById(`game-${game}-panel`);
      if (activePanel) activePanel.classList.remove("hidden");
    });
  });

  // GAME 1: CATCHER GAME
  initCatcherGame();

  // GAME 2: SCRATCH CARD
  initScratchCard();

  // GAME 3: LOVE METER
  initLoveMeter();
}

function initCatcherGame() {
  const canvas = document.getElementById("catcher-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let isRunning = false;
  let score = 0;
  let unlockedCompliments = 0;

  const basket = {
    x: canvas.width / 2 - 45,
    y: canvas.height - 40,
    width: 90,
    height: 30,
    speed: 18
  };

  const COMPLIMENTS = [
    "তোর ওই বিখ্যাত পাউট—যেটা দেখলে শত রাগ এক সেকেন্ডে গলে জল! 😘",
    "শাড়ির কুঁচি ঠিক করতে গিয়ে তোর ওই লাজুক চাহনি... পুরো ঘায়েল আমি! 🌺",
    "তোর ফুচকা খাওয়ার এক্সপ্রেশন আর মিষ্টি হাসির কোনো তুলনা নেই! ✨",
    "রাগ করে 'কথা বলব না' বলে আবার ১০ মিনিট পরেই খোঁজ নেওয়া—আমার ড্রামা কুইন! 👑",
    "বুকের সবটুকু দিয়ে তোকে ভালোবাসি স্নেহা, হ্যাপি বার্থডে আমার স্নেহা! 💖"
  ];

  let items = [];
  const ITEM_TYPES = [
    { symbol: "💖", score: 1 },
    { symbol: "🌸", score: 1 },
    { symbol: "💎", score: 2 },
    { symbol: "👑", score: 3 }
  ];

  function spawnItem() {
    if (!isRunning) return;
    const type = ITEM_TYPES[Math.floor(Math.random() * ITEM_TYPES.length)];
    items.push({
      x: Math.random() * (canvas.width - 30) + 15,
      y: -20,
      speed: Math.random() * 2 + 2,
      type: type
    });
  }

  let spawnTimer = null;

  function update() {
    if (!isRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Basket
    ctx.fillStyle = "#f5af19";
    ctx.beginPath();
    ctx.roundRect(basket.x, basket.y, basket.width, basket.height, [8, 8, 14, 14]);
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#1a0410";
    ctx.font = "bold 13px 'Hind Siliguri', sans-serif";
    ctx.fillText("🧺 স্নেহার বাস্কেট", basket.x + 8, basket.y + 20);

    // Draw Items
    for (let i = items.length - 1; i >= 0; i--) {
      const it = items[i];
      it.y += it.speed;

      ctx.font = "24px serif";
      ctx.fillText(it.type.symbol, it.x - 12, it.y);

      // Collision detection with basket
      if (
        it.y >= basket.y &&
        it.y <= basket.y + basket.height + 10 &&
        it.x >= basket.x &&
        it.x <= basket.x + basket.width
      ) {
        audio.playPop();
        score += it.type.score;
        document.getElementById("catcher-score").textContent = score;

        // Check compliments unlock
        const newUnlocked = Math.min(5, Math.floor(score / 5));
        if (newUnlocked > unlockedCompliments) {
          unlockedCompliments = newUnlocked;
          document.getElementById("compliments-unlocked").textContent = `${unlockedCompliments} / 5`;
          document.getElementById("catcher-toast-text").textContent = (currentLang === "en" ? COMPLIMENTS_EN : COMPLIMENTS_BN)[unlockedCompliments - 1];
          if (confettiEngine) confettiEngine.blast(canvas.offsetLeft + it.x, canvas.offsetTop + it.y, 40);
        }

        items.splice(i, 1);
        continue;
      }

      // Remove out of bounds
      if (it.y > canvas.height + 20) {
        items.splice(i, 1);
      }
    }

    requestAnimationFrame(update);
  }

  const startBtn = document.getElementById("start-catcher-btn");
  const pauseBtn = document.getElementById("pause-catcher-btn");

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      if (isRunning) return;
      isRunning = true;
      audio.init();
      spawnTimer = setInterval(spawnItem, 800);
      update();
    });
  }

  if (pauseBtn) {
    pauseBtn.addEventListener("click", () => {
      isRunning = false;
      if (spawnTimer) clearInterval(spawnTimer);
    });
  }

  // Keyboard controls
  window.addEventListener("keydown", (e) => {
    if (!isRunning) return;
    if (e.key === "ArrowLeft" || e.key === "a") {
      basket.x = Math.max(0, basket.x - basket.speed);
    } else if (e.key === "ArrowRight" || e.key === "d") {
      basket.x = Math.min(canvas.width - basket.width, basket.x + basket.speed);
    }
  });

  // Touch & Mouse drag
  canvas.addEventListener("mousemove", (e) => {
    if (!isRunning) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * canvas.width;
    basket.x = Math.max(0, Math.min(canvas.width - basket.width, mouseX - basket.width / 2));
  });

  canvas.addEventListener("touchmove", (e) => {
    if (!isRunning) return;
    e.preventDefault();
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const touchX = ((touch.clientX - rect.left) / rect.width) * canvas.width;
    basket.x = Math.max(0, Math.min(canvas.width - basket.width, touchX - basket.width / 2));
  }, { passive: false });

  document.getElementById("ctrl-left")?.addEventListener("click", () => {
    basket.x = Math.max(0, basket.x - 35);
  });
  document.getElementById("ctrl-right")?.addEventListener("click", () => {
    basket.x = Math.min(canvas.width - basket.width, basket.x + 35);
  });
}

function initScratchCard() {
  const canvas = document.getElementById("scratch-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let isDrawing = false;
  let scratchedPixels = 0;
  const totalPixels = canvas.width * canvas.height;

  const initFoil = () => {
    ctx.globalCompositeOperation = "source-over";
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#cfcfcf");
    gradient.addColorStop(0.5, "#a8a8a8");
    gradient.addColorStop(1, "#e6e6e6");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#666";
    ctx.font = "bold 16px 'Hind Siliguri', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("🪙 এখানে ঘষে রহস্য উন্মোচন করো!", canvas.width / 2, canvas.height / 2);
  };

  initFoil();

  const scratch = (x, y) => {
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    audio.playPop();
  };

  const getPos = (e) => {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: ((clientX - rect.left) / rect.width) * canvas.width,
      y: ((clientY - rect.top) / rect.height) * canvas.height
    };
  };

  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    const pos = getPos(e);
    scratch(pos.x, pos.y);
  });

  window.addEventListener("mouseup", () => isDrawing = false);

  canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;
    const pos = getPos(e);
    scratch(pos.x, pos.y);
  });

  canvas.addEventListener("touchstart", (e) => {
    isDrawing = true;
    const pos = getPos(e);
    scratch(pos.x, pos.y);
  });

  canvas.addEventListener("touchmove", (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getPos(e);
    scratch(pos.x, pos.y);
  }, { passive: false });

  document.getElementById("reset-scratch-btn")?.addEventListener("click", () => {
    initFoil();
  });
}

function initLoveMeter() {
  const calcBtn = document.getElementById("calculate-love-btn");
  const meterFill = document.getElementById("meter-fill");
  const meterScore = document.getElementById("meter-score");
  const meterVerdict = document.getElementById("meter-verdict");

  if (!calcBtn) return;

  calcBtn.addEventListener("click", () => {
    audio.playHeartbeat();
    calcBtn.disabled = true;
    let current = 0;
    const target = 1000000;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 85000 + 40000);
      if (current >= target) {
        current = target;
        clearInterval(interval);
        meterScore.textContent = "1,000,000% ❤️";
        meterFill.style.width = "100%";
        if (currentLang === "en") {
          meterVerdict.innerHTML = "<strong>SYSTEM OVERLOAD! 💥</strong><br>My love for you broke the meter and overflowed into infinity... No machine on earth could ever measure how crazy I am about you!";
        } else {
          meterVerdict.innerHTML = "<strong>মিটার ক্র্যাশ করেছে! 💥</strong><br>আমার বুকে তোর ভালোবাসার পারদ ইনফিনিটি পার হয়ে গেছে... কোনো মিটার দিয়ে স্নেহার প্রতি এই পাগলের ভালোবাসা মাপা অসম্ভব!";
        }
        audio.playCelebrationFanfare();
        if (confettiEngine) confettiEngine.blast(window.innerWidth / 2, window.innerHeight / 2, 80);
        calcBtn.disabled = false;
      } else {
        meterScore.textContent = `${current.toLocaleString()}%`;
        meterFill.style.width = `${(current / target) * 100}%`;
      }
    }, 50);
  });
}

// --- 9. STAGE 5: INTERACTIVE CAKE & CANDLE BLOW ---
function initStage5() {
  const blowBtn = document.getElementById("blow-candles-btn");
  const cutCakeBtn = document.getElementById("cut-cake-btn");
  const feedCakeBtn = document.getElementById("feed-cake-btn");
  const candleActions = document.getElementById("candle-actions");
  const cutActions = document.getElementById("cut-cake-actions");
  const knife = document.getElementById("cake-knife");
  const cakeSlice = document.getElementById("cake-slice-piece");
  const wishBanner = document.getElementById("cake-wish-banner");

  const candles = document.querySelectorAll(".candle");
  let blownCount = 0;

  const blowAllCandles = () => {
    candles.forEach((c, idx) => {
      setTimeout(() => {
        c.classList.add("blown");
      }, idx * 100);
    });

    audio.playArrowWhoosh(); // breath whoosh

    setTimeout(() => {
      audio.playCelebrationFanfare();
      if (confettiEngine) confettiEngine.blast(window.innerWidth / 2, window.innerHeight / 2, 110);
      candleActions.classList.add("hidden");
      cutActions.classList.remove("hidden");
      knife.classList.remove("hidden");
      wishBanner.classList.remove("hidden");
    }, 600);
  };

  candles.forEach(candle => {
    candle.addEventListener("click", () => {
      if (!candle.classList.contains("blown")) {
        candle.classList.add("blown");
        audio.playPop();
        blownCount++;
        if (blownCount === candles.length) {
          blowAllCandles();
        }
      }
    });
  });

  if (blowBtn) blowBtn.addEventListener("click", blowAllCandles);

  if (cutCakeBtn) {
    cutCakeBtn.addEventListener("click", () => {
      knife.classList.add("cutting");
      audio.playPop();
      setTimeout(() => {
        knife.classList.add("hidden");
        cakeSlice.classList.remove("hidden");
        cutCakeBtn.classList.add("hidden");
        feedCakeBtn.classList.remove("hidden");
        if (confettiEngine) confettiEngine.blast(window.innerWidth / 2, window.innerHeight / 2, 60);
      }, 1200);
    });
  }

  if (feedCakeBtn) {
    feedCakeBtn.addEventListener("click", () => {
      audio.playShatterSparkle();
      cakeSlice.innerHTML = "<span>❤️ মিষ্টি মুখ সম্পন্ন! ভালোবাসা অফুরন্ত! 🎂</span>";
      if (confettiEngine) confettiEngine.blast(window.innerWidth / 2, window.innerHeight / 2, 80);
    });
  }
}

// --- 10. STAGE 6: LOVE LETTER, LOVE JAR & FIREWORKS ---
function initStage6() {
  const pickReasonBtn = document.getElementById("pick-reason-btn");
  const jarBubble = document.getElementById("jar-bubble-text");
  const fireworksBtn = document.getElementById("grand-fireworks-btn");
  const replayBtn = document.getElementById("replay-journey-btn");

  let reasonIndex = 0;

  if (pickReasonBtn) {
    pickReasonBtn.addEventListener("click", () => {
      audio.playPop();
      // handled above
      const activeReasons = (currentLang === "en" ? LOVE_REASONS_EN : LOVE_REASONS_BN); reasonIndex = (reasonIndex + 1) % activeReasons.length; jarBubble.textContent = activeReasons[reasonIndex];
      jarBubble.style.transform = "scale(1.05)";
      setTimeout(() => jarBubble.style.transform = "scale(1)", 200);
    });
  }

  if (fireworksBtn) {
    fireworksBtn.addEventListener("click", () => {
      audio.playCelebrationFanfare();
      // Multiple fireworks burst sequence
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const randX = Math.random() * (window.innerWidth - 200) + 100;
          const randY = Math.random() * (window.innerHeight / 2) + 100;
          if (confettiEngine) confettiEngine.blast(randX, randY, 70);
        }, i * 350);
      }
    });
  }

  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      goToStage(1);
    });
  }
}

// --- 11. NAVIGATION & EVENT BINDINGS ---
function initNavigation() {
  // Top header stage buttons
  const langBtn = document.getElementById("lang-toggle-btn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      audio.playPop();
      setLanguage(currentLang === "en" ? "bn" : "en");
    });
  }

  document.querySelectorAll(".nav-step").forEach(step => {
    step.addEventListener("click", () => {
      const stepIdx = parseInt(step.dataset.step);
      goToStage(stepIdx);
    });
  });

  // Next/Prev Buttons across stages
  document.querySelectorAll(".nav-next").forEach(btn => {
    btn.addEventListener("click", () => {
      const nextIdx = parseInt(btn.dataset.next);
      goToStage(nextIdx);
    });
  });

  document.querySelectorAll(".nav-prev").forEach(btn => {
    btn.addEventListener("click", () => {
      const prevIdx = parseInt(btn.dataset.prev);
      goToStage(prevIdx);
    });
  });

  // Bottom dock buttons
  document.getElementById("dock-prev-btn")?.addEventListener("click", () => {
    if (currentStageIndex > 1) goToStage(currentStageIndex - 1);
  });

  document.getElementById("dock-next-btn")?.addEventListener("click", () => {
    if (currentStageIndex < TOTAL_STAGES) goToStage(currentStageIndex + 1);
  });

  // Keyboard navigation (ArrowLeft & ArrowRight)
  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT") return;
    if (e.key === "ArrowRight") {
      if (currentStageIndex < TOTAL_STAGES) goToStage(currentStageIndex + 1);
    } else if (e.key === "ArrowLeft") {
      if (currentStageIndex > 1) goToStage(currentStageIndex - 1);
    }
  });

  // Music toggle button
  const musicToggleBtn = document.getElementById("music-toggle-btn");
  const audioPanel = document.getElementById("audio-panel");
  if (musicToggleBtn) {
    musicToggleBtn.addEventListener("click", () => {
      const playing = audio.toggleMusic();
      updateMusicUI(playing);
      if (audioPanel) audioPanel.classList.toggle("open");
    });
  }

  // Sound FX toggle
  const fxToggle = document.getElementById("sound-fx-toggle");
  if (fxToggle) {
    fxToggle.addEventListener("click", () => {
      audio.soundFxEnabled = !audio.soundFxEnabled;
      fxToggle.classList.toggle("active", audio.soundFxEnabled);
      fxToggle.textContent = audio.soundFxEnabled ? "🔔 সাউন্ড FX: অন" : "🔕 সাউন্ড FX: বন্ধ";
    });
  }

  // Custom audio file input
  const customAudioInput = document.getElementById("custom-audio-input");
  if (customAudioInput) {
    customAudioInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        audio.loadCustomAudio(file);
        updateMusicUI(true);
      }
    });
  }
}

// --- 12. INITIALIZATION ON DOM READY ---
document.addEventListener("DOMContentLoaded", () => {
  initAmbientMosaic();
  new FloatingParticles("particles-canvas");
  confettiEngine = new ConfettiCannon("effects-canvas");

  initNavigation();
  new MagicCursorTrail();
  setLanguage(currentLang);
  initModalControls();

  initStage1();
  initStage2();
  initStage3();
  initStage4();
  initStage5();
  initStage6();

  // First user interaction auto-starts audio
  const startAudioOnFirstClick = () => {
    if (!audio.isPlaying) {
      audio.toggleMusic();
      updateMusicUI(true);
    }
    window.removeEventListener("click", startAudioOnFirstClick);
    window.removeEventListener("touchstart", startAudioOnFirstClick);
  };
  window.addEventListener("click", startAudioOnFirstClick);
  window.addEventListener("touchstart", startAudioOnFirstClick);
});
