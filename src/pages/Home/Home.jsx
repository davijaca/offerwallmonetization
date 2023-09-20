import React from "react";
import styles from "./Home.module.css";

const Home = ({ ...props }) => {
  return (
    <div className={styles.home}>

    <section className={styles.hero}>
      <div className={styles["hero-background"]}></div>

      <svg
        className={styles["hero-gradient-background"]}
        width="795"
        height="982"
        viewBox="0 0 795 982"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

      </svg>

      <svg
        className={styles["hero-gradient-background-2"]}
        width="784"
        height="982"
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
        height="982"
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

      <div className={styles["hero-h1"]}>
        <span>
          <span className={styles["hero-h1-span"]}>
            Offerwalls: <br />A Valuable Tool for{" "}
          </span>
          <span className={styles["hero-h1-span2"]}>
            Monetizing
          </span>
          <span className={styles["hero-h1-span3"]}>
            {" "}
            Mobile Games
            <br />
            <br />
          </span>
        </span>{" "}
      </div>

      <div className={styles["hero-h2"]}>
        Offerwalls are a great monetization tool primarily because they help
        gaming publishers and developers reach a wider audience which in turn…{" "}
      </div>

      <div className={styles["hero-image"]}>
      <img
              className={styles["mobile-lottery-smatched-2"]}
              src="mobile-lottery-smatched-2.png"
            />
      </div>

      <div className={styles["hero-button"]}>
      </div>
      <div className={styles["increases-retention"]}>Increases retention </div>
      <div className={styles["hero-button-2"]}></div>
      <div className={styles["generates-additional-revenue"]}>
        Generates additional revenue{" "}
      </div>


      <div className={styles["hero-main-button"]}>
        <div className={styles["rectangle-1173"]}></div>
        <svg
          className={styles.next}
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.45844 40.5463L6.84809 43.9359L14.9375 52.0254L24.7637 61.8516L33.2112 70.299C34.5823 71.6701 35.9305 73.0641 37.3245 74.4123L37.3854 74.4732C38.2614 75.3492 39.7391 75.3492 40.6151 74.4732L44.0047 71.0836L52.0942 62.9941L61.9204 53.168L70.3678 44.7205C71.7389 43.3494 73.1329 42.0012 74.4811 40.6072L74.542 40.5463C75.3875 39.7008 75.4485 38.1469 74.542 37.3166C73.628 36.4787 72.2112 36.4102 71.3123 37.3166L67.9227 40.7063L59.8332 48.7957L50.0071 58.6219L41.5596 67.0693C40.1885 68.4404 38.787 69.7811 37.4463 71.1826L37.3854 71.2436L40.6151 71.2436L37.2254 67.8539L29.136 59.7645L19.3098 49.9383L10.8623 41.4908C9.49125 40.1197 8.14301 38.7258 6.74906 37.3775L6.68813 37.3166C5.84261 36.4711 4.28871 36.4102 3.45844 37.3166C2.62055 38.223 2.55199 39.6398 3.45844 40.5463Z"
            fill="#130E5B"
          />
          <path
            d="M41.2852 72.8735L41.2852 7.88368C41.2852 7.0077 41.2928 6.12411 41.2852 5.24813L41.2852 5.13388C41.2852 3.93798 40.234 2.7954 39 2.84872C37.7584 2.90204 36.7149 3.85419 36.7149 5.13388L36.7149 70.1237C36.7149 70.9997 36.7073 71.8833 36.7149 72.7593L36.7149 72.8735C36.7149 74.0694 37.766 75.212 39 75.1587C40.2416 75.0977 41.2852 74.1532 41.2852 72.8735Z"
            fill="#130E5B"
          />
        </svg>
      </div>
    
    </section>
      
    <section className={styles["section-2"]}>
    <div className={styles["section-2-background-l"]}></div>
      <div className={styles["section-2-h2-l"]}>
        A study by App Annie found that adding Offerwalls to your existing
        monetization strategy increases retention by 50% - Why? The answer
        is…more choice for the user. {" "}
      </div>
      <div className={styles["section-2-h1-l"]}>
        <span>
          <span className={styles["section-2-h1-l-span"]}>50 %</span>
          <span className={styles["section-2-h1-l-span2"]}>
            {" "}
            <br />
          </span>
          <span className={styles["section-2-h1-l-span3"]}>
            retention increase
          </span>
        </span>{" "}
      </div>

      <div className={styles["section-2-background-r"]}></div>
      <div className={styles["section-2-h2-r"]}>
        Explore our blog for expert tips, success stories, and industry updates
        on maximizing your earnings through offerwall monetisation.{" "}
      </div>
      <div className={styles["section-2-h1-r"]}>Blog </div>
      <div className={styles["section-2-button-r"]}>
        <div className={styles["button-2"]}>
          <div className={styles["rectangle-1177"]}></div>
          <div className={styles["read-more"]}>Read more </div>
        </div>
      </div>
    </section>

    <section className={styles["section-3"]}>
    <div className={styles["ellipse-149"]}></div>
      <div className={styles["ellipse-150"]}></div>
      <div className={styles["section-3-halfsphere"]}>
            <div className={styles["ellipse-1492"]}></div>
      </div>
      <div className={styles["section-3-h2"]}>
        An Offerwall is a type of in-app advertising unit that allows users to
        earn rewards by completing certain actions like downloading apps,
        signing up for newsletters, or conducting surveys. The user earns
        in-game currency and the gaming publisher earns revenue. 
        <br />
        <br />{" "}
      </div>
      <div className={styles["section-3-h1"]}>
        <span>
          <span className={styles["section-3-h1-span"]}>What is an </span>
          <span className={styles["section-3-h1-span2"]}>Offerwall?</span>
        </span>{" "}
      </div>
      <div className={styles["section-3-image"]}>
        <img className={styles.rectangle6} src="rectangle6.png" />
        <div className={styles["group-1000004484"]}>
          <div className={styles["rectangle-1191"]}></div>
          <div className={styles["rectangle-1192"]}></div>
          <div className={styles["group-16"]}>
            <div className={styles["rectangle-1189"]}></div>
            <img className={styles.survey} src="survey.png" />
          </div>
          <div className={styles.coins}>
            <svg
              className={styles["group-13"]}
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="8.38557"
                cy="8.50552"
                rx="7.19663"
                ry="7.52375"
                transform="rotate(-90 8.38557 8.50552)"
                fill="#DCC381"
              />
              <circle
                cx="8.71274"
                cy="8.50552"
                r="7.19663"
                transform="rotate(-90 8.71274 8.50552)"
                fill="#FFDF8E"
              />
              <ellipse
                cx="8.50019"
                cy="8.49993"
                rx="5.85071"
                ry="6.16984"
                transform="rotate(135 8.50019 8.49993)"
                fill="#E4B437"
              />
              <ellipse
                cx="8.2737"
                cy="8.27441"
                rx="5.85071"
                ry="5.85071"
                transform="rotate(135 8.2737 8.27441)"
                fill="#FFD464"
              />
              <path
                d="M10.1295 11.3643H9.14809C8.71558 11.3631 8.29217 11.2032 7.92687 10.903C7.56157 10.6028 7.26933 10.1747 7.08397 9.66812H9.14809C9.23485 9.66812 9.31805 9.62344 9.3794 9.54392C9.44075 9.46439 9.47521 9.35654 9.47521 9.24407C9.47521 9.13161 9.44075 9.02375 9.3794 8.94423C9.31805 8.8647 9.23485 8.82003 9.14809 8.82003H6.88442C6.84953 8.53914 6.84953 8.25283 6.88442 7.97194H9.14809C9.23485 7.97194 9.31805 7.92727 9.3794 7.84774C9.44075 7.76822 9.47521 7.66036 9.47521 7.5479C9.47521 7.43543 9.44075 7.32758 9.3794 7.24805C9.31805 7.16853 9.23485 7.12385 9.14809 7.12385H7.08397C7.26933 6.61729 7.56157 6.18914 7.92687 5.88895C8.29217 5.58877 8.71558 5.42884 9.14809 5.42768H10.1295C10.2162 5.42768 10.2994 5.383 10.3608 5.30348C10.4221 5.22395 10.4566 5.1161 10.4566 5.00363C10.4566 4.89117 10.4221 4.78331 10.3608 4.70379C10.2994 4.62427 10.2162 4.57959 10.1295 4.57959H9.14809C8.54013 4.58093 7.94739 4.82622 7.45129 5.28178C6.95518 5.73734 6.58004 6.38082 6.37739 7.12385H5.54978C5.46302 7.12385 5.37981 7.16853 5.31847 7.24805C5.25712 7.32758 5.22266 7.43543 5.22266 7.5479C5.22266 7.66036 5.25712 7.76822 5.31847 7.84774C5.37981 7.92727 5.46302 7.97194 5.54978 7.97194H6.22364C6.19746 8.25362 6.19746 8.53835 6.22364 8.82003H5.54997C5.46321 8.82003 5.38001 8.8647 5.31866 8.94423C5.25731 9.02375 5.22285 9.13161 5.22285 9.24407C5.22285 9.35654 5.25731 9.46439 5.31866 9.54392C5.38001 9.62344 5.46321 9.66812 5.54997 9.66812H6.37739C6.58004 10.4111 6.95518 11.0546 7.45129 11.5102C7.94739 11.9657 8.54013 12.211 9.14809 12.2124H10.1295C10.2162 12.2124 10.2994 12.1677 10.3608 12.0882C10.4221 12.0087 10.4566 11.9008 10.4566 11.7883C10.4566 11.6759 10.4221 11.568 10.3608 11.4885C10.2994 11.409 10.2162 11.3643 10.1295 11.3643Z"
                fill="#F2B150"
              />
            </svg>

            <div className={styles.count}>500 </div>
          </div>
          <div className={styles.count2}>Complete a survey </div>
        </div>
      </div>
    </section>

    <section className={styles["section-4"]}>
    <div className={styles["section-4-h1"]}>
        <span>
          <span className={styles["section-4-h1-span"]}>
            The Problem
          </span>
          <span className={styles["section-4-h1-span2"]}>
            {" "}
            With Modern Mobile Game Monetization
          </span>
        </span>{" "}
      </div>
      <div className={styles["section-4-h2"]}>
        Many game developers struggle with understanding the best way to
        monetize a mobile game, resorting to flooding their users with ads that
        interrupt the user experience and cause their users to write negative
        reviews.{" "}
      </div>
      <div className={styles["section-4-gradient"]}></div>
      <div className={styles["section-4-background"]}></div>
      <img className={styles["section-4-image"]} src="section4image.png" />
    </section>

    <section className={styles["section-5"]}>
    <div className={styles["section-5-h1"]}>
        <span>
          <span className={styles["section-5-h1-span"]}>Why </span>
          <span className={styles["section-5-h1-span2"]}>
            Mobile
          </span>
          <span className={styles["section-5-h1-span3"]}>
            {" "}
            Offerwall Monetization?
          </span>
        </span>{" "}
      </div>
      <div className={styles["section-5-image"]}>
        <div className={styles.body}>
          <div className={styles["screen-background"]}></div>
          <div className={styles["stroke-body-outside"]}></div>
          <svg
            className={styles["stroke-body"]}
            width="236"
            height="495"
            viewBox="0 0 236 495"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_i_217_2551)">
              <path
                d="M0.817871 38.1422C0.817871 17.4611 17.2703 0.695801 37.5655 0.695801H198.657C218.952 0.695801 235.404 17.4611 235.404 38.1422V457.237C235.404 477.918 218.952 494.683 198.657 494.683H37.5655C17.2703 494.683 0.817871 477.918 0.817871 457.237V38.1422Z"
                fill="black"
                fillOpacity="0.01"
              />
            </g>
            <path
              d="M1.14489 38.1422C1.14489 17.6359 17.4567 1.02282 37.5655 1.02282H198.657C218.765 1.02282 235.077 17.6359 235.077 38.1422V457.237C235.077 477.743 218.765 494.356 198.657 494.356H37.5655C17.4567 494.356 1.14489 477.743 1.14489 457.237V38.1422Z"
              stroke="url(#paint0_linear_217_2551)"
              strokeWidth="0.654036"
            />
            <defs>
              <filter
                id="filter0_i_217_2551"
                x="0.817871"
                y="0.695801"
                width="234.586"
                height="493.987"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="1.09006"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_innerShadow_217_2551"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="0.109006" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.686275 0 0 0 0 0.690196 0 0 0 0 0.670588 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_217_2551"
                />
              </filter>
              <linearGradient
                id="paint0_linear_217_2551"
                x1="118.111"
                y1="0.695801"
                x2="118.111"
                y2="494.683"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F4F5F0" />
                <stop offset="1" stopColor="#FBFBFB" />
              </linearGradient>
            </defs>
          </svg>

          <div className={styles.screen}>
            <div className={styles["screen-mask"]}></div>
            <img className={styles["mobile-shop-2"]} src="mobile-shop-2.png" />
          </div>
        </div>
        <div className={styles.antennas}>
          <div className={styles.bottom}></div>
          <div className={styles["left-bottom"]}></div>
          <div className={styles["left-top"]}></div>
          <div className={styles["right-bottom"]}></div>
          <div className={styles.right}></div>
          <div className={styles.top}></div>
        </div>
        <div className={styles.notch}>
          <div className={styles["top-speaker"]}></div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.button}></div>
          <div className={styles.button2}></div>
          <div className={styles["silence-button"]}></div>
          <div className={styles["power-button"]}></div>
        </div>
        <svg
          className={styles["front-camera"]}
          width="61"
          height="17"
          viewBox="0 0 61 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.0864258"
            y="0.428711"
            width="60.4999"
            height="16.5571"
            rx="7.85757"
            fill="#0A0A0A"
          />
          <ellipse
            cx="52.1726"
            cy="8.70968"
            rx="8.41042"
            ry="8.27853"
            fill="#0A0A0A"
          />
          <g opacity="0.7">
            <path
              d="M49.2644 12.9034C51.7891 12.9034 53.835 10.8506 53.835 8.31931C53.835 5.78802 51.7891 3.73523 49.2644 3.73523C46.7397 3.73523 44.6937 5.78802 44.6937 8.31931C44.6937 10.8506 46.7397 12.9034 49.2644 12.9034Z"
              fill="url(#paint0_radial_217_2569)"
            />
            <path
              d="M49.2644 12.9034C51.7891 12.9034 53.835 10.8506 53.835 8.31931C53.835 5.78802 51.7891 3.73523 49.2644 3.73523C46.7397 3.73523 44.6937 5.78802 44.6937 8.31931C44.6937 10.8506 46.7397 12.9034 49.2644 12.9034Z"
              fill="url(#paint1_angular_217_2569)"
            />
            <path
              d="M49.2644 12.9034C51.7891 12.9034 53.835 10.8506 53.835 8.31931C53.835 5.78802 51.7891 3.73523 49.2644 3.73523C46.7397 3.73523 44.6937 5.78802 44.6937 8.31931C44.6937 10.8506 46.7397 12.9034 49.2644 12.9034Z"
              fill="url(#paint2_angular_217_2569)"
            />
            <path
              d="M49.2644 12.9034C51.7891 12.9034 53.835 10.8506 53.835 8.31931C53.835 5.78802 51.7891 3.73523 49.2644 3.73523C46.7397 3.73523 44.6937 5.78802 44.6937 8.31931C44.6937 10.8506 46.7397 12.9034 49.2644 12.9034Z"
              stroke="#080F21"
              strokeWidth="0.296142"
            />
          </g>
          <line
            opacity="0.7"
            x1="49.2598"
            y1="3.88379"
            x2="49.2598"
            y2="12.7558"
            stroke="#1E1E1E"
            strokeWidth="0.740355"
          />
          <defs>
            <radialGradient
              id="paint0_radial_217_2569"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(49.2644 8.31931) rotate(90) scale(4.43601 4.42258)"
            >
              <stop offset="0.213542" />
              <stop offset="0.270833" stopColor="#081A32" />
              <stop offset="0.395833" stopColor="#1F3A58" />
              <stop offset="0.515625" stopColor="#375F90" />
              <stop offset="0.713542" stopColor="#274871" />
              <stop offset="0.916667" stopColor="#0D1528" />
            </radialGradient>
            <radialGradient
              id="paint1_angular_217_2569"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(49.2644 8.31931) rotate(90) scale(4.43601 4.42258)"
            >
              <stop offset="0.411458" stopOpacity="0" />
              <stop offset="0.510417" />
              <stop offset="0.817708" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint2_angular_217_2569"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(49.2644 8.31931) rotate(90) scale(4.43601 4.42258)"
            >
              <stop />
              <stop offset="0.166667" stopOpacity="0" />
              <stop offset="0.885417" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className={styles["section-5-background"]}></div>
      <div className={styles["section-5-background-2"]}></div>

      <div className={styles["section-5-item-1"]}>
        Offerwall integration is seamless with existing ad monetization or
        paywall structures{" "}
      </div>
      <div className={styles["section-5-item-2"]}>
        Offerwalls have a proven track record of increasing customer lifetime
        value and monthly recurring revenue{" "}
      </div>
      <div className={styles["section-5-item-3"]}>
        At the point where users decline to pay for premium content in your
        online shop you can redirect them to an offerwall giving them a
        different way to make the same payment{" "}
      </div>
      <div className={styles["section-5-item-4"]}>
        There are offerwall solution providers like Smatched that work with you to customise the service for a seamless integration within your app to maximize the profit from your offerwall monetization{" "}
      </div>
      <div className={styles["section-5-item-1-number"]}>1 </div>
      <div className={styles["section-5-item-3-number"]}>3 </div>
      <div className={styles["section-5-item-2-number"]}>2 </div>
      <div className={styles["section-5-item-4-number"]}>4 </div>
      
      <div className={styles["section-5-bottom"]}>
        OK… But Do Offerwalls Work?{" "}
      </div>
    </section>

    <section className={styles["section-6"]}>
    <div className={styles["section-6-h1"]}>
        <span>
          <span className={styles["section-6-h1-span"]}>
            Offerwall{" "}
          </span>
          <span className={styles["section-6-h1-span2"]}>
            engagement
          </span>
          <span className={styles["section-6-h1-span3"]}>
            {" "}
            is highest among non-paying users.{" "}
          </span>
        </span>{" "}
      </div>
      <img className={styles["section-6-image"]} src="section6image.png" />
      <div className={styles["section-6-gradient"]}></div>
      <div className={styles["section-6-background"]}></div>

      <div className={styles["make-in-app-purchase"]}>make in-app purchase </div>
      <div className={styles["_1-6"]}>1.6% </div>
      <div className={styles["only-make-one-purchase"]}>only make one purchase </div>
      <div className={styles._72}>72% </div>
      <div className={styles.blog}>Blog </div>
      <div className={styles["the-2019-swrve-monetization-report-found-that-only-1-6-of-all-players-make-an-in-app-purchase-and-72-of-these-only-make-one-so-what-is-a-developer-to-do-well-generally-the-answer-is-to-slam-your-users-with-ads-but-that-is-what-has-led-the-industry-to-have-churn-rates-that-average-around-80-after-3-days-that-s-not-great"]}>
        <span>
          <span className={styles["the-2019-swrve-monetization-report-found-that-only-1-6-of-all-players-make-an-in-app-purchase-and-72-of-these-only-make-one-so-what-is-a-developer-to-do-well-generally-the-answer-is-to-slam-your-users-with-ads-but-that-is-what-has-led-the-industry-to-have-churn-rates-that-average-around-80-after-3-days-that-s-not-great-span"]}>
            The 2019{" "}
          </span>
          <span className={styles["the-2019-swrve-monetization-report-found-that-only-1-6-of-all-players-make-an-in-app-purchase-and-72-of-these-only-make-one-so-what-is-a-developer-to-do-well-generally-the-answer-is-to-slam-your-users-with-ads-but-that-is-what-has-led-the-industry-to-have-churn-rates-that-average-around-80-after-3-days-that-s-not-great-span2"]}>
            Swrve Monetization Report
          </span>
          <span className={styles["the-2019-swrve-monetization-report-found-that-only-1-6-of-all-players-make-an-in-app-purchase-and-72-of-these-only-make-one-so-what-is-a-developer-to-do-well-generally-the-answer-is-to-slam-your-users-with-ads-but-that-is-what-has-led-the-industry-to-have-churn-rates-that-average-around-80-after-3-days-that-s-not-great-span3"]}>
            {" "}
            found that only 1.6% of all players make an in-app purchase and 72%
            of these only make one. <br />
            So what is a developer to do? Well, generally the answer is to slam
            your users with ads. But that is what has led the industry to have
            churn rates that average around{" "}
          </span>
          <span className={styles["the-2019-swrve-monetization-report-found-that-only-1-6-of-all-players-make-an-in-app-purchase-and-72-of-these-only-make-one-so-what-is-a-developer-to-do-well-generally-the-answer-is-to-slam-your-users-with-ads-but-that-is-what-has-led-the-industry-to-have-churn-rates-that-average-around-80-after-3-days-that-s-not-great-span4"]}>
            80% after 3 days
          </span>
          <span className={styles["the-2019-swrve-monetization-report-found-that-only-1-6-of-all-players-make-an-in-app-purchase-and-72-of-these-only-make-one-so-what-is-a-developer-to-do-well-generally-the-answer-is-to-slam-your-users-with-ads-but-that-is-what-has-led-the-industry-to-have-churn-rates-that-average-around-80-after-3-days-that-s-not-great-span5"]}>
            . That’s not great.{" "}
          </span>
        </span>{" "}
      </div>
    </section>

    <section className={styles["section-7"]}>
    <div className={styles["section-7-button-h1"]}>
        <span>
          <span className={styles["section-7-button-h1-span"]}>
            Offerwalls{" "}
          </span>
          <span className={styles["section-7-button-h1-span2"]}>solve</span>
          <span className={styles["section-7-button-h1-span3"]}>
            {" "}
            two key problems:
          </span>
        </span>{" "}
      </div>
      <div className={styles["section-7-container-l"]}></div>
      <div className={styles["section-7-container-r"]}></div>
      <div className={styles["section-7-container-h2-l"]}>
        Your users aren’t willing to pay to play{" "}
      </div>
      <div className={styles["section-7-container-h2-r"]}>
        Your users hate ads and think they interrupt the user experience{" "}
      </div>
      <div className={styles["section-7-container-svg-r"]}>
        <div className={styles["ellipse-146"]}></div>
        <svg
          className={styles.ads}
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.7365 8.00879C42.9316 8.00879 42.222 8.37549 41.7252 8.94388C41.6583 8.95677 41.5931 8.97707 41.5308 9.00439L25.8414 15.9773C25.6734 15.7811 25.4655 15.623 25.2315 15.5136C24.9975 15.4042 24.7429 15.346 24.4846 15.3429H9.81645C8.81718 15.3429 7.98293 16.1753 7.98293 17.1764V19.0099H5.24733C5.00419 19.0099 4.771 19.1065 4.59908 19.2784C4.42715 19.4503 4.33057 19.6835 4.33057 19.9267V25.4272C4.33057 25.6703 4.42715 25.9035 4.59908 26.0755C4.771 26.2474 5.00419 26.344 5.24733 26.344H7.98293V28.1775C7.98293 29.1768 8.81718 30.011 9.81645 30.011H11.65V33.678H14.4002V48.1812C14.4002 49.7397 15.5994 51.0965 17.1505 51.0965C18.7035 51.0965 19.9008 49.7397 19.9008 48.1812V42.8456H23.5678V35.5116H19.9008V33.678H22.6511V30.011H24.4846C24.7422 30.0071 24.9961 29.9486 25.2293 29.8392C25.4626 29.7298 25.67 29.5722 25.8377 29.3766L41.5326 36.3495C41.5944 36.3767 41.659 36.397 41.7252 36.41C42.222 36.9784 42.9316 37.3451 43.7365 37.3451C45.2803 37.3451 46.4868 36.0139 46.4868 34.4664V28.1665C47.3977 28.168 48.2947 27.9434 49.0974 27.5126C49.9 27.0819 50.5831 26.4585 51.0853 25.6986C51.681 24.7901 51.9948 23.7257 51.9873 22.6394C51.9798 21.553 51.6513 20.4931 51.0431 19.593C50.5377 18.8508 49.8581 18.2438 49.0638 17.8251C48.2695 17.4064 47.3847 17.1887 46.4868 17.191V10.8911C46.4868 9.34359 45.2803 8.00879 43.7365 8.00879ZM43.7365 9.84231C44.2261 9.84231 44.6533 10.2622 44.6533 10.8911V34.4664C44.6533 35.0953 44.2261 35.5116 43.7365 35.5116C43.2488 35.5116 42.8198 35.0953 42.8198 34.4664V10.8911C42.8198 10.2622 43.2488 9.84231 43.7365 9.84231ZM40.9863 11.2541V34.0997L26.3181 27.5834V17.7704L40.9863 11.2541ZM54.1546 15.5464L51.562 18.139L52.8583 19.4353L55.4509 16.8427L54.1546 15.5464ZM9.81645 17.1764H24.4846V19.0099H15.317V20.8434H24.4846V24.5104H15.317V26.344H24.4846V28.1775H9.81645V25.5812C9.82567 25.5304 9.83058 25.4789 9.83112 25.4272V19.9267C9.831 19.8725 9.82609 19.8185 9.81645 19.7653V17.1764ZM46.8425 19.0282C47.4716 19.0888 48.0743 19.311 48.5922 19.6732C49.1101 20.0353 49.5256 20.5251 49.7984 21.0952C50.0713 21.6652 50.1922 22.2961 50.1494 22.9266C50.1066 23.5571 49.9016 24.1658 49.5543 24.6938C48.8649 25.7389 47.7061 26.3055 46.4868 26.3036V19.0447C46.606 19.0447 46.7252 19.0191 46.8425 19.0282ZM6.16408 20.8434H7.98293V24.5104H6.16408V20.8434ZM53.8209 21.7602V23.5937H57.4879V21.7602H53.8209ZM52.8583 25.9168L51.562 27.2131L54.1546 29.8075L55.4509 28.5112L52.8583 25.9168ZM13.4835 30.011H20.8176V31.8445H13.4835V30.011ZM16.2338 33.6854H18.0673V48.1812C18.0673 48.8376 17.6309 49.2629 17.1505 49.2629C16.672 49.2629 16.2338 48.8376 16.2338 48.1812V33.6854ZM19.9008 37.3451H21.7343V41.0121H19.9008V37.3451Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={styles["section-7-container-svg-l"]}>
        <div className={styles["ellipse-145"]}></div>
        <svg
          className={styles.money}
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29 41.6875C30.7924 41.6875 32.5445 41.156 34.0349 40.1602C35.5252 39.1644 36.6867 37.749 37.3727 36.0931C38.0586 34.4371 38.238 32.615 37.8884 30.857C37.5387 29.099 36.6756 27.4843 35.4082 26.2168C34.1407 24.9494 32.526 24.0863 30.768 23.7366C29.0101 23.387 27.1879 23.5664 25.5319 24.2523C23.876 24.9383 22.4606 26.0998 21.4648 27.5901C20.469 29.0805 19.9375 30.8326 19.9375 32.625C19.9401 35.0277 20.8958 37.3313 22.5948 39.0302C24.2937 40.7292 26.5973 41.6849 29 41.6875ZM29 25.375C30.4339 25.375 31.8356 25.8002 33.0279 26.5969C34.2201 27.3935 35.1494 28.5258 35.6981 29.8506C36.2469 31.1753 36.3904 32.633 36.1107 34.0394C35.831 35.4458 35.1405 36.7376 34.1265 37.7515C33.1126 38.7655 31.8208 39.456 30.4144 39.7357C29.008 40.0154 27.5503 39.8719 26.2255 39.3231C24.9008 38.7744 23.7685 37.8451 22.9718 36.6529C22.1752 35.4606 21.75 34.0589 21.75 32.625C21.7522 30.7028 22.5167 28.86 23.8759 27.5009C25.235 26.1417 27.0778 25.3772 29 25.375Z"
            fill="#1E1E1E"
          />
          <path
            d="M29 35.3438C28.7596 35.3438 28.5291 35.2483 28.3592 35.0783C28.1892 34.9084 28.0938 34.6779 28.0938 34.4375C28.0938 34.1971 27.9983 33.9666 27.8283 33.7967C27.6584 33.6267 27.4279 33.5312 27.1875 33.5312C26.9471 33.5312 26.7166 33.6267 26.5467 33.7967C26.3767 33.9666 26.2812 34.1971 26.2812 34.4375C26.2836 34.9978 26.459 35.5437 26.7834 36.0005C27.1078 36.4573 27.5655 36.8027 28.0938 36.9895V38.0625C28.0938 38.3029 28.1892 38.5334 28.3592 38.7033C28.5291 38.8733 28.7596 38.9688 29 38.9688C29.2404 38.9688 29.4709 38.8733 29.6408 38.7033C29.8108 38.5334 29.9062 38.3029 29.9062 38.0625V36.9895C30.5104 36.7767 31.0198 36.3569 31.3441 35.8045C31.6685 35.2522 31.7869 34.6028 31.6783 33.9715C31.5698 33.3402 31.2413 32.7677 30.7511 32.3554C30.2609 31.9431 29.6406 31.7175 29 31.7188C28.8208 31.7188 28.6455 31.6656 28.4965 31.566C28.3475 31.4664 28.2313 31.3249 28.1627 31.1593C28.0941 30.9937 28.0762 30.8115 28.1112 30.6357C28.1461 30.4599 28.2324 30.2984 28.3592 30.1717C28.4859 30.0449 28.6474 29.9586 28.8232 29.9237C28.999 29.8887 29.1812 29.9066 29.3468 29.9752C29.5124 30.0438 29.6539 30.16 29.7535 30.309C29.8531 30.458 29.9062 30.6333 29.9062 30.8125C29.9062 31.0529 30.0017 31.2834 30.1717 31.4533C30.3416 31.6233 30.5721 31.7188 30.8125 31.7188C31.0529 31.7188 31.2834 31.6233 31.4533 31.4533C31.6233 31.2834 31.7188 31.0529 31.7188 30.8125C31.7164 30.2522 31.541 29.7063 31.2166 29.2495C30.8922 28.7927 30.4345 28.4473 29.9062 28.2605V27.1875C29.9062 26.9471 29.8108 26.7166 29.6408 26.5467C29.4709 26.3767 29.2404 26.2812 29 26.2812C28.7596 26.2812 28.5291 26.3767 28.3592 26.5467C28.1892 26.7166 28.0938 26.9471 28.0938 27.1875V28.2605C27.4896 28.4733 26.9802 28.8931 26.6559 29.4455C26.3315 29.9978 26.2131 30.6472 26.3217 31.2785C26.4302 31.9098 26.7587 32.4823 27.2489 32.8946C27.7391 33.3069 28.3594 33.5325 29 33.5312C29.2404 33.5312 29.4709 33.6267 29.6408 33.7967C29.8108 33.9666 29.9062 34.1971 29.9062 34.4375C29.9062 34.6779 29.8108 34.9084 29.6408 35.0783C29.4709 35.2483 29.2404 35.3438 29 35.3438Z"
            fill="#1E1E1E"
          />
          <path
            d="M53.6663 32.625H47.7938C46.4155 28.1283 43.8107 24.1049 40.2719 21.0069L35.2368 16.6007C35.6273 16.2894 35.9236 15.8757 36.0926 15.4057C36.2617 14.9358 36.2968 14.4282 36.1942 13.9395C36.0916 13.4507 35.8552 13.0001 35.5114 12.6379C35.1676 12.2757 34.7299 12.0162 34.2472 11.8882L38.8174 5.03331C38.9265 4.86996 38.9796 4.67557 38.9687 4.47942C38.9577 4.28328 38.8833 4.09601 38.7567 3.94581C38.734 3.92044 38.705 3.90503 38.6806 3.88147L38.6878 3.87422C37.2919 2.55908 35.4491 1.82229 33.5312 1.8125C32.0181 1.8153 30.5416 2.2787 29.2982 3.14106C26.4842 1.91038 23.5625 0.676969 19.3937 3.80625C19.2084 3.94525 19.0833 4.14999 19.0442 4.37838C19.0051 4.60677 19.0549 4.84146 19.1835 5.03422L23.7537 11.8891C23.318 12.0039 22.9182 12.2263 22.5909 12.5359C22.2636 12.8455 22.0193 13.2325 21.8805 13.6611C21.7418 14.0898 21.7129 14.5464 21.7967 14.9891C21.8805 15.4318 22.0741 15.8464 22.3599 16.1947L18.0706 20.1985L19.3086 21.5225L23.9196 17.2188H33.1905L39.0811 22.3708C42.2229 25.1226 44.5744 28.6622 45.8934 32.625H42.3962C41.7277 32.6257 41.0869 32.8916 40.6142 33.3642C40.1416 33.8369 39.8757 34.4777 39.875 35.1462V37.3538C39.8776 37.9465 40.0909 38.5189 40.4768 38.9688C40.0909 39.4186 39.8776 39.991 39.875 40.5837V42.7913C39.8787 43.057 39.9245 43.3204 40.0109 43.5716C39.4582 43.7007 38.9652 44.0125 38.6116 44.4565C38.258 44.9005 38.0646 45.4509 38.0625 46.0185V48.2261C38.0646 48.7937 38.258 49.344 38.6116 49.7881C38.9652 50.2321 39.4582 50.5439 40.0109 50.673C39.9245 50.9242 39.8787 51.1876 39.875 51.4533V53.6609C39.8791 53.7672 39.8897 53.8731 39.9067 53.9781C39.013 54.2384 38.0871 54.372 37.1562 54.375H37.0421C37.1143 54.1455 37.1527 53.9068 37.1562 53.6663V51.4587C37.1536 50.866 36.9403 50.2936 36.5545 49.8438C36.9403 49.3939 37.1536 48.8215 37.1562 48.2288V46.0212C37.1555 45.3527 36.8897 44.7119 36.417 44.2392C35.9444 43.7666 35.3035 43.5007 34.6351 43.5H23.3649C22.6965 43.5007 22.0556 43.7666 21.583 44.2392C21.1103 44.7119 20.8445 45.3527 20.8438 46.0212V48.2288C20.8464 48.8215 21.0597 49.3939 21.4455 49.8438C21.0597 50.2936 20.8464 50.866 20.8438 51.4587V53.6663C20.8473 53.9068 20.8857 54.1455 20.9579 54.375H20.8438C19.9131 54.3737 18.9873 54.242 18.0933 53.9835C18.1103 53.8785 18.1209 53.7726 18.125 53.6663V51.4587C18.1213 51.193 18.0755 50.9296 17.9891 50.6784C18.5418 50.5493 19.0348 50.2375 19.3884 49.7935C19.742 49.3495 19.9354 48.7991 19.9375 48.2315V46.0212C19.9354 45.4536 19.742 44.9033 19.3884 44.4592C19.0348 44.0152 18.5418 43.7034 17.9891 43.5743C18.0755 43.3231 18.1213 43.0597 18.125 42.794V40.5837C18.1224 39.991 17.9091 39.4186 17.5233 38.9688C17.9091 38.5189 18.1224 37.9465 18.125 37.3538V35.1462C18.1243 34.4777 17.8584 33.8369 17.3858 33.3642C16.9131 32.8916 16.2723 32.6257 15.6038 32.625H11.9516C13.0938 28.9471 15.1201 25.6052 17.8531 22.8919L16.5844 21.6041C13.503 24.6595 11.2565 28.454 10.0594 32.625H4.33369C3.66525 32.6257 3.02439 32.8916 2.55173 33.3642C2.07908 33.8369 1.81322 34.4777 1.8125 35.1462V37.3538C1.81513 37.9465 2.02841 38.5189 2.41425 38.9688C2.02841 39.4186 1.81513 39.991 1.8125 40.5837V42.7913C1.81455 43.3589 2.00801 43.9092 2.36159 44.3533C2.71517 44.7973 3.2082 45.1091 3.76094 45.2382C3.67455 45.4894 3.62866 45.7528 3.625 46.0185V48.2261C3.62866 48.4917 3.67455 48.7551 3.76094 49.0064C3.2073 49.1357 2.71359 49.4483 2.35991 49.8934C2.00623 50.3386 1.81333 50.8901 1.8125 51.4587V53.6663C1.81322 54.3348 2.07908 54.9756 2.55173 55.4483C3.02439 55.9209 3.66525 56.1868 4.33369 56.1875H15.6038C16.1872 56.1851 16.7513 55.9783 17.1979 55.603C18.3748 55.9888 19.6053 56.186 20.8438 56.1875H37.1562C38.3947 56.186 39.6252 55.9888 40.8021 55.603C41.2487 55.9783 41.8128 56.1851 42.3962 56.1875H53.6663C54.3348 56.1868 54.9756 55.9209 55.4483 55.4483C55.9209 54.9756 56.1868 54.3348 56.1875 53.6663V51.4587C56.1854 50.8911 55.992 50.3408 55.6384 49.8967C55.2848 49.4527 54.7918 49.1409 54.2391 49.0118C54.3255 48.7606 54.3713 48.4972 54.375 48.2315V46.0212C54.3713 45.7555 54.3255 45.4921 54.2391 45.2409C54.7918 45.1118 55.2848 44.8 55.6384 44.356C55.992 43.912 56.1854 43.3616 56.1875 42.794V40.5837C56.1849 39.991 55.9716 39.4186 55.5857 38.9688C55.9716 38.5189 56.1849 37.9465 56.1875 37.3538V35.1462C56.1868 34.4777 55.9209 33.8369 55.4483 33.3642C54.9756 32.8916 54.3348 32.6257 53.6663 32.625ZM36.1086 4.25937C34.5753 4.65331 32.9582 4.57049 31.4732 4.02194C32.1278 3.76042 32.8263 3.62572 33.5312 3.625C34.4275 3.63737 35.309 3.85435 36.1086 4.25937ZM28.6475 4.83756C30.6856 5.73022 32.9358 6.71803 35.8821 6.17156L32.1402 11.7812H25.8598L21.1836 4.76688C24.1507 2.86556 26.1562 3.74281 28.6475 4.83484V4.83756ZM24.4688 15.4062C24.2284 15.4062 23.9979 15.3108 23.8279 15.1408C23.658 14.9709 23.5625 14.7404 23.5625 14.5C23.5625 14.2596 23.658 14.0291 23.8279 13.8592C23.9979 13.6892 24.2284 13.5938 24.4688 13.5938H33.5312C33.7716 13.5938 34.0021 13.6892 34.1721 13.8592C34.342 14.0291 34.4375 14.2596 34.4375 14.5C34.4375 14.7404 34.342 14.9709 34.1721 15.1408C34.0021 15.3108 33.7716 15.4062 33.5312 15.4062H24.4688ZM18.125 48.2288C18.1248 48.4167 18.05 48.5968 17.9172 48.7297C17.7843 48.8625 17.6042 48.9373 17.4163 48.9375H6.14619C5.95831 48.9373 5.77819 48.8625 5.64533 48.7297C5.51248 48.5968 5.43774 48.4167 5.4375 48.2288V46.0212C5.43774 45.8333 5.51248 45.6532 5.64533 45.5203C5.77819 45.3875 5.95831 45.3127 6.14619 45.3125H7.25V47.125H9.0625V45.3125H10.875V47.125H12.6875V45.3125H14.5V47.125H16.3125V45.3125H17.4163C17.6042 45.3127 17.7843 45.3875 17.9172 45.5203C18.05 45.6532 18.1248 45.8333 18.125 46.0212V48.2288ZM3.625 35.1462C3.62524 34.9583 3.69998 34.7782 3.83283 34.6453C3.96569 34.5125 4.14581 34.4377 4.33369 34.4375H5.4375V36.25H7.25V34.4375H9.0625V36.25H10.875V34.4375H12.6875V36.25H14.5V34.4375H15.6038C15.7917 34.4377 15.9718 34.5125 16.1047 34.6453C16.2375 34.7782 16.3123 34.9583 16.3125 35.1462V37.3538C16.3123 37.5417 16.2375 37.7218 16.1047 37.8547C15.9718 37.9875 15.7917 38.0623 15.6038 38.0625H4.33369C4.14581 38.0623 3.96569 37.9875 3.83283 37.8547C3.69998 37.7218 3.62524 37.5417 3.625 37.3538V35.1462ZM3.625 40.5837C3.62524 40.3958 3.69998 40.2157 3.83283 40.0828C3.96569 39.95 4.14581 39.8752 4.33369 39.875H5.4375V41.6875H7.25V39.875H9.0625V41.6875H10.875V39.875H12.6875V41.6875H14.5V39.875H15.6038C15.7917 39.8752 15.9718 39.95 16.1047 40.0828C16.2375 40.2157 16.3123 40.3958 16.3125 40.5837V42.7913C16.3123 42.9792 16.2375 43.1593 16.1047 43.2922C15.9718 43.425 15.7917 43.4998 15.6038 43.5H4.33369C4.14581 43.4998 3.96569 43.425 3.83283 43.2922C3.69998 43.1593 3.62524 42.9792 3.625 42.7913V40.5837ZM16.3125 53.6663C16.3123 53.8542 16.2375 54.0343 16.1047 54.1672C15.9718 54.3 15.7917 54.3748 15.6038 54.375H4.33369C4.14581 54.3748 3.96569 54.3 3.83283 54.1672C3.69998 54.0343 3.62524 53.8542 3.625 53.6663V51.4587C3.62524 51.2708 3.69998 51.0907 3.83283 50.9578C3.96569 50.825 4.14581 50.7502 4.33369 50.75H5.4375V52.5625H7.25V50.75H9.0625V52.5625H10.875V50.75H12.6875V52.5625H14.5V50.75H15.6038C15.7917 50.7502 15.9718 50.825 16.1047 50.9578C16.2375 51.0907 16.3123 51.2708 16.3125 51.4587V53.6663ZM22.6562 46.0212C22.6565 45.8333 22.7312 45.6532 22.8641 45.5203C22.9969 45.3875 23.1771 45.3127 23.3649 45.3125H24.4688V47.125H26.2812V45.3125H28.0938V47.125H29.9062V45.3125H31.7188V47.125H33.5312V45.3125H34.6351C34.8229 45.3127 35.0031 45.3875 35.1359 45.5203C35.2688 45.6532 35.3435 45.8333 35.3438 46.0212V48.2288C35.3435 48.4167 35.2688 48.5968 35.1359 48.7297C35.0031 48.8625 34.8229 48.9373 34.6351 48.9375H23.3649C23.1771 48.9373 22.9969 48.8625 22.8641 48.7297C22.7312 48.5968 22.6565 48.4167 22.6562 48.2288V46.0212ZM23.3649 54.375C23.1771 54.3748 22.9969 54.3 22.8641 54.1672C22.7312 54.0343 22.6565 53.8542 22.6562 53.6663V51.4587C22.6565 51.2708 22.7312 51.0907 22.8641 50.9578C22.9969 50.825 23.1771 50.7502 23.3649 50.75H24.4688V52.5625H26.2812V50.75H28.0938V52.5625H29.9062V50.75H31.7188V52.5625H33.5312V50.75H34.6351C34.8229 50.7502 35.0031 50.825 35.1359 50.9578C35.2688 51.0907 35.3435 51.2708 35.3438 51.4587V53.6663C35.3435 53.8542 35.2688 54.0343 35.1359 54.1672C35.0031 54.3 34.8229 54.3748 34.6351 54.375H23.3649ZM41.6875 35.1462C41.6877 34.9583 41.7625 34.7782 41.8953 34.6453C42.0282 34.5125 42.2083 34.4377 42.3962 34.4375H43.5V36.25H45.3125V34.4375H47.125V36.25H48.9375V34.4375H50.75V36.25H52.5625V34.4375H53.6663C53.8542 34.4377 54.0343 34.5125 54.1672 34.6453C54.3 34.7782 54.3748 34.9583 54.375 35.1462V37.3538C54.3748 37.5417 54.3 37.7218 54.1672 37.8547C54.0343 37.9875 53.8542 38.0623 53.6663 38.0625H42.3962C42.2083 38.0623 42.0282 37.9875 41.8953 37.8547C41.7625 37.7218 41.6877 37.5417 41.6875 37.3538V35.1462ZM39.875 46.0212C39.8752 45.8333 39.95 45.6532 40.0828 45.5203C40.2157 45.3875 40.3958 45.3127 40.5837 45.3125H41.6875V47.125H43.5V45.3125H45.3125V47.125H47.125V45.3125H48.9375V47.125H50.75V45.3125H51.8538C52.0417 45.3127 52.2218 45.3875 52.3547 45.5203C52.4875 45.6532 52.5623 45.8333 52.5625 46.0212V48.2288C52.5623 48.4167 52.4875 48.5968 52.3547 48.7297C52.2218 48.8625 52.0417 48.9373 51.8538 48.9375H40.5837C40.3958 48.9373 40.2157 48.8625 40.0828 48.7297C39.95 48.5968 39.8752 48.4167 39.875 48.2288V46.0212ZM54.375 53.6663C54.3748 53.8542 54.3 54.0343 54.1672 54.1672C54.0343 54.3 53.8542 54.3748 53.6663 54.375H42.3962C42.2083 54.3748 42.0282 54.3 41.8953 54.1672C41.7625 54.0343 41.6877 53.8542 41.6875 53.6663V51.4587C41.6877 51.2708 41.7625 51.0907 41.8953 50.9578C42.0282 50.825 42.2083 50.7502 42.3962 50.75H43.5V52.5625H45.3125V50.75H47.125V52.5625H48.9375V50.75H50.75V52.5625H52.5625V50.75H53.6663C53.8542 50.7502 54.0343 50.825 54.1672 50.9578C54.3 51.0907 54.3748 51.2708 54.375 51.4587V53.6663ZM54.375 42.7913C54.3748 42.9792 54.3 43.1593 54.1672 43.2922C54.0343 43.425 53.8542 43.4998 53.6663 43.5H42.3962C42.2083 43.4998 42.0282 43.425 41.8953 43.2922C41.7625 43.1593 41.6877 42.9792 41.6875 42.7913V40.5837C41.6877 40.3958 41.7625 40.2157 41.8953 40.0828C42.0282 39.95 42.2083 39.8752 42.3962 39.875H43.5V41.6875H45.3125V39.875H47.125V41.6875H48.9375V39.875H50.75V41.6875H52.5625V39.875H53.6663C53.8542 39.8752 54.0343 39.95 54.1672 40.0828C54.3 40.2157 54.3748 40.3958 54.375 40.5837V42.7913Z"
            fill="#1E1E1E"
          />
        </svg>
      </div>
    </section>

    <section className={styles["section-8"]}>
    <div className={styles["section-8-h1"]}>
        <span>
          <span className={styles["section-8-h1-span"]}>
            Implementing
          </span>
          <span className={styles["section-8-h1-span2"]}>
            {" "}
            an offerwall solution provides you an avenue to offer premium
            content to your users without making them pay the price,{" "}
          </span>
          <span className={styles["section-8-h1-span3"]}>
            engaging more users
          </span>
          <span className={styles["section-8-h1-span4"]}>
            {" "}
            and decreasing churn.{" "}
          </span>
        </span>{" "}
      </div>

      <svg
      className={styles["section-8-background"]}
      width="1515"
      height="3106"
      viewBox="0 0 1515 3106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 144.5C0 144.5 36.5 143 288.562 135C465.911 129.371 475 280.502 664.5 237C1141.5 127.5 1515 0 1515 0V3106H0V144.5Z"
        fill="#F7F8FC"
      />
      </svg>
      
      <svg
        className={styles["section-8-detail"]}
        width="2084"
        height="877"
        viewBox="0 0 2084 877"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-0.57711 875.615L-1.96165 876.193L-0.807427 878.962L0.57711 878.385L-0.57711 875.615ZM690.665 589.113L691.543 587.897L690.088 587.729L690.665 589.113ZM951.369 777.297L950.491 778.513L952.139 778.584L951.369 777.297ZM1618.25 378.477L1617.48 377.19L1618.25 378.477ZM0.57711 878.385L691.242 590.498L690.088 587.729L-0.57711 875.615L0.57711 878.385ZM689.787 590.33L950.491 778.513L952.247 776.08L691.543 587.897L689.787 590.33ZM952.139 778.584L1619.02 379.765L1617.48 377.19L950.599 776.009L952.139 778.584ZM1619.02 379.765L1910.77 205.287L1909.23 202.713L1617.48 377.19L1619.02 379.765Z"
          fill="url(#paint0_linear_217_2507)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_217_2507"
            x1="1784.14"
            y1="231.746"
            x2="525.674"
            y2="668.9"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#28B4A7" stopOpacity="0.18" />
            <stop offset="0.53125" stopColor="#A4D1E4" stopOpacity="0.7" />
            <stop offset="1" stopColor="#8764E3" stopOpacity="0.18" />
          </linearGradient>
        </defs>
      </svg>
    </section>

    <section className={styles["section-9"]}>
    <div className={styles["section-9-h1"]}>Blog </div>
      
      <div className={styles["section-9-all-articles"]}>All articles </div>



      <div className={styles["section-9-first-block"]}></div>
      <div className={styles["section-9-first-block-h1"]}>
        Exploring Offerwall Solutions for Monetization and Retention: a
        Comparative Analysis{" "}
      </div>
      <div className={styles["section-9-first-block-date"]}>Jul 19 2023 </div>
      <div className={styles["section-9-first-block-read"]}>8 min read </div>
        <svg
          className={styles.time}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_217_2715)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.004 0.998047C5.94003 0.998047 0.996094 5.93498 0.996094 11.9979C0.996094 18.0608 5.94103 23.0038 12.004 23.0038C18.0669 23.0038 23.0018 18.0608 23.0018 11.9979C23.0018 5.93498 18.0669 0.998047 12.004 0.998047ZM12.004 2.99802C13.1863 2.99605 14.3574 3.2275 15.4501 3.67911C16.5428 4.13072 17.5356 4.7936 18.3715 5.62974C19.2075 6.46588 19.8702 7.45882 20.3215 8.55162C20.7729 9.64441 21.0041 10.8156 21.0018 11.9979C21.0042 13.1806 20.7731 14.3521 20.3219 15.4453C19.8707 16.5385 19.2081 17.5318 18.3722 18.3685C17.5363 19.2051 16.5435 19.8686 15.4507 20.3208C14.3579 20.773 13.1866 21.0051 12.004 21.0038C10.8208 21.0052 9.64895 20.7733 8.55554 20.3213C7.46213 19.8692 6.46862 19.2059 5.6319 18.3694C4.79518 17.5328 4.13167 16.5395 3.67938 15.4462C3.22709 14.3529 2.99488 13.1811 2.99607 11.9979C2.99607 7.01597 7.02202 2.99802 12.004 2.99802ZM11.988 4.984C11.8558 4.98529 11.7252 5.01278 11.6037 5.06487C11.4822 5.11696 11.3722 5.19262 11.2802 5.28747C11.1881 5.38232 11.1158 5.49448 11.0673 5.61747C11.0189 5.74046 10.9953 5.87183 10.998 6.00398V11.9979C10.9985 12.1295 11.025 12.2597 11.076 12.381C11.127 12.5023 11.2014 12.6124 11.295 12.7049L15.2949 16.7069C15.3874 16.8021 15.498 16.8779 15.6201 16.9299C15.7423 16.982 15.8736 17.0092 16.0063 17.0099C16.1391 17.0107 16.2707 16.985 16.3934 16.9344C16.5161 16.8837 16.6275 16.8092 16.7212 16.715C16.8148 16.6209 16.8887 16.5091 16.9386 16.386C16.9886 16.263 17.0135 16.1313 17.012 15.9985C17.0105 15.8658 16.9825 15.7347 16.9298 15.6128C16.8771 15.491 16.8006 15.3809 16.7049 15.2889L12.9999 11.5839V6.00398C13.0026 5.86997 12.9784 5.73679 12.9286 5.61235C12.8787 5.48791 12.8044 5.37475 12.71 5.2796C12.6156 5.18445 12.5031 5.10925 12.379 5.05847C12.255 5.00769 12.122 4.98236 11.988 4.984Z"
              fill="#1E1E1E"
            />
          </g>
          <defs>
            <clipPath id="clip0_217_2715">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      <img
        className={styles["section-9-first-block-image"]}
        src="secret-of-mobile-apps-6.png"
      />
      <div className={styles["section-9-first-block-button"]}>
        <div className={styles["button-2"]}>
          <div className={styles["rectangle-11772"]}></div>
          <div className={styles["read-more2"]}>Read more </div>
        </div>
      </div>


      <div className={styles["section-9-second-block"]}></div>
      <div className={styles["section-9-second-block-h1"]}>
        Mastering Offerwall Monetisation: Strategies to Boost Your Earnings{" "}
      </div>
      <div className={styles["section-9-second-block-date"]}>Jul 28 2023 </div>
      <div className={styles["section-9-second-block-read"]}>8 min read </div>
        <svg
          className={styles.time2}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_217_2719)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0036 0.915039C5.44503 0.915039 0.913086 5.44057 0.913086 10.9982C0.913086 16.5559 5.44595 21.087 11.0036 21.087C16.5613 21.087 21.085 16.5559 21.085 10.9982C21.085 5.44057 16.5613 0.915039 11.0036 0.915039ZM11.0036 2.74835C12.0874 2.74654 13.161 2.9587 14.1626 3.37268C15.1642 3.78666 16.0743 4.3943 16.8406 5.16076C17.6069 5.92722 18.2143 6.83741 18.6281 7.83914C19.0418 8.84087 19.2537 9.91443 19.2517 10.9982C19.2539 12.0824 19.0421 13.1562 18.6284 14.1583C18.2148 15.1604 17.6074 16.071 16.8412 16.8379C16.0749 17.6049 15.1649 18.213 14.1631 18.6276C13.1614 19.0421 12.0877 19.2549 11.0036 19.2536C9.91905 19.255 8.84487 19.0424 7.84258 18.628C6.84028 18.2136 5.92957 17.6056 5.16257 16.8388C4.39558 16.0719 3.78737 15.1614 3.37277 14.1592C2.95816 13.157 2.74531 12.0828 2.7464 10.9982C2.7464 6.43147 6.43685 2.74835 11.0036 2.74835ZM10.989 4.56883C10.8678 4.57001 10.7481 4.59521 10.6367 4.64296C10.5253 4.69071 10.4246 4.76006 10.3402 4.84701C10.2558 4.93396 10.1895 5.03677 10.1451 5.14951C10.1007 5.26225 10.079 5.38267 10.0815 5.50382V10.9982C10.082 11.1189 10.1063 11.2382 10.153 11.3494C10.1997 11.4606 10.2679 11.5615 10.3537 11.6463L14.0203 15.3148C14.1052 15.4021 14.2065 15.4716 14.3185 15.5193C14.4304 15.567 14.5508 15.5919 14.6725 15.5926C14.7942 15.5933 14.9148 15.5697 15.0273 15.5233C15.1398 15.4769 15.2419 15.4086 15.3277 15.3223C15.4135 15.236 15.4813 15.1335 15.5271 15.0207C15.5729 14.9079 15.5957 14.7872 15.5943 14.6655C15.5929 14.5438 15.5673 14.4236 15.519 14.3119C15.4707 14.2002 15.4006 14.0993 15.3128 14.015L11.9166 10.6188V5.50382C11.9191 5.38097 11.8968 5.25889 11.8512 5.14482C11.8055 5.03075 11.7374 4.92702 11.6509 4.8398C11.5643 4.75258 11.4611 4.68364 11.3474 4.63709C11.2337 4.59054 11.1118 4.56733 10.989 4.56883Z"
              fill="#1E1E1E"
            />
          </g>
          <defs>
            <clipPath id="clip0_217_2719">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
      <img className={styles["section-9-second-block-image"]} src="rectangle7.png" />
      <div className={styles["section-9-second-block-button"]}>
        <div className={styles["button-2"]}>
        <div className={styles["rectangle-11774"]}></div>
          <div className={styles["read-more4"]}>Read more </div>
        </div>
      </div>


      <div className={styles["section-9-third-block"]}></div>
      <div className={styles["section-9-third-block-h1"]}>
        Behind the Scenes: How Advertisers Create Irresistible Offerwall
        Campaigns{" "}
      </div>
      <div className={styles["section-9-third-block-date"]}>Jul 28 2023 </div>
      <div className={styles["section-9-third-block-read"]}>8 min read </div>
        <svg
          className={styles.time3}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_217_2723)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0036 0.915039C5.44503 0.915039 0.913086 5.44057 0.913086 10.9982C0.913086 16.5559 5.44595 21.087 11.0036 21.087C16.5613 21.087 21.085 16.5559 21.085 10.9982C21.085 5.44057 16.5613 0.915039 11.0036 0.915039ZM11.0036 2.74835C12.0874 2.74654 13.161 2.9587 14.1626 3.37268C15.1642 3.78666 16.0743 4.3943 16.8406 5.16076C17.6069 5.92722 18.2143 6.83741 18.6281 7.83914C19.0418 8.84087 19.2537 9.91443 19.2517 10.9982C19.2539 12.0824 19.0421 13.1562 18.6284 14.1583C18.2148 15.1604 17.6074 16.071 16.8412 16.8379C16.0749 17.6049 15.1649 18.213 14.1631 18.6276C13.1614 19.0421 12.0877 19.2549 11.0036 19.2536C9.91905 19.255 8.84487 19.0424 7.84258 18.628C6.84028 18.2136 5.92957 17.6056 5.16257 16.8388C4.39558 16.0719 3.78737 15.1614 3.37277 14.1592C2.95816 13.157 2.74531 12.0828 2.7464 10.9982C2.7464 6.43147 6.43685 2.74835 11.0036 2.74835ZM10.989 4.56883C10.8678 4.57001 10.7481 4.59521 10.6367 4.64296C10.5253 4.69071 10.4246 4.76006 10.3402 4.84701C10.2558 4.93396 10.1895 5.03677 10.1451 5.14951C10.1007 5.26225 10.079 5.38267 10.0815 5.50382V10.9982C10.082 11.1189 10.1063 11.2382 10.153 11.3494C10.1997 11.4606 10.2679 11.5615 10.3537 11.6463L14.0203 15.3148C14.1052 15.4021 14.2065 15.4716 14.3185 15.5193C14.4304 15.567 14.5508 15.5919 14.6725 15.5926C14.7942 15.5933 14.9148 15.5697 15.0273 15.5233C15.1398 15.4769 15.2419 15.4086 15.3277 15.3223C15.4135 15.236 15.4813 15.1335 15.5271 15.0207C15.5729 14.9079 15.5957 14.7872 15.5943 14.6655C15.5929 14.5438 15.5673 14.4236 15.519 14.3119C15.4707 14.2002 15.4006 14.0993 15.3128 14.015L11.9166 10.6188V5.50382C11.9191 5.38097 11.8968 5.25889 11.8512 5.14482C11.8055 5.03075 11.7374 4.92702 11.6509 4.8398C11.5643 4.75258 11.4611 4.68364 11.3474 4.63709C11.2337 4.59054 11.1118 4.56733 10.989 4.56883Z"
              fill="#1E1E1E"
            />
          </g>
          <defs>
            <clipPath id="clip0_217_2723">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
      <img className={styles["section-9-third-block-image"]} src="rectangle8.png" />
      <div className={styles["section-9-third-block-button"]}>
        <div className={styles["button-2"]}>
          <div className={styles["rectangle-11773"]}></div>
          <div className={styles["read-more3"]}>Read more </div>
        </div>
      </div>
    </section>

    <section className={styles.section10}>
    <div className={styles["section-10"]}></div>
      <div className={styles["section-10-h2"]}>
        Learn more or schedule a call for advice on how you can maximize the
        impact of offerwall monetization on your own mobile games. {" "}
      </div>
      <div className={styles["section-10-h1"]}>
        <span>
          <span className={styles["section-10-h1-span"]}>Get </span>
          <span className={styles["section-10-h1-span2"]}>in touch</span>
        </span>{" "}
      </div>
      <div className={styles["section-10-button-h2"]}>
        <div className={styles["contact-us"]}>contact us </div>
      </div>  
      <div className={styles["section-10-button"]}>
        <div className={styles["rectangle-11732"]}></div>
        <svg
          className={styles.message}
          width="84"
          height="84"
          viewBox="0 0 84 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.44633 19.5796L9.44499 19.5805L9.4339 19.5867L9.41676 19.5961L9.41475 19.5975L9.41088 19.5996L9.38467 19.6151L9.3835 19.6159C9.25531 19.6935 9.13637 19.7905 9.03087 19.9066L9.02919 19.9084C9.02179 19.9165 9.01457 19.9247 9.00735 19.9329L9.00449 19.9363L9.00163 19.9397C8.99609 19.9459 8.99071 19.9524 8.98534 19.9588L8.98332 19.9612L8.97979 19.9655L8.97526 19.9711C8.96971 19.9778 8.96451 19.9844 8.95913 19.9911L8.9556 19.9954L8.95006 20.0027L8.9467 20.007L8.93847 20.018L8.93225 20.0259L8.92637 20.0339L8.92217 20.0396L8.91595 20.0484L8.90974 20.0568L8.90386 20.0652L8.89865 20.0727L8.89344 20.0803L8.8879 20.0884L8.88269 20.0962L8.87597 20.1062L8.8716 20.113L8.86673 20.1204L8.8627 20.1268L8.8543 20.1401L8.85077 20.1461L8.8464 20.1532L8.82675 20.1863L8.82406 20.1912L8.80793 20.2201L8.80491 20.2258L8.8044 20.2266L8.80255 20.23L8.78979 20.2542L8.78659 20.2609L8.78609 20.2617L8.78458 20.2647L8.77265 20.2888L8.76895 20.2967L8.75619 20.3239L8.75199 20.3336C8.66412 20.5314 8.61523 20.7503 8.61523 20.9808V64.1517C8.61523 64.4383 8.69083 64.7075 8.82322 64.9398C8.90974 65.0927 9.02347 65.2338 9.16325 65.3554L9.16678 65.3586L9.16879 65.3603C9.17417 65.3649 9.17955 65.3696 9.18509 65.3741L9.19063 65.3786L9.19601 65.3833L9.20004 65.3865C9.20659 65.3919 9.21331 65.3973 9.22003 65.4027L9.22591 65.4074L9.23129 65.4116C9.23784 65.4166 9.24439 65.4216 9.25095 65.4265L9.25632 65.4307L9.26271 65.4352C9.26926 65.4403 9.27598 65.4452 9.2827 65.4499L9.2874 65.4534L9.29412 65.4581L9.29866 65.4611L9.31445 65.472L9.31899 65.4752L9.32587 65.4798L9.33209 65.484L9.34536 65.4925L9.35107 65.4964L9.35779 65.5006L9.36586 65.5056L9.37745 65.5129C9.62021 65.6619 9.90564 65.7477 10.2112 65.7477H76.7181C77.0237 65.7477 77.3091 65.6619 77.5519 65.5129L77.5635 65.5056L77.5715 65.5006L77.5782 65.4964L77.584 65.4925L77.5972 65.484L77.6034 65.4798L77.6103 65.4752L77.6149 65.472L77.6307 65.4611L77.6352 65.4581L77.6419 65.4534L77.6466 65.4499C77.6533 65.4452 77.6601 65.4403 77.6666 65.4352L77.673 65.4307L77.6784 65.4265C77.6849 65.4216 77.6915 65.4166 77.698 65.4116L77.7034 65.4074L77.7093 65.4027C77.716 65.3975 77.7227 65.3919 77.7293 65.3865L77.7333 65.3833L77.7387 65.3786L77.7442 65.3741C77.7498 65.3696 77.7551 65.3649 77.7605 65.3603L77.7625 65.3586L77.7661 65.3554C77.9058 65.2338 78.0194 65.0929 78.1061 64.9398C78.2385 64.7075 78.3141 64.4383 78.3141 64.1517V20.9808C78.3141 20.7503 78.2652 20.5314 78.1773 20.3336L78.1731 20.3239L78.1615 20.2992L78.1567 20.2888L78.1447 20.2647L78.1432 20.2617L78.1427 20.2609L78.1395 20.2542L78.1268 20.23L78.1249 20.2266L78.1244 20.2258L78.1214 20.2201L78.1071 20.1945L78.1026 20.1863L78.0829 20.1532L78.0785 20.1461L78.075 20.1401L78.0666 20.1268L78.0626 20.1204L78.0577 20.113L78.0533 20.1062L78.0466 20.0962L78.0414 20.0884L78.0359 20.0803L78.0307 20.0727L78.0255 20.0652L78.0196 20.0568L78.0134 20.0484L78.0071 20.0396L78.0029 20.0339L77.9971 20.0259L77.9908 20.018L77.9826 20.007L77.9793 20.0027L77.9737 19.9954L77.9702 19.9911C77.965 19.9845 77.9596 19.9778 77.9541 19.9711L77.9495 19.9655L77.946 19.9612L77.944 19.9588C77.9386 19.9524 77.9332 19.9459 77.9277 19.9397L77.9248 19.9363L77.922 19.9329C77.9147 19.9247 77.9075 19.9165 77.9001 19.9084L77.8985 19.9066C77.7931 19.7905 77.674 19.6935 77.5458 19.6159L77.5184 19.5996L77.5146 19.5975L77.5126 19.5961L77.4954 19.5867L77.4843 19.5805L77.483 19.5796C77.256 19.4553 76.9953 19.3848 76.7181 19.3848H10.2112C9.93403 19.3848 9.6733 19.4553 9.44633 19.5796ZM75.1221 24.3888L52.4488 43.2876C47.2447 47.6254 39.6847 47.6254 34.4805 43.2876L11.8072 24.3888V59.7684L27.1104 41.5401C27.6769 40.8654 28.6843 40.7776 29.359 41.3439C30.0336 41.9102 30.1214 42.9179 29.5551 43.5924L13.6351 62.5557H73.2942L57.3742 43.5924C56.8079 42.9179 56.8958 41.9102 57.5703 41.3439C58.245 40.7776 59.2525 40.8654 59.819 41.5401L75.1221 59.7684V24.3888ZM14.6187 22.5768L36.5242 40.8358C40.5445 44.1868 46.3848 44.1868 50.4051 40.8358L72.3106 22.5768H14.6187Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={styles["section-10-image-container"]}>
        <div className={styles["section-10-image"]}>
          <img
              className={styles["mobile-lottery-smatched-2"]}
              src="mobile-lottery-smatched-2.png"
            />
        </div>
        
      </div>
    </section>
      
      <svg
        className={styles["app-lovin-hybrid-monetization-blog-1440-x-810-templates-3"]}
        width="1512"
        height="799"
        viewBox="0 0 1512 799"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      </svg>

      <svg
        className={styles["app-lovin-hybrid-monetization-blog-1440-x-810-templates-6"]}
        width="1512"
        height="546"
        viewBox="0 0 1512 546"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M1512 34.5L1512 545.999L-0.00112246 545.999L-0.000855373 21.0006C-0.000855373 21.0006 2.33118 19.0385 96.4998 5.50054C333 -28.4995 311.5 137.999 637 52.9991C831.266 2.26919 945 -10.5 1512 34.5Z"
          fill="url(#paint0_angular_217_2738)"
        />
        <defs>
          <radialGradient
            id="paint0_angular_217_2738"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1347.5 742.555) rotate(-40.1207) scale(465.549 468.558)"
          >
            <stop offset="0.048565" stopColor="#07101B" />
            <stop offset="0.160936" stopColor="#28B4A7" />
            <stop offset="0.619027" stopColor="#0A004A" />
            <stop offset="0.742459" stopColor="#35168F" />
          </radialGradient>
        </defs>
      </svg>

      <svg
        className={styles["app-lovin-hybrid-monetization-blog-1440-x-810-templates-7"]}
        width="1512"
        height="618"
        viewBox="0 0 1512 618"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M1512 32.5L1512 617.003L-2.69506e-05 617.003L-6.49349e-06 149C-6.49349e-06 149 148.324 114.542 240.5 101.002C471.995 66.9974 593.389 207.014 912 122.003C996.636 99.4212 1021 58.4997 1133 27.9989C1276.01 -10.9459 1339.9 -7.84845 1512 32.5Z"
          fill="url(#paint0_angular_217_2739)"
        />
        <defs>
          <radialGradient
            id="paint0_angular_217_2739"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1459.98 814.004) rotate(-40.7295) scale(459.839 464.398)"
          >
            <stop offset="0.048565" stopColor="#4D71B8" />
            <stop offset="0.160936" stopColor="#28B4A7" />
            <stop offset="0.619027" stopColor="#6C55FF" />
            <stop offset="0.742459" stopColor="#21168F" />
          </radialGradient>
        </defs>
      </svg>

      <div className={styles.footer}>
        <div className={styles["copyright-2023-footer-title-all-rights-reserved"]}>
          © Copyright 2023 Offerwall Monetization. All Rights Reserved.{" "}
        </div>
      </div>
      <div className={styles["frame-414"]}>
        <div className={styles["fa-qs"]}>FAQs </div>
        <div className={styles.blog3}>Blog </div>
        <div className={styles.partnerships}>Partnerships </div>
        <div className={styles["privacy-policy"]}>Privacy Policy </div>
      </div>
      <div className={styles["footer-divider"]}></div>
      <svg
        className={styles.vector14}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.4944 13.2691H16.5174V13.233L16.4944 13.2691ZM16.4944 13.2691H16.5174V13.233L16.4944 13.2691ZM16.4944 13.2691H16.5174V13.233L16.4944 13.2691ZM16.4944 13.2691H16.5174V13.233L16.4944 13.2691ZM16.4944 13.2691H16.5174V13.233L16.4944 13.2691ZM16.4944 13.2691H16.5174V13.233L16.4944 13.2691ZM16.4944 13.2691H16.5174V13.233L16.4944 13.2691ZM16.4944 13.2691H16.5174V13.233L16.4944 13.2691ZM16.4944 13.2691H16.5174V13.233L16.4944 13.2691ZM16.4944 13.2691H16.5174V13.233L16.4944 13.2691ZM16.4944 13.2691H16.5174V13.233L16.4944 13.2691ZM16.4944 13.2691H16.5174V13.233L16.4944 13.2691ZM16.4944 13.2691H16.5174V13.233L16.4944 13.2691ZM16.4944 13.2691H16.5174V13.233L16.4944 13.2691ZM16.4944 13.2691H16.5174V13.233L16.4944 13.2691ZM16.4944 13.2691H16.5174V13.233L16.4944 13.2691ZM15 0C12.0333 0 9.13319 0.879734 6.66645 2.52796C4.19971 4.17618 2.27713 6.51886 1.14181 9.25975C0.00649908 12.0006 -0.290551 15.0166 0.288228 17.9263C0.867006 20.8361 2.29562 23.5088 4.3934 25.6066C6.49119 27.7044 9.16393 29.133 12.0736 29.7118C14.9834 30.2906 17.9994 29.9935 20.7403 28.8582C23.4811 27.7229 25.8238 25.8003 27.472 23.3335C29.1203 20.8668 30 17.9667 30 15C29.9957 11.0231 28.4139 7.2103 25.6018 4.3982C22.7897 1.58609 18.9769 0.00434683 15 0ZM11.2492 21.7528C11.2483 21.8193 11.2213 21.8828 11.174 21.9295C11.1266 21.9762 11.0628 22.0024 10.9963 22.0024H8.10598C8.03978 22.0024 7.97629 21.9761 7.92948 21.9293C7.88266 21.8825 7.85637 21.819 7.85637 21.7528V12.0407C7.85593 12.0077 7.86207 11.9749 7.87442 11.9442C7.88677 11.9135 7.90508 11.8856 7.92831 11.8621C7.95153 11.8386 7.97919 11.8199 8.00969 11.8071C8.04019 11.7944 8.07292 11.7878 8.10598 11.7878H10.9963C11.0295 11.7878 11.0624 11.7944 11.0931 11.8071C11.1237 11.8198 11.1516 11.8384 11.1751 11.8619C11.1986 11.8854 11.2172 11.9133 11.2299 11.9439C11.2426 11.9746 11.2492 12.0075 11.2492 12.0407V21.7528ZM9.44932 10.4905C9.09009 10.4905 8.73892 10.3839 8.44024 10.1844C8.14155 9.9848 7.90875 9.70113 7.77128 9.36925C7.63381 9.03736 7.59784 8.67217 7.66792 8.31984C7.73801 7.96752 7.91099 7.64388 8.165 7.38987C8.41902 7.13586 8.74265 6.96287 9.09497 6.89279C9.4473 6.82271 9.8125 6.85868 10.1444 6.99615C10.4763 7.13362 10.7599 7.36642 10.9595 7.66511C11.1591 7.96379 11.2656 8.31495 11.2656 8.67418C11.266 8.91282 11.2194 9.1492 11.1282 9.36976C11.0371 9.59032 10.9033 9.79071 10.7346 9.95946C10.5658 10.1282 10.3654 10.262 10.1449 10.3531C9.92433 10.4442 9.68796 10.4909 9.44932 10.4905ZM23.4804 21.7528C23.4795 21.8193 23.4525 21.8828 23.4052 21.9295C23.3578 21.9762 23.294 22.0024 23.2275 22.0024H20.3372C20.3044 22.0024 20.272 21.9959 20.2417 21.9834C20.2114 21.9709 20.1839 21.9525 20.1607 21.9293C20.1375 21.9061 20.1191 21.8786 20.1066 21.8483C20.094 21.818 20.0876 21.7856 20.0876 21.7528V16.5338C20.0876 15.1609 19.5982 14.2347 18.3698 14.2347C17.9871 14.2369 17.6143 14.3573 17.3027 14.5796C16.991 14.8018 16.7558 15.115 16.6291 15.4762C16.5425 15.7432 16.5047 16.0236 16.5174 16.3039V21.7528C16.5174 21.8199 16.4908 21.8842 16.4433 21.9316C16.3959 21.979 16.3316 22.0057 16.2645 22.0057H13.3742C13.3412 22.0057 13.3084 21.9991 13.2779 21.9864C13.2474 21.9736 13.2198 21.9549 13.1965 21.9314C13.1733 21.9079 13.155 21.88 13.1426 21.8493C13.1303 21.8187 13.1242 21.7858 13.1246 21.7528C13.1246 20.3668 13.1607 13.637 13.1246 12.0539C13.1242 12.0208 13.1303 11.988 13.1426 11.9573C13.155 11.9267 13.1733 11.8988 13.1965 11.8752C13.2198 11.8517 13.2474 11.833 13.2779 11.8203C13.3084 11.8075 13.3412 11.801 13.3742 11.801H16.2579C16.2913 11.8005 16.3244 11.8068 16.3552 11.8193C16.3861 11.8319 16.4142 11.8505 16.4378 11.874C16.4613 11.8976 16.4799 11.9257 16.4925 11.9566C16.505 11.9874 16.5113 12.0205 16.5108 12.0539V13.2461C16.8181 12.7128 17.2655 12.2738 17.8045 11.9768C18.3436 11.6798 18.9537 11.536 19.5686 11.5612C21.7988 11.5612 23.4738 13.0195 23.4738 16.1594L23.4804 21.7528ZM16.5174 13.279V13.2428L16.4944 13.279H16.5174ZM16.4944 13.279H16.5174V13.2428L16.4944 13.279ZM16.4944 13.279H16.5174V13.2428L16.4944 13.279ZM16.4944 13.279H16.5174V13.2428L16.4944 13.279ZM16.4944 13.279H16.5174V13.2428L16.4944 13.279ZM16.4944 13.279H16.5174V13.2428L16.4944 13.279ZM16.4944 13.279H16.5174V13.2428L16.4944 13.279ZM16.4944 13.279H16.5174V13.2428L16.4944 13.279ZM16.4944 13.279H16.5174V13.2428L16.4944 13.279ZM16.4944 13.279H16.5174V13.2428L16.4944 13.279ZM16.4944 13.279H16.5174V13.2428L16.4944 13.279ZM16.4944 13.279H16.5174V13.2428L16.4944 13.279ZM16.4944 13.279H16.5174V13.2428L16.4944 13.279ZM16.4944 13.279H16.5174V13.2428L16.4944 13.279ZM16.4944 13.279H16.5174V13.2428L16.4944 13.279Z"
          fill="white"
        />
      </svg>

      <svg
        className={styles["group-3"]}
        width="50"
        height="58"
        viewBox="0 0 50 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.9651 35.3405H26.4026C25.2732 35.3379 24.1676 34.9734 23.2137 34.2893C22.2598 33.6052 21.4967 32.6295 21.0127 31.4751H26.4026C26.6291 31.4751 26.8464 31.3733 27.0066 31.1921C27.1668 31.0109 27.2567 30.7651 27.2567 30.5088C27.2567 30.2525 27.1668 30.0067 27.0066 29.8254C26.8464 29.6442 26.6291 29.5424 26.4026 29.5424H20.4916C20.4005 28.9023 20.4005 28.2498 20.4916 27.6097H26.4026C26.6291 27.6097 26.8464 27.5079 27.0066 27.3267C27.1668 27.1454 27.2567 26.8997 27.2567 26.6434C27.2567 26.3871 27.1668 26.1413 27.0066 25.96C26.8464 25.7788 26.6291 25.677 26.4026 25.677H21.0127C21.4967 24.5226 22.2598 23.5469 23.2137 22.8628C24.1676 22.1787 25.2732 21.8143 26.4026 21.8116H28.9651C29.1917 21.8116 29.4089 21.7098 29.5691 21.5286C29.7293 21.3473 29.8193 21.1015 29.8193 20.8453C29.8193 20.589 29.7293 20.3432 29.5691 20.1619C29.4089 19.9807 29.1917 19.8789 28.9651 19.8789H26.4026C24.815 19.882 23.2673 20.441 21.9718 21.4791C20.6764 22.5173 19.6968 23.9837 19.1676 25.677H17.0065C16.78 25.677 16.5627 25.7788 16.4025 25.96C16.2423 26.1413 16.1523 26.3871 16.1523 26.6434C16.1523 26.8997 16.2423 27.1454 16.4025 27.3267C16.5627 27.5079 16.78 27.6097 17.0065 27.6097H18.7662C18.6978 28.2516 18.6978 28.9005 18.7662 29.5424H17.007C16.7805 29.5424 16.5632 29.6442 16.403 29.8254C16.2428 30.0067 16.1529 30.2525 16.1529 30.5088C16.1529 30.7651 16.2428 31.0109 16.403 31.1921C16.5632 31.3733 16.7805 31.4751 17.007 31.4751H19.1676C19.6968 33.1684 20.6764 34.6348 21.9718 35.673C23.2673 36.7112 24.815 37.2702 26.4026 37.2732H28.9651C29.1917 37.2732 29.4089 37.1714 29.5691 36.9902C29.7293 36.809 29.8193 36.5632 29.8193 36.3069C29.8193 36.0506 29.7293 35.8048 29.5691 35.6236C29.4089 35.4423 29.1917 35.3405 28.9651 35.3405Z"
          fill="#BEE4FF"
        />
        <path
          d="M15.1124 14.8634C10.5511 17.9722 7.55615 23.2091 7.55615 29.1454C7.55615 34.6514 10.1326 39.5557 14.1457 42.7183M18.9537 12.8985C20.7873 12.2355 22.7652 11.874 24.8275 11.874C32.3355 11.874 38.7245 16.6646 41.1046 23.3558M42.0293 27.5839C42.0754 28.0982 42.0989 28.6191 42.0989 29.1454C42.0989 38.6841 34.3663 46.4168 24.8275 46.4168C22.3493 46.4168 19.9929 45.8948 17.8624 44.9548"
          stroke="#BEE4FF"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M29.1455 53.3375L29.6265 54.0982C29.8884 53.9326 30.0467 53.6438 30.0455 53.3339C30.0442 53.024 29.8836 52.7366 29.6204 52.573L29.1455 53.3375ZM22.88 48.386C22.4577 48.1237 21.9028 48.2534 21.6405 48.6756C21.3783 49.0978 21.5079 49.6527 21.9302 49.915L22.88 48.386ZM21.924 56.8395C21.5039 57.1051 21.3787 57.661 21.6444 58.0812C21.9101 58.5013 22.466 58.6264 22.8861 58.3608L21.924 56.8395ZM15.4645 7.13495C15.9219 6.94055 16.1352 6.41211 15.9408 5.95465C15.7464 5.49718 15.2179 5.28393 14.7605 5.47833L15.4645 7.13495ZM24.9511 52.7848C11.6589 52.7848 0.9 42.1266 0.9 28.9991H-0.9C-0.9 43.1388 10.683 54.5848 24.9511 54.5848V52.7848ZM28.9968 52.4499C27.6821 52.6701 26.3305 52.7848 24.9511 52.7848V54.5848C26.4305 54.5848 27.8815 54.4618 29.2941 54.2252L28.9968 52.4499ZM21.9302 49.915L28.6706 54.1021L29.6204 52.573L22.88 48.386L21.9302 49.915ZM22.8861 58.3608L29.6265 54.0982L28.6644 52.5769L21.924 56.8395L22.8861 58.3608ZM0.9 28.9991C0.9 19.2002 6.8929 10.7774 15.4645 7.13495L14.7605 5.47833C5.55619 9.38969 -0.9 18.4441 -0.9 28.9991H0.9Z"
          fill="#BEE4FF"
        />
        <path
          d="M20.5098 4.26304L20.0288 3.50238C19.7668 3.66802 19.6086 3.95676 19.6098 4.26666C19.611 4.57656 19.7716 4.86403 20.0349 5.02755L20.5098 4.26304ZM26.7753 9.21459C27.1975 9.47687 27.7524 9.34721 28.0147 8.92498C28.277 8.50275 28.1473 7.94785 27.7251 7.68557L26.7753 9.21459ZM27.7313 0.761131C28.1514 0.495464 28.2766 -0.060463 28.0109 -0.480564C27.7452 -0.900665 27.1893 -1.02586 26.7692 -0.760193L27.7313 0.761131ZM34.1908 50.4656C33.7333 50.66 33.5201 51.1885 33.7145 51.6459C33.9089 52.1034 34.4373 52.3167 34.8948 52.1223L34.1908 50.4656ZM24.7042 4.81575C37.9963 4.81575 48.7553 15.474 48.7553 28.6015H50.5553C50.5553 14.4618 38.9723 3.01574 24.7042 3.01574V4.81575ZM20.6584 5.15068C21.9732 4.9305 23.3248 4.81575 24.7042 4.81575V3.01574C23.2248 3.01574 21.7738 3.13883 20.3611 3.3754L20.6584 5.15068ZM27.7251 7.68557L20.9847 3.49854L20.0349 5.02755L26.7753 9.21459L27.7251 7.68557ZM26.7692 -0.760193L20.0288 3.50238L20.9908 5.0237L27.7313 0.761131L26.7692 -0.760193ZM48.7553 28.6015C48.7553 38.4004 42.7624 46.8231 34.1908 50.4656L34.8948 52.1223C44.0991 48.2109 50.5553 39.1564 50.5553 28.6015H48.7553Z"
          fill="#E0FF22"
        />
      </svg>

      <div className={styles["footer-title"]}>
        <span>
          <span className={styles["footer-title-span"]}>offerwall</span>
          <span className={styles["footer-title-span2"]}>monetization</span>
        </span>{" "}
      </div>
      <div className={styles["header-divider"]}></div>
      <div className={styles["a-valuable-tool-for-monetizing-mobile-games"]}>
        A Valuable Tool for Monetizing Mobile Games{" "}
      </div>
    </div>
  );
};


export default Home;