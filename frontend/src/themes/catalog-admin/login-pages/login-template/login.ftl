<#import "layout.ftl" as layout>
<@layout.registrationLayout title=msg("doLogIn"); section>
    <#if section = 'scripts'>
        <script type="text/javascript">
            var pageProps = {
                loginEnabled: ${realm.password?string},
                loginAction: "${url.loginAction?no_esc}",
                <#if usernameEditDisabled?>
                    usernameEditDisabled: true,
                <#else>
                    usernameEditDisabled: false,
                <#if>
                <#if !realm.loginWithEmailAllowed>
                    usernameLabel: "${msg("username")}",
                <#elseif !realm.registrationEmailAsUsername>
                    usernameLabel: "${msg("usernameOrEmail")}",
                <#else>
                    usernameLabel: "${msg("email")}",
                </#if>
                usernameValue: "${(login.username!'')}",
                passwordLabel: "${msg("password")}",
                enabledRememberMe: ${realm.rememberMe?string},
                <#if login.rememberMe??>
                    enabledLoginRememberMe: ${login.rememberMe?string},
                </#fi>
                rememberMeLabel: "${msg("rememberMe")}",
                resetPasswordAllowed: ${realm.resetPasswordAllowed?string},
                resetPasswordUrl: "${url.loginResetCredentialsUrl}",
                resetPasswordLabel: "${msg("doForgotPassword")}",
            };
        </script>
        <%= htmlWebpackPlugin.tags.bodyTags %>
    </#if>
</@layout.registrationLayout>