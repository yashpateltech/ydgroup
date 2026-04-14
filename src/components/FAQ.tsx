import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "Where can I read the details of the YDGROUPS free account and pay-as-you-go pricing?",
      a: "You can find detailed pricing information on our pricing page, which breaks down costs for each service and explains the benefits of the free account."
    },
    {
      q: "What does it cost to start?",
      a: "Starting with a YDGROUPS free account costs nothing. You get USD 200 credit to explore any service for 30 days, plus many services that are free for 12 months or always free."
    },
    {
      q: "How do I get free services?",
      a: "Simply sign up for a YDGROUPS account. New customers automatically receive the free services and credit upon identity verification."
    },
    {
      q: "How do free services work with pay-as-you-go pricing?",
      a: "With pay-as-you-go, you only pay for what you use beyond the free monthly amounts. There are no upfront costs or termination fees."
    },
    {
      q: "Can the YDGROUPS free account be used for production or only for development?",
      a: "The free account is ideal for both development and small-scale production testing. As your needs grow, you can seamlessly transition to pay-as-you-go."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Frequently asked questions</h2>
          <div className="flex gap-4">
            <button className="text-sm font-medium text-[#0078d4] hover:underline">Expand all</button>
            <button className="text-sm font-medium text-[#0078d4] hover:underline">Collapse all</button>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full border-t">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b">
              <AccordionTrigger className="text-left hover:no-underline hover:bg-gray-50 px-4 py-6 text-sm md:text-base font-semibold text-gray-700">
                <span className="flex gap-4">
                  <span className="text-[#0078d4] opacity-50">{(i + 1).toString().padStart(2, '0')}/</span>
                  {faq.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-14 py-4 text-gray-600 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
