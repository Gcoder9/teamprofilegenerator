const Manager = require ('../Emp/Manager');

const manTest = new Manager ('cassie', 'cassie1@gmail.com', 1 , 'Manager', 101)

describe('Manager', () => {
    it('has a name', () =>{
        expect(manTest.name).toEqual(expect.any(String))
        expect(manTest.name.length).toBeGreaterThan(2)

    })
    it('has an email id', () =>{
        expect(manTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has an id that is a num', () => {
        expect(manTest.id).toEqual(expect.any(Number))
    })

    it('has a role of engineer', () => {
        expect(manTest.role).toBe('Manager')
    })

    it('has a office number', () => {
        keys = Object.keys(manTest)
        optionKey = keys[4]
        expect(optionKey).toBe('office')
        expect(manTest.office).toEqual(expect.any(Number))
    })
})