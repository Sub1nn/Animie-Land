import { useEffect, useState } from "react";
import { fetchAnimieData } from "./get_data";

interface AnimieData {
  image: string;
  title: string;
  description: string;
}

function App() {
  const [data, setData] = useState<AnimieData | null>(null);
  useEffect(() => {
    const response = fetchAnimieData() as Promise<AnimieData>;
    response.then((res) => {
      setData(res);
      console.log(res);
    });
  }, []);

  return (
    <>
    <div className="flex items-center flex-col gap-5">
      {data ? (       
          <h2 className="inline-block bg-red-500 text-blue-600 text-5xl px-4 py-2 font-bold rounded-2xl">{data.title}</h2>
      ) : null}
      <div>
        {data ? <img src={data.image} alt={data.title} /> : <p>Loading...</p>}
      </div>
      <div>
        {data ? <p className="text-lg">{data.description}</p> : null}
      </div>
      </div>
    </>
  );
}

export default App;
