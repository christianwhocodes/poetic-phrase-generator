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

// 5. Configure your avatar using Gravatar
// MD5 hash of your email (trimmed, lowercased) See README for instructions
// Size in pixels
const gravatarHash = "2ac9d9aafa28d9913b632fbd83545ab8";
const gravatarSize = 200; // px

generateTextAndImage(
  name,
  favoriteActivity,
  favoritePlace,
  temperature,
  gravatarHash,
  gravatarSize
);
