import React, {useEffect, useState, useRef} from 'react';
import Houses from '../AllHouses/Houses';
import {ButtonFilter} from '../ButtonFilter';
import HousesService from '../../services/Houses-service';
import './style.css';
import Loader from '../Loader/LoaderComponent';
import {withRouter, useHistory} from "react-router-dom";
import Select from '../Select/Select';



const Home = (props, {textFromInput}) => {

    const [allHouses, setAllHouses] = useState([]);
    const [filteredHouses, setFilteredHouses] = useState(allHouses);
    const [loader, setLoader] = useState(false);
    const history = useHistory();
    const [beds, setBeds] = useState(null); 
    const [baths, setBaths] = useState(null);
    const [numBeds, setNumBeds] = useState(null);
    const [numBaths, setNumBaths] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const service = new HousesService();

    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            service.getHouses(numBeds, numBaths)
            .then(value => {
                console.log(value)
                setAllHouses(value);
                setFilteredHouses(value);
                setLoader(false);
            });
        }, 1000)
    },[numBeds, numBaths]);
    

    useEffect(() => {
        let result = [];
        result = allHouses.filter(house => {
            return house.address.toLowerCase().search(textFromInput) !== -1;
        });
        setFilteredHouses(result);
    }, [textFromInput]);

    const save = () => {
        const query = new URLSearchParams();
        query.set('beds', beds);
        query.set('baths', baths);
        history.push(`/?${query}`);
        setIsOpen(!isOpen);
        setNumBeds(beds);
        setNumBaths(baths);
    }

    const closeModal = () => {
        setIsOpen(!isOpen);
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }


    return (
        <div>
            <div className='wrapper-for-homeContent'>
`               <div className='homesPageDesktop_filter'>
                    <div className='filter-buttons'>
                        <ButtonFilter onChildClick={closeModal} text={'Beds and baths'}/>
                        <ButtonFilter text={'Price'}/>
                        <ButtonFilter text={'More filters'}/>
                    </div>
                </div>
   
                <div className='page-wrapper'>

                    {isOpen && (<div className='filter-dropdown-menu' ref={wrapperRef}>
                        <div className='filter-dropdown-menu_filters'>
                            <div className='filter-dropdown-menu_filters_wrapper-child-cont'>
                                <div className='filter-dropdown-menu_filters_label'>Beds</div>
                                <div>
                                    <Select setSelectedBeds={setBeds}/>
                                </div>
                            </div>

                            <div className='filter-dropdown-menu_filters_wrapper-child-cont'>
                                <div className='filter-dropdown-menu_filters_label'>Baths</div>
                                <div>
                                    <Select setSelectedBeds={setBaths}/>
                                </div>
                            </div>
                        </div>
                        <hr className='line'/>
                        
                        <div className='filter-dropdown-menu_buttons'>
                            <div onClick={closeModal} className='filter-dropdown-menu_buttons-reset'>
                                <span>Reset</span>
                            </div>
                            <div role='button' onClick={save} className='filter-dropdown-menu_buttons-save'>
                                <span>Save</span>
                            </div>
                        </div>
                    </div>)}
                      

                    {filteredHouses.length === 0 && <p className='not-available'>0 home available</p>}
                    {loader && <Loader />}
                    <Houses houses={filteredHouses}/>
                </div>`
            </div>       
        </div>
    )
}

export default withRouter(Home);