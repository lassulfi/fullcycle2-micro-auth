import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from '../../../../reportWebVitals';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import theme from '../../../../theme';
import Layout from '../../components/Layout';

declare const obj: { loginTitle: string };

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Layout loginTitle={obj.loginTitle}>
                Ola Mundo Material UI
            </Layout>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
