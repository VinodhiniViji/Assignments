describe('To validate title and url of the browser', () => {
   
    before(()=>{
        browser.url('https://www.netflix.com/in/login/');
    });

    after(()=>{
        console.log('test case complet');
    });
    
    it('should have the complete url',() => {
        expect(browser).toHaveUrl('https://www.netflix.com/in/login');
    });
    
    
    it('should have the correct urlContaining',() => {
       expect(browser).toHaveUrlContaining('netflix');
    });
    
    
    it('should have the correct tittle',() => {
          expect(browser).toHaveTitle('Netflix');
    });
    
    it('should have the correct tittleContaining',() => {
       expect(browser).toHaveTitleContaining('Net');
    });
});
