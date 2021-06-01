import React, {useState} from 'react';
import styles from './Contacts.module.scss';
import containerStyles from '../common/styles/Container.module.scss';
import {Title} from '../common/components/Title/Title';
import Paragraph from '../common/components/Paragraph/Paragraph';
// @ts-ignore
import Fade from "react-reveal/Fade";
import axios from "axios";
import {useFormik} from "formik";

const Contacts = () => {
    const [isSent, setIsSent] = useState(false)
    const [error, setError] = useState(false)

    const formik = useFormik({
        initialValues : {
            name : '',
            email : '',
            message : ''
        },
        onSubmit : values => {
            axios.post('https://gmail-nodejs-server.herokuapp.com/sendMessage', {
                message : values.message,
                name : values.name,
                email : values.email
            })
                .then((res) => setIsSent(true))
                .catch((error) => setError(true))
        },
    })

    return (
        <div id="contacts" className={styles.contactsBlock}>
            <Fade bottom>
                <div className={containerStyles.container}>
                    <div className={styles.contacts}>
                        <Title title="Get in touch" subtitle="Contact"/>
                        <div className={styles.description}>
                            <Paragraph
                                summary="Please fill out the form on this section to contact with me or send me an email. I will answer you as soon as I receive your message."/>
                        </div>
                        <div className={styles.form}>
                            <form onSubmit={formik.handleSubmit}>
                                <div className={styles.contactData}>
                                    <div className={styles.inputField}>
                                        <input placeholder="Name"
                                               type="text"
                                               id="name"
                                               {...formik.getFieldProps("name")}
                                        />
                                    </div>
                                    <div className={styles.inputField}>
                                        <input placeholder="Email"
                                               type="text"
                                               id="email"
                                               {...formik.getFieldProps("email")}
                                        />
                                    </div>
                                </div>
                                <div className={styles.message}>
                                <textarea id="message"
                                          placeholder="Message"
                                          {...formik.getFieldProps("message")}
                                ></textarea>
                                </div>
                                <div className={styles.sendMessageContainer}>
                                    <button id="send_message" className={styles.sendMessage}>Send Message</button>
                                </div>
                            </form>
                            {isSent && <div className={styles.notification}>Your message has been sent successfully</div>}
                            {error && <div className={styles.notification + " " + styles.error}>An error occurred. Please try again</div>}
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Contacts
