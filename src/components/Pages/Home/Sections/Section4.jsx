import styles from './Section4.module.scss';
import building3 from '../../../../assets/building3.jpg';

const Section4 = () => {
  return (
    <section className={styles.section_4}>
      {/* SECTION TITLE */}
      <div className={styles.section_4_title}>
        <h1>Help People To Getting Their Dream House For More Than 2 years</h1>
      </div>

      {/* CONTENT */}
      <div className={styles.section_4_content}>
        {/* IMAGE CONTAINER */}
        <div className={styles.image_container}>
          <img src={building3} alt="building" />
        </div>
        {/* INFO */}
        <div className={styles.info}>
          <p>
            Search and find your dream house at affordable prices, but with the
            best quality. Only available at Logapea!
          </p>

          <div className={styles.rows}>
            {/* ROW1 */}
            <div className={styles.row_1}>
              {/* FACT1 */}
              <div className={styles.fact}>
                <h2>10</h2>
                <h3>Completed Houses</h3>
              </div>
              {/* FACT2 */}
              <div className={styles.fact}>
                <h2>20</h2>
                <h3>Rented Houses </h3>
              </div>
            </div>

            {/* ROW2 */}
            <div className={styles.row_1}>
              {/* FACT1 */}
              <div className={styles.fact}>
                <h2>5</h2>
                <h3>Sold Houses</h3>
              </div>

              {/* FACT2 */}
              <div className={styles.fact}>
                <h2>50</h2>
                <h3>Happy Client</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
