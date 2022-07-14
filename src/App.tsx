import { Switch } from "@mui/material";
import { OptionCard } from "./components/OptionCard";
import checkMark from "./images/icon-check.svg";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <h1 className="main-h1">Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30 day trial. No credit card required</p>
      </div>
      <div className="white-box">
        <OptionCard />
        <div className="monthly-billing">
          <p>Monthly Billing</p>
          <Switch />
          <p>Yearly billing</p>
          <p className="discount">25% discount</p>
        </div>
        <div className="trial">
          <div>
            <p>
              <img src={checkMark} alt="chck" className="check-mark" />
              Unlimited Websites
            </p>
            <p>
              <img src={checkMark} alt="chck" className="check-mark" />
              100% data ownershp
            </p>
            <p>
              <img src={checkMark} alt="chck" className="check-mark" />
              Email reports
            </p>
          </div>
          <button>Start my trial</button>
        </div>
      </div>
    </div>
  );
};

export default App;
