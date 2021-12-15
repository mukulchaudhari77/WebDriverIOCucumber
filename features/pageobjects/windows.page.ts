class Windows {
    get clickOnFrameAndWindows() { return $('//a[text()="Frames and Windows"]') }
    get frameAndWindowsHeading() { return $('//h1[text()="Frames And Windows "]') }
    get clickOnNewWindow() { return $('//a[text()="Open Seprate New Window"]') }
    get openNewWindow() { return $('//a[text()="Open New Seprate Window"]') }
    get NewBrowserTab() { return $('.farme_window>p>a') }
    get iframeElement() { return $('//iframe[@src="frames-windows/defult2.html"]') }

}
export default new Windows()