import React, {useRef} from "react";
import styles from "./Home.module.css";
import ScrollDivider from "../ScrollDivider";

const Home = () => {

    // const ref = useRef(null);
    // const handleClick = () => {
    //     ref.current?.scrollIntoView({ behavior: "smooth"});
    // }

  return (
      <div className={styles.homeContainer}>
          <div className={styles.firstHomeContainer}>
              <div className={styles.hrLine}>
                <hr />
              </div>
              <div className={styles.topFirst}>
                  <div style={{ backgroundImage: "url(/images/fj1.png)", height: "900px",display: "flex", justifyContent: "center"}}>
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
                            <div className={styles.leftMainImg}>
                                <img className={styles.imgInfo} src="images/iPhone_14 _Pro.png" alt=""/>
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
                        <div className={styles.what}>What Is an </div>
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
                    <img src="/images/mobileP.png" alt=""/>
                </div>
          </div>


          <div className={styles.thirdHomeContainer}>
              <div style={{ backgroundImage: "url(/images/Th1.png)", height: "750px"}}>
                <div className={styles.thirdHomeContainerBox}>
                    <div className={styles.mobileProblem}>
                        <div className={styles.mobileProblem1}>The Problem</div>
                        <div className={styles.mobileProblem2}> With Modern Mobile Game Monetization</div>
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
                            <img src="/images/phone01.png" alt=""/>
                        </div>

                        <div className={styles.fourth24}>
                            <div className={styles.fourth24One}>
                                <div className={styles.innerOne}>
                                    <img src="/images/two.png" alt="" />
                                    <div className={styles.fourth13Integration}>
                                        Offerwall integration is seamless with existing ad monetization or paywall structures
                                    </div>
                                </div>
                            </div>
                            <div className={styles.fourth24Two}>
                                <div className={styles.innerTwoSecond}>
                                    <img src="/images/four.png" alt="" />
                                    <div className={styles.fourth13Integration}>
                                        At the point where users decline to pay
                                        for premium content in your online shop you
                                        can redirect them to an offerwall giving
                                        them a different way to make the same payment                                    </div>
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


          <div className={styles.fifthHomeContainer}>
              <div style={{ backgroundImage: "url(/images/rect01.png)", height: "968px", display: "flex", justifyContent: "flex-end", alignItems: "flex-end"}}>

                  <div className={styles.innerFifthHomeContainer1}>
                      <div className={styles.innerFifthMainBox1}>
                          <div className={styles.innerFifthBox1}>
                              <div>Offerwall</div>&nbsp;
                              <div className={styles.engagement}>engagement</div> &nbsp;
                              <div> is </div>
                          </div>
                          <div className={styles.highest}> highest among non-paying users.</div>
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



          {/*FOOTER SECTION*/}
          <div className={styles.footerName}>
              <div style={{ backgroundImage: "url(/images/footerBG.png)", width: "100%", height: "617px", }}>

                  <div className={styles.footerInfo}>
                      <div className={styles.innerFooterInfo}>
                          <div className={styles.TopFooterInfo}>
                              <div className={styles.rightFooterInfo}>

                                  <div className={styles.imgValuable}>
                                      <img className={styles.footerLogo} src="/images/header_logo.png" alt=""/>
                                      <div className={styles.offerwall}>
                                          <span>offerwall</span><br />
                                          <span className={styles.monetization}>monetization</span>
                                      </div>
                                  </div>

                                  <div className={styles.valuable}>
                                      <span> A Valuable Tool for Monetizing Mobile Games </span>
                                  </div>

                              </div>

                              <div className={styles.leftFooterInfo}>
                                  <div className={styles.info}>
                                      <div className={styles.rightInfo}>
                                          <span>FAQs</span>
                                          <span>BLOG</span>
                                          <span>PARTNERSHIPS</span>
                                          <span>PRIVACY POLICY</span>
                                      </div>
                                  </div>

                                  <div className={styles.leftInfo}>
                                      <img src="/images/lnkdn.svg"/>
                                  </div>

                              </div>

                          </div>

                          <div className={styles.footerDivider }>
                              <hr />
                          </div>

                          <div className={styles.downFooterInfo}>
                              <span> © Copyright 2023 Offerwall Monetization. All Rights Reserved. </span>
                          </div>

                      </div>
                  </div>
              </div>

          </div>

          </div>


  )}

export default Home;

