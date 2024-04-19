import Link from "next/link"

export default function page(){
  return <main >
    <div className="flex flex-col justify-center items-center h-screen font-serif text-3xl">
      <h1 className="mb-5 text-3xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <p className="hover:text-gray-500 hover:underline mb-2"><Link href="week-2">Week 2 Assignment</Link></p>
      <p className="hover:text-gray-500 hover:underline mb-2"><Link href="week-3">Week 3 Assignment</Link></p>
      <p className="hover:text-gray-500 hover:underline mb-2"><Link href="week-4">Week 4 Assignment</Link></p>
      <p className="hover:text-gray-500 hover:underline mb-2"><Link href="week-5">Week 5 Assignment</Link></p>
      <p className="hover:text-gray-500 hover:underline mb-2"><Link href="week-6">Week 6 Assignment</Link></p>
      <p className="hover:text-gray-500 hover:underline mb-2"><Link href="week-7">Week 7 Assignment</Link></p>
      <p className="hover:text-gray-500 hover:underline mb-2"><Link href="week-8">Week 8 Assignment</Link></p>
      <p className="hover:text-gray-500 hover:underline mb-2"><Link href="week-10">Week 10 Assignment</Link></p>
      <p className="hover:text-gray-500 hover:underline mb-2"><Link href="final-project">Robel Portfolio Project</Link></p>
      <p className="hover:text-gray-500 hover:underline"><Link href="final-project-extra">Final Project Extra</Link></p>
    </div>

    </main>
  
}