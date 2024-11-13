import { RecipeBanner } from "./RecipeBanner.tsx";
import { CookingTime } from "./CookingTime.tsx";
import { Instructions } from "./Instructions.tsx";
import { DetailedRecipeDto, GetRecipeFeedbacksResponse } from "../api-types.ts";
import { Sidebar } from "@/app/components/Sidebar.tsx";
import { H2 } from "@/app/components/Heading.tsx";
import IngredientsSection from "@/app/components/recipepage/IngredientsSection.tsx";
import FeedbackList from "@/app/components/recipepage/FeedbackList.tsx";
import { Suspense } from "react";
import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";

type RecipePageContentProps = {
  recipe: DetailedRecipeDto;
  feedbackPromise?: Promise<GetRecipeFeedbacksResponse>;
};

export default async function RecipePageContent({
  recipe,
  feedbackPromise,
}: RecipePageContentProps) {
  const defaultServings = 4;
  return (
    <div>
      <RecipeBanner recipe={recipe} />
      <div className={"container mx-auto mb-8 mt-8 md:flex md:space-x-12"}>
        <div className={"md:w-2/3"}>
          <CookingTime
            cookTime={recipe.cookTime}
            preparationTime={recipe.preparationTime}
          />
          {/*

          // todo: Austauschen gegen ConfigurableIngredientsSection
          //  - oben: defaultServings aus "Datenbank" laden

          */}
          <IngredientsSection
            ingredients={recipe.ingredients}
            defaultServings={defaultServings}
          />
          <Instructions recipe={recipe} />
        </div>
        <div className={"md:w-1/3"}>
          <Sidebar>
            {/*
            - todo:
              - Verzögern des Ladens in 'demo_config'
              - In FeedbackList Laden der Daten zeigen
              - Suspense
              - Use <FeedbackList recipeId={recipe.id} feedbackPromise={feedbackPromise} />
            */}

            <FeedbackList recipeId={recipe.id} />
            <H2>Feedback</H2>
          </Sidebar>
        </div>
      </div>
    </div>
  );
}
