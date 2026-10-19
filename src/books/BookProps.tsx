interface VolumeInfo {
    title: string;
    subtitle?: string;
    authors: string[];
    publisher?: string;
    publishedDate: string;
    description?: string;
    industryIdentifiers: IndustryIdentifier[];
    readingModes: ReadingModes;
    pageCount?: number;
    printType: string;
    categories?: string[];
    averageRating?: number;
    ratingsCount?: number;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary?: PanelizationSummary;
    imageLinks?: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

interface PanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}

interface ReadingModes {
    text: boolean;
    image: boolean;
}

interface IndustryIdentifier {
    type: string;
    identifier: string;
}

export type { VolumeInfo }