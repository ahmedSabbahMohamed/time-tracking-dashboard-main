import menu from './images/icon-ellipsis.svg';

function Card(props) {
    return (
        <>
            <div className={props.class}>
                <img className={props.classImg} src={props.src} alt='any' />
                <div className="p-4 bg-dblue rounded-2xl">
                    <div className='daily'>
                    <div className='flex justify-between items-center py-3 md:p-1'>
                        <p className='text-white font-normal'>
                            {props.title}
                        </p>
                        <img className="cursor-pointer" src={menu} alt='menu' />
                    </div>
                    <div className='flex justify-between items-center pb-4 md:flex-col md:items-start'>
                        <h1 className='current text-white text-4xl font-light md:py-5 md:text-5xl'>
                            {props.current}hrs
                        </h1>
                        <p className='text-paleblue'>
                            <span className='inline-block'>Last Day</span>
                             - {props.previous}hrs
                        </p>
                    </div>
                    </div>

                    <div className='hidden weekly'>
                    <div className='flex justify-between items-center py-3 md:p-1'>
                        <p className='text-white font-normal'>
                            {props.title}
                        </p>
                        <img className="cursor-pointer" src={menu} alt='menu' />
                    </div>
                    <div className='flex justify-between items-center pb-4 md:flex-col md:items-start'>
                        <h1 className='current text-white text-4xl font-light md:py-5 md:text-5xl'>
                            {props.current2}hrs
                        </h1>
                        <p className='text-paleblue'>
                            <span className='inline-block'>Last Week</span>
                             - {props.previous2}hrs
                        </p>
                    </div>
                    </div>

                    <div className='hidden monthly'>
                    <div className='flex justify-between items-center py-3 md:p-1'>
                        <p className='text-white font-normal'>
                            {props.title}
                        </p>
                        <img className="cursor-pointer" src={menu} alt='menu' />
                    </div>
                    <div className='flex justify-between items-center pb-4 md:flex-col md:items-start'>
                        <h1 className='current text-white text-4xl font-light md:py-5 md:text-5xl'>
                            {props.current3}hrs
                        </h1>
                        <p className='text-paleblue'>
                            <span className='inline-block'>Last Month</span>
                             - {props.previous3}hrs
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
