import report from "@wdio/allure-reporter"
class Windows {
    get selectFrameAndWindows() { return $('//a[text()="Frames and Windows"]') }
    get frameAndWindowsHeading() { return $('//h1[text()="Frames And Windows "]') }
    get selectNewWindow() { return $('//a[text()="Open Seprate New Window"]') }
    get openNewWindow() { return $('//a[text()="Open New Seprate Window"]') }
    get NewBrowserTab() { return $('.farme_window>p>a') }
    get iframeElement() { return $('//iframe[@src="frames-windows/defult2.html"]') }
    async clickOnFrameAndWindows() {
        await this.selectFrameAndWindows.click()
        report.addStep(`Click on Frame and Windows : ${await this.selectFrameAndWindows.selector}`)
    }
    async clickOnNewWindow() {
        await this.selectNewWindow.click()
        report.addStep(`Click on New Window : ${await this.selectNewWindow.selector}`)
    }
    async clickOnOpenNewSeparateWindow() {
        await this.openNewWindow.click()
        report.addStep(`Click on New Window : ${await this.openNewWindow.selector}`)
    }
    async navigateToNewWindow() {
        const newtab = await browser.getWindowHandles()
        await browser.switchToWindow(newtab[3])
    }
}
export default new Windows()