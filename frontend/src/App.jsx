import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Home,
  Lightbulb,
  TrendingUp,
  ShieldCheck,
  Compass,
} from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PropertyCard from "./components/PropertyCard";
import { getProperties } from "./services/propertyService";

function App() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /*
   * --------------------------------------------------
   * LOAD PROPERTIES FROM MYSQL THROUGH EXPRESS API
   * --------------------------------------------------
   */

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setLoading(true);

        const data = await getProperties();

        setProperties(data);
        setError("");
      } catch (err) {
        console.error("Failed to load properties:", err);

        setError("Unable to load properties. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  /*
   * --------------------------------------------------
   * HOME BUYING TIPS
   * --------------------------------------------------
   */

  const tips = [
    {
      icon: Home,
      title: "Know what you need",
      text: "Think about commute, space, lifestyle and the kind of neighborhood you want.",
    },
    {
      icon: TrendingUp,
      title: "Understand the market",
      text: "Compare prices, future development and neighborhood growth before deciding.",
    },
    {
      icon: ShieldCheck,
      title: "Check before you buy",
      text: "Look beyond beautiful photos. Verify documents, amenities and property condition.",
    },
  ];

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <Navbar />


      <main>

        {/* ================= HERO ================= */}

        <Hero />


        {/* =====================================================
            FEATURED PROPERTIES
            DATA COMES FROM MYSQL
           ===================================================== */}

        <section
          className="featured-section"
          id="properties"
        >

          <div className="section-container">

            {/* SECTION HEADER */}

            <motion.div
              className="section-heading"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <div>

                <p className="section-eyebrow">
                  CURATED FOR YOU
                </p>

                <h2>
                  Homes worth
                  <br />
                  <em>coming home to.</em>
                </h2>

              </div>


              <p className="section-description">
                Explore beautiful properties selected
                for their location, design and lifestyle.
              </p>

            </motion.div>


            {/* ================= LOADING ================= */}

            {loading && (

              <motion.div
                className="properties-loading"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
              >

                <div className="loading-spinner"></div>

                <p>
                  Finding beautiful homes for you...
                </p>

              </motion.div>

            )}


            {/* ================= ERROR ================= */}

            {!loading && error && (

              <motion.div
                className="properties-error"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
              >

                <p>
                  {error}
                </p>

                <button
                  onClick={() => window.location.reload()}
                >
                  Try again
                </button>

              </motion.div>

            )}


            {/* ================= NO PROPERTIES ================= */}

            {!loading &&
              !error &&
              properties.length === 0 && (

                <motion.div
                  className="properties-empty"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                >

                  <Home size={35} />

                  <h3>
                    No properties available yet
                  </h3>

                  <p>
                    New properties will appear here
                    once they are added.
                  </p>

                </motion.div>

              )}


            {/* =================================================
                ACTUAL DATABASE PROPERTIES
               ================================================= */}

            {!loading &&
              !error &&
              properties.length > 0 && (

                <div className="property-grid">

                  {properties.map((property, index) => (

                    <PropertyCard
                      key={property.id}
                      property={property}
                      index={index}
                    />

                  ))}

                </div>

              )}

          </div>

        </section>


        {/* =====================================================
            EXPLORE LOCATIONS
           ===================================================== */}

        <section className="locations-section">

          <div className="section-container">

            <motion.div
              className="center-heading"
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <p className="section-eyebrow">
                EXPLORE THE CITY
              </p>

              <h2>
                Find the neighborhood
                <br />
                <em>that feels right.</em>
              </h2>

              <p>
                A great home starts with a great location.
                Explore areas based on lifestyle,
                connectivity and everything that matters
                to you.
              </p>

            </motion.div>


            <div className="location-grid">

              {/* MUMBAI */}

              <motion.div
                className="location-card"
                initial={{
                  opacity: 0,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
              >

                <img
                  src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=85"
                  alt="Mumbai"
                />

                <div className="location-overlay">

                  <MapPin size={18} />

                  <h3>
                    Mumbai
                  </h3>

                  <p>
                    Luxury apartments, coastal living
                    and vibrant neighborhoods.
                  </p>

                  <span>
                    Explore area
                    <ArrowUpRight size={15} />
                  </span>

                </div>

              </motion.div>


              {/* PUNE */}

              <motion.div
                className="location-card"
                initial={{
                  opacity: 0,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
              >

                <img
                  src="https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=85"
                  alt="Pune"
                />

                <div className="location-overlay">

                  <MapPin size={18} />

                  <h3>
                    Pune
                  </h3>

                  <p>
                    Peaceful communities with great
                    connectivity and lifestyle.
                  </p>

                  <span>
                    Explore area
                    <ArrowUpRight size={15} />
                  </span>

                </div>

              </motion.div>


              {/* BANGALORE */}

              <motion.div
                className="location-card"
                initial={{
                  opacity: 0,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
              >

                <img
                  src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=900&q=85"
                  alt="Bangalore"
                />

                <div className="location-overlay">

                  <MapPin size={18} />

                  <h3>
                    Bangalore
                  </h3>

                  <p>
                    Modern homes surrounded by technology
                    and green spaces.
                  </p>

                  <span>
                    Explore area
                    <ArrowUpRight size={15} />
                  </span>

                </div>

              </motion.div>

            </div>

          </div>

        </section>


        {/* =====================================================
            HOME BUYING ADVICE
           ===================================================== */}

        <section className="advice-section">

          <div className="section-container">

            <div className="advice-layout">

              {/* LEFT */}

              <motion.div
                className="advice-heading"
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
              >

                <p className="section-eyebrow">
                  SMARTER HOME SEARCH
                </p>

                <h2>
                  A little advice
                  <br />
                  <em>goes a long way.</em>
                </h2>

                <p>
                  Buying or renting a home is a big
                  decision. CozyKeys helps you understand
                  the things that matter before you make it.
                </p>

                <button className="outline-button">
                  Explore our guides
                  <ArrowUpRight size={17} />
                </button>

              </motion.div>


              {/* RIGHT */}

              <div className="tips-list">

                {tips.map((tip, index) => {

                  const Icon = tip.icon;

                  return (

                    <motion.div
                      className="tip-card"
                      key={tip.title}
                      initial={{
                        opacity: 0,
                        x: 50,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.12,
                      }}
                    >

                      <div className="tip-icon">

                        <Icon size={21} />

                      </div>


                      <div>

                        <h3>
                          {tip.title}
                        </h3>

                        <p>
                          {tip.text}
                        </p>

                      </div>

                    </motion.div>

                  );

                })}

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            AI SECTION
           ===================================================== */}

        <section className="ai-section">

          <div className="ai-glow"></div>

          <div className="section-container">

            <motion.div
              className="ai-content"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <div className="ai-icon">

                <Compass size={24} />

              </div>


              <p className="section-eyebrow">
                COZYKEYS AI
              </p>


              <h2>
                Your next home,
                <br />
                <em>chosen intelligently.</em>
              </h2>


              <p>
                CozyKeys will learn what you love —
                your budget, lifestyle, preferred
                neighborhoods and priorities — and turn
                them into personalized property
                recommendations.
              </p>


              <button className="gold-button">

                Discover CozyKeys

                <ArrowUpRight size={17} />

              </button>

            </motion.div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
           ===================================================== */}

        <section className="final-cta">

          <div className="section-container">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <p className="section-eyebrow">
                YOUR SEARCH STARTS HERE
              </p>


              <h2>
                Ready to find
                <br />
                <em>your place?</em>
              </h2>


              <p>
                Tell us what you're looking for and let
                CozyKeys help you discover what's possible.
              </p>


              <a
                href="/register"
                className="final-button"
              >
                Get started
                <ArrowUpRight size={18} />
              </a>

            </motion.div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;