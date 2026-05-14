import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './Componentes/ProdutoCard'
import "./Visual/app.css"

function App() {
  const [loading, setLoading] = useState(false)
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [valor, setValor] = useState("")
  const [cards, setCards] = useState([])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {

      const dadosSimulados = [{
        id: 1,
        titulo: "Hambúrguer",
        descricao: "Muito gostoso",
        valor: 50,
        imagem: "https://placehold.co/600x400"

      },

      {
        id: 2,
        titulo: "Pizza",
        descricao: "Queijo extra",
        valor: 80,
        imagem: "https://placehold.co/600x400"
      }]
      setCards(dadosSimulados)
      setLoading(false)

    }, 3000)
  }, [])



  function adicionarCard() {
    if (titulo === "" || descricao === "" || valor === "") {
      alert("prencha todos os campos!!")
      return
    }
    const novoCard = {
      id: Date.now(),
      titulo: titulo,
      descricao: descricao,
      valor: valor,
      imagem: "https://placehold.co/600x400",
    }
    setLoading(true)
    setTimeout(() => {

      setCards([...cards, novoCard])

      setTitulo("")
      setDescricao("")
      setValor("")


      setLoading(false)
    }, 2000)

  }
  function remover(id) {
    const novosCards = cards.filter((card) => {
      return card.id !== id
    })

    setCards(novosCards)
  }

  return (

    <div>
      <div>

        <div className='formulario'>
          <h1>Formulário</h1>
          <input
            type="text"
            placeholder="Serviço"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <input
            type="number"
            placeholder="Preço"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
          <button onClick={adicionarCard}>Adicionar</button>

        </div>

        <div className='loading'>
          {loading && <h1>Carregando...</h1>}
        </div>

        <div className='container'>



          {cards.map((card) => (
            <Card
              key={card.id}
              className={"card"}
              titulo={card.titulo}

              descricao={card.descricao}
              imagem={card.imagem}
              botao={"Remover"}
              remover={() => remover(card.id)}
              valor={card.valor}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default App
