import NavigationCard from '@/components/NavigationCard'
import Image from 'next/image'

export default function Home() {
  let rightColumnClasses = '';
  const hideNavigation =true;
  if (hideNavigation) {
    rightColumnClasses += 'w-full';
  } else {
    rightColumnClasses += 'mx-4 md:mx-0 md:w-9/12';
  }
  return (
  <div>
    <div className="md:flex mt-4 max-w-6xl mx-auto gap-6 mb-24 md:mb-0">
    <div className="fixed md:static w-full bottom-0 md:w-3/12 -mb-5">
      <NavigationCard/>
        </div>
    
    <div className={"mx-4 md:mx-0 md:w-9/12"}>
      Right content
    </div>
    </div>
  </div>
  )
}
