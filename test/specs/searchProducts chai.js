import {expect as chaiExpect} from 'chai';
describe('To validate the element', () => {
    before(() => {
        browser.url("https://www.ebay.com/");
    });
    
    after(()=>{
        console.log('test case complet');
    });
   
        it('should Launch ecommerce site', async () => {
        expect(browser).toHaveUrl("https://www.ebay.com/");

        //'should set value for a certain element'
        const txtSearchBox = await $('//input[@class="gh-tb ui-autocomplete-input"]');
        await txtSearchBox.waitForClickable({timeout:1000});
        await txtSearchBox.setValue('Watches');   


        //should click the search btn
        const searchbtn = ('//input[@class="btn btn-prim gh-spr"]');    
        await $(searchbtn).click(); 
        
        //should verify the title
        expect(browser).toHaveTitle('watches | eBay');

        //should click on any product
        const clickproduct = ('//h3[@class="s-item__title"]');    
        await $(clickproduct).click(); 

        await browser.pause(3000);
        let tabs = await browser.getWindowHandles();
        console.log(tabs);
        await browser.switchToWindow(tabs[1]);
        

         //should get and print the value
        //expect(browser).toHaveUrlContaining("https://www.ebay.com/itm/202842407175?/"); 
        const lblDesc = await $('#itemTitle');
        await lblDesc.waitForDisplayed({timeout:5000});
        const value =  await lblDesc.getText();
        browser.pause(1000);
        console.log(value);
        chaiExpect(value).to.equal("Mens Dual Time Automatic Mechanical Watch Rose Gold Black Dial Black Leather");
          
        });
  
    
    });


