import Text from "../atoms/Test";

export default function AllDevatesHeroSecton() {
  return (
    <section className="bg-secondary-bg text-white py-40">
      <div className="container mx-auto px-6 text-center">
        <Text
          as="h1"
          className="text-5xl text-center max-w-[800px] mx-auto leading-[70px] text-white"
        >
          Devata Arena All Devates
        </Text>
        <p className="max-w-[800px] mx-auto mt-3 text-center text-xl text-gray-300">
          Discover insights, tutorials, and the latest updates from our
          development arena
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mt-10">
          <input
            type="text"
            placeholder="Search devates..."
            className="flex-1 px-4 py-3 rounded-lg text-white focus:outline-none border-border border placeholder:text-white"
          />
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
