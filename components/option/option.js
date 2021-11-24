import styles from './option.module.css'


const Option = ({option, answer, style, iconWrong, iconCheck}) => {
    return (
        <>
            <div className={styles.Option} style={style}>
                <strong>{option}</strong>
                <p>{answer}</p>
                <div className={styles.Icon}>
                    {iconWrong}
                    {iconCheck}
                </div>
            </div>
        </>
    );
}

export default Option;