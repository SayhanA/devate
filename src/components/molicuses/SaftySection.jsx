import splingImage from "@/assets/images/spling.webp";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import Button from "../atoms/Button";
import CustomLink from "../atoms/CustomLink";
import SectionDescripton from "../atoms/SectionDescripton";
import SectionTitle from "../atoms/SectionTitle";
import Text from "../atoms/Test";
import TextLg from "../atoms/TextLg";

const SaftySection = () => {
  return (
    <section className="px-5 py-3 bg-secondary-bg/20">
      <div className="container mx-auto grid sm:grid-cols-2 my-20">
        <div className=" max-w-[600px] flex justify-center flex-col">
          <SectionTitle
            tag="Safty"
            title="Ensuring Respectful Debates for Everyone"
          />
          <SectionDescripton className="mt-10">
            Our Auto-Moderation feature actively filters out toxic language,
            fostering a respectful environment. Enjoy engaging discussions
            without the worry of inappropriate content.
          </SectionDescripton>
          <div className="mt-10 flex flex-col sm:flex-row gap-10">
            <div>
              <TextLg>Toxicity Prevention</TextLg>
              <Text className="mt-4">
                Banned words are automatically flagged to maintain a healthy
                debate atmosphere.
              </Text>
            </div>
            <div>
              <TextLg>Toxicity Prevention</TextLg>
              <Text className="mt-4">
                Banned words are automatically flagged to maintain a healthy
                debate atmosphere.
              </Text>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-10">
            <Button secondBtn>Learn More</Button>
            <CustomLink
              href="/signup"
              className="border-0 flex items-center gap-2 hover:gap-3 transition-all hover:text-blue-500"
            >
              Sign Up <FaAngleRight className="text-xl" />
            </CustomLink>
          </div>
        </div>
        <div className="h-fit">
          <Image
            src={splingImage}
            alt="Spling checking"
            className="w-fit ml-auto my-10 sm:h-[600px] shadow-xl rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SaftySection;
