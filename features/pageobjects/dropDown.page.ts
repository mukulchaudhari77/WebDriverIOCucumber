class Dropdown {
get hover(){return $('//a[text()="Dynamic Elements"]')}
get clickDropdown(){ return $('//a[text()="Dropdown"]')}
get dropdownHeading(){ return $('//h1[text()="Dropdown"]')}

get clickOnEnterCountry(){ return $('//ul[@class="responsive-tabs"]/li[2]/a')}
get clickOnPleaseenter(){return $('//select[@id="combobox"]')}
get selectOption(){return $('//select[@id="combobox"]/option[102]')}


}
export default new Dropdown();