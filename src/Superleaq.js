// import React from 'react';

// const SuperOverLeague = (props) => {
//     return (
//         <div className="super-over-league-container">
//             <h1 className="heading">Super Over League</h1>
//             <div className="teams-container">
//                 <img src={props.team1Logo} className="logo-image" alt="Team 1 Logo" />
//                 <img src={props.team2Logo} className="logo-image" alt="Team 2 Logo" />
//             </div>
//         </div>
//     );
// };

// export default SuperOverLeague;
import React from 'react';
import './App.css'; // Import app.css

const Superleaq = (props) => {
    return (
        <div className="super-over-league-container">
            <h1 className="heading">Super Over League</h1>
            <div className="teams-container">
                <img src={props.team1Logo} className="logo-image" alt="Team 1 Logo" />
                <img src={props.team2Logo} className="logo-image" alt="Team 2 Logo" />
            </div>
        </div>
    );
};

export default Superleaq;
