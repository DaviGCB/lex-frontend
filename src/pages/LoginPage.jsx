import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css'; // Vamos criar este CSS
import logo from '../assets/logo-lex.jpeg'; // Vamos adicionar o logo

function LoginPage() {
  // 1. Estados para guardar os dados do formulário
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  
  // 2. Hook de navegação para mudar de página
  const navigate = useNavigate();

  // 3. Função chamada quando o formulário é enviado
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    setError(''); // Limpa erros antigos

    try {
      // 4. FAZ A CHAMADA DE API (o "pedido" para a "cozinha")
      const response = await axios.post('http://localhost:3000/api/usuarios/login', {
        email: email,
        senha: senha,
      });

      // 5. Se deu certo:
      // Pega o "crachá" (token) e guarda no "porta-luvas" do navegador
      const token = response.data.token;
      localStorage.setItem('lex-token', token);
      
      // 6. Navega o usuário para a página de Dashboard
      navigate('/dashboard');

    } catch (err) {
      // 7. Se deu errado:
      console.error('Falha no login:', err);
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="login-page">
      <img src={logo} alt="Logo LEX" className="logo" />
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <input 
            type="password" 
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        {/* Mostra a mensagem de erro, se houver */}
        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="btn-primary">Entrar</button>
      </form>

      <div className="login-links">
        <Link to="/esqueci-senha">Esqueceu a senha?</Link>
        <Link to="/registrar">Criar nova conta</Link>
      </div>
    </div>
  );
}

export default LoginPage;