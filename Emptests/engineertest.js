const Engineer = require('../Emp/Engineer');

const engTest = new Engineer ('Kase', 'kase5@gmail.com', 3, 'Engineer', 'Alexa')

describe("Engineer", () =>{
    it('has a name', () =>{
        expect(engTest.name).toEqual(expect.any(String))
        expect(engTest.name.length).toBeGreaterThan(2)

    })
    it('has an email id', () =>{
        expect(engTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has an id that is a num', () => {
        expect(engTest.id).toEqual(expect.any(Number))
    })

    it('has a role of engineer', () => {
        expect(engTest.role).toBe('Engineer')
    })

    it('has a github username', () => {
        keys = Object.keys(engTest)
        optionKey = keys[4]
        expect(optionKey).toBe('gitHub')
        expect(engTest.gitHub).toEqual(expect.any(String))
    })


})
