import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function App() {
  const queryHandleFunction = async () => {
    try {
      const res = await axios.get('https://swapi.dev/api/planets/');
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useQuery({
    queryKey: ['planets'],
    queryFn: queryHandleFunction,
  });

  return (
    <div className='bg-black text-white w-full h-screen'>
      <div className=''>
        <h1 className='text-3xl font-bold '>Hello world!</h1>
      </div>
    </div>
  );
}

export default App;
