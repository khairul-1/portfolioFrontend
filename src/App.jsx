import React, { useCallback, useEffect, useState } from "react";
import "animate.css";
import "./styles.css";
import Particles1 from "./Particles1";
import { Blogs } from "./Blogs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { AdminDashboard } from "./AdminDashboard";
import {
  Link,
  NavLink,
  Navigate,
  Route,
  Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import axios from "axios";

//import Login from "./Login2";
//import AboutMe from './AboutMe';

const Navbar = () => {
  // const onClick2 = () => {
  //   window.location.href = "./Blogs";
  // };

  const [blogs, setBlogs] = useState([
    // Blogs data...
  ]);

  useEffect(() => {
    setBlogs([
      {
        title:
          "The question of whether manual coding will be replaced by AI is a topic of considerable debate and speculation. ",
        content:
          "While AI is likely to automate many aspects of coding, it is unlikely to completely replace human programmers in the foreseeable future. Instead, AI will serve as a powerful tool that enhances productivity and efficiency, allowing developers to focus on more complex, creative, and strategic aspects of software development. The future will likely see a symbiotic relationship between AI and human programmers, each complementing the other's strengths.",
      },
    ]);
  }, []);
  //console.log(blogs);
  return (
    <nav className="container flex items-center justify-between bg-slate-800 max-auto rounded-full p-4 text-white   animatedDiv animated infinite">
      <div className="flex items-center">
        <span className="text-xl font-bold">
          Portfolio of Mohammad Khairul Alamgir
        </span>
      </div>
      <div className="flex space-x-4">
        {/* You can open the modal using ID.showModal() method */}

        <button
          className="btn btn-neutral"
          onClick={() => window.my_modal_4.showModal()}
        >
          My Projects
        </button>
        <dialog id="my_modal_4" className="modal">
          <form method="dialog" className="modal-box w-11/12 max-w-5xl">
            <h1 className="font-bold text-lg">Pet Adoption</h1>
            <p>
              user can view shoe,select shoe, customized shoe, shoe service,
              sales history dashboard
            </p>
            <a
              href="https://petadoptionsbd.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://petadoptionsbd.netlify.app/
            </a>
            <h1 className="font-bold text-lg">Shoes Management Dashboard</h1>
            <p>
              user can view shoe,select shoe, customized shoe, shoe service,
              sales history dashboard
            </p>
            <a
              href="https://stalwart-mooncake-ac8b5d.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://stalwart-mooncake-ac8b5d.netlify.app/
            </a>
            <h1 className="font-bold text-lg">Summer Camp Sports</h1>
            <p>
              Students can select & join class with payment. Instructor page and
              class add option.
            </p>
            <a
              href="https://summercampsportsproject.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://summercampsportsproject.web.app/
            </a>
            <h1 className="font-bold text-lg">Toy Market</h1>
            All toys section, Toy by category , Select toy , My toy section, Toy
            details section.,
            <p></p>
            <a
              href="https://toy-market-c2c87.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://toy-market-c2c87.web.app/
            </a>
            <h1 className="font-bold text-lg">Food Lover</h1>
            Chefs recipe, Recipe details , Chef details.
            <p></p>
            <a
              href="https://the-food-lover.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://the-food-lover.web.app/
            </a>
            <p className="py-4">Click the button below to close</p>
            <div className="modal-action">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
        <button className="btn" onClick={() => window.my_modal_3.showModal()}>
          About Me
        </button>
        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box w-11/12 max-w-5xl">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="p-4">
              <p className="p-4">
                Mohammad Khairul Alamgir is a skilled Fullstack Web Developer
                based in Dhaka, Bangladesh. With expertise in HTML, CSS,
                Bootstrap, Tailwind, JavaScript, React, React Router, Hooks, and
                Context API, he has a solid foundation in developing dynamic and
                interactive web applications.
              </p>
              <p>
                Build backend project by Type
                Script,Mongodb,Mongoose,Redux,Prisma,PostgreSQL,NextJS,
              </p>

              <p className="p-4">
                Currently, Khairul is employed as a Principal Consultant at
                WIPRO, where he plays a crucial role to manage the optimization
                of telecom network. Leading the team of optimization.
              </p>

              <p className="p-4">
                Khairul was employed as a Technical Lead at WIPRO, where he
                played a role in RF product planning, optimization, and the
                utilization of planning tools for technologies like GSM, UMTS,
                and LTE.
              </p>

              <p className="p-4">
                Prior to his current position, Khairul served as a Senior Lead
                Engineer at GrameenPhone Ltd. from November 2005 to October
                2021. During his tenure, he gained valuable experience in RF
                planning, design, and optimization.
              </p>

              <p className="p-4">
                Khairul holds a B.Sc. in Electrical & Electronic Engineering,
                which he obtained from Khulna University of Science & Technology
                in 2004. He also completed his Higher Secondary Certificate
                (H.S.C) with first-class honors at KBI College in Mymensingh and
                secured the same achievement in his Secondary School Certificate
                (S.S.C) from Mymensingh Zilla School.
              </p>

              <p className="p-4">
                If you wish to contact Mohammad Khairul Alamgir, you can reach
                out to him via email at tapu.eee@gmail.com or by phone at
                +8801711507602. Additionally, you can find his LinkedIn profile
                for further professional information and networking
                opportunities.
              </p>
            </div>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
            <button className="btn">Close</button>
          </form>
        </dialog>

        {/* <a href="./AboutMe.jsx" className="hover:text-sky-300">About Me</a> */}

        {/* <a href="#projects" className="hover:text-sky-300">My Projects</a> */}
        {/* You can open the modal using ID.showModal() method */}
        <div className="hover:text-sky-300">
          <button className="btn" onClick={downloadPDF}>
            Export Resume
          </button>
        </div>
        <button onClick={() => window.my_modal_5.showModal()} className="btn">
          {/* <Navigate to="/Blogs" className="hover:text-sky-300" /> */}
          {/* <a href="./Blogs"></a> */}
          Blogs
        </button>
        <dialog id="my_modal_5" className="modal">
          <form method="dialog" className="modal-box w-11/12 max-w-5xl">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="p-4">
              <div className="p-4 bg-black-100 bg-opacity-80">
                <h2 className="text-2xl font-bold mb-4">Blogs</h2>
                {blogs.map((blog, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-lg font-bold">{blog.title}</h3>
                    <p>{blog.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
            <button className="btn">Close</button>
          </form>
        </dialog>
      </div>
    </nav>
  );
};

// const aboutMe2 = () => {

//     <div>

//     <p>
//     Mohammad Khairul Alamgir is a skilled Frontend Web Developer based in Dhaka, Bangladesh. With expertise in HTML, CSS, Bootstrap, Tailwind, JavaScript, React, React Router, Hooks, and Context API, he has a solid foundation in developing dynamic and interactive web applications.
//     </p>

// <p>
// Currently, Mohammad is employed as a Technical Lead at WIRO, where he plays a crucial role in RF product planning, optimization, and the utilization of planning tools for technologies like GSM, UMTS, and LTE.
// </p>

// <p>
// Prior to his current position, Mohammad served as a Senior Lead Engineer at GrameenPhone Ltd. from November 2005 to October 2021. During his tenure, he gained valuable experience in RF planning, design, and optimization.
// </p>

// <p>
// Mohammad holds a B.Sc. in Electrical & Electronic Engineering, which he obtained from Khulna University of Science & Technology in 2004. He also completed his Higher Secondary Certificate (H.S.C) with first-class honors at KBI College in Mymensingh and secured the same achievement in his Secondary School Certificate (S.S.C) from Mymensingh Zilla School.
// </p>

// <p>
// If you wish to contact Mohammad Khairul Alamgir, you can reach out to him via email at tapu.eee@gmail.com or by phone at +8801711507602. Additionally, you can find his LinkedIn profile for further professional information and networking opportunities.
// </p>

//  </div>

// }

const downloadPDF = () => {
  // const fileURL = 'https://drive.google.com/file/d/1UMKL3E-DWApb8OcbGVnXDRBqfppwJrfC/view?usp=drive_link';
  const fileURL =
    "https://drive.google.com/u/0/uc?id=1UMKL3E-DWApb8OcbGVnXDRBqfppwJrfC&export=download";

  window.open(fileURL, "_blank");
};

const ContactInfo = () => {
  return (
    <div className="p-4 bg-black-100 bg-opacity-80">
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <p>
        Name: Mohammad Khairul Alamgir
        <br />
        Role: Full Stack Web Developer
        <br />
        Location: Dhaka, Bangladesh
        <br />
        Email: tapu.eee@gmail.com
        <br />
        Phone: +8801711507602
        <br />
        <a
          href="https://www.linkedin.com/in/md-khairul-alamgir-a3335a29/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin Profile
        </a>
      </p>
    </div>
  );
};

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "JavaScript",
    "React",
    "React Router",
    "Hooks",
    "Context API",
    "DOM",
    "API",
    "ES6",
    "debug",
    "devtool",
  ];

  const pic = [
    "/HTML.jpg",
    "/CSS.jpg",
    "/Bootstrap.jpg",
    "/Tailwind.jpg",
    "/JavaScript.jpg",
    "/React.jpg",
    "/react_router.jpg",
    "/hooks.jpg",
    "/context API.jpg",
    "/dom.jpg",
    "/API.jpg",
    "/ES6.jpg",
    "/debugging.jpg",
    "/Devtools.jpg",
  ];

  return (
    <div className="p-4 bg-black-100 bg-opacity-20 ">
      <h2 className="text-2xl font-bold mb-4 ">Skills Frontend</h2>
      <ul className="list-disc ml-6 steps ">
        {skills.map((skill, index) => (
          // <li key={index}>{skill}</li>

          <li key={index} data-content="" className="step step-info">
            {<img className="w-8 h-8" src={pic[index]} />}
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
const Skills2 = () => {
  const skills = [
    "Node",
    "express",
    "mongodb",
    "mongoose",
    "typeScript",
    "redux",
    "postgreSQL",
    "prisma",
    "nextJS",
    "JWT tokens",
  ];
  const pic = [
    "/Node.jpg",
    "/Express.jpg",
    "/MongoDb.jpg",
    "/mongoose.jpg",
    "/typeScript.jpg",
    "/redux.jpg",
    "/postgreSQL.jpg",
    "/prisma.jpg",
    "/nextJS.jpg",
    "/JWT.jpg",
  ];

  return (
    <div className="p-4 bg-black-100 bg-opacity-20 ">
      <h2 className="text-2xl font-bold mb-4 ">Skills Backend</h2>
      <ul className="list-disc ml-6 steps ">
        {skills.map((skill, index) => (
          // <li key={index}>{skill}</li>

          <li key={index} data-content="" className="step step-primary">
            {<img className="w-8 h-8" src={pic[index]} />}
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Pet Adoption",
      description:
        "User can select & adopt pet. Admin approve, add pet and modify, delete pet.",
      link: "https://petadoptionsbd.netlify.app/",
      pic: "/petAdoption.jpg",
    },
    {
      title: "Shoes Management Dashboard",
      description:
        "user can view shoe,select shoe, customized shoe, shoe service, sales history dashboard",
      link: "https://stalwart-mooncake-ac8b5d.netlify.app/",
      pic: "/shoeDashboard.jpg",
    },
    {
      title: "Summer Camp Sports",
      description:
        "Students can select & join class with payment. Instructor page and class add option.",
      link: "https://summercampsportsproject.web.app/",
      pic: "/summerCamp.jpg",
    },
    {
      title: "Toy Market",
      description:
        " All toys section, Toy by category , Select toy , My toy section, Toy details section.",
      link: "https://toy-market-c2c87.web.app/",
      pic: "/toyMarket.jpg",
    },
    {
      title: "Food Lover",
      description: " Chefs recipe, Recipe details , Chef details ",
      link: "https://the-food-lover.web.app/",
      pic: "/foodLover.jpg",
    },
  ];

  return (
    <div className=" p-4 bg-black-100 bg-opacity-80">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-4 flex card">
          <div className="card">
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {project.link}
            </a>
          </div>
          <div>
            <img className="w-1/2 " src={project.pic} />
          </div>
        </div>
      ))}
    </div>
  );
};

const WorkExperience = () => {
  const experience = [
    {
      position: "Principal Consultant",
      company: "WIPRO",
      duration: "Present",
      description:
        "Working in WIRO as Principal Consultant Experience: Head of optimization for network mange service project of telecom company, leading the optimization team",
    },
    {
      position: "Technical Lead",
      company: "WIPRO",
      duration: "Oct 2021-Oct 2023",
      description:
        "Working in WIRO as Technical Lead. Experience: RF Product plan, Planning & Optimization, RF products & Planning tools Technology: GSM, UMTS, LTE",
    },
    {
      position: "Senior Lead Engineer",
      company: "GrameenPhone Ltd.",
      duration: "Nov 2005 - Oct 2021",
      description:
        "Worked in GrameenPhone Ltd. as Sr. Lead Engineer and other positions. Experience: RF Planning, Design and Optimization",
    },
  ];

  return (
    <div className="p-4 bg-black-100 bg-opacity-80 ">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      {experience.map((job, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-bold">{job.position}</h3>
          <p className="text-black-500 mb-2">{job.company}</p>
          <p>{job.duration}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

const Education = () => {
  const education = [
    {
      degree: "B.Sc in Electrical & Electronic Engineering",
      duration: "2001-2004",
      institution: "Khulna University of Science & Technology, Dhaka",
    },
    {
      degree: "Higher Secondary Certificate (H.S.C)",
      duration: "Passed with 1st Class",
      institution: "KBI College, Mymensingh",
    },
    {
      degree: "Secondary School Certificate (S.S.C)",
      duration: "Passed with 1st Class",
      institution: "Mymensingh Zilla School",
    },
  ];

  return (
    <div className="p-4 bg-black-100 bg-opacity-80">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-bold">{edu.degree}</h3>
          <p className="text-black-500 mb-2">{edu.duration}</p>
          <p>{edu.institution}</p>
        </div>
      ))}
    </div>
  );
};
//let auth2;
const Login = () => {
  //console.log("it is called");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [auth, setAuth] = useState("");

  const handleLogin = async (e) => {
    //console.log("it is called2");
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );
      //console.log(response.data.token);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        toast.success("Login successful");
        window.location.href = "/admin-dashboard";
        //navigate("/admin-dashboard");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("An error occurred during login");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-container">
      {/* <h2>Login</h2> */}
      <form>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn" type="submit" onClick={handleLogin}>
          Login
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

const App = () => {
  // const Navbar2 = ({ auth, setAuth }) => {
  const [loginVisible, setLoginVisible] = useState(true);
  //console.log(auth2);
  const tokenExist = localStorage.getItem("token");

  const [adminVisible, setAdminVisible] = useState(false);

  // Function to toggle the component
  const toggleComponent = () => {
    setAdminVisible(!adminVisible);
  };

  return (
    // <Router>
    <div className="container mx-auto p-4 text-white">
      <Navbar />
      {!tokenExist && (
        <div className="flex justify-end">
          <button
            className="btn "
            onClick={() => {
              window.my_modal_6.showModal();
              setLoginVisible(false);
              setAdminVisible(false);
            }}
          >
            Admin Login
          </button>
        </div>
      )}
      <dialog id="my_modal_6" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <h1 className="font-bold text-lg">Login</h1>
          <Login />
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
      {tokenExist && (
        <button className="btn" onClick={toggleComponent}>
          {adminVisible ? "Exit Admin Dashboard" : "Admin Dashboard"}
        </button>
      )}
      {adminVisible ? (
        <AdminDashboard />
      ) : (
        <>
          <Skills />
          <Skills2 />
          <Projects />
          <WorkExperience />
          <Education />
          <ContactInfo />
          <Particles1 />
        </>
      )}
    </div>
  );
};

export default App;
