import page from '../Page/Page'
class WtchWaitAndMove extends page
{
open()
{
super.open("https://www.amazon.in");
}
get primelink()
{
    return $('//a[@href="/prime?ref_=nav_cs_primelink_nonmember_2860122b63884a8688052dc445e46bd9"]');
}
get joinlink()
{
  return $('//img[@id="multiasins-img-link"]');
}
}
export default new WtchWaitAndMove();