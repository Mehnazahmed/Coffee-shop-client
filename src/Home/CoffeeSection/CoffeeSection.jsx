
import useCoffeeData from '../../contexts/useCoffeeData';
import CoffeeCard from './CoffeeCard';

const CoffeeSection = () => {
    const [coffee,refetch]=useCoffeeData();
    // const coffee =useLoaderData()
    
    
    return (
        <div className='grid md:grid-cols-2 gap-8  m-20'>
          
               
            {
                coffee.map(item=><CoffeeCard
                key={item._id}
                item={item}
                refetch={refetch}
                ></CoffeeCard>)
            }
            
        </div>
    );
};

export default CoffeeSection;