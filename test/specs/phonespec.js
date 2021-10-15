import Phonepage from '../Page/Phonepage.page';

describe('Watches Page', () =>{
    before( async() => {
        //browser.url('https://www.amazon.in/ref=c');
        await Phonepage.open(); 
        
    });
    
     it('should go to the watch page', async() =>{
         
        //const categorieslist = $('//*[@id="nav-hamburger-menu"]/span');
        //expect(categorieslist).toBeDisplayed();
        await browser.pause(3000);
        await Phonepage.categorieslist.waitForExist({timeout:5000});
        await Phonepage.categorieslist.toBeDisplayed();
        await Phonepage.categorieslist.click();
        await browser.pause(1000);
        await Phonepage.getwomensfasionListText();
       // const womensfasion = await $('//*[@id="hmenu-content"]/ul[1]/li[18]/a');
        //phonepage.womensfasion.scrollIntoView();
        //await phonepage.womensfasion.click();
       
        //const wtchs = await $('//*[@id="hmenu-content"]/ul[11]/li[10]/a');
        await Phonepage.wtchs.click();
       
        //const clksearchbox = await $('//*[@id="twotabsearchtextbox"]');
        await Phonepage.clksearchbox.setValue('smartWatches');
        
    });
});