import WtchWaitAndMove from '../Page/wtchWaitAndMove.page';
describe('prime link to wait and move', () => {
    before(async() => {
        await WtchWaitAndMove.open();
    });
it('should wait and move to the next page', async () => {
   await WtchWaitAndMove.primelink.moveTo();
    //await WtchWaitAndMove.primelink.click();
    await WtchWaitAndMove.joinlink.click();
    
});
});