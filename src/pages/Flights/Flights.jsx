
import Search from '../../components/Bobfligths/FligthsSearch'
import Backtop from '../../components/Backtop/Backtop'


export default function Flights() {
  return (
    <>
      <Backtop />
      
      <div
        className='bg-image text-center h-100'
        style={{ backgroundImage: "url('https://content.r9cdn.net/dimg/phoenix-images/v3/agoda-flights-fd.jpg')", height:'100vh'}}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          <div className='d-flex flex-column justify-content-center align-items-center h-100'>
              <div>
                <h1 className='mb-1 text-white'>Search hundreds of flight sites at once.</h1>
                <h4 className='mb-3 text-white'>Search and compare hundreds of travel sites at once</h4>
              </div>
              <div>
                  <Search />
              </div>
          </div>
        </div>
      </div>
    </>

  );
}