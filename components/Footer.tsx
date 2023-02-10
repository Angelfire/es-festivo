import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="my-4 flex flex-col items-center justify-between sm:container sm:flex-row">
        <p className="text-sm">
          Made with <strong>&#60; &#47;&#62;</strong> and{" "}
          <span className="mr-1">&#127866;</span> in Colombia
        </p>
        <p className="text-sm">
          The source code is available on{" "}
          <Link
            className="underline hover:no-underline"
            href="https://github.com/Angelfire/es-festivo"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
        </p>
      </div>
    </footer>
  )
}
