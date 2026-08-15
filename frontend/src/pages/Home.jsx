import {
  Search,
  MapPin,
  ChevronDown,
  Sparkles,
  ArrowDown,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "../assets/real_estate.jpg";

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.55]);

  return (
    <section className="hero" ref={heroRef}>

      {/* HERO IMAGE */}

      <motion.div
        className="hero-image"
        style={{
          y: imageY,
          scale: imageScale,
        }}
        initial={{
          scale: 1.12,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <img
          src={heroImage}
          alt="Beautiful modern home"
        />
      </motion.div>


      {/* CINEMATIC OVERLAY */}

      <motion.div
        className="hero-gradient"
        style={{
          opacity: overlayOpacity,
        }}
      />

      <div className="hero-vignette" />


      {/* CONTENT */}

      <motion.div
        className="container hero-container"
        style={{
          y: contentY,
        }}
      >

        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.14,
              },
            },
          }}
        >

          {/* EYEBROW */}

          <motion.div
            className="hero-badge"
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                },
              },
            }}
          >
            <span className="badge-icon">
              <Sparkles size={13} />
            </span>

            <span>AI-powered real estate</span>
          </motion.div>


          {/* HEADING */}

          <motion.h1
            variants={{
              hidden: {
                opacity: 0,
                y: 60,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            Find a place
            <br />

            <span className="hero-highlight">
              you'll love.
            </span>
          </motion.h1>


          {/* DESCRIPTION */}

          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                },
              },
            }}
          >
            Discover homes that match your lifestyle,
            budget and dreams — intelligently.
          </motion.p>

        </motion.div>


        {/* SEARCH */}

        <motion.div
          className="search-panel"
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.65,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -3,
          }}
        >

          {/* LOCATION */}

          <motion.div
            className="search-option"
            whileHover={{
              backgroundColor: "rgba(216,195,165,0.08)",
            }}
          >

            <MapPin size={19} />

            <div>
              <label>Location</label>

              <strong>
                Where do you want to live?
              </strong>
            </div>

          </motion.div>


          {/* PURPOSE */}

          <motion.div
            className="search-option"
            whileHover={{
              backgroundColor: "rgba(216,195,165,0.08)",
            }}
          >

            <div>
              <label>I'm looking to</label>

              <strong>
                Buy
              </strong>
            </div>

            <ChevronDown size={17} />

          </motion.div>


          {/* PROPERTY TYPE */}

          <motion.div
            className="search-option"
            whileHover={{
              backgroundColor: "rgba(216,195,165,0.08)",
            }}
          >

            <div>
              <label>Property type</label>

              <strong>
                Any property
              </strong>
            </div>

            <ChevronDown size={17} />

          </motion.div>


          {/* SEARCH BUTTON */}

          <motion.button
            className="search-button"
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <Search size={19} />

            <span>Search</span>

            <span className="button-shine" />
          </motion.button>

        </motion.div>


        {/* BOTTOM AREA */}

        <motion.div
          className="hero-bottom"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.15,
            duration: 0.8,
          }}
        >

          {/* TRUST */}

          <div className="hero-trust">

            <div className="avatar-stack">

              <span>R</span>
              <span>A</span>
              <span>S</span>

            </div>

            <div>

              <strong>
                850+ people
              </strong>

              <small>
                found their place with CozyKeys
              </small>

            </div>

          </div>


          {/* SCROLL */}

          <motion.a
            href="#properties"
            className="scroll-indicator"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
            }}
          >

            <span>
              SCROLL TO EXPLORE
            </span>

            <motion.div
              className="scroll-line"
              animate={{
                scaleX: [0.4, 1, 0.4],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            <ArrowDown size={14} />

          </motion.a>

        </motion.div>

      </motion.div>


      {/* DECORATIVE CORNER */}

      <motion.div
        className="hero-corner"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
      />

    </section>
  );
};

export default Hero;