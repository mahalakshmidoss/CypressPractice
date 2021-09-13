/// <reference types ="Cypress"/>

describe('Test Library Application',()=>{
    it('Launch Library',()=>{
   
     cy.visit('https://catalog.phoenixpubliclibrary.org/logon.aspx')
     cy.get('#textboxBarcodeUsername').type('21730087033194')
     cy.get('input#textboxPassword').type('krishnadoss')
     cy.get('#buttonSubmit').click()
      
      // verify logged in user name
      cy.get('.my-record__account-view') 
      .should('be.visible')
      .and('contain','KRISHNADOSS, MAHALAKSHMI')
      
      // verify availability of 5 search links
      cy.get('.nav-panel__nav.expandable-block-nav')
      .find("a[href='#']")
      .should('have.length', 5)

      // search for a book
      cy.contains('Search').click()
      cy.contains('Quick Search').click()
      cy.get('input#textboxTerm').type('Henry Huggins')
      cy.get('.btn > .glyphicon').click()
      cy.get('#searchResults')
      .should('be.visible')

      // dropdown - sort by any value
      cy.get('#dropdownSortByTop')
      .select('Author')
      .should('have.value','AU')
      
      
        // verify availability of footer links
      cy.get('.site-footer')
      .find('a[href]')
      .should('have.length',4)

   
    cy.screenshot()
    })
})