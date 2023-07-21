import { PageWrapper } from "../../page-wrapper";
import { animations } from "./animations";

export default function AnimationPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { AnimationComponent } = animations[parseInt(slug)];
  return (
    <PageWrapper>
      <main>
        {slug}{" "}
        {AnimationComponent ? (
          <AnimationComponent />
        ) : (
          <p>No component found</p>
        )}
      </main>
    </PageWrapper>
  );
}
