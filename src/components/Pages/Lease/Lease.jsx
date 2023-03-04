import Navbar from '../../navbar/Navbar';
import styles from './Lease.module.scss';
import Card from '../../card/Card';
import { useQuery } from '@apollo/client';
import { LEASE_CARDS } from '../../../utils/Queries';

const Lease = () => {
  const { loading, data, error } = useQuery(LEASE_CARDS);

  return (
    <main>
      <Navbar />
      <div className={styles.content}>
        <h1>Houses For Lease</h1>
        <div className={styles.card}>
          {loading ? (
            <h1 style={{ color: '#333' }}>Loading ...</h1>
          ) : error ? (
            <h1 style={{ color: '#333' }}>Error: {error.message}</h1>
          ) : (
            <div className={styles.cards}>
              {data?.houses?.data?.map((house, index) => (
                <Card
                  key={index}
                  secondClass={styles.card}
                  info={{
                    id: house.id,
                    category: 'Lease',
                    imageSource: `http://localhost:1337${house.attributes.Preview_Image.data.attributes.url}`,
                    city: `${house.attributes.location.data.attributes.City}`,
                    neighbourhood: `${house.attributes.Neighbourhood}`,
                    street: `${house.attributes.Street}`,
                    rooms: `${house.attributes.Rooms}`,
                    bedrooms: `${house.attributes.Bedrooms}`,
                    bathrooms: `${house.attributes.Bathrooms}`,
                    shortAddress: `${house.attributes.Short_Address}`,
                    price: `${house.attributes.Price}`,
                    lease: `${house.attributes.Lease}`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Lease;
