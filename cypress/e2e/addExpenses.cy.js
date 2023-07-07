describe('Fabrique test1', () => {
   beforeEach(() => {
       cy.viewport(1280, 720)
       cy.visit('https://fabrique:fabrique@finance.dev.fabrique.studio/accounts/login/')
       cy.get("[type='email']").type('admin@admin.ad')
       cy.get("[type='password']").type('admin')
       cy.get("[type='submit']").click()
   })
   it('ТС1 Добавление статьи расходов', {
    "defaultCommandTimeout": 5000
}, () => {
       cy.xpath("(//div[@class='side__label'][contains(text(),'Статьи расходов')])[1]").click()
       cy.wait(3000)
       cy.xpath("(//button[@class='button button--size-sm button--is-centered button--state-filled'])[1]").click()
       cy.wait(2000)//выхода не было интернет походу медленный у меня
       cy.xpath("(//input[@type='text'])[1]").type("уменьш123")
       cy.xpath("(//div[@class='checkbox__content'])[2]").click()
       cy.xpath("(//textarea[@type='textarea'])[1]").type("opisaniye")
       cy.xpath("(//button[@type='submit'])[1]").click()
   })
})