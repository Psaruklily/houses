import React, {useEffect, useState, useRef} from 'react';
import Houses from '../AllHouses/Houses';
import {ButtonFilter} from '../ButtonFilter';
import HousesService from '../../services/Houses-service';
import './style.css';
import Loader from '../Loader/LoaderComponent';
import {withRouter, useHistory} from "react-router-dom";
import Select from '../Select/Select';

// const Dropdown = ({ children }) => {
//     const wrapperRef = React.useRef(null);
//     return (
//         <div ref={wrapperRef}>
//             { children }
//         </div>
//     );
// }

// const Content1 = () => (
//     <div>filter 1</div>
// )

// const HomeOther = () => (
//     <>
//     <Dropdown>
//         <Content1 />
//     </Dropdown>
//     <Dropdown>
//         <Content1 />
//     </Dropdown>
//     </>

// )



const Home = ({textFromInput}) => {

//   console.log('textFromInput', textFromInput);

    const query = new URLSearchParams(window.location.search);
    
    const [allHouses, setAllHouses] = useState([]);
    const [filteredHouses, setFilteredHouses] = useState(allHouses);
    const [loader, setLoader] = useState(false);
    const history = useHistory();
    const [beds, setBeds] = useState(query.get('beds') || null);
    const [baths, setBaths] = useState(query.get('baths') || null);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const queryFromHeader = new URLSearchParams(document.location.search.substring(1));
    const res = queryFromHeader.get('address');
    console.log(res);

    const service = new HousesService();

    const getHome = () => {
        setLoader(true);
        setTimeout(() => {
            service.getHouses({beds, baths})
            .then(value => {
                setAllHouses(value);
                setFilteredHouses(value);
                setLoader(false);
            });
        }, 1000)
    }

    useEffect(() => {
        getHome();
    },[]);

    // useEffect(() => {
    //     let result = [];
    //     result = allHouses.filter(house => {
    //         return house.address.toLowerCase().search(textFromInput) !== -1;
    //     });
    //     setFilteredHouses(result);
    // }, [textFromInput]);

    const save = () => {
        const query = new URLSearchParams();
        query.set('beds', beds);
        query.set('baths', baths);
        history.push(`/?${query}`);
        setBeds(beds);
        setBaths(baths);
        setIsOpen(!isOpen);
        getHome();
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