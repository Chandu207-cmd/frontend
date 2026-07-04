function SkillChip({ name }) {
  return (
    <button
      className="
      px-5
      py-2
      rounded-full
      bg-[#11182F]
      border
      border-[#293654]
      text-gray-300
      hover:bg-[#4F6BFF]
      hover:text-white
      transition
      "
    >
      {name}
    </button>
  );
}

export default SkillChip;