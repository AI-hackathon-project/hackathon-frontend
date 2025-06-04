import React, { useState } from "react";
import K from "../constant/index";

const Phq9Form = () => {
  const [answers, setAnswers] = useState(
    Array(K.Phq9Questions.length).fill(null)
  );

  const handleChange = (questionIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const totalScore = answers.reduce((acc, curr) => acc + (curr || 0), 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">
        PHQ-9 Questionnaire
      </h2>
      <form className="space-y-6">
        {K.Phq9Questions.map((question, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <p className="mb-4 font-medium">
              {index + 1}. {question}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {K.OPTIONS.map((option, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option.value}
                    checked={answers[index] === option.value}
                    onChange={() => handleChange(index, option.value)}
                    className="accent-blue-600"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="text-center mt-8">
          <p className="text-xl font-semibold">Total Score: {totalScore}</p>
        </div>
      </form>
    </div>
  );
};

export default Phq9Form;
