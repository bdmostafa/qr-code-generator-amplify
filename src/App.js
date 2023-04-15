import './App.css';
import {
  QRCodeInputForm
} from './ui-components';
import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import { Alert, Heading, Loader, Button, Text, Link } from '@aws-amplify/ui-react';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const defaultText = `The site owner's LinkedIn profile: https://www.linkedin.com/in/md-mostafa/`;
  const [text, setText] = useState(defaultText);
  const [isDefault, setIsDefault] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSError, setIsSError] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }
  }, [isSuccess])

  function handleDownload() {
    // Get canvas element
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    // Create image data URL
    const imageDataUrl = canvas.toDataURL('image/png');

    // Create temporary link element
    const link = document.createElement('a');
    link.download = 'qr-code.png';
    link.href = imageDataUrl;
    console.log(imageDataUrl)
    // Click the link to download the image
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (
    <div className='container'>
      <Heading level={1} textAlign='center'>
        Welcome to the site.
      </Heading>

      {isSuccess && <Alert variation='success'>
        Successfully generated QR Code!
      </Alert>}

      {isSError && <Alert variation='error'>
        Something error has occurred. Please try again.
      </Alert>}

      <QRCodeInputForm
        onSubmit={async (fields) => {
          setIsLoading(false)
          setIsDefault(false)
          setIsSuccess(true)
          setIsSError(false)
          setText(fields.Field0)

          const canvas = canvasRef.current;
          await QRCodeSVG.toCanvas(canvas, fields.Field0);
        }}
        onError={(error) => {
          console.log(error)
          setIsSError(true)
        }}
        onCancel={() => {
          setText(defaultText)
          setIsDefault(true)
        }}
        onChange={(e) => {
          setIsSuccess(false)
          setIsLoading(true)
        }}
      />
      <div className='qr-container'>
        {
          isLoading ?
            `QR Code will be generating while you click 'Generate'` :
            <Text>
              Scan {isDefault ? 'my' : 'your'} QR code
            </Text>
        }

        {
          isLoading
            ? <Loader size="large" style={{ margin: '0 auto', marginTop: '10px' }} />
            : <>
              <QRCodeSVG
                value={text}
                size={256}
                includeMargin={true}
              />
              <Button
                loadingText=""
                onClick={handleDownload}
                ariaLabel=""
              >
                Download Now
              </Button>
              <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
            </>
        }
      </div>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <span style={{ marginRight: '5px' }}>
          Developed by</span>
        <Link
          href="https://mdmostafa.com/"
          color="#007EB9"
        >
          Mostafa
        </Link>


      </div>

    </div>


  );
}

export default App;
