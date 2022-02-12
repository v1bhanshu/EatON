import Image from "next/image";
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
return (
    <div className={styles.container}>
        <div className={styles.item}>
        <div className={styles.callButton}>
            <Image src="/img/call.png" alt="" width="32" height="32"/>
        </div>

        <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW!</div>
            <div className={styles.text}>700480604</div>
        </div>

        </div>
        <div className={styles.item}></div>
        <div className={styles.container}></div>

    </div>
)
}

export default Navbar