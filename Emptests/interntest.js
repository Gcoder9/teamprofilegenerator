const Intern = require ('../Emp/Intern');

const internTest = new Intern ('Rilee', 'rilee9@gmail.com', 2 , 'Intern', 'UNC')

describe('Intern', () => {
    it('has a name', () =>{
        expect(internTest.name).toEqual(expect.any(String))
        expect(internTest.name.length).toBeGreaterThan(2)

    })
    it('has an email id', () =>{
        expect(internTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has an id that is a num', () => {
        expect(internTest.id).toEqual(expect.any(Number))
    })

    it('has a role of engineer', () => {
        expect(internTest.role).toBe('Intern')
    })

    it('has a school name', () => {
        keys = Object.keys(internTest )
        optionKey = keys[4]
        expect(optionKey).toBe('school')
        expect(internTest.school).toEqual(expect.any(String))
    })
})