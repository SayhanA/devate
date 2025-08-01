import { FaChevronRight } from "react-icons/fa6";
import { MdOutlineMessage, MdOutlineSecurity } from "react-icons/md";
import { RxCircle } from "react-icons/rx";
import Button from "../atoms/Button";
import SectionDescripton from "../atoms/SectionDescripton";
import SectionTitle from "../atoms/SectionTitle";
import Text from "../atoms/Test";
import TextXL from "../atoms/TextXL";

const EngageSection = () => {
  return (
    <section className="sm:px-10 px-5">
      <div className="container mx-auto my-20">
        <SectionTitle tag="Engage" title="How to participate in devates" />
        <SectionDescripton className="mt-5">
          Join the Community Debate Arena to express your opinions and engage in
          meaningful discussions. Follow these simple steps to create, join, and
          participate in debates.
        </SectionDescripton>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-16">
          <div className="">
            <MdOutlineSecurity className="text-5xl mb-5" />
            <TextXL className="font-bold mb-3">Step 1: Create a Debate</TextXL>
            <Text>Authenticated users can easily set up a debate.</Text>
          </div>
          <div className="">
            <div className="relative">
              <RxCircle className="text-5xl mb-5" />
              <RxCircle className="text-5xl mb-5 absolute top-0 start-5" />
            </div>
            <TextXL className="font-bold mb-3">Step 2: Join a Side</TextXL>
            <Text>Select either Support or Oppose to join.</Text>
          </div>
          <div className="">
            <MdOutlineMessage className="text-5xl mb-5" />
            <TextXL className="font-bold mb-3">
              Step 3: Post Your Arguments
            </TextXL>
            <Text>Share your thoughts under your chosen side.</Text>
          </div>
        </div>
        <Button
          secondBtn
          className="border-0 p-0 mt-16 flex gap-3 items-center hover:gap-4 transition-all hover:text-blue-500"
        >
          Learn More <FaChevronRight />
        </Button>
      </div>
    </section>
  );
};

export default EngageSection;
