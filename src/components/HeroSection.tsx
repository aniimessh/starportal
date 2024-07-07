import Image from "next/image";
import HeroImage from "../../public/bgimage.png";
import HeroGif from "../../public/academy-animated-logo-57b2ae61.gif";

const HeroSection = () => {
  return (
    <div>
      <Image src={HeroImage} alt="heroimagei" className="pt-4 relative" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 mix-blend-screen text-center flex flex-col items-center">
        <Image src={HeroGif} alt="herotext" className="" height={100} />
        <p className="w-2/3 font-medium text-lg">
          Intract users{" "}
          <span className="text-[#454345]"> have together made more than</span>{" "}
          $100 million <span className="text-[#454345]">in web3</span>.{" "}
          <span className="text-[#454345]">Join them</span> and learn how to
          earn crypto!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
