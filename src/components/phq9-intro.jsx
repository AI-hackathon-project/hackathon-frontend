import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";

const Phq9Intro = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-5">
          About the PHQ-9
        </h1>

        <p className="text-gray-700 ">
          The <strong>Patient Health Questionnaire-9 (PHQ-9)</strong> is a
          widely used tool for screening, diagnosing, monitoring, and measuring
          the severity of depression.
        </p>

        <p className="text-gray-700 mb-3">
          It consists of 9 questions that ask about your mood, energy levels,
          appetite, sleep, and overall feelings over the past two weeks.
        </p>

        <p className="text-gray-700 mb-3">
          This form is
          <span className="uppercase font-bold"> not a medical diagnosis </span>
          , but it can help you understand how you're feeling and whether you
          should consider speaking to a healthcare professional.
        </p>

        <p className="text-gray-700 italic">
          Your answers are private and will not be stored unless you choose to
          save or share them.
        </p>

        <div className="flex justify-between mt-5">
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-300 text-sm transition flex items-center justify-center gap-2.5"
          >
            <IoIosArrowBack />
            Go back
          </Link>
          <Link
            to="/phq9-form"
            className="text-blue-500 hover:text-blue-300 text-sm transition flex items-center justify-center gap-2.5"
          >
            Start the Questionnaire
            <GrFormNext />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Phq9Intro;
