import { fetchFeedback, fetchRecipe } from "@/app/components/queries.ts";
import RecipePageContent from "@/app/components/recipepage/RecipePageContent.tsx";
import { notFound } from "next/navigation";

type RecipePageProps = {
  params: {
    recipeId: string;
  };
};

export default async function RecipePage({ params }: RecipePageProps) {
  // in our URL we have /recipes/1, recipes/2 etc
  //  params.recipeId is this:   ^          ^

  const recipe = await fetchRecipe(params.recipeId);

  if (!recipe) {
    notFound();
  }

  return <RecipePageContent recipe={recipe.recipe} />;

  // todo: check notFound
  // return <RecipePageContent recipe={recipe.recipe} />
}
