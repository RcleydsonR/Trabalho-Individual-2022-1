import { render, screen } from '@testing-library/react';
import App from './App';

it('renders app top bar', () => {
  render(<App />);
  const bibliotecaHeaderElement = screen.getByText("Biblioteca");
  const perfilHeaderElement = screen.getByText("Perfil");
  const registroHeaderElement = screen.getByText("Registro");
  const loginHeaderElement = screen.getByText("Login");
  expect(bibliotecaHeaderElement).toBeInTheDocument();
  expect(perfilHeaderElement).toBeInTheDocument();
  expect(registroHeaderElement).toBeInTheDocument();
  expect(loginHeaderElement).toBeInTheDocument();
});
