import { Search, MapPin, ChevronDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">

      <motion.div
        className="hero-image"
        initial={{
          scale: 1.12,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <img
          src="/src/assets/real_estate.jpg"
          alt="Beautiful modern home"
        />
      </motion.div>

      <div className="hero-gradient"></div>


      <div className="container hero-container">

        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.16,
              },
            },
          }}
        >

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
              },
            }}
          >
            <Sparkles size={14} />
            AI-powered real estate
          </motion.div>


          <motion.h1
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.9,
                },
              },
            }}
          >
            Find a place
            <br />
            <span>you'll love.</span>
          </motion.h1>


          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            Discover homes that match your lifestyle,
            budget and dreams — intelligently.
          </motion.p>

        </motion.div>


        <motion.div
          className="search-panel"
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
        >

          <div className="search-option">

            <MapPin size={19} />

            <div>
              <label>Location</label>
              <strong>
                Where do you want to live?
              </strong>
            </div>

          </div>


          <div className="search-option">

            <div>
              <label>I'm looking to</label>
              <strong>Buy</strong>
            </div>

            <ChevronDown size={17} />

          </div>


          <div className="search-option">

            <div>
              <label>Property type</label>
              <strong>Any property</strong>
            </div>

            <ChevronDown size={17} />

          </div>


          <motion.button
            className="search-button"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <Search size={19} />
            Search
          </motion.button>

        </motion.div>


        <motion.div
          className="hero-bottom"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
          }}
        >

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


          <motion.div
            className="scroll-indicator"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >

            <span>
              SCROLL TO EXPLORE
            </span>

            <div />

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;