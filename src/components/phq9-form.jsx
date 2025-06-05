import React, { useState } from "react";
import K from "../constant/index";
import { useNavigate } from "react-router-dom";

const Phq9Form = () => {
  const [answers, setAnswers] = useState(
    Array(K.Phq9Questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  // Calculate total score (with null protection)
  const totalScore = answers.reduce((acc, curr) => acc + (curr || 0), 0);

  const handleChange = (questionIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = parseInt(value, 10); // Ensure numeric value
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answers.some((answer) => answer === null)) {
      alert("Please answer all questions before submitting");
      return;
    }
    setSubmitted(true);
  };

  const handleRetake = () => {
    // Completely reset the form
    setAnswers(Array(K.Phq9Questions.length).fill(null));
    setSubmitted(false);
  };

  const getSeverity = (score) => {
    if (score >= 20) return "Severe depression";
    if (score >= 15) return "Moderately severe depression";
    if (score >= 10) return "Moderate depression";
    if (score >= 5) return "Mild depression";
    return "Minimal or no depression";
  };

  const getRecommendation = (score) => {
    if (score >= 15)
      return "Professional treatment is recommended (therapy and/or medication)";
    if (score >= 10) return "Consider professional consultation";
    if (score >= 5) return "Monitor closely; may improve on its own";
    return "No significant symptoms detected";
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Your PHQ-9 Results
        </h2>

        <div className="bg-white p-8  mb-8">
          <div className="text-center mb-6">
            <p className="text-4xl font-bold mb-2">{totalScore}</p>
            <p className="text-xl font-semibold text-gray-700">Total Score</p>
          </div>

          <div className="space-y-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-lg text-blue-800 mb-2">
                Depression Severity
              </h3>
              <p className="text-blue-700">{getSeverity(totalScore)}</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-bold text-lg text-purple-800 mb-2">
                Recommendation
              </h3>
              <p className="text-purple-700">{getRecommendation(totalScore)}</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-bold text-lg text-green-800 mb-2">
                Next Steps
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-green-700">
                {totalScore >= 10 && (
                  <li>
                    Consider scheduling an appointment with a mental health
                    professional
                  </li>
                )}
                <li>Practice self-care activities daily</li>
                <li>Share these results with your healthcare provider</li>
                <li>Consider retaking this questionnaire in 2 weeks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="mt-6 py-2 px-6 rounded-lg transition duration-200 font-medium cursor-pointer "
          >
            Back to Homepage
          </button>
          <button
            onClick={handleRetake}
            className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-3xl shadow-md transition duration-200 font-medium cursor-pointer"
          >
            Retake Questionnaire
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">
        PHQ-9 Questionnaire
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {K.Phq9Questions.map((question, index) => (
          <div
            key={`question-${index}`}
            className="bg-white p-6 rounded-lg shadow"
          >
            <p className="mb-4 font-medium">
              {index + 1}. {question}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {K.OPTIONS.map((option) => (
                <label
                  key={`option-${option.value}`}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option.value}
                    checked={answers[index] === option.value}
                    onChange={() => handleChange(index, option.value)}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    required
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="text-center mt-8">
          <button
            type="submit"
            className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-3xl shadow-md transition duration-200 font-medium cursor-pointer"
          >
            Submit Questionnaire
          </button>
        </div>
      </form>
    </div>
  );
};

export default Phq9Form;
