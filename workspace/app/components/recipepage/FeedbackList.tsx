import { formatDate } from "../format-date.ts";
import { RatingStars } from "../RatingStars.tsx";
import { Feedback, GetRecipeFeedbacksResponse } from "../api-types.ts";
import { fetchFeedback } from "@/app/components/queries.ts";

type FeedbackListProps = {
  recipeId: string;
  feedbackPromise?: Promise<GetRecipeFeedbacksResponse>;
};

export default async function FeedbackList({
  recipeId,
  feedbackPromise,
}: FeedbackListProps) {
  // note that in real life you would EITHER use Promise OR id
  // todo: const data = await feedbackPromise;

  const data = await fetchFeedback(recipeId);

  return (
    <>
      {data.feedbacks.map((f) => {
        return (
          <div
            key={f.id}
            className={
              "mb-8 rounded-2xl border border-dotted border-gray-300 bg-white pb-8 pe-4 ps-4 pt-4"
            }
          >
            <span className={"font-inter text-gray-500"}>
              <div className={"flex items-end justify-between"}>
                <div className={"font-medium"}>{f.commenter} </div>
                <div className={"text-sm"}>{formatDate(f.createdAt)}</div>
              </div>
              <div className={"mt-1 text-orange_2"}>
                <RatingStars rating={f.rating} />
              </div>
              <div className={"mt-4"}>{f.comment}</div>
            </span>
          </div>
        );
      })}
    </>
  );
}
