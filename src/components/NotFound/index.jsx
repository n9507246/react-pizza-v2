import styles from './styles.module.scss';

export default function (props) {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        {
          props.title ? <span>{props.title}</span> : <span>Ничего не найдено</span>
        }
        
      </h1>
      <p className={styles.description}>
        {
          props.message ? <span>{props.message}</span> :
          <span>К сожалени данная страница отсутствует в нашем интернет-магазине</span> 
        }
        
      </p>
    </div>
  );
};