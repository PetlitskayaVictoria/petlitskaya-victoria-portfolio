import React from 'react';
import styles from './DistanceWork.module.css'
import containerStyles from './../common/styles/Container.module.css'


const DistanceWork = () => {
    return (
        <div className={styles.distanceWorkContainer}>
            <div className={containerStyles.container}>
                    <div className={styles.textBlock}>
                        <h3>I am considering a distance job</h3>
                        <button>Offer a job</button>
                    </div>
            </div>

        </div>
    )
}

export default DistanceWork;
