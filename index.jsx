
import { jsx } from 'theme-ui';

import * as React from 'react';
import { render } from 'react-dom';
import { Zenith } from '@infotrack/zenith-ui';
import * as styles from './index.style';

const App = ()=>{
    return (
        <React.StrictMode>
    <Zenith theme={{
        colors:{
            "primary-100": "#0000ff"
        }
    }}>
        <div sx={styles.IndexStyles}>Hello React</div>
    </Zenith>
    </React.StrictMode>
    )
}

render(<App/>,document.body);