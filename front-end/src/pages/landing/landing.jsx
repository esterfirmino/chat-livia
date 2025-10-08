import "./landing.css";
import HelpButton from "../../components/HelpButton/HelpButton.jsx";
import Chat from "../../components/Chat/Chat.jsx";

export default function Landing() {
    return(
        <main className="landing">
            <div className="landing-wrap">
                <Chat />
                <HelpButton />
            </div>
        </main>
    );
}