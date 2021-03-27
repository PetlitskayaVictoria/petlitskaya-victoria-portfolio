import React from 'react';
import styles from './Contacts.module.css'
import containerStyles from './../common/styles/Container.module.css'


const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={containerStyles.container} >
                    <div className={styles.contacts}>
                        <h2>Contacts</h2>
                        <form>
                            <input/>
                            <input/>
                            <textarea></textarea>
                        </form>
                        <button>Send</button>
                    </div>
            </div>
        </div>
    )
}

export default Contacts;
