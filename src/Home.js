import React from "react";

import './Home.css';
import imae from './picturesqi1.png';
const Home=()=>{
    return (
        <div className="App">
      
          {
            <div>
                <div className="background2">
                  <div className="images">
                    <div className="study">
                        <h1>Study to become a global talent</h1>
                        <p>Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.</p>
                        <button>Start Now</button>
                    </div>
                    <div className="image1">
                      <img src={imae} alt="" />
                    </div>
                    </div>
                </div>
                
            </div>
          }
        </div>
      );
}

export default Home