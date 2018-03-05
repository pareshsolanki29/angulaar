
import { Social } from './social.interface';
import { Changelog } from './changelog.interface';
import { Updates } from './updates.interface';

export interface Portfolio {
    firstName: string;
    middleName: string;
    lastName: string;
    subHeading?: string;
    socialMedia: Social[];
    introduction: string;
    changeLog: Changelog[];
    updates: Updates[];
    speakerBio: string;
}