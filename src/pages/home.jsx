import { Frame4Image1, Frame5Newsletter, Image1, Image2, Logo } from "@/utils/assets";
import { BannerForm, Frame3Card, Frame4Feedback, PlacesCard } from "@/utils/components"
import placeData from "@/utils/places";

function HomePage() {

  return (
    <>
      <div className='min-h-[80vh] relative flex items-center justify-center' id="bannerImage">
        <div className="flex flex-col items-center gap-4 w-[60%] max-[768px]:w-full max-[768px]:px-2">
          <h1 className="text-[#ffffff] text-center text-2xl max-[768px]:text-xl">Live & Travel</h1>
          <h1 className="text-[#ffffff] text-center text-6xl font-extrabold max-[768px]:text-4xl">Explore More, Worry Less – Your Journey Starts Here!</h1>
          <p className="text-[#ffffff] text-center w-[80%] max-[768px]:text-sm max-sm:w-[95%]"> we offer tailored recommendations, unbeatable deals, and expert guidance to make your travel dreams come true. Let's make every trip unforgettable! 🌍✈️</p>
        </div>

        <BannerForm />
      </div>

      <div className="px-1.5 mt-[18rem] max-[639px]:mt-[24rem]">
        <div className="max-w-[1500px] w-full mx-auto py-[2rem]">
          <header className="flex items-center justify-between py-[1rem] max-sm:py-0">
            <div className="flex flex-col gap-4 max-sm:gap-2 max-sm:w-[75%]">
              <h1 className="text-4xl font-medium max-sm:text-xl">Plan your perfect trip</h1>
              <p className="font-light max-sm:text-[13px]">Search Flights & Places Hire to our most popular destinations.</p>
            </div>

            <button className="border border-[#8dd3bb] h-[40px] px-4 rounded-lg max-sm:h-[35px]">
              <span className="text-sm text-[#8dd3bb] max-sm:text-[13px]">See All</span>
            </button>
          </header>

          <div className="mt-[2rem] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 max-md:mt-[1rem] max-md:gap-3 max-sm:grid-cols-1 max-sm:gap-2">
            {placeData.map((item, index) => (
              <PlacesCard key={index} name={item.name} image={item.image} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[2rem] px-2">
        <div className="max-w-[1500px] mx-auto w-full grid grid-cols-2 place-items-center gap-2 py-[2rem] max-sm:grid-cols-1">
          <Frame3Card image={Image1} />
          <Frame3Card image={Image2} />
        </div>
      </div>

      <div className="mt-[2rem] px-2">
        <div className="max-w-[1500px] w-full mx-auto py-[2rem]">
          <header className="flex items-center justify-between py-[1rem] max-sm:py-0">
            <div className="flex flex-col gap-4 max-sm:gap-2 max-sm:w-[75%]">
              <h1 className="text-4xl font-medium max-sm:text-xl">Reviews</h1>
              <p className="font-light max-sm:text-[13px]">What people says about Golobe facilities</p>
            </div>

            <button className="border border-[#8dd3bb] h-[40px] px-4 rounded-lg max-sm:h-[35px]">
              <span className="text-sm text-[#8dd3bb] max-sm:text-[13px]">View All</span>
            </button>
          </header>

          <div className="mt-[2rem] grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-[2rem] max-sm:gap-4 max-sm:grid-cols-1 max-sm:mt-[1rem]">
            <Frame4Feedback image={Frame4Image1} />
            <Frame4Feedback image={Frame4Image1} />
            <Frame4Feedback image={Frame4Image1} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
