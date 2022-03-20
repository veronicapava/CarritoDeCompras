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
    ]
  }

  render() {
    return (
      <div>
        <NavBar />
        <Layaout>
          <Title />
          <Productos
            agregarAlCarro={() => console.log('No hace nada')} //Agregamos al carrito los productos
            productos={this.state.productos}
          />
        </Layaout>

      </div>
    )
  }
}

export default App;
