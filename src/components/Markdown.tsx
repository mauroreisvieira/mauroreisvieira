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
    className="prose lg:prose-xl px-8 m-auto my-4 sm:my-16"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={content}
  />
);

export default Markdown;
