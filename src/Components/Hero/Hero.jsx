import "./Hero.css";
import heroImg from "../../assets/hero-image.png";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero__wrapper">
      <div className="innerWidth paddings flexCenter hero__container">
        <div className="hero__left flexColStart">
          <div className="hero__title">
            <div className="orange__cricle"></div>
            <h1>
              Discover
              <br /> Most Suitable
              <br /> Property
            </h1>
          </div>
          <div className="hero__desc flexColStart secondaryText">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="search__bar flexCenter">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColStart stat">
                <span>
                    <CountUp start={8800} end={9000} duration={4}/>
                    <span>+</span>
                </span>
                <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColStart stat">
                <span>
                    <CountUp start={1950} end={2000} duration={4}/>
                    <span>+</span>
                </span>
                <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColStart stat">
                <span>
                    <CountUp end={28} duration={5}/>
                    <span>+</span>
                </span>
                <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>
        <div className="hero__right flexCenter">
          <div className="img__container">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
