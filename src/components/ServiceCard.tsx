import Icon from '@/components/ui/icon';
import { CardTitle, BodyText } from '@/components/Typography';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description?: string;
  items?: string[];
  children?: ReactNode;
}

const ServiceCard = ({ icon, title, description, items, children }: ServiceCardProps) => {
  return (
    <div
      className="group rounded-2xl p-4 md:p-6 transition-all duration-300 hover:scale-[1.02]"
      style={{
        background: 'rgba(11,15,31,0.7)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2.5 md:p-3 rounded-xl" style={{ background: 'rgba(234,179,8,0.1)' }}>
          <Icon name={icon} size={28} style={{ color: '#eab308' }} />
        </div>
        <div className="flex-1">
          <CardTitle>{title}</CardTitle>
          {description && <BodyText className="mt-1">{description}</BodyText>}
        </div>
      </div>
      {items && (
        <ul className="space-y-2 ml-1">
          {items.map((item) => (
            <li key={item} className="font-montserrat text-white text-sm md:text-base flex items-center gap-2">
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#eab308' }} />
              {item}
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
};

export default ServiceCard;