// Temporarily add this at the top of your translateText function
console.log(
  "Using API Key:",
  import.meta.env.VITE_GHANANLP_API_KEY ? "Exists" : "MISSING"
);

export const translateText = async ({
  text,
  source_language,
  target_language,
}) => {
  const apiUrl = "https://translation-api.ghananlp.org/v1/translate";
  const apiKey = import.meta.env.VITE_GHANANLP_API_KEY;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        text,
        source_language,
        target_language,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        error: data.message || `Translation API error: HTTP ${response.status}`,
      };
    }

    // Handle both possible response formats:
    // 1. The documented format with translatedText
    // 2. The actual format with type/message
    const translatedText = data.translatedText || data.message;

    if (!translatedText) {
      return {
        error: `Unexpected response format: ${JSON.stringify(data)}`,
      };
    }

    return { translatedText };
  } catch (error) {
    return {
      error: `Network error: ${error.message}`,
    };
  }
};
