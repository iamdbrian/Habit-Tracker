import { useState, useEffect } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("habits");
    if (saved) {
      setHabits(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  function addHabit(name) {
    const newHabit = {
      id: Date.now(),
      name,
      completed: false,
    };
    setHabits([...habits, newHabit]);
  }

  function toggleHabit(id) {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit,
      ),
    );
  }

  function deleteHabit(id) {
    setHabits(habits.filter((habit) => habit.id !== id));
  }

  const completedCount = habits.filter((h) => h.completed).length;

  return (
    <div className="container">
      <h1>Habit Tracker</h1>

      <HabitForm addHabit={addHabit} />

      <p className="counter">
        Completed: {completedCount} / {habits.length}
      </p>

      {habits.length === 0 ? (
        <p>No habits yet</p>
      ) : (
        <HabitList
          habits={habits}
          toggleHabit={toggleHabit}
          deleteHabit={deleteHabit}
        />
      )}
    </div>
  );
}

export default App;
