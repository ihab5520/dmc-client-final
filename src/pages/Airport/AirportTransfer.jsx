
import Search from '../../components/Bobarirport/AirportSearch'
import Backtop from '../../components/Backtop/Backtop'


export default function AirportTransfer() {
  return (
    <>
      <Backtop />
      
      <div
        className='bg-image text-center h-100'
        style={{ backgroundImage: "url('https://images.pexels.com/photos/11034822/pexels-photo-11034822.jpeg?cs=srgb&dl=pexels-andrea-de-santis-11034822.jpg&fm=jpg')", height:'100vh'}}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          <div className='d-flex flex-column justify-content-center align-items-center h-100'>
              <div>
                <h1 className='mb-1 text-white'>Search hundreds of AirportTransfer sites at once.</h1>
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