import PhonesCard from "./PhonesCard";


// eslint-disable-next-line react/prop-types
const Phones = ({phones}) => {
    return (
        <div className="py-4">
            <h1 className='text-2xl text-center'>All Categories Phone</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
            {
                // eslint-disable-next-line react/prop-types
                phones?.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
            }
        </div>

        </div>
    );
};

export default Phones;