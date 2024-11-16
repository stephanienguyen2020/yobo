import { useRef, useState, useEffect } from "react";
import "../../styles/peerSupport/CameraView.css";

const CameraView = ({ onClose, onVerify }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const startCamera = async () => {
    try {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }

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

  const handleCapture = () => {
    const canvas = document.createElement("canvas");
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);
    const imageDataUrl = canvas.toDataURL("image/jpeg");
    setCapturedImage(imageDataUrl);
    setShowConfirmation(true);
  };

  const handleRetake = () => {
    setCapturedImage(null);
    setShowConfirmation(false);
    startCamera();
  };

  const handleVerify = () => {
    onVerify();
    stopCamera();
  };

  useEffect(() => {
    startCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  if (showConfirmation) {
    return (
      <div className="camera-view">
        <div className="confirmation-view">
          <div className="confirmation-header">
            <p>I verify that my 8:00 medication is in this photo</p>
          </div>
          <div className="captured-image-container">
            <img src={capturedImage} alt="Captured medication" />
            <div className="capture-box"></div>
          </div>
          <div className="confirmation-buttons">
            <button className="retake-button" onClick={handleRetake}>
              <span>✕</span>
              <span>RETAKE</span>
            </button>
            <button className="verify-button" onClick={handleVerify}>
              <span>✓</span>
              <span>VERIFY</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

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

        <button className="capture-button" onClick={handleCapture}>
          <div className="capture-button-inner"></div>
        </button>
      </div>
    </div>
  );
};

export default CameraView;
