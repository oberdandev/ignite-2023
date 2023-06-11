/* eslint-disable react/prop-types */
import styles from './Header.module.css';
import igniteLogo from '../assets/imgs/ignite-logo.svg';

export function Header(props){
  return (
    <header className={styles.header}>
    <img src={igniteLogo} alt="Logotipo Ignite" />
    <h1>{props.title}</h1>
    </header>
  )
}