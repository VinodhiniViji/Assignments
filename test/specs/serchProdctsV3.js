import SearchPage from '../Page/searchPage.page';
import {expect as chaiExpect} from 'chai';

describe('To validate the element', () => {
    before(() => {
        SearchPage.open();
    });
    
    after(()=>{
        console.log('test case complet');
    });
   
        it('should Launch ecommerce site', async () => {
        expect(browser).toHaveUrl("https://www.ebay.com/");

        //'should set value for a certain element'
        await SearchPage.txtSearchBox.waitForClickable({timeout:1000});
        await SearchPage.txtSearchBox.setValue('Watches');   

        //should click the search btn
         await SearchPage.searchbtn.click();
        
        //should verify the title
        expect(browser).toHaveTitle('watches | eBay');

        //should click on any product
        await SearchPage.clickproduct.click(); 

        await browser.pause(3000);
        let tabs = await browser.getWindowHandles();
        console.log(tabs);
        await browser.switchToWindow(tabs[1]);
         //should get and print the value
        //expect(browser).toHaveUrlContaining("https://www.ebay.com/itm/202842407175?/"); 
      
        SearchPage.lblDesc.waitForDisplayed({timeout:5000});
        const value =  await SearchPage.lblDesc.getText();
        browser.pause(1000);
        console.log(value);          
        });
  
    
    });


