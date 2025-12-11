export type CompanyType = {
    CompanyId: number;
    CompanyName?: string;
    ContactMail?: string;
    Address?: string
    Logo?: string;
    Phone: string;
    QrUrl: string;
    SocialMedia?: SocialMedia;
    WorkingHours?:WorkingHours;

}

export type SocialMedia = {
    instagram?: string;
    x?: string;
    facebook?: string;
    youtube?: string;
}

export type WorkingHours = {
    Monday?: string;
    Tuesday?: string;
    Wednasday?: string;
    Thursday?: string;
    Friday?: string;
    Saturday?: string;
    Sunday?: string;
}