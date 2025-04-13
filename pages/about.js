import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaLaptop, FaLinkedin } from "react-icons/fa";
import { getAllTopics } from "../Lib/Data";

export const getStaticProps = () => {
  const allTopics = getAllTopics();
  return {
    props: {
      topics: allTopics,
    },
  };
};

function about({ topics }) {
  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-900">
      <Navbar topics={topics} />
      <div className="max-w-2xl pt-20 pb-32 px-6 text-center mx-auto">
        <div className="h-64 w-full justify-center flex">
          <img src="/about.png" className="h-64" />
        </div>
        <h2 className="text-3xl font-semibold text-gray-700 py-4 dark:text-gray-200">
          Hi,{" "}
          <span className="bg-indigo-400 text-white rounded px-1 dark:bg-indigo-500">
            I’m Urvesh
          </span>{" "}
          ! Nice to meet you.
        </h2>
        <p className="text-gray-600 mt-4 dark:text-indigo-200">
          I am an aspiring Security Engineer currently pursuing an MSci in InfoSec at Royal Holloway, University of London.
           My field of Interests are securing hybrid environments in AWS, as well as areas related to FinTech.
        </p>

        <div className="text-center pt-8">
          <button className="bg-indigo-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded dark:bg-indigo-600">
            <FaLaptop />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://urvesh-bogun.github.io/Portfolio/project"
            >
              See My Works
            </a>
          </button>

          <button className="bg-indigo-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded ml-3 dark:bg-indigo-600">
            <FaLinkedin />
            <a
              className="LinkedIn-follow-button"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/urvesh-bogun/"
            >
              Linkedin
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;
