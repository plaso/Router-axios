import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import { getPhones } from '../../services/Api';
import { ScaleLoader } from 'react-spinners';

const Home = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPhones()
      .then((phonesApi) => setPhones(phonesApi))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1 className="mt-4">Móviles y Smarphones</h1>

      {loading ? (
        <div className="d-flex justify-content-center mt-4">
          <ScaleLoader />
        </div>
      ) : (
        <div className="row row-cols-1 g-4 mt-4">
          {phones.map(phone => (
            <Card key={phone.id} { ...phone } />
          ))}
        </div>
      )}
      
    </div>
  )
}

export default Home;