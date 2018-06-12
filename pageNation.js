import { StackNavigator } from 'react-navigation';
import Input from './Input';

export const rootCom = 'Input';

const pageNation = StackNavigator({
  Input: {
    screen:Input,
  },
});

export default pageNation;