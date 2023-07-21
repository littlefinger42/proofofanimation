import { PageWrapper } from "../../page-wrapper";
import { Button } from "../../../components/button/Button";
import { animations } from "./animations";

export default function AnimationPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const slugAsInt = parseInt(slug);
  const { AnimationComponent } = animations[parseInt(slug)];

  const isThereNextAnimation = !!animations[slugAsInt + 1];
  const isTherePreviousAnimation = !!animations[slugAsInt - 1];

  return (
    <PageWrapper>
      <main>
        {slug}{" "}
        {AnimationComponent ? (
          <AnimationComponent />
        ) : (
          <p>No component found</p>
        )}
        {isThereNextAnimation && (
          <Button href={`/animationexamples/${slugAsInt + 1}`}>Next</Button>
        )}
        {isTherePreviousAnimation && (
          <Button href={`/animationexamples/${slugAsInt - 1}`}>Previous</Button>
        )}
        <Button href="/" block>
          Back to home
        </Button>
      </main>
    </PageWrapper>
  );
}
