import React from "react";
import "../LandingPage.css";
import Button from "react-bootstrap/Button";
import logo from "../Landing Page/LandingPageAssets/ldevelops1.png";
import laptop from "../Landing Page/LandingPageAssets/laptop.png";
import { Link } from "react-router-dom";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href =
    "https://drive.google.com/file/d/1dSVvvwy53mj1FyJoSpSl4tZvEp0875lU/view?usp=drive_link";
  link.target = "_blank";
  link.download = "Luthando Gubevu  - CV Resume.pdf";
  link.click();
};

let getx = "https://29e12d-2.myshopify.com/";

let graphicDesign =
  "https://www.behance.net/gallery/162637633/Luthando-Gubevu-Graphic-Design-Portfolio";

let alliedbiz = "https://allied-biz.co.za/";

let ska = "https://www.skaagency.co.za/";

let fundanii =
  "https://www.dispatchlive.co.za/news/2017-05-26-local-bofs-aim-to-improve-learning/";

let umgalelo =
  "https://www.figma.com/proto/au6MSDDBUFxW1j48iEdgxs/umgalelo?type=design&node-id=2-3&t=ZuvaygmvOGljznXM-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A3&mode=design";

function LandingPage() {
  return (
    <div className="flex-landing-page-body">
      <div className="flex-item-header">
        <div className="flex-item-logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>

      <div className="flex-item-body">
        <div className="flex-item-title">
          <h1 className="main-heading">
            Frontend Developer, UI & Graphic Designer
          </h1>
          <div className="laptopDiv">
            <img alt="laptop" className="laptop" src={laptop} />
          </div>
        </div>

        <div className="flex-item-download">
          <Button className="d-button" onClick={handleDownload}>
            Download CV
          </Button>
        </div>

        <div className="flex-item-about">
          <div className="about-me-div">
            <h1 className="h1">About me</h1>
          </div>
          <div className="flex-item-about-text">
            <p className="p">
              Greetings, I'm Luthando Gubevu a devoted husband, proud father,
              and a force of unwavering dedication. I thrive on hard work,
              driven by an unyielding ambition to continuously evolve and
              improve. A self-proclaimed geek, I've found my haven on the
              digital canvas, where I channel my creativity into designing,
              editing videos, and crafting transformative solutions. With an
              insatiable hunger for knowledge, I am perpetually immersed in the
              pursuit of refining my skills, always eager to elevate my craft.
              Through my unrelenting commitment and boundless enthusiasm, I
              navigate the digital realm with fervor, turning passion into
              purpose. Emboldened by ambition, I am on a resolute journey to
              leave my mark on the world of design and innovation.
            </p>
          </div>
        </div>

        <div class="flex-item-projects">
          <div className="projects-div">
            <h1 className="heading">Projects</h1>
          </div>

          <div className="predictorApp">
            <div className="getx-button-div">
              <Button
                className="projectButtons"
                onClick={() => window.open(getx, "_blank")}
              >
                Get X - E-commerce Store
              </Button>
            </div>
            <div className="getx-paragraph">
              <p className="p">
                Embarking on this endeavor, I undertook the monumental task of
                crafting a holistic e-commerce platform from the ground up.
                Every facet of the website, meticulously curated to perfection,
                bears the mark of a single-handed endeavor. From inception to
                execution, I meticulously traversed the entire spectrum of
                responsibilities, leaving no stone unturned.
                <br />
                <br /> <h6>Theme Customization:</h6> The digital canvas came to
                life through intricate theme customization, meticulously
                tailored to echo the essence of the GetX brand. The visual
                experience was calibrated to resonate with users, creating an
                immersive journey from the moment they land on the homepage.
                <br />
                <br />
                <h6>Product Universe:</h6> Navigating the labyrinth of over 300
                products, I orchestrated a symphony of organization. Each
                product found its place, seamlessly woven into an intuitive and
                engaging browsing experience.
                <br />
                <br />
                <h6>Descriptive Narratives:</h6> Elevating the ordinary to the
                extraordinary, I wielded the power of words to craft compelling
                product descriptions. Each description served as a window into
                the unique story of every item, inviting customers to forge
                deeper connections. <br />
                <br />
                <h6>Visual Artistry:</h6> The task of cultivating uniformity
                across product images was undertaken with precision and passion.
                Through meticulous editing, every image was transformed into a
                harmonious visual symphony, capturing the essence of the GetX
                brand. Strategic Ad Campaigns: The journey extended beyond
                creation, encompassing strategic thinking as I orchestrated
                advertising campaigns that captured attention and drove
                engagement. From conceptualization to execution, every campaign
                bore the imprint of innovation.
                <br />
                <br />
                <h6>Graphical Marvels:</h6> Imagination took form through the
                lens of graphical brilliance. My artistic touch infused life
                into the website, amplifying its aesthetic allure and creating
                an indelible visual impact. <br />
                <br />
                This is not just a website; it's a testament to the artistry of
                one person's vision and dedication. From conception through to
                realization, I wove the threads of design, functionality, and
                strategy into a seamless tapestry that is the GetX Shopify
                website. A manifestation of innovation and relentless
                commitment, this project stands as a shining exemplar of what it
                takes to craft an extraordinary digital retail space.
              </p>
            </div>
            <div className="predictorAppBars">
              <div className="reactDiv">
                <p className="box-paragraph">Shopify</p>
              </div>

              <div className="nodeJS">
                <p className="box-paragraph">HTML/CSS</p>
              </div>

              <div className="javaScript">
                <p className="box-paragraph">E-Commerce</p>
              </div>

              <div className="api">
                <p className="box-paragraph">UI/UX</p>
              </div>
            </div>
          </div>

          <div className="predictorApp">
            <div className="nationality-button-div">
              <Button className="projectButtons">
                <Link className="linkButtonText" to="/nationality-predictor">
                  Nationality Predictor App
                </Link>
              </Button>
            </div>
            <div className="nationality-paragraph">
              <p className="p">
                The Nationality Predictor App. It showcases my skills in both
                front-end development and API integration. I seamlessly
                connected the app to an API, allowing accurate nationality
                predictions through well-crafted JavaScript fetch functions.
                Beyond functionality, I harmonized intuitive design with
                seamless user experience. My portfolio narrative not only delves
                into technical intricacies but also highlights strategic
                decisions, emphasizing my problem-solving abilities. Moreover,
                the project's story includes the creation of the app's
                purpose-driven logo, adding an extra layer of aesthetic
                coherence. In essence, the Nationality Predictor App is a fusion
                of coding, design, and strategic thinking. My portfolio offers a
                comprehensive insight into this project's journey, showcasing my
                diverse capabilities.
              </p>
            </div>
            <div className="predictorAppBars">
              <div className="reactDiv">
                <p className="box-paragraph">React</p>
              </div>

              <div className="nodeJS">
                <p className="box-paragraph">NodeJS</p>
              </div>

              <div className="javaScript">
                <p className="box-paragraph">JavaScript</p>
              </div>

              <div className="api">
                <p className="box-paragraph">API</p>
              </div>
            </div>
          </div>

          <div className="axiosBank">
            <div className="clone-button-div">
              <Button className="projectButtons">Weather API App</Button>
            </div>
            <div className="clone-paragraph">
              <p className="p">To do...</p>
            </div>
            <div className="predictorAppBars">
              <div className="reactDiv">
                <p className="box-paragraph">HTML</p>
              </div>

              <div className="nodeJS">
                <p className="box-paragraph">CSS</p>
              </div>

              <div className="javaScript">
                <p className="box-paragraph">JavaScript</p>
              </div>

              <div className="api">
                <p className="box-paragraph">Responsive </p>
              </div>
            </div>
          </div>
        </div>
        <div className="umgalelo">
          <div className="umgalelo-button-div">
            <Button
              className="projectButtons"
              onClick={() => window.open(umgalelo, "_blank")}
            >
              Umgalelo Savings App
            </Button>
          </div>
          <div className="umgalelo-paragraph">
            <p className="p">
              I proudly present the Umgalelo Savings App, a stellar
              demonstration of my expertise in User Interface (UI) and User
              Experience (UX) design. This project redefines financial
              management through intuitive navigation, engaging visuals, and
              seamless interactions. Highlights: User-Centric Design: The
              Umgalelo Savings App prioritizes user needs, ensuring an intuitive
              journey through its features. Visual Appeal: Engaging visuals
              create an immersive experience, fostering user engagement and
              motivation. Smooth Interactions: Carefully crafted buttons and
              gestures provide seamless interactions, enhancing usability.
              Personalization: Users can tailor the app to their unique
              financial goals, creating a personalized experience. Education
              Integration: The app empowers users with financial knowledge
              through integrated educational resources. Responsive Experience: A
              responsive design ensures consistency and enjoyment across various
              devices. This project showcases my dedication to merging
              creativity with functionality, making complex processes simple,
              and enhancing user lives. As a UI/UX endeavor, the Umgalelo
              Savings App reflects my journey in crafting digital experiences
              that empower and elevate.
            </p>
          </div>
          <div className="umgaleloDiv">
            <div className="reactDiv">
              <p className="box-paragraph">UI/UX</p>
            </div>

            <div className="nodeJS">
              <p className="box-paragraph">Figma</p>
            </div>

            <div className="adobePhotoshop">
              <p className="box-paragraph">Adobe Photoshop</p>
            </div>

            <div className="adobeIllustrator">
              <p className="box-paragraph">Adobe Illustrator</p>
            </div>
          </div>
        </div>

        <div className="portfolio">
          <div className="graphic-design-button-div">
            <Button
              className="projectButtons"
              onClick={() => window.open(graphicDesign, "_blank")}
            >
              Graphic Design Portfolio
            </Button>
          </div>
          <div className="graphic-design-paragraph">
            <p className="p">
              Graphic Design Portfolio, where every project is a testament to my
              ability to bring ideas to life with color, composition, and
              creativity. Project Highlights: Branding Magic: Witness the
              transformation of businesses through compelling logos, captivating
              brand identities, and memorable visual elements that communicate
              ethos and values. <br />
              <br />
              <h6>Print Collaterals: </h6>Explore a gallery of meticulously
              designed print materials from eye-catching brochures and posters
              to elegant business cards each piece crafted to make a lasting
              impression. <br />
              <br />
              <h6>Digital Delights:</h6> Immerse yourself in the digital realm
              with stunning web graphics, engaging social media visuals, and UI
              elements that merge aesthetics with functionality.
              <br />
              <br /> <h6>Illustrative Excellence:</h6> Discover my illustration
              prowess, breathing life into concepts through intricate artwork
              that captures attention and conveys messages. <br />
              <br />
              <h6>Typography Play: </h6>Dive into a world where fonts become
              art. Typography projects demonstrate my mastery in selecting,
              pairing, and arranging fonts to enhance visual impact.
              <br />
              <br /> <h6>Videography Fusion:</h6> Experience how photography
              blends seamlessly with design, creating compositions that evoke
              emotions and tell compelling stories. Through my Graphic Design
              Portfolio, I showcase not just individual projects, but a journey
              of growth, adaptability, and exploration in the dynamic world of
              design.
              <br />
              <br />
              From conceptualization to execution, each piece is a manifestation
              of my dedication to crafting visuals that resonate, engage, and
              leave a lasting impression.
            </p>
          </div>
          <div className="portfolioDiv">
            <div className="reactDiv">
              <p className="box-paragraph">Branding</p>
            </div>

            <div className="nodeJS">
              <p className="box-paragraph">Design</p>
            </div>

            <div className="adobePhotoshop">
              <p className="box-paragraph">Adobe Photoshop</p>
            </div>

            <div className="adobeIllustrator">
              <p className="box-paragraph">Adobe Illustrator</p>
            </div>
          </div>
        </div>

        <div className="flex-item-experience">
          <h1 className="heading">Experience</h1>

          <div className="alliedDiv">
            <div className="marketingDesign-div">
              <div>
                <Button
                  className="allied-button"
                  onClick={() => window.open(alliedbiz, "_blank")}
                >
                  Allied Business Solutions
                </Button>
              </div>
              <div>
                <h4>Marketing Manager & Graphic Design </h4>
                <h6>November 2022 - Present</h6>
              </div>
            </div>
            <p className="p">
              <br />
              <h6>Graphic Designer:</h6> In the realm of design, I've honed my
              ability to breathe life into ideas through visual artistry. From
              crafting captivating logos that embody brands' essence to
              conceptualizing print materials that stand as tangible testaments
              to creativity, I've brought imagination to reality. My proficiency
              extends to typography play, where fonts evolve into expressive
              elements, and my illustrative prowess is evident in intricate
              artwork that communicates messages beyond words. <br />
              <br />
              <h6>Social Media Manager: </h6>Stepping into the role of a Social
              Media Manager, I've embraced the power of digital platforms to
              connect brands with their audiences. Through engaging visual
              content, strategic campaigns, and a deep understanding of user
              behavior, I've harnessed social media's potential to drive
              engagement, build communities, and amplify brand presence. My
              journey in social media management reflects my ability to fuse
              creativity with strategy, fostering meaningful connections in the
              digital landscape. <br />
              <br /> <h6>WordPress/Shopify Developer:</h6> As a WordPress
              Developer, I've navigated the world of web development, sculpting
              online spaces that seamlessly merge design aesthetics with
              functional excellence. From conceptualizing user-friendly
              interfaces to skillfully coding interactive elements, I've brought
              websites to life using WordPress as a canvas. This role
              underscores my technical acumen and knack for creating digital
              experiences that captivate and engage users. My portfolio
              encapsulates not only the individual roles but the synergy that
              arises from their convergence. The projects showcased here are not
              siloed achievements; they're a testament to my ability to
              seamlessly integrate design, strategy, and development. Join me on
              this journey through creativity, innovation, and growth as I
              continue to push boundaries and redefine the art of digital
              expression.
            </p>
          </div>

          <div className="ska">
            <div className="dtp-artist-paragraph">
              <div>
                <Button
                  className="ska-button"
                  onClick={() => window.open(ska, "_blank")}
                >
                  Sondlo & Knopp Advertising Agency
                </Button>
              </div>
              <div>
                <h4>Graphic Designer & DTP Artist </h4>
                <h6>October 2021 - October 2022</h6>
              </div>
            </div>
            <p className="p">
              <br />
              Throughout my time in this dynamic role, I've harnessed my
              creative energy and technical finesse to deliver impactful visual
              solutions across a spectrum of projects. <br />
              <br />
              <h6>Key Responsibilities and Accomplishments:</h6>
              <br /> <h6>Classified Ad Creation:</h6> A testament to my
              attention to detail, I crafted compelling classified ads for
              newspapers, ensuring that information was communicated effectively
              and aesthetically. <br />
              <br />
              <h6>Document Formatting:</h6> As part of my work with the Buffalo
              City Municipality, I meticulously formatted documents, ensuring
              they were visually polished and aligned with professional
              standards. <br />
              <br />
              <h6>InDesign Proficiency:</h6> InDesign was my daily companion,
              serving as the canvas for my desktop publishing mastery. From
              arranging content to preparing documents for print, I navigated
              the software with finesse. <br />
              <br />
              <h6>Diverse Print Materials: </h6>My expertise extended to a
              variety of print materials, from banners, gazebos, billboards, and
              street signs to eye-catching posters and engaging pamphlets for
              festivals and events.
              <br />
              <br /> <h6>Collaborative Teamwork:</h6> Working within a dynamic
              team of three graphic designers, I embraced my role as the junior
              member while contributing my creative insights to collaborative
              projects.
              <br />
              <br /> <h6>Reason for Leaving:</h6> Having embarked on a one-year
              contract, I embarked on this journey knowing that the company
              already had an established senior graphic designer with a decade
              of experience. This experience provided me with invaluable
              insights and a platform to learn and contribute within a dynamic
              team.
              <br />
              <br /> In my portfolio, I encapsulate the essence of these
              accomplishments and experiences, showcasing my proficiency in
              design software, attention to detail, collaborative spirit, and
              adaptability. These experiences have laid a strong foundation for
              my journey as a graphic designer, and my portfolio is a tribute to
              the creative prowess and technical expertise I've gained along the
              way.
            </p>
          </div>

          <div className="freelance">
            <div className="fundanii-div">
              <div>
                <Button
                  className="fundanii-button"
                  onClick={() => window.open(fundanii, "_blank")}
                >
                  Fundanii
                </Button>
              </div>
              <div>
                <h4>Freelance Graphic Designer & Social Entrepreneur</h4>
                <h6>January 2017 - September 2021</h6>
              </div>
            </div>
            <p className="p">
              <br />
              Between 2017 and 2022, I embarked on a journey of impactful change
              and empowerment in education. Co-founding the Fundanii education
              project alongside Sinovuyo Apleni, we forged a lasting impact on
              digital learning. <br />
              <br />
              In the heart of Mdantsane, we recognized the gap in digital
              education between township and privileged schools. With a
              commitment to education and technology, we set out to bridge this
              divide, giving birth to the Fundanii computer literacy digital
              learning app.
              <br />
              <br /> Partnering with schools like Mzimkhulu, Mfundo,
              Langelitsha, and Gcobani senior primary, we introduced the app.
              Starting with basic computer literacy, we progressed to a
              comprehensive digitized curriculum, sparking positive responses
              from students and educators.
              <br />
              <br /> Beyond the classroom, our digital story "The Adventures of
              Lizzy and Bean" amplified engagement. After-school, weekend, and
              holiday programs extended our impact, reinforcing our commitment
              to lasting transformation.
              <br />
              <br /> This portfolio is a testament to my journey from 2017 to
              2022. The Fundanii project exemplifies my dedication to education,
              technology, and empowerment. Join me on this remarkable path that
              redefines education through the transformative power of digital
              learning.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-item-footer">
        <div className="footerInfo">
          <p>
            Designed in <strong>Figma</strong> & coded in{" "}
            <strong>Visual Studio Code</strong> by Me. Built with{" "}
            <strong>ReactJS</strong> & <strong>CSS</strong>.
          </p>
        </div>

        <div>
          <p>Copyright &copy; 2023</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
