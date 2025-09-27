import SocialLinks from "../componant/SocialLinks";

function Home() {
  return (
    <div className="flex justify-center items-center p-6 min-h-[calc(100vh-80px)] mx-auto mesh-gradient-center overflow-hidden">
      <div className="grid grid-cols-1">
        <div className="flex flex-col md:flex-row md:items-center gap-10 pb-8">
          <img src={"src/assets/portfolio_headshot.png"} width='128' height='128' />
          <h1 className="text-2xl font-semibold tracking-wide text-balance text-gray-900 sm:text-6xl dark:text-white">
            Hey, I'm <span className="dark:text-purple-400" >Kapil</span> 👋 <br /> A <span className="dark:text-purple-400" >Software Developer</span>.
          </h1>
        </div>
        <p className="text-xl max-w-[750px] text-black dark:text-white">
          As a skilled <span className="font-bold ">Ruby on Rails and React Native developer</span>, I specialize in building scalable, high-performance web and
          mobile applications. With expertise in backend development, API integrations, and frontend frameworks, I craft
          seamless user experiences. Passionate about <span className="font-bold tracking-[-0.04px]">clean code, agile methodologies, and problem-solving</span>, I continuously
          explore new technologies to enhance development efficiency.
        </p>
        <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:items-center justify-between max-w-[600px] mt-8">
          <div className="flex gap-2 lg:gap-4">
            <button className='border-black dark:border-white border rounded-md inline-flex items-center justify-center py-3 px-3 text-center text-base font-medium text-black dark:text-white hover:bg-gray-4 dark:hover:bg-dark-3'>
              Contact Me
            </button>
            <button className='border-black dark:border-white border rounded-md inline-flex items-center justify-center py-3 px-3 text-center text-base font-medium text-black dark:text-white hover:bg-gray-4 dark:hover:bg-dark-3'>
              View Projects
            </button>
          </div>
          <div data-orientation="vertical" role="none" className="shrink-0 w-[1px] bg-black dark:bg-white h-4 hidden lg:block"></div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Home;
