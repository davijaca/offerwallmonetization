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
                  <div style={{ backgroundImage: "url(/images/home_background.png)", width: "100vw", height: "982px", display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
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


          <div className={styles.sixthHomeContainer}>
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
              <div style={{ backgroundImage: "url(/images/rect_1203.png)", height: "2760px", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center"}}>

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



          {/*FOOTER SECTION*/}
          <div className={styles.footerName}>
              <div style={{ backgroundImage: "url(/images/new_FooterBG.png)", width: "100%", height: "617px", display: "flex", alignItems: "flex-end"}}>

                  <div className={styles.footerInfo}>
                      <div className={styles.innerFooterInfo}>
                          <div className={styles.TopFooterInfo}>
                              <div className={styles.rightFooterInfo}>

                                  <div className={styles.imgValuable}>
                                      <img className={styles.footerLogo} src="/images/header_logo.png" alt=""/>
                                      <div className={styles.offerwall}>
                                          <span className={styles.offerwallBox}>offerwall</span>< br/>
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

