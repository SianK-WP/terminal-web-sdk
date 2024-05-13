import './App.css';
import PaymentForm from "./components/PaymentForm";
import CustomerInfo from "./components/CustomerInfo";
import CurrentBasket from "./components/CurrentBasket";
import {Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Header from "./components/Header";

function App() {
  return (
      <div className="MerchantApp">
        <Header />
        <div className="body">
          <Row>
            <Col className="col-1" xs="6">
              <CustomerInfo />
            </Col>
            <Col className="col-5" xs="4">
              <CurrentBasket />
            </Col>
          </Row>
          <Row className="col-5" xs="1">
              <PaymentForm />
          </Row>
        </div>
      </div>
  );
}

export default App;
