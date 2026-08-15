import { motion } from "framer-motion";
import {
    ArrowUpRight,
    BedDouble,
    Bath,
    Ruler,
} from "lucide-react";

const PropertyCard = ({ property }) => {

    const formatPrice = (price) => {
        const value = Number(price);

        if (value >= 10000000) {
            return `₹${(value / 10000000).toFixed(2)} Cr`;
        }

        if (value >= 100000) {
            return `₹${(value / 100000).toFixed(2)} Lakh`;
        }

        return `₹${value.toLocaleString("en-IN")}`;
    };

    return (
        <motion.article
            className="property-card"
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.7,
            }}
            whileHover={{
                y: -8,
            }}
        >

            <div className="property-image">

                <img
                    src={property.image_url}
                    alt={property.title}
                />

                <button className="property-arrow">
                    <ArrowUpRight size={19} />
                </button>

                <span className="property-status">
                    {property.status}
                </span>

            </div>


            <div className="property-info">

                <span className="property-type">
                    {property.property_type}
                </span>

                <h3>
                    {property.title}
                </h3>

                <div className="property-location">
                    {property.location}
                </div>


                <div className="property-details">

                    <span>
                        <BedDouble size={15} />
                        {property.bedrooms} Beds
                    </span>

                    <span>
                        <Bath size={15} />
                        {property.bathrooms} Baths
                    </span>

                    <span>
                        <Ruler size={15} />
                        {property.area_sqft} sqft
                    </span>

                </div>


                <strong className="property-price">
                    {formatPrice(property.price)}
                </strong>

            </div>

        </motion.article>
    );
};

export default PropertyCard;