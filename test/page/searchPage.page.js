import Page from '../Page/Page';
class SearchPage extends Page
{ 
 get searchbtn()
 {
    return  $('//input[@class="btn btn-prim gh-spr"]'); 
 }
 get txtSearchBox()
 {
     return   $('//input[@class="gh-tb ui-autocomplete-input"]');
 }
 get clickproduct()
 {
    return  $ ('//h3[@class="s-item__title"]');
 }
 
 get lblDesc()
 {
  return  $('#itemTitle');
 }
 open()
 {
  super.open("https://www.ebay.com/");
  
 }
}

export default new SearchPage();