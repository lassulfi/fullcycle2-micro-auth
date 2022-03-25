import Keycloak from "keycloak-connect";
import { Builder, Capabilities } from "selenium-webdriver";
import session from "express-session";
import { v4 as uuidv4 } from "uuid";

test("validate codeflix theme", async () => {
    const capabilities = Capabilities.chrome();
    capabilities.set("goog:chromeOptions", {
        args: [
            "--disable-gpu",
            "--headless",
            "--window-size=800,600",
            "--enable-javascript",
            "--disable-extensions",
            "--disable-dev-shm-usage",
            "--no-proxy-server",
            "--proxy-server='direct://'",
            "--proxy-bypass-list=*",
            "--no-sandbox",
        ]
    });
    const driver = await new Builder()
                        .forBrowser("chrome")
                        .withCapabilities(capabilities)
                        .usingServer("http://selenium:4444/wd/hub")
                        .build();   
    const memoryStore = new session.MemoryStore();               
    const keycloak = new Keycloak({store: memoryStore}, {
        realm: "test",
        resource: "codeflix-client",
        "auth-server-url": "http://app.test:8080/auth/",
        "ssl-required": "external",
        "confidential-port": 0
    });
    
    const loginUrl = keycloak.loginUrl(uuidv4(),'http://localhost:8000');
    console.log(loginUrl);
});