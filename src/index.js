import React, { useState } from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEnMessages from "./locales/en";
import localeEsMessages from "./locales/es";

import JobsList from "./components/jobslist";

const language = navigator.language || navigator.userLangiage;
let langStr = 'en'
let messages = ''
if (language.includes('es')) {
    langStr  = 'es-ES'
    messages = localeEsMessages
}
  

ReactDOM.render(
    <IntlProvider locale={langStr} messages={messages}>
        <div className='root'>
            <JobsList/>

        </div>
    </IntlProvider>, document.getElementById("root")
);