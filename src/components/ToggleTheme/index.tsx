import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';

import { Container } from './styles';
import { ChangeThemeContext } from '../../contexts/ChangeThemeContext';

export function ToggleTheme() {
   const { colors, title } = useContext(ThemeContext);
   const { toggleTheme } = useContext(ChangeThemeContext);

   return (
      <Container>
         <FiSun size={22} />
         <Switch
            className="themeSwitch"
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.secundary}
            offHandleColor={colors.toggleTheme}
            onHandleColor={colors.toggleTheme}
         />
         <FaMoon />
      </Container>
   );
}