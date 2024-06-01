import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { getPhone } from '../../services/Api';
import { ScaleLoader } from 'react-spinners';

const PhoneDetail = () => {
  const { id } = useParams();

  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getPhone(id)
      .then(phone => {
        setPhone(phone)
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center mt-4">
          <ScaleLoader />
        </div>
      ) : (
        <>
          <h1>{phone?.name}</h1>
          <Link to="/phones/2">Go to 2</Link>
        </>
      )}
    </div>
  )
}

export default PhoneDetail;