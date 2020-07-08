require('source-map-support').install()
import App from "./app";
const app = new App();
app.initConfig().then(() => app.listen());
