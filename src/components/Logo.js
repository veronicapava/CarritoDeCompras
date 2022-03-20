import { Component } from 'react';

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '2rm'
    }
}
class Logo extends Component {
    render() {
        return (
            <h1 style={styles.logo}>Tienda de Vero</h1> //Renderizamos el titulo

        )
    }
}

export default Logo