import React from 'react'
import styles from './Empty.module.scss'

export const Empty = () => {
    return (
        <>
        <div className={styles.seaContainer}>
        <div className={styles.submarine__container}>
          <div className={styles.light}></div>
          <div className={styles.submarine__periscope}></div>
          <div className={styles.submarine__periscope_glass}></div>
          <div className={styles.submarine__sail}>
            <div className={`${styles.submarine__sail_shadow} ${styles.dark1}`}>
            </div>
            <div className={`${styles.submarine__sail_shadow} ${styles.light1}`}></div>
            <div className={`${styles.submarine__sail_shadow} ${styles.dark2}`}></div>
          </div>
          <div className={styles.submarine__body}>
            <div className={`${styles.submarine__window} ${styles.one}`}>
      
            </div>
            <div className={`${styles.submarine__window} ${styles.two}`}>
      
            </div>
            <div className={styles.submarine__shadow_dark}></div>
            <div className={styles.submarine__shadow_light}></div>
            <div className={styles.submarine__shadow_arcLight}></div>
          </div>
          <div className={styles.submarine__propeller}>
            <div className={styles.propeller__perspective}>
            <div className={`${styles.submarine__propeller_parts} ${styles.darkOne}`}></div>
            <div className={`${styles.submarine__propeller_parts} ${styles.lightOne}`}></div>
            </div>        
          </div>
        </div>
        <div className={styles.bubbles__container}>
          <span className={`${styles.bubbles} ${styles.bubble_1}`}></span>
          <span className={`${styles.bubbles} ${styles.bubble_2}`}></span>
          <span className={`${styles.bubbles} ${styles.bubble_3}`}></span>
          <span className={`${styles.bubbles} ${styles.bubble_4}`}></span>
        </div>
        <div className={styles.ground__container}>
          <div className={`${styles.ground} ${styles.ground1}`}>
            <span className={styles.up_1}></span>
            <span className={styles.up_2}></span>
            <span className={styles.up_3}></span>
            <span className={styles.up_4}></span>
            <span className={styles.up_5}></span>
            <span className={styles.up_6}></span>
            <span className={styles.up_7}></span>
            <span className={styles.up_8}></span>
            <span className={styles.up_9}></span>
            <span className={styles.up_10}></span>
          </div>
          <div className={`${styles.ground} ${styles.ground2}`}>
            <span className={styles.up_1}></span>
            <span className={styles.up_2}></span>
            <span className={styles.up_3}></span>
            <span className={styles.up_4}></span>
            <span className={styles.up_5}></span>
            <span className={styles.up_6}></span>
            <span className={styles.up_7}></span>
            <span className={styles.up_8}></span>
            <span className={styles.up_9}></span>
            <span className={styles.up_10}></span>
            <span className={styles.up_11}></span>
            <span className={styles.up_12}></span>
            <span className={styles.up_13}></span>
            <span className={styles.up_14}></span>
            <span className={styles.up_15}></span>
            <span className={styles.up_16}></span>
            <span className={styles.up_17}></span>
            <span className={styles.up_18}></span>
            <span className={styles.up_19}></span>
            <span className={styles.up_20}></span>
          </div>
        </div>
      </div>
      </>
    )
}
