import { Component } from 'react';
import BubbleAlert from './BubbleAlert'
import DetallesCarrito from './DetallesCarrito'

const styles = {
    carrito: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20
    }
}

class Carrito extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props // nos traemos la propiedad de Carrito
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0) //Vamos aumentando la cantidad
        return (
            <div>
                <span style={styles.bubble}>
                    {
                        cantidad !== 0 ? //Si la cantidad es > a 0 mostramos la burbuja
                            <BubbleAlert value={cantidad} />
                            : null //Si la cantidad es 0 no mostramos la burbuja
                    }
                </span>
                <button onClick={mostrarCarro} style={styles.carrito}>
                    Carrito
                </button>
                {esCarroVisible ? <DetallesCarrito carro={carro} /> : null}
            </div>
        )
    }
}

export default Carrito;