import React, { useContext } from "react";
import { Container } from "./styles";
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'
import {shade} from 'polished'
const Header = () => {

    const { colors } = useContext(ThemeContext)

    return(
        <Container>
            Hello, World!
            <Switch
            onChange={() => {}}
            checked = {false}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.secundary}
            />
        </Container>
    )    
}

export default Header