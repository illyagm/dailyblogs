import CalculatorComponent from "../components/IncomeCalculator";
import Head from 'next/head'

const StakingCalculator = () => {
    return (
        <>
            <Head>
                <title>Calculadora Staking</title>
                <meta name="description"
                    content="¡Calculadora para calcular tus beneficios de staking invirtiendo en Bitcoin y Ethereum!" />
                <link rel="icon" href="/logoCXC.png" />
            </Head>
            <CalculatorComponent />
        </>
    )
}

export default StakingCalculator;