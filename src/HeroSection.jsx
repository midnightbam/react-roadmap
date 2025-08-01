
function HeroSection() {
  return (
    <div className="w-full bg-white flex justify-center">
      <section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12 bg-white rounded-xl shadow-none">
        {/* Text Section */}
        <div className="md:w-1/3 w-full text-left flex flex-col items-center md:items-start">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-black">
            Stay<br />
            Informed,<br />
            Stay Inspired
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xs md:max-w-none">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 w-full flex justify-center">
          <img
            src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
            alt="Author with cat"
            className="rounded-xl shadow-lg object-cover w-64 h-80 md:w-72 md:h-96"
          />
        </div>

        {/* Author Section */}
        <div className="md:w-1/3 w-full flex flex-col items-center md:items-start text-sm text-gray-700">
          <p className="italic text-gray-500 mb-1">- Author</p>
          <p className="font-semibold text-black mb-2">Thompson P.</p>
          <p className="max-w-xs md:max-w-none">
            I am a pet enthusiast and freelance writer who specializes in animal behavior and care. 
            With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.
          </p>
          <p className="mt-2 max-w-xs md:max-w-none">
            When I’m not writing, I spend time volunteering at my local animal shelter, helping cats find loving homes.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;

