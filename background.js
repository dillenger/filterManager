function klickaktion() {
  browser.filterManagerApi.filterManager();
}
browser.browserAction.onClicked.addListener(klickaktion);
