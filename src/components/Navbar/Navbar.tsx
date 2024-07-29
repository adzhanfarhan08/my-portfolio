import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="fixed right-0 top-0 h-full flex flex-col justify-center items-center space-y-5 p-10">
      <nav className="space-y-5">
        <Link to="/" className="relative block after:block after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          Home
        </Link>
        <Link to="/gallery" className="relative block after:block after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          Gallery
        </Link>
        {/* <Link to="/article" className="relative block after:block after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          Article
        </Link>
        <Link to="/socialmedia" className="relative block after:block after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          Social Media
        </Link> */}
      </nav>
    </div>
  );
};
