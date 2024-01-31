import React, { Component } from 'react';
import './FAQ.css';

class Add_Propertyfaq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleAccordion = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { question, answer } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="faq-container">
        <div className="faq-item" onClick={this.toggleAccordion}>
          <h3 className="faq-question">{question}</h3>
          <span className={`faq-icon ${isOpen ? 'open' : 'closed'}`}></span>
        </div>
        {isOpen && (
          <div className="faq-answer">
            <p>{answer}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Add_Propertyfaq;
