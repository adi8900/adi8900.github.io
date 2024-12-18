import MealHeader from "../components/meals/meal-header";
import styles from './page.module.css';
import MealsGrid from "../components/meals/meal-grid";
export default function MealsPage() {
    return (
      <>
      <MealHeader/>
      <main className={styles.main}></main>
      <MealsGrid meals={[]}/>
      </>
    );
  }