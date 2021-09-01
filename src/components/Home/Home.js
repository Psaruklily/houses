import React, {useEffect, useState} from 'react';
import Houses from '../AllHouses/Houses';
import {ButtonFilter} from '../ButtonFilter';
import HousesService from '../../services/Houses-service';
import './style.css';
import Loader from '../Loader/LoaderComponent';
import {withRouter, useHistory} from "react-router-dom";

import styled from 'styled-components';
const DropDownContainer = styled("div")`
width: 85px;
margin: 0 auto;`;
const DropDownHeader = styled("div")`
margin-bottom: 5px;
padding: 5px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
font-weight: 500;
font-size: 14px;
color: #010118;
background: #ffffff`;
const DropDownListContainer = styled("div")``;
const DropDownList = styled("ul")`
  padding: 0;
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
  margin-bottom: 5px;`;

const Home = ({textFromInput}, props) => {

    const [allHouses, setAllHouses] = useState([]);
    const [filteredHouses, setFilteredHouses] = useState(allHouses);
    const [loader, setLoader] = useState(false);
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const service = new HousesService();
    
    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            service.getHouses()
            .then(value => {
                setAllHouses(value);
                setFilteredHouses(value);
                setLoader(false);
            });
        }, 1000)
    },[]);

    useEffect(() => {
        let result = [];
        result = allHouses.filter(house => {
            return house.address.toLowerCase().search(textFromInput) !== -1;
        });
        setFilteredHouses(result);
    }, [textFromInput]);


    const saveBeds = () => {
        const query = new URLSearchParams();
        const value = document.getElementById('beds').value;
        query.set("beds", value);
        history.push(`/houses/?${query}`);
    }

    const toggling = () => setIsOpen(!isOpen);

    console.log(filteredHouses);
    // console.log('Select', document.querySelector('.test1').innerHTML);
    

    return (
        <div>
            <div className='wrapper-for-homeContent'>
`               <div className='homesPageDesktop_filter'>
                    <div className='filter-buttons'>
                        <ButtonFilter text={'Beds and baths'}/>
                        <ButtonFilter text={'Price'}/>
                        <ButtonFilter text={'More filters'}/>
                    </div>
                </div>
   
                <div className='page-wrapper'>


                    <div className='filter-dropdown-menu'>
                        <div className='filter-dropdown-menu_filters'>

                            <div className='filter-dropdown-menu_filters_wrapper-child-cont'>
                                <div className='filter-dropdown-menu_filters_label'>Beds</div>
                                
                                       <DropDownContainer>
                                       <DropDownHeader className='test1' onClick={toggling}>1</DropDownHeader>
                                       {isOpen && (
                                           <DropDownListContainer>
                                           <DropDownList>
                                               <ListItem>2</ListItem>
                                               <ListItem>3</ListItem>
                                               <ListItem>4</ListItem>
                                           </DropDownList>
                                       </DropDownListContainer>
                                       )}
                                   </DropDownContainer>
                            </div>

                            



                                {/* <div className='filter-dropdown-menu_filters_label'>Beds</div>
                                <div className='select'>
                                    <select name='beds' id='beds'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div> */}
                            

                            {/* <div className='filter-dropdown-menu_filters_wrapper-child-cont'>
                                <div className='filter-dropdown-menu_filters_label'>Baths</div>
                                <div className='select'>
                                    <select name='beds' id='baths'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </div> */}
                            
                            
                          
                            <input type="submit" value="Save" onClick={saveBeds}></input>
                        </div>
                        <div className='filter-dropdown-menu_buttons'></div>
                    </div>


                    {filteredHouses.length === 0 && <p className='not-available'>0 home available</p>}
                    {loader && <Loader />}
                    <Houses houses={filteredHouses}/>
                </div>`
            </div>       
        </div>
    )
}

export default withRouter(Home);