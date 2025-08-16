import { ServiceCard } from "./service-card";

const serviceCards = [
  {
    title: "Staffings",
    link: "/services/staffing-solution",
    images: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Projects",
    link: "/services/project-solution",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497032628192-86f99d79d59e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Life Sciences",
    link: "/industries/life-sciences",
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581093458791-9a6685b3599a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1628891433833-778f8840155a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "IT",
    link: "/industries/information-technology",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  }
];

export function Services() {
  return (
    <section className="py-12 bg-slate-50 -mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}