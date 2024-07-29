import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <h2>Not Found</h2>
        <p>
          Sorry, we couldn't find what you were looking for, try going back
          home.
        </p>
        <Link href="/">Go Back Home</Link>
      </div>
    </section>
  );
}
