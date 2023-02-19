import styles from "./Layout.module.css";
import Link from "next/link";

function Layout({children}){

    return(
    <>

    <header className={styles.header}>
        <Link href="https://wwww.google.com" target="_blank">    
          <h2>BARAN CAR</h2>
          <p>Choose and buy your car</p>
        </Link>
    </header>

    <div className={styles.container}>{children}</div>

    <footer className={styles.footer}>
      <a href="google.com" target="_blank">
         BARAN 
      </a>
       Next.js courses | Baran Car Project &copy;
    </footer>
    
    </>
    )
     
}
export default Layout