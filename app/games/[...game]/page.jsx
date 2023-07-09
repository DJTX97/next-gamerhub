const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b0acde6584msha832426d698a50bp1da0c3jsn4f8fd02f7e5a",
    "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
  },
  next: {
    revalidate: 300,
  },
};

export default async function Game({ params }) {
  //console.log(params);
  const url = `https://mmo-games.p.rapidapi.com/game?id=${params.game[0]}`;

  const fetchData = async () => {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    const data = await res.json();
    return data;
  };

  const item = await fetchData();
  //console.log(item);

  return (
    <div className="w-full flex flex-col">
      <img
        className="h-60 sm:h-72 md:h-96 2xl:h-[32rem] w-4/5 md:w-3/4 mt-5 self-center rounded-xl"
        src={
          item.screenshots && item.screenshots.length > 0
            ? item.screenshots[0].image
            : "../assets/images/placeholder.jpg"
        }
        alt=""
      />
      <div className="w-4/5 md:w-[90%] my-5 self-center border-2 border-theme rounded-full" />
      <div className="flex flex-col mb-10 mx-10 gap-8 text-2xl">
        <div className="text-4xl md:text-5xl xl:text-6xl font-bold">{item.title}</div>
        <div className="flex flex-col gap-2 font-bold">
          <div className="flex flex-col md:flex-row items-baseline">
            Developer:&nbsp;
            <div className="text-xl font-normal">
              {item.developer ? item.developer : "N/A"}
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-baseline">
            Publisher:&nbsp;
            <div className="text-xl font-normal">
              {item.publisher ? item.publisher : "N/A"}
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-baseline">
            Platform:&nbsp;
            <div className="text-xl font-normal">
              {item.platform ? item.platform : "N/A"}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 font-bold">
          Description:&nbsp;
          <div className="text-xl font-normal">{item.short_description}</div>
        </div>
        <div className="font-bold">
          Minimum system requirements:
          {item.minimum_system_requirements ? (
            <div className="flex flex-col gap-2 sm:gap-1 mt-5 md:mt-4 md:px-5 text-xl">
              <div className="flex flex-col sm:flex-row items-baseline">
                OS:&nbsp;
                <div className="text-lg sm:text-xl font-normal">
                  {item.minimum_system_requirements.os
                    ? item.minimum_system_requirements.os
                    : "N/A"}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-baseline">
                Processor:&nbsp;
                <div className="text-lg sm:text-xl font-normal">
                  {item.minimum_system_requirements.processor
                    ? item.minimum_system_requirements.processor
                    : "N/A"}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-baseline">
                RAM:&nbsp;
                <div className="text-lg sm:text-xl font-normal">
                  {item.minimum_system_requirements.memory
                    ? item.minimum_system_requirements.memory
                    : "N/A"}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-baseline">
                Graphics card:&nbsp;
                <div className="text-lg sm:text-xl font-normal">
                  {item.minimum_system_requirements.graphics
                    ? item.minimum_system_requirements.graphics
                    : "N/A"}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-baseline">
                Storage:&nbsp;
                <div className="text-lg sm:text-xl font-normal">
                  {item.minimum_system_requirements.storage
                    ? item.minimum_system_requirements.storage
                    : "N/A"}
                </div>
              </div>
            </div>
          ) : (
            <div>N/A</div>
          )}
        </div>
        {item.game_url && (
          <div className="flex justify-center py-10 md:py-7">
            <a
              target="_blank"
              href={item.game_url}
              className="w-72 md:w-[30rem] px-6 py-2 rounded-full bg-theme_medium_violet hover:bg-theme_light_violet text-center text-white font-bold"
            >
              Try it out!
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
