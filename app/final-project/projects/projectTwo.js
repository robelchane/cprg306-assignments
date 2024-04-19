export default function ProjectTwo() {
    return (
        <main className="flex justify-center font-serif">
        <div>
          <div className="flex justify-center font-bold text-gray-700 m-10 text-3xl">
            <p>Project Two</p>
          </div>
          <div className="font-bold text-black m-10">
            <img src={"/ProjectTwo.png"} alt="project Two" />           
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="font-bold text-gray-700 m-10 text-3xl">
            <p>Description</p>
          </div>
          <div className="text-black m-10 text-lg">
            <p>
                In my second project, I designed a platform specifically made 
                for collectors to showcase their collections, organize them, 
                and connect with others who share their interests. By offering 
                features like cataloging, categorization, and search filters, 
                users can easily manage their collections and find specific items. 
                With a built-in chat feature, our platform creates a vibrant 
                online community for collectors to gather, communicate, and even 
                buy or sell items, providing a unique space for collectors to 
                expand their collections and connect with like-minded enthusiasts.
            </p>
          </div>
        </div>
      </main>
    );
  }
  