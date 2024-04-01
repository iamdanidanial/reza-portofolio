import heroimage from "../assets/hero.png";
import hero2 from "../assets/hero2.png";

export default function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:gap-48 py-4 lg:p-12 justify-center items-center mx-auto">
        <main className="">
          <div className="sm:text-center lg:text-left">
            <p className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
              <span className="block text-orange xl:inline">
                Hello, i'm Reza
              </span>
            </p>
            <p className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="lg:block text-orange xl:inline">
                a <span className="lg:block text-green-600 xl:inline">UX </span>
                Designer
              </span>
            </p>
            <p className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
              <span className="block text-orange xl:inline">
                Based in Jakarta indonesia
              </span>
            </p>
          </div>
        </main>

        <div className="">
          <img
            className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-96"
            src={heroimage}
            alt=""
          />
        </div>
      </div>

      <div className="flex  justify-center items-center lg:gap-48 px-12 mx-auto">
        <div className="w-1/2">
          <img className="h-96" src={hero2} alt="" />
        </div>
        <div className="w-1/2">
          <div className="border bg-ungu p-8 rounded-md text-kuning">
            “To find ideas, find problems. To find problems, talk to people.”
          </div>
          <p className="text-orange font-semibold">
            -Julie Zhou, Former VP of Product Design at Facebook
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center border bg-pink p-8">
        <p className="hidden sm:block text-white text-4xl font-bold">
          Latest Work @ Latest Work @ Latest Work @ Latest Work
        </p>
        <p className="block text-white text-4xl font-bold">Latest Work</p>
      </div>
    </div>
  );
}
