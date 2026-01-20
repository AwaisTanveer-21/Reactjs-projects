import React from 'react'

function Resturant() {
  return (
    <section className='relative mx-auto w-full'>
      {/* Heading */}
      <div className='mx-4 px-12 text-center font-bold text-3xl sm:text-4xl capitalize py-6'>
        <p className='min-w-2xl my-4'>all resturants</p> 
      </div>

      {/* main div of boxes*/}
      <div className='grid gap-8 sm:gap-10 md:gap-12 grid-cols-2  md:grid-cols-3 lg:grid-cols-4 justify-items-center px-6 pb-12'>

        {/*  Each item box using of map method*/}
        {[
          { img: "assets/burger.jpg", name: "burger" },
          { img: "assets/Chicken-Biryani-Recipe-01-1.jpg", name: "biryani hut" },
          { img: "assets/IMG_2415-3-2B-25281-2529.jpg", name: "handi point" },
          { img: "assets/pasta.webp", name: "pasta fries" },
          { img: "assets/pizafire.jpg", name: "pizza hut" },
          { img: "assets/sushi.jpg", name: "sushi point" },
          { img: "assets/twice-fried-fries.webp", name: "fries stall" },
          { img: "assets/BW1A4089-2.jpg", name: "desserts shop" },
        ].map((item, index) => (
          <div
            key={index}
            className='p-3 rounded-2xl bg-white shadow-xl hover:shadow-2xl 
                       flex flex-col justify-center items-center 
                       w-full max-w-[200px] h-auto 
                       transform hover:-translate-y-2 hover:scale-105 
                       transition-transform duration-300 cursor-pointer'
          >
            <img
              src={item.img}
              alt={item.name}
              className='w-full h-40 object-cover object-center rounded-xl'
            />
            <h2 className='text-black font-semibold text-lg my-4 text-center capitalize'>
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Resturant
