import allRequests from "@/lib/allRequests";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <nav>
      <div className="flex sm:px-20 mt-8 ml-6 mr-6 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide pb-6">
        {/* Applying loop on object. */}
        {Object.entries(allRequests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?results=${key}`)}
            className="cursor-pointer transition duration-100 transform hover:scale-105 hover:text-blue-500 active:text-blue-600"
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
