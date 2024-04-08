// useStates para gerenciar o estado de algum valor

"use client"

import { useState } from "react"

function Status() {
    const [name, setName] = useState("Tome");
    const [number, setNumber] = useState(0)

    console.log(name)

    const changeNumber = () => {
        setNumber((prevNumber) => prevNumber + 1);
        setNumber((prevNumber) => prevNumber + 1);  //valor anterior mais 1
    }

    return (
        <div>
            <h1>Meu nome é: {name}</h1>
            <input 
                type="text" 
                value={name}
                onChange={e => 
                setName(e.target.value)}
            />
            <div>
                <p>Número: {number}</p>
                <button 
                    onClick={changeNumber} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Mudar número
                </button>
            </div>

        </div>
    )       
}

export default Status

// ##########################################################

// Código padrão esperado do hook useState.

// function Status() {
//     const [name, setName] = useState("Tome");

//     return (
//         <div>
//             <h1>Meu nome é: {name}</h1>
//         </div>
//     )       
// }

// export default Status

// ##########################################################

// Foi criado um const number e uma div para alterar o número. Criado um button de mudar numero. Para mudar o número é criado uma função no escopo do componente " console.log(name)" e "const changeNumber = () => {". Colocado o evento onClik no button

// function Status() {
//     const [name, setName] = useState("Tome");
//     const [number, setNumber] = useState(1)

//     console.log(name)

//     const changeNumber = () => {
//         setNumber(number + 1)
//     }

//     return (
//         <div>
//             <h1>Meu nome é: {name}</h1>
//             <div>
//                 <p>Número: {number}</p>
//                 <button 
//                    onClick={changeNumber} 
//                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Mudar número
//                 </button>
//             </div>

//         </div>
//     )       
// }

// export default Status


// ##########################################################

// Gerenciar o estado anterior a partir de uma função anonima com o (Previus Value) ou (Previus State) - valor anterior, nesse caso o número pula de dois em dois

// function Status() {
//     const [name, setName] = useState("Tome");
//     const [number, setNumber] = useState(0)

//     console.log(name)

//     const changeNumber = () => {
//         setNumber((prevNumber) => prevNumber + 1);
//         setNumber((prevNumber) => prevNumber + 1);  //valor anterior mais 1
//     }

//     return (
//         <div>
//             <h1>Meu nome é: {name}</h1>
//             <div>
//                 <p>Número: {number}</p>
//                 <button 
//                    onClick={changeNumber} 
//                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Mudar número
//                 </button>
//             </div>

//         </div>
//     )       
// }

// export default Status


// ##########################################################

// Como alterar o dado name para um input (<input type="text" value={name} />). Alterar o input e o state também.

