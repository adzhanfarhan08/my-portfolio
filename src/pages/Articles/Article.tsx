import { Link } from 'react-router-dom';

const Article = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">Judul</h1>
          </div>
          <div className="my-5">
            <h2 className="text-2xl font-semibold mb-4">ReactJS</h2>
            <Link to="/content/reactjs1">
              <div className="bg-blue-500 text-white py-3 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
                <h3 className="text-lg font-medium">1. Apa itu React JS?</h3>
              </div>
            </Link>
          </div>
          <div className="my-5">
            <h2 className="text-2xl font-semibold mb-4">Proxmox</h2>
            <Link to="/content/proxmox1">
              <div className="bg-blue-500 text-white py-3 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
                <h3 className="text-lg font-medium">1. Pengenalan Proxmox</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
