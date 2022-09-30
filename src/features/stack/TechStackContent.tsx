import { techStack } from '@data/techStackPage';
import TechStackDetails from './TechStackDetails';

export default function TechStackContent() {
    return (
        <div>
            <TechStackDetails techStacks={techStack} />
        </div>
    );
}
