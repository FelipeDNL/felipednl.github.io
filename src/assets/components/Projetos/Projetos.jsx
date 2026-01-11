import { Suspense, lazy } from 'react'

const Readme = lazy(() => import('../Paginas/PaginasProjetos/ReadmeProjetos'));
const SitePessoal = lazy(() => import('../Paginas/PaginasProjetos/SitePessoal'));
const AlgoritmosAestrela = lazy(() => import('../Paginas/PaginasProjetos/AlgoritmosAestrela'));
const ChatCriptografado = lazy(() => import('../Paginas/PaginasProjetos/ChatCriptografado'));
const RestauranteNodeExpressMysql = lazy(() => import('../Paginas/PaginasProjetos/RestauranteNodeExpressMysql'));
const RestauranteReact = lazy(() => import('../Paginas/PaginasProjetos/RestauranteReact'));
const EmprestimosLivrosMysql = lazy(() => import('../Paginas/PaginasProjetos/EmprestimosLivrosMysql'));
const LivrosReactNativeFirebase = lazy(() => import('../Paginas/PaginasProjetos/LivrosReactNativeFirebase'));
const RepresentacaoKMeans = lazy(() => import('../Paginas/PaginasProjetos/RepresentacaoKMeans'));
const SistemaBancarioNewbankPdf = lazy(() => import('../Paginas/PaginasProjetos/SistemaBancarioNewbankPdf'));
const SistemaBancarioTestesUnitarios = lazy(() => import('../Paginas/PaginasProjetos/SistemaBancarioTestesUnitarios'));
const TccSitePesquisasEnadePoscomp = lazy(() => import('../Paginas/PaginasProjetos/TccSitePesquisasEnadePoscomp'));
const Felipednl_github_io = lazy(() => import('../Paginas/PaginasProjetos/Felipednl_github_io'));
const AngularCRUDapp = lazy(() => import('../Paginas/PaginasProjetos/AngularCRUDapp'));
const WebStyleVue = lazy(() => import('../Paginas/PaginasProjetos/WebStyleVue'));
const Fjobs = lazy(() => import('../Paginas/PaginasProjetos/fjobs'));
const TesteTecnicoUeek = lazy(() => import('../Paginas/PaginasProjetos/TesteTecnicoUeek'));

function Projetos({ projetoSelecionado }) {

  const projetosMap = {
    'README.md': <Readme />,
    'site-pessoal-v1': <SitePessoal />,
    'algoritmo-buscas-aprofundamento-iterativo-Aestrela': <AlgoritmosAestrela />,
    'chat-multicast-criptografado': <ChatCriptografado />,
    'felipednl.github.io': <Felipednl_github_io />,
    'gerenciador-restaurante-node-express-mysql': <RestauranteNodeExpressMysql />,
    'gerenciador-restaurante-react': <RestauranteReact />,
    'gerenciamento-emprestimos-livros-mysql': <EmprestimosLivrosMysql />,
    'listagem-livros-react-native-firebase': <LivrosReactNativeFirebase />,
    'representacao-kMeans': <RepresentacaoKMeans />,
    'sistema-bancario-newbank-pdf': <SistemaBancarioNewbankPdf />,
    'sistema-bancario-testes-unitarios': <SistemaBancarioTestesUnitarios />,
    'tcc-site-pesquisas-enade-poscomp': <TccSitePesquisasEnadePoscomp />,
    'angular-crud-app': <AngularCRUDapp />,
    'web-style-vue': <WebStyleVue />,
    'f-jobs': <Fjobs />,
    'tecnico-lp-ueek': <TesteTecnicoUeek />
  }

  return (
    <div className='container-projetos'>

      <div className='opcoes-projetos'>

        <Suspense fallback={<div>Loading...</div>}>
          {projetosMap[projetoSelecionado] || <Readme />}
        </Suspense>

      </div>

    </div>
  )
}

export default Projetos