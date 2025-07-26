import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Test";

const HomePage = () => {
  return (
    <>
      <section className="px-5 bg-secondary-bg h-screen">
        <div className="container mx-auto">
          <Text
            as="h1"
            className="text-5xl text-center pt-20 max-w-[800px] mx-auto leading-[70px]"
          >
            Join the Ultimate Debate Experience Today!
          </Text>
          <p className="max-w-[800px] mx-auto mt-10 text-center text-xl">
            Community Debate Arena empowers you to express your opinions and
            engage in meaningful discussions. Take a stance, post your
            arguments, and see who can sway the crowd!
          </p>
          <div className="mx-auto flex gap-5 justify-center mt-10">
            <Button>Join Devate</Button>
            <Button secondBtn>+ Create Devate</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
