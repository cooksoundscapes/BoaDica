const style = {
    marginLeft: window.innerWidth >= 800 ? 430 : 0,
    marginTop: window.innerWidth >= 800 ? 60 : 0,
    minHeight: 300,
    flavorText: {
        maxWidth: '500px',
        display: 'inline-block',
        textAlign: 'left',
        margin: '24px',
        font: 'normal normal bold 32px/42px Montserrat',
        letterSpacing: '0px',
        color: '#2E8755'
    },
    saibamais: {
        font: 'normal normal 600 13px/16px Montserrat',
        letterSpacing: '1.04px',
        color: '#000000',
        textTransform: 'uppercase'
    }
}

export default function Welcome() {
    return (
        <div style={style}>
            <p style={style.flavorText}>
                A
                <span style={{color:'black'}}> melhor oferta </span>
                em produtos e serviços de informática
                <span style={{color:'black'}}> perto de você </span>
                <br />
                <span style={style.saibamais}>saiba mais</span>
            </p>
        </div>
    )
}
