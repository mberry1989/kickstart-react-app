import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@7.4.0'
 *
 * Video
 * Id: 5b2003c5-fe38-5a6e-a21b-a7b2f5ee0ddb
 * Codename: video
 */
export type Video = IContentItem<{
    /**
     * Autoplay (multiple_choice)
     * Required: false
     * Id: 21250a1b-2eff-52cc-89b2-a44a2bab8b93
     * Codename: autoplay
     */
    autoplay: Elements.MultipleChoiceElement;

    /**
     * Caption (text)
     * Required: false
     * Id: c3054bab-604f-5d9d-bf1f-06c87cd5b15e
     * Codename: caption
     */
    caption: Elements.TextElement;

    /**
     * Description (text)
     * Required: false
     * Id: c454e463-2c85-57a2-aec8-e399a392b229
     * Codename: description
     */
    description: Elements.TextElement;

    /**
     * Headline (text)
     * Required: false
     * Id: 0bd216b2-4975-50f9-832e-6e2c6c5d1bf9
     * Codename: headline
     */
    headline: Elements.TextElement;

    /**
     * Video Link (text)
     * Required: false
     * Id: 09573446-747b-572e-af77-9cbf359bcdad
     * Codename: video_link
     */
    video_link: Elements.TextElement;
}>;
