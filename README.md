# Dada Fast Food Restaurant - Website

## Kaise chalayein (VS Code)
1. Is folder ko VS Code mein kholein.
2. `index.html` par right-click karke **"Open with Live Server"** chunein, ya `index.html` ko double click karke Chrome/Edge mein khol lein.
3. Internet chalu hona chahiye, kyunki saari images ImgBB se load hoti hain (local `assets/images/` folder ki zarurat nahi).

## Images kahan se aa rahi hain
- Har image ka link `script.js` ke upar `ASSET_CANDIDATES` mein sabse pehle likha hai.
- `index.html` ke static images (logo, banner, interior) ka link seedha `src="..."` mein hai.
- Agar kisi image ko badalna ho to dono jagah ka link change karein.
- Local `assets/images/` wale paths backup ke liye rakhe gaye hain.

## Prices baad mein kaise update karein
1. `script.js` kholein.
2. Upar `MENU_DATA` dhundhein.
3. `price: null` ko asli number se badlein, jaise `price: 150`.
4. Save karke browser refresh karein. Menu aur cart total apne aap update ho jayenge.
