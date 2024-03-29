import React, { useRef, useState, useEffect } from 'react';

function CameraCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [mirrorImage, setMirrorImage] = useState(false);

  useEffect(() => {
    // Запрашиваем доступные устройства (камеры)
    navigator.mediaDevices.enumerateDevices().then(devices => {
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      setDevices(videoDevices);
      setSelectedDevice(videoDevices[0]);
    });
  }, []);

  useEffect(() => {
    if (selectedDevice) {
      startCamera();
    }
  }, [selectedDevice]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { deviceId: selectedDevice.deviceId }
      });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Ошибка доступа к камере:', error);
    }
  };

  const switchCamera = (deviceId) => {
    const selectedCamera = devices.find(device => device.deviceId === deviceId);
    setSelectedDevice(selectedCamera);
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (mirrorImage) {
      context.translate(canvas.width, 0);
      context.scale(-1, 1);
    }

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  };

  const toggleMirrorImage = () => {
    setMirrorImage(!mirrorImage);
  };

  return (
    <div>
      <h1>Сделать фотографию</h1>
      <video
        ref={videoRef}
        width="640"
        height="480"
        autoPlay
        style={{ transform: mirrorImage ? 'scaleX(-1)' : 'none' }}
      ></video>
      <button onClick={capturePhoto}>Сделать фото</button>
      <button onClick={toggleMirrorImage}>
        {mirrorImage ? 'Отключить отзеркаливание' : 'Включить отзеркаливание'}
      </button>
      <canvas ref={canvasRef} width="640" height="480"></canvas>
      <div>
        {devices.map(device => (
          <button key={device.deviceId} onClick={() => switchCamera(device.deviceId)}>
            {device.label || `Камера ${device.deviceId}`}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CameraCapture;
