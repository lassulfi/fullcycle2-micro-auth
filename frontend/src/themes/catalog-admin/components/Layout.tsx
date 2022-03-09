import { Typography } from "@material-ui/core";

interface LayoutProps {
    loginTitle: string
}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    return (
        <Typography>{props.loginTitle}</Typography>
    );
}

export default Layout;