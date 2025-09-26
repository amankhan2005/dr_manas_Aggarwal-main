import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BreadCrumbs from '../../Component/BreadCums';
import Container from '../../utlis/Container';

import img0 from '../../assets/cases/case0.jpeg';
import img1 from '../../assets/cases/case2.jpeg';
import img2 from '../../assets/cases/case3.jpeg';
import img3 from '../../assets/cases/case4.jpeg';
import img4 from '../../assets/cases/case5.jpeg';
import img5 from '../../assets/cases/case6.jpeg';
import img6 from '../../assets/cases/case7.jpeg';
import img7 from '../../assets/cases/case8.jpeg';
import img8 from '../../assets/cases/case9.jpeg';
import img9 from '../../assets/cases/case10.jpeg';
import img10 from '../../assets/cases/case11.jpeg';
import img11 from '../../assets/cases/case12.jpeg';

const cases = [
  { id: 0, name: "Stomach Polyp", desc: "Excision of a stomach polyp.", image: img0 },
  { id: 1, name: "Sigmoid Colon Cancer", desc: "Sigmoidectomy procedure performed.", image: img1 },
  { id: 2, name: "Small Intestine Diverticulae", desc: "Management of intestinal diverticulae.", image: img2 },
  { id: 3, name: "Road Traffic Accident", desc: "Pancreatic injury management post-accident.", image: img3 },
  { id: 4, name: "Colon Cancer", desc: "Right hemicolectomy surgery performed.", image: img4 },
  { id: 5, name: "Large Incisional Hernia", desc: "Open hernia repair procedure done.", image: img5 },
  { id: 6, name: "Laparoscopic Hernia Repair", desc: "Repairing two hernias in a single surgery.", image: img6 },
  { id: 7, name: "Gall Bladder Stones", desc: "Laparoscopic cholecystectomy performed.", image: img7 },
  { id: 8, name: "Small Intestine Stones", desc: "Management of stones in the small intestine.", image: img8 },
  { id: 9, name: "Gall Bladder", desc: "Laparoscopic cholecystectomy performed.", image: img9 },
  { id: 10, name: "Pancreatic Trauma", desc: "Management of pancreatic trauma.", image: img10 },
];

const Cases = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 600 });
    window.scrollTo(0, 0);
  }, [location]);

  const handleOpenModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  return (
    <section>
      <Helmet>
        <title>Cases - Dr. Manas Aggarwal</title>
      </Helmet>
      <BreadCrumbs headText="Cases" items={[{ label: 'Home', href: '/' }, { label: 'Cases' }]} />
      <section className="bg-gray-100 py-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <div key={caseItem.id} className="relative group p-4 flex justify-center">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-full h-full">
                  <div className="overflow-hidden flex items-center justify-center relative h-64">
                    <img src={caseItem.image} alt={caseItem.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all">
                      <FaPlus className="text-red-500 text-4xl opacity-0 group-hover:opacity-100 cursor-pointer" onClick={() => handleOpenModal(index)} />
                    </div>
                  </div>
                  <div className="p-4 bg-gray-800 text-white text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold">{caseItem.name}</h3>
                    <p className="text-sm">{caseItem.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {isModalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white rounded-lg p-4 max-w-3xl w-full relative">
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-lg font-bold bg-black text-white px-3 py-2 rounded-full">X</button>
            <img src={cases[selectedIndex].image} alt={cases[selectedIndex].name} className="w-full h-[80vh] object-cover rounded-t-lg" />
            <div className="p-4 text-center">
              <h3 className="text-2xl font-bold">{cases[selectedIndex].name}</h3>
              <p className="text-lg">{cases[selectedIndex].desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cases;