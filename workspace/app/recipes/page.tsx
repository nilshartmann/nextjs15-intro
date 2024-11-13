import { fetchRecipes } from "@/app/components/queries.ts";
import RecipeListNavBar from "@/app/components/recipelistpage/RecipeListNavBar.tsx";
import RecipeListPaginationBar from "@/app/components/recipelistpage/RecipeListPaginationBar.tsx";
import { RecipeList } from "@/app/components/recipelistpage/RecipeList.tsx";

// todo:
//  1. "Controller-Funktionalität":
//     - Recipes laden mit fetchRecipes()
//     - Rendern mit <RecipeList recipes={recipes} />
//
//  2. Wo wird gerendert, wie sieht HTML aus?
//     - console.log("RENDERED AT", new Date().toISOString());
//
//  3. What happens during build time?
//
//    export const dynamic = "force-dynamic";
//
//  4. Was passiert beim Seitenwechsel?
//
//     type RecipesPageProps = {   searchParams: Record<string, string>; };
//
//     - <RecipeListNavBar />
//     - <RecipeListPaginationBar pageable={recipes} params={searchParams} />
//     - "Blättern" vs. "Open in New Tab"
//     - JAVASCRIPT AUSSCHALTEN!
//
//  5. What happens during build time?
//    ENTFERNEN: export const dynamic = "force-dynamic";

export default function RecipeListPage() {
  return <div className={"container mx-auto"}>todo</div>;
}
