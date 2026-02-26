import HabitItem from "./HabitItem";

function HabitList({ habits, toggleHabit, deleteHabit }) {
  return (
    <ul className="list">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          toggleHabit={toggleHabit}
          deleteHabit={deleteHabit}
        />
      ))}
    </ul>
  );
}

export default HabitList;
