import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="text-xl text-center bg-blue-500 text-white p-4 rounded-md">
        Hi, I'm
        <span className="font-bold mx-2">Himanshu</span>👋
        <br />
        A Software Engineer
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="text-xl text-center bg-blue-500 text-white p-4 rounded-md">
        <p className="text-lg font-medium">
          Worked with many companies <br /> and picked up many skills along the way
        </p>
        <Link
          to="/about"
          className="mt-4 inline-flex items-center bg-white text-black font-semibold px-4 py-2 rounded-md shadow hover:shadow-lg"
        >
          Learn more
          <img src={arrow} alt="arrow" className="ml-2 w-4 h-4" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="text-xl text-center bg-blue-500 text-white p-4 rounded-md">
        <p className="text-lg font-medium">
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>
        <Link
          to="/projects"
          className="mt-4 inline-flex items-center bg-white text-black font-semibold px-4 py-2 rounded-md shadow hover:shadow-lg"
        >
          Visit my portfolio
          <img src={arrow} alt="arrow" className="ml-2 w-4 h-4" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="text-xl text-center bg-blue-500 text-white p-4 rounded-md">
        <p className="text-lg font-medium">
          Need a project done or looking for a dev? <br /> I'm just a few keystrokes away
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-flex items-center bg-white text-black font-semibold px-4 py-2 rounded-md shadow hover:shadow-lg"
        >
          Let's talk
          <img src={arrow} alt="arrow" className="ml-2 w-4 h-4" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
