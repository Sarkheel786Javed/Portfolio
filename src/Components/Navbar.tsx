import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { motion } from "framer-motion";
import { useState } from "react";

const pages = [
    {
        iconHome: "bi bi-house",
        path: "/",
        title: "Home",
    },
    {
        iconHome: "bi bi-cpu",
        path: "/skills",
        title: "Skills",
    },
    {
        iconHome: "bi bi-file-person",
        path: "/about-us",
        title: "About us",
    },
    {
        iconHome: "bi bi-telephone",
        path: "/contact-us",
        title: "Contact us",
    },
];

function Navbar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            transition={{
                opacity: { ease: "out" },
                layout: { duration: 0.3 },
            }}
        >
            <div
                className="mx-2 d-flex justify-content-start align-items-center shadow"
                style={{ height: "50vh", borderRadius: "50px" }}
            >
                <div className="px-2">
                    <ul className="p-0 order_list">
                        {pages.map((p, index) => (
                            <li
                                key={index}
                                className="list-unstyled d-flex justify-content-center align-items-center"
                                style={{ width: "40px" }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <motion.div whileHover={{ scale: 1.2 }}>
                                    <Link
                                        to={p.path}
                                        className="text-center text-decoration-none text-info"
                                    >
                                        <i className={`fs-1 text-info ${p.iconHome}`}></i>
                                        {hoveredIndex === index && (
                                            <div style={{ fontSize: "8px" }}>{p.title}</div>
                                        )}
                                    </Link>
                                </motion.div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

export default Navbar;
