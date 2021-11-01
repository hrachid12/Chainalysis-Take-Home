import styles from './Card.module.css';

const Card: React.FC<{ className?: string}> = (props) => {

    return (
        <div className={`${styles.card_theme} ${props.className}`}>
            {props.children}
        </div>
    );
}

export default Card;