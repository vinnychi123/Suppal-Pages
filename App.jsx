import React, { useState } from 'react';
import Header from './components/Header';
import EssayScroll from './Components/EssayScroll';
import EssayCard from './components/EssayCard';
import essaysData from './essays.json';

const App = () => {
  const [selectedEssay, setSelectedEssay] = useState(null);

  return (
    <div className = "bg-gray-50">
      <div className="flex h-full">
        <EssayScroll className="w-3/10" setSelectedEssay={setSelectedEssay} essays={essaysData.essays} />
        <div className="border-r border-gray-300"></div>
        <div className="flex-1 flex flex-col items-center">
          {selectedEssay && <Header essay ={selectedEssay} className="w-7/10" />}
          {selectedEssay && <EssayCard essay={selectedEssay} />}

        </div>
      </div>
    </div>
  );
}

export default App;
