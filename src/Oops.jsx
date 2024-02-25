import './styles/Oops.css'
import { Link } from 'react-router-dom'
import { RhombusBlack } from './svgs/SvgAll'

export function Oops(){
    return(
        <div className='w-100p'>
            <div className='center-it-col' style={{paddingBottom:'50px'}}>
                <div className='img-holder-oops'>
                    <img src='/home/vectorjuice_sad2.jpg' className='img-oops'/>
                </div>

                <span className='oops-header'>
                    Oops!
                </span>
                <div className='oops-main'>
                    <div>The Docs page was initially planned to be an <span className='oops-highlight'>in-depth blog</span> of the <span className='oops-highlight'>Key Features</span> mentioned in Home
                        page
                    </div>
                    {/* <span>
                        The Blogs would have simillar form as those of the Medium website<br/>
                        Example link: https://towardsdatascience.com/information-driven-bars-for-financial-machine-learning-imbalance-bars-dda9233058f0
                    </span> */}
                    <div>
                        Turns out all of these will take a <span className='oops-highlight'>lot, lot</span> of time to make& i'm struggling a little bit with money
                        right now, so unfortunately I <span className='oops-highlight'>won't focus much</span> on the Docs page
                    </div>
                    <div className='center-it' style={{marginTop:'50px'}}>
                        <div className='oops-rhombus'>
                            <RhombusBlack width={24} height={24}/>
                        </div>
                        <div className='w-line'/>
                    </div>
                    <div style={{marginTop:'50px'}}>
                        However, considering i'll send resumes both for Python& <span className='oops-highlight'>React</span> jobs, i decided to keep the
                        Docs page
                    </div>
                    <div className='oops-secondary'>
                        <span>* maybe the moving searchbar& the divs appearing after the transition
                        finished, will count positively in my resume</span>
                    </div>
                </div>
                <div className='oops-last'>
                    <Link to='/' className='w-link'>
                        <div className='oops-home'>Home</div>
                    </Link>
                </div>
                <div className='bubl-holder'>
                    <div className='relative w-100p h-100p'>
                        <div className='bubl-oops-1'/>
                        <div className='bubl-oops-2'/>
                    </div>
                </div>
            </div>
        </div>
    )
}