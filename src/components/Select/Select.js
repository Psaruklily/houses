import React, {useState} from 'react';
import styled from 'styled-components';

const DropDownContainer = styled("div")`
width: 85px;
position: relative;
margin: 0 auto;`;
const DropDownHeader = styled("div")`
margin-bottom: 5px;
padding: 5px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
font-weight: 500;
font-size: 14px;
color: #010118;
cursor: pointer;
background: #ffffff`;
const DropDownListContainer = styled("div")``;
const DropDownList = styled("ul")`
  padding: 0;
  position: absolute;
  width: 100%;
  margin: 0;
  padding-left: 5px;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #010118;
  font-size: 14px;
  font-weight: 300;
  &:first-child {
    padding-top: 5px;
  }`;
const ListItem = styled("li")`
list-style: none;
cursor: pointer;
margin-bottom: 5px;`;

const options = [1, 2, 3, 4];

const Select = ({setSelectedBeds}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        setSelectedBeds(value);
    }
    
    return (
        <div>
            <DropDownContainer>
                <DropDownHeader className='test1' onClick={toggling}>{selectedOption || 1}</DropDownHeader>
                {isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            {options.map(option => (
                                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>{option}</ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </DropDownContainer>
        </div>
    )
}

export default Select;