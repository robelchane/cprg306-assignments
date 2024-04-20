import Link from "next/link";

export default function ProjectOne() {
    return (
      <main className="flex justify-center font-serif">
        <div>
          <div className="flex justify-center font-bold text-gray-700 m-10 text-3xl">
            <p>Project One</p>
          </div>
          <div className="font-bold text-black m-10">
            <img src={"/ProjectOne.png"} alt="project One" />           
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="font-bold text-gray-700 m-10 text-3xl">
            <p>Description</p>
          </div>
          <div className="text-black m-10 text-lg">
            <p>
                My first project is word guessing game. word guessing app is 
                a fun and interactive game designed to challenge players 
                vocabulary and word-solving skills. I use react to design 
                this app. Players must guess the correct word based on hints 
                provided, such as the number of letters and a category clue.
                Unless, it will deducted you some point from the game.
            </p>
          </div>
          <div className="bg-gray-500 text-white text-2xl p-5 m-5 rounded-full hover:bg-black text-3x2">
            <button>
              <p><Link href="\final-project-extra">Play the Game</Link></p>              
            </button>
          </div>
        </div>
      </main>
    );
  }
  