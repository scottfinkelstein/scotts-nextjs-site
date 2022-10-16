import Image from 'next/image'
import { BsFillMoonStarsFill, BsFillSunFill, BsCodeSlash } from 'react-icons/bs'
import logo from '../public/logo.png'

export default function Header(props) {
    // const [darkMode, setDarkMode] = useState(false);
    return(
        <header className='flex justify-between py-10 px-3 dark:bg-black'>
        <div className="flex items-top gap-1">
            <a href="/"><Image src= { logo } alt="" width={ 40 } height={ 40 } /></a>
            <div>
              <h1 className="font-antonio font-medium text-2xl text-sky-800 dark:text-sky-100"><a href="/">Scott Finkelstein</a></h1>
            </div>
        </div>
    
        <ul>
          <li>
            { !props.darkMode ?
              <BsFillMoonStarsFill onClick={ () => props.setDarkMode(!props.darkMode) } className='text-xl mr-3' />
              : <BsFillSunFill onClick={ () => props.setDarkMode(!props.darkMode) } className='text-xl mr-3 text-white' />
            }
            
          </li>
        </ul>
      </header>
    )
}