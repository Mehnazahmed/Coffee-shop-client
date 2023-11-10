import '../App.css';


const SectionButton = ({children}) => {
    return (
        <div>
            <button className='bg-[#D2B48C] border-2  border-[#331A15] text-[#331A15] md:w-full mt-4 rounded'>{children}</button>
        </div>
    );
};

export default SectionButton;