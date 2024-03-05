// // import React from 'react';
// // import './App.css';
// // import MyFunctionalComponent from './MyFunctionalComponent '
// // //import Classco from './Classco';

// // //function App() {
// //   //return (
// //    //<Classco/>
// //   //);
// // //}

// // //export default App;
// // function App() {
// //   return (
// //     <div className="App">
// //       <h1>Welcome to my React App</h1>
// //       <MyFunctionalComponent name="John" message="Welcome to my app!" />
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
// import Superleaq from './Superleaq';

// const App = () => {
//     return (
//         <div>
//             <Superleaq 
//                 team1Logo="https://assets.ccbp.in/frontend/react-js/rcb-img.png" 
//                 team2Logo="https://assets.ccbp.in/frontend/react-js/csk-img.png" 
//             />
//         </div>
//     );
// };

// export default App;
import React from 'react';
import './App.css'; // Import app.css
import Superleaq from './Superleaq';

const App = () => {
    return (
        <div className="super-over-league-container">
            <Superleaq 
                team1Logo="https://assets.ccbp.in/frontend/react-js/rcb-img.png" 
                team2Logo="https://assets.ccbp.in/frontend/react-js/csk-img.png" 
            />
        </div>
    );
};

export default App;


