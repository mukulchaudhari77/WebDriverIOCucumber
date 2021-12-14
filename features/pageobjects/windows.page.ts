class Windows {
    get clickOnFrameAndWindows() { return $('//a[text()="Frames and Windows"]') }
    get frameAndWindowsHeading() { return $('//h1[text()="Frames And Windows "]') }
    get clickOnNewBrowserTab() { return $('//a[text()="New Browser Tab"]') }
    get NewBrowserTab() { return $('//a[text()="New Browser Tab"]') }

}
export default new Windows()