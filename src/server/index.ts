// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

figma.showUI(__html__, { themeColors: true });
figma.ui.resize(800, 800);
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {

  const { action, payload } = msg;
  switch (action) {
  }

};



figma.loadAllPagesAsync().then(_ => {

  figma.on("documentchange", ({ documentChanges }) => {

  });
})






