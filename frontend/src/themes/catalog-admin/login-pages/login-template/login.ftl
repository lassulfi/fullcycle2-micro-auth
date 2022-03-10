<#import "layout.ftl" as layout>
<@layout.registrationLayout title=msg("doLogin"); section>
    <#if section = 'scripts'>
        <%= htmlWebpackPlugin.tags.bodyTags %>
    </#if>
</@layout.registrationLayout>