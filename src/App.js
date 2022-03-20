import { Component } from 'react'
import Productos from './components/Productos'

class App extends Component {
  state = {
    productos: [
      { name: 'Tomates', price: 2000, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 1000, img: '/productos/lechuga.jpg' }
    ]
  }

  render() {
    return (
      <div>
        <h1>Bienvenidos</h1>
        <Productos
          agregarAlCarro={() => console.log('No hace nada')}
          productos={this.state.productos}
        />
      </div>
    )
  }
}

export default App;
