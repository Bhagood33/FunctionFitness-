import React, { useState } from 'react';

const focuses = ['Strength', 'Stamina', 'Gymnastics', 'Mobility'];

const movements = {
  Strength: ['Deadlift', 'Back Squat', 'Bench Press', 'Strict Press'],
  Stamina: ['Running', 'Rowing', 'Bike Erg', 'Burpees'],
  Gymnastics: ['Pull-ups', 'Handstand Push-ups', 'Toes-to-Bar', 'Muscle-ups'],
  Mobility: ['Hip Openers', 'Shoulder Rotations', 'Hamstring Stretches', 'Ankle Mobility']
};

const repSchemes = [
  '5 sets of 5 reps',
  '3 rounds for time',
  'EMOM 10 minutes',
  'AMRAP 15 minutes'
];

export default function App() {
  const [focus, setFocus] = useState(null);
  const [workout, setWorkout] = useState(null);

  const generateWorkout = () => {
    if (!focus) return;
    const randomMovement = movements[focus][Math.floor(Math.random() * movements[focus].length)];
    const randomScheme = repSchemes[Math.floor(Math.random() * repSchemes.length)];
    setWorkout(`${randomScheme} of ${randomMovement}`);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Functional Fitness Generator</h1>
      <div style={{ marginBottom: '1rem' }}>
        {focuses.map((f) => (
          <button
            key={f}
            onClick={() => setFocus(f)}
            style={{
              margin: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: focus === f ? '#333' : '#eee',
              color: focus === f ? '#fff' : '#000',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {f}
          </button>
        ))}
      </div>
      <button onClick={generateWorkout} disabled={!focus} style={{ padding: '0.5rem 1rem' }}>
        Generate Workout
      </button>
      {workout && (
        <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
          <h2>Today's Focus: {focus}</h2>
          <p>{workout}</p>
        </div>
      )}
    </div>
  );
}
