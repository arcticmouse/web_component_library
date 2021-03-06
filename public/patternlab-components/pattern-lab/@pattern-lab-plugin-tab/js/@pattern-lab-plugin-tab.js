// workaround to `PluginTab undefined` error in Safari
window.PluginTab = {
  /**
   * The function defined as the onready callback within the plugin configuration.
   */
  init: function() {
    //placeholder that will be replaced during configuation
    //most plugins could probably just implement logic here instead.
    function addPanels() {
      window.patternlab.panels.add({
  id: 'sg-panel-scss',
  name: 'SCSS',
  default:
    window.config.defaultPatternInfoPanelCode &&
    window.config.defaultPatternInfoPanelCode === 'scss',
  templateID: 'pl-panel-template-code',
  httpRequest: true,
  httpRequestReplace: '.scss',
  httpRequestCompleted: false,
  prismHighlight: true,
  language: 'scss', //,
  /* TODO: We would need to find a way to enable keyCombo for multiple panels
  keyCombo: 'ctrl+shift+z',*/
});

window.patternlab.panels.add({
  id: 'sg-panel-js',
  name: 'JS',
  default:
    window.config.defaultPatternInfoPanelCode &&
    window.config.defaultPatternInfoPanelCode === 'js',
  templateID: 'pl-panel-template-code',
  httpRequest: true,
  httpRequestReplace: '.js',
  httpRequestCompleted: false,
  prismHighlight: true,
  language: 'js', //,
  /* TODO: We would need to find a way to enable keyCombo for multiple panels
  keyCombo: 'ctrl+shift+z',*/
});

window.patternlab.panels.add({
  id: 'sg-panel-info',
  name: 'INFO',
  default:
    window.config.defaultPatternInfoPanelCode &&
    window.config.defaultPatternInfoPanelCode === 'info',
  templateID: 'pl-panel-template-code',
  httpRequest: true,
  httpRequestReplace: '.info',
  httpRequestCompleted: false,
  prismHighlight: true,
  language: 'info', //,
  /* TODO: We would need to find a way to enable keyCombo for multiple panels
  keyCombo: 'ctrl+shift+z',*/
});


    }

    // workaround to try recovering from load order race conditions
    if (window.patternlab && window.patternlab.panels) {
      addPanels();
    } else {
      document.addEventListener('patternLab.pageLoad', addPanels);
    }
  },
};
