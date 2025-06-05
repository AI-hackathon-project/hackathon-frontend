import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
import { useEffect, useState } from "react";
import { translateText } from "../services/ghana-nlp";

const getCachedTranslation = (key) => {
  const cached = localStorage.getItem(key);
  return cached ? JSON.parse(cached) : null;
};

const setCachedTranslation = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const defaultContent = {
  title: "About the PHQ-9",
  paragraphs: [
    "The <strong>Patient Health Questionnaire-9 (PHQ-9)</strong> is a widely used tool for screening, diagnosing, monitoring, and measuring the severity of depression.",
    "It consists of 9 questions that ask about your mood, energy levels, appetite, sleep, and overall feelings over the past two weeks.",
    "This form is <span class='uppercase font-bold'>not a medical diagnosis</span>, but it can help you understand how you're feeling and whether you should consider speaking to a healthcare professional.",
    "Your answers are private and will not be stored unless you choose to save or share them.",
  ],
};

const Phq9Intro = () => {
  const [content, setContent] = useState(defaultContent);
  const [language, setLanguage] = useState("en");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Updated loadContent function in Phq9Intro component
    const loadContent = async () => {
      if (language === "en") {
        setContent(defaultContent);
        return;
      }

      const cacheKey = `phq9-${language}`;
      const cached = getCachedTranslation(cacheKey);

      if (cached) {
        setContent(cached);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        // Translate full content
        const response = await translateText({
          text:
            defaultContent.title + "||" + defaultContent.paragraphs.join("||"),
          source_language: "en",
          target_language: language,
        });

        if (response?.error) {
          throw new Error(response.error);
        }

        if (!response?.translatedText) {
          throw new Error("No translation returned");
        }

        const translatedTexts = response.translatedText.split("||");
        const translatedData = {
          title: translatedTexts[0] || defaultContent.title,
          paragraphs: translatedTexts.slice(1) || defaultContent.paragraphs,
        };

        setCachedTranslation(cacheKey, translatedData);
        setContent(translatedData);
      } catch (err) {
        console.error("Translation failed:", err);
        setError(
          `Translation to ${language} failed. Showing English version. (${err.message})`
        );
        setContent(defaultContent);
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [language]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  if (isLoading && language !== "en") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white rounded-xl shadow-md p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading translation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-md p-8 relative">
        {isLoading && (
          <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center rounded-xl">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-2">
            {error && (
              <span className="text-red-500 text-sm mr-2">{error}</span>
            )}
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              aria-label="Select language"
              disabled={isLoading}
            >
              <option value="en">English</option>
              <option value="tw">Twi</option>
            </select>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          {content.title}
        </h1>

        <div
          className={`space-y-4 ${language === "tw" ? "twi-translation" : ""}`}
          style={{ all: "initial" }}
        >
          {" "}
          {/* Nuclear reset */}
          {content.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: paragraph }}
              className="text-inherit" /* Inherits from parent */
              style={{
                fontSize: "1rem",
                fontWeight: 400,
                marginBottom: "1rem",
              }}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-300 text-sm  transition"
            aria-label="Go back to previous page"
          >
            <IoIosArrowBack className="text-lg" />
            <span>Go back</span>
          </Link>

          <Link
            to="/phq9-form"
            className="flex text-blue-600 hover:text-blue-300 text-sm transition  items-center gap-2 px-6 py-3"
            aria-label="Start the PHQ-9 questionnaire"
          >
            <span>Take Questionnaire</span>
            <GrFormNext className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Phq9Intro;
