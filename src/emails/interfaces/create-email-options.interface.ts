import { ReactElement } from 'react';
import { PostOptions } from '../../common/interfaces';

interface CreateEmailBaseOptions {
  /**
   * Filename and content of attachments (max 40mb per email)
   *
   * @link https://resend.com/api-reference/emails/send-email#body-parameters
   */
  attachments?: Attachment[];
  /**
   * Blind carbon copy recipient email address. For multiple addresses, send as an array of strings.
   *
   * @link https://resend.com/api-reference/emails/send-email#body-parameters
   */
  bcc?: string | string[];
  /**
   * Carbon copy recipient email address. For multiple addresses, send as an array of strings.
   *
   * @link https://resend.com/api-reference/emails/send-email#body-parameters
   */
  cc?: string | string[];
  /**
   * Sender email address. To include a friendly name, use the format `"Your Name <sender@domain.com>"`
   *
   * @link https://resend.com/api-reference/emails/send-email#body-parameters
   */
  from: string;
  /**
   * Custom headers to add to the email.
   *
   * @link https://resend.com/api-reference/emails/send-email#body-parameters
   */
  headers?: Record<string, string>;
  /**
   * The React component used to write the message.
   *
   * @link https://resend.com/api-reference/emails/send-email#body-parameters
   */
  react?: ReactElement | null;
  /**
   * Reply-to email address. For multiple addresses, send as an array of strings.
   *
   * @link https://resend.com/api-reference/emails/send-email#body-parameters
   */
  reply_to?: string | string[];
  /**
   * Email subject.
   *
   * @link https://resend.com/api-reference/emails/send-email#body-parameters
   */
  subject: string;
  /**
   * Email tags
   *
   * @link https://resend.com/api-reference/emails/send-email#body-parameters
   */
  tags?: Tag[];
  /**
   * Recipient email address. For multiple addresses, send as an array of strings. Max 50.
   *
   * @link https://resend.com/api-reference/emails/send-email#body-parameters
   */
  to: string | string[];
}

interface CreateEmailWithHtmlOptions extends CreateEmailBaseOptions {
  /** The HTML version of the message. */
  html: string;
  /** The plain text version of the message. */
  text?: string;
}

interface CreateEmailWithTextOptions extends CreateEmailBaseOptions {
  /** The HTML version of the message. */
  html?: string;
  /** The plain text version of the message. */
  text: string;
}

export type CreateEmailOptions =
  | CreateEmailWithHtmlOptions
  | CreateEmailWithTextOptions;

export interface CreateEmailRequestOptions extends PostOptions {}

export interface CreateEmailResponse {
  /** The ID of the newly created email. */
  id: string;
}

interface Attachment {
  /** Content of an attached file. */
  content?: string | Buffer;
  /** Name of attached file. */
  filename?: string | false | undefined;
  /** Path where the attachment file is hosted */
  path?: string;
}

export type Tag = {
  /**
   * The name of the email tag. It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-). It can contain no more than 256 characters.
   */
  name: string;
  /**
   * The value of the email tag. It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-). It can contain no more than 256 characters.
   */
  value: string;
};
