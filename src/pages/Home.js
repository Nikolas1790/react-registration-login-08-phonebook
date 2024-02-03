import { LogInHomePage } from "components/App.styled";

const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
      marginBottom: 20, 
    },
  };
  
  export default function Home() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>
          Welcome to Phonebook
        </h1>
        <div>
        <LogInHomePage to="/login" title="Try it now!">
          Log In
        </LogInHomePage>
        </div>
      </div>
    );
  }
  