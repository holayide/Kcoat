// import React, { useState } from "react";
// import "./Filter.modules.css";

// const FilterComponent = () => {
//   const [price, setPrice] = useState({ min: 2000, max: 500000 });
//   const [weight, setWeight] = useState(0.5);
//   const [color, setColor] = useState(null);
//   const handlePriceChange = (newRange) => {
//     setPrice(newRange);
//   };

//   const handleWeightChange = (newWeight) => {
//     setWeight(newWeight);
//   };

//   const handleColorChange = (newColor) => {
//     setColor(newColor);
//   };

//   return (
//     <div className="filter-container">
//       <div className="filter-item">
//         <label>BY PRICE</label>

//         <input
//           type="range"
//           min="2000"
//           max="500000"
//           value={price.max}
//           onChange={(e) => handlePriceChange({ ...price, max: e.target.value })}
//         />
//         <span>
//           #{price.min}-{price.max}
//         </span>
//       </div>
//       <div className="filter-item">
//         <label>BY COLOR</label>
//         <div className="color-selector">
//           {["green", "yellow", "red", "cyan", "black"].map((c) => (
//             <button
//               key={c}
//               className={`color-button ${color === c ? "selected" : ""}`}
//               style={{ backgroundColor: c }}
//               onClick={() => handleColorChange(c)}
//             ></button>
//           ))}
//         </div>
//       </div>
//       <div className="filter-item">
//         <label>BY WEIGHT</label>
//         <div className="weight-selector">
//           {[1, 0.5, 0.2].map((w) => (
//             <button
//               key={w}
//               className={`weight-button ${weight === w ? "selected" : ""}`}
//               onClick={() => handleWeightChange(w)}
//             >
//               {w}kg
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterComponent;
