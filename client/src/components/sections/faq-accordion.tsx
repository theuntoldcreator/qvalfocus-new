import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowDownRight } from "lucide-react";

const faqs = [
  {
    question: "What is the role of an HR manager?",
    answer: "An HR manager oversees the recruiting, interviewing, and hiring of new staff; consults with top executives on strategic planning; and serves as a link between an organization's management and its employees.",
  },
  {
    question: "What are the steps of recruitment process?",
    answer: "The recruitment process typically involves identifying the hiring need, creating a job description, sourcing candidates, screening and shortlisting, interviewing, reference checking, making an offer, and onboarding.",
  },
  {
    question: "How can I calculate my recruiting budget?",
    answer: "To calculate a recruiting budget, sum up all associated costs, including recruiter salaries, job board fees, advertising costs, applicant tracking system (ATS) subscriptions, background checks, and any agency fees. This total can be benchmarked against industry averages, often as a percentage of the new hire's salary.",
  },
  {
    question: "What would be included in recruiting package?",
    answer: "A recruiting package, also known as a compensation package, typically includes the base salary, potential bonuses, health insurance benefits, retirement plans, paid time off, and may also include stock options, professional development opportunities, and other perks.",
  },
  {
    question: "Why recruitment is important for companies?",
    answer: "Recruitment is vital for companies as it's the process of attracting and hiring the right talent. Effective recruitment ensures a company has the skilled and motivated workforce needed to achieve its goals, drive innovation, and maintain a positive company culture.",
  },
  {
    question: "How recruitment is different from selection?",
    answer: "Recruitment is the process of creating a pool of qualified candidates for a job. Selection is the process of choosing the best candidate from that pool through interviews, assessments, and other evaluation methods. Recruitment is about attracting, while selection is about choosing.",
  },
];

export function FaqAccordion() {
  return (
    <section className="py-20 bg-white dark:bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2 bg-primary/10 inline-block px-3 py-1 rounded">Know More About Recruitments</p>
          <h2 className="text-4xl md:text-5xl font-bold font-freigeist mt-4">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="group border-b data-[state=open]:border data-[state=open]:border-primary data-[state=open]:rounded-lg data-[state=open]:shadow-lg transition-all"
            >
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline p-6 [&>svg]:hidden justify-start">
                <div className="flex items-center w-full">
                  <div className="w-6 h-6 rounded-sm flex items-center justify-center mr-4 bg-primary group-data-[state=open]:bg-primary flex-shrink-0">
                    <ArrowDownRight className="h-4 w-4 text-white" />
                  </div>
                  <span className="flex-1">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 dark:text-slate-300 pb-6 px-6 pl-16">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}