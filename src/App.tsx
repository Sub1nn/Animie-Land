import './App.css'
import { useEffect, useState } from 'react'
import { fetchAnimieData } from './get_data';

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
      <h2>{data ? <h2>{data.title}</h2> : null}</h2>
      <div>
        {data ? <img src={data.image} alt={data.title} /> : <p>Loading...</p>}
      </div>
      <div style={{ marginTop: '3rem' }}>{data ? <p>{data.description}</p> : null}</div>
    </>
  )
}

export default App
