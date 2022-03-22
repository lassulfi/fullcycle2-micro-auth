import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from '../../../../reportWebVitals';
import { Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, MuiThemeProvider, TextField } from '@material-ui/core';
import theme from '../../../../theme';
import Layout, { LayoutProps } from '../../components/Layout';

declare const layoutProps: LayoutProps;
declare const pageProps: LoginPageProps;

interface LoginPageProps {
    loginEnabled: boolean;
    loginAction: string;
    usernameEditDisabled: boolean;
    usernameLabel: string;
    usernameValue: string;
    passwordLabel: string;
    enabledRememberMe: boolean;
    enabledLoginRememberMe?: boolean;
    rememberMeLabel: string;
    resetPasswordAllowed: boolean;
    resetPasswordUrl: string;
    resetPasswordLabel: string;
}

const LoginPage: React.FunctionComponent<LoginPageProps> = (props) => {
    const {
        loginEnabled,
        loginAction,
        usernameEditDisabled,
        usernameLabel,
        usernameValue,
        passwordLabel,
        enabledRememberMe,
        enabledLoginRememberMe,
        rememberMeLabel,
        resetPasswordAllowed,
        resetPasswordUrl,
        resetPasswordLabel,
    } = props;

    return (
        <Box padding={2}>
            {!loginEnabled && <div>Login não habilitado. Entre em contato com o administrador</div>}
            <Grid container spacing={3} justify="space-evenly">
                <Grid item>
                    <form action={loginAction} method="post">
                        <TextField
                            id="username"
                            name="username"
                            fullWidth
                            label={usernameLabel}
                            variant="outlined"
                            defaultValue={usernameValue}
                            autoFocus
                            autoComplete="off"
                            disabled={usernameEditDisabled}
                        />
                        <TextField
                            id="password"
                            name="password"
                            type="password"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            autoComplete="off"
                            label={passwordLabel}
                        />
                        <Grid
                            container
                            alignItems="center"
                        >
                            {enabledRememberMe && !usernameEditDisabled && (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="remeberMe"
                                            checked={enabledLoginRememberMe}
                                        />
                                    }
                                    label={rememberMeLabel}
                                />
                            )}
                            {resetPasswordAllowed && (<Link
                                href={resetPasswordUrl}
                                color="secondary"
                            >
                                {resetPasswordLabel}
                            </Link>)}
                        </Grid>
                        <Grid container>
                            <Grid item xs={7}>
                                <div>
                                    <Link
                                        href="#"
                                        color="secondary"
                                    >
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item xs={5}>
                                <input
                                    type="hidden"
                                    id="id-hidden-input"
                                    name="credentialId"
                                />
                                <Button
                                    type="submit"
                                    color="secondary"
                                    variant="outlined"
                                >
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Box>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Layout {...layoutProps}>
                <LoginPage {...pageProps} />
            </Layout>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
