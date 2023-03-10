import axios from "axios";

// const abc = process.env.API_KEY;

export const handleSpeechToText = async (formData) => {
  try {
    await axios.post(
      "https://api.openai.com/v1/audio/transcriptions",
      {
        prompt: "Convert speech to text: ",
        max_tokens: 60,
        n: 1,
        stop: ".",
        temperature: 0.7,
        stream: false,
        model: "whisper-1",
        inputs: {
          audio: formData,
        },
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Bearer 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",
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
};
