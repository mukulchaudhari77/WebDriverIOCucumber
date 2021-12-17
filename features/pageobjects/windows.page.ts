import report from "@wdio/allure-reporter"
class Windows {
    get clickOnFrameAndWindows() { return $('//a[text()="Frames and Windows"]') }
    get frameAndWindowsHeading() { return $('//h1[text()="Frames And Windows "]') }
    get clickOnNewWindow() { return $('//a[text()="Open Seprate New Window"]') }
    get openNewWindow() { return $('//a[text()="Open New Seprate Window"]') }
    get NewBrowserTab() { return $('.farme_window>p>a') }
    get iframeElement() { return $('//iframe[@src="frames-windows/defult2.html"]') }
    async clickFrameAndWindows() {
        await this.clickOnFrameAndWindows.click()
        report.addStep(`Click on Frame and Windows : ${await this.clickOnFrameAndWindows.selector}`)
    }
    async clickNewWindow() {
        await this.clickOnNewWindow.click()
        report.addStep(`Click on New Window : ${await this.clickOnNewWindow.selector}`)
    }
    async clickOpenNewSeparateWindow() {
        await this.openNewWindow.click()
        report.addStep(`Click on New Window : ${await this.openNewWindow.selector}`)
    }
    async navigateToNewWindow() {
        const newtab = await browser.getWindowHandles()
        await browser.switchToWindow(newtab[3])
    }
}
export default new Windows()