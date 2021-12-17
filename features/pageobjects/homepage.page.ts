class Homepage {
    async homePageLink() { await browser.url("https://www.way2automation.com/demo.html"); }
    async openWebsite() {
        await this.homePageLink()
        await browser.maximizeWindow()
    }
}
export default new Homepage();