type DangerouslySetInnerHTML = {
  __html: string;
}

interface MarkdownProps {
  content: DangerouslySetInnerHTML;
}

const Markdown: React.FC<MarkdownProps> = ({
  content,
}: MarkdownProps) => (
  <article
    className="prose prose-xl m-auto"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={content}
  />
);

export default Markdown;
