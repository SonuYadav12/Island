import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    //Enclosing it in Html will reduce the chances of issues with 3d component
    <Html>
      <div className='flex justify-center items-center'>
        <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'></div>
      </div>
    </Html>
  );
};

export default Loader;