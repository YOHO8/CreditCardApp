import React, { useState } from 'react';
import './App.css';

interface CardForm {
    cardNumber: string;
    cvc: string;
    expires: string;
}

const App: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showCardForm, setShowCardForm] = useState(false);
    const [cardForm, setCardForm] = useState<CardForm>({
        cardNumber: '',
        cvc: '',
        expires: '',
    });
    const [formValid, setFormValid] = useState(false);

    const handleBurgerClick = () => {
        setShowMenu(!showMenu);
    };

    const handleBackClick = () => {
        setShowCardForm(false);
    };

    const handleCardFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(cardForm);
    };

    const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCardForm({
            ...cardForm,
            [name]: value,
        });
    };

    const validateCardForm = () => {
        const { cardNumber, cvc, expires } = cardForm;
        setFormValid(
            cardNumber.length === 16 && cvc.length === 3 && Date.parse(expires) > Date.now()
        );
    };

    return (
        <div className="App">
            <div className="navbar">
                <div className="burger" onClick={handleBurgerClick}>
                    <div className="burger-line" />
                    <div className="burger-line" />
                    <div className="burger-line" />
                </div>
                <div className="navbar-title">My Webpage</div>
            </div>

            {showMenu && (
                <div className="menu">
                    <ul>
                        <li>Menu Item 1</li>
                        <li>Menu Item 2</li>
                        <li>Menu Item 3</li>
                    </ul>
                </div>
            )}

            {!showCardForm && (
                <div className="content">
                    <h1>Welcome to My Webpage</h1>
                    <button onClick={() => setShowCardForm(true)}>Register</button>
                </div>
            )}

            {showCardForm && (
                <div className="content">
                    <h1>Register Card</h1>
                    <form onSubmit={handleCardFormSubmit}>
                        <label>
                            Card Number
                            <input
                                type="text"
                                name="cardNumber"
                                value={cardForm.cardNumber}
                                onChange={handleCardInputChange}
                                onBlur={validateCardForm}
                            />
                        </label>
                        <label>
                            CVC
                            <input
                                type="text"
                                name="cvc"
                                value={cardForm.cvc}
                                onChange={handleCardInputChange}
                                onBlur={validateCardForm}
                            />
                        </label>
                        <label>
                            Expires
                            <input
                                type="text"
                                name="expires"
                                value={cardForm.expires}
                                onChange={handleCardInputChange}
                                onBlur={validateCardForm}
                            />
                        </label>
                        <button type="submit" disabled={!formValid}>
                            Submit
                        </button>
                    </form>
                    <button onClick={handleBackClick}>Back</button>
                </div>
            )}
        </div>
    );
};

export default App;