import { RecipeDto } from "@/app/components/api-types.ts";
import { twMerge } from "tailwind-merge";
import { saveLike } from "@/app/components/queries.ts";
import { revalidatePath } from "next/cache";

type LikesWidgetProps = {
  recipe: RecipeDto;
};

export function LikesWidget({ recipe }: LikesWidgetProps) {
  // todo: async Server-Function 'handleLikeSubmit' implementieren    hl
  //  -> 'saveLike' aufrufen
  //  -> revalidatePath aufrufen
  //  -> Function als action verwenden
  //  -> FormData Example:
  //  ->     add hidden field below
  //  ->     console.log("Form Data hidden value ", fd.get("my-secret"));

  return (
    <form className={"inline-flex"}>
      <button
        className={twMerge(
          "me-2 inline-block rounded border border-orange_2 bg-white p-2 text-[15px] text-orange_2 hover:cursor-pointer hover:bg-orange_2 hover:text-white",
        )}
      >
        <i className="fa-regular fa-heart mr-2"></i>
        {recipe.likes}
      </button>
      {/*<input type={"hidden"} name={"my-secret"} value={"secret"} />*/}
    </form>
  );
}
