import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: "What are blood tests?",
    answer: "Blood tests are used to measure or examine cells, chemicals, proteins, or other substances in the blood. Blood testing, also known as blood work, is one of the most common types of lab tests. Blood work is often included as part of a regular checkup."
  },
  {
    question: "What are the uses of blood tests?",
    answer: `Blood tests are used to:
      - Help diagnose certain diseases and conditions
      - Monitor a chronic disease or condition, such as diabetes or high cholesterol
      - Find out if treatment for a disease is working
      - Check how well your organs are working. Your organs include your liver, kidneys, heart, and thyroid.
      - Help diagnose bleeding or clotting disorders
      - Find out if your immune system is having trouble fighting infections`
  },
  {
    question: "What happens during a blood test?",
    answer: "A health care provider will need to take a sample of your blood. This is also called a blood draw. When a blood draw is taken from a vein, it's known as venipuncture; It is the most common type of blood collection."
  },
  {
    question: "What beforehand preparations need to be done for the test?",
    answer: "Most blood tests do not require any special preparations. For some tests like lipid or glucose tests you may need to fast (not eat or drink anything except water) for around 8 to 12 hours. Your doctor will provide all the instructions, in case any special instructions are to be followed before the test."
  },
  {
    question: "Are there any associated risks with a blood test?",
    answer: `There is very minimal risk with having a finger prick test or venipuncture. During venipuncture, you may have slight pain or bruising at the spot where the needle was put in, but most symptoms go away quickly.
      Collecting blood from an artery is more painful than collecting from a vein, but complications are rare. You may have some bleeding, bruising, or soreness at the spot where the needle was put in. Also, you should avoid lifting heavy objects for 24 hours after the test.`
  },
  {
    question: "What else do I need to know about blood test?",
    answer: "Blood testing provides important information about your health; however, it does not always give sufficient information about your condition. If you had a blood work, you may need other types of tests before your doctor can make a definitive diagnosis."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-11/12 mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b">
          <button
            className="w-full text-left focus:outline-none py-2 text-lg font-medium flex justify-between items-center"
            onClick={() => handleToggle(index)}
          >
            {faq.question}
            {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}
          >
            <div className={`p-4 text-gray-700 whitespace-pre-line transform ${activeIndex === index ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out`}>
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
