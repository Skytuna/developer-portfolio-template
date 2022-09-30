import { contactItems } from '@data/contactPage';
import ContactItems from './ContactItems';

export default function ContactContent() {
    return (
        <div>
            <ContactItems contactItems={contactItems} />
        </div>
    );
}
