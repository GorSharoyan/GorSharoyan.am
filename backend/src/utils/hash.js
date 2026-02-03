import bcrypt from "bcryptjs";

// Belww is the hashing logic that I have downloaded and implemented from bycript

// #1 Step 1 Creating a Slat
// Number of salt rounds (complexity)
// Salt is used to give additional chars to the Hash thus making hash generated from password more complex
const SALT_ROUNDS = 10;

// # 2 Step
// Creating basic Hashing logic , now based of an imput function creates hash

export const hashPassword = async (plainPassword) => {
  // bcrypt automatically generates a random salt internally
  const hash = await bcrypt.hash(plainPassword, SALT_ROUNDS);
  console.log(hash);
  return hash;
};

// gfuncitonbelow is used to compair password rescived form the forntend with the hashed one in DB

export const comparePassword = async (plainPassword, hashedPassword) => {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
};
