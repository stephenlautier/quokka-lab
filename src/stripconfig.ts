const state = "{&q;odin.startupContext&q;:{&q;isDebug&q;:true,&q;appInfo&q;:{&q;name&q;:&q;odin.asgard.client&q;,&q;shortName&q;:&q;asgard&q;,&q;productName&q;:&q;odin&q;,&q;clusterGroup&q;:&q;&q;,&q;infraClusterId&q;:&q;&q;,&q;clusteredName&q;:&q;odin.asgard.client-local&q;,&q;clusterId&q;:&q;odin.asgard.client-local.v0.0.0&q;,&q;serviceId&q;:&q;odin.asgard.client-local.v0.0&q;,&q;environment&q;:&q;local&q;,&q;gitCommit&q;:&q;-&q;,&q;version&q;:&q;0.0&q;,&q;serviceType&q;:&q;app&q;,&q;odinCoreVersion&q;:&q;1.0.0.0&q;},&q;appConfig&q;:{&q;shared&q;:{&q;language&q;:{&q;hideDefaultLanguageRoute&q;:false,&q;defaultLocale&q;:&q;en-GB&q;,&q;languages&q;:[{&q;languageCode&q;:&q;en&q;,&q;locale&q;:&q;en-GB&q;,&q;countryCode&q;:&q;gb&q;},{&q;languageCode&q;:&q;fr&q;,&q;locale&q;:&q;fr&q;,&q;countryCode&q;:&q;fr&q;}]}},&q;core&q;:{&q;localizeRouting&q;:{&q;hideDefaultLanguageRoute&q;:false,&q;localeSlugMap&q;:{&q;en-GB&q;:&q;en&q;}},&q;logging&q;:{&q;raven&q;:{},&q;remoteLogging&q;:{&q;enabled&q;:false}},&q;documentMeta&q;:{&q;titleTemplate&q;:&q;{title} - Asgard&q;}},&q;identityServer&q;:{&q;url&q;:&q;https://heimdall.test-mw.nightking.dev/v1&q;,&q;clientId&q;:&q;asgard.client&q;,&q;scope&q;:&q;openid profile email&q;}},&q;appServerConfig&q;:{&q;gtm&q;:null,&q;zendesk&q;:null},&q;isDev&q;:true,&q;isDockerized&q;:false,&q;deviceType&q;:&q;desktop&q;,&q;remoteIp&q;:null,&q;trustedSourceKey&q;:null,&q;countryCode&q;:null,&q;localeInfo&q;:{&q;languageCode&q;:&q;en&q;,&q;locale&q;:&q;en-GB&q;,&q;countryCode&q;:&q;gb&q;},&q;defaultLocaleInfo&q;:{&q;languageCode&q;:&q;en&q;,&q;locale&q;:&q;en-GB&q;,&q;countryCode&q;:&q;gb&q;},&q;localizedOrigin&q;:&q;http://localhost:2300/en/&q;,&q;origin&q;:&q;http://localhost:2300/&q;,&q;languagePath&q;:&q;en/&q;,&q;clientBuildMode&q;:&q;dev&q;,&q;virtualPath&q;:&q;/&q;,&q;correlationId&q;:&q;0HM3VBBVOL9IB:00000002&q;}}";

const r = state.replace(new RegExp(`${"&q;"}`, "g"), "\"");
const j = JSON.parse(r);
j;
const cfg = j['odin.startupContext'].appConfig;
cfg;