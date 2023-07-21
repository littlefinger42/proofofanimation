import Link from "next/link";
import { PageWrapper } from "./page-wrapper";

export default function Home() {
  return (
    <PageWrapper>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>Laurie Copley&apos;s quick example of Next 13 and animations</p>
        <Link
          href="/animationexamples"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="text-2xl font-semibold">
            First Example{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>
      </main>
    </PageWrapper>
  );
}
