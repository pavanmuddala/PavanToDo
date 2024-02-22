import React from "react";
import styles from "../components/TopHorizontal.module.css"
const TopHorizontal = () => {
    return (
        <div>
            <div>
                <div className={styles.topBlackBackground}>
                    <button className={styles.btnPrimary}>YuppFlix</button>
                    <button className={styles.btnPrimary}>Why us</button>
                    <button className={styles.btnPrimary}>Ways to watch</button>
                    <button className={styles.btnPrimary}>FAQ's</button>
                    <button className={styles.btnPrimary}>Contact us</button>
                    <button className={styles.btnLanguage}>Language</button>
                    <button className={styles.btnPrimary}>Reach us at support@yupptv.com</button>
                </div>
                <div className={styles.topGreyBackground}>
                    <div style={{ height: "100%", width: "310px" }}>
                        <img className={styles.yuppIconStyles} src="yupp-icon.jpg" ></img>
                    </div>
                    <div>
                        <button className={styles.btnPremium}>Premium Tv</button>
                        <button className={styles.btnFreeLiveTv}>Free Live Tv</button>
                    </div>
                    <div className={styles.displayTopFlex}>
                        <div className={styles.displayFlex} style={{ marginRight: "40px" }}>
                            <input className={styles.searchBox} type={"search"} placeholder="search"></input>
                            <div className={styles.package}>Package</div>
                        </div>

                        <div className={styles.displayFlex}>
                            <button className={styles.btnSignIn}>Sign in</button>
                            <button className={styles.btnSignOut}>Sign up</button>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomBlackBack}>
                    <div style={{ height: "100%" }}>
                        <button className={styles.btnSec}>HOME</button>
                        <button className={styles.btnSec}>LIVE TV</button>
                        <button className={styles.btnSec}>CATCHUP TV</button>
                        <button className={styles.btnSec}>MOVIES</button>
                        <button className={styles.btnSec}>TV SHOWS</button>
                        <button className={styles.btnSec}>NEWS CLIPS</button>
                        <button className={styles.btnSec}>DEVICES</button>
                    </div>
                </div>
                <div className={styles.bottomGreyBack}>
                    <div style={{}}>
                        <span>
                            Choose your preferred language, you can get access to content you want
                        </span>
                        <button className={styles.chooseLangBtn}>
                            Choose Language
                        </button>
                    </div>
                </div>

            </div>
            <div className={styles.bottomMainDiv}>
                <div className={styles.marginTop}>
                    {/* <img src="Karthi-Sulthan-Aha-Video.jpg" height={"400px"} width={"1100px"} alt="sultan"></img> */}
                    <div className={styles.movieBackGround}>
                        <img src="Aha_OTT_Logo.svg.png" height="50px" width={"50px"} style={{ backgroundColor: "white", float: "right", marginTop: "30px", marginRight: "20px" }}></img>

                        <div className={styles.displayCenter}>
                            <div>
                                <img src="leftArrow.png" className={styles.arrowImages}></img>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                                <div>
                                    <h3>Sulthan</h3>
                                    <div style={{ width: "400px", marginRight: "20px" }}>
                                        A man raised by gangsters tries to reform them, and a hired job to protect a village
                                        presents him with the perfect opportunity.
                                    </div>
                                    <button className={styles.btnWatchNow}>Watch now</button>
                                </div>
                                <img src="rightArrow.png" className={styles.arrowImages}></img>
                            </div>
                        </div>
                        <div className={styles.bottomButtons}>
                            <button className={styles.bottomButtonStyles}>Sulthan</button>
                            <button className={styles.bottomButtonStyles}>Premam</button>
                            <button className={styles.bottomButtonStyles}>Kalakka Povadhu</button>
                            <button className={styles.bottomButtonStyles}>Oopiri</button>
                            <button className={styles.bottomButtonStyles}>Manithan</button>
                        </div>
                    </div>
                    <iframe width="620" height="400"
                        src="https://www.youtube.com/embed/EBZfvan0xhI">
                    </iframe>
                </div>
                <div>
                    <div className={styles.trendingBlock}>
                        <div className={styles.bottomSubHeadings}>
                            Trending Live Channels
                        </div>
                        <div className={styles.displayImgFlex}>
                            <div className={styles.trendingimgDiv}><img className={styles.liveImg} src="Yupp.jpeg"></img><div><span className={styles.dot}></span><span>Suma Adda</span></div></div>
                            <div className={styles.trendingimgDiv}><img className={styles.liveImg} src="SunTv.jpeg"></img><div><span className={styles.dot}></span><span>Sarainodu</span></div></div>
                            <div className={styles.trendingimgDiv}><img className={styles.liveImg} src="Etv.jpeg"></img><div><span className={styles.dot}></span><span>Gantaravam</span></div></div>
                            <div className={styles.trendingimgDiv}><img className={styles.liveImg} src="BBO.jpeg"></img><div><span className={styles.dot}></span><span>Jackie Chan</span></div></div>
                            <div className={styles.trendingimgDiv}><img className={styles.liveImg} src="ZeeTv.jpeg"></img><div><span className={styles.dot}></span><span>Zee Cine Awards</span></div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.trendingBlock}>
                    <div className={styles.bottomSubHeadings}>
                        Continue Watching
                    </div>
                    <div className={styles.displayImgFlex}>
                        <div className={styles.imgDiv}>
                            <div className={styles.liveImg}>
                                <div className={styles.continueImg}>
                                    <img src="yuppIcon.webp" className={styles.continueIcon}></img>

                                    <div style={{ height: "2px", width: "60%", backgroundColor: "red", position: "absolute", bottom: '0%' }}></div>
                                    <div style={{ height: "2px", width: "40%", backgroundColor: "gray", position: "absolute", bottom: "0%", left: "60%" }}></div>

                                </div>
                                <div className={styles.displayFlex}>
                                    <div>
                                        <img src="Star_Maa.webp" className={styles.starMaaIcon}></img>
                                    </div>
                                    <div className={styles.anandaRagamCard}>
                                        <div>Bahubali</div>
                                        <div>Action | 2017</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imgDiv}>
                            <div className={styles.liveImg}>
                                <div className={styles.magaDheeraImg} style={{ backgroundImage: `url("Malleswari.jpg")` }}>
                                    <img src="yuppIcon.webp" className={styles.continueIcon}></img>

                                    <div style={{ height: "2px", width: "90%", backgroundColor: "red", position: "absolute", bottom: '0%' }}></div>
                                    <div style={{ height: "2px", width: "10%", backgroundColor: "gray", position: "absolute", bottom: "0%", left: "90%" }}></div>

                                </div>
                                <div className={styles.displayFlex}>
                                    <div>
                                        <img src="Star_Maa.webp" className={styles.starMaaIcon}></img>
                                    </div>
                                    <div className={styles.anandaRagamCard}>
                                        <div>Malleswari</div>
                                        <div>Comedy | 2002</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imgDiv}>
                            <div className={styles.liveImg}>
                                <div className={styles.magaDheeraImg} style={{ backgroundImage: `url("MagaDheera.webp")` }}>
                                    <img src="yuppIcon.webp" className={styles.continueIcon}></img>

                                    <div style={{ height: "2px", width: "20%", backgroundColor: "red", position: "absolute", bottom: '0%' }}></div>
                                    <div style={{ height: "2px", width: "80%", backgroundColor: "gray", position: "absolute", bottom: "0%", left: "20%" }}></div>

                                </div>
                                <div className={styles.displayFlex}>
                                    <div>
                                        <img src="Star_Maa.webp" className={styles.starMaaIcon}></img>
                                    </div>
                                    <div className={styles.anandaRagamCard}>
                                        <div>Maga Dheera</div>
                                        <div>Action | 2012</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imgDiv}>
                            <div className={styles.liveImg}>
                                <div className={styles.magaDheeraImg} style={{ backgroundImage: `url("HelloGuru.jpg")` }}>
                                    <img src="yuppIcon.webp" className={styles.continueIcon}></img>

                                    <div style={{ height: "2px", width: "40%", backgroundColor: "red", position: "absolute", bottom: '0%' }}></div>
                                    <div style={{ height: "2px", width: "60%", backgroundColor: "gray", position: "absolute", bottom: "0%", left: "40%" }}></div>

                                </div>
                                <div className={styles.displayFlex}>
                                    <div>
                                        <img src="Star_Maa.webp" className={styles.starMaaIcon}></img>
                                    </div>
                                    <div className={styles.anandaRagamCard}>
                                        <div>Hello guru prema kosame ra jeevitham</div>
                                        <div>Comedy | 2019</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imgDiv}>
                            <div className={styles.liveImg}>
                                <div className={styles.magaDheeraImg} style={{ backgroundImage: `url("RRR.webp")` }}>
                                    <img src="yuppIcon.webp" className={styles.continueIcon}></img>

                                    <div style={{ height: "2px", width: "60%", backgroundColor: "red", position: "absolute", bottom: '0%' }}></div>
                                    <div style={{ height: "2px", width: "40%", backgroundColor: "gray", position: "absolute", bottom: "0%", left: "60%" }}></div>

                                </div>
                                <div className={styles.displayFlex}>
                                    <div>
                                        <img src="Star_Maa.webp" className={styles.starMaaIcon}></img>
                                    </div>
                                    <div className={styles.anandaRagamCard}>
                                        <div>RRR</div>
                                        <div>Action | 2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.trendingBlock}>
                    <div className={styles.bottomSubHeadings} style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        <div>YuppTv Originals</div>
                        <div>view all {">"}</div>
                    </div>
                    <div className={styles.displayImgFlex}>
                        <div className={styles.imgDiv}>
                            <div className={styles.liveImg}>
                                <div className={styles.magaDheeraImg} style={{ backgroundImage: `url("khaleja.webp")` }}>
                                    <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                                </div>
                                <div className={styles.displayFlex}>
                                    <div className={styles.anandaRagamCard}>
                                        <div>Khaleja</div>
                                        <div>Action | 2015</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imgDiv}>
                            <div className={styles.liveImg}>
                                <div className={styles.magaDheeraImg} style={{ backgroundImage: `url("Dhruva.webp")` }}>
                                    <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                                </div>
                                <div className={styles.displayFlex}>
                                    <div className={styles.anandaRagamCard}>
                                        <div>Dhruva</div>
                                        <div>Thriller | 2002</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imgDiv}>
                            <div className={styles.liveImg}>
                                <div className={styles.magaDheeraImg} style={{ backgroundImage: `url("runBabyRun.jpg")` }}>
                                    <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                                </div>
                                <div className={styles.displayFlex}>
                                    <div className={styles.anandaRagamCard}>
                                        <div>Run Baby Run</div>
                                        <div>Action | 2023</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imgDiv}>
                            <div className={styles.liveImg}>
                                <div className={styles.magaDheeraImg} style={{ backgroundImage: `url("surya.jpg")` }}>
                                    <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                                </div>
                                <div className={styles.displayFlex}>

                                    <div className={styles.anandaRagamCard}>
                                        <div>Surya</div>
                                        <div>Emotional | 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imgDiv}>
                            <div className={styles.liveImg}>
                                <div className={styles.magaDheeraImg} style={{ backgroundImage: `url("OPittaKatha.webp")` }}>
                                    <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                                </div>
                                <div className={styles.displayFlex}>
                                    <div className={styles.anandaRagamCard}>
                                        <div>O Pitta Katha</div>
                                        <div>Comedy | 2019</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.trendingBlock}>
                    <div className={styles.bottomSubHeadings} style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        <div>Pay per view</div>
                        <div>view all {">"}</div>
                    </div>
                    <div className={styles.displayImgFlex}>
                        <div>
                            <div className={styles.payPerViewImg}>
                                <img src="Asuran.jpg" className={styles.ppImg}></img>
                                <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                            </div>
                            <div className={styles.movieName}>
                                Asuran
                            </div>
                            <div className={styles.movieCaption}>
                                2015
                            </div>
                        </div>
                        <div>
                            <div className={styles.payPerViewImg}>
                                <img src="ippo.jpeg" className={styles.ppImg}></img>
                                <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                            </div>
                            <div className={styles.movieName}>
                                Hajime no ippo
                            </div>
                            <div className={styles.movieCaption}>
                                2015
                            </div>
                        </div>
                        <div>
                            <div className={styles.payPerViewImg}>
                                <img src="AttackTitan.webp" className={styles.ppImg}></img>
                                <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                            </div>
                            <div className={styles.movieName}>
                                Attack On Titan
                            </div>
                            <div className={styles.movieCaption}>
                                2015
                            </div>
                        </div>
                        <div>
                            <div className={styles.payPerViewImg}>
                                <img src="Thor.webp" className={styles.ppImg}></img>
                                <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                            </div>
                            <div className={styles.movieName}>
                                Thor Ragnarok
                            </div>
                            <div className={styles.movieCaption}>
                                2015
                            </div>
                        </div>
                        <div>
                            <div className={styles.payPerViewImg}>
                                <img src="obito.jpg" className={styles.ppImg}></img>
                                <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                            </div>
                            <div className={styles.movieName}>
                                Naruto
                            </div>
                            <div className={styles.movieCaption}>
                                2009
                            </div>
                        </div>
                        <div>
                            <div className={styles.payPerViewImg}>
                                <img src="realSteel.jpg" className={styles.ppImg}></img>
                                <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                            </div>
                            <div className={styles.movieName}>
                                Real Steel
                            </div>
                            <div className={styles.movieCaption}>
                                2014
                            </div>
                        </div>
                        <div>
                            <div className={styles.payPerViewImg}>
                                <img src="mission-impossible.jpg" className={styles.ppImg}></img>
                                <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                            </div>
                            <div className={styles.movieName}>
                                Mission Impossible
                            </div>
                            <div className={styles.movieCaption}>
                                2023
                            </div>
                        </div>
                        <div>
                            <div className={styles.payPerViewImg}>
                                <img src="rangasthalam.jpg" className={styles.ppImg}></img>
                                <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                            </div>
                            <div className={styles.movieName}>
                                Rangasthalam
                            </div>
                            <div className={styles.movieCaption}>
                                2018
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.trendingBlock}>
                    <div className={styles.bottomSubHeadings} style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        <div>Catchup Channels</div>
                        <div>view all {">"}</div>
                    </div>
                    <div className={styles.displayImgFlex}>
                        <div className={styles.ccImgDiv}>
                            <div className={styles.catchupchannelImg}>
                                <img src="Gemini.webp" className={styles.ccImg}></img>
                                <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                            </div>
                            <div className={styles.movieName}>
                                Gemini - Entertainment
                            </div>
                        </div>
                        <div className={styles.ccImgDiv}>
                            <div className={styles.catchupchannelImg}>
                                <img src="Etv.jpg" className={styles.ccImg}></img>
                                <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                            </div>
                            <div className={styles.movieName}>
                                ETv - News
                            </div>
                        </div>
                        <div className={styles.ccImgDiv}>
                            <div className={styles.catchupchannelImg}>
                                <img src="Zee.png" className={styles.ccImg}></img>
                                <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                            </div>
                            <div className={styles.movieName}>
                                ZeeTv - Entertainment
                            </div>
                        </div>
                        <div className={styles.ccImgDiv}>
                            <div className={styles.catchupchannelImg}>
                                <img src="Maa.jpg" className={styles.ccImg}></img>
                                <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                            </div>
                            <div className={styles.movieName}>
                                StarMaa - Entertainment
                            </div>
                        </div>
                        <div className={styles.ccImgDiv}>
                            <div className={styles.catchupchannelImg}>
                                <img src="sony.jpg" className={styles.ccImg}></img>
                                <img src="yuppIcon.webp" className={styles.continueIcon}></img>
                            </div>
                            <div className={styles.movieName}>
                                Sony - Entertainment
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopHorizontal;