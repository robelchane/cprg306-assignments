import Link from "next/link"

export default function Contact() {
  return<main>
      <div>
        <p>Get in Touch</p>
        <h1>Contact Me</h1>
        <div>
          <div>
            <img src="./email.png" alt="Email icon"/>
            <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
          </div>
          <div>
            <img src="./assets/linkedin.png" alt="LinkedIn icon"/>
            <p><a href="https://www.linkedin.com">LinkedIn</a></p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-10 text-3xl">
          <p className="hover:text-gray-500 hover:underline"><Link href="week-2">About</Link></p>
          <p className="hover:text-gray-500 hover:underline"><Link href="week-2">Skills</Link></p>
          <p className="hover:text-gray-500 hover:underline"><Link href="week-2">Projects</Link></p>
          <p className="hover:text-gray-500 hover:underline"><Link href="week-2">Contact</Link></p>
          </div>
          <p className="flex justify-center font-bold m-10 text-blue-700 text-2xl">Thank you for visit my portfolio</p>
      </div>
    </main>
}
