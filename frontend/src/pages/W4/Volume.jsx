import { useState } from "react";
import "../../assets/css/W4/Volume.css";

export default function Volume() {
  const [audioFactor, setAudioFactor] = useState("");
  const [audioFile, setAudioFile] = useState(null);

  const [newAudioFile, setNewAudioFile] = useState(null);

  const [loading, setLoading] = useState(false);

  async function changeAudioFileSettings(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("factor", audioFactor);
    formData.append("audio_file", audioFile);

    try {
      setLoading(true);
      const response = await fetch(
        "http://127.0.0.1:8000/cs50-playground/v1/week4/volume",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const blob = await response.blob();
        setNewAudioFile(URL.createObjectURL(blob));
      } else {
        throw new Error("failed to process audio file");
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      // set loading back to false after the request is completed
      setLoading(false);
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
          {/* <div className="display-value">{newAudioFile}</div> */}

          <div className="display-value">
            {loading ? (
              <div>Loading... </div>
            ) : (
              newAudioFile && (
                <a href={newAudioFile} download="output.wav">
                  Download
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
