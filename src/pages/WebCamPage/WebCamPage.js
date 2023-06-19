import { useRef, useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

const videoWidth = '640px';
const videoHeight = '480px';

function CameraCapture() {
  const videoRef = useRef(null);
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState('No errors');
  const [mirrorImage, setMirrorImage] = useState(false);
  const [image, setImage] = useState(null);
  const [mode, setMode] = useState(isMobile ? 'environment' : 'user');

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(devices => {
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      setDevices(videoDevices);
    });
  }, []);

  useEffect(() => {
    startCamera(mode);
  }, [mode]);
   
  const stopCamera = () => {
    const mediaStream = videoRef.current.srcObject;
    if (mediaStream && mediaStream.getTracks) {
      mediaStream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };

  const startCamera = async (initialMode) => {
    stopCamera()
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: {ideal: initialMode} 
        }
      });
      videoRef.current.srcObject = stream;
    } catch (error) {
      setError(error)
    }
  };

  const switchCamera = () => {
    setMode(prevState => prevState === 'user' ? 'environment' : 'user');
  };
 

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');

    if (mirrorImage) {
      context.translate(canvas.width, 0);
      context.scale(-1, 1);
    }

    context.drawImage(video, 0, 0, width, height);
    setImage(canvas.toDataURL('image/jpeg'))
  };

  const toggleMirrorImage = () => {
    setMirrorImage(!mirrorImage);
  };

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <h1>Сделать фотографию</h1>
        <h3>{error}</h3>
      </div>
      <video
        ref={videoRef}
        width={videoWidth}
        height={videoHeight}
        autoPlay
        style={{ transform: mirrorImage ? 'scaleX(-1)' : 'none' }}
      />
      <div>
      </div>
      <button onClick={capturePhoto}>Сделать фото</button>
      <button onClick={toggleMirrorImage}>
        {mirrorImage ? 'Отключить отзеркаливание' : 'Включить отзеркаливание'}
      </button>
      <div>
        {devices?.length > 1 && <button style={{height: '50px'}} onClick={switchCamera}>switch camera</button>}
        <button style={{height: '50px'}} onClick={stopCamera}>Stop camera</button>
      </div>
      {image && <img src={image} />}
    </div>
  );
}

export default CameraCapture;


