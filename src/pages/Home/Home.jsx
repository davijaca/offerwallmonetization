import React, {useRef} from "react";
import styles from "./Home.module.css";
import ScrollDivider from "../ScrollDivider";

const Home = () => {


    return (
        <div className={styles.homeContainer}>
            <div className={styles.firstHomeContainer}>
                {/* <div className={styles.hrLine}>
                    <hr />
                </div> */}
                <div className={styles.topFirst}>
                    <div style={{ height: "982px", display: "flex", justifyContent: "center"}}>
                            <div className={styles.gradientContainer}>

                                
                                <div className={styles.gradientContainerRight}></div>
                                <div className={styles.gradientContainerLeft}>
                                <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 30 150 50" preserveAspectRatio="xMidYMid meet" shapeRendering="auto">
                                    <defs>
                                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v105h-352z"/>
                                        <linearGradient id="paint0_linear_913_624" x1="364.5" y1="-176.5" x2="235.107" y2="691.672" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.145833" stopColor="#0549E3"/>
                                        <stop offset="0.447917" stopColor="#28B4A7"/>
                                        </linearGradient>
                                    </defs>
                                    <g className={styles.parallax}>
                                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="url(#paint0_linear_913_624)" opacity={0.5} />
                                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="url(#paint0_linear_913_624)" opacity={0.3} />
                                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="url(#paint0_linear_913_624)" opacity={0.2}/>
                                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="url(#paint0_linear_913_624)" opacity={0.1} />
                                    </g>
                                </svg>
                                </div>

                                {/* <div className={styles.gradientContainerRight}></div>
                                <div className={styles.gradientContainerLeft}>
                                    <svg
                                        className={styles["hero-gradient-background"]}
                                        width="200px"
                                        height="900px"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 375 137"
                                    >
                                    </svg>

                                    <svg
                                        className={styles["hero-gradient-background-2"]}
                                        width="50%"
                                        height="900"
                                        viewBox="0 0 784 982"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            opacity="0.2"
                                            d="M38.4604 0H784V982H38.5C55.4973 770.731 203.133 688.026 154.612 521.647C118.578 398.088 -37.8396 305.418 8.50974 117C10.9053 107.262 34.9369 10.2674 38.4604 0Z"
                                            fill="url(#paint0_angular_217_2526)"
                                        />
                                        <defs>
                                            <radialGradient
                                            id="paint0_angular_217_2526"
                                            cx="0"
                                            cy="0"
                                            r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(570.989 780.433) rotate(-67.9598) scale(545.673 471.276)"
                                            >
                                            <stop offset="0.111924" stopColor="#4981FF" />
                                            <stop offset="0.632206" stopColor="#5528D8" />
                                            <stop offset="0.809809" stopColor="#4D71B8" />
                                            <stop offset="1" stopColor="#28B4A7" />
                                            </radialGradient>
                                        </defs>
                                    </svg>

                                    <svg
                                        className={styles["hero-gradient-background-3"]}
                                        width="754"
                                        height="900"
                                        viewBox="0 0 754 982"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            opacity="0.2"
                                            d="M30.1567 0H754V982H16.5C16.5 982 16.4995 953.288 16.4995 891.5C16.4995 653.724 109.675 612.28 57.4995 438.5C19.0716 310.509 -32.453 207.5 30.1567 0Z"
                                            fill="url(#paint0_angular_217_2527)"
                                        />
                                        <defs>
                                            <radialGradient
                                            id="paint0_angular_217_2527"
                                            cx="0"
                                            cy="0"
                                            r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(490 683) rotate(-67.3739) scale(539.726 475.885)"
                                            >
                                            <stop offset="0.111924" stopColor="#0549E3" />
                                            <stop offset="0.632206" stopColor="#370DAE" />
                                            <stop offset="0.809809" stopColor="#4D71B8" />
                                            <stop offset="1" stopColor="#28B4A7" />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                </div> */}

                            </div>

                            <div className={styles.mainFirst}>
                            <div className={styles.rightMain}>
                                <div className={styles.text}>
                                    Offerwalls:
                                    <br/>
                                    A Valuable Tool for
                                    <br />
                                    <div className={styles.M}>Monetizing</div>
                                    Mobile
                                    Games
                                </div>
                                <div className={styles.parag}>
                                    <div className={styles.innerParag}> Offerwalls are a great monetization
                                    tool primarily because they help gaming
                                    publishers and developers reach a wider
                                        audience which in turn…
                                    </div>
                                </div>
                                <div className={styles.buttonText}>
                                    <div className={styles.buttonText1}>Increases retention</div>
                                    <div className={styles.buttonText2}>Generates additional revenue</div>
                                </div>
                                <div className={styles.downClickImg}>
                                    <img src="/images/downClick.png" alt=''
                                    // onClick={handleClick}
                                    />
                                </div>
                            </div>
                            <div className={styles.leftMain}>
                                <div className={styles.leftImgInfo}>
                                    <img className={styles.leftImg} src="/images/iPhone_14%20_Pro.png"/>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>

                {/*<ScrollDivider ref={ref} className={styles.scrollDivider } />*/}

                <div className={styles.belowFirst}>
                    <div className={styles.innerBelowFirst1}>
                        <div className={styles.innerBelowBox1}>
                            <div className={styles.percentage}>50 % </div>
                            <div className={styles.retention}>retention increase</div>
                            <div className={styles.study}>A study by App Annie found that adding Offerwalls to your existing monetization strategy increases retention by 50% - Why? The answer is…more choice for the user. </div>
                        </div>
                    </div>

                    <div className={styles.innerBelowFirst2}>
                        <div className={styles.innerBelowBox2}>
                            <div className={styles.blog}>Blog</div>
                            <div className={styles.explore}>Explore our blog for expert tips, success stories, and industry updates on maximizing your earnings through offerwall monetisation.</div>
                            <div className={styles.readMore}>
                                <button>
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.secondHomeContainer}>
                    <div className= {styles.secondHomeContainerBox1}>
                        <div className={styles.whatOffer}>
                            <div className={styles.what}>What Is an </div>&nbsp;
                            <div className={styles.offerW}>Offerwall?</div>
                        </div>

                        <div className={styles.anOfferwall}>
                            <div className={styles.innerAnOfferwall}>
                                <div className={styles.anOfferwallParag}>
                                    An Offerwall is a type of in-app advertising
                                    unit that allows users to earn rewards by completing
                                    certain actions like downloading apps, signing up for
                                    newsletters, or conducting surveys. The user earns
                                    in-game currency and the gaming publisher earns revenue.
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className= {styles.secondHomeContainerBox2}>
                        <img className= {styles.image1} src="/images/mobileP.png" alt=""/>
                        <img className= {styles.image2} src="/images/mobileP_Hover.png" alt=""/>
                    </div>
            </div>


            {/*Second Home mobile responsiveness*/}
            <div className={styles.MobileSecondHomeContainer}>
                <div className= {styles.secondHomeContainerBox1}>
                    <div className={styles.whatOffer}>
                        <div className={styles.what}>What Is an </div>
                        <div className={styles.offerW}>Offerwall?</div>
                    </div>

                    <div className= {styles.secondHomeContainerBox2}>
                        <img className= {styles.image1} src="/images/mobileP.png" alt=""/>
                        {/*<img className= {styles.image2} src="/images/mobileP_Hover.png" alt=""/>*/}
                    </div>
                </div>
                <div className={styles.anOfferwall}>
                    <div className={styles.innerAnOfferwall}>
                        <div className={styles.anOfferwallParag}>
                            An Offerwall is a type of in-app advertising
                            unit that allows users to earn rewards by completing
                            certain actions like downloading apps, signing up for
                            newsletters, or conducting surveys. The user earns
                            in-game currency and the gaming publisher earns revenue.
                        </div>
                    </div>

                </div>

            </div>


            <div className={styles.thirdHomeContainer}>
                <div className={styles.imageThirdHomeContainer} style={{ backgroundImage: "url(/images/Th1.png)", }}>
                    <div className={styles.thirdHomeContainerBox}>
                        <div className={styles.mobileProblem}>
                            <div className={styles.innerMobileProblem}>
                                <div className={styles.mobileProblem1}>The Problem </div>&nbsp;&nbsp;
                                <div className={styles.with}>With</div>
                            </div>
                            <div className={styles.mobileProblem2}> Modern Mobile Game Monetization</div>
                        </div>

                        <div className={styles.gameDeveloper}>
                            <div className={styles.gameDeveloper1}>Many game developers struggle with understanding
                            the best way to monetize a mobile game, resorting
                            to flooding their users with ads that interrupt the
                                user experience and cause their users to write negative reviews.
                            </div>
                        </div>

                    </div>
                </div>

            </div>


                {/*Third Home mobile Responsiveness*/}
            <div className={styles.mobileThirdHomeContainer}>
                <div className={styles.imageThirdHomeContainer} style={{ backgroundImage: "url(/images/Th1Mobile.png)", }}>
                    <div className={styles.thirdHomeContainerBox}>
                        <div className={styles.mobileProblem}>
                            <div className={styles.innerMobileProblem}>
                                <div className={styles.mobileProblem1}>The Problem </div>&nbsp;&nbsp;
                                <div className={styles.with}>With Modern</div>
                            </div>
                            <div className={styles.mobileProblem2}> Mobile Game Monetization</div>
                        </div>

                        <div className={styles.gameDeveloper}>
                            <div className={styles.gameDeveloper1}>Many game developers struggle with understanding
                                the best way to monetize a mobile game, resorting
                                to flooding their users with ads that interrupt the
                                user experience and cause their users to write negative reviews.
                            </div>
                        </div>

                    </div>
                </div>

            </div>


            <div className={styles.fourthHomeContainer}>
                <div className={styles.SubFourthHomeContainer}>
                    <div className={styles.fourthHomeBox1}>
                        <div>Why</div>&nbsp;
                        <div className={styles.innerFourthHomeBox1}>Mobile </div> &nbsp;
                        <div>Offerwall Monetization? </div>
                    </div>

                    <div className={styles.fourthHomeBox2}>
                        <div className={styles.fourthBox2Container}>
                            <div className={styles.fourth13}>
                                <div className={styles.fourth13One}>
                                    <div className={styles.innerOne}>
                                        <img src="/images/one.png" alt="" />
                                        <div className={styles.fourth13Integration}>
                                            Offerwall integration is seamless with existing ad monetization or paywall structures
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.fourth13Two}>
                                    <div className={styles.innerOne}>
                                        <img src="/images/three.png" alt="" />
                                        <div className={styles.fourth13Integration}>
                                            At the point where users decline to pay
                                            for premium content in your online shop you
                                            can redirect them to an offerwall giving
                                            them a different way to make the same payment                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.fourthImg}>
                                <img className={styles.fourthImg1} src="/images/phone01.png" alt=""/>
                                <img className={styles.fourthImg2} src="/images/phone02.png" alt=""/>
                            </div>

                            <div className={styles.fourth24}>
                                <div className={styles.fourth24One}>
                                    <div className={styles.innerOne}>
                                        <img src="/images/two.png" alt="" />
                                        <div className={styles.fourth13Integration}>
                                            Offerwalls have a proven track record of increasing
                                            customer lifetime value and monthly recurring revenue                                    </div>
                                    </div>
                                </div>
                                <div className={styles.fourth24Two}>
                                    <div className={styles.innerTwoSecond}>
                                        <img src="/images/four.png" alt="" />
                                        <div className={styles.fourth13Integration}>
                                            There are offerwall solution providers
                                            <div className={styles.likeSmatchedWork}>
                                                <div>like</div>&nbsp;
                                                <div className={styles.fourth13Smatched}>Smatched</div>&nbsp;
                                                <div>that work with you to </div>
                                            </div>
                                            customise the service for a seamless integration
                                            within your app to maximize the profit from your offerwall monetization                                   </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.fourthHomeBox3}>
                        <div className={styles.innerFourthHomeBox3}>
                            OK… But Do Offerwalls Work?
                        </div>
                    </div>
                </div>
            </div>


            {/*MOBILE FOURTH HOME CONTAINER*/}
            <div className={styles.mobileFourthHomeContainer}>
                <div className={styles.SubFourthHomeContainer}>

                    <div className={styles.fourthHomeBox1}>
                        <div className={styles.subFourthHomeBox1}>
                            <div>Why</div>&nbsp;
                            <div className={styles.innerFourthHomeBox1}>Mobile </div> &nbsp;
                            <div> Offerwall </div>
                        </div>
                        <div className={styles.subFourthHomeBox1}> Monetization? </div>
                    </div>

                    <div className={styles.fourthHomeBox2}>
                        <div className={styles.fourthBox2Container}>

                            <div className={styles.fourthImg}>
                                <img className={styles.fourthImg1} src="/images/phone01.png" alt=""/>
                                {/*<img className={styles.fourthImg2} src="/images/phone02.png" alt=""/>*/}
                            </div>

                            <div className={styles.fourth13}>

                                <div className={styles.fourth13One}>
                                    <div className={styles.innerOne}>
                                        <img src="/images/one.png" alt="" />
                                        <div className={styles.fourth13Integration}>
                                            Offerwall integration is seamless with
                                            existing ad monetization or paywall structures
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.fourth13Two}>
                                    <div className={styles.innerOne}>
                                        <img src="/images/two.png" alt="" />
                                        <div className={styles.fourth13Integration}>
                                            At the point where users decline to pay for
                                            premium content in your online shop you can
                                            redirect them to an offerwall giving them a
                                            different way to make the same payment                                   </div>
                                    </div>
                                </div>
                            </div>


                            <div className={styles.fourth24}>
                                <div className={styles.fourth24One}>
                                    <div className={styles.innerOne}>
                                        <img src="/images/three.png" alt="" />
                                        <div className={styles.fourth13Integration}>
                                            Offerwalls have a proven track record of
                                            increasing customer lifetime value and monthly
                                            recurring revenue
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.fourth24Two}>
                                    <div className={styles.innerTwoSecond}>
                                        <img src="/images/four.png" alt="" />
                                        <div className={styles.fourth13Integration}>
                                            There are offerwall solution providers
                                            <div className={styles.likeSmatchedWork}>
                                                <div>like</div>&nbsp;
                                                <div className={styles.fourth13Smatched}>Smatched</div>&nbsp;
                                                <div>that work with you to </div>
                                            </div>
                                            customise the service for a seamless integration
                                            within your app to maximize the profit from your offerwall monetization                                   </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className={styles.fifthHomeContainer}>
                <div className={styles.fifthHomeBackground}>

                    <div className={styles.innerFifthHomeContainer1}>
                        <div className={styles.innerFifthMainBox1}>
                            <div className={styles.innerFifthBox1}>
                                <div>Offerwall</div>&nbsp;
                                <div className={styles.engagement}>engagement</div>
                                <div>is </div>
                            </div>
                            <div className={styles.highest}> highest among non- <br/>
                                paying users.</div>
                        </div>

                        <div className={styles.innerFifthMainBox2}>
                            The 2019 <u>Swrve Monetization Report</u> found that only 1.6% of all players
                            make an in-app purchase and 72% of these only make one.<br />
                            So what is a developer to do? Well, generally the answer is to slam your
                            users with ads. But that is what has led the industry to have churn
                            rates that average around <u>80% after 3 days.</u> That’s not great.
                        </div>

                        <div className={styles.appPurchase}>
                                <div className={styles.noInAppPurchase}>
                                    <div className={styles.appPerc}>1.6%</div>
                                    <div className={styles.makeInApp}>make in-app purchase</div>
                                </div>
                                <div className={styles.onlyMakeOnePurchase}>
                                    <div className={styles.appPerc}>72%</div>
                                    <div className={styles.makeInApp}>only make one purchase</div>
                                </div>
                        </div>
                    </div>

                </div>
            </div>


            {/*MOBILE FIFTH HOME CONTAINER*/}
            <div className={styles.mobileFifthHomeContainer}>
                <div className={styles.fifthHomeBackground}>

                    <div className={styles.innerFifthHomeContainer1}>
                        <div className={styles.innerFifthMainBox1}>
                            <div className={styles.innerFifthBox1}>
                                <div>Offerwall</div>&nbsp;
                                <div className={styles.engagement}>engagement</div>
                                <div>is </div>
                            </div>
                            <div className={styles.highest}> highest among non-
                                paying users.</div>
                        </div>

                        <div className={styles.innerFifthMainBox2}>
                            The 2019 <u>Swrve Monetization Report</u> found that only 1.6% of all players
                            make an in-app purchase and 72% of these only make one.<br />
                            So what is a developer to do? Well, generally the answer is to slam your
                            users with ads. But that is what has led the industry to have churn
                            rates that average around <u>80% after 3 days.</u> That’s not great.
                        </div>

                        <div className={styles.appPurchase}>
                            <div className={styles.noInAppPurchase}>
                                <div className={styles.appPerc}>1.6%</div>
                                <div className={styles.makeInApp}>make in-app purchase</div>
                            </div>
                            <div className={styles.onlyMakeOnePurchase}>
                                <div className={styles.appPerc}>72%</div>
                                <div className={styles.makeInApp}>only make one purchase</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* <div className={styles.sixthHomeContainer}>
                <div className={styles.sixthBox1}>
                    <div className={styles.offerwallSolves}>
                        <div>Offerwalls</div>&nbsp;
                        <div className={styles.solves}>solve </div>&nbsp;
                        <div>two key</div>
                    </div>

                    <div className={styles.problems}>problems:</div>
                </div>

                <div className={styles.sixthBox2}>
                    <div className={styles.innerSixthBox2}>
                        <div className={styles.willingUsers}>
                            <div className={styles.dollar}>
                                <img src="/images/dollar_sign.png"/>
                            </div>

                            <div className={styles.pay}>
                                Your users aren’t willing to pay to play
                            </div>
                        </div >

                        <div className={styles.hateUsers}>
                            <div className={styles.megaphone}>
                                <img src="/images/mega_phone.png"/>
                            </div>

                            <div className={styles.ads}>
                                Your users hate ads and think they interrupt the user experience
                            </div>

                        </div>
                    </div>
                </div>
            </div> */}


            {/*MOBILE SIXTH HOME CONTAINER*/}
            <div className={styles.mobileSixthHomeContainer}>
                <div className={styles.sixthBox1}>
                    <div className={styles.offerwallSolves}>
                        <div>Offerwalls</div>&nbsp;
                        <div className={styles.solves}>solve </div>&nbsp;
                        <div>two key</div>
                    </div>

                    <div className={styles.problems}>problems:</div>
                </div>

                <div className={styles.sixthBox2}>
                    <div className={styles.innerSixthBox2}>
                        <div className={styles.willingUsers}>
                            <div className={styles.dollar}>
                                <img src="/images/dollar_sign.png"/>
                            </div>

                            <div className={styles.pay}>
                                Your users aren’t willing to pay to play
                            </div>
                        </div >

                        <div className={styles.hateUsers}>
                            <div className={styles.megaphone}>
                                <img src="/images/mega_phone.png"/>
                            </div>

                            <div className={styles.ads}>
                                Your users hate ads and think they interrupt the user experience
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.seventhHomeContainer}>
                <div style={{ backgroundImage: "url(/images/rect_1203.png)", width: "100vw", maxWidth: "1512px", height: "2760px", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center"}}>

                            <div className={styles.seventhHomeBox1}>
                                <div className={styles.implementingSoln}>
                                    <div className={styles.implementing}>Implementing </div>&nbsp;
                                    <div className={styles.an}>an offerwall solution provides you </div>
                                </div>

                                <div className={styles.avenue}>
                                    an avenue to offer premium content to your users
                                </div>

                                <div className={styles.priceEngage}>
                                    <div> without making them pay the price,</div>&nbsp;
                                    <div className={styles.engage}>engaging more </div>
                                </div>

                                <div className={styles.usersDecrease}>
                                    <div className={styles.users}>users</div>&nbsp;
                                    <div>and decreasing churn.</div>
                                </div>
                            </div>

                            <div className={styles.seventhHomeBox2}>
                                <div className={styles.innerSeventhBoxContainer}>
                                    <div className={styles.innerSeven1}>
                                        <span className={styles.innerSevenBlog}>Blog</span>
                                        <span className={styles.innerSevenArticles}>All articles</span>
                                    </div>

                                    <div className={styles.innerSeven2}>
                                        <div className={styles.sevenRight}>
                                            <div className={styles.topRightSeven}>
                                                <img src="/images/img00001.png" alt=""/>
                                            </div>
                                            <div className={styles.belowRightSeven}>
                                                <div className={styles.innerBelowRightSeven}>
                                                    <div className={styles.exploring}>
                                                        Exploring Offerwall Solutions for
                                                        Monetization and Retention: a Comparative
                                                        Analysis
                                                    </div>
                                                    <div className={styles.dateTime}>
                                                        <div>July 19 2023</div>
                                                        <div className={styles.imgTime}>
                                                            <img src="/images/Time.png"  alt=""/>
                                                            <div className={styles.minRead}>8 min read</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div className={styles.readMoreExplore}>
                                                        <div className={styles.readMoreButton}>
                                                            Read More
                                                        </div>
                                                    </div>

                                            </div>
                                        </div>
                                        <div className={styles.sevenLeft}>
                                            <div className={styles.topLeftSeven}>
                                                <img src="/images/img0002.png" alt=""/>
                                                <div className={styles.topLeftSevenBox1}>

                                                    <div className={styles.mastering}>
                                                        Mastering Offerwall Monetisation: <br />
                                                        Strategies to Boost Your Earnings
                                                    </div>

                                                    <div className={styles.leftDateTime}>
                                                        <div>July 19 2023</div>
                                                        <div className={styles.leftImgTime}>
                                                            <img src="/images/Time.png"  alt=""/>
                                                            <div className={styles.minRead}>8 min read</div>
                                                        </div>
                                                    </div>

                                                    <div className={styles.LeftReadMoreExplore}>
                                                        <div className={styles.readMoreButton}>
                                                            Read More
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className={styles.belowLeftSeven}>
                                                <img src="/images/img0003.png" alt=""/>
                                                <div className={styles.topLeftSevenBox1}>

                                                    <div className={styles.mastering}>
                                                        Behind the Scenes: How Advertisers <br />
                                                        Create Irresistible Offerwall Campaigns
                                                    </div>

                                                    <div className={styles.leftDateTime}>
                                                        <div>July 19 2023</div>
                                                        <div className={styles.leftImgTime}>
                                                            <img src="/images/Time.png"  alt=""/>
                                                            <div className={styles.minRead}>8 min read</div>
                                                        </div>
                                                    </div>

                                                    <div className={styles.LeftReadMoreExplore}>
                                                        <div className={styles.readMoreButton}>
                                                            Read More
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={styles.seventhHomeBox3}>
                                <div className={styles.innerSeventhHome}>
                                    <div className={styles.rightSevenBox3}>
                                        <div className={styles.getInTouch}>
                                            <div> Get </div>&nbsp;
                                            <div className={styles.inTouch}>in touch</div>
                                        </div>
                                        <div className={styles.schedule}>Learn more or schedule a call for advice
                                            on how you can maximize the impact of offerwall
                                            monetization on your own mobile games. </div>
                                        <div>
                                            <div className={styles.contactImg}>
                                                <img src="/images/contact.png" alt=""/>
                                            </div>
                                            <div className={styles.contactLayOut}>
                                                <div className={styles.contactUs}>
                                                    contact us
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className={styles.leftSevenBox3}>
                                        <div className={styles.mobile005}>
                                            <img src="/images/mobile005.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                </div>

            </div>


            {/*MOBILE SEVENTH HOME CONTAINER*/}
            <div className={styles.mobileSeventhHomeContainer}>
                <div style={{ backgroundImage: "url(/images/rect_1203.png)", width: "100vw", maxWidth: "1512px", height: "2760px", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center"}}>

                            <div className={styles.seventhHomeBox1}>
                                <div className={styles.implementingSoln}>
                                    <div className={styles.implementing}>Implementing </div>&nbsp;
                                    <div className={styles.an}>an offerwall solution provides you </div>
                                </div>

                                <div className={styles.avenue}>
                                    an avenue to offer premium content to your users
                                </div>

                                <div className={styles.priceEngage}>
                                    <div> without making them pay the price,</div>&nbsp;
                                    <div className={styles.engage}>engaging more </div>
                                </div>

                                <div className={styles.usersDecrease}>
                                    <div className={styles.users}>users</div>&nbsp;
                                    <div>and decreasing churn.</div>
                                </div>
                            </div>

                            <div className={styles.seventhHomeBox2}>
                                <div className={styles.innerSeventhBoxContainer}>
                                    <div className={styles.innerSeven1}>
                                        <span className={styles.innerSevenBlog}>Blog</span>
                                        <span className={styles.innerSevenArticles}>All articles</span>
                                    </div>

                                    <div className={styles.innerSeven2}>
                                        <div className={styles.sevenRight}>
                                            <div className={styles.topRightSeven}>
                                                <img src="/images/img00001.png" alt=""/>
                                            </div>
                                            <div className={styles.belowRightSeven}>
                                                <div className={styles.innerBelowRightSeven}>
                                                    <div className={styles.exploring}>
                                                        Exploring Offerwall Solutions for
                                                        Monetization and Retention: a Comparative
                                                        Analysis
                                                    </div>
                                                    <div className={styles.dateTime}>
                                                        <div>July 19 2023</div>
                                                        <div className={styles.imgTime}>
                                                            <img src="/images/Time.png"  alt=""/>
                                                            <div className={styles.minRead}>8 min read</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div className={styles.readMoreExplore}>
                                                        <div className={styles.readMoreButton}>
                                                            Read More
                                                        </div>
                                                    </div>

                                            </div>
                                        </div>
                                        <div className={styles.sevenLeft}>
                                            <div className={styles.topLeftSeven}>
                                                <img src="/images/img0002.png" alt=""/>
                                                <div className={styles.topLeftSevenBox1}>

                                                    <div className={styles.mastering}>
                                                        Mastering Offerwall Monetisation: <br />
                                                        Strategies to Boost Your Earnings
                                                    </div>

                                                    <div className={styles.leftDateTime}>
                                                        <div>July 19 2023</div>
                                                        <div className={styles.leftImgTime}>
                                                            <img src="/images/Time.png"  alt=""/>
                                                            <div className={styles.minRead}>8 min read</div>
                                                        </div>
                                                    </div>

                                                    <div className={styles.LeftReadMoreExplore}>
                                                        <div className={styles.readMoreButton}>
                                                            Read More
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className={styles.belowLeftSeven}>
                                                <img src="/images/img0003.png" alt=""/>
                                                <div className={styles.topLeftSevenBox1}>

                                                    <div className={styles.mastering}>
                                                        Behind the Scenes: How Advertisers <br />
                                                        Create Irresistible Offerwall Campaigns
                                                    </div>

                                                    <div className={styles.leftDateTime}>
                                                        <div>July 19 2023</div>
                                                        <div className={styles.leftImgTime}>
                                                            <img src="/images/Time.png"  alt=""/>
                                                            <div className={styles.minRead}>8 min read</div>
                                                        </div>
                                                    </div>

                                                    <div className={styles.LeftReadMoreExplore}>
                                                        <div className={styles.readMoreButton}>
                                                            Read More
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={styles.seventhHomeBox3}>
                                <div className={styles.innerSeventhHome}>
                                    <div className={styles.rightSevenBox3}>
                                        <div className={styles.getInTouch}>
                                            <div> Get </div>&nbsp;
                                            <div className={styles.inTouch}>in touch</div>
                                        </div>
                                        <div className={styles.schedule}>Learn more or schedule a call for advice
                                            on how you can maximize the impact of offerwall
                                            monetization on your own mobile games. </div>
                                        <div>
                                            <div className={styles.contactImg}>
                                                <img src="/images/contact.png" alt=""/>
                                            </div>
                                            <div className={styles.contactLayOut}>
                                                <div className={styles.contactUs}>
                                                    contact us
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className={styles.leftSevenBox3}>
                                        <div className={styles.mobile005}>
                                            <img src="/images/mobile005.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                </div>

            </div>
            </div>


    )}

export default Home;

