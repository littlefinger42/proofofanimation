import { PageWrapper } from "../../page-wrapper";

export default function AnimationPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return (
    <PageWrapper>
      <main>{slug}</main>
    </PageWrapper>
  );
}
