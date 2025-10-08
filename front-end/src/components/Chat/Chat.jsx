import "./Chat.css";
import Greeting from "../../components/Greeting/Greeting.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

export default function Chat() {
    return(
        <main className="chat">
            <div className="chat-wrap">
                <Greeting /> 
                <SearchBar />
            </div>
        </main>
    );
}