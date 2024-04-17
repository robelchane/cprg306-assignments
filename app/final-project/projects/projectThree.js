export default function ProjectThree() {
    return (
      <main className="flex justify-center font-serif">
        <div>
          <div className="flex justify-center font-bold text-gray-700 m-10 text-3xl">
            <p>Project Three</p>
          </div>
          <div className="font-bold text-black m-10 text-xl">
            <img src={"/projectThree.png"} alt="project Three" />
          </div>
        </div>
        <div className="flex flex-col items-center w-1/2">
          <div className="font-bold text-gray-700 m-10 text-3xl">
            <p>Description</p>
          </div>
          <div className="text-black m-5 text-lg">
            <p>
                My third project is about real estate which name is Elite Estate.
                This real estate platform serves as a comprehensive solution for all 
                parties involved in property transactions. For future tenants, it 
                provides an intuitive interface to search for rental properties and 
                connect with landlords seamlessly. Current tenants benefit from 
                convenient access to rental agreement details, online rent payments, 
                and maintenance requests. 
            </p>
          </div>
        </div>
      </main>
    );
  }
  