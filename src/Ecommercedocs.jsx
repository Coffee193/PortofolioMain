import { useEffect, useRef, useState } from 'react'
import './styles/Docs.css'
import { ReactBlack } from './svgs/SvgAll'
import { PythonBlack } from './svgs/SvgAll'
import { Link } from 'react-router-dom'

export function EcommerceDocs(){

    const input_ref = useRef()
    const doc_upper_ref = useRef()
    const go_up = useRef(true)
    const key_val = useRef('')

    /* key_val is used to: remount component when useEffect is called (it forces the remount since the key changes)
        Try doing this to understand: remove the key, then go Docs -> Ecommerce , click the input & then go Docs -> Machine
        Learning  & as you can see the div remains up */

    let init_doc_list = useRef([])

    const [docState, set_docState] = useState([])
    const [symbolState, set_symbolState] = useState('')
    const [backgroundState, set_backgroundState] = useState('')

    useEffect(()=>{
        go_up.current = true
        init_doc_list.current = []
        let ret_list = []
        if(window.location.href.slice(-9) === 'ecommerce'){
            set_symbolState(<ReactBlack color={'#fff'} width={50} height={50}/>)
            set_backgroundState('bg-e')
            key_val.current = 'react'
            import('./docs/ReactDocs').then(({ret_list})=>{
                console.log(ret_list)
                console.log('**')
                CreateDocs(ret_list)
                init_doc_list.current = ret_list
            })
        }
        else if(window.location.href.slice(-16) === 'machine_learning'){
            set_symbolState(<PythonBlack color={'#fff'} width={50} height={50}/>)
            set_backgroundState('bg-ml')
            key_val.current = 'machine_learning'
            import('./docs/MLDocs').then(({ret_list}) => {
                CreateDocs(ret_list)
                init_doc_list.current = ret_list
            })
        }
    },[window.location.href])

    function CreateDocs(returned_list){
        let out_list = []

        for(let i=0;i<returned_list.length;i++){
            out_list.push(
                <Link to={returned_list[i]['url']} key={returned_list[i]['url']} className='w-link'>
                    <div className='doc-box default-box-shadow'>
                        <div className='doc-header'>{returned_list[i]['header']}</div>
                        <div className='doc-note'>{returned_list[i]['note']}</div>
                    </div>
                </Link>
            )
           
        }

        set_docState(out_list)
    }

    function SearchDoc(event){
        let search_val = event.target.value
        let out_list = []

        for(let i=0;i<init_doc_list.current.length;i++){
            console.log(init_doc_list.current[i]['header'].toLowerCase())
            if(init_doc_list.current[i]['header'].toLowerCase().includes(search_val.toLowerCase())){
                out_list.push(init_doc_list.current[i])
            }
            
        }
        CreateDocs(out_list)
    }

    function ClickSearch(){
        input_ref.current.focus()
        const animated = document.getElementsByClassName('doc-upper')[0]
        animated.addEventListener('transitionend',()=>{
            document.getElementsByClassName('doc-box-holder')[0].style.display = 'flex'
            animated.removeEventListener('transitionend', TransitionEvent)
        })
        if(go_up.current === true){
            if(input_ref.current.value === ''){
                doc_upper_ref.current.style.transform = 'translateY(-150px)'
            }
            go_up.current = false
        }
    }

    return(
        <div className='w-100p h-100p relative'>
            <div className={'doc-holder ' + backgroundState}/>
                <div className='center-it-col' >
                    <div className='doc-upper' ref={doc_upper_ref} key={key_val.current}>
                        <div>{symbolState}</div>
                        <div className='doc-search default-box-shadow' onClick={()=>ClickSearch()}>
                            <input type='text' className='doc-input' ref={input_ref} onChange={(e)=>{SearchDoc(e)}}/>
                        </div>
                    
                        <div className='doc-box-holder'>
                            {docState}
                        </div>
                    </div>
                </div>
        </div>
    )
}