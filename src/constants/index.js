import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    bootstrap,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    mysql,
    Restaurant,
    express,
    quickbuy,
    medibuddy,
    ecom
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "tech",
      title: "Tech",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },{
      name:"MySql",
      icon:mysql
    }
  ];
  
  
  const projects = [
    {
      name: "Quick Buy",
      description:
        "Quick Buy: Your one-stop shop for electronics. Browse, compare, and purchase gadgets with ease. Enjoy competitive prices, timely delivery, and reliable customer support. Download now for a smarter shopping experience.",
      tags: [
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name:"mern stack",
          color:"green-text-gradient"
        }
      ],
      image: quickbuy,
      source_code_link: "https://quiickbuy.netlify.app/",
    },
    {
      name: "Medi Appoint",
      description:
        "MediAppoint simplifies booking doctor appointments online,Users can easily schedule with their preferred specialists,Healthcare providers can register to broaden their reach,A convenient solution for both patients and medical professionals.",
      tags: [
        {
          name: "styled Component",
          color: "pink-text-gradient",
        },
        {
          name:"mern stack",
          color:"green-text-gradient"
        }
      ],
      image: medibuddy,
      source_code_link: "https://github.com/Arjunsuthar2003/MediAppoint",
    },
    {
      name: "E-Commerce",
      description:
        "Discover a diverse range of fashion items on our ecommerce app. Easily shop for clothes, shoes, and more from our online store. Enjoy seamless browsing  from your smartphone. Elevate your style effortlessly with our convenient and reliable platform.",
      tags: [
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name:"mern stack",
          color:"green-text-gradient"
        }
      ],
      image: ecom,
      source_code_link: "https://github.com/Arjunsuthar2003/Ecommerce",
    },{
      name: "Restaurant",
      description:
        "Book your favorite meals effortlessly with our restaurant app. Browse the menu, select dishes, and place your order with ease. Enjoy seamless dining from the comfort of your device. Download now for a delightful culinary experience!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Restaurant,
      source_code_link: "https://quiiickbite.netlify.app/",
    }
  ];
  
  export { services, technologies, projects };