import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        Every skill you acquire doubles 
          <br /> your odds of success.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/react.jpg" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Learning,</motion.b> adapting, 
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>creating, </motion.b> excelling.
          </h1>
          <a href="https://github.com/sayanmanda">
  <button>WHAT I DO?</button>
</a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>HTML/CSS/JS</h2>
          <p>
          I possess a robust skill set for web development. In HTML, I can structure content seamlessly, ensuring clarity and accessibility. CSS is my canvas for design, enabling me to create visually appealing and responsive layouts. 
          </p>
           <a href="https://www.w3schools.com/html/html_scripts.asp">
          <button>Click here </button>
          </a>
        </motion.div>
        
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>React & Bootstrap</h2>
          <p>
          I possess proficient skills in React and Bootstrap, two powerful tools that synergize to create dynamic and responsive web applications. In React, my expertise lies in crafting modular and reusable components, facilitating a modular and efficient development process.
          </p>
          <a href="https://react-bootstrap.netlify.app/">
          <button>Click here</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Firebase & Firestore</h2>
          <p>
          Possessing proficient skills in Firebase and Firestore, I excel in developing robust and scalable applications that leverage the power of these cutting-edge technologies. My expertise includes designing and implementing Firebase real-time databases to create dynamic, responsive, and interactive applications.
          </p>
          <a href="https://www.tutorialspoint.com/firebase/index.htm">
          <button>Click here </button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>MongoDB</h2>
          <p>
          Proficient in MongoDB, I possess a comprehensive set of skills in this NoSQL database system. My expertise extends from designing robust and scalable database architectures to implementing efficient data models that align with the specific requirements of applications. 
          </p>
          <a href="https://www.w3schools.com/mongodb/">
          <button>Click here</button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
