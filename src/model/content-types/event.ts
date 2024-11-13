
/** 
* This file has been auto-generated by '@kontent-ai/model-generator@8.0.0-11'.
* 
* (c) Kontent.ai
*  
* -------------------------------------------------------------------------------
* 
* Project: Kontent.ai Kickstart
* Environment: Production
* Id: 7cf79e13-fcde-01b6-f508-14ca05d794b8
* 
* -------------------------------------------------------------------------------
**/

import type { Elements } from '@kontent-ai/delivery-sdk';
import type { CoreContentType } from '../system/index.ts';
import type { EventType, Topics } from '../taxonomies/index.ts';

/**
 * Event
 *
 * Id: 446d4c1e-5049-4e45-ae1c-4284e660fe68
 * Codename: event
 */
export type Event = CoreContentType<
    {
        /**
         * Name
         *
         * Type: text
         * Required: false
         * Codename: name
         * Id: 42ee07e2-3b03-4795-9843-da0731645a20
         */
        readonly name: Elements.TextElement;
        /**
         * Description
         *
         * Type: rich_text
         * Required: false
         * Codename: description
         * Id: a30856f6-4700-48ec-b009-f1b24f4b41c2
         */
        readonly description: Elements.RichTextElement<CoreContentType>;
        /**
         * Image
         *
         * Type: asset
         * Required: false
         * Codename: image
         * Id: 3e1b3668-0605-4f19-a689-a088448d49c0
         */
        readonly image: Elements.AssetsElement;
        /**
         * Start date
         *
         * Type: date_time
         * Required: false
         * Codename: start_date
         * Id: 980d800f-cd12-43a0-ab4c-5c0e50cea0b9
         */
        readonly start_date: Elements.DateTimeElement;
        /**
         * End Date
         *
         * Type: date_time
         * Required: false
         * Codename: end_date
         * Id: c33d2553-e161-4b2f-81e2-43f06c945f08
         */
        readonly end_date: Elements.DateTimeElement;
        /**
         * Event Type
         *
         * Type: taxonomy
         * Required: false
         * Codename: event_type
         * Id: b36909a0-b8f2-4f09-9676-795ea5ce49f7
         */
        readonly event_type: Elements.TaxonomyElement<EventType, 'event_type'>;
        /**
         * Topics
         *
         * Type: taxonomy
         * Required: false
         * Codename: event_topic
         * Id: 6ab84c72-0db5-4c09-88f8-d9bdefbc9849
         */
        readonly event_topic: Elements.TaxonomyElement<Topics, 'event_topic'>;
    },
    'event'
>;

/**
 * Type representing all available element codenames for Event
 */
export type EventElementCodenames = 'name' | 'description' | 'image' | 'start_date' | 'end_date' | 'event_type' | 'event_topic';

/**
 * Type guard for Event
 */
export function isEvent(item: CoreContentType | undefined | null): item is Event {
    return item?.system?.type === 'event';
}
