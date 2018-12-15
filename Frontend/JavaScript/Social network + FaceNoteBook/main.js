function startupWebpage() {
    var network = new FaceNotebook();
    var page = new PageRenderer(network.users[0]);
    page.renderAll();
}

startupWebpage();