import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


    const items = [
      {
        id: 1,
        title: "Simple Portfolio Web Design",
        img: "../public/project_1.png",
        desc: "The design will utilize sample white space, with a clean and uncluttered layout. This ensures that your work takes center stage and creates a professional and modern look.The website will be responsive, meaning it adapts to different screen sizes and devices, such as desktops, laptops, tablets, and mobile phones. This ensures a seamless user experience across all devices.",
        demoLink: "https://sayanmanda.github.io/Imsayan.github.io/",
      },
      {
        id: 2,
        title: "E-Commerce Website Design",
        img: "../public/project_2.png",
        desc: "This e-commerce website design is carefully crafted to provide an intuitive and user-friendly experience for both our clients and their customers. With a clean and modern aesthetic, we aim to create a visually appealing platform that enhances the shopping experience.Each product should have a dedicated page with clear and detailed descriptions, high-quality images. ",
        demoLink: "https://sayanmanda.github.io/e-learning/",
      },
      {
        id:3 ,
        title: "Digital Commerce Creations",
        img: "../public/project_3.png",
        desc: "Welcome to my portfolio website, where I proudly present a curated selection of my finest e-commerce website designs. With a passion for creating visually stunning and user-friendly online shopping experiences, I've harnessed the power of design, functionality, and innovation to help businesses thrive in the digital marketplace.",
        demoLink: "https://storehook-online-store.netlify.app/",
      },
      {
        id: 4,
        title: "Fullstack real Estate Website",
        img: "../public/project_4.png",
        desc: "Step into the world of real estate design excellence with my portfolio website. Here, I proudly present a collection of my most captivating and user-centric property website designs. As a passionate designer, I've fused creativity, functionality, and innovation to craft immersive online experiences for real estate professionals.",
        demoLink: "https://nesting-nucleus-seven.vercel.app/",
      },
      {
        id: 5,
        title: "Real-Time Chat application",
        img: "../public/project_5.png",
        desc: "Welcome to my portfolio website, where I unveil my expertise in crafting dynamic and engaging real-time chat applications. With a deep commitment to innovation and user experience, I've designed and developed interactive platforms that facilitate seamless communication across the web.Also I have using firebase for this website. ",
        demoLink: "https://chat-72.firebaseapp.com/login",
      },
      {
        id: 6,
        title: "React portfolio design",
        img: "../public/project_6.png",
        desc: "Designing a React portfolio involves creating a visually appealing and functional representation of a person's skills, projects, and experiences. The goal is to provide a comprehensive overview of the individual's capabilities and showcase their work in an engaging manner.The introduction section serves as a welcoming space.",
        demoLink: "https://personal-dev.netlify.app/",
      },
      {
        id: 7,
        title: "Amazon clone website",
        img: "../public/project_7.png",
        desc: "Designing an Amazon clone website involves replicating the key features and aesthetics of the renowned e-commerce platform while incorporating a user-friendly interface and responsive design. The website's layout typically includes a prominent search bar at the top for easy navigation, along with distinct sections for different product categories.",
        demoLink: "https://sayanmanda.github.io/amazon-clone/",
      },
      {
        id: 8,
        title: "Fitness Website using React",
        img: "../public/project_8.png",
        desc: "Creating a fitness website using React can provide a dynamic and engaging platform for users to access information, resources, and tools related to fitness and well-being. React, being a powerful JavaScript library for building user interfaces, enables the development of a responsive. Our platform offers an immersive user experience.",
        demoLink: "https://flex-forge-fitness.vercel.app/",
      },
      // Add more items with img and demoLink properties
    ];

const Single = ({ item, imgsrc, demoLink }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={imgsrc} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Recent Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
  <Single item={item} imgsrc={item.img} demoLink={item.demoLink} key={item.id} />
))}

    </div>
  );
};

export default Portfolio;
