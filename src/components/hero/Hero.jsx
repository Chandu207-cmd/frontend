import HeroSearch from "./HeroSearch";
import SkillChip from "./SkillChip";
import FeatureCard from "../feature/FeatureCard";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <p className="text-pink-500 font-semibold mb-5">
            🚀 Welcome to
          </p>

          <h1 className="text-6xl font-black leading-tight">

            <span className="text-white">
              code
            </span>

            <span className="text-pink-500">
              2
            </span>

            <span className="text-blue-500">
              future
            </span>

          </h1>

          <h2 className="text-white text-5xl font-bold mt-4">
            Job Portal
          </h2>

          <p className="text-gray-400 text-xl mt-8 leading-9">
            Find your dream job from thousands of verified
            opportunities across India.
          </p>

          <HeroSearch />

          <div className="flex flex-wrap gap-4 mt-8">

            <SkillChip name="React" />
            <SkillChip name="Java" />
            <SkillChip name="Python" />
            <SkillChip name="Full Stack" />
            <SkillChip name="DevOps" />

          </div>

        </div>

        {/* RIGHT */}

        <div className="space-y-6">

          <FeatureCard
            color="#4F6BFF"
            title="Smart Matching"
            description="Find jobs matching your skills."
          />

          <FeatureCard
            color="#FF3CAC"
            title="Verified Companies"
            description="Only genuine companies hiring freshers."
          />

          <FeatureCard
            color="#2BD576"
            title="Fast Hiring"
            description="Apply quickly and receive updates instantly."
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;