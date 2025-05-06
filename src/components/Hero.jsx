import styles from "../style";
import { kimani } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="about"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] py-8">
            Your new<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Teammate,</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Kimani Muhammad.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Welcome! I`m a backend-focused Software Engineer with 2+ years of experience at JPMorgan Chase building scalable Java Spring microservices and AWS cloud solutions. Strong foundation in REST APIs, DevOps, and Agile development. Passionate about solving real-world problems and contributing to mission-driven teams.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={kimani}
          alt="kimani"
          className="w-[50%] h-[50%] relative z-[6]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
      
    </section>
  );
};

export default Hero;
