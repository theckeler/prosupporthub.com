import "../stylesheets/App.min.css";
import { ReactComponent as DewaltLogo } from "../images/dewalt-logo.svg";
import { ReactComponent as ProLogo } from "../images/pro-support-logo.svg";
import { ReactComponent as ToughLogo } from "../images/tough.svg";
import { ReactComponent as IconClock } from "../images/icon-clock.svg";
import { ReactComponent as IconLocation } from "../images/icon-location.svg";
import { ReactComponent as IconService } from "../images/icon-service.svg";

function App() {
  const onClick = (e) => {
    e.target.classList.toggle("active");
    const ariaToggle =
      e.target.getAttribute("aria-expanded") === "true" ? "false" : "true";
    e.target.setAttribute("aria-expanded", ariaToggle);
    e.target.nextSibling.classList.toggle("active");
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Oswald"
      ></link>
      <header className="bg-yellow">
        <div className="columns wrapper">
          <DewaltLogo />
          <ProLogo />
        </div>
      </header>

      <main>
        <section className="hero section-1">
          <div className="wrapper">
            <div className="overlay">
              <h1>IF YOUR NAME IS ON THE TRUCK, WE'VE GOT YOUR BACK.</h1>
              <p>
                Facing some downtime? On it. Need air filters, like, yesterday?
                We’ve got you. Blades? We’ll find them. The Pro Support Hub is a
                completely reimagined digital service solution that finds
                landscapers the right help, right now.
              </p>
              <a
                href="https://www.prosupporthub.com/app"
                title="Register Now"
                className="btn"
              >
                Register Now
              </a>
            </div>
          </div>
          <img
            src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-dewaltprosupporthub-Library/default/vaf1f92605191906da014946878c090b217b08d45/hero.jpg"
            alt=""
          />
        </section>

        <section className="section-2">
          <div className="wrapper">
            <ul className="columns grid columns-3">
              <li className="column">
                <IconClock />
                <h2>ACCESS EXPERT SERVICE, FAST</h2>
                <p>
                  Don’t waste time waiting. Enjoy a direct, priority line to our
                  customer service center to solve issues quickly.
                </p>
              </li>
              <li className="column">
                <IconLocation />
                <h2>LOCATE PRIORITY SERVICE CENTERS</h2>
                <p>
                  Have a major repair need? Quickly find the nearest authorized
                  service center.
                </p>
              </li>
              <li className="column">
                <IconService />
                <h2>FIND RESOURCES & ORDER PARTS</h2>
                <p>
                  Search videos, articles and other resources for
                  troubleshooting and maintenance. Plus, find & order the parts
                  you need.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-black section-3">
          <div className="wrapper">
            <h2>Let's get to work</h2>
            <p>Create your account for exclusive videos, articles, and more.</p>
            <a
              href="https://www.prosupporthub.com/app"
              title="Register Now"
              className="btn btn-primary stretched-link"
            >
              Register Now
            </a>
          </div>
        </section>

        <section className="bg-yellow section-4">
          <div className="wrapper">
            <ul className="columns grid columns-2">
              <li>
                <div className="video-wrapper">
                  <iframe
                    src="https://mtdproducts.widen.net/s/p9wmdmn2qd/dewalt-60s-prosupporthub_final"
                    title="Dewalt 60S Pro Support Hub"
                  />
                </div>
              </li>
              <li>
                <h2>On the go? Download the app.</h2>
                <p>
                  Our innovative digital hub provides 1:1 service when and how
                  you need it. Accessible through mobile or desktop, admission
                  comes free with the registration of your DEWALT® Commercial
                  Mower.
                </p>
                <ul className="apps columns grid columns-2">
                  <li className="column">
                    <a
                      href="https://apps.apple.com/us/app/pro-support-hub/id1546159111"
                      title="Download on the App Store"
                    >
                      <img
                        src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-dewaltprosupporthub-Library/default/v82fdb814b5be646bdc8a0f1afa2d7da1a01cf736/icon-apple-app-store.png"
                        alt="Apple: Download on the App Store"
                      />
                    </a>
                  </li>
                  <li className="column">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.mysalesforce.mycommunity.C00DA0000000hHewMAE.A0OT2G0000004C94WAE&amp;hl=en_US&amp;gl=US"
                      title="Get in on Google Play"
                    >
                      <img
                        src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-dewaltprosupporthub-Library/default/v82fdb814b5be646bdc8a0f1afa2d7da1a01cf736/icon-google-play-badge.png"
                        alt="Get in on Google Play"
                      />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section className="section bg-grey section-5">
          <div className="wrapper">
            <h2>YOUR SUPPORT</h2>

            <div className="container">
              <ul className="columns grid columns-2 bg-white">
                <li className="column photo">
                  <img
                    src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-dewaltprosupporthub-Library/default/v82fdb814b5be646bdc8a0f1afa2d7da1a01cf736/watch-and-learn-videos.jpg"
                    className="img-fluid"
                    alt="Watch and Learn videos"
                  />
                </li>
                <li className="column copy">
                  <h3>Videos &amp; Articles</h3>
                  <p>
                    Search videos, articles and other resources for
                    troubleshooting and maintenance.
                  </p>
                  <a
                    href="https://mtd.force.com/ProSupportHub/s/maintenance-repair"
                    title="See Videos"
                    className="btn btn-primary stretched-link"
                  >
                    See Videos
                  </a>
                </li>
              </ul>

              <ul className="columns grid columns-2 bg-white">
                <li className="column photo">
                  <picture>
                    <img
                      src="https://www.prosupporthub.com/on/demandware.static/-/Sites-dewaltprosupporthub-Library/default/dwd8292270/images/order-parts.jpg"
                      className="img-fluid"
                      alt="Order parts"
                    />
                  </picture>
                </li>
                <li className="column copy">
                  <h3>Identify &amp; Order Parts</h3>
                  <p>
                    Our part finder features enhanced search capabilities to
                    painlessly locate and purchase the parts you need to keep
                    you mowing.
                  </p>
                  <a
                    href="https://mtd.force.com/ProSupportHub/s/find-parts"
                    title="Shop Parts"
                    className="btn btn-primary stretched-link"
                  >
                    Shop Parts
                  </a>
                </li>
              </ul>

              <ul className="columns grid columns-2 bg-white">
                <li className="column photo">
                  <picture>
                    <img
                      src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-dewaltprosupporthub-Library/default/v82fdb814b5be646bdc8a0f1afa2d7da1a01cf736/find-service.jpg"
                      className="img-fluid"
                      alt="Find service"
                    />
                  </picture>
                </li>
                <li className="column copy">
                  <h3>Find Service Centers Near You</h3>
                  <p>
                    Have a major repair need? Quickly find the nearest
                    authorized service center.
                  </p>
                  <a
                    href="https://mtd.force.com/ProSupportHub/s/find-service"
                    title="Find a Service Center"
                    className="btn btn-primary stretched-link"
                  >
                    Find a Service Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-6 bg-white">
          <div className="wrapper">
            <div className="overlay">
              <h2>
                Shop DeWalt<sup>®</sup> Riding &amp; Zero-Turn Mowers
              </h2>
              <a
                href="https://www.homedepot.com/collection/Outdoors/DEWALT-Commercial-Lawn-Mowers/Family-316132592?omsid=314730667"
                title="Shop Now"
                className="btn btn-primary stretched-link"
              >
                Shop Now
              </a>
            </div>
          </div>
          <img
            src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-dewaltprosupporthub-Library/default/v82fdb814b5be646bdc8a0f1afa2d7da1a01cf736/DEWALT_Family.jpg"
            alt=""
          />
        </section>

        <section className="section-7 bg-grey">
          <div className="wrapper">
            <h3>Pro Support Hub FAQs</h3>

            <ul className="questions">
              <li>
                <button
                  className="question"
                  onClick={onClick}
                  aria-expanded="false"
                  id="question-1"
                  aria-controls="answer-1"
                >
                  How do I register?
                </button>
                <div
                  id="answer-1"
                  className="answer"
                  aria-labelledby="question-1"
                  role="region"
                >
                  Download the Pro Support Hub app in the Google Play or Apple
                  App Store. Or you can visit 
                  <a
                    href="https://www.prosupporthub.com/app"
                    title="Pro Support Hub"
                  >
                    www.prosupporthub.com/app
                  </a>
                  .
                </div>
              </li>

              <li>
                <button
                  className="question"
                  onClick={onClick}
                  aria-expanded="false"
                  id="question-2"
                  aria-controls="answer-2"
                >
                  What if there is not a repair center near me?
                </button>
                <div
                  id="answer-2"
                  className="answer"
                  aria-labelledby="question-2"
                  role="region"
                >
                  Since this is a new product line, we are still working to
                  build out our Authorized Dealer Network. If you have or are
                  thinking about purchasing a piece of equipment and there are
                  no service centers close to you, please call us at
                  855.971.1123 and we will work to find and setup an authorized
                  dealer in your local market. 
                </div>
              </li>

              <li>
                <button
                  className="question"
                  onClick={onClick}
                  aria-expanded="false"
                  id="question-3"
                  aria-controls="answer-3"
                >
                  What does priority service mean?
                </button>
                <div
                  id="answer-3"
                  className="answer"
                  aria-labelledby="question-3"
                  role="region"
                >
                  DEWALT Outdoor Power Equipment Authorized Dealers are
                  incentivized to assist DEWALT customers with the quickest
                  possible turnaround time to keep your equipment up and
                  running.
                </div>
              </li>

              <li>
                <button
                  className="question"
                  onClick={onClick}
                  aria-expanded="false"
                  id="question-4"
                  aria-controls="answer-4"
                >
                  How do I add a second machine to my account?
                </button>
                <div
                  id="answer-4"
                  className="answer"
                  aria-labelledby="question-4"
                  role="region"
                >
                  Other products can be added in the “My Account” dashboard of
                  the Pro Support Hub app. Just click the “+” symbol on the “Add
                  a machine” button and enter product information to register
                  multiple products to your account.
                </div>
              </li>

              <li>
                <button
                  className="question"
                  onClick={onClick}
                  aria-expanded="false"
                  id="question-5"
                  aria-controls="answer-5"
                >
                  Who can I contact for help or questions?
                </button>
                <div
                  id="answer-5"
                  className="answer"
                  aria-labelledby="question-5"
                  role="region"
                >
                  You can contact the DEWALT Outdoor Power Equipment Customer
                  Support Center at 855.971.1123.
                </div>
              </li>

              <li>
                <button
                  className="question"
                  onClick={onClick}
                  aria-expanded="false"
                  id="question-6"
                  aria-controls="answer-6"
                >
                  Can I add other DEWALT products to my account?
                </button>
                <div
                  id="answer-6"
                  className="answer"
                  aria-labelledby="question-6"
                  role="region"
                >
                  No, at this point, DEWALT Professional gas outdoor power
                  equipment are the only products that available through the Pro
                  Support Hub.
                </div>
              </li>

              <li>
                <button
                  className="question"
                  onClick={onClick}
                  aria-expanded="false"
                  id="question-7"
                  aria-controls="answer-7"
                >
                  Are there any fees with this service?
                </button>
                <div
                  id="answer-7"
                  className="answer"
                  aria-labelledby="question-7"
                  role="region"
                >
                  There are no fees or subscriptions required to utilize the Pro
                  Support Hub app/website, the only requirement is the purchase
                  of a piece of DEWALT Professional Outdoor Power Equipment.
                </div>
              </li>

              <li>
                <button
                  className="question"
                  onClick={onClick}
                  aria-expanded="false"
                  id="question-8"
                  aria-controls="answer-8"
                >
                  What additional benefits do I get for registering my product
                  and utilizing the Pro Support Hub?
                </button>
                <div
                  id="answer-8"
                  className="answer"
                  aria-labelledby="question-8"
                  role="region"
                >
                  Customers gain access to a direct, personalized customer
                  service line that is answered directly by a trained,
                  experienced product expert. You will have the ability to
                  chat/text directly with a customer support representative or
                  even video chat for easy and efficient diagnosis of an issue.
                  Access to the Pro Support Hub will also allow you to keep
                  records of your purchases and store your product’s pertinent
                  information (along with the service dealer locator, parts
                  finder, and How-to videos featured above).
                </div>
              </li>

              <li>
                <button
                  className="question"
                  onClick={onClick}
                  aria-expanded="false"
                  id="question-9"
                  aria-controls="answer-9"
                >
                  Where do I take a product for warranty and/or service repairs?
                </button>
                <div
                  id="answer-9"
                  className="answer"
                  aria-labelledby="question-9"
                  role="region"
                >
                  The Home Depot does not currently offer in-house repairs on
                  professional equipment this size. There is a national
                  authorized network of servicing dealers that are trained and
                  qualified to perform any maintenance or repair worked needed.
                  You can visit the “Find Service Centers Near You” section
                  above or login into the Pro Support Hub app to find your local
                  authorized dealer.
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <div className="bg-yellow tough">
          <div className="wrapper ">
            <ToughLogo />
          </div>
        </div>

        <div className="copyright wrapper">
          <p>
            © 2020 DEWALT. DEWALT® and GUARANTEED TOUGH® are registered
            trademarks of the DEWALT Industrial Tool Co., used under license.
            All rights reserved. The yellow and black color scheme is a
            trademark for DEWALT Power Tools and Accessories. Product specs and
            programs subject to change without notice.
          </p>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.prosupporthub.com/on/demandware.store/Sites-dewaltprosupporthub-Site/default/Home-TermsOfUse"
                  title="Terms of User"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#TermsOfUse")
                      .classList.add("active");
                  }}
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="https://www.prosupporthub.com/on/demandware.store/Sites-dewaltprosupporthub-Site/default/Home-PrivacyPolicy"
                  title="Privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#PrivacyPolicy")
                      .classList.add("active");
                  }}
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="https://www.prosupporthub.com/on/demandware.store/Sites-dewaltprosupporthub-Site/default/Home-TextMessageTermsAndConditions"
                  title="Text Message Terms"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#TextMessageTermsAndConditions")
                      .classList.add("active");
                  }}
                >
                  Text Message Terms
                </a>
              </li>
            </ul>
            <p>
              App Store® and App Store® logo are registered trademarks of Apple
              Inc. Google Play and the Google Play logo are trademarks of Google
              LLC.
            </p>
          </nav>
        </div>
      </footer>

      <div
        className="modal"
        id="TermsOfUse"
        onClick={(e) => {
          e.preventDefault();
          e.target.classList.remove("active");
        }}
      >
        <div className="modal-wrapper">
          <div
            className="close"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#TermsOfUse").classList.remove("active");
            }}
          >
            ✕
          </div>
          <div className="modal-content">
            <h1>Terms of use</h1>
            <sub>Effective 12/1/2020</sub>

            <h2>I. Introduction</h2>

            <p>
              These Terms of Use (“Terms”) apply to the Pro Support Hub website,
              mobile site, services, and applications where these Terms appear
              or are linked. The references in these Terms to “MTD Products
              Inc,” “MTD,” “we,” “us,” and “our” refer to MTD Products Inc, a
              Delaware corporation, together with its subsidiaries and
              affiliates.
            </p>

            <p>
              BY ACCESSING OR USING THE PRO SUPPORT HUB WEBSITE, MOBILE VERSIONS
              OF THE WEBSITE, AND MOBILE APPLICATION (each individually a
              “SITE”) YOU AGREE TO THESE TERMS AND CONDITIONS. Any person or
              entity who interacts with the Sites is considered to be using the
              Site. If, at any time, you do not accept all of the Terms, you
              should stop using the Site.
            </p>

            <p>
              The Terms set forth below are subject to change by MTD, and they
              are effective when posted on the Sites. You also acknowledge and
              agree that MTD may revise these Terms of Use or the content of its
              Sites at any time and without any prior notice.
            </p>

            <p>
              Any information collected on these Sites is governed by MTD’s
              Privacy Policy. To access and use certain information or services
              available through these Sites, you may be required to register
              with MTD. Additionally, by using the Site, you acknowledge and
              agree that Internet transmissions are never completely private or
              secure. You understand that any message or information you send to
              the Site may be read or intercepted by others, even if there is a
              special notice that a particular transmission (for example, credit
              card information) is encrypted.
            </p>

            <h2>II. Content</h2>

            <p>
              All text, graphics, user interfaces, visual interfaces,
              photographs, trademarks, logos, sounds, music, artwork, software
              to create mobile applications, and computer code (collectively,
              "Content"), including but not limited to the design, structure,
              selection, coordination, expression, "look and feel" and
              arrangement of such Content, contained on the Site is owned,
              controlled or licensed by or to MTD, and is protected by trade
              dress, copyright, patent and trademark laws, and various other
              intellectual property rights and unfair competition laws.,
              applicable international treaties and other applicable laws of the
              State of Ohio, United States, and international jurisdictions.
              Except for the limited uses provided in these Terms, MTD does not
              grant you a license or any other right to use any of the content
              on these Sites.
            </p>

            <h2>III. License and Access</h2>

            <p>
              MTD grants you a limited license to access and make personal use
              of these Sites. As noted above, we do not grant any right, title,
              or interest in our Content to you. Use of these Sites is for
              non-commercial purposes only. You may use Content, and information
              on MTD products and services (such as data sheets, knowledge base
              articles, and similar materials) purposely made available by MTD
              for downloading from the Site, provided that you (1) not remove
              any proprietary notice language in all copies of such documents,
              (2) use such information only for your personal, non-commercial
              informational purpose and do not copy or post such information on
              any networked computer or broadcast it in any media, (3) make no
              modifications to any such information, and (4) not make any
              additional representations or warranties relating to such
              documents. Any efforts to access, download, print, post, store or
              otherwise use the Sites or any of the Content for any commercial
              purpose, for yourself or for any third party, is a material breach
              of these Terms.
            </p>

            <p>
              Except as expressly provided in these Terms of Use, no part of the
              Site and no Content may be copied, reproduced, republished,
              uploaded, posted, publicly displayed, encoded, translated,
              transmitted or distributed in any way (including "mirroring") to
              any other computer, server, Web site or other medium for
              publication or distribution or for any commercial enterprise,
              without MTD’s express prior written consent.
            </p>

            <p>
              Any unauthorized use terminates your limited license. MTD reserves
              the right to revoke this limited license at any time for any or no
              reason. In the event of a breach of these Terms, MTD reserves the
              right to seek all remedies available by law and in equity. MTD
              retains the right at our sole discretion to deny access to anyone
              to these Sites, at any time and for any or no reason, including,
              but not limited to, for violation of these Terms.
            </p>

            <p>
              These Sites are intended for use by individuals 13 years of age or
              older. If you are under 18 or the age of majority in your
              jurisdiction, you may use this Site only with involvement of a
              parent or guardian.
            </p>

            <p>
              If you use these Sites, you are responsible for keeping your
              account information confidential.
            </p>

            <h2>IV. Prohibited Activity</h2>

            <p>Users of these Sites shall not:</p>

            <ul>
              <li>
                Post, transmit, redistribute, upload, or promote any
                communications, content or materials that are false, illegal,
                obscene, vulgar, profane, indecent, sexually explicit,
                threatening, harassing, abusive, hateful, racially or ethnically
                derogatory, defamatory, invasive of privacy or publicity rights,
                infringing of intellectual property rights, or otherwise
                injurious to third parties or objectionable;
              </li>
              <li>
                Violate or attempt to violate the security or integrity of the
                Sites posting or transmitting software viruses, corrupted files,
                or any other similar software files, the intent of which is to
                damage or alter the operation of another’s computer or device;
              </li>
              <li>
                Use any "deep-link", "page-scrape", "robot", "spider" or other
                automatic device, program, algorithm or methodology, or any
                similar or equivalent manual process, to access, acquire, copy
                or monitor any portion of the Site or any Content, or in any way
                reproduce or circumvent the navigational structure or
                presentation of the Site or any Content, to obtain or attempt to
                obtain any materials, documents or information through any means
                not purposely made available through the Site.
              </li>
              <li>
                Attempt to gain unauthorized access to any portion or feature of
                the Site, or any other systems or networks connected to the Site
                or to any MTD server, or to any of the services offered on or
                through the Site, by hacking, password "mining" or any other
                illegitimate means.
              </li>
              <li>
                Probe, scan or test the vulnerability of the Site or any network
                connected to the Site, nor breach the security or authentication
                measures on the Site or any network connected to the Site.
              </li>
              <li>
                Reverse look-up, trace or seek to trace any information on any
                other user of or visitor to the Site, including any MTD related
                account not owned by you, to its source, or exploit the Site or
                any service or information made available or offered by or
                through the Site, in any way where the purpose is to reveal any
                information, including but not limited to personal
                identification or information, other than your own information,
                as provided for by the Site.
              </li>
              <li>
                Take any action that imposes an unreasonable or
                disproportionately large load on the infrastructure of the Site
                or MTD’s systems or networks, or any systems or networks
                connected to the Site or to MTD.
              </li>
              <li>
                Forge headers or otherwise manipulate identifiers in order to
                disguise the origin of any message or transmittal you send to
                MTD on or through the Site or any service offered on or through
                the Site.
              </li>
              <li>
                Use a false email address, impersonates another person or
                entity, including MTD and its employees or agents, or is
                otherwise misleading as to the origin of the content;
              </li>
              <li>
                Encourage or engage in conduct that would violate a local,
                state, national or international regulation or law or that would
                give rise to civil liability;
              </li>
              <li>Engage in fraudulent activity on the Sites;</li>
              <li>
                Use any meta tags or hidden text which use MTD’s name or marks;
              </li>
              <li>
                Use the Sites to offer for sale or advertise goods or services
                without MTD’s written consent;
              </li>
              <li>
                Interfere with or attempt to interfere with the Sites, the
                servers or networks connected to the Sites
              </li>
              <li>
                Remove or attempt to remove any of MTD’s content from the Sites;
                or
              </li>
              <li>Modify or attempt to modify any portion of the Site.</li>
            </ul>

            <h2>V. Links to Other Sites Or Mobile Applications</h2>

            <p>
              These sites may contain links to other websites or mobile
              applications, and some other websites and mobile applications may
              link to these Sites. Unless the link is to another MTD website,
              MTD is not responsible for the contents, terms of use, or privacy
              policies of those sites. None of these links should be deemed to
              imply that MTD endorses these other sites or any content they
              contain. Access to any of these other sites or applications is at
              your own risk and MTD will have no liability arising out of or
              related to such websites, applications, and/or their content or
              for any damages or losses that may result from you access to them.
            </p>

            <strong> [Accounts, Passwords and Security </strong>

            <p>
              Certain features or services offered on or through the Site may
              require you to open an account (including setting up an ID and
              password). You are entirely responsible for maintaining the
              confidentiality of the information you hold for your account,
              including your password, and for any and all activity that occurs
              under your account as a result of your failing to keep this
              information secure and confidential. You agree to notify MTD
              immediately of any unauthorized use of your account or password,
              or any other breach of security. You may be held liable for losses
              incurred by MTD or any other user of or visitor to the Site due to
              someone else using your MTD ID, password or account as a result of
              your failing to keep your account information secure and
              confidential.
            </p>

            <p>
              You may not use anyone else’s ID, password or account at any time
              without the express permission and consent of the holder of that
              ID, password or account. MTD cannot and will not be liable for any
              loss or damage arising from your failure to comply with these
              obligations.]
            </p>

            <h2>VI. Information Submitted to these Sites</h2>

            <p>
              You may submit documents or information you to MTD through these
              Sites. These may include comments, questions, ideas, and
              photographs. You agree that MTD is under no obligation to keep
              this information confidential or to respond to your submission.
              You also agree that such information will become the property of
              MTD and, to the extent permitted by law, MTD may delete or use the
              information for any purpose whatsoever without to you and without
              your prior consent.
            </p>

            <h2>VII. Notice Of Copyright Infringement:</h2>

            <p>
              MTD is under no obligation to scan its Sites to search for
              impermissible content. However, MTD does not permit copyright
              infringing activities on these Sites and may remove any content of
              any kind, for example, if properly informed that the content
              infringes upon another's copyright rights. If you are a copyright
              owner or an agent thereof and believe that any content on this
              Sites infringes upon your copyrights, you may notify MTD by
              providing the following information in writing:
            </p>

            <ol>
              <li>
                A physical or electronic signature of a person authorized to act
                on behalf of the owner of an exclusive copyright right that is
                allegedly infringed;
              </li>
              <li>
                Identification of the location where the original or an
                authorized copy of the copyrighted work exists;
              </li>
              <li>
                Identification of the material that is claimed to be infringing
                and a description of the infringing activity and information
                reasonably sufficient to permit MTD to locate the same;
              </li>
              <li>
                Information reasonably sufficient to permit MTD to contact you,
                such as an address, telephone number, and, if available, an
                email address;
              </li>
              <li>
                A statement that you have a good faith belief that use of the
                material in the manner complained of is not authorized by the
                copyright owner, its agent, or the law; and
              </li>
              <li>
                A statement that the information in the notification is
                accurate, and, under penalty of perjury, that you are authorized
                to act on behalf of the owner of an exclusive copyright right
                that is allegedly infringed.
              </li>
            </ol>

            <p>
              You understand and acknowledge that if you fail to comply with all
              of the requirements above, your notice may not be valid.
            </p>

            <p>
              All such notices should be sent to:
              <br />
              <span>
                MTD Products Inc
                <br />
                Attn: Legal Department
                <br />
                5903 Grafton Road
                <br />
                Valley City, OH 44280
              </span>
            </p>

            <h2>VII. Disclaimer Of Warranties And Limitation Of Liability</h2>

            <p>
              THIS SITE AND ALL INFORMATION, CONTENT, MATERIALS PRODUCTS, AND
              SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH
              THIS SITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS,
              WITHOUT REPRESENTATIONS OR WARRANTIES OF ANY KIND. UNLESS
              OTHERWISE SPECIFIED IN WRITING. MTD MAKES NO REPRESENTATIONS OR
              WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF
              THIS SITE OR THE INFORMATION, THE ACCURACY OR COMPLETENESS OF THE
              CONTENT, MATERIALS OR SERVICES INCLUDED ON OR OTHERWISE MADE
              AVAILABLE TO YOU THROUGH THIS SITE, UNLESS OTHERWISE SPECIFIED IN
              WRITING. YOU EXPRESSLY AGREE THAT YOUR USE OF THIS SITE IS AT YOUR
              SOLE RISK. WE DO NOT WARRANT THAT THIS SITE, INFORMATION, CONTENT,
              MATERIALS OR SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO
              YOU THROUGH THIS SITE, THEIR SERVERS, OR EMAIL SENT FROM US ARE
              FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. MTD DISCLAIMS ANY AND
              ALL LIABILITY FOR THE ACTS, OMISSIONS AND CONDUCT OF ANY THIRD
              PARTIES IN CONNECTION WITH OR RELATED TO YOUR USE OF THE SITE. YOU
              ASSUME TOTAL RESPONSIBILITY FOR YOUR USE OF THE SITE AND ANY
              LINKED SITES. YOUR SOLE REMEDY AGAINST MTD FOR DISSATISFACTION
              WITH THE SITE OR ANY CONTENT IS TO STOP USING THE SITE OR ANY SUCH
              CONTENT. THIS LIMITATION OF RELIEF IS A PART OF THE BARGAIN
              BETWEEN THE PARTIES.
            </p>

            <p>
              From time to time, there may be information on these Sites that
              contains typographical errors, inaccuracies, or omissions that may
              relate to product descriptions, pricing, and availability. We
              reserve the right to make changes in information about price,
              description, or availability without notice. We have made every
              effort to display as accurately as possible the colors of our
              products that appear on this Site; however, the actual color you
              will see will depend on many factors, including your computer or
              device, and we cannot guarantee that your computer or device will
              accurately display our colors. The inclusion of any products on
              this Site does not imply or warrant that these products will be
              available over the internet at any particular time.
            </p>

            <p>
              To the extent permitted by applicable laws, you acknowledge and
              agree that MTD will not be liable for any direct, indirect,
              punitive, incidental, special, consequential damages arising our
              of or in any way connected with or arising from the use of these
              Sites or any content on these Sites.
            </p>

            <p>
              You also agree that, to the extent permitted by applicable law,
              you are solely responsible for any material downloaded from or
              uploaded to the Sites, and any such use of the Sites is done at
              your own risk. MTD will not be responsible for any damage to your
              computer system, device, or loss of data that results from such
              conduct.
            </p>

            <h2>IX. Terms Specific To Users Of Mobile Applications</h2>

            <p>
              In addition to all the remaining Terms herein, if you are
              downloading a mobile application provided by us, you understand
              that the use of a mobile application requires use of a mobile
              device and wireless mobile data service, which must be obtained
              from your wireless carrier, and may require Internet access, which
              must be obtained from your service provider. You are solely
              responsible for obtaining and paying for such additional services
              and obtaining a suitable device, including without limitation all
              usage charges related thereto.
            </p>
            <p>
              You also understand that you may be required to send and receive,
              at your cost, electronic communications related to the mobile
              application, including without limitation, administrative
              messages, service announcements, diagnostic data reports, and
              mobile application updates, from MTD, your mobile carrier or third
              party service providers. Depending on the terms of your wireless
              mobile plan, you may incur additional charges from your wireless
              service provider in connection with your use of the mobile
              application. You are solely responsible for obtaining any
              additional subscription or connectivity services or equipment
              necessary to access the mobile application, including but not
              limited to payment of all third party fees associated therewith,
              including fees for information sent to or through the mobile
              application.
            </p>
            <p>
              Information regarding the use of text messages as part of the
              mobile application is included in the Text Message Terms and
              Conditions, which are incorporated herein.
            </p>
            <p>
              The mobile application may not work with all devices or all mobile
              carriers. MTD makes no representations that the mobile application
              will be compatible with or provided by all mobile carriers. In the
              event that fees are charged for the mobile application, or other
              third party service providers charge a fee for the products or
              services they provide, you agree to pay such fee to the respective
              party in exchange for your continued use of such products or
              services. Some services may be subject to different or additional
              terms (including fees), which you will be required to agree to
              prior to your use of such services.
            </p>
            <p>
              You are responsible for understanding the Terms and Conditions
              which may be applicable to your devices. It is also possible that
              as you download a mobile application, you may be asked to agree to
              terms in addition to these Terms regarding collection of
              information, including location information or warranties. If
              there is a conflict between these Terms and the terms you agree to
              at the time of downloading, the terms you agree to when
              downloading the mobile application will control. You understand
              and acknowledge that the terms of agreement with your respective
              mobile network provider will continue to apply when using the
              downloaded mobile application. You also acknowledge that if you
              are downloading a mobile application through a digital
              distribution service such as Apple® iTunes or Google® Play, the
              respective digital distribution service developer such as Apple®
              or Google® have an obligation to provide any support or
              maintenance services in relations to our mobile applications.
            </p>

            <h2>X. General Provisions</h2>

            <p>
              A. <span className="underlined">Conflicting Terms.</span> If there
              is a conflict between these Terms and the terms and conditions for
              any sweepstakes, contests or other promotions, the terms and
              conditions for the sweepstakes, contests or promotions will
              control.
            </p>
            <br />

            <p>
              B. <span className="underlined">Indeminity.</span> You agree to
              indemnify and hold MTD, its officers, directors, shareholders,
              predecessors, successors in interest, employees, agents,
              subsidiaries and affiliates, harmless from any demands, loss,
              liability, claims or expenses (including attorneys’ fees), made
              against MTD by any third party due to or arising out of or in
              connection with your use of the Site.
            </p>
            <br />

            <p>
              C. <span className="underlined">Entire Agreement.</span> These
              Terms constitute the sole and entire agreement of the parties with
              respect to the subject matter contained in the Terms of Use. These
              Terms incorporate by reference the Privacy Policy referenced in
              Section I. above and the Text Message Terms and Conditions
              referenced in Section IX above.
            </p>
            <br />

            <p>
              D. <span className="underlined">Severability.</span> If any term
              or provision of these Terms is deemed invalid, illegal, or
              unenforceable in any jurisdiction, such invalidity, illegality, or
              unenforceability will not affect any other term section of these
              Terms, and it will invalidate or render the term unenforceable in
              any other jurisdiction. Any term that is determined by a court to
              be unenforceable shall be severed from these Terms of Use and the
              remaining terms will remain in full force and effect in the
              applicable jurisdiction.
            </p>
            <p>
              E. <span className="underlined">Waiver.</span> Any failure by MTD
              to enforce any provision of these Terms is not to be construed as
              a waiver of any provision or a waiver of the right to enforce the
              same.
            </p>

            <p></p>

            <h2>XI. Void Where Prohibited</h2>

            <p>
              MTD administers and operates Sites from a United States Location.
              Although the Site is accessible worldwide, not all features,
              products or services discussed, referenced, provided or offered
              through or on the Site are available to all persons or in all
              geographic locations, or appropriate or available for use outside
              the United States. MTD reserves the right to limit, in its sole
              discretion, the provision and quantity of any feature, product or
              service to any person or geographic area. Any offer for any
              feature, product or service made on the Site is void where
              prohibited. If you choose to access the Site from outside the
              United States, you do so on your own initiative and you are solely
              responsible for complying with applicable local laws.
            </p>

            <h2>XII. Applicable Law:</h2>

            <p>
              By visiting our Site, you agree that the laws of the State of
              Ohio, United States of America, without regard to principles of
              conflict of laws, will govern these Terms and any dispute of any
              sort that might arise between us.
            </p>

            <h2>XIII. Dispute Resolution:</h2>

            <p>
              a. <i>Binding Arbitration.</i> This provision is intended to be
              interpreted broadly to encompass all disputes or claims arising
              out of or relating to these Terms of Use. Any dispute or claim
              arising out of or relating to these Terms of Use, your access to
              or use of the Site will be resolved by binding arbitration, except
              that either party may take claims to small claims court if they
              qualify for hearing by such a court.
            </p>

            <p>
              b. <i>Arbitration Procedures.</i> For all disputes, whether
              pursued in court or arbitration, you must first send a written
              description of your claim to MTD’s Customer Service department to
              allow us an opportunity to resolve the dispute. You and MTD each
              agree to negotiate your claim in good faith. You may request
              arbitration if your claim or dispute cannot be resolved within 60
              days. The arbitration of any dispute or claim shall be conducted
              in accordance with the rules of the American Arbitration
              Association (“AAA”), including the AAA’s Consumer Arbitration
              Rules (as applicable), as modified by these Term. The AAA Rules
              and information about arbitration and fees are available online at
              www.adr.org. An arbitrator may award on an individual basis any
              relief that would be available in a court, including injunctive or
              declaratory relief to the extent required to satisfy your
              individual claim, and must follow and enforce these Terms as a
              court would. Any arbitration shall be confidential, and neither
              you nor MTD may disclose the existence, content or results of any
              arbitration, except as may be required by law or for purposes of
              enforcement of the arbitration award. Judgment on any arbitration
              award may be entered in any court having proper jurisdiction.
            </p>
          </div>
        </div>
      </div>

      <div
        className="modal"
        id="PrivacyPolicy"
        onClick={(e) => {
          e.preventDefault();
          e.target.classList.remove("active");
        }}
      >
        <div className="modal-wrapper">
          <div
            className="close"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#PrivacyPolicy")
                .classList.remove("active");
            }}
          >
            ✕
          </div>
          <div className="modal-content">
            <h1>
              DeWalt<sup>®</sup> Pro Support Hub Privacy Policy
            </h1>
            <p>Effective: December 1, 2020</p>

            <h2>I. Introduction</h2>

            <p>
              DeWalt has partnered with MTD Products Inc to make the Pro Support
              Hub available to consumers. Through the Pro Support Hub and the
              related software application, MTD, its affiliates and partners
              (collectively “MTD” or “we”), may collect and store Personal
              Information regarding customers, employees and associates,
              suppliers, and distributors. Personal Information may be
              collected, transferred, and stored on servers located in any
              country in which we do business.
            </p>

            <p>
              MTD is committed to protecting the privacy and security of
              Personal Information collected as part of their normal business
              activities. This Privacy Policy (the “Policy”) only applies to the
              Personal Information that is provided through the Pro Support Hub
              application in any form or medium, and may be amended from time to
              time. If our information practices change at some time in the
              future, we will post the policy changes here as notification and
              provide you with the ability to opt out of these new uses. If you
              are concerned about how your information is used, you should check
              back to our website periodically.
            </p>

            <h2>II. Information We Collect</h2>

            <p>
              We may collect your Personal Information through your contacts
              with us online, in person, over the phone or through the mail.
              “Personal Information” refers to information that identifies,
              relates to, describes, or could reasonably be linked (directly or
              indirectly) with you or your household. Personal Information does
              not include information that is publicly available, such as a
              person's name, address and phone number listed in a directory.
            </p>

            <p>Personal Information that we collect includes:</p>
            <div className="conditions-block-list">
              <p>
                (i) Contact information such as your name, address, phone
                number, and e-mail address;
              </p>
              <p>
                (ii) If you contact our customer service center, audio
                recordings of your conversations or transcripts of online chats;
              </p>
              <p>
                (iii) Product information such as the serial and model number of
                products you purchased, where and when the products were
                purchased, whether the products have been serviced, and
                communications we have had with you about your product;
              </p>
              <p>
                (iv) Information about your shopping preferences, purchases, and
                purchase orders;
              </p>
              <p>
                (v) Survey and demographic information, such as your age,
                household information, lawn care/outdoor power product
                ownership/purchase history, employment information (i.e. job
                title, location, etc.), and your product preferences;
              </p>
              <p>
                (vi) Financial and/or economic information such as your credit
                card or debit card information and other information you may
                provide at the time of purchase.
              </p>
            </div>

            <h2>III. Why We Collect Personal Information</h2>

            <p>
              We may collect your Personal Information for various purposes:
            </p>
            <div className="conditions-block-list">
              <p>
                (i) We collect contact information and product information for
                legal and commercial reasons, so we may fulfill requests for
                products, administer product programs and warranties, respond to
                customer service inquiries, answer questions about our
                offerings, and communicate with customers.
              </p>
              <p>
                (ii) We maintain records of your contacts with our customer
                service centers for training and quality control purposes.
              </p>
              <p>
                (iii) We also collect contact information and product
                information to enable us to provide customers with notice of any
                product advisories or safety notices and as necessary to respond
                to legal and/or regulatory inquiries.
              </p>
              <p>
                (iv) We collect information regarding shopping preferences,
                survey and demographic information for marketing, advertising
                and product development purposes. This information enables MTD
                to learn about our customers, to develop products that meet
                their needs and preferences, to create and administer product
                programs that are of interest to our customers.
              </p>
              <p>
                (v) For those who provide Personal Information in the context of
                their employment with us or as part of an application for
                employment, Personal Information will be used for employment
                purposes (i.e. keeping updated organizational information,
                making hiring and employment related decisions, employee
                training, employment investigations, etc.).
              </p>
            </div>

            <p>
              We limit the collection and use of Personal Information to what is
              reasonably necessary to fulfill the purpose for which the Personal
              Information is collected. The Personal Information we collect will
              only be used for the purposes identified at the time of collection
              or as outlined in this Policy.
            </p>

            <h2>IV. How We Collect Personal Information</h2>

            <p>
              We may collect your Personal Information through several sources.
            </p>

            <p>
              You provide Personal Information to us through the
              prosupporthub.com website when you purchase, register or return a
              Pro Support Hub product; when you sign up for a customer account;
              and when you contact our customer service center, whether it is by
              phone, email, chat or regular mail; when you post information
              through our social media sites; or when you sign up to receive
              emails and newsletters. We also collect your Personal Information
              when you purchase, register or return a Pro Support Hub via the
              website; register products by mail; contact the customer service
              center by phone or letter; submit a warranty claim; or bring your
              product in for service.
            </p>

            <p>
              When you visit the website, we track and collect information that
              does not personally identify you but is helpful for administering
              the site, analyzing trends, tracking user movements, and gathering
              broad demographic information for aggregate use. This information
              includes (a) IP address; (b) domain name; (c) type of computer;
              and (d) type of web browser. As explained further below, our
              website also utilizes cookies to store information required to
              determine how to properly deliver content to your machine.
            </p>

            <p>
              We also collect information from other sources. We may receive
              your Personal Information from our affiliated entities, authorized
              dealers and service providers, and other business partners who
              assist us in marketing and advertising efforts, customer service
              support, or product services. We may even get information about
              you from friends who purchase products for you as a gift or who
              provide us with your information in response to various marketing
              campaigns.
            </p>

            <h2>V. Information Shared with Third Parties</h2>

            <p>
              MTD DOES NOT sell or trade Personal Information. With your
              consent, We will only use or disclose your Personal Information to
              a third party for use in a manner that is consistent with the
              purposes provided in Section III. of this Policy.
            </p>

            <p>
              We may share your Personal Information with third party service
              providers in order to provide services on your behalf. These third
              parties include distributors, authorized dealers, sales
              representatives, service providers, or other businesses with whom
              we have partnered to provide a product or service to you These
              third parties may need access to information about your or the
              products you purchased in order to address product-related issues
              and/or provide warranty services.
            </p>

            <p>
              In addition, we may provide information to banking and financing
              partners who provide financing for the purchase of our products.
            </p>

            <p>
              We may share your Personal Information with companies that provide
              support services to us such as marketing consultants, printers,
              web hosting providers, call center/chat providers, payment
              processors, shipping services providers or other third parties
              that help us market our products and services. These companies may
              need access to information about you in order to perform these
              services. However, we do not consent or authorize these companies
              to use the information we disclose to them for any other purpose.
            </p>

            <p>
              We may also provides access to third parties in order to enable
              consumers to share their reviews about Pro Support Hub products.
              Should you choose to share a customer review, these third parties
              may place and read cookies on your browser or use web beacons or
              similar technologies to collect information. (For more information
              regarding the use of cookies, see Section XV.B. below.) In
              addition, they may also receive information about the Pro Support
              Hub products you purchased.
            </p>

            <h2>VI. Our Commitment to Children's Privacy</h2>

            <p>
              Protecting the privacy of the very young is especially important.
              For that reason, we never collect or maintain information at our
              website from those we know are under the age of 13. If a child has
              provided us with Personally Information, a parent/guardian may
              follow the procedures below to access a child's information and to
              request the information be deleted from our records. Following
              such a request, we will make reasonable efforts to delete the
              child's information from our records.
            </p>

            <p>
              Consumers who are at least 13 and less than 16 years of age may
              provide their Personal Information
            </p>

            <h2>VII. Requests to Know</h2>

            <p>
              You may contact us to request the Personal Information we maintain
              about you in connection with your Pro Support Hub products. If you
              wish to know the Personal Information which we have collected
              about you, you can submit a request for this information by
              completing the on-line form, contacting our toll-free number at
              1-800-269-6215, or submitting a written request to:
            </p>
            <p>
              MTD Products Inc
              <br />
              Information Privacy Department
              <br />
              P.O. Box 368022
              <br />
              Cleveland, OH 44136
              <br />
              Email:
              <span>
                <a href="mailto:infoprivacy@mtdproducts.com">
                  infoprivacy@mtdproducts.com
                </a>
              </span>
            </p>

            <p>
              Should you wish to designate someone other than yourself who is
              authorized to make a request for your Personal Information, please
              contact us in writing, either by mail or email, at the address
              listed above.
            </p>

            <p>
              In order to protect your privacy and the integrity of your
              Personal Information, MTD will ask you to verify your identity
              and/or verify that you are authorized to make a request under this
              section. To that end, you may be asked to provide your website
              account information (if you have one), provide information
              regarding a product that you have registered, or verify certain
              Personal Information previously provided to us before we provide
              any information in response to this request. For additional
              information about this process, see
              <i>
                Section IX. Access, Rectification, Suppression and Rejection
              </i>{" "}
              below.
            </p>

            <p>
              We will not discriminate against you for exercising your rights
              under this Section.
            </p>

            <h2>
              VIII. Requests to Opt-out or Delete Your Personal Information
            </h2>

            <p>
              If at any time you do not wish to continue receiving information
              from us or you would like us to delete the Personal Information
              which we have collected in connection with your Pro Support Hub
              products, you can submit a request to opt-out and/or delete your
              Personal Information from our records. You can do so by completing
              the on-line form, contacting our toll-free number at
              1-800-269-6215, or submitting a written request to:
            </p>
            <p>
              MTD Products Inc
              <br />
              Information Privacy Department
              <br />
              P.O. Box 368022
              <br />
              Cleveland, OH 44136
              <br />
              Email:
              <span>
                <a href="mailto:infoprivacy@mtdproducts.com">
                  infoprivacy@mtdproducts.com
                </a>
              </span>
            </p>

            <p>
              Should you wish to designate someone other than yourself to make a
              request to opt-out or delete your Personal Information, please
              contact us in writing, either by mail or email, at the address
              listed above.
            </p>

            <p>
              In order to protect your privacy and the integrity of your
              Personal Information, MTD will ask you to verify your identity
              and/or verify that you are authorized to make a request under this
              section. To that end, you may be asked to provide your website
              account information (if you have one), provide information
              regarding a product that you have registered, or verify certain
              Personal Information previously provided to us before undertaking
              any actions to delete your information.
            </p>

            <p>
              Please note, however, that we may not delete Personal Information
              that is necessary for the following:
            </p>
            <div className="conditions-block-list">
              <p>
                a) meeting applicable legal requirements, such as carrying out
                warranty obligations, providing safety advisories and notices,
                responding to legal or regulatory inquiries, preserving
                information relevant to a legal claim or lawsuit; and
              </p>
              <p>
                b) in the case of information provided by employees, information
                that is necessary for making promotions, appointments, or other
                employment decisions. For certain more sensitive Personal
                Information (which may include race, gender, religion, medical
                information, etc.) We will provide an affirmative or explicit
                (opt in) choice if the personal information is to be disclosed
                to a third party for use in a manner incompatible with the
                purpose for which it was collected.
              </p>
            </div>

            <p>
              We will not discriminate against you for exercising your rights
              under this Section.
            </p>

            <h2>IX. Access, Rectification, Suppression and Rejection</h2>

            <p>
              As owner of the Personal Information you provide to us in
              connection with your Pro Support Hub products, you are entitled to
              access the Personal Information we possess and the details of the
              processing of such information; rectify the information whenever
              it is incomplete or imprecise; suppress the information if you
              deem it is not required for the purposes set forth herein, or if
              it is being used for purposes not consented; or otherwise, object
              to the processing of the Personal Information provided for
              specific objectives.
            </p>

            <p>
              You may update, remove, or correct your Personal Information on
              record with us by logging into your account (if applicable), or by
              contacting us through the methods outlines in
              <i>
                Sections VII. Requests to Know and VIII. Requests To Opt-Out Or
                Delete Your Personal Information
              </i>
              above. To protect your privacy and security, we also take
              reasonable steps to verify your identity before granting access or
              making corrections. We will respond to all inquiries with respect
              to updating, removing, or correcting your Personal Information
              within a reasonable time.
            </p>

            <p>
              Any application for the exercise of the aforementioned rights must
              necessarily indicate and include: i) your name and domicile, ii)
              copy of your official ID (passport, voter’s ID, driver’s license),
              iii) a clear and precise description of the Personal Information
              you wish to access, rectify, suppress or object and any other
              component which facilitates the obtainment of your data, as well
              as iv) any other requirement set forth in terms of the applicable
              law.
            </p>

            <p>
              We will respond to any complete application within 20 calendar
              days or the maximum term permitted by the applicable law. MTD’s
              reply shall indicate if the application for access, rectification,
              cancellation or objection is appropriate and, in such case, MTD
              shall effect its decision within the following 15 calendar days or
              the maximum term permitted by the applicable law to the date in
              which the answer was delivered to the owner of the Personal
              Information or to his or her representative. The terms may be
              extended pursuant to the applicable provisions. If you are
              exercising your right of access, we may provide you with
              electronic copies of your Personal Information.
            </p>

            <h2>X. Limit Use or Disclosure</h2>

            <p>
              You are entitled to, at any time, to limit the use or disclosure
              of your Personal Information for the purposes that are not
              necessary for our legal relationship. If you wish to limit the use
              of your Personal Information, please contact our Information
              Privacy Department by mail or e-mail, stating the purposes for
              which you wish to limit the use or disclosure of your Personal
              Information.
            </p>

            <p>
              Additionally, you may register with public registries of consumers
              in order to avoid having unwanted information sent to you. For
              additional information please consult your national or local
              authority for consumer protection.
            </p>

            <h2>XI. Onward Transfer</h2>

            <p>
              We will keep your Personal Information private and will not
              disclose it to other parties, unless you have granted us
              permission to transfer your Personal Information or such
              disclosure is necessary to: (a) comply with federal or state law,
              a court order or other legal process; (b) protect our rights or
              property; (c) enforce any of our Terms and Conditions of Use; or
              (d) in connection with the sale of assets and/or the company.
              Prior to disclosing Personal Information to a third party, we will
              apply the aforementioned Notice and Choice principles. We will
              also confirm that any third party subscribes to these principles
              and will enter into a written agreement with such third party
              requiring that the third party provide at least the same level of
              privacy protection provided by MTD.
            </p>

            <h2>XII. Security</h2>

            <p>
              No data transmission over the Internet can be guaranteed to be
              100% secure. Accordingly, despite our efforts to protect Personal
              Information, we cannot ensure or warrant the security of any
              information you transmit to us online. You transmit all such
              information at your own risk.
            </p>

            <p>
              However, once we receive your transmission, we take reasonable
              measures to ensure that Personal Information is safeguarded at all
              times. We have put in place appropriate physical, electronic, and
              managerial procedures to protect against the loss, misuse or
              alteration of Personal Information under our control. Our data
              networks are secured and protected by firewalls and other
              safeguards. In addition to technological measures, we also ensure
              that Personal Information stored on our premises or stored by our
              third parties, is secured by other means, including restricting
              access and using locked and secured storage units.
            </p>

            <p>
              In the event of a breach of our systems and unless a law
              enforcement agency informs us that notification would impede a
              criminal investigation, you will be notified of any unencrypted
              Personal Information that was or was reasonably believed to have
              been acquired by an unauthorized person as soon as reasonably
              possible.
            </p>

            <h2>XIII. Data Integrity</h2>

            <p>
              We use Personal Information only for the purposes for which it was
              collected or subsequently authorized. To the extent necessary for
              those purposes, we will take reasonable steps to ensure that
              Personal Information is accurate, current, complete, and reliable
              for its intended use.
            </p>

            <h2>XIV. Enforcement</h2>

            <p>
              We use a self-assessment approach to ensure compliance with this
              Policy. This includes a periodic assessment to verify the Policy
              is accurate and being adhered to. If you have concerns, contact us
              by e-mail at infoprivacy@mtdproducts.com, or by writing us at MTD
              Products Inc, Information Privacy Department, P.O. Box 368022,
              Cleveland, OH 44136, and MTD will investigate and attempt to
              resolve any complaints and disputes regarding use and disclosure
              of Personal Information.
            </p>

            <h2>XV. Prosupporthub.com</h2>

            <h3 className="title-caps-override">
               A. Registration for your Pro Support Hub product
            </h3>
            <p>
              In order to enjoy the full benefit of the Pro Support Hub, you
              should register your product. At Prosupporthub.com, you have the
              choice to create an account. This will enable you to register your
              recently purchased product, place additional orders, rate and
              review our products, etc. If you choose not to register, you will
              be able to access all areas of mtdproducts.com that do not require
              registration.
            </p>
            <p>
              Whether you choose to register when you visit Prosupporthub.com or
              not we automatically track and collect the following anonymous
              information that does not personally identify you but is helpful
              for administering the site, analyzing trends, tracking user
              movements, and gathering broad demographic information for
              aggregate use: (a) IP address; (b) domain name; (c) type of
              computer; and (d) type of Web browser.
            </p>
            <p>
              The collection, processing, and the use of data collected during
              the registration process requires your consent. This consent may
              be declared electronically and as noted above you may withdraw
              your consent at any time as set out in the Opt-Out and Access
              Rectification, Suppression and Rejection sections of this Policy.
            </p>
            <h3 className="title-caps-override"> B. Cookies</h3>
            <p>
              Prosupporthub.com utilizes cookies for several purposes, including
              the storage of information required to determine how to properly
              deliver content to your machine. A cookie is provided to all
              visitors to mtdproducts.com, regardless of whether you create an
              account.
            </p>
            <p>
              A cookie is a small piece of information that a Web server stores
              temporarily using your Web browser and then later retrieves. A
              cookie is not a way for a Web server to access and find out
              private information about you. However, once you choose to furnish
              a website with Personal Information, for example, by registering
              at one of our websites, this information may be linked to the data
              stored in the cookie.
            </p>
            <p>
              The use of cookies is relatively standard and you will likely find
              them used on most other Web sites. Most browsers are initially set
              up to accept cookies. If you prefer, you can customize the
              settings on your browser either to notify you when you receive a
              cookie or to refuse to accept cookies. Disabling cookies for this
              website will not impact your ability to use its features or view
              its content, but you may not be able to take advantage of the
              website’s personalization features.
            </p>
            <h3 className="title-caps-override">
               C. Online Behavioral Advertising
            </h3>
            <p>
              Prosupporthub.com engages in Online Behavioral Advertising (OBA)
              in accordance with the guidelines set forth by the Digital
              Advertising Alliance. We use anonymous cookies to track
              information on your browsing history on Prosupporthub.com, and
              third-party advertising networks use the information to serve ads
              to you on MTD's behalf on other sites throughout the Internet.
              These cookies do not contain personally identifiable information,
              nor are they linked to any Personal Information collected by MTD.
            </p>
            <p>
              You may opt-out of third-party advertising networks by using the
              Network Advertising Initiative's (NAI's) multi-cookie opt-out
              mechanism at:
              <a href="http://www.networkadvertising.org/managing/opt_out.asp">
                http://www.networkadvertising.org/managing/opt_out.asp
              </a>
              . These opt-outs are valid only for the computer and browser
              combination used to opt-out. Clearing cookies will remove these
              opt-outs since they stored in cookies.
            </p>
            <p>
              If you opt-out of an NAI third-party advertising network, you will
              no longer receive ads based on your browsing history from that
              network. You may, however, continue to receive generalized online
              advertising.
            </p>
            <h3 className="title-caps-override">
               D. Notice To Persons Accessing This Website Outside Of The United
              States
            </h3>
            <p>
              If you reside outside the United States, any information you
              provide to us through this website may be transferred out of your
              country and into the United States to us and/or any other company
              that is affiliated with us. We do not need additional consent for
              this transfer. If you do not want your Personal Information to
              leave your country, please do not submit that information through
              this website. By providing Personal Information, you explicitly
              consent to the transfer of your information to the United States.
              You also consent to the application of U.S. law, as well as local
              law, to our processing your Personal Information.
            </p>
            <h3 className="title-caps-override"> E. Limitations</h3>
            <p>
              We are responsible for the content offered on this website. All of
              the content has been carefully checked and will be complemented
              and updated regularly. However, we do not guarantee that this
              content is completely accurate or up to date.
            </p>
            <p>
              In addition, links to external internet sites are available on
              this website. We are not responsible for the content or design of
              these websites and is thus, not liable for the accuracy,
              completeness or quality of the information available there.
              Moreover, we are not responsible for the privacy practices of
              other websites. Please refer to the privacy policies of each
              website that you visit.
            </p>

            <h2>XVI. Changes to this Privacy Policy</h2>

            <p>
              From time to time, we may use customer information for new
              purposes not previously disclosed in this privacy Policy. If our
              information practices change at some time in the future, we will
              post the policy changes here as notification and provide you with
              the ability to opt out of these new uses. If you are concerned
              about how your information is used, you should check back to our
              website periodically.
            </p>
          </div>
        </div>
      </div>

      <div
        className="modal"
        id="TextMessageTermsAndConditions"
        onClick={(e) => {
          e.preventDefault();
          e.target.classList.remove("active");
        }}
      >
        <div className="modal-wrapper">
          <div
            className="close"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#TextMessageTermsAndConditions")
                .classList.remove("active");
            }}
          >
            ✕
          </div>
          <div className="modal-content">
            <h1>Text Message Terms and Conditions</h1>

            <p>
              By opting in to or using the DeWalt Pro Support Hub text message
              service (the “Text Service”), you accept these Terms &amp;
              Conditions (“Terms”) and agree to resolve disputes with MTD
              Products Inc (“MTD”) through binding arbitration (and with very
              limited exceptions, not in court), and you waive any right to
              participate in className actions, all as detailed in the
              “Disputes” section below.
            </p>

            <p>
               1. <span className="underlined">Definitions.</span>
            </p>
            <div className="content-block-list">
              <p>
                  a. <strong>"Text Service"</strong> includes any arrangement or
                situation in which MTD sends (or indicates that it may send or
                receives a request that it send) one or more text messages.
                <br />
                  b. <strong>"Opting In," "Opt In"</strong> and
                <strong>"Opt-In"</strong> to refer to requesting, joining,
                agreeing to, enrolling in, signing up for, acknowledging, or
                otherwise consenting to receive one or more text messages.
                <br />
                  c. <strong>"MTD"</strong> means MTD Products Inc and its
                affiliates and subsidiaries.
                <br />
              </p>
            </div>

            <p>
               2. <span className="underlined">Opting In.</span>
              From time to time, MTD may advertise the opportunity to
              participate in the Text Service and receive alerts and information
              via text message from MTDLLC, including each of its subsidiaries
              and/or affiliates. You acknowledge and agree that you are opting
              into the Text Service by texting a specific keyword to a specific
              short code as specified in the applicable MTD message. After
              Opting In, in addition to the main messages the service offers,
              you may receive one or more welcome messages or administrative
              messages, such as (in some cases) a request to confirm your
              Opt-In. By opting in:
            </p>

            <p>
                a. You authorize MTD to use autodialer or non-autodialer
              technology to send text messages to the cell phone number
              associated with your opt in (i.e., the number listed on the Opt-In
              form or instructions, or, if none, the number from which you send
              the Opt-In, or, if none, the number on file for the account
              associated with your Opt-In). You also authorize MTD to include
              marketing content in any such messages. You do not have to Opt-In
              or agree to Opt-In as a condition of purchase.
            </p>
            <p>
                b. You confirm that you are the subscriber to the relevant phone
              number or that you are the customary user of that number on a
              family or business plan and that you are authorized to opt-in.
            </p>
            <p>
                c. You are signing your Opt-In to the Text Service. You consent
              to the use of an electronic record to document your opt-in.
            </p>

            <p>
               3.{" "}
              <span className="underlined">
                More information and Opting Out.
              </span>
              Message and data rates may apply. Unless otherwise noted, MTD may
              send multiple, recurring messages and/or terminate the Text
              Service or your participation in it at any time with or without
              notice, including, for example, before you have received any or
              all messages that you otherwise would have received. For Text
              Services, text HELP for help and STOP to opt out. Your opt-out
              request may generate either a confirmation text or a texted
              request to clarify the Text Service to which it applies (if you
              have more than one). To complete your opt-out, please provide the
              requested clarification.
            </p>

            <p>
               4. <span className="underlined">Supported Carriers.</span>
              Our participating carriers include (but not limited to) AT&amp;T,
              Sprint, Verizon Wireless, U.S. Cellular, T-Mobile, MetroPCS.
              Please note, however, that the supporting mobile carriers may
              change without notice, and the particular Text Service you join,
              including those operated through a different number, may be
              limited to specific carriers. Carriers are not liable for delayed
              or undelivered messages. If your mobile operator is not
              participating, you will not receive a reply to your messages. Some
              operators may not support some services at the prices offered.
              Pre-paid users may not be able to participate – check with your
              mobile operator.
            </p>

            <p>
               5. <span className="underlined">Privacy Policy.</span>
              You consent to the handling of your information as described in
              the DeWalt Pro Support Hub Privacy Policy available at
              https://www.dewalt.com. You must be 18 years of age or older
              (except Alabama and Nebraska, where you must be 19 years of age or
              older).
            </p>

            <p>
               6. <span className="underlined">Termination.</span>
              MTD reserves the right to unilaterally suspend or terminate Text
              Services, in its sole discretion, and without any prior notice to
              you.
            </p>

            <p>
               7. <span className="underlined">Changes.</span>
              MTD may revise these Terms at any time by updating this posting.
              If you are enrolled in Text Services, MTD will send a text message
              to note that the Terms have been amended. If you continue to use
              the Text Services following such notice, you thereby agree to the
              amended Terms. MTD reserves the right to change and consolidate
              associated short codes. Your sole remedy if you do not agree with
              a revised Terms, or if you do not agree to receive text messages
              from new short codes is to opt out.
            </p>

            <p>
               8. <span className="underlined">Disputes.</span>
              <strong>
                Please read this “Disputes” section carefully. BY AGREEING TO
                ARBITRATION, YOU UNDERSTAND AND AGREE THAT YOU ARE WAIVING YOUR
                RIGHT TO MAINTAIN OTHER AVAILABLE RESOLUTION PROCESSES, SUCH AS
                A COURT ACTION OR ADMINISTRATIVE PROCEEDING, TO SETTLE ANY
                DISPUTES OR CLAIMS. THE RULES IN ARBITRATION ARE DIFFERENT.
                THERE IS NO JUDGE OR JURY. ALTHOUGH REVIEW IS LIMITED, AN
                ARBITRATOR CAN AWARD ON AN INDIVIDUAL BASIS THE SAME DAMAGES AND
                RELIEF AS WOULD BE AVAILABLE IN COURT AND MUST ENFORCE THE SAME
                LIMITATIONS STATED IN THESE CONDITIONS OF USE AS A COURT WOULD.
                This arbitration clause shall survive termination of these Terms
                and Conditions.
              </strong>
            </p>

            <p>
               a. <i>Binding Arbitration.</i>
              This provision is intended to be interpreted broadly to encompass
              all disputes or claims arising out of or relating to these Terms,
              your participation in the Text Service, or your relationship with
              MTD. Any dispute or claim arising out of or relating to these
              Terms, your access to or participation in the Text Service, or
              your relationship with MTDor any subsidiary, parent or affiliate
              company or companies (whether based in contract, tort, statute,
              fraud, misrepresentation or any other legal theory) will be
              resolved by binding arbitration, except that either party may take
              claims to small claims court if they qualify for hearing by such a
              court.
            </p>

            <p>
               b. <i>Arbitration Procedures.</i> For all disputes, whether
              pursued in court or arbitration, you must first send a written
              description of your claim to MTD’s Customer Service department to
              allow us an opportunity to resolve the dispute. You and MTD each
              agree to negotiate your claim in good faith. You may request
              arbitration if your claim or dispute cannot be resolved within 60
              days. The arbitration of any dispute or claim shall be conducted
              in accordance with the rules of the American Arbitration
              Association (“AAA”), including the AAA’s Consumer Arbitration
              Rules (as applicable), as modified by these Term. The AAA Rules
              and information about arbitration and fees are available online at
              <span className="green-text">www.adr.org</span>. An arbitrator may
              award on an individual basis any relief that would be available in
              a court, including injunctive or declaratory relief to the extent
              required to satisfy your individual claim, and must follow and
              enforce these Terms as a court would. Any arbitration shall be
              confidential, and neither you nor MTD may disclose the existence,
              content or results of any arbitration, except as may be required
              by law or for purposes of enforcement of the arbitration award.
              Judgment on any arbitration award may be entered in any court
              having proper jurisdiction.
            </p>
            <p>
               c. <i> className Action Waiver and Jury Waiver.</i>
              You and MTD each agree that any proceeding, whether in arbitration
              or in court, will be conducted only on an individual basis and not
              in a className, consolidated or representative action. If a court
              or arbitrator determines in an action between you and MTD that
              this className action waiver is unenforceable, the arbitration
              agreement will be void as to you. If for any reason a claim
              proceeds in court rather than through arbitration, you and we each
              waive any right to a jury trial.
            </p>
            <p>
               d. <i>Governing Law.</i>
              Any dispute arising from these Terms or your access to or
              participation in the Text Service will be governed by and
              construed and enforced in accordance with the laws of Ohio,
              without regard to conflict of law rules or principles. The United
              Nations Convention on Contracts for the International Sale of
              Goods shall have no applicability. Any dispute between the parties
              that is not subject to arbitration or cannot be heard in small
              claims court will be resolved in the state or federal courts
              located in Medina County, Ohio.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
