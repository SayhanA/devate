import Button from "../atoms/Button";
import Text from "../atoms/Test";

const CreateDevateHero = () => {
  return (
    <section className="px-5 bg-secondary-bg">
      <div className="container mx-auto pb-32">
        <Text
          as="h1"
          className="sm:text-5xl text-4xl text-center pt-40 max-w-[600px] mx-auto sm:leading-[70px] text-white"
        >
          Create Debate
        </Text>
        <p className="max-w-[800px] mx-auto mt-5 text-center text-xl text-gray-300">
          Community Debate Arena empowers you to express your opinions and
          engage in meaningful discussions. Take a stance.
        </p>
        <div className="mx-auto flex gap-5 justify-center mt-10">
          <Button>Join Devate</Button>
        </div>
      </div>
    </section>
  );
};

export default CreateDevateHero;
