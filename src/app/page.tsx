import Link from "next/link";
import { PageWrapper } from "./page-wrapper";

export default function Home() {
  return (
    <PageWrapper>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>Laurie Copley&apos;s quick example of Next 13 and animations</p>
      </main>
    </PageWrapper>
  );
}
