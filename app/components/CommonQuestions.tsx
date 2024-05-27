import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import {questions} from "../components/data/CommonQuestionsData"

export const CommonQuestions = () => {
 
  return questions.map((ques, ind) => (
    <Accordion className="text-grey text-2xl" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-navy text-2xl text-left">{ques.question}</AccordionTrigger>
        <AccordionContent className="text-navy text-2xl">{ques.answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  ));
};
