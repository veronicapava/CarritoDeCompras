import { Component } from 'react'
import Productos from './components/Productos'
import Layaout from './components/Layaout'
import Title from './components/Title'
import NavBar from './components/NavBar'


class App extends Component {
  state = { //Nos traemos los productos como estado
    productos: [
      { name: 'Tomates', price: 2000, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 1000, img: '/productos/lechuga.jpg' }
    ],
    carro: []
  }

  //Metodo para agregar producto al carrito

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)) { // Verificando los productos ya en el carrito y aumentando la cantidad
      const newCarro = carro.map(x => x.name === producto.name ? //Nuevo carro de compras
        ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      return this.setState({ carro: newCarro })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    })
  }

  render() {
    return (
      <div>
        <NavBar carro={this.state.carro} />
        <Layaout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro} //Agregamos al carrito los productos
            productos={this.state.productos}
          />
        </Layaout>

      </div>
    )
  }
}

export default App;
