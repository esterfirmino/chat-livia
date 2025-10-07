import "./landing.css";
import Greeting from "../../components/Greeting/Greeting.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import HelpButton from "../../components/HelpButton/HelpButton.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

export default function Landing() {
    return(
        <main className="landing">
            <div className="landing-wrap">
                <Logo />
                <Greeting /> 
                <SearchBar />
                <HelpButton />
            </div>
        </main>
    );
}