import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type EventTopic } from '../taxonomies/event_topic.js';
import { type EventType } from '../taxonomies/event_type.js';

/**
 * Generated by '@kontent-ai/model-generator@7.4.0'
 *
 * Event
 * Id: e97907ba-c5ae-53e6-bcb6-091bc89da3fa
 * Codename: event
 */
export type Event = IContentItem<{
    /**
     * Description (rich_text)
     * Required: false
     * Id: 2a7a8e84-274c-5339-afd2-4865b643fbb2
     * Codename: description
     */
    description: Elements.RichTextElement;

    /**
     * End Date (date_time)
     * Required: false
     * Id: a00fecf1-c7ff-5bed-8c40-2eba7460170a
     * Codename: end_date
     */
    end_date: Elements.DateTimeElement;

    /**
     * Event Topic (taxonomy)
     * Required: false
     * Id: 0da8a57d-a1d5-5b1e-9b6e-6d28dc1a6caa
     * Codename: event_topic
     */
    event_topic: Elements.TaxonomyElement<EventTopic>;

    /**
     * Event Type (taxonomy)
     * Required: false
     * Id: aa177aeb-9cd0-5a3a-a6b6-ca055fe2cae3
     * Codename: event_type
     */
    event_type: Elements.TaxonomyElement<EventType>;

    /**
     * Image (asset)
     * Required: false
     * Id: b13e797e-0e50-5ecb-aebc-05aa9e180864
     * Codename: image
     */
    image: Elements.AssetsElement;

    /**
     * Name (text)
     * Required: false
     * Id: 60502ad7-d552-5435-af46-6f4df84c3ddd
     * Codename: name
     */
    name: Elements.TextElement;

    /**
     * Start Date (date_time)
     * Required: false
     * Id: 114ba02d-f9dd-5555-a78d-6798d1a835a0
     * Codename: start_date
     */
    start_date: Elements.DateTimeElement;
}>;
