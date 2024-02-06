import Link from "next/link"

export default function page(){
  return <main>
    <div className="m-24">
      <h1 className="mb-5 text-3xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <p><Link href="week-2">Week 2 Assignment</Link></p>
      <p><Link href="week-3">Week 3 Assignment</Link></p>
      <p><Link href="week-4">Week 4 Assignment</Link></p>
    </div>

    </main>
  
}