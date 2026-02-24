

import SpecialityMenu from '../components/menus/SpecialityMenu'
import Header from '../components/Header'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div> 
        <Header />
        <SpecialityMenu />
        <TopDoctors />
        <Banner />
    </div>
  )
}

export default Home