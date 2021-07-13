// node libraries
import { useState, useEffect } from 'react';
// scss
import styles from '../../../styles/components/custom/tab.module.scss';

/**
 * component of custom badge
 * @param {array} tab => array of object each object have title and content
 */
const CustomTab = ({ tab }) => {
    let [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        setActiveTab(tab[0].title);
    }, [tab]);

    return (
        <div
            className={styles.customTab}>
            <div
                className={styles.customTab_wrapper}>
                {tab.length > 0 && tab.map((value, index) => {
                    return (
                        <span key={index}
                            className={`${styles.customTab_title} ${activeTab === value.title && styles.customTab_active}`}
                            onClick={() => {
                                setActiveTab(value.title);
                            }}>
                            {value.title}
                        </span>);
                })}
            </div>
            <div>
                {tab.length > 0 && tab.map((value, index) => {
                    return (
                        <div key={index}>
                            {activeTab === value.title && value.content}
                        </div>);
                })}
            </div>
        </div>
    );
}
// export
export default CustomTab;