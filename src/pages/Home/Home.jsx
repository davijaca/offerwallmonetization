import React from "react";
import styles from "./Home.module.css";

const Home = () => {
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
                                <img src="/images/downClick.png" alt=''/>
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

