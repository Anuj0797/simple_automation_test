Feature('autopractice');

Scenario('test something', ({ I }) => {
    I.amOnPage('/');
    I.click('Contact us');
    I.selectOption({css: 'select[id=id_contact]'},"Webmaster")
    I.fillField({css: 'input[id=email]'}, 'Anuj@Anuj.com');
    I.fillField({css: 'input[id=id_order]'}, '928464');
    I.fillField({css: 'textarea[id=message]'}, 'Hello this just a test to check the form');
    // I.attachFile('/html[1]/body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/form[1]/fieldset[1]/div[1]/div[1]/p[5]/div[1]/span[1]', 'MyFirstAutomation/data.jpg');
    I.click('Send');
    I.saveScreenshot("selectoptions.jpg");
    I.wait(20);
    // I.fillField('input', 'Anuj');
    // I.click('body.index.hide-left-column.hide-right-column.lang_en:nth-child(2) div.header-container div.container div.row div.col-sm-4.clearfix:nth-child(2) form:nth-child(1) > button.btn.btn-default.button-search:nth-child(5)');
    // I.click('Subject Heading');
    // // await page.select('#Subject Heading', 'Customer service');
    // I.click('body.contact.hide-left-column.hide-right-column.lang_en:nth-child(2) div.columns-container div.container div.row:nth-child(3) div.center_column.col-xs-12.col-sm-12 form.contact-form-box div.clearfix div.col-xs-12.col-md-3:nth-child(1) div.form-group.selector1:nth-child(1) div.selector:nth-child(2) > span:nth-child(1)');
    // I.pressKey('ArrowDown');
    // I.pressKey('ArrowDown');
});
