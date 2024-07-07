import Image from "next/image";
import HeroImage from "../../public/bgimage.png";
import HeroGif from "../../public/academy-animated-logo-57b2ae61.gif";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div>
      <Image src={HeroImage} alt="heroimagei" className="relative w-full"  />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 mix-blend-screen text-center flex flex-col gap-y-6 items-center">
        <Image src={HeroGif} alt="herotext" className="" height={100} />
        <p className="w-3/4 font-medium text-lg text-white">
          Intract users{" "}
          <span className="text-[#454345]"> have together made more than</span>{" "}
          $100 million <span className="text-[#454345]">in web3</span>.{" "}
          <span className="text-[#454345]">Join them</span> and learn how to
          earn crypto!
        </p>
        <button className="bg-[#7242EC] bg-opacity-80 px-11 py-1 rounded-md text-sm flex items-center gap-1 text-white">Get Started <FiArrowRight /></button>
      </div>
    </div>
  );
};

export default HeroSection;
