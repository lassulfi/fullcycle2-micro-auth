<#import "layout.ftl" as layout>
<@layout.registrationLayout ; section>
    <#if section = 'scripts'>
        <%= htmlWebpackPlugin.tags.bodyTags %>
    </#if>
</@layout.registrationLayout>