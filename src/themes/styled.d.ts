import 'styled-components';
import global from './global';

declare module 'styled-components'{
    type ThemeType = typeof global;

    export interface DefaultTheme extends ThemeType {}
}