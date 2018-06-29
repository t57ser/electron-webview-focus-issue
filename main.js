const {app, BrowserWindow} = require("electron");
let browserWindow;

const init = () => {
	browserWindow = new BrowserWindow({
		width: 800,
		height: 600,
	});
	browserWindow.loadFile("index.html");
	browserWindow.on("closed", () => {
		browserWindow = null
	});
};

app.on("ready", init);
app.on("window-all-closed", function () {
	app.quit()
});
