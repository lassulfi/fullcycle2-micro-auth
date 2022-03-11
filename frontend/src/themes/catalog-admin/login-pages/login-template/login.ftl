<#import "layout.ftl" as layout>
<@layout.registrationLayout title=msg("doLogIn"); section>
    <#if section = 'scripts'>
        <%= htmlWebpackPlugin.tags.bodyTags %>
    </#if>
</@layout.registrationLayout>