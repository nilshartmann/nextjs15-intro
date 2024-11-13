"use server";

// This is code, that runs on the SERVER!
//

// this is our "database":
const dbWithUserPreferences = {
  defaultServings: 4,
};

export async function saveDefaultServings(newServings: number) {
  console.log("saveDefaultServings", newServings);

  dbWithUserPreferences.defaultServings = newServings;

  // todo: servings "speichern"
}

// NOTE THAT THIS IS AN ENDPOINT TOO,
// beacuse it's in a "use server" module
export async function getDefaultServings(): Promise<number> {
  console.log("GetDefaultServings", dbWithUserPreferences.defaultServings);

  return dbWithUserPreferences.defaultServings;
}
