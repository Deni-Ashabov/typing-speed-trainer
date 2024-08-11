import { Provider } from 'react-redux';
import store from './app/store';
import { Container, Title } from './App.styled';
import MainContent from './components/MainContent/MainContent';

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Title>Typing Speed Trainer</Title>
        <MainContent />
      </Container>
    </Provider>
  );
};

export default App;
