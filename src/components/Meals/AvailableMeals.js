import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
const dummyMeals = [
    {
        id: 'm1',
        name: 'Biriyani',
        description: 'Tangled with flavour and masala',
        price: 150 
    },
    {
        id: 'm2',
        name: 'Chicken Fried Rice',
        description: 'Fried small pieces of chicken',
        price: 90
    },
    {
        id: 'm3',
        name: 'Chole Bhature',
        description: 'Rice with chicken and flavoured full',
        price: 70
    },
    {
        id: 'm4',
        name: 'Dosa',
        description: 'South Indian dishwith curry and chutney',
        price: 40
    },
    {
        id: 'm5',
        name: 'Chicken Kabab',
        description: 'Flavoured chicken with fresh butter',
        price: 200
    }
]
const AvailableMeals = () => {
    const mealsList = dummyMeals.map((meal) =>
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    )
    return (
        <section className={classes.meals}>
            <ul>
                {mealsList}
            </ul>
        </section>
    );
}

export default AvailableMeals;