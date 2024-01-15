import React from "react";
import website from './google.png'
import website1 from './Interswitch.png'
import website2 from './Andela-log-landscape-blue-400px.png'
import website3 from './Microsoft_logo.png'
import website4 from './Paystack.png'
import website5 from './brewery.png'
import website6 from './Wema-Bank-Logo.png'
import website8 from './clan-logo.png'
import website9 from './edozzier.png'
import website10 from './moneymie.png'
import website12 from './Nigerian_Army.png'
import website11 from './aella-credit.png'

import './Home.css';

const   Micro=()=>{
    return (
        <div className="App">
      
          {
            <div>
                <div className="background2">
                    <div className="micro">
                        <h1>Our alumni work at world-class
                             companies around the world including</h1>
                        <div className="allwebsite">
                            <img src={website} alt="" />
                            <img src={website1} alt="" />
                            <img src={website2} alt="" />
                            <img src={website3} alt="" />
                            <img src={website4} alt="" />
                            <img src={website5} alt="" />
                            <img src={website6} alt="" />
                            <img src={website8} alt="" />
                            <img src={website9} alt="" />
                            <img src={website10} alt="" />
                            <img src={website11} alt="" />
                            <img src={website12} alt="" />
                            
                        </div>
                    </div>
              </div>
                
            </div>
          }
        </div>
      );
}

export default Micro