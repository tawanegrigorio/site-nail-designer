import './Valores.css';

function Valores() {
    return (
        <>
            <header>

                <a href="/" className="voltar">← VOLTAR</a>
                <h1>THIÁLITA NAILS</h1>
                <p>TABELA DE VALORES</p>
                <span>Escolha o serviço ideal para você.</span>

            </header>

            <main>

                <section className="tabela">

                    <div className="servico">
                        <span>ALONGAMENTO</span>
                        <strong>R$ 70,00</strong>
                    </div>

                    <div className="servico">
                        <span>MANUTENÇÃO</span>
                        <strong>R$ 60,00</strong>
                    </div>

                    <div className="servico">
                        <span>BANHO DE GEL</span>
                        <strong>R$ 60,00</strong>
                    </div>

                    <div className="servico">
                        <span>ESMALTAÇÃO EM GEL</span>
                        <strong>R$ 40,00</strong>
                    </div>

                    <div className="servico">
                        <span>POSTIÇA REALISTA</span>
                        <strong>R$ 35,00</strong>
                    </div>

                    <div className="servico">
                        <span>REMOÇÃO</span>
                        <strong>R$ 25,00</strong>
                    </div>

                </section>

            </main>
        </>
    )
}

export default Valores