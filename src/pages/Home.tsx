import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Adjust the import if you are using a different routing library

interface User {
  // Define the shape of your user object here
  // For example:
  id: number;
  username: string;
}

const Home = () => {
  const navigate = useNavigate();
  const user: User | null = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    }
  }, [user, navigate]);

  if (user) {
    return (
      <>
        <div className="bg-[#dcdcdc] px-[2rem] rounded-[20px] m-6 ">
          <div className="flex flex-col gap-2 py-[6rem]">
            <h5 className="font-bold">Beats Solo</h5>
            <h1 className="font-bold text-5xl text-[#000000]">Wireless</h1>
            <h1 className="relative font-bold text-[#f8f8f8] sm:text-[10rem] w-full tracking-wide">HEADPHONE</h1>
            <button className="w-fit text-white  rounded-[50px] px-6 py-3 bg-[#f42c37]">
              <Link to='/products'>Shop By Category</Link>
            </button>
            <img className="absolute h-[35rem] left-[17%] top-10 " src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/Group_1271-1.png" alt="" />
          </div>
          <div className="flex  flex-col items-end  h-[10rem] ">
            <div></div>
            <div className="flex flex-col w-[40%]  items-end ">
              <p className="font-bold text-1xl mx-2 tracking-wide">Description</p>
              <p className="hidden sm:block text-center tracking-wide text-[#666666]">
                There are many variations passages <br />of Lorem Ipsum available, but the<br /> majority have suffered alteration
              </p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    // You might want to handle the case where the user is not logged in differently.
    return null; // Or some other component/rendering indicating the user is not logged in.
  }
};

export default Home;
