import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';
import guilherme from '../public/guilherme.jpg';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';

export default function Home() {
  //const [darkMode, setDarkMode] = useState(false);
 
  return (
    <div>
      <Head>
        <title>Guilherme Xavier</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-4 flex justify-between">
            <h1 className="text-xl font-burtons">Guilherme M. Xavier</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8" href='#'>
                  Resume
                </a>
              </li>
              <li></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-4xl py-2 text-teal-600 font-medium">Guilherme Xavier</h2>
            <h3 className="text-2xl py-2">Full Stack Developer.</h3>
            <p className="text-md py-3 leading-8 text-gray-800">Experience with React, Typescript, back end PHP and Nodejs. I create pages with Wordpress as well. Open to freelance and work abroad!</p>
          </div>
          <div className="text-5xl flex justify-center gap-2 py-3 text-gray-600">
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div className="relative w-80 h-80 mx-auto mt-20 mb-12 rounded-full">
            <Image className="rounded-full" src={guilherme} alt="guilherme" layout="fill" objectFit='cover'/>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Services | offer</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              As a dev freelancer, i've been working creating SPA pages, landing pages, Wordpress commerces, Fixing code errors. To get into of my freelancer works, go to my <a className="text-teal-500" href="#">Fiverr account</a> and look some of my gigs.  
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1"> 
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium">Front End</h3>
              <p className="text-gray-800 py-2">Javascript</p>
              <p className="text-gray-800 py-2">html5 | css3</p>
              <p className="text-gray-800 py-2">React | React Native</p>
            </div>
            
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1"> 
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium">Front End</h3>
              <p className="text-gray-800 py-2">Javascript</p>
              <p className="text-gray-800 py-2">html5 | css3</p>
              <p className="text-gray-800 py-2">React | React Native</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1"> 
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium">Front End</h3>
              <p className="text-gray-800 py-2">Javascript</p>
              <p className="text-gray-800 py-2">html5 | css3</p>
              <p className="text-gray-800 py-2">React | React Native</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
