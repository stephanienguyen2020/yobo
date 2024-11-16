import { useRef, useState } from "react";
import "../styles/CameraView.css";

const CameraView = ({ onClose }) => {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    onClose();
  };

  // Start camera when component mounts
  useState(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  return (
    <div className="camera-view">
      <div className="camera-header">
        <div className="medication-info">
          <span className="pill-icon">💊</span>
          <div className="med-details">
            <h2>Medication</h2>
            <span>8:00</span>
          </div>
        </div>
      </div>

      <div className="camera-content">
        <p className="camera-instruction">
          Hold your medication up to the camera to fill the box below
        </p>

        <div className="camera-container">
          <video ref={videoRef} autoPlay playsInline className="camera-feed" />
          <div className="capture-box"></div>
        </div>

        <button className="capture-button" onClick={stopCamera}>
          <div className="capture-button-inner"></div>
        </button>
      </div>
    </div>
  );
};

export default CameraView;
