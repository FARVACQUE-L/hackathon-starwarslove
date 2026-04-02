import "./Banner.css"

function Banner() {
    const bannerText = ["01010000 01101111 01110101 01101100 01100101 01110100", "Célibataire tu seras !", "Matche tu dois !", "Solitude, quitter tu vas !", "Compatible à 100% tu seras !", "Que la compatibilité soit avec toi !"]

    return (<header>
        <h2>{bannerText[Math.floor(Math.random() * bannerText.length)]}</h2>
    </header>);
}

export default Banner