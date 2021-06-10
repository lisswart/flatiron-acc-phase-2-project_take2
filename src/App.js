import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import FlashCardsContainer from "./Components/FlashCards/FlashCardsContainer";
import DictionaryContainer from "./Components/Dictionary/DictionaryContainer";
import HangmanContainer from "./Components/Hangman/HangmanContainer";
import FlashCardOnView from "./Components/FlashCards/FlashCardOnView";

function App() {
  return (
    <div id="page-container">
      <div id="content-wrapper">
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>          
          <Route path="/flashcards">
            <FlashCardsContainer />
          </Route>
          <Route path="/dictionary">
            <DictionaryContainer />
          </Route>
          <Route path="/hangman">
            <HangmanContainer />
          </Route>
          <Route exact path={"/words/:id"}>
            <FlashCardOnView />
          </Route>
          <Route path="*">
            <div style={{display: "flex", 
                          justifyContent: "center", 
                          alignItems: "center", 
                          backgroundColor: "inherit", 
                          color: "moccasin", 
                          fontSize: "3em", 
                          paddingTop: "3em", 
                          paddingBottom: "3em"}}
                          >
                            404 Path Not Found  ...(*￣０￣)ノ
            </div>
            <img src="https://images.unsplash.com/photo-1574390353491-92705370c72e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1426&q=80" 
                  alt="maze"
                  style={{maxWidth: "100%"}} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
