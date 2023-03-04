import { useState } from 'react';
import { TAccordionOption } from '@/types/common';
import classNames from 'classnames/bind';
import { SelectArrow } from '@/components/icons';
import { textColors } from '@/consts/colors';
import styles from './Accordion.module.scss';

type TProps = {
  mode?: 'not-close' | 'auto-close';
  defaultOpen?: number;
  options: TAccordionOption[];
};

const Accordion = ({
  mode = 'not-close',
  options,
  defaultOpen = 0,
}: TProps) => {
  const cnb = classNames.bind(styles);
  const { primary, secondary } = textColors;
  const [clickedIndexes, setClickedIndexes] = useState([defaultOpen]);

  const toggleListItem = (index: number): void => {
    if (mode === 'not-close') {
      // add item to the state if it doesn't exist
      if (!clickedIndexes.includes(index)) {
        setClickedIndexes(oldArray => [...oldArray, index]);
        // delete item from the state
      } else {
        setClickedIndexes(oldArray => oldArray.filter(item => item !== index));
      }

      // auto-close
    } else {
      if (!clickedIndexes.includes(index)) {
        setClickedIndexes([index]);
      } else {
        setClickedIndexes([]);
      }
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
