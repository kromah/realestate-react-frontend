//STYLES
import styles from './Section3.module.scss';

//COMPONENTS
import { ArrowButton } from '../../../buttons/Buttons';
import Carousel from '../../../carousel/Carousel';
import Card from '../../../../components/card/Card';

//DEPS
import { SwiperSlide } from 'swiper/react';
import { useQuery, gql } from '@apollo/client';
import client from '../../../../apollo';

const CARD_DATA = gql`
  query GET_CARDS {
    houses(
      filters: { categories: { Category: { in: ["Buy", "Rent", "Lease"] } } }
      pagination: { limit: 6 }
    ) {
      data {
        attributes {
          location {
            data {
              attributes {
                City
              }
            }
          }
          Preview_Image {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                Category
              }
            }
          }
          Neighbourhood
          Street
          Rooms
          Bedrooms
          Bathrooms
          Short_Address
          Price
        }
      }
    }
  }
`;

const Section_3 = () => {
  const { loading, data, error } = useQuery(CARD_DATA, { client });

  return (
    <section className={styles.section_3}>
      <div className={styles.section_3_title}>
        <h1>Best Houses</h1>
        <ArrowButton text="See More" path="buy" />
      </div>

      <div className={styles.cards}>
        <Carousel>
          {loading || error ? (
            <>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </>
          ) : (
            <>
              {data.houses.data.map((house, index) => (
                <SwiperSlide key={index}>
                  <Card
                    info={{
                      category:
                        house.attributes.categories.data[0].attributes.Category,
                      imageSource: `http://localhost:1337${house.attributes.Preview_Image.data.attributes.url}`,
                      city: `${house.attributes.location.data.attributes.City}`,
                      neighbourhood: `${house.attributes.Neighbourhood}`,
                      street: `${house.attributes.Street}`,
                      rooms: `${house.attributes.Rooms}`,
                      bedrooms: `${house.attributes.Bedrooms}`,
                      bathrooms: `${house.attributes.Bathrooms}`,
                      shortAddress: `${house.attributes.Short_Address}`,
                      price: `${house.attributes.Price}`,
                    }}
                  />
                </SwiperSlide>
              ))}
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
};

export default Section_3;
