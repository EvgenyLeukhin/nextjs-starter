import { useState } from 'react';
import { TAccordionOption } from '@/types/common';
import classNames from 'classnames/bind';
import { SelectArrow } from '@/components/icons';
import { textColors } from '@/consts/colors';
import styles from './Accordion.module.scss';

type TProps = {
  options: TAccordionOption[];
};

const Accordion = ({ options }: TProps) => {
  const cnb = classNames.bind(styles);
  const { primary, secondary } = textColors;
  const [clickedIndexes, setClickedIndexes] = useState([0]);

  const toggleListItem = (index: number): void => {
    // add item to the state if it doesn't exist
    if (!clickedIndexes.includes(index)) {
      setClickedIndexes(oldArray => [...oldArray, index]);
      // delete item from the state
    } else {
      setClickedIndexes(oldArray => oldArray.filter(item => item !== index));
    }
  };

  return (
    <div className={styles.Accordion}>
      <ul className={styles.Accordion__list}>
        {options.map((option: TAccordionOption, index) => {
          const { title, content } = option;
          const isOpenItem = clickedIndexes.includes(index);

          return (
            <li
              key={index}
              className={styles.Accordion__option}
              onClick={() => toggleListItem(index)}
            >
              <h3 className={styles.Accordion__optionTitle}>
                <span>{title}</span>

                {/* toggle icon */}
                <i
                  className={cnb(
                    styles.Accordion__arrow,
                    isOpenItem && styles.isOpen,
                  )}
                >
                  <SelectArrow
                    isOpen={isOpenItem}
                    fill={isOpenItem ? primary : secondary}
                  />
                </i>
              </h3>

              {isOpenItem && (
                <div
                  className={cnb(
                    styles.Accordion__optionContent,
                    isOpenItem && 'animate__animated animate__fadeIn',
                  )}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;

// const Accordion = ({ options }: TProps) => {
//   const [clickedIndexes, setClickedIndexes] = useState([0]);

//   const toggleListItem = (index: number): void => {
//     // add item to the state if it doesn't exist
//     if (!clickedIndexes.includes(index)) {
//       setClickedIndexes(oldArray => [...oldArray, index]);
//       // delete item from the state
//     } else {
//       setClickedIndexes(oldArray => oldArray.filter(item => item !== index));
//     }
//   };

//   return (
//     <ul className={styles.LmsStack__list}>
//       {lmsStack.map((stack: TLmsStack, index) => {
//         const { techTitle, techStack } = stack;
//         const isOpenItem = clickedIndexes.includes(index);

//         // tech-list items
//         const techList = techStack.map((item, index) => {
//           return <li key={index}>{`#${item}`}</li>;
//         });

//         return (
//           <li
//             key={index}
//             onClick={() => toggleListItem(index)}
//             className={cnb(isOpenItem && styles.isOpen)}
//           >
//             <h3>
//               {/* toggle icon */}
//               <i
//                 className={cnb(
//                   styles.LmsStack__toggleIcon,
//                   isOpenItem && styles.isOpen,
//                 )}
//               />
//               {techTitle}
//             </h3>

//             {/* tech-list */}
//             {isOpenItem && (
//               <Fade>
//                 <ul className={styles.LmsStack__techList}>{techList}</ul>
//               </Fade>
//             )}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default Accordion;
