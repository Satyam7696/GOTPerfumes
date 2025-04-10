// import React, { useState } from 'react';
// import Footer from '../../Footer';
// import CasualShoes1 from './CasualShoes1';
// import { Link } from 'react-router-dom';

// const CasualShoes = () => {
//     const [sortOption, setSortOption] = useState('relevance');
//     const [genderOpen, setGenderOpen] = useState(true);
//     const [shoeTypeOpen, setShoeTypeOpen] = useState(true);
//     const [selectedGenders, setSelectedGenders] = useState([]);
//     const [selectedPrice, setSelectedPrice] = useState('');
//     const [expandedShoeType, setExpandedShoeType] = useState(null);

//     const toggleGender = () => setGenderOpen(!genderOpen);
//     const toggleShoeType = () => setShoeTypeOpen(!shoeTypeOpen);

//     const handleGenderChange = (event) => {
//         const value = event.target.value;
//         setSelectedGenders((prev) =>
//             prev.includes(value) ? prev.filter((g) => g !== value) : [...prev, value]
//         );
//     };

//     const handlePriceChange = (price) => {
//         setSelectedPrice(price);
//     };

//     const handleSortChange = (event) => {
//         setSortOption(event.target.value);
//     };

//     const toggleSubType = (type) => {
//         setExpandedShoeType(expandedShoeType === type ? null : type);
//     };

//     return (
//         <div className="w-[100%] items-center justify-center flex flex-col">
//             <div className="w-[80%] items-start justify-start mt-[2rem] flex">
//                 <div className="w-[30%]">
//                     <div className="shadow-md p-2">
//                         <div className="mb-2 border-b pb-3">
//                             <h3 className="text-[18px] font-normal">Sort By</h3>
//                         </div>
//                         <div className="flex flex-col gap-3">
//                             <label className="flex items-center cursor-pointer">
//                                 <input 
//                                     type="radio" 
//                                     value="relevance" 
//                                     checked={sortOption === 'relevance'} 
//                                     onChange={handleSortChange} 
//                                     className="mr-2"
//                                 />
//                                 <span>Relevance</span>
//                             </label>
//                             <label className="flex items-center cursor-pointer">
//                                 <input 
//                                     type="radio" 
//                                     value="highToLow" 
//                                     checked={sortOption === 'highToLow'} 
//                                     onChange={handleSortChange} 
//                                     className="mr-2"
//                                 />
//                                 <span>High To Low Price</span>
//                             </label>
//                             <label className="flex items-center cursor-pointer">
//                                 <input 
//                                     type="radio" 
//                                     value="lowToHigh" 
//                                     checked={sortOption === 'lowToHigh'} 
//                                     onChange={handleSortChange} 
//                                     className="mr-2"
//                                 />
//                                 <span>Low To High Price</span>
//                             </label>
//                         </div>
//                     </div>

//                     <div className="p-2 rounded shadow-lg bg-white mt-6">
//                         <h2 className="text-[18px] font-normal mb-4 border-b pb-4">Filter</h2>

//                         <div className="border-b pb-3 mb-3">
//                             <div className="flex justify-between items-center cursor-pointer ml-2" onClick={toggleGender}>
//                                 <h3 className="text-lg font-medium">Gender</h3>
//                                 <span>{genderOpen ? '▲' : '▼'}</span>
//                             </div>
//                             {genderOpen && (
//                                 <div className="flex flex-col gap-2 mt-2 ml-2">
//                                     {['Mens', 'Womens', 'Kids'].map((gender) => (
//                                         <label key={gender} className="flex items-center cursor-pointer">
//                                             <input
//                                                 type="checkbox"
//                                                 value={gender}
//                                                 checked={selectedGenders.includes(gender)}
//                                                 onChange={handleGenderChange}
//                                                 className="mr-2"
//                                             />
//                                             {gender}
//                                         </label>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>

//                         <div className="border-b pb-3 mb-3">
//                             <h3 className="text-lg font-medium mb-2">Price Range</h3>
//                             <div className="grid grid-cols-2 gap-2">
//                                 {['Under 1000', '1001-1500', '1500-2000', 'Above 2000'].map((price) => (
//                                     <button
//                                         key={price}
//                                         className={`p-2 border rounded text-sm ${selectedPrice === price ? 'bg-black text-white' : 'bg-gray-100'}`}
//                                         onClick={() => handlePriceChange(price)}
//                                     >
//                                         {price}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         <div>
//                             <div className="flex justify-between items-center cursor-pointer" onClick={toggleShoeType}>
//                                 <h3 className="text-lg font-medium">Shoe Type</h3>
//                                 <span>{shoeTypeOpen ? '▲' : '▼'}</span>
//                             </div>
//                             {shoeTypeOpen && (
//                                 <div className="flex flex-col gap-2 mt-2">
//                                     {['Sports Shoes', 'Casual Shoes', 'Kids Shoes', 'Slippers', 'Sports Sandals', 'School Shoes', 'Clogs', 'Sliders'].map((type) => (
//                                         <div key={type}>
//                                             <label className="flex items-center cursor-pointer" onClick={() => toggleSubType(type)}>
//                                                 <input
//                                                     type="checkbox"
//                                                     value={type}
//                                                     checked={selectedGenders.includes(type)}
//                                                     onChange={handleGenderChange}
//                                                     className="mr-2"
//                                                 />
//                                                 {type}
//                                             </label>
//                                             {expandedShoeType === type && (
//                                                 <div className="ml-6 mt-2">
//                                                     {['Mens', 'Womens'].map((subType) => (
//                                                         <label key={subType} className="flex items-center cursor-pointer">
//                                                             <input
//                                                                 type="checkbox"
//                                                                 value={`${type}-${subType}`}
//                                                                 checked={selectedGenders.includes(`${type}-${subType}`)}
//                                                                 onChange={handleGenderChange}
//                                                                 className="mr-2"
//                                                             />
//                                                             {subType}
//                                                         </label>
//                                                     ))}
//                                                 </div>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="w-[70%]">
//                     <CasualShoes1 sortOption={sortOption} selectedGenders={selectedGenders} selectedPrice={selectedPrice} />
//                 </div>
//             </div>

//             <div>
//                 <Footer />
//             </div>
//         </div>
//     );
// };
// export default CasualShoes;

import React, { useState } from 'react';
import Footer from '../../Footer';
import Perfumes1 from './Perfumes1';

const Perfumes = () => {
    const [sortOption, setSortOption] = useState('relevance');
    const [genderOpen, setGenderOpen] = useState(true);
    const [shoeTypeOpen, setShoeTypeOpen] = useState(true);
    const [selectedGenders, setSelectedGenders] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState('');
    const [expandedShoeType, setExpandedShoeType] = useState(null);
    const [selectedShoeTypes, setSelectedShoeTypes] = useState([]);

    const toggleGender = () => setGenderOpen(!genderOpen);
    const toggleShoeType = () => setShoeTypeOpen(!shoeTypeOpen);

    const handleGenderChange = (event) => {
        const value = event.target.value;
        setSelectedGenders((prev) =>
            prev.includes(value) ? prev.filter((g) => g !== value) : [...prev, value]
        );
    };

    const handlePriceChange = (price) => {
        setSelectedPrice(price);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const toggleSubType = (type) => {
        setExpandedShoeType(expandedShoeType === type ? null : type);
    };

    const handleShoeTypeChange = (event) => {
        const value = event.target.value;
        setSelectedShoeTypes([value]); // Ensure only one type is selected at a time
    };

    return (
        <div>
        <div className="w-[100%] items-center justify-center flex flex-col">
            <div className="w-[80%] items-start justify-start flex mt-[3rem]" >
                <div className="w-[30%] mt-[8rem]" id="men2">
                    <div className="shadow-md p-2 " >
                        <div className="mb-2 border-b pb-3" id="men3">
                            <h3 className="text-[18px] font-normal">Sort By</h3>
                        </div>
                        <div className="flex flex-col gap-3" id="men5">
                            <label className="flex items-center cursor-pointer">
                                <input 
                                    type="radio" 
                                    value="relevance" 
                                    checked={sortOption === 'relevance'} 
                                    onChange={handleSortChange} 
                                    className="mr-2"
                                />
                                <span>Relevance</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input 
                                    type="radio" 
                                    value="highToLow" 
                                    checked={sortOption === 'highToLow'} 
                                    onChange={handleSortChange} 
                                    className="mr-2"
                                />
                                <span>High To Low Price</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input 
                                    type="radio" 
                                    value="lowToHigh" 
                                    checked={sortOption === 'lowToHigh'} 
                                    onChange={handleSortChange} 
                                    className="mr-2"
                                />
                                <span>Low To High Price</span>
                            </label>
                        </div>
                    </div>

                    <div className="p-2 rounded shadow-lg bg-white mt-6" id="men6">
                        <h2 className="text-[18px] font-normal mb-4 border-b pb-4">Filter</h2>

                        <div className="border-b pb-3 mb-3">
                            <div className="flex justify-between items-center cursor-pointer ml-2" onClick={toggleGender} id="men7">
                                <h3 className="text-lg font-medium">Gender</h3>
                                <span>{genderOpen ? '▲' : '▼'}</span>
                            </div>
                            {genderOpen && (
                                <div className="flex flex-col gap-2 mt-2 ml-2" id="men8">
                                    {['Mens', 'Womens', 'Unisex'].map((gender) => (
                                        <label key={gender} className="flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value={gender}
                                                checked={selectedGenders.includes(gender)}
                                                onChange={handleGenderChange}
                                                className="mr-2"
                                            />
                                            {gender}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="border-b pb-3 mb-3" id="men9">
                            <h3 className="text-lg font-medium mb-2">Price Range</h3>
                            <div className="grid grid-cols-2 gap-2" id="men10">
                                {['Under 499', '499-749', '749-999', 'Above 999'].map((price) => (
                                    <button
                                        key={price}
                                        className={`p-2 border rounded text-sm ${selectedPrice === price ? 'bg-black text-white' : 'bg-gray-100'}`}
                                        onClick={() => handlePriceChange(price)}
                                    >
                                        {price}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* <div>
                            <div className="flex justify-between items-center cursor-pointer" onClick={toggleShoeType}>
                                <h3 className="text-lg font-medium">Shoe Type</h3>
                                <span>{shoeTypeOpen ? '▲' : '▼'}</span>
                            </div>
                            {shoeTypeOpen && (
                                <div className="flex flex-col gap-2 mt-2">
                                    {['Sports Shoes', 'Casual Shoes', 'Kids Shoes', 'Slippers', 'Sports Sandals', 'School Shoes', 'Clogs', 'Sliders'].map((type) => (
                                        <label key={type} className="flex items-center cursor-pointer">
                                            <input
                                                type="radio"
                                                name="shoeType"
                                                value={type}
                                                checked={selectedShoeTypes.includes(type)}
                                                onChange={handleShoeTypeChange}
                                                className="mr-2"
                                            />
                                            {type}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div> */}
                    </div>
                </div>

                <div className="w-[70%]">
                    <Perfumes1 
                        sortOption={sortOption} 
                        selectedGenders={selectedGenders} 
                        selectedPrice={selectedPrice} 
                        selectedShoeTypes={selectedShoeTypes} 
                    />
                </div>
            </div>
        </div>

        <div className="w-[100%]">
            <Footer />
        </div>
        </div>
    );
};

export default Perfumes;


