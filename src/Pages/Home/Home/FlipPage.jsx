import Tilt from 'react-parallax-tilt';

// import './FlipPage.demozap.css';
import { useState } from 'react';
import {Page} from "./Home"

const FlipPage = () => {
    const [[flipVertically, flipHorizontally], toggleFlip] = useState([false, false]);
    return (
        <div className="flip-page">
        <Tilt flipVertically={flipVertically} flipHorizontally={flipHorizontally}>
          <Page
            flipVertically={flipVertically}
            flipHorizontally={flipHorizontally}
            toggleFlipVertically={(checked) => toggleFlip([checked, flipHorizontally])}
            toggleFlipHorizontally={(checked) => toggleFlip([flipVertically, checked])}
          />
        </Tilt>
      </div>
    );
};

export default FlipPage;