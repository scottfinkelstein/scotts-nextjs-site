import Image from "next/image"
export default function Card(props) {
    return (
        <div className='flex flex-col justify-between bg-white rounded-md mb-10 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-center basis-1/3 flex-1 dark:bg-slate-500 dark:text-white'>
            <div>
                <Image src={ props.image } alt='' className='rounded-t-md' />
                <p className='text-left p-3 font-monserrat'>{ props.content }</p>
            </div>
            <div className='flex items-center justify-between p-3 pb-0 offset-y-0'>
                <a href={ props.appStoreUrl } target="_blank" rel="noreferrer">
                { !props.darkMode ? 
                    <Image src="/app-store-badge.svg" alt="Download on the App Store." width={ 120 } height={ 40 } />
                    : <Image src="/app-store-badge-dark.svg" alt="Download on the App Store." width={ 120 } height={ 40 } />
                }
                </a>
                <a href={ props.googlePlayUrl } target="_blank" rel="noreferrer">
                    <Image width={ 160 } height={ 60 } className='object-contain' src="/google-play-badge.png" alt="Get it on Google Play" />
                </a>
            </div>
            {/* <AppDownloadButtons darkMode={ darkMode } appStoreUrl='https://apps.apple.com/app/apple-store/id1571934942' googlePlayUrl='https://play.google.com/store/apps/details?id=edu.adelphi.app' /> */}
        </div>
    )
}