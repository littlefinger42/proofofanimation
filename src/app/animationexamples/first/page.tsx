import Image from "next/image";
import Link from "next/link";
import { PageWrapper } from "../../page-wrapper";

export default function FirstAnimation() {
  return (
    <PageWrapper>
      <main className="flex flex-col items-center">
        <p>First</p>
        <Link
          href="/animationexamples/second"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="text-2xl font-semibold">
            Next
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>
      </main>
    </PageWrapper>
  );
}
