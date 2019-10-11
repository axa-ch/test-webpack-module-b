import React, { createElement } from 'react';
import './App.css';
import { addLocaleData, FormattedMessage, IntlProvider } from 'react-intl';
import messages from './messages';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import createAXARadioReact  from '@axa-ch/radio/lib/index.react';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      locale: 'de-CH',
      checkedDe: true,
      checkedEn: false 
    };
    addLocaleData([...en, ...de]);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      locale: event.target.value,
      checkedDe: !this.state.checkedDe,
      checkedEn: !this.state.checkedEn 
    });
  }

  render() {
    const AXAButtonRadio = createAXARadioReact(createElement);
    return (
      <>
        <AXAButtonRadio name="locale"
          label="Deutsch"
          value="de-CH"
          checked={this.state.checkedDe}
          onChange={this.handleChange}
        />
        <AXAButtonRadio name="locale"
          label="English"
          value="en-GB"
          checked={this.state.checkedEn}
          onChange={this.handleChange}
        />
        <IntlProvider locale={this.state.locale} messages={messages[this.state.locale]}>
          <div>
            <h1><FormattedMessage id="homepage.welcome"/></h1>
            <p><FormattedMessage id="homepage.message"/></p>
          </div>
        </IntlProvider>
      </>
    );
  }
}

export default App;
