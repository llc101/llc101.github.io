import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | 101</title>
        <meta
          name="description"
          content="Learn programming, web development, mobile Development, 2d & 3d graphic design and Photo & Video Editing."
        />
        <meta
          name="keywords"
          content="learn, programming, mobile, desktop, webapp, app, application, web, development, 2d, 3d, graphic, design, photo, video, editing, guide"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Showcase */}
        <div className="showcase-background lg:h-[92vh] h-[80vh] text-white">
          <div className="lg:w-4/5 flex flex-col justify-center md:justify-start md:flex-row p-4 lg:mx-auto lg:p-0 h-full">
            <div className="md:flex-[0.4] md:h-full flex flex-col justify-center space-y-8">
              <div className="space-y-4 text-center md:text-left">
                <h1 className="text-xl lg:text-3xl font-bold">
                  Your Guide to Programming, Web Design, Photo &amp; Video
                  Editing, and 2D &amp; 3D Graphic Design.
                </h1>
                <p className="lg:text-xl font-extralight">
                  Learn how to design a website and use the try out page to
                  master what you learn.
                </p>
              </div>
              <div>
                <a
                  href="/guides"
                  className="bg-orange-400 py-2 px-4 text-sm font-medium rounded-md"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="md:flex-[0.6] h-[250px] md:h-full justify-center items-center flex mt-16 md:mt-0">
              <div className="rounded-lg lg:rounded-none ux md:w-4/5 w-full h-full md:h-4/5 relative">
                <div className="php hidden lg:block lg:h-[220px] lg:w-[180px] rounded-t-full"></div>
                <div className="blender-3d hidden lg:block lg:h-[220px] lg:w-[180px] rounded-t-full"></div>
                <div className="adobe-suit hidden lg:block lg:h-[220px] lg:w-[180px] rounded-t-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Guides */}
        <div className="md:w-4/5 md:mx-auto mx-4 my-8">
          <h2 className="text-2xl font-semibold">Guides</h2>
          <div className=" flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-x-4 gap-y-8 lg:w-11/12 m-auto my-8">
            <div className="flex justify-center items-center">
              <div className="shadow-2xl h-[250px] md:h-[300px] md:w-[300px] w-[250px] rounded-md p-4 flex flex-col justify-center items-center space-y-4">
                <img src="/images/icons/console-50.png" />
                <div className="text-center">
                  <h3 className="text-base md:text-xl font-bold uppercase">
                    Programming
                  </h3>
                  <p className="text-sm md:text-base text-gray-800 my-4">
                    Learn to program in any language.
                  </p>
                  <a
                    href="/guides/details?path=programming"
                    className="bg-[#ff0062] px-4 py-2 text-sm md:text-xl font-medium text-white rounded-full"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="shadow-2xl h-[250px] md:h-[300px] md:w-[300px] w-[250px] rounded-md p-4 flex flex-col justify-center items-center space-y-4">
                <img
                  src="/images/icons/web-development-64.png"
                  height="64"
                  width="64"
                />
                <div className="text-center">
                  <h3 className="text-base md:text-xl font-bold uppercase">
                    Web Development
                  </h3>
                  <p className="text-gray-800 my-4 md:text-base text-sm">
                    Learn to create website.
                  </p>
                  <a
                    href="/guides/details?path=web_development"
                    className="bg-[#ff0062] px-4 py-2 text-sm md:text-xl font-medium text-white rounded-full"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="md:flex justify-center items-center hidden">
              <div className="shadow-2xl h-[300px] w-[300px] rounded-md p-4 flex flex-col justify-center items-center space-y-4">
                <img
                  src="/images/icons/mobile-development-98.png"
                  height="60"
                  width="70"
                  className="object-cover object-center"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold uppercase">
                    Mobile Development
                  </h3>
                  <p className="text-gray-800 my-4">
                    Learn how to create mobile apps and games.
                  </p>
                  <a
                    href="/guides/details?path=mobile_development"
                    className="bg-[#ff0062] px-4 py-2 text-xl font-medium text-white rounded-full"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <div className="shadow-2xl h-[300px] w-[300px] rounded-md p-4 flex flex-col justify-center items-center space-y-4">
                <img
                  src="/images/icons/adobe-illustrator-480.png"
                  height="80"
                  width="80"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold uppercase">
                    Adobe Illustrator
                  </h3>
                  <p className="text-gray-800 my-4">
                    Learn to design vector graphics.
                  </p>
                  <a
                    href="/guides/details?path=adobe_illustrator"
                    className="bg-[#ff0062] px-4 py-2 text-xl font-medium text-white rounded-full"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <div className="shadow-2xl md:h-[300px] md:w-[300px] w-[250px] rounded-md p-4 flex flex-col justify-center items-center space-y-2">
                <img
                  src="/images/icons/adobe-xd-240.png"
                  height="80"
                  width="80"
                />
                <div className="text-center">
                  <h3 className="md:text-xl font-bold uppercase">Adobe XD</h3>
                  <p className="text-gray-800 md:text-base text-sm my-4">
                    Learn UI design.
                  </p>
                  <a
                    href="/guides/details?path=adobe_xd"
                    className="bg-[#ff0062] px-4 py-2 text-sm md:text-xl font-medium text-white rounded-full"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="shadow-2xl md:h-[300px] md:w-[300px] w-[250px] rounded-md p-4 flex flex-col justify-center items-center space-y-4">
                <img
                  src="/images/icons/adobe-photoshop-480.png"
                  height="80"
                  width="80"
                />
                <div className="text-center">
                  <h3 className="md:text-xl font-bold uppercase">
                    Adobe Photoshop
                  </h3>
                  <p className="text-gray-800 md:text-base text-sm my-4">
                    Learn photo editing and vector graphic design.
                  </p>
                  <a
                    href="/guides/details?path=adobe_photoshop"
                    className="bg-[#ff0062] px-4 py-2 text-sm md:text-xl font-medium text-white rounded-full"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <div className="shadow-2xl h-[300px] w-[300px] rounded-md p-4 flex flex-col justify-center items-center space-y-4">
                <img
                  src="/images/icons/blender-3d-240.png"
                  height="80"
                  width="80"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold uppercase">Blender 3d</h3>
                  <p className="text-gray-800 my-4">
                    Learn 3D design and animation.
                  </p>
                  <a
                    href="/guides/details?path=blender"
                    className="bg-[#ff0062] px-4 py-2 text-xl font-medium text-white rounded-full"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <div className="shadow-2xl h-[300px] w-[300px] rounded-md p-4 flex flex-col justify-center items-center space-y-4">
                <img
                  src="/images/icons/adobe-after-effects-240.png"
                  height="80"
                  width="80"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold uppercase">
                    Adobe After Effect
                  </h3>
                  <p className="text-gray-800 my-4">Learn video editing.</p>
                  <a
                    href="/guides/details?path=adobe_effect"
                    className="bg-[#ff0062] px-4 py-2 text-xl font-medium text-white rounded-full"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning */}
        <div className="md:w-4/5 md:mx-auto mx-4 my-20 flex flex-col md:flex-row md:items-center">
          <h2 className="md:hidden text-xl font-semibold">Why Use Our Guide</h2>
          <div className="guide md:flex-[0.4] md:h-[50vh] h-[250px] w-full md:m-8 mt-4 rounded-xl"></div>
          <div className="md:flex-[0.6] md:space-y-4 md:p-4">
            <h2 className="md:text-2xl text-xl font-semibold md:block hidden">
              Why Use Our Guide
            </h2>
            <div className="space-y-4 text-justify md:p-4 py-2">
              <p>
                The instructional resources—books and videos—that our guidelines
                recommend were specifically chosen by qualified developers and
                designers. As a result, we are confident that following our
                guide will help you get started on the road to becoming a
                designer, developer, or programmer.
              </p>
              <p>
                After going through the guide we provide you with, There is a
                <code> TRY OUTS</code> to help you master that skill.
              </p>
            </div>
          </div>
        </div>

        <div className="showcase-background p-8 clip-background-1  lg:clip-background my-16">
          <div className="md:w-4/5 m-auto md:px-4 md:p-16 space-y-4 md:space-y-32">
            <div className="flex items-center">
              <div className="md:flex-[0.5] text-white py-8 md:px-4">
                <h2 className="text-2xl font-semibold">Challenge</h2>
                <div className="py-4 md:p-8">
                  <p className="text-center md:text-justify pb-6">
                    Participate in our monthly and daily challenges to build
                    your portfolio. When you complete a challenge, you receive a
                    reward that you may use to open up a new one.
                  </p>
                  <a
                    href="/challenge"
                    className="bg-[#ff0062] px-8 py-2 text-sm font-medium text-white rounded-full"
                  >
                    JOIN US
                  </a>
                </div>
              </div>
              <div className="challenge hidden md:block flex-[0.3] h-[450px] rounded-t-full mx-auto"></div>
            </div>
            <div className="flex items-center">
              <div className="tryout hidden md:block flex-[0.3] h-[450px] rounded-b-full mx-auto"></div>
              <div className="md:flex-[0.5] text-white py-8 px-4">
                <h2 className="text-2xl font-semibold">Try Out</h2>
                <div className="md:p-8 py-4">
                  <p className="text-center md:text-justify pb-6">
                    Try out is a guided follow-along assignment. You can
                    practice solving real-world issues from this point on. To
                    unlock more tryouts, complete challenges and use your
                    reward.
                  </p>
                  <a
                    href="/try_out"
                    className="bg-[#ff0062] px-8 py-2 text-sm font-medium text-white rounded-full"
                  >
                    TRY OUT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community */}
        <div className="md:w-4/5 mx-4 md:mx-auto mb-16 community rounded-lg lg:rounded-full space-y-4 flex flex-col justify-center items-center text-white py-4 px-2">
          <h2 className="md:text-2xl text-xl text-center font-semibold ">
            Join Our Community
          </h2>
          <div className="text-center text-sm md:text-base">
            <p className="mb-4">
              101 Community has been created so like minded people can meet,
              share their knowledge and expertise, <br /> learn something new,
              and get inspired! Engage with 101 users, ask questions and help
              others!
            </p>
            <a
              href="/challenge"
              className="bg-[#ff0062] px-8 py-2 text-sm font-medium text-white rounded-full"
            >
              Join Us
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
