import { useEffect, useState } from "react";

const cryptoPrices = () => {

    const [btcPrice, setBtcPrice] = useState(0);
    const [ethPrice, setEthPrice] = useState(0);
    const [dotPrice, setDotPrice] = useState(0);
    const [dogePrice, setDogePrice] = useState(0);
    const [maticPrice, setMaticPrice] = useState(0);
    const [adaPrice, setAdaPrice] = useState(0)
    const [arrow, setArrow] = useState('up');
    const [a, setA] = useState(0);


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

    useEffect(() => {

        const binanceWS = new WebSocket("wss://stream.binance.com:9443/ws");

        binanceWS.onopen = (event) => {
            binanceWS.send(JSON.stringify(apiCall));
        }

        binanceWS.onmessage = (event) => {


            const json = JSON.parse(event.data);
            try {
                switch (json.s) {
                    case 'BTCUSDT':
                        setBtcPrice(json.p);
                        //console.log(btcPrice + ' ' + json.p)
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
        //clean up function
        return () => binanceWS.close();
    }, []);

    // map data

    return (
        <div className="crypto-prices">
            <div><span>BTC</span> {parseFloat(btcPrice).toFixed(2)} $</div>
            <div><span>ETH</span> {parseFloat(ethPrice).toFixed(2)} $</div>
            <div><span>DOT</span> {parseFloat(dotPrice).toFixed(2)} $</div>
            <div><span>DOGE</span> {parseFloat(dogePrice).toFixed(2)} $</div>
            <div><span>MATIC</span> {parseFloat(maticPrice).toFixed(2)} $</div>
            <div><span>ADA</span> {parseFloat(adaPrice).toFixed(2)} $</div>
        </div>
    )
}



export default cryptoPrices;