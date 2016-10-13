import {h, render, React, Component} from 'preact';
import ReCAPTCHA from 'react-google-recaptcha';

class App extends Component {

  render({ }, { text, response }) {
    return (<div>

      <h1>Captcha</h1>

      <input type='text' value={text} onInput={this.linkState('text')} /> [{text}]

      <div>response={response}</div>

      <ReCAPTCHA
        sitekey="6Lc2lQgUAAAAAF5AQsxZlCt7o4mxbn6Zpq8oG-bk"
        onChange={ this.linkState('response') }
      />

    </div>)
  }
}


render(<div><App/></div>, document.body)
