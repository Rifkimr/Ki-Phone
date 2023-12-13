import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8">
      <div className="mx-auto py-12 flex flex-col gap-2 md:flex-row justify-evenly items-center">
        <div className="mb-8 md:mb-0 text-center ">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Summer Sale!
          </h1>
          <p className="text-lg md:text-xl text-white mb-4">
            Enjoy discount on selected items
          </p>
          <p className="text-2xl md:text-5xl font-bold text-yellow-400 ">
            GET 50% OFF
          </p>
        </div>
        <div className="w-1/3 relative aspect-video">
          <Image
            src="/banner-image.png"
            alt="banner Image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
