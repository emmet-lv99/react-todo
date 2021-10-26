// import logo from './logo.svg';
import './App.css';
import styled, {createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/TodoTemplate'

function App() {
  return (
    <div>
      <GlobalStyle />
      <TodoTemplate />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #425364
  }
  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
  }
`;

export default App;
