import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import sigma from '../../assets/Sigmamale.jpg';
import alpha from '../../assets/Alphafemale.jpg';
import honey from '../../assets/Honeyoud.jpg';



// Custom Previous Arrow Component
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div id="left-arrow">
      <button
        onClick={onClick}
        className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-600 p-2 w-[2.5rem] h-[2.5rem] rounded-full hover:bg-gray-50 transition duration-300 z-10"
      >
        <MdOutlineKeyboardArrowLeft  className="text-2xl" id="arrow"/> {/* Left arrow symbol */}
      </button>
    </div>
  );
};

// Custom Next Arrow Component
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div id="right-arrow">
      <button
        onClick={onClick}
        className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-600 p-2 w-[2.5rem] h-[2.5rem] rounded-full hover:bg-gray-50 transition duration-300 z-10"
      >
        <MdKeyboardArrowRight className="text-2xl" id="arrow"/>  {/* Right arrow symbol */}
      </button>
    </div>
  );
};

const CardSlider = () => {

   const [hoveredCard, setHoveredCard] = useState(null);
  // Slider settings
  const settings = {
    // dots: true, 
    // Show dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 4, // Show 2 cards at a time
    slidesToScroll: 1, // Scroll 2 cards at a time
    arrows: true, // Show navigation arrows
    prevArrow: <CustomPrevArrow />, // Custom previous arrow
    nextArrow: <CustomNextArrow />, // Custom next arrow

    //to make a slider responsive for any device for example if I want to show the only one slider at a time for mobile device and for
    //other devcies then for that we have to adda the breakpoints.
    responsive: [
      // {
      //   breakpoint: 480, // Applies to screens <= 480px
      //   settings: {
      //     slidesToShow: 2, // Show 2 slides at a time
      //     slidesToScroll: 1,
      //   },
      // },
      {
        breakpoint: 321, // Applies to screens <= 320px
        settings: {
          slidesToShow: 1, // Show 1 slides at a time
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 376, // Applies to screens <= 376px
        settings: {
          slidesToShow: 1, // Show 1 slides at a time
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 426, // Applies to screens <= 376px
        settings: {
          slidesToShow: 1, // Show 1 slides at a time
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 769, // Applies to screens <= 769px
        settings: {
          slidesToShow: 3, // Show 3 slides at a time
          slidesToScroll: 3,
        },
      },
    ],
  };

  // Card data
  const cards = [
    {
      id: 1,
      img: sigma,
      title: 'Sigma Male',
      description: 'Perfumes',
      price: '₹ 449.00',
    },
    {
      id: 2,
      img: alpha,
      title: 'Alpha Female',
      description: 'Perfumes ',
      price: '₹ 449.00',
    },

    {
      id: 3,
      img: honey,
      title: 'Honey Oud',
      description: 'Unisex Perfume',
      price: '₹ 449.00',
    },
    
    {
      id: 4,
      img: alpha,
      title: 'Alpha Female',
      description: 'Perfumes',
      price: '₹ 449.00',
    },

    {
        id: 5,
        img: sigma,
        title: 'Sigma Male',
        description: 'Perfumes',
        price: '₹ 449.00',
      },
      {
        id: 6,
        img: honey,
        title: 'Honey Oud',
        description: 'Unisex Perfume',
        price: '₹ 449.00',
      },

      {
        id: 7,
        img: alpha,
        title: 'Alpha Female',
        description: 'Perfumes',
        price: '₹ 449.00',
      },
      {
        id: 8,
        img: honey,
        title: 'Honey Oud',
        description: 'Unisex Perfume',
        price: '₹ 449.00',
      },

      {
        id: 9,
        img: sigma,
        title: 'Sigma Male',
        description: 'Perfumes',
        price: '₹ 449.00',
      },

      {
        id: 10,
        img: honey,
        title: 'Honey Oud',
        description: 'Unisex Perfume',
        price: '₹ 449.00',
      },
  
  ];

  return (
    <div className="w-[80%] mx-auto my-4 h-auto mt-[3rem]"> {/* Set slider width to 60% of parent */}
      <h3 className="text-center font-medium text-[1.3rem] mb-[2rem]" >Best Seller ⚡</h3>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="px-2 flex" 
                // onMouseEnter={() => setHoveredCard(card.id)}
                // onMouseLeave={() => setHoveredCard(null)}
          > {/* Each card takes 50% width of the slider */}
            <div className=" rounded-lg overflow-hidden shadow-lg p-3 border border-gray-300">
              <img src={hoveredCard === card.id ? card.hoverImg : card.img} alt={card.title} className="w-full h-48 object-scale-down" />
              <div className="p-4 mt-[2rem]">
                <h2 className=" text-gray-600 text-[12px]">{card.title}</h2>
                <p className="text-[12px] font-medium text-black mt-2">{card.description}</p>
                <p className="text-black font-bold mt-2">{card.price}</p>
                {/* <button className=" font-medium text-[12px] mt-4 px-3 py-1 bg-blue-950 text-white rounded-full hover:bg-blue-900 transition duration-300">
                  Add to Cart
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default CardSlider;
