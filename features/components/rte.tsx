import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";

const content = `<h2 style="text-align: center"><strong>Tender Contract</strong></h2><p style="text-align: start"><strong>Parties:</strong> This Tender Contract ("Contract") is entered into between:</p><p style="text-align: start"><strong>[Your Company Name],</strong> a [Legal Entity Type], registered under the laws of [Jurisdiction], with its principal place of business at [Address] (referred to as the "Company"),</p><p style="text-align: start">and</p><p style="text-align: start"><strong>[Tendering Party's Name],</strong> a [Legal Entity Type], registered under the laws of [Jurisdiction], with its principal place of business at [Address] (referred to as the "Tendering Party").</p><p style="text-align: start"><strong>Background:</strong> The Company has issued a tender for [Project/Service/Product Description]. The Tendering Party has submitted a proposal in response to this tender.</p><p style="text-align: start"><strong>Agreement:</strong></p><ol><li><p><strong>Scope of Work:</strong> The Tendering Party agrees to perform the services/work as described in their proposal in response to the Company's tender for [Project/Service/Product Description].</p></li><li><p><strong>Terms and Conditions:</strong> The terms and conditions of the Tendering Party's proposal, as submitted in response to the tender, are hereby incorporated into this Contract by reference. Any conflicts between the terms and conditions of the proposal and this Contract shall be resolved in favor of this Contract.</p></li><li><p><strong>Price and Payment:</strong> The agreed-upon price for the services/work is [Amount in Currency]. Payment terms shall be as outlined in the proposal, and payments will be made in accordance with the agreed schedule.</p></li><li><p><strong>Duration:</strong> The duration of the contract shall be [Start Date] to [End Date], unless otherwise agreed upon by both parties in writing.</p></li><li><p><strong>Termination:</strong> Either party may terminate this Contract in accordance with the termination clause outlined in the proposal or as otherwise agreed upon in writing by both parties.</p></li><li><p><strong>Confidentiality:</strong> Both parties agree to keep any confidential information obtained during the course of this Contract confidential and not to disclose it to any third parties.</p></li><li><p><strong>Indemnification:</strong> The Tendering Party agrees to indemnify and hold the Company harmless from any claims, damages, losses, or expenses arising out of or related to the performance of the services/work.</p></li><li><p><strong>Governing Law and Jurisdiction:</strong> This Contract shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising out of or in connection with this Contract shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction].</p></li></ol><p style="text-align: start"><strong>Signatures:</strong> Both parties hereby agree to the terms and conditions outlined in this Contract.</p>`;

type RTEProps = {
  onChange?: any;
};
export function RTE(props: RTEProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content,
    onUpdate({ editor }) {
      // console.log(editor)
      // console.log(editor.getHTML());
      props.onChange(editor.getHTML())
    },
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 />
          <RichTextEditor.H2 />
          <RichTextEditor.H3 />
          <RichTextEditor.H4 />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Blockquote />
          <RichTextEditor.Hr />
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Subscript />
          <RichTextEditor.Superscript />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft />
          <RichTextEditor.AlignCenter />
          <RichTextEditor.AlignJustify />
          <RichTextEditor.AlignRight />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
