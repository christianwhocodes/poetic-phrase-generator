import { generateTextAndImage } from "./utils.js";

// 1. Change the value of the variable to your name
let name = "Kevin Wasike Wakhisi";

// 2. Change the value of the variable to your favorite activity
let favoriteActivity = "coding";

// 3. Assign the favoritePlace variable your favorite place
// I.e. city, mountain, pub, forrest, beach, Manhattan, etc.
let favoritePlace = "church";

// 4. Configure the AI by setting a temperature from 0 to 1
// The higher temperature, the more random & experimental output
let temperature = 0.5;

// Use Gravatar only (no local avatar.jpg)
const gravatarHash = "2ac9d9aafa28d9913b632fbd83545ab8"; // MD5 of your email (trimmed, lowercased)
const gravatarSize = 200; // px
const avatarEl = document.querySelector(".avatar");
if (avatarEl) {
  const safeHash = gravatarHash || "00000000000000000000000000000000";
  avatarEl.src = `https://www.gravatar.com/avatar/${safeHash}?s=${gravatarSize}&d=mp&r=g`;
}

// Optional: delete "avatar.jpg" and add a photo of yourself
// (remember to use "avatar.jpg" as the name of your photo)

generateTextAndImage(name, favoriteActivity, favoritePlace, temperature);
