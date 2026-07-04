import { FaSearch } from "react-icons/fa";

function HeroSearch() {
  return (
    <div
      className="
      bg-[#0B1023]
      rounded-2xl
      border
      border-[#24304F]
      flex
      overflow-hidden
      mt-10
      "
    >
      <input
        type="text"
        placeholder="Search jobs, companies or skills..."
        className="
        flex-1
        bg-transparent
        text-white
        px-7
        py-5
        outline-none
        "
      />

      <button
        className="
        px-8
        bg-gradient-to-r
        from-pink-500
        to-blue-600
        text-white
        "
      >
        <FaSearch />
      </button>
    </div>
  );
}

export default HeroSearch;