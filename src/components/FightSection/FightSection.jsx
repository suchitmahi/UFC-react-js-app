import "./FightSection.css";
import Ilia from "../../assets/images/Ilia.jpeg"
import Justin from "../../assets/images/Justin.jpeg"
import Max from "../../assets/images/Max.jpeg"
import Conor from "../../assets/images/Conor.jpeg"
import UFCFightNight from "../../assets/images/ufc_fightnight.jpeg"
import UFC329 from "../../assets/images/ufc_fight329.jpeg"

const FightSection = () =>{
    return(
        <section className="fight-section">

            {/*LEFT-CARD*/}
            <div className="fight-card">

                <div className="fighters-box">

                <div className="fighters">
                    <img src={Ilia}
                         alt="Ilia Topuria"
                         className="fighter-left"
                    />

                    <img src={Justin}
                         alt="Justin Gaethje"
                         className="fighter-right"
                    />

                </div>

                </div>

                <div className="fight-content">
                    <p className="label">
                        JUST HAPPENED
                    </p>

                    <p className="title-name">
                        TOPURIA VS
                        <br/>
                        GAETHJE
                    </p>

                </div>

                <div className="watermark">
                    <img src={UFCFightNight}
                         alt="UFC FIGHT NIGHT"/>
                </div>

            </div>

                {/*{Right Card}*/}
                <div className="fight-card">

                    <div className="fighters-box">

                    <div className="fighters">
                        <img src={Conor}
                             alt="Conor Mcgregor"
                             className="fighter-left"
                        />

                        <img src={Max}
                             alt="Max Holloway"
                             className="fighter-right"
                        />

                    </div>

                    </div>

                    <div className="fight-content">
                        <p className="label">
                            UP NEXT
                        </p>

                        <p className="title-name">
                            MCGREGOR VS
                            <br/>
                            HOLLOWAY
                        </p>

                    </div>

                    <div className="watermark">
                        <img src={UFC329}
                             alt="UFC 329"/>
                    </div>
            </div>

        </section>
    );
};

export default FightSection;