import React from 'react';
import Button from './Button';

const EssayScroll = ({ setSelectedEssay, essays }) => {
  return (
    <div className="h-full w-60 bg-gray-50 text-black p-12 overflow-y-auto custom-scrollbar">
      <ul className="space-y-0">
        {essays.map((essay, i) => (
          <li key={essay.id}>
            <Button number={i + 1} onClick={() => setSelectedEssay(essay)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EssayScroll;
