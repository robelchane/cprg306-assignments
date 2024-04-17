export default function ProjectTwo() {
    return (
      <main className="flex justify-center font-serif">
        <div>
          <div className="flex justify-center font-bold text-gray-700 m-10 text-3xl">
            <p>Project Two</p>
          </div>
          <div className="font-bold text-black m-10">
            <img src={"/projectTwo.png"} alt="project Two" />           
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="font-bold text-gray-700 m-10 text-3xl">
            <p>Description</p>
          </div>
          <div className="text-black m-10 text-lg">
            <p>
                My second project is word guessing game. word guessing app is 
                a fun and interactive game designed to challenge players' 
                vocabulary and word-solving skills. I use react native to design 
                this app. Players are presented with a series of word puzzles, 
                where they must guess the correct word based on hints provided, 
                such as the number of letters and a category clue.
            </p>
          </div>
        </div>
      </main>
    );
  }
  