import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <div className="max-w-2xl mx-auto antialiased text-gray-900 ">
        <Navbar></Navbar>
        {children}
      </div>
    </>
  );
};

export default Layout;
