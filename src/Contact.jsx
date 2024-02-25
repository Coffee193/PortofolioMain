import './styles/Contact.css'
import { Phone } from './svgs/SvgAll'
import { Mail } from './svgs/SvgAll'

export function Contact(){
    return(
        <div className='w-100p h-n'>
            <div className='center-it'>
                <div className='contact-box default-box-shadow'>
                    <div className='contact-info'>
                        <div className='center-it'>
                            <div className='contact-name'>Chris Gertzos</div>
                        </div>
                        <div className='center-it'>
                            <div className='contact-container'>
                                <div className='contact-val'><Phone/><span>+30 6980445207</span></div>
                                <div className='contact-val'><Mail/><span>chrisgertzos1@gmail.com</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}