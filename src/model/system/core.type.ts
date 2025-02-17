
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

import type { IContentItem, IContentItemElements } from '@kontent-ai/delivery-sdk';
import type {
    ContentTypeCodenames,
    CollectionCodenames,
    LanguageCodenames,
    WorkflowCodenames,
    WorkflowStepCodenames
} from './delivery.codenames.ts';

/**
 * Core content type used in favor of generic 'IContentItem'
 */
export type CoreContentType<
    TElements extends IContentItemElements = IContentItemElements,
    TContentTypeCodename extends ContentTypeCodenames = ContentTypeCodenames
> = IContentItem<TElements, TContentTypeCodename, LanguageCodenames, CollectionCodenames, WorkflowCodenames, WorkflowStepCodenames>;
