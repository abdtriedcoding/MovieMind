import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <h1 className="ml-3 text-xl text-blue-500 font-semibold">MovieMind</h1>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 font-semibold">
          © 2023 MovieMind —
          <Link
            href="https://twitter.com/Sidddabdullah"
            className="text-gray-600 ml-1 font-semibold"
            rel="noopener noreferrer"
            target="_blank"
          >
            Made by @Abdullah.
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="https://github.com/Abdullah-SoftDev/MovieMind" className="text-gray-500 h-8 w-8">
            <img src="/github.png" />
          </Link>
          <Link
            href="https://twitter.com/Sidddabdullah"
            className="ml-3 text-gray-500 h-8 w-8"
          >
            <img src="/twitter.png" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdullah-siddiqui-b05552262"
            className="ml-3 text-gray-500 h-8 w-8"
          >
            <img src="/linkedln.png" />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
