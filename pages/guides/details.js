import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Details_Data } from "../../utils/guides";

function Details({ guides }) {
  const [item, setItem] = useState([
    {
      name: "",
      desc: "",
      background: "",
      categories: [],
    },
  ]);

  const [tab, setTab] = useState(0);

  const router = useRouter();
  const { path } = router.query;

  const { name, desc, background, categories } = item[0];

  useEffect(() => {
    const it = guides.filter((guide) => guide.path === path);

    if (it.length) setItem(it);
  }, [path]);
  return (
    <div>
      <div className={`h-[70vh] ${background} text-white`}>
        <div className="md:w-4/5 m-auto h-full flex items-end p-4 md:p-8">
          <div className="md:w-3/5 space-y-8">
            <h1 className="md:text-3xl text-xl font-semibold">{name}</h1>
            <p className="md:text-xl text-sm text-justify">{desc}</p>
          </div>
        </div>
      </div>
      <div className="md:w-4/5 md:mx-auto my-8 mx-2 md:my-16">
        {categories.length > 3 ? (
          <div className="md:w-4/5 mx-auto my-8 grid grid-cols-3 gap-2 md:grid-cols-5 md:gap-8">
            {categories.map((category, index) => (
              <a
                key={index}
                href={`/materials?name=${
                  category.toLowerCase() === "c++"
                    ? "cpp"
                    : category.toLowerCase() === "c#"
                    ? "c-sharp"
                    : category.toLowerCase()
                }&index=0`}
              >
                <p className="font-bold md:text-xl text-[0.6em] p-2 md:p-8 bg-cyan-500 cursor-pointer rounded-md text-center">
                  {category}
                </p>
              </a>
            ))}
          </div>
        ) : categories.length > 2 ? (
          <div>
            <div className="flex justify-center items-center">
              <div className="bg-[#f8fcff] shadow-gray-400 shadow-lg md:space-x-4 font-semibold md:text-xl text-sm rounded-full flex items-center">
                <span
                  className={
                    tab === 0
                      ? "bg-orange-500 md:px-8 p-2 md:py-4 rounded-full cursor-pointer"
                      : "md:px-8 p-2 md:py-4 rounded-full cursor-pointer"
                  }
                  onClick={() => setTab(0)}
                >
                  BASIC
                </span>
                <span
                  className={
                    tab === 1
                      ? "bg-orange-500 md:px-8 p-2 md:py-4 rounded-full cursor-pointer"
                      : "md:px-8 p-2 md:py-4 rounded-full cursor-pointer"
                  }
                  onClick={() => setTab(1)}
                >
                  INTERMIDIATE
                </span>
                <span
                  className={
                    tab === 2
                      ? "bg-orange-500 md:px-8 p-2 md:py-4 rounded-full cursor-pointer"
                      : "md:px-8 p-2 md:py-4 rounded-full cursor-pointer"
                  }
                  onClick={() => setTab(2)}
                >
                  ADVANCE
                </span>
              </div>
            </div>
            <div>
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={
                    index === tab ? "md:w-4/5 m-auto my-8 md:my-16" : "hidden"
                  }
                >
                  <p className="md:flex md:text-lg text-xs text-justify">
                    <span className="font-semibold md:pr-4">Description:</span>{" "}
                    {category.desc}
                  </p>
                  <div
                    className={
                      tab > 0
                        ? "md:flex justify-center mt-8 md:space-y-0 space-y-8 md:space-x-8"
                        : "flex justify-center items-center mt-8 space-x-2 md:space-x-4"
                    }
                  >
                    {category.content.map((content, index) =>
                      content.name ? (
                        <div key={index} className="space-y-8">
                          <h3 className="md:text-2xl text-sm font-semibold shadow-md shadow-cyan-300 py-2 px-4 rounded-full">
                            {content.name}
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {content.content.map((value, index) => (
                              <a
                                href={`/materials?name=${value.toLowerCase()}&index=0`}
                                key={index}
                              >
                                <p className="font-bold md:text-xl text-xs p-4 md:p-8 bg-cyan-500 rounded-md text-center cursor-pointer">
                                  {value}
                                </p>
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <a
                          href={`/materials?name=${content.toLowerCase()}&index=0`}
                          key={index}
                        >
                          <p className="font-bold md:text-xl text-xs md:p-8 p-2 bg-cyan-500 rounded-md cursor-pointer my-4 md:my-0">
                            {content}
                          </p>
                        </a>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="md:w-3/5 mx-auto my-8 mb-8 space-y-8">
            {categories.map((category, index) => (
              <a
                href={`/materials?name=${
                  path + " " + category.name.toLowerCase()
                }&index=0`}
                key={index}
              >
                <div className="md:p-8 p-4 space-y-2 shadow-2xl rounded-lg cursor-pointer ">
                  <h4 className="text-white md:text-xl text-sm bg-cyan-500 rounded-lg px-8 inline-block">
                    {category.name}
                  </h4>
                  <p className="md:text-base text-xs">{category.desc}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

Details.defaultProps = {
  guides: Details_Data,
};

export default Details;
