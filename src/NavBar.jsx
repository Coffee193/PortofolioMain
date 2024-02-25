import './styles/NavBar.css'
import { HomeSvg1, Railway } from './svgs/SvgAll'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { ExclamationMark } from './svgs/SvgAll'
import { timezone_country_dict } from './timezone_country_test'
import { PythonBlack } from './svgs/SvgAll'
import { ReactBlack } from './svgs/SvgAll'
import { Link } from 'react-router-dom'

export function NavBar({init='true'}){

    const nav_ref = useRef()
    const hover_doc_ref = useRef({'nav':false, 'helper': false, 'popup':false})
    const [countryState, set_countryState] = useState('')
    const [timeState, set_timeState] = useState(['',''])

    useEffect(()=>{
        if(init === 'true'){
            nav_ref.current.classList.remove('default-box-shadow')
            nav_ref.current.style.backgroundColor = 'transparent'
            nav_ref.current.style.color = '#000'
            nav_ref.current.style.position = 'relative'
        }
        else if(init === 'false'){
            // nav_ref.current.classList.add('default-box-shadow')
            // nav_ref.current.style.backgroundColor = '#fff'
            nav_ref.current.classList.remove('default-box-shadow')
            nav_ref.current.style.backgroundColor = 'transparent'
            nav_ref.current.style.position = 'absolute'
            nav_ref.current.style.top = '0'
            nav_ref.current.style.left = '0'
            nav_ref.current.style.right = '0'
            nav_ref.current.style.zIndex = '10'
            nav_ref.current.style.color = '#fafafa'
        }
    },[init])

    useEffect(()=>{
        const curr_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        let tmp_name = timezone_country_dict[curr_timezone]['name']
        let tmp_offset = timezone_country_dict[curr_timezone]['offset']

        if(tmp_name !== undefined){
            set_countryState(tmp_name)
        }
        else{
            set_countryState('-')
        }

        if(tmp_offset !== undefined){
            let min_time = 8 + tmp_offset
            let max_time = 19 + tmp_offset

            if(min_time < 0){
                min_time = 24 + min_time
            }
            if(max_time >= 24){
                max_time = max_time - 24
            }

            min_time = PreetyTime(min_time)
            max_time = PreetyTime(max_time)

            set_timeState([min_time, max_time])
        }
        else{
            set_timeState([NaN, NaN])
        }

    },[])

    function PreetyTime(time_number){
        time_number = time_number.toString()
        if(time_number.includes('.') === -1){
            if(time_number.length === 3){
                time_number = '0' + time_number[0] + ':' + time_number[2] + '0'
            }
            else if(time_number.length === 4){
                time_number = time_number[0] + time_number[1] + ':' + time_number[3] + '0'
            }
        }
        else{
            if(time_number.length == 2){
                time_number = time_number + ':00'
            }
            else if(time_number.length == 1){
                time_number = '0' + time_number + ':00'
            }
        }

        return time_number
    }

    function HoverVisitWesite(){
        let popups = document.getElementsByClassName('webpopup')
        for(let i=0; i<2; i++){
            popups[i].style.opacity = '100'
            popups[i].style.transform = 'translateY(0)'
        }
    }

    function UnHoverVisitWebsite(){
        let popups = document.getElementsByClassName('webpopup')
        for(let i=0; i<2; i++){
            popups[i].style.opacity = '0'
            popups[i].style.transform = 'translateY(35px)'
        }
    }


    return(
        <div className='nav-holder w-100p default-box-shadow' ref={nav_ref}>
            {/* <div className='nav-home h-100p'><HomeSvg1 width={24} height={24}/>Home</div> */}
            <Link to='/' className='w-link'>
                <div className='nav-home h-100p'>chris.dev</div>
            </Link>
            <div className='nav-route'>
                <ul>
                    <div className='nav-web-holder'>
                        <li onMouseEnter={()=>{HoverVisitWesite()}} onMouseLeave={()=>{UnHoverVisitWebsite()}}>Visit Website</li>

                        <div className='nav-web-popup default-box-shadow popup-first webpopup'>
                            <div className='nav-web-popup-notify' style={{color:'#000'}}>
                                <ExclamationMark width={30} height={30}/>
                                <span>Due to Railway.app free plan the website will not always be up</span>
                            </div>
                        </div>

                        <div className='nav-web-popup default-box-shadow popup-second webpopup' style={{color:'#000'}}>

                            <div className='nav-web-popup-info-header'>
                                <Railway width={25} height={25}/>
                                <span>Website Up Times</span>
                            </div>

                            <div className='nav-web-popup-time-info'>
                                <span>UTC</span>
                                <span>08:00 - 19:00</span>
                            </div>

                            <div className='nav-web-popup-time-info'>
                                <span>{countryState}</span>
                                <span>{timeState[0]} - {timeState[1]}</span>
                            </div>

                        </div>
                    </div>
                    
                    <li>
                        <Link to='/allfeautures' className='w-link'>
                        All Website Features
                        </Link>
                    </li>

                    
                    <div className='nav-web-holder'>
                        <li style={{position:'relative', zIndex:'7'}} id='docs-li'>
                            Docs

                            <div className='center-doc-popup'>
                                <div className='nav-web-popup default-box-shadow popup-first docpopup'
                                style={{minWidth:'300px', borderRadius:'35px', color:'#000'}}>
                                    <div className='popup-doc-container'>
                                        <div data-usage='overflow'>
                                            <Link to='/docs/machine_learning'>
                                                <PythonBlack/>Machine Learning
                                            </Link>
                                        </div>
                                        <div data-usage='overflow'>
                                            <Link to='/docs/ecommerce'>
                                                <ReactBlack/>Ecommerce
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </li>

                    </div>
                    {/* <li>Download Page</li> */}
                    
                    <li>
                        <Link to='/contact' className='w-link'>
                        Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}