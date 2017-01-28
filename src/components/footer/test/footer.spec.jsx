import { shallow } from 'enzyme'
import Footer from '../footer'


describe('When user loads footer on page', function () {

    beforeEach(function () {
        this.wrapper = shallow(<Footer/>)
    })

    it('should render footer well', function () {
        const footer = this.wrapper.find(`footer.mdl-mini-footer`);
        expect(footer.length).toEqual(1)
    })
})
