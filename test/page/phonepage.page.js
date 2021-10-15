import page from '../Page/Page'
class Phonepage extends page
{
    open()
    {
super.open("https://www.amazon.in/ref=c");
    }
    get categorieslist()
    {
 return $('//*[@id="nav-hamburger-menu"]/span/parent::a');
    }
    get womensfasion()
    {
return $$('//*[@id="hmenu-content"]/ul[1]/li/div');
    }
    get wtchs()
    {
return $('//*[@id="hmenu-content"]/ul[11]/li[10]/a');
    }
    get clksearchbox()
    {
return $('//*[@id="twotabsearchtextbox"]');
    }

 getwomensfasionListText() 
    {
       return this.womensfasion.map(async(element) => {
        console.log(await element.getValue());
       });
       
    }
}
export default new Phonepage();






