import { useState, useRef, useEffect } from 'react'
import './styles/Home.css'
import { Django, LocationSvg } from './svgs/SvgAll'

import { HTML5 } from './svgs/SvgAll'
import { CSS3 } from './svgs/SvgAll'
import { JS } from './svgs/SvgAll'
import { ReactIcon } from './svgs/SvgAll'
import { ViteIcon } from './svgs/SvgAll'
import { Postgresql } from './svgs/SvgAll'
import { MongoDB } from './svgs/SvgAll'
import { Redis } from './svgs/SvgAll'
import { Python } from './svgs/SvgAll'
import { Gunicorn } from './svgs/SvgAll'
import { Nginx } from './svgs/SvgAll'
import { Database } from './svgs/SvgAll'

import { Code } from './svgs/SvgAll'
import { Arrow } from './svgs/SvgAll'
import { Railway } from './svgs/SvgAll'

import { Cubes } from './svgs/SvgAll'
import { CoreCPU } from './svgs/SvgAll'
import { Speed } from './svgs/SvgAll'
import { Chart } from './svgs/SvgAll'
import { CodeLines } from './svgs/SvgAll'
import { DockerSmall } from './svgs/SvgAll'
import { LightBulb } from './svgs/SvgAll'

import { CircleTick } from './svgs/SvgAll'
import { Circle_NoTick } from './svgs/SvgAll'
import { XClose } from './svgs/SvgAll'

import { Link } from 'react-router-dom'

export function Home(){
    let img_path = import.meta.env.VITE_DEFIMGPATH

    const has_tick = useRef(false)
    const range_fill_ref = useRef()
    const [circleState, set_circleState] = useState(<Circle_NoTick width={24} height={24}/>)
    const [rangeState, set_rangeState] = useState(0.5)
    const eazyread_ref = useRef()
    const darken_ref = useRef()

    function ChangeEazyRead(){
        if(eazyread_ref.current.style.opacity === '100'){
            eazyread_ref.current.style.opacity = '0'
            eazyread_ref.current.style.pointerEvents = 'none'
            eazyread_ref.current.style.transform = 'translateY(15px)'
        }
        else if(eazyread_ref.current.style.opacity === '0'){
            eazyread_ref.current.style.opacity = '100'
            eazyread_ref.current.style.pointerEvents = 'all'
            eazyread_ref.current.style.transform = 'translateY(-15px)'
        }
    }

    function ChangeEnable(){
        if(has_tick.current === false){
            has_tick.current = true
            set_circleState(<CircleTick width={24} height={24}/>)
        }
        else if(has_tick.current === true){
            has_tick.current = false
            set_circleState(<Circle_NoTick width={24} height={24}/>)
        }
    }

    function ChangeSlider(event){
        let width_temp = 172 - 1.72 * (100 - event.target.value)
        let percent_tmp = (0.01 * event.target.value).toFixed(2)
        range_fill_ref.current.style.width = width_temp + 'px'
        set_rangeState(percent_tmp)
        darken_ref.current.style.backgroundColor = 'rgba(0,0,0,' + percent_tmp + ')'
    }

    function HoverKeyInfo(event){
        if(has_tick.current === true){
            event.target.style.zIndex = '4'
            darken_ref.current.style.display = 'block'
        }
    }
    function UnHoverKeyInfo(event){
        if(has_tick.current === true){
            event.target.style.zIndex = ''
            darken_ref.current.style.display = 'none'
        }
    }

    useEffect(() => {
        /* Lines Headers */
        const lines_headers = document.querySelectorAll(".home-header-2-line")

        const lines_observer = new IntersectionObserver(entries => {
            entries.forEach((entry) =>  {
                if(entry.isIntersecting === true){
                    entry.target.style.width = '90%'
                    lines_observer.unobserve(entry.target)
                }
            })
        },
        {rootMargin: '-50px'}
        )

        lines_headers.forEach((line) => {
            lines_observer.observe(line)
        })
        /* */

        /* Project Boxes */
        const project_box = document.querySelectorAll('.projects-holder>div')
        
        const project_box_observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                if(entry.isIntersecting === true){
                    entry.target.style.opacity = '1'
                    entry.target.style.top = '0'
                    project_box_observer.unobserve(entry.target)
                }
            })
        },
        {rootMargin:"-100px"}
        )
        
        project_box.forEach((box) => {
            project_box_observer.observe(box)
        })
        /* */

        /* Key Features Header */
        const key_features_header = document.querySelectorAll('.project-key-features-holder>div>div>span.home-header-2')

        const key_features_observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                if(entry.isIntersecting === true){
                    entry.target.style.transform = 'translateY(0)'
                    key_features_observer.unobserve(entry.target)
                }
            })
        },
        {rootMargin:"-100px"}
        )

        key_features_observer.observe(key_features_header[0])

        /* */

        /* Key Features Box */
        const key_feature_box = document.querySelectorAll('.key-features-block')
        
        const key_features_info_observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                if(entry.isIntersecting === true){
                    entry.target.style.transform = 'translateX(0)'
                    entry.target.style.opacity = 1
                    // entry.target.style.filter = 'blur(0)'
                    key_features_info_observer.unobserve(entry.target)
                }
            })
        },
        {rootMargin:"-100px"}
        )
        
        key_feature_box.forEach((box) => {
            key_features_info_observer.observe(box)
        })

        /* */

    },[])

    return(
        <div className='home-all'>
        <div className='darken' style={{display:'none'}} ref={darken_ref}/>
        <div style={{zIndex:'9'}}>

            <div className='home-upper w-100p'>
                <div className='home-upper-holder w-100p'>

                    <div className='home-upper-text'>
                        <div className='home-upper-title'>
                            <div>Full-Stack Developer&</div>
                            <div>Machine-Learning Engineer</div>
                        </div>
                        <div className='home-upper-address'>
                            <LocationSvg width={24} height={24}/><span>Greece</span>
                        </div>
                        <div className='home-upper-short'>
                            Hi, I'm Chris. I'm a really passionate Full-Stack Developer
                            and a Time-Series Enthusiast
                        </div>
                    </div>

                    <div className='home-upper-img-holder-anim-popup'>
                        <div className='home-upper-img-holder'>
                            <img src={img_path + '/home/Camera3.jpg'} className='home-upper-img'/>
                        </div>
                    </div>

                    <div className='home-upper-blob' style={{scale:'0'}}/>

                    <div className='home-upper-cubes-holder'>
                        <div className='home-upper-cube cube-1' style={{scale:'0'}}/>
                        <div className='home-upper-cube cube-2' style={{scale:'0'}}/>
                        <div className='home-upper-cube cube-3' style={{scale:'0'}}/>
                    </div>

                </div>
            </div>

            <div className='home-projects'>

                <div className='center-it'>
                    <span className='home-header-2'>Projects</span>
                </div>
                <div className='center-it absolute'>
                    <span className='home-header-2-line'/>
                </div>

                <div className='projects-holder'>

                    <div>
                        <div className='project-box default-box-shadow'>
                            <div className='project-header'>
                                <span>Ecommerce</span>
                            </div>
                            <div className='project-img-filter'/>
                            <img src={img_path + '/home/screenshot_e1.PNG'} className='project-img'/>
                        </div>

                        <div className='project-tech-stack'>
                            <HTML5 width={30} height={30}/>
                            <CSS3 width={30} height={30}/>
                            <JS width={30} height={30}/>
                            <ReactIcon width={30} height={30}/>
                            <ViteIcon width={30} height={30}/>
                        </div>
                        <div className='project-tech-stack'>
                            <Postgresql width={30} height={30}/>
                            <MongoDB width={30} height={30}/>
                            <Python width={30} height={30}/>
                            <Django width={30} height={30}/>
                            <Gunicorn width={30} height={30}/>
                        </div>
                        <div className='project-tech-stack project-tech-last'>
                            <Redis width={30} height={30}/>
                            <Nginx width={30} height={30}/>
                        </div>

                    </div>

                    <div>
                        <div className='project-box default-box-shadow'>
                        <div className='project-header'>
                                <span>Machine Learning</span>
                            </div>
                            <div className='project-img-filter'/>
                            <img src={img_path + '/home/screenshot_e10.PNG'} className='project-img'/>
                        </div>

                        <div className='project-tech-stack project-tech-last'>
                            <Python width={30} height={30}/>
                            <HTML5 width={30} height={30}/>
                            <CSS3 width={30} height={30}/>
                        </div>

                    </div>
                    
                </div>

                <div className='project-key-features-holder'>

                    <div className='center-it'>
                        <div className='key-features-header-holder'>
                            <span className='home-header-2' style={{background:'transparent', margin:'50px 0'}}>Key Feautures</span>
                        </div>
                    </div>

                    <div className='key-features-holder'>

                        
                        <div className='key-features-title'><Code/><span>Ecommerce</span></div>
                        <div className='eazyread'>
                            <div className='eazyread-holder'>
                                <div className='eazyread-light' onClick={()=>ChangeEazyRead()}><LightBulb width={35} height={35}/></div>
                                <div className='eazyread-box' ref={eazyread_ref} style={{opacity:'0'}}>
                                    <div className='eazyread-close' onClick={()=>ChangeEazyRead()}><XClose width={35} height={35}/></div>
                                    <div className='eazyread-inner'>
                                        <div className='eazyread-enable' onClick={()=>ChangeEnable()}>
                                            {circleState}
                                            <span>Enable</span>
                                        </div>
                                        <div className='eazyread-drag'>
                                            <div className='range-fill' ref={range_fill_ref}/>
                                            <input type='range' className='eazyread-range' onChange={(e)=>ChangeSlider(e)}/>
                                            <span>{rangeState}</span>
                                        </div>
                                        <div>
                                            <span>Hover over a block to focus</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='key-features-blocks-holder'>

                            <div className='center-it'>
                                <div className='key-features-block' onMouseEnter={(e)=>HoverKeyInfo(e)}
                                onMouseLeave={(e)=>UnHoverKeyInfo(e)}>
                                    <div className='key-img'><Database width={50} height={50}/></div>
                                    <div className='key-info'>
                                        <ul>
                                            <li><span>All Databases use <span className='li-highlight'>Snowflake Ids</span> generated using current UTC Timestamp,<br/> Gunicorn Worker Id, Gunicorn Thread, an incrementing number that becomes 0<br/> every millisecond</span></li>
                                            <li><span>All Databases use <span className='li-highlight'>Indexes</span>, <span className='li-highlight'>Compound Indexes</span></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='center-it'>
                                <div className='key-features-block' onMouseEnter={(e)=>HoverKeyInfo(e)}
                                onMouseLeave={(e)=>UnHoverKeyInfo(e)}>
                                    <div className='key-img'><Postgresql width={50} height={50}/></div>
                                    <div className='key-info'>
                                        <ul>
                                            <li><span>Connection Polling using <span className='li-highlight'>PgBouncer</span></span></li>
                                            <li><span>User Passwords are <span className='li-highlight'>Salted</span> (argon2 algo), <span className='li-highlight'>Peppered</span> (pepper key stored in .env),<br/> <span className='li-highlight'>Hashed</span> (Sha256) in this Order before being stored</span></li>
                                            <li><span>Every User Login is stored in Database (row id, datetime, ip, user account)<br/><span className='li-highlight'>Ips</span> are retrieved using Nginx</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='center-it'>
                                <div className='key-features-block' onMouseEnter={(e)=>HoverKeyInfo(e)}
                                onMouseLeave={(e)=>UnHoverKeyInfo(e)}>
                                    <div className='key-img'><MongoDB width={50} height={50}/></div>
                                    <div className='key-info'>
                                        <ul>
                                            <li><span>Connection <span className='li-highlight'>Pooling</span></span></li>
                                            <li><span>Database Security increased using Username, <span className='li-highlight'>Password</span> (stored in .env file)</span></li>
                                            <li><span>Database Security increased using <span className='li-highlight'>KeyFile</span><br/>(Note: Should probably change it to Certificate Validation as recommended by mongoDB Docs)</span></li>
                                            <li><span className='li-highlight'>Replication</span></li>
                                            <li><span><span className='li-highlight'>Text index</span> when searching Products</span></li>
                                            <li><span>Used <span className='li-highlight'>Aggregation</span> Pipeline, so that User can filter Search by Brand, Price, Stars, Department,<br/> Special Features etc.</span></li>
                                            <li><span>User can also <span className='li-highlight'>Sort</span> fetched results by Price Low, Price High, Best Match, Stars</span></li>
                                            <li><span className='li-highlight'>Transactions</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='center-it'>
                                <div className='key-features-block' onMouseEnter={(e)=>HoverKeyInfo(e)}
                                onMouseLeave={(e)=>UnHoverKeyInfo(e)}>
                                    <div className='key-img'><Redis width={50} height={50}/></div>
                                    <div className='key-info'>
                                        <ul>
                                            <li><span>Used for Verifying Refresh <span className='li-highlight'>JWT</span> Keys</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='center-it'>
                                <div className='key-features-block' onMouseEnter={(e)=>HoverKeyInfo(e)}
                                onMouseLeave={(e)=>UnHoverKeyInfo(e)}>
                                    <div className='key-img' style={{flexDirection:'column', gap:'15px'}}>
                                        <Django width={50} height={50}/>
                                        <Python width={50} height={50}/>
                                    </div>
                                    <div className='key-info'>
                                        <ul>
                                            <li><span>Generating Access& Refresh <span className='li-highlight'>JWT</span> Pair and Sets them as HTTP-Only Cookies</span></li>
                                            <li><span>Verifying Access Key</span></li>
                                            <li><span>The <span className='li-highlight'>JWT algo</span> used to Generate the JWT pair is <span className='li-highlight'>randomly</span> chosen among 13</span></li>
                                            <li><span>Django ORM</span></li>
                                            <li><span>Generates the Snowflake IDs mentioned above</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='center-it'>
                                <div className='key-features-block' onMouseEnter={(e)=>HoverKeyInfo(e)}
                                onMouseLeave={(e)=>UnHoverKeyInfo(e)}>
                                    <div className='key-img'>
                                        <Python width={50} height={50}/>
                                    </div>
                                    <div className='key-info'>
                                        <ul>
                                            <li><span><span className='li-highlight'>Webscraping</span> using minimal requests (since i couldn't find free working proxies)</span></li>
                                            <li><span>User can filter results using <span className='li-highlight'>Color</span> (If he searches for something cloth-like: <br/>
                                            Boots, Shoes, Shirts, Glasses etc..)<br/>
                                            The color variable stored in products was Generated using a Python algo<br/>
                                            (<span className='li-highlight'>K-means</span>, Reducing <span className='li-highlight'>Data Dimensions</span> by Switching to HSV, <span className='li-highlight'>Overfitting</span>)</span></li>
                                            <li><span><span className='li-highlight'>Brands</span> were also generated using Python algo</span></li>
                                            <span className='key-python-main-span'>(Obviously if you go to Amazon and Click an item that info (Color, Brand) can be found there. However I webscraped<br/>only the page that pops up after you type& hit Enter on the Navbar. That was intentional.<br/>
                                                <span className='key-python-span'><Arrow/>Way Less requests (Avoid getting banned)</span>
                                                <span className='key-python-span'><Arrow/>Having algos that generate these values with accuracy would look good on Portofolio</span>
                                            </span>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='center-it'>
                                <div className='key-features-block' onMouseEnter={(e)=>HoverKeyInfo(e)}
                                onMouseLeave={(e)=>UnHoverKeyInfo(e)}>
                                    <div className='key-img'>
                                        <Gunicorn width={50} height={50}/>
                                    </div>
                                    <div className='key-info'>
                                        <ul>
                                            <li><span>Gthread worker_class</span></li>
                                            <li><span>3 Gunicorn 'Servers'</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='center-it'>
                                <div className='key-features-block' onMouseEnter={(e)=>HoverKeyInfo(e)}
                                onMouseLeave={(e)=>UnHoverKeyInfo(e)}>
                                    <div className='key-img'>
                                        <Nginx width={50} height={50}/>
                                    </div>
                                    <div className='key-info'>
                                        <ul>
                                            <li><span className='li-highlight'>Reverse Proxy</span></li>
                                            <li><span>SSH Certificate <span className='li-highlight'>(HTTPS)</span><br/>That certificate is Self-Signed, so you will see an Not Secure Page<br/> in your Browser before entering</span></li>
                                            <li><span>Uses <span className='li-highlight'>round-robin</span> to route the request to different Gunicorn 'Servers'</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='center-it'>
                                <div className='key-features-block' onMouseEnter={(e)=>HoverKeyInfo(e)}
                                onMouseLeave={(e)=>UnHoverKeyInfo(e)}>
                                    <div className='key-img'>
                                        <Railway width={50} height={50}/>
                                    </div>
                                    <div className='key-info'>
                                        <ul>
                                            <li>Website Hosted by Railway.app</li>
                                            <li>Minor Changes to Gunicorn, Nginx configurations due to Railway's<br/>Free Plan 500 Hour Restriction<br/>(However if you choose to download the file and follow the setup the thigs mentioned in Gunicorn,<br/> Nginx part do apply)</li>
                                            <li>Minor changes to make website hostable (allowed ips etc..)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <span>Many features mentioned above like Connection Pooling are not really implemented to increase performance, since the average amount of clients that visit the website is 1 (me). I just wanted to show that i can implement those things (as well as that I have knwoledge about them)</span>

                        </div>

                    </div>

                    <div className='key-features-holder'>

                        <div className='key-features-title'><Code/><span>Machine Learning</span></div>

                        <div className='key-features-blocks-holder'>
                            
                            <div className='center-it'>
                                <div className='key-features-block' onMouseEnter={(e)=>HoverKeyInfo(e)}
                                onMouseLeave={(e)=>UnHoverKeyInfo(e)}>
                                    <div className='key-img'>
                                        <Cubes width={50} height={50}/>
                                    </div>
                                    <div className='key-info'>
                                        <ul>
                                            <li><span><span className='li-highlight'>Automated Sampling</span> from Binance Data<br/>
                                            There are multiple options when fetching the Data<br/>
                                            <span style={{display:'flex', alignItems:'center'}}><Arrow style={{rotate:'-90deg'}}/>Choose Conservative Download (give two datetimes& skip any already downloaded data)</span><br/>
                                            <span style={{display:'flex', alignItems:'center'}}><Arrow style={{rotate:'-90deg'}}/>Choose Check After (This just checks if the downloaded .zip is Ok and if not redownload)</span><br/><br/>
                                            Also note that all of that is done by a Class Object, in which the User only needs to pass<br/>
                                            the folder where the data will be downloaded. When fetching, checking, downloading,<br/>
                                            modifying the User only needs to specify the Coin, Dates and Bar types<br/>
                                            <span className='li-secondary'>(its not that complicated, it just uses specific namings on Folders)</span><br/><br/>
                                            Another note, there are way more download options, above I just specified the most<br/>
                                            commong I use</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='center-it'>
                                <div className='key-features-block' onMouseEnter={(e)=>HoverKeyInfo(e)}
                                onMouseLeave={(e)=>UnHoverKeyInfo(e)}>
                                    <div className='key-img'>
                                        <CoreCPU width={50} height={50}/>
                                    </div>
                                    <div className='key-info'>
                                        <ul>
                                            <li>
                                                <span>
                                                    Used <span className='li-highlight'>Ray Library</span> for the multiproccessing (decision based on reports)
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Due to the extremelly common usage of the class and the need for complexity during<br/>
                                                    the generation/handling of parallel processes <span className='li-highlight'>created a Library</span> on top of that called<br/>
                                                    <span className='li-highlight'>RayCatcher</span>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Can control <span className='li-highlight'>Max Memory Usage</span>
                                                </span>
                                            </li>
                                            <li>
                                                <span>Easier/Customizable <span className='li-highlight'>Logging</span></span>
                                            </li>
                                            <li>
                                                <span>Specify <span className='li-highlight'>Max CPU Usage</span></span>
                                            </li>
                                            <li>
                                                <span>Option to Keep <span className='li-highlight'>CPU Usage</span> always <span className='li-highlight'>Maximum</span> (default) by generating new Process as soon<br/>as one finishes</span>
                                            </li>
                                            <li>
                                                <span>Total <span className='li-highlight'>amount of Processes may not be specified</span> (stopping of generating new Processes<br/>is auto handled)</span>
                                            </li>
                                            <li>
                                                <span><span className='li-highlight'>Specify total amount of Processes</span> for better/faster performance (since then we can use <span className='li-highlight'>numpy</span>)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='center-it'>
                                <div className='key-features-block' onMouseEnter={(e)=>HoverKeyInfo(e)}
                                onMouseLeave={(e)=>UnHoverKeyInfo(e)}>
                                    <div className='key-img'>
                                        <Chart width={50} height={50}/>
                                    </div>
                                    <div className='key-info'>
                                        <ul>
                                            <li>
                                                <span>
                                                    Transforming Trade/Time based Data to <span className='li-highlight'>other types</span> (Volume, Tick, Dollar)
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    All of that is done while keeping the <span className='li-highlight'>CPU Usage to a maximum</span><br/>
                                                    (This was actually harder than it sounds, due to certain factors)<br/>
                                                    Make sure you read the relative Doc
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='center-it'>
                                <div className='key-features-block' onMouseEnter={(e)=>HoverKeyInfo(e)}
                                onMouseLeave={(e)=>UnHoverKeyInfo(e)}>
                                    <div className='key-img'>
                                        <Speed width={50} height={50}/>
                                    </div>
                                    <div className='key-info'>
                                        <ul>
                                            <li>
                                                <span>
                                                    Speeding up a recursive function (EWMA) by <span className='li-highlight'>implementing caching</span>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Speeding it up even further to <span className='li-highlight'>O(1) time complexity</span><br/>
                                                    (This is more specific to this certain function& is not something I can<br/>
                                                    explain quickly. Read the relative Doc for more)
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='center-it'>
                                <div className='key-features-block' onMouseEnter={(e)=>HoverKeyInfo(e)}
                                onMouseLeave={(e)=>UnHoverKeyInfo(e)}>
                                <div className='key-img'>
                                    <CodeLines width={50} height={50}/>
                                </div>
                                <div className='key-info'>
                                    <ul>
                                        <li>
                                            <span>
                                                AR, ARMA models
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Cointegration
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Using Dickey-Fuller as a Mean Reversion
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

            </div>

            <div className='home-future-releases'>
                <div className='center-it'>
                    <span className='home-header-2'>Future Releases</span>
                </div>
                <div className='center-it absolute'>
                    <span className='home-header-2-line'/>
                </div>


                <div className='key-features-holder'>
                    <div className='releases-title'>
                        <Arrow style={{rotate:'-90deg'}}/><span>Ecommerce</span>
                    </div>

                    <div className='release-notes'>
                        <ul>
                            <li><span>Add Skeletal Animations when fetching Data<br/>
                            <br/>
                            When Searching for new product, old image still remains untils the new one is fetched (looks weird)<br/>
                            Remoing the images completely looks even weirder for some reason<br/>
                            So the best approach which is also used by a lot of websites is to use Skeletal animations</span>
                            </li>

                            <li><span>Add more color names when filtering items by Color<br/>
                            <br/>
                            If you read the Docs. The available color names are preety limited giving sometimes naive results<br/>
                            (Example you search Red & you also get Brown colored products)<br/>
                            Also from the Docs, I would have to make the algo that matches hex to alphabetic name a bit more strict</span>
                            </li>

                            <li>
                                <span style={{display:'flex', alignItems:'center', gap:'10px'}}>
                                    Maybe dockerize the app <DockerSmall/>
                                </span>
                            </li>

                            <li>
                                <span>
                                    When clicking <span className='li-grey'>Ship To</span>  in top left from the NavBar, the list of countries is preety
                                    limited<br/>
                                    compared to the list of countries when <span className='li-grey'>Adding an Address</span> , 
                                    <span className='li-grey'>Buying a Product</span> ,
                                    <span className='li-grey'>Listing a Product</span>
                                    <br/><br/>
                                    That's because its really hard to find online a list of good looking country Svgs<br/>
                                    These look good because I picked every single one manually
                                </span>
                            </li>

                            <li>
                                <span>
                                    The countries two-letter code list that I got from a github page does not provide
                                    a code for every country<br/> resulting in errors when <span className='li-grey'>Listing Product</span> ,
                                    <span className='li-grey'>Buying Product</span>
                                    <br/>
                                    <br/>Will have to add them manually
                                </span>
                            </li>

                        </ul>
                    </div>

                    <div className='release-notes-line'/>

                    <span>I'm going to be full transparent here, there will probably not be an update<br/><br/>
                    This is a personal opinion, but at the point I am right now, (no previous work experience on this field)<br/>
                    I believe that acquiring the knowledge& showing it to you is only 50% percent of the way.<br/>
                    The other 50% is to search jobs, get rejected, repeat and learn how to 'show' my work better<br/><br/>
                    Also the money is preety tight...</span>
                </div>
            </div>

            <div className='home-discussable-payment'>
                <div className='center-it'>
                    <span className='home-header-2'>Discussable Payment</span>
                </div>
                <div className='center-it absolute'>
                    <span className='home-header-2-line'/>
                </div>

                <div className='key-features-holder'>
                    <span>Obviously I can understand the fact that the lack of previous work experience plays 
                        a big role.<br/>I'm willing however to get payed less in exchange for a chance.<br/><br/>
                        Being full transparent here again, the minimum I can go and also push the bills is 600euro/month<br/>
                        (supposing I don't move to where you guys are located)
                    </span>
                </div>
            </div>

            <div className='center-it absolute'>
                <div className='home-line-blue'/>
            </div>

            <div className='center-it absolute'>
                <div className='contact-me'>
                    <div className='contact-me-text'>Feel free to Contact me</div>
                    <Link to='/contact' className='w-link'>
                        <div className='contact-me-button'>Contact</div>
                    </Link>
                </div>
            </div>

            {/* <div className='contact-effects-holder'>
                <div className='contact-absolute-hide'>
                    <div className='contact-bubble bubl1'/>
                    <div className='contact-bubble bubl2'/>
                    <div className='contact-bubble bubl3'/>
                    <div className='contact-star-1'/>
                    <div className='contact-cube-1'/>
                </div>
            </div> */}

        </div>
        </div>
    )
}