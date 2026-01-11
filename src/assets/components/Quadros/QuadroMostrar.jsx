import './QuadroMostrar.css'

import BemVindo from '../Paginas/BemVindo/BemVindo.jsx'
import Sobre from '../Paginas/Sobre/Sobre.jsx'
import Projetos from '../Projetos/Projetos.jsx'
import { useLocation } from 'react-router-dom'

function QuadroMostrar({ opcaoSelecionada, projetoSelecionado }) {
  const location = useLocation();

  const opcaoSelecionadaMap = {
    'bemVindo.html': <BemVindo />,
    'sobre.html': <Sobre />,
    'projetos': <Projetos projetoSelecionado={projetoSelecionado} />,
  }

  //gambiarra pra concertar local-mostrar
  opcaoSelecionada === '' ? opcaoSelecionada = 'bemVindo.html' : opcaoSelecionada = opcaoSelecionada;

  projetoSelecionado === undefined ? projetoSelecionado = '' : projetoSelecionado = projetoSelecionado;

  if (projetoSelecionado === '' && location.pathname === '/projetos') {
    projetoSelecionado = 'README.md';
  }
  
  return (
    <div className='quadro-mostrar'>

      <div className='local-div-mostrar'>
        <div className='local-mostrar'>
          {'>' + opcaoSelecionada + '/' + projetoSelecionado} 
        </div>
      </div>

      <div className='mostrar'>
        {opcaoSelecionadaMap[opcaoSelecionada] || <BemVindo />}
      </div>
    </div>
  )
}

export default QuadroMostrar