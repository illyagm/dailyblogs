import { useEffect, useState, useRef } from "react";
import styles from '../styles/header/Cryptoprices.module.scss';
const CryptoPrices = () => {

    const [btcPrice, setBtcPrice] = useState(0);
    const [ethPrice, setEthPrice] = useState(0);
    const [dotPrice, setDotPrice] = useState(0);
    const [dogePrice, setDogePrice] = useState(0);
    const [maticPrice, setMaticPrice] = useState(0);
    const [adaPrice, setAdaPrice] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Reference to web socket
    const binanceWS = useRef(null);

    useEffect(() => {
        binanceWS.current = new WebSocket("wss://stream.binance.com:9443/ws");
        binanceWS.current.onopen = () => {
            binanceWS.current.send(JSON.stringify(apiCall));
        };
        binanceWS.current.onclose = () => console.log("ws closed");

        const wsCurrent = binanceWS.current;
        return () => {
            wsCurrent.close();
        }
    }, []);

    useEffect(() => {
        if (!binanceWS.current) return;

        binanceWS.current.onmessage = e => {
            if (isPaused) return;
            const json = JSON.parse(e.data);
            try {
                switch (json.s) {
                    case 'BTCUSDT':
                        setBtcPrice(json.p);
                        console.log(btcPrice + ' ' + json.p)
                        break;
                    case 'ETHUSDT':
                        setEthPrice(json.p);
                        break;
                    case 'DOTUSDT':
                        setDotPrice(json.p);
                        break;
                    case 'DOGEUSDT':
                        setDogePrice(json.p);
                        break;
                    case 'MATICUSDT':
                        setMaticPrice(json.p);
                        break;
                    case 'ADAUSDT':
                        setAdaPrice(json.p);
                        break;
                    default:
                        break;
                }
            } catch (error) {
                console.log(error);
            }
        }
    }, [isPaused]);


    const apiCall = {
        "method": "SUBSCRIBE",
        "params": [
            "btcusdt@trade",
            "ethusdt@trade",
            "dotusdt@trade",
            "dogeusdt@trade",
            "maticusdt@trade",
            "adausdt@trade"
        ],
        "id": 1
    };

    const interval = setInterval(() => {
        setIsPaused(!isPaused);
    }, 2000);

    return (
        <div className={styles.cryptoprices}>
            <div><span>BTC</span> {parseFloat(btcPrice).toFixed(2)} $</div>
            <div><span>ETH</span> {parseFloat(ethPrice).toFixed(2)} $</div>
            <div><span>DOT</span> {parseFloat(dotPrice).toFixed(2)} $</div>
            <div><span>DOGE</span> {parseFloat(dogePrice).toFixed(2)} $</div>
            <div><span>MATIC</span> {parseFloat(maticPrice).toFixed(2)} $</div>
            <div><span>ADA</span> {parseFloat(adaPrice).toFixed(2)} $</div>
        </div>
    )
}



export default CryptoPrices;