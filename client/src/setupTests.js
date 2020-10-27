import Enzyme from 'enzyme';
import { addSyntheticLeadingComment } from 'typescript';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
