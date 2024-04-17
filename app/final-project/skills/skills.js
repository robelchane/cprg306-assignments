export default function Skills() {
    return (
      <main className="flex justify-center font-serif gap-20">
        <div>
          <div className="flex justify-center font-bold text-gray-700 m-5 text-3xl">
            <p>Hard Skills</p>
          </div>
          <div className="font-bold text-black m-5 text-xl">
            <div className="flex m-5">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-500 m-5">
                <img src={"/python.png"} alt="python logo" />
              </div>
              <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-500 m-5">
                <img src={"/c_sharp.png"} alt="c# logo" />
              </div>
              <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-500 m-5">
                <img src={"/html.png"} alt="html logo" />                
              </div>                           
            </div>
            <div className="flex m-5">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-500 m-5">
                <img src={"/css.png"} alt="css logo" />
              </div>
              <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-500 m-5">
                <img src={"/javascript.png"} alt="javascript logo" />
              </div>
              <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-500 m-5">
                <img src={"/node.png"} alt="Node logo" />                
              </div>                           
            </div>
            <div className="flex m-5">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-500 m-5">
                <img src={"/react.png"} alt="react logo" />
              </div>
              <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-500 m-5">
                <img src={"/mysql.png"} alt="mysql logo" />
              </div>
              <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-500 m-5">
                <img src={"/github.png"} alt="github logo" />                
              </div>                           
            </div>           
           </div>
        </div>
        <div>
          <div className="font-bold text-gray-700 m-5 text-3xl">
            <p>Soft Skills</p>
          </div>
          <div className="font-bold text-black m-5 text-lg">
            <p>Teamwork</p>
            <p>Problem-solving</p>
            <p>Creativity</p>
            <p>Attention to Detail</p>
            <p>Time Management</p>
          </div>
        </div>
      </main>
    );
  }
  