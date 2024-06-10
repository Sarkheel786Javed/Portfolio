import { motion } from "framer-motion";

function HomePage() {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.8} };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
  };
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, transition: { duration: 2 } }}
    variants={{ visible: { transition: { staggerChildren: 0.8 } } }}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-6 d-fex justify-content-center align-items-center">
          <div
            className=" shadow my-5 p-3 ">
            <motion.h1 variants={itemVariants} className="text-center text-light">Hey!</motion.h1>
            <motion.label  variants={itemVariants} className="mx-2 text-light">I am </motion.label>
            <motion.label variants={itemVariants}> Sarkheel</motion.label>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;
