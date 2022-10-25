import React, { useState } from 'react';
import Poruka from './Poruka'
import Footer from './Footer'

const App = (props) => {
    //const { poruke } = props
    const [poruke, postaviPoruke] = useState(props.poruke)
    const [unosPoruke, postaviUnos] = useState('...')
    const [ispisSve, postaviIspis] = useState()

    const porukeZaIspis = ispisSve
    ? poruke
    : poruke.filter( p => p.vazno === true)

    // const novaPoruka = (e) => {
    //     e.preventDefault()
    //     //console.log(e.target)

    //     const objekt = {
    //         id:poruke.length+1,
    //         sadrzaj: unosPoruke,
    //         datum: new Date().toISOString(),
    //         vazno: Math.random() > 0.5
    //     }

    //     postaviPoruke(poruke.concat(objekt)
    // }
    const promjenaUnosa = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        postaviUnos(e.target.value)
    }

    const novaPoruka = (e) => {
        e.preventDefault()
        console.log('Klik', e.target)
        const noviObjekt = {
          id: poruke.length + 1,
          sadrzaj: unosPoruke,
          datum: new Date().toISOString(),
          vazno: Math.random() > 0.5      
        }
        postaviPoruke(poruke.concat(noviObjekt))
        postaviUnos('')
    }

    return (
      <div>
        <h1>Poruke</h1>

        <button onClick={() => postaviIspis(!ispisSve)}>
            Prikaz {ispisSve ? "vazne" : "sve"}
        </button>

        <form onSubmit={novaPoruka}>
            <input value={unosPoruke} onChange={promjenaUnosa}></input>
            <button type='submit'>Spremi</button>
        </form>

        <ul>
          {poruke.map(p =>
            <Poruka key={p.id} poruka={p} />
          )}  
        </ul>

        <Footer></Footer>
      </div>
    )
  }

  export default App