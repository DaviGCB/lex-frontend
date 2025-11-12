import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './utils/ProtectedRoute';
import './App.css';

// Importações de Páginas
import DashboardHomePage from './pages/DashboardHomePage';
import ClienteListPage from './pages/clientes/ClienteListPage';
import ClienteFormPage from './pages/clientes/ClienteFormPage';
import ProcessoListPage from './pages/processos/ProcessoListPage';
import ProcessoFormPage from './pages/processos/ProcessoFormPage';

// 1. IMPORTE A NOVA PÁGINA DE DETALHES
import ProcessoDetalhePage from './pages/processos/ProcessoDetalhePage';

function App() {
  return (
    <Routes>
      {/* Rotas Públicas */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registrar" element={<RegisterPage />} />
      <Route path="/" element={<LoginPage />} />
      
      {/* Rota Protegida (Pai) */}
      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route element={<DashboardPage />}> 
          
          <Route index element={<DashboardHomePage />} />
          <Route path="clientes" element={<ClienteListPage />} />
          <Route path="clientes/novo" element={<ClienteFormPage />} />
          <Route path="clientes/editar/:id" element={<ClienteFormPage />} />
          
          <Route path="processos" element={<ProcessoListPage />} />
          <Route path="processos/novo" element={<ProcessoFormPage />} />
          <Route path="processos/editar/:id" element={<ProcessoFormPage />} />
          
          {/* 2. ADICIONE A NOVA ROTA DE DETALHES */}
          <Route path="processos/detalhe/:id" element={<ProcessoDetalhePage />} />
        
        </Route>
      </Route>

    </Routes>
  );
}

export default App;