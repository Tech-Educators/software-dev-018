// import the styles from my module file
import styles from "./cooltext.module.css"

export default function CoolText({children}) {

    console.log(styles)
    return (
        <p className={styles.coolText}>{children}</p>
    )
}