import axios from "axios";

export const handleSpeechToText = async (formData) => {
  try {
    const axiosData = await axios.post(
      "https://api.openai.com/v1/audio/translations",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GPT_API_KEY}`,
        },
      }
    );

    return axiosData.data;
  } catch (error) {
    console.error(error);
  }
};

export const chatApi = async (text) => {
  try {
    const axiosData = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: text,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GPT_API_KEY}`,
        },
      }
    );

    return axiosData.data;
  } catch (error) {
    console.error(error);
  }
};
