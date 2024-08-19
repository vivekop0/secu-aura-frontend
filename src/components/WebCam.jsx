import React, { useState } from "react";
import Webcam from "react-webcam";
import { useNavigate} from "react-router-dom";
const WebcamCapture = () => {
  const navigate = useNavigate()
  const webcamRef = React.useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capturePhoto = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  }, [webcamRef]);

  const retakePhoto = () => {
    setCapturedImage(null);
  };

  const uploadPhoto = React.useCallback(async () => {
    if (capturedImage) {
      const response = await fetch("YOUR_BACKEND_URL/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: capturedImage,
        }),
      });

      if (response.ok) {
        alert("Photo uploaded successfully!");
        navigate('/dashboard')
        setCapturedImage(null); 
      } else {
        navigate('/dashboard')

      }
    }
  }, [capturedImage]);

  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-md shadow-lg">
      <p className="text-lg font-semibold mb-4 text-gray-700">
        Please Capture our face to continue
      </p>
      <div className="w-64 h-64 bg-gray-200 flex justify-center items-center rounded-md overflow-hidden">
        {!capturedImage ? (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full h-full object-cover"
          />
        ) : (
          <img src={capturedImage} alt="Captured" className="w-full h-full object-cover" />
        )}
      </div>
      <div className="mt-4 flex space-x-2">
        {!capturedImage ? (
          <button 
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={capturePhoto}
          >
            Capture
          </button>
        ) : (
          <>
            <button 
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              onClick={retakePhoto}
            >
              Retake
            </button>
            <button 
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              onClick={uploadPhoto}
            >
              Upload
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export const WebCam = () => {
  return (
    <WebcamCapture />
  )
}
