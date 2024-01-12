import { useEffect, useState } from "react"

const minhaLista = [
    { id: '1', value: 'Fruta'},
    { id: '2', value: 'Legume'},
    { id: '3', value: 'Carne'},
    { id: '4', value: 'Biscoito'},
    { id: '5', value: 'Pão'},
    { id: '6', value: 'Água'},
    { id: '7', value: 'Frango'},
    { id: '8', value: 'Leite'},
    { id: '9', value: 'Ovos'},
]


export default function MinhaLista() {

    const [produtos, setProdutos] = useState(minhaLista)
    const [pesquisa, setPesquisa] = useState('')

    useEffect(
        () => {
            if(pesquisa) {
                const novaLista = minhaLista.filter( (item) => {
                    return item.value.toLowerCase().includes(pesquisa.toLowerCase())
                })
                setProdutos(novaLista)
            } else {
                setProdutos(minhaLista)
            }
        }
    , [pesquisa])

    return (
        <div className="container">
            <h1>Minha Lista</h1>
            <br />
            <input 
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="Pesquise aqui"
            />
            <br />
            {produtos.map((item) => {
                return (
                    <div key={item.id}>
                        <h4>{item.value}</h4>
                    </div>
                )
            })}
        </div>
    )

}