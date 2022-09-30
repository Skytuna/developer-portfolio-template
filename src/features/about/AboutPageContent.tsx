import { descriptions, infoItems, name, profilePhotoPath } from '@data/aboutPage';
import Info from './Info';
import Descriptions from './Descriptions/Descriptions';
import ProfilePhoto from './ProfilePhoto';

export default function AboutPageContent() {
    return (
        <section className='flex flex-col gap-12'>
            <div className='flex flex-col md:flex-row items-center md:items-stretch gap-12'>
                <ProfilePhoto profilePhotoPath={profilePhotoPath} />
                <Info name={name} infoItems={infoItems} />
            </div>
            <Descriptions descriptions={descriptions} />
        </section>
    );
}
