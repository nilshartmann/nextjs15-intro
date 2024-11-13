"use server";

// This is code, that runs on the SERVER!
//

// this is our "database":
const dbWithUserPreferences = {
  defaultServings: 4,
};

export async function getDefaultServings(): number {
  console.log("GetDefaultServings", dbWithUserPreferences.defaultServings);

  // todo: servings aus "Datenbank" lesen
}

export async function saveDefaultServings(newServings: number) {
  console.log("saveDefaultServings", newServings);

  // todo: servings "speichern"
}
