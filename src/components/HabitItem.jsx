function HabitItem({ habit, toggleHabit, deleteHabit }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => toggleHabit(habit.id)}
      />

      <span className={habit.completed ? "completed" : ""}>{habit.name}</span>

      <button onClick={() => deleteHabit(habit.id)}>Delete</button>
    </li>
  );
}

export default HabitItem;
