import React, { useState } from "react";
import { handleSpeechToText } from "../../Apis/datasend";

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFileUpload = (event) => {
    setFile(event.target.file);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("/public/test_audio.mp3", file);

    handleSpeechToText(formData);
    // try {
    //   const response = await axios.post(
    //     "https://api.openai.com/v1/audio/transcriptions",
    //     formData,
    //     {
    //       headers: { "Content-Type": "multipart/form-data" },
    //     }
    //   );
    //   console.log(response.data);
    //   setSuccess(true);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="file" onChange={handleFileUpload} />
        <button type="submit">Upload</button>
      </form>
      <div>{success && <p>File uploaded successfully</p>}</div>
      <br />
      <textarea name="output" id="" cols="30" rows="10"></textarea>
    </div>
  );
};

export default Dashboard;

//   return (
//     <>
//       <div className={style.container}>
//         <div className={style.dataContainer}>
//           <div className={style.inputContainer}>
//             <div className={style.inputContainerData}>
//               <h1>Audio</h1>
//               <input type="file" accept="audio" />
//               <button>Record</button>
//             </div>
//           </div>
//           <div className={style.outputContainer}>
//             <div className={style.outputContainerData}>
//               <h1>Text</h1>
//               <textarea name="output" id="" cols="50" rows="5"></textarea>
//               <button>Clear</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   organization: "org-H1LcVEToFoh8IWWsOIVgpYg0",
//   apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);
// const resp = openai.createTranscription(
//   createReadStream("audio.mp3"),
//   "whisper-1"
// );
