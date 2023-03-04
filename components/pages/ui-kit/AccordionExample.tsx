import { Accordion } from '@/components/ui';
import accordionOptions from '@/consts/accordionOptions';

export default function AccordionExample() {
  return (
    <section>
      <h2>Accordion</h2>
      <Accordion options={accordionOptions} />
    </section>
  );
}
