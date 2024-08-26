




// eslint-disable-next-line react/prop-types
export default function BlogCard({messageid, message}){


    return(
        <div className={'flex flex-col min-w-[600px] drop-shadow-2xl mt-1 min-h-32 border gap-2 rounded-xl bg-[linear-gradient(to_bottom,_darkslategray,_black)]'}>
            <div className={'align-top items-left'}>
                <h1>{`Blog# ${messageid}`}</h1>
            </div>
            <p>{`${message}`}</p>
        </div>
    );

}