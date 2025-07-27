import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Test";
import DebateArenaVideo from "@/components/molicuses/DevateArenaVideo";

const HeroSection = () => {
  return (
    <section className="px-5 bg-secondary-bg">
      <div className="container mx-auto pb-10">
        <Text
          as="h1"
          className="text-5xl text-center pt-40 max-w-[800px] mx-auto leading-[70px] text-white"
        >
          Join the Ultimate Debate Experience Today!
        </Text>
        <p className="max-w-[800px] mx-auto mt-10 text-center text-xl text-gray-300">
          Community Debate Arena empowers you to express your opinions and
          engage in meaningful discussions. Take a stance, post your arguments,
          and see who can sway the crowd!
        </p>
        <div className="mx-auto flex gap-5 justify-center mt-10">
          <Button>Join Devate</Button>
          <Button secondBtn className="text-white">
            + Create Devate
          </Button>
        </div>

        <div className="w-4/5 h-[600px] mx-auto my-20 rounded-2xl overflow-hidden">
          <DebateArenaVideo />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
