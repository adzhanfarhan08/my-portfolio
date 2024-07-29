// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import MenuBookIcon from '@mui/icons-material/MenuBook';

// export const Sidebar = () => {
//   return (
//     <>
//       <div className="flex flex-col items-center fixed right-0 top-1/2 mx-10">
//         <div className="mb-4">
//           <a href="">
//             <GitHubIcon />
//           </a>
//         </div>
//         <div className="mb-4">
//           <a href="">
//             <FacebookIcon />
//           </a>
//         </div>
//         <div className="mb-4">
//           <a href="https://medium.com/@adzhanfarhan">
//             <MenuBookIcon />
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// {
//   /* <div className="flex flex-col items-center fixed right-0 top-1/2 transform -translate-y-1/2 w-16 py-4"> */
// }

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col items-center fixed left-0 top-1/2 transform -translate-y-1/2 mx-10">
        <div className="mb-4">
          <a href="">
            <GitHubIcon />
          </a>
        </div>
        <div className="mb-4">
          <a href="">
            <FacebookIcon />
          </a>
        </div>
        <div className="mb-4">
          <a href="https://medium.com/@adzhanfarhan">
            <MenuBookIcon />
          </a>
        </div>
      </div>
    </>
  );
};
