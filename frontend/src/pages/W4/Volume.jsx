import { useState } from "react";
import "../../assets/css/W4/Volume.css";

export default function Volume() {
  const [audioFactor, setAudioFactor] = useState("");
  const [audioFile, setAudioFile] = useState(null); // Use null to initialize

  async function changeAudioFileSettings(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("factor", audioFactor);
    formData.append("audio_file", audioFile); // Append the file object

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/cs50-playground/v1/week4/volume",
        {
          method: "POST",
          body: formData, // Use the FormData object
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <>
      <div className="volume-wrapper">
        <div className="problem-set-description">
          <p>Upload an audio file and change the volume of the file</p>
        </div>

        <div className="problem-set-screen">
          <form className="grid volume-form" onSubmit={changeAudioFileSettings}>
            <label htmlFor="upload-file">
              <input
                type="file"
                className="standard-file-input"
                id="upload-file"
                onChange={(e) => setAudioFile(e.target.files[0])}
              />
            </label>
            <input
              type="number"
              value={audioFactor}
              onChange={(e) => setAudioFactor(e.target.value)}
              className="standard-number-input"
              placeholder="Value for the audio change"
            />
            <input type="submit" value={"Change"} className="btn" />
          </form>
        </div>
      </div>
    </>
  );
}
