import styles from './MainBody.module.css';

const MainBody: React.FC<{ className?: string}> = (props) => {
    return (
        <div className={`${styles.body_theme} ${props.className}`}>
            {props.children}
        </div>
    );
}

export default MainBody;