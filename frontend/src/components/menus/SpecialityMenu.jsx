import { specialityData } from '../../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id="speciality-menu" className='flex flex-col items-center gap-4 py-16 text-gray-800'>
      <h1 className="text-3xl font-bold">
        Find By Doctor Speciality
      </h1>
      <p className='=sm:w-1/3 text-center text-sm text-gray-600'>
        Simply browse through our existing extensive list of Expert & Trusted
        Doctors Now! SChedule your appointment today!
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => ( 
          // Here we are using the speciality name as a parameter in the URL to navigate to the respective doctor's page. The scrollTo(0,0) function is used to ensure that when a user clicks on a speciality, they are taken to the top of the new page.
          <Link onClick={()=>scrollTo(0,0)}to={`/doctors/${item.speciality}`} key={index} className='flex flex-col items-center text-xs cursor-pointer hover:translate-y-[-2px] transition-transform duration-300 transition-all'>
            <img src={item.image} alt={item.speciality} className="w-16 sm:w-24"/>
            <p className='text-center'>{item.speciality}</p>  
          </Link>    
        ))}
      </div>``
    </div>
  );
};

export default SpecialityMenu;
