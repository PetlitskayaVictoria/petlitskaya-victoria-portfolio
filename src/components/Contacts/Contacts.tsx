import React from 'react';
import styles from './Contacts.module.scss';
import containerStyles from '../common/styles/Container.module.scss';
import {Title} from '../common/components/Title/Title';
import Paragraph from '../common/components/Paragraph/Paragraph';


const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={containerStyles.container}>
                <div className={styles.contacts}>
                    <Title title="Get in touch" subtitle="Contact"/>
                    <div className={styles.description}>
                        <Paragraph
                            summary="Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday"/>
                    </div>
                    <div className={styles.form}>
                        <form>
                            <div className={styles.contactData}>
                                <div className={styles.inputField}>
                                    <input placeholder="Name" type="text" id="name"/>
                                </div>
                                <div className={styles.inputField}>
                                    <input placeholder="Email" type="text" id="email"/>
                                </div>
                            </div>
                            <div className={styles.message}>
                                <textarea id="message" placeholder="Message"></textarea>
                            </div>
                            <div className={styles.sendMessageContainer}>
                                <a href="#" id="send_message" className={styles.sendMessage}>Send Message</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
