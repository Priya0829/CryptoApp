import React from 'react'
import Layout from '../../Layout'
import styles from './Coin.module.css'

const Coin = ({coin}) => {
    return (
        <Layout>
            <div className={styles.coin_page}>
                <div className={styles.coin_container}>
                    <img 
                    src={coin.image.large} 
                    alt={coin.name} 
                    className={styles.coin_image} 
                    />
                    <h1 className={styles.coin_name}>{coin.name}</h1>
                    <p className={styles.coin_ticker}>{coin.symbol}</p>
                    <p className={styles.coin_current}>&#8377;{coin.market_data.current_price.inr}</p>

                </div>
            </div>
        </Layout>
    )
}

export default Coin

export async function getServerSideProps(context){
    const {id} = context.query;
    const link_text = 'https://api.coingecko.com/api/v3/coins/'

    const res = await fetch(`${link_text}${id}`)

    const data = await res.json()

    return{
        props:{
            coin : data
        }
    }
}
