import ContactItem, { ContactItemProps } from '../ContactItem/ContactItem';

export type ContactItemsProps = {
    contactItems: ContactItemProps[];
};

export default function ContactItems({ contactItems }: ContactItemsProps) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {contactItems.map((contactItem) => (
                <ContactItem key={contactItem.name} {...contactItem} />
            ))}
        </div>
    );
}
