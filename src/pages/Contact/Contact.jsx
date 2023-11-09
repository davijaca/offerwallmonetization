import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ ...props }) => {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.heroLeft}>
          <div className={styles.heroGetInTouch}>
            <span>
              <span className={styles.getIn}>Get in </span>
              <span className={styles.touch}>touch</span>
            </span>{' '}
          </div>
          <div className={styles.heroH2}>
            Have questions, suggestions, or just want to chat about offerwall
            monetization? Write your sendButton below and let&#039;s start the
            conversation!{' '}
          </div>

          <div className={styles.heroBackground}>
            <img
              src='/images/contactHeroBackground.svg'
              alt=''
            />
          </div>
          <div className={styles.heroBackgroundMobile}>
            <img
              src='/images/contactHeroBackgroundMobile.svg'
              alt=''
            />
          </div>
        </div>
        <div className={styles.heroRight}>
          <form>
            <div className={styles.contactForm}>
              <div className={styles.contactEmail}>
                <label
                  className={styles.contactLabel}
                  for='contactEmail'
                >
                  Your E-mail{' '}
                </label>
                <input
                  className={styles.dataBox}
                  type='email'
                  id='contactEmail'
                  name='user_email'
                  required
                />
              </div>
              <div className={styles.contactSubject}>
                <label
                  className={styles.contactLabel}
                  for='contactSubject'
                >
                  Subject{' '}
                </label>
                <input
                  className={styles.dataBox}
                  type='text'
                  id='contactSubject'
                  name='subject'
                  required
                />
              </div>
              <div className={styles.contactMessage}>
                <label
                  className={styles.contactLabel}
                  for='contactMessage'
                >
                  Your message{' '}
                </label>
                <textarea
                  className={styles.messageBox}
                  maxlength='240'
                  id='contactMessage'
                  name='message'
                  required
                >
                  {' '}
                </textarea>
              </div>
              <div className={styles.sendGroup}>
                <button
                  className={styles.sendButton}
                  id='btnSubmit'
                />
                <div className={styles.sendText}>Send </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
