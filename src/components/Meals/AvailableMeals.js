import classes from'./AvailableMeals.module.css';
import MealItem from './MealItem';
const dummyMeals=[
    {
        id:'m1',
        name:'Samosa',
        description:'Tangled with flavour and masala',
        price:15
    },
    {
        id:'m2',
        name:'Chicken pakoda',
        description:'Fried small piecesof chicken',
        price:20
    },
    {
        id:'m3',
        name:'Biriyani',
        description:'Rice with chicken and flavoured full',
        price:150
    },
    {
        id:'m4',
        name:'Dosa',
        description:'South Indian dishwith curry and chutney',
        price:32.5
    },
]
const AvailableMeals = () => {
    const mealsList=dummyMeals.map((meal)=>
        <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
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