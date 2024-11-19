import "./Companies.css"
import prologics from "../../assets/prologis.png"
import tower from "../../assets/tower.png"
import equinix from "../../assets/equinix.png"
import realty from "../../assets/realty.png"

const Companies = () => {
    return (
        <section className="c__wrapper">
            <div className="innerWidth paddings flexCenter c__container">
                <img src={prologics} alt="" />
                <img src={tower} alt="" />
                <img src={equinix} alt="" />
                <img src={realty} alt="" />
            </div>            
        </section>
    );
};

export default Companies;