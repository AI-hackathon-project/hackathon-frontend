import { PlusCircleIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { FaCheck, FaHistory, FaTrash, FaArrowLeft } from "react-icons/fa";

const DailyCheckIn = () => {
  const [mood, setMood] = useState("");
  const [energy, setEnergy] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(true); // Start with history view
  const [showSuccess, setShowSuccess] = useState(false);
  const [entries, setEntries] = useState([]);

  // Load entries from localStorage on component mount
  useEffect(() => {
    const savedEntries = localStorage.getItem("wellnessEntries");
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  // Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("wellnessEntries", JSON.stringify(entries));
  }, [entries]);

  // Auto-hide success message after 3 seconds
  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      mood,
      energy,
      notes,
      date: new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      id: Date.now(),
      timestamp: new Date().toISOString(),
    };
    setEntries([newEntry, ...entries]);
    setSubmitted(true);
    setShowSuccess(true);
    setMood("");
    setEnergy("");
    setNotes("");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      setEntries(entries.filter((entry) => entry.id !== id));
    }
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete ALL your entries?")) {
      setEntries([]);
    }
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center p-6 z-50">
        <div className="text-center max-w-md animate-fadeIn">
          <div className="bg-green-100 p-4 rounded-full mb-6 inline-block">
            <FaCheck className="text-green-600 text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Check-In Recorded!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for sharing how you're feeling today. Your wellness
            matters.
          </p>
          <button
            onClick={() => setShowSuccess(false)}
            className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-3xl shadow-md transition duration-200 font-medium cursor-pointer"
          >
            View Your History
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      {!submitted ? (
        // Form View
        <div className="bg-white p-6 rounded-xl animate-fadeIn">
          <div className="flex items-center mb-6">
            <button
              onClick={() => setSubmitted(true)}
              className="mr-4 text-purple-600 hover:text-purple-800"
            >
              <FaArrowLeft size={20} />
            </button>
            <h2 className="text-2xl font-bold text-purple-800">
              Daily Wellness Check-In
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                How are you feeling today?
              </label>
              <input
                type="text"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Happy, tired, anxious..."
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Energy Level (1-5)
              </label>
              <select
                value={energy}
                onChange={(e) => setEnergy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              >
                <option value="">Select your energy level</option>
                <option value="1">1 - Very Low</option>
                <option value="2">2 - Low</option>
                <option value="3">3 - Moderate</option>
                <option value="4">4 - High</option>
                <option value="5">5 - Very High</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Additional Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                rows="3"
                placeholder="Anything else you'd like to note about today..."
              />
            </div>

            <button
              type="submit"
              className="w-full  mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-3xl shadow-md transition duration-200 font-medium cursor-pointer "
            >
              Submit Check-In
            </button>
          </form>
        </div>
      ) : (
        // History View
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-purple-800 flex items-center">
                  <FaHistory className="mr-3" />
                  Your Wellness History
                </h3>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-purple-600 hover:text-purple-800 flex items-center"
                >
                  <PlusCircleIcon className="mr-1" /> New Check-In
                </button>
              </div>

              {entries.length === 0 ? (
                <div className="min-h-[400px] flex flex-col items-center justify-center">
                  <div className="text-gray-300 mb-4">
                    <FaHistory className="h-16 w-16" />
                  </div>
                  <div className="text-center">
                    <p className="text-gray-500 text-lg mb-6">
                      No entries yet. Complete your first check-in to start
                      tracking!
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-3xl shadow-md transition duration-200 font-medium cursor-pointer"
                    >
                      Start Your First Check-In
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {entries
                    .sort(
                      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
                    )
                    .map((entry) => (
                      <div
                        key={entry.id}
                        className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow relative group"
                      >
                        <button
                          onClick={() => handleDelete(entry.id)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                          aria-label="Delete entry"
                        >
                          <FaTrash size={12} />
                        </button>
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-700">
                              {entry.date}
                            </p>
                            <p className="text-gray-600 capitalize mt-1">
                              <span className="font-medium">Mood:</span>{" "}
                              {entry.mood}
                            </p>
                            <p className="text-gray-600">
                              <span className="font-medium">Energy:</span>{" "}
                              {entry.energy}/5
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              entry.mood === "anxious" ||
                              entry.mood === "overwhelmed"
                                ? "bg-red-100 text-red-800"
                                : entry.mood === "tired"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {entry.mood}
                          </span>
                        </div>
                        {entry.notes && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <p className="text-gray-600">
                              <span className="font-medium">Notes:</span>{" "}
                              {entry.notes}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              )}
            </div>

            {entries.length > 0 && (
              <div className="p-6 pt-0">
                <button
                  onClick={handleClearAll}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg transition duration-200 font-medium flex items-center justify-center"
                >
                  <FaTrash className="mr-2" /> Clear All Entries
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyCheckIn;
